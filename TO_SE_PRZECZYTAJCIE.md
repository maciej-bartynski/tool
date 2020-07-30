Mięsko jest w: ./devtools/tool oraz w ./devtools/crazyTool

w "tool" jest jak nadpisać document.createElement ja tam nadpisuę aby konsolować węzeł dotknięty przez Reacta.
w "crazyTool" jest mnóstwo gównianego kodu który służy konsolowaniu informacji i podkreślaniu na czerwono 
doktniętych przez React tagów, ale

- w funkcji stringifyNodeShallow jest klue jak porównywać węzły DOM jako stringi (płytko, ze wszystkimi atrybutami, ale bez dzieci)
- w funkcji stringifyNodeShallow jest zakomentowane jak porównywać węzły DOM w sposób głęboki (razem z dziecmi). Tu można robić to rekursywnie po children, ale też po prostu po innerHtml, albo po tym i po tym.

Wykonsolujcie se React.createElement oraz ReactDOM.render:

console.log(React.createElement)
console.log(ReactDOM.render)

i wtedy po nitce do kłębka dojdziecie do każdej metody ktora react dotyka DOM. Główne to document.createElement (do tworzenia węzłów) oraz Element.setAttribute (do modyfikowania istniejacych attrybutów)

## UWAGA
Jak pewnie Rafi wie, NODE niezależnie od frameworka najpierw jest tworzony (craeteElement) a potem rozbudowywany o klasy, atrybuty itp.
dlatego nie mozna zrobić porównana nowo utworzonego NODE z poprzednio utworzonym NODE na funkcji nadpisujacej document.createElement, bo na tej funkcji
ten nowy NODE jeszcze nie ma atrybutów. Dlatego funkcja porównująca odpalana jest asynchronicznie (setTimeout z czasem zero) aby był taki flow:

React używa document.createElement -> my se nadpisujemy createElement naszym customCreateElement -> na customCreateElement odpalamy document.createElement, konsolujemy element utworzony, robimy tam co chcemy z nim, oraz odpalamy ASYNC (np. jako setTimeout z czasem zero) funkcję porównującą węzły np. jakiś compareElements i przekazujemy mu element -> zwracamy element z naszego customCreateElement -> teraz react operuje na zwróconym elemencie, dodając mu np. atrybuty, klasy, bajery -> dopiero po zwolnieniu stosu przez reacta, odpala sie nasz compareElements (bo był async) i on już teraz zawiera nasz element ze wszystkimi attrybutami dodanymi przez reacta.
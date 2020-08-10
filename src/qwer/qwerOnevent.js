const qwerTool = (_, documentCreateElement = document.createElement) => {

    const createdItemsHistory = {};
    let oneventItemsHistory = {};
    const createdItemsHistoryPresentation = {};
    let oneventItemsHistoryPresentation = {};

    const stringifyItem = (element) => {
        let stringifiedElement = "";
        stringifiedElement += `<${element.localName} `;
        Array.from(element.attributes).forEach(attr => {
            stringifiedElement += `["${attr.name}" = "${attr.value}"]`;
        });
        stringifiedElement += ` />`;
        return stringifiedElement;
    }

    const compareItems = (string, node) => {
        createdItemsHistory[string] = createdItemsHistory[string] ? ++createdItemsHistory[string] : 1;
        createdItemsHistoryPresentation[string] = [
            createdItemsHistory[string],
            node
        ];

        window.creationHistory = createdItemsHistoryPresentation;

        oneventItemsHistory[string] = oneventItemsHistory[string] ? ++oneventItemsHistory[string] : 1;
        oneventItemsHistoryPresentation[string] = [
            oneventItemsHistory[string],
            node
        ];
    }

    const prepareConsolePresentation = () => {
        const presentation = {};

        Object.keys(oneventItemsHistoryPresentation).forEach((string) => {
            const amount = oneventItemsHistoryPresentation[string][0];
            const node = oneventItemsHistoryPresentation[string][1];
            presentation[amount] = presentation[amount] ? [...presentation[amount], node] : [node]
        }) 

        console.log(presentation);
    }

    const handleCreationHistory = (createdElement) => {
        setTimeout(() => {
            compareItems(stringifyItem(createdElement), createdElement);
        }, 0)
    }

    let timer = null;
    const handleCreationHistoryPresentation = () => {
        clearTimeout(timer);
        timer = setTimeout(() => {
            prepareConsolePresentation();
            oneventItemsHistoryPresentation = {};
            oneventItemsHistory = {};
        }, 500)
    }

    document.createElement = function () {
        const createdElement = documentCreateElement.apply(this, arguments);
        handleCreationHistory(createdElement);
        handleCreationHistoryPresentation();
        return createdElement;
    };
}

const qwerInfo = () => {
    console.log('You now work in QWER mode (onevent)');
    const qwerInfo = document.createElement('div');
    qwerInfo.innerText = "You now work in QWER mode (onevent)";
    qwerInfo.style.width = "100%";
    qwerInfo.style.padding = "5px 0";
    qwerInfo.style.textAlign = 'center';
    qwerInfo.style.backgroundColor = 'red';
    qwerInfo.style.color = 'white';
    qwerInfo.style.fontSize = '11px';
    qwerInfo.style.position = 'fixed';
    qwerInfo.style.bottom = 0;
    qwerInfo.style.left = 0;
    document.body.appendChild(qwerInfo);
}

export default () => {
    qwerInfo();
    qwerTool();
}

/*******
stringifyNodeDeep:
const obj ={}
obj.children = [];
obj.innerHTML = element.innerHTML;
obj.innerText = element.innerText;
Array.from(element.children).forEach(c => {
    obj.children.push(stringifyNodeShallow(c));
});
***********************/

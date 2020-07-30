
const equalElementsCount = {};
const equalElementsReferences = {};

let consoleTimer = null;
const consoleInformation = () => {
    clearTimeout(consoleTimer)
    consoleTimer = setTimeout(() => {
        /** DLACZEGO TIMEOUT? sprawdz w TO_SE_PRZECZYTAJCIE.md */
        let counter = 0;
        const infoObject = {};
        for (const key in equalElementsCount) {
            const amount = equalElementsCount[key];
            infoObject[`Created ${amount} times`] = equalElementsReferences[key];
            counter++;
        }
        console.log('Created equal nodes: ', counter - 1);
        console.log('Check:', infoObject);
    }, 100)
}

const stringifyNodeShallow = element => {
    let obj = {};
    obj.name = element.localName;
    obj.attributes = [];

    /******* 
    stringifyNodeDeep:
    
    obj.children = [];
    obj.innerHTML = element.innerHTML;
    obj.innerText = element.innerText;
    Array.from(element.children).forEach(c => {
        obj.children.push(stringifyNodeShallow(c));
    });
    ***********************/

    Array.from(element.attributes).forEach(a => {
        obj.attributes.push({ name: a.name, value: a.value });
    });
    return JSON.stringify(obj);
}

const countCreationTimes = (el) => {
    setTimeout(() => {
        const stringifiedNode = stringifyNodeShallow(el);
        equalElementsCount[stringifiedNode] = typeof equalElementsCount[stringifiedNode] === 'number'
            ? equalElementsCount[stringifiedNode] + 1
            : 1;
        equalElementsReferences[stringifiedNode] = el;
    })
}

export const crazyTool = (_, documentCreateElement = document.createElement) => {
    document.createElement = function () {
        const createdElement = documentCreateElement.apply(this, arguments);
        createdElement.style.outline = "red dotted 5px";
        countCreationTimes(createdElement);
        consoleInformation();
        setTimeout(() => {
            return (createdElement ? createdElement.style.outline = 'none' : null);
        }, 1000)
        return createdElement;
    };
}

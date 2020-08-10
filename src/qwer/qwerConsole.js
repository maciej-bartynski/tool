const qwerTool = (_, documentCreateElement = document.createElement) => {
    document.createElement = function () {
        const createdElement = documentCreateElement.apply(this, arguments);
        console.log('[QWER] created: ', createdElement);
        return createdElement;
    };
}

const qwerInfo = () => {
    console.log('You now work in QWER mode (console)');
    const qwerInfo = document.createElement('div');
    qwerInfo.innerText = "You now work in QWER mode (console)";
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


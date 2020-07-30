export const tool = (_, documentCreateElement = document.createElement) => {
    document.createElement = function () {
        const createdElement = documentCreateElement.apply(this, arguments);
        console.log('Wykreowany: ', createdElement);
        return createdElement;
    };
}

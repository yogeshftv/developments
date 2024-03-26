// React too evaluates & creates the element in similar approach using its own methods
function customRender(reactElement, container) {
    const domElement = document.createElement(reactElement.type);
    domElement.textContent = reactElement.children;

    for (const prop in reactElement.props) {
        domElement.setAttribute(prop, reactElement.props[prop]);
    }

    container.appendChild(domElement);
};

// React creates similar tree graph (behind the scene) for each of the elements being created
const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'Click to visit google'
};

const root = document.getElementById("root");
customRender(reactElement, root);
// Custom React

const customRender = (reactElement, container)=>{
    /*
    const domEle = document.createElement(reactElement.type)
    domEle.innerHTML = reactElement.childNode
    domEle.setAttribute('href', reactElement.props.href)
    domEle.setAttribute('target', reactElement.props.target)
    container.appendChild(domEle)
    */
   
   const domEle = document.createElement(reactElement.type)
   domEle.innerHTML = reactElement.childNode
   for(const prop in reactElement.props){
       if(prop === 'childNode') continue;

       domEle.setAttribute('prop', reactElement.props[prop])
   }
   container.appendChild(domEle);
}

const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    childNode: 'Click me'
}


const mainContainer = document.getElementById('root');

customRender(reactElement, mainContainer);
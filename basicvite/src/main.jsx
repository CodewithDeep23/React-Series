import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// We also create a function in this compenent
function NewReact(){
    return(
        <div>
            <h1>
                Hello, this is a NewReact
            </h1>
        </div>
    )
}

// Ok, What happened when we add custom react in this compenent
// const reactElement = {
//     type: 'a',
//     props: {
//         href: 'https://google.com',
//         target: '_blank'
//     },
//     childNode: 'Click me'
// }

const reactElement = React.createElement(
    'a',
    {href: 'https://google.com', target: '_blank'},
    'Visit google'
)

// BTS: there are many algo working



ReactDOM.createRoot(document.getElementById('root')).render(

    // reactElement
    <>
    <App/>
    <NewReact/>
    </>

    // reactElement // some error, because this is object not a function and also there is no chance that in my object and react have same prop
)

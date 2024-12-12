import Practice from './new'

function App() {

  const username = "Dsk23lite"
  return (
    // <h1>Hello Vite react</h1>
    // <Practice/>
    <>
    <Practice/>
    <h2>hello world {username}</h2>
    </>
  )

  // {username} in h2: is a evaluted expression means: This is a final outcome of Js
}

export default App

// Note: You only return one tag: Use <> </>
import { useState } from "react"


function App() {
  const [color, setColor] = useState("#000C66");

  return (
    <div className="w-full h-screen duration-500" style={{backgroundColor: color}}>
      <div className="flex fixed justify-center flex-wrap bottom-10 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center bg-white px-3 py-2 rounded-xl gap-3">
          <button onClick={()=>setColor("#84a98c")} className="outline-none px-4 py-1 rounded-xl text-white shadow-lg" style={{backgroundColor: "#84a98c"}}>Color1</button>
          <button onClick={()=>setColor("#ddb892")} className="outline-none px-4 py-1 rounded-xl text-white shadow-lg" style={{backgroundColor: "#ddb892"}}>Color2</button>
          <button onClick={()=>setColor("#354f52")} className="outline-none px-4 py-1 rounded-xl text-white shadow-lg" style={{backgroundColor: "#354f52"}}>Color3</button>
          <button onClick={()=>setColor("#98c1d9")} className="outline-none px-4 py-1 rounded-xl text-white shadow-lg" style={{backgroundColor: "#98c1d9"}}>Color4</button>
          <button onClick={()=>setColor("#74546a")} className="outline-none px-4 py-1 rounded-xl text-white shadow-lg" style={{backgroundColor: "#74546a"}}>Color5</button>
          <button onClick={()=>setColor("#0b5351")} className="outline-none px-4 py-1 rounded-xl text-white shadow-lg" style={{backgroundColor: "#0b5351"}}>Color6</button>
          <button onClick={()=>setColor("#00a9a5")} className="outline-none px-4 py-1 rounded-xl text-white shadow-lg" style={{backgroundColor: "#00a9a5"}}>Color7</button>
          <button onClick={()=>setColor("#488286")} className="outline-none px-4 py-1 rounded-xl text-white shadow-lg" style={{backgroundColor: "#488286"}}>Color8</button>
        </div>
      </div>
      
    </div>
  )
}

export default App

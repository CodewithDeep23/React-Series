import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/card";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="bg-blue-500 text-white p-5 rounded-lg">Tailwind Test</h1>
      <div className="flex gap-9">
        <Card Username='CodewithAnkit' btnText='Click me' btncolor='text-red-800'/>
        <Card Username='CodingView' btnText='Visit me'/>
      </div>
    </>
  );
}

export default App;

import React, { useState } from "react";
//import './App.css'
function App(p) //p is parameter
{
  const [count,setCount]=useState(0);

  function handleClick1()
  {
    setCount((ps) => ps+1); //ps->previous state eg 98->ps = ps+1 -> 99 
  }
  function handleClick2()
  {
    setCount((ps) => ps-1);
  }

  return (
    <section className="fyc bg1">
    <div className="fxc" style={{border: "1px solid"}}>
      <button onClick={handleClick1}>{p.x}</button>
      <span style={{width:"3rem",textAlign:"center"}}>{count}</span>
      <button onClick={handleClick2}>{p.y}</button>
    </div>
    </section>
  );
}
export default App;
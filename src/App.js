import React, { useState, useEffect } from "react";


function App() {
  const [isCounted, setIsCounted] = useState(0)
  const [isTyped, setIsTyped] = useState("")

  useEffect(() => {
    document.title = isTyped;
  }, [isTyped]);

  useEffect(() => { 
    setTimeout(() => setIsCounted(0,  console.log("I will appear after 5 seconds")), 5000);
   
  },[]);

  console.log("Component rendering");
 

  function handleClick(){
    setIsCounted(isCounted => isCounted +1)
  }

  function handleType(e){
    setIsTyped(e.target.value)
    console.log(e.target.value)

  }


  return (
    <div>
      <button onClick={handleClick}>I've been clicked{isCounted} times</button>
      <input onChange={handleType} type="text" placeholder="Type away..." value={isTyped} />
    </div>
  )
}

export default App;

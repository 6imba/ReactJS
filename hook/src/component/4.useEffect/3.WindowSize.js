import React, { useEffect, useState } from 'react'

const WindowScreenComponent = () => {

    const [screenSize,setScreenSize] = useState(`${window.innerWidth} X ${window.innerHeight}`)

    const stateHandler = () => setScreenSize(`${window.innerWidth} X ${window.innerHeight}`);
    
    window.addEventListener('resize', stateHandler);

    useEffect(() => {
        console.log("Browser window screen resized.")
        // window.removeEventListener("resize",stateHandler) //useEffect CleanUp Function....
    })

  return (
    <div style={{color:"white", background:"black", height:"100vh", textAlign:"center"}}  >
        <h1>Screen size is {screenSize} px.</h1>
    </div>
  )

}

export default WindowScreenComponent
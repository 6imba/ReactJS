import { useState } from "react"

const Event = () => {
    const [bgColor, setBgColor] = useState()
    const green = () => {
        setBgColor("#7FFF00")
    }
    const red = () => {
        setBgColor("#8B0000")
    }
    return(
        <button onClick={green} onDoubleClick={red} style={{backgroundColor:bgColor}}>Make BG Green</button>
    )
}

export default Event;
import { useState } from "react";
import AutoClock from "./AutoClock";

const Clock = () => {
    let initialTime = new Date().toLocaleTimeString();
    const [newTime, setTime] = useState(initialTime)
    const getTime = () => {
        setTime(new Date().toLocaleTimeString())
    }
    return(
        <div>
            <p>Time: {newTime}</p>
            <button onClick={getTime}>Get Time</button>
            <AutoClock/>
        </div>
    )
}
export default Clock;

// Here in this component state changes in when we click button. So this components gets rendered with new state_value when we click button.
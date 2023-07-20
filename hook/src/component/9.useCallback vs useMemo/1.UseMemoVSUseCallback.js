import React, { useState, useMemo, useCallback } from 'react'

const UseCallbackVSUseMemo_1 = () => {
    console.log("----------------------")
    console.log("Parent render.")

    const [doubleNumb,setDouble] = useState(1)
    const [bgColor,setBgColor] = useState(false)

    const alertMsg = () => alert(doubleNumb)
    const x = useMemo(() => alertMsg(), [doubleNumb])
    const y = useCallback(() => alertMsg(), [doubleNumb])
    console.log(x)
    console.log(y)

    return (
        <>
            <div style={{width:"165px", background: bgColor?"grey":"white"}}>
                <button onClick={()=>{setDouble(doubleNumb*2)}}>Double Number</button>
                <ListComponent doubleNumb={doubleNumb}/>
            </div>
        </>
    )
}

const ListComponent = React.memo((props) => {
    console.log("List render.")
    return <p>{props.doubleNumb}</p>
})

export default UseCallbackVSUseMemo_1
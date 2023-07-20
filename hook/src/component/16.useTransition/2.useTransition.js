import { useState, useTransition } from "react";

const UseTransition_2 = () => {

    const [isPending, startTransition] = useTransition()

    const [input,setInput] = useState("")
    const [list,setList] = useState([])

    const handler = (e) => {
        setInput(e.target.value)
        startTransition(()=>{
            let l = []
            for(let i=0; i<6000; i++){
                l.push(e.target.value)
                console.log("pushing into array")
            }
            setList(l)
        })
    }

    return (
        <>
        <input type="text"  value={input} onChange={handler}/>
        {isPending ? <p>Loading...</p> : list.map((item,index)=> <p key={index}>{item}</p> )}
        </>
    )
}

export default UseTransition_2

// # Finally, lets see how to use useTransition hook. 

// const [isPending, startTransition] = useTransition()
// const [boolean, callback] = useTransition()

// - when using useTransition hook we are saying react that all of our state passed it has lower priority.
    // - (as by default all of our state has higher priority, and they all run one after other untill they all are finished) and only then it's gonna render/painted out on screen.

// So, lets wrapped up the expensive operation inside useTransition Hook.(setting them as low priority ans execute them when we have a time.)
    // - and make sure that other higher priority state gets render immediately
    
    // # wrap expensive operation inside useTransition:
    //     startTransition(()=>{
    //         let l = []
    //         for(let i=0; i<6000; i++){
    //         l.push(e.target.value)
    //         console.log("pushing into array")
    //         }
    //         setList(l) //lower priority state change
    //     })
    // - here we have said react that all of our these code are low priority
    
// # and here, isPending hold the status of low priotize operation 
    // const [isPending, startTransition] = useTransition()
    // const [boolean, callback] = useTransition()
    // - it holds boolean value.
    // - {isPending ? <p>Loading...</p> : list.map((item,index)=> <p key={index}>{item}</p> )}

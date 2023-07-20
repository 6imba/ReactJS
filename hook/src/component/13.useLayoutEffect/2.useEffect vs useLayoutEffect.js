import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'

// const LayoutVsEffect_1 = () => {
//     const [bgColor, setBg] = useState("green")

//     useEffect(()=>{
//       console.log("useEffect")
//       console.log("for loop start")
//       for(let i=0;i<1000000000;i++){}
//       console.log("for loop end")
//       for(let i=0;i<1000000000;i++){}
//       setBg("red")
//     },[])
    
//     // useLayoutEffect(()=>{
//     //   console.log("useLayoutEffect")
//     //   console.log("for loop start")
//     //   for(let i=0;i<1000000000;i++){}
//     //   console.log("for loop end")
//     //   for(let i=0;i<1000000000;i++){}
//     //   setBg("red")
//     // },[])

//   return (
//     <>
//         <div style={{backgroundColor:bgColor}}>UseLayoutEffect_1</div>
//     </>
//   )
// }   
// export default LayoutVsEffect_1

const LayoutVsEffect_1 = () => {
    alert("Hi.")
    console.log("Hi.")

    // useEffect(() => {
    //     alert("Initial Paged rendered 1!")
    //     setTimeout(() => {
    //         alert("Initial Paged rendered 22!")
    //     }, 10000)
    //     for(let i=0;i<60000;i++){
    //         console.log("excuting loop!")
    //     }
    //     alert("Initial Paged rendered 333!")
    // })

    useLayoutEffect(() => {
        alert("Initial Paged rendered 1!")
        setTimeout(() => {
            alert("Initial Paged rendered 22!")
        }, 10000)
        for(let i=0;i<60000;i++){
            console.log("excuting loop!")
        }
        alert("Initial Paged rendered 333!")
    })

    alert("Bye.")
    console.log("Bye.")

    
    return (
        <h1>HTML rendered/painted!</h1>
    )
}   
export default LayoutVsEffect_1


// use see useEffect render/paint JSX in browser before the callback inside useEffect hook is done
// wheres
// use see useLayout render/paint JSX in browser after the callback inside useEffect hook is done
// # https://www.youtube.com/shorts/sRDUOd1IkS8


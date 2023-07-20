import React, { useEffect, useImperativeHandle, useRef } from 'react'

const UseImperativeHandle_2 = () => {
    const modalRef = useRef()
    console.log(modalRef)
    useEffect(()=>console.log(modalRef),[])
    return (
        <div>
            {/* <button>Open</button> */}
            <button onClick={()=>modalRef.current.bgCloseRef()}>Focus Close</button>
            <button onClick={()=>modalRef.current.bgConfirmRef()}>Focus Confirm</button>
            <button onClick={()=>modalRef.current.bgDenyRef()}>Focus Deny</button>
            <br /><br />
            <Modal ref={modalRef}/>
        </div>
    )
}
export default UseImperativeHandle_2

const Modal = React.forwardRef((props,ref) => {
    const closeRef = useRef()
    const confirmRef = useRef()
    const denyRef = useRef()

    useImperativeHandle(ref, ()=>{
        return {
            bgCloseRef: ()=>setBg(closeRef),
            bgConfirmRef: ()=>setBg(confirmRef),
            bgDenyRef: ()=>setBg(denyRef)
        }
    },[])


    const setBg = (refElement) => {
        let color;
        if(refElement == closeRef){
            color = "red"
        }else if(refElement == confirmRef){
            color = "yellow"
        }else{
            color = "green"
        }
        refElement.current.style.backgroundColor=color;
    }

    return(
        <div style={{background:"grey"}}>
            <button onClick={()=>setBg(closeRef)} ref={closeRef}>Focus Close</button>
            <button onClick={()=>setBg(confirmRef)} ref={confirmRef}>Focus Confirm</button>
            <button onClick={()=>setBg(denyRef)} ref={denyRef}>Focus Deny</button>
        </div>
    )
})
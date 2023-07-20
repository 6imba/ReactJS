import { useId } from "react"

// const UseID_1 = () => {
//   const id = useId()
//   return (
//     <>
//       <label htmlFor={id}>UserName:</label>
//       <input type="text" id={id}/>
//     </>
//   )
// }


// const UseID_1 = () => {
//   const id1 = useId()
//   const id2 = useId()
//   return (
//     <>
//       <div>
//         <label htmlFor={id1}>UserName:</label>
//         <input type="text" id={id1}/>
//       </div>
//       <div>
//         <label htmlFor={id2}>Email:</label>
//         <input type="email" id={id2}/>
//       </div>
//     </>
//   )
// }


const UseID_1 = () => {
  const id = useId()
  return (
    <>
      <div>
        <label htmlFor={`${id}-uname`}>UserName:</label>
        <input type="text" id={`${id}-uname`}/>
      </div>
      <div>
        <label htmlFor={`${id}-email`}>Email:</label>
        <input type="email" id={`${id}-email`}/>
      </div>
    </>
  )
}

export default UseID_1
import { createContext, useContext } from "react";
const StudentContext = createContext(); //1. create context.
// console.log(StudentContext)

const Parent = () => {
  const student = "Amir";
  return (
    <>
      <StudentContext.Provider value={student}> {/* 2. context provider. */}
        <Component_2/>
      </StudentContext.Provider>
    </>
  );
}

const Component_2 = () => {
  return <Component_3 />
}

const Component_3 = () => {
  return <Component_4 />
}

const Component_4 = () => {
  const student = useContext(StudentContext);  {/* 3. context consumer. */}
  // console.log(student)
  return (
    <div>Hi {student} </div>
  )
}

export default Parent

// passing of state via props to nested child component chaining is not optimum way.
// solution to this is creating context.
// so use react_Context_API.
// React Context_API, allows you to easily access data at different levels of the component tree, without passing pop to every level.


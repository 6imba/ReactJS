const Parent = () => {
  const student = "Amir";
  return <Component_2 student={student}/>
}

const Component_2 = ({student}) => {
  return <Component_3 student={student}/>
}
const Component_3 = ({student}) => {
  return <Component_4 student={student}/>
}

const Component_4 = ({student}) => {
  return (
    <div>Hi {student} </div>
  )
}

export default Parent;

// passing of state via props to nested child component chaining is not optimum way.
// solution to this is creating context.
// so use react_Context_API.
// React Context_API, allows you to easily access data at different levels of the component tree, without passing pop to every level.

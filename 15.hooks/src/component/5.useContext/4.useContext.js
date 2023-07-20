import { createContext, useContext } from "react";
const StudentContext = createContext(); //1. create context.
const TeacherContext = createContext(); //1. create context.

const ParentComponent = () => {
  const student = "Gyanu";
  const teacher = "Amir";
  return (
    <>
      <StudentContext.Provider value={student}> {/* 2. context provider. */}
        <TeacherContext.Provider value={teacher}> {/* 2. context provider. */}
          <FirstLevel_ChildComponent/>
        </TeacherContext.Provider>
      </StudentContext.Provider>
    </>
  );
}

const FirstLevel_ChildComponent = () => {
  return <SecondLevel_ChildComponent/>
}
const SecondLevel_ChildComponent = () => {
  return <ThirdLevel_ChildComponent/>
}
const ThirdLevel_ChildComponent = () => {
  return(
    <>
      <TeacherComponent/>
      <StudentComponent/>
    </>
  )
}

const TeacherComponent = () => {
  const teacher = useContext(TeacherContext);  {/* 3. context consumer. */}
  return (
    <div>Teacher: {teacher} </div>
  )
}

const StudentComponent = () => {
  const student = useContext(StudentContext);  {/* 3. context consumer. */}
  return (
    <div>Student: {student} </div>
  )
}

export default ParentComponent;


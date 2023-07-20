import { createContext, useContext } from "react";
const StudentContext = createContext(); //1. create context.
const TeacherContext = createContext(); //1. create context.
const ScientificName = createContext(); //1. create context.

const ParentComponent = () => {
  const student = "Gyanu";
  const teacher = "Amir";
  const scientificName = "Homo Sapiens";
  return (
    <>
      <StudentContext.Provider value={student}> {/* 2. context provider with value. */}
        <TeacherContext.Provider value={teacher}> {/* 2. context provider with value. */}
          <ScientificName.Provider value={scientificName}> {/* 2. context provider with value. */}
            <FirstLevel_ChildComponent/>
          </ScientificName.Provider>
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
  const scientificName = useContext(ScientificName);  {/* 3. context consumer. */}
  return (
    <>
      <div>Teacher: {teacher} </div>
      <div>Scientific Name: {scientificName} </div>
      <hr />
    </>
  )
}

const StudentComponent = () => {
  const student = useContext(StudentContext);  {/* 3. context consumer. */}
  const scientificName = useContext(ScientificName);  {/* 3. context consumer. */}
  return (
    <>
      <div>Student: {student} </div>
      <div>Scientific Name: {scientificName} </div>
      <hr />
    </>

  )
}

export default ParentComponent;


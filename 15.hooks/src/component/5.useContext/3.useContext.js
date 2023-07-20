import { createContext, useContext } from "react";
const FamilyContext = createContext(); //1. create context.

const GrandFather = () => {
  const surname = "Shrestha";
  return (
    <>
      <Father/>
      <Child/>
    </>
  );
}

const Father = () => {
  const surname = "Shrestha";
  return (
    <>
      <FamilyContext.Provider value={surname}> {/* 2. context provider. */}
        <Son/>
      </FamilyContext.Provider>
    </>
  );
}

const Son = () => {
  return <GrandSon />
}

const GrandSon = () => {
  const surname = useContext(FamilyContext);  {/* 3. context consumer. */}
  return (
    <div>Hi Mr. {surname} </div>
  )
}

const Child = () => {
  const surname = useContext(FamilyContext);  {/* 3. context consumer. */}
  return (
    <div>Hi Mr. {surname} </div>
  )
}
// here Child_Component doesn't resides inside a component_tree of GrandFather_Component, that's why Child_Component cannot access surname variable.
// Simply,  Child_Component is not a child of GrandFather_Component.
// General meaning we havenot provided Context.Provider for Child_Component, thats why ChildComponent cannot access context.

export default GrandFather;
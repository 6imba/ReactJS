import FunctionComponentState from "./components/2. State/FunctionalComponent and It's_States/FunctionComponentState_1";
import FunctionComponentProps from "./components/3. Props/FunctionalComponent and It's_Props/FunctionComponentProps";
import ParentComponent from "./components/4. pass state as props to child component/ParentComponentWithState"
import Clock from "./components/5. clock/Clock";
import Event from "./components/6. events/Event";
// import Greet from "./components/conditional rendering/Conditional";
// import ElementListMain from "./components/list and keys/ElementListMain";
import Calculator from "./components/7. lifting state up/Component1";

import Component_Composition from "./components/8. component composition/Component_Composition";
import FormMain from "./components/11. form/FormMain";

// import FormMain_1 from "./components/hooks/form/formMain";
import { ThemeContext, contextState } from "./context";

function App() {
  return (
    <>
    {/* <ThemeContext.Consumer>
    {({name, nameChanger}) => (
        <button onClick={nameChanger}>
         {name}
        </button>
      )}
    </ThemeContext.Consumer> */}
    {/* <FunctionComponentState/> */}

    {/* <FunctionComponentProps name="Amir Shrestha" id="20560706" district="Sindhupalchok"/>  here name,id,district are called propspassed to child_component(FunctionComponentProps) from parent_component(App) */}
    {/* <FunctionComponentProps name="Angel Shrestha" id="20550706" district="Kathmandu"/> */}
    {/* <FunctionComponentProps name="Homo Sapiean" id="10101011" district="Earth"/> */}
    
    {/* <ParentComponent/> */}
    
    {/* <Clock/> */}

    {/* <Event/> */}

    {/* <Greet userLogged={true}/> */}
    {/* <Greet/> */}

    {/* <Calculator/> */}

    {/* <Component_Composition/> */}

    {/* <ElementListMain/> */}

    <FormMain/>

    {/* <FormMain_1/>  */}

    </>
  );
}

const ContextWrapApp = () => {
  return(
     <ThemeContext.Provider value={contextState}>
        <App/>
     </ThemeContext.Provider>
  )
}

export default ContextWrapApp;

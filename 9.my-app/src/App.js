import ComponentOne from "./components/Component_1"
import ComponentTwo from "./components/Component_2"
import ComponentThree from "./components/Component_3"
import ComponentFour from "./components/Component_4"
import ComponentFive from "./components/Component_5"
import Component_6 from "./components/Component_6"
import Component_7_Card from "./components/Component_7_Card"

function App() {
  const myDate = "Kartik 6";// custume hard_coded_data
  const name = "Amir Shrestha";
  return (
    <div className="App">
      {/* <h1> I am Head </h1> */}
      {/* <ComponentOne/> */}
      {/* <ComponentTwo/> */}
      {/* <ComponentThree/> */}
      {/* <ComponentFour/> */}
      {/* <ComponentFive var1={myDate} var2={name}/> dynamic value */}
      {/* <ComponentFive var1="October 23" var2="Simba"/> hard coded value */}
      {/* <Component_6 var1="October 23" var2="Simba"/> hard coded value */}
      <Component_7_Card/>
    </div>
  );
}

export default App;

import {useState} from 'react';

export default function FunctionComponentState(){
    let localVaraible = 0; //updating normal variable will not update the Component's UI. So use state in component, so that when updating the state data of component will also update component UI(re-render the component).
    const [stateData, setData] = useState(0);
    
    function updateLocalVariable(){
        localVaraible += 1;
        console.log(localVaraible)
    }

    function updateState(){
        console.log(stateData)
        setData(stateData+1);
    }
    console.log("Component rendered")
    return(
        <div>
            <h1>Variable in Funtional Component!</h1>
            <h3>My variable data: {localVaraible}</h3>
            <span><i>Update the variable of component, by updating the data hold by local varaible of function component.</i></span><button onClick={updateLocalVariable}>Update Local Variable</button>

            <h1>State in Funtional Component!</h1>
            <h3>My state data: {stateData}</h3>
            <span><i>Update the state of component by updating the data hold by state object of component.</i></span><button onClick={updateState}>Update Local State</button>
        </div>
    )
}


// component re-rendered when satate variable changes but not in case of local variable.

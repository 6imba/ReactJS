import {useState} from 'react';
import ChildComponent from './ChildComponentWithProps';

export default function ParentComponent(){
    const [stateNameData,setState] = useState("Amir")
    function changeName(){
        setState("Simba")
    }
    return(
        <>
            <ChildComponent name={stateNameData}/>
            <button onClick={changeName}>Update state</button>
        </>
    )
}
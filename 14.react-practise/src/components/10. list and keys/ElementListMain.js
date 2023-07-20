import ElementList_1 from "./ElementList_1";
import ElementList_2 from "./ElementList_2";
import ElementList_3 from "./ElementList_3 and Key";
import ElementList_4 from "./ElementList_4 and Key";
import ElementList_5 from "./ElementList_5 and Key";
import ElementList_Debugging from "./ElementList_Debugging";

export default function ElementListMain(){
    return(        
        <>
            {/* <ElementList_1/> */}
            {/* <ElementList_2 arr={[3,6,9,12,15]}/> */}
            {/* <ElementList_3 arr={["apple", "banana", "coconut", "dragon", "emli", "fhalano"]}/> */}
            {/* <ElementList_4 arr={["Buy laptop", "Clean room", "Code JS", "Play Guitar"]}/> */}
            <ElementList_5 arr={[{id:1,title:"Potato",price:270}, {id:2,title:"Cauliflower",price:320,}, {id:3,title:"Vyanta",price:160,}]}/>
            {/* <ElementList_Debugging/> */}
        </>
    )
}
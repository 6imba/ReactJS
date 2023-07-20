import FormApp_Form from "./formApp_Form";
import ListComponent from "./formApp_Lists";
import { useState } from "react";

export default function FormApp() {
    const [db, setDB] = useState([])// Lifting state up
    return(
        <>
            <FormApp_Form setDB={setDB}/> {/* Pass data buttom-top */}
            <ListComponent db={db}/> {/* Pass data top-buttom */}
        </>
    )
}
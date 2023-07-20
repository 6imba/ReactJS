import { useState } from "react"

export default function FormSelectBox(){

    const [gender,setGender] = useState("m")
    
    const handleChangedGender = (event) => {
        setGender(event.target.value)
    }
    
    const handleForm = (event) => {
        event.preventDefault()
        setGender("m")
    }

    return(
        <form onSubmit={handleForm}>
            <fieldset>
            <legend>Personalia:</legend>
                <select onChange={handleChangedGender} value={gender} >
                    <option value="m">Male</option>
                    <option value="f">Female</option>
                    <option value="o">Other</option>
                </select>
                <br/><br/>
                <button>Submit</button>
            </fieldset>
            <br/>
            <i>Current value: {gender}</i>
        </form>
    )

}

// value attribute in seletc tag gives the initial select value of select box even before we manipulate select box.

// <select onChange={handleGender}>
//    vs
// <select onChange={handleGender} value={gender} >

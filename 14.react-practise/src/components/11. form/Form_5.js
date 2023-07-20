import { useState } from "react";

const Form_5 = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    return(
        <form onSubmit={e=>e.preventDefault()}>
            <label>Name:
                <input type="text" onChange={e=>{console.log(e.target.value);setName(e.target.value)}} placeholder="enter your name" name="username"/>
            </label>
            <label>G-mail:
                <input type="email" onChange={e=>setEmail(e.target.value)} placeholder="enter your gmail" name="gmail"/>
            </label>
            <button>Submit</button>
        </form>
    )
}

export default Form_5;
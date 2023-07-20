const Form_4 = () => {
    const handleFormSubmitedData = (e) => {
        e.preventDefault()
        alert("hi")
    }
    return(
        <form onSubmit={handleFormSubmitedData}>
            <label>Name:
                <input type="text" defaultValue="initial name value" placeholder="enter your name" name="username"/>
            </label>
            <label>G-mail:
                <input type="email" defaultValue="initial_email_value@com" placeholder="enter your gmail" name="gmail"/>
            </label>
            <button>Submit</button>
        </form>
    )
}

export default Form_4;

// React Uncontrolled Form.
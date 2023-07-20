const Form_1 = () => {
    const handleFormSubmitedData = () => {
        alert("hi")
    }
    return(
        <form onSubmit={handleFormSubmitedData}>
            <label>Name:
                <input type="text"  placeholder="enter your name" name="username"/>
            </label>
            <label>G-mail:
                <input type="email"  placeholder="enter your gmail" name="gmail"/>
            </label>
            <button>Submit</button>
        </form>
    )
}

export default Form_1;

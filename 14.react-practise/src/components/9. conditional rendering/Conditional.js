const Greet = (props) => {
    if (props.userLogged){
        return <GreetUser/>
    }
    return <SignUser/>
}
const GreetUser = (props) => {
    return(
        <p>Namste and welcome back!</p>
        )
    }
    const SignUser = (props) => {
        return(
            <p>Please log in!</p>
        )
}

export default Greet;
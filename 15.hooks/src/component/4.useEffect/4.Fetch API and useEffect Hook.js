// fetch and show all users when page render for the first time.

import { useEffect, useState } from 'react'

const FetchComponent = () => {
    alert("hi")
    console.log("Page render start.")

    const [users, setUser] = useState([]);

    // // 1:
    //     getUsers();

    // // 2:
    // useEffect(() => {
    //     getUsers();
    // })
    // 3:
    useEffect(() => {
        getUsers();
    }, [])
    
    const getUsers = async () => {
        console.log("Fetch Github user list: Side effect of initial rendering.")
        // try{
            const response = await fetch("https://api.github.com/users");
            const data = await response.json();
            setUser(data)
        // }catch(error){
        //     console.log(error)
        // }
    }

    const userJSX = users.map(user => {
        return(
            <div className="item" key={user.id}>
                <h5>ID: {user.id} </h5>
                <h5>url: {user.html_url} </h5>
            </div>
        )
    })

    console.log(users)
    alert("bye")
    console.log("Page render end.")

    return (
        <>
            <h1>GitHub Users:</h1>
            <div className="container">
                {userJSX}
            </div>
        </>
    )
}

export default FetchComponent

// fetch api data after initial rendering.
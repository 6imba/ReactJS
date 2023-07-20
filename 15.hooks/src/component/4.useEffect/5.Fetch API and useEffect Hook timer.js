// fetch and show all users when page render for the first time.

import { useEffect, useState } from 'react'

const LoadingComponent = () => {
    alert("Start")

    const [users, setUser] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getUsers();
    }, [])
    
    const getUsers = async () => {
        try{
            const response = await fetch("https://api.github.com/users");
            const data = await response.json();
            setUser(data)
            // setLoading(false)
            setTimeout(()=> setLoading(false), 10000)
        }catch(error){
            console.log(error)
        }
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

    alert("End")
    
    if(loading == true){
        return <h1>Loading...</h1>
    }

    return (
        <>
            <h1>GitHub Users:</h1>
            <div className="container">
                {userJSX}
            </div>
        </>
    )
}

export default LoadingComponent
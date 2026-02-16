import { useState } from "react";

function Login() {

    const [logIn, setLogIn] = useState({
        username: "",
        password: ""
    });

    async function login(){
        const res = await fetch("http://localhost:3000/api/login", {
            method: "post",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(logIn)
        })
        const message = await res.json();
        console.log(message);
    }

    return (
        <div>
            <label htmlFor="username">username</label>
            <input type="text" name="username" id="username" onChange={(e)=>{
                setLogIn({...logIn, username: e.target.value})
            }} /><br /><br />
            <label htmlFor="password">password</label>
            <input type="text" name="password" id="password" onChange={(e)=>{
                setLogIn({...logIn, password: e.target.value})
            }} />
            <button onClick={login} >submit</button>
        </div>
    )
}

export default Login
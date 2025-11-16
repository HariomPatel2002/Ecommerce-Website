import React, { useState } from "react";  

const Login = () =>{
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleLogin = async () =>{
        console.warn(email,password);
        let result = await fetch("http://localhost:5000/login",{
            method:'post',
            body: JSON.stringify({email,password}),
            headers:{
                'Content-Type':'application/json'
            },
        });
        result = await result.json();
        console.warn('result',result);
    }
    return (
        <div className="login">
            <input type='text' className='inputBox' placeholder="Enter email" onChange={(e)=>setEmail(e.target.value)} value={email}/> 
            <input type='password' className='inputBox' placeholder="Enter Password" onChange={(e)=>setPassword(e.target.value)} value={password}/> 
            <button onClick={handleLogin} className="appbutton" type="button">Login</button>
        </div>
    )
}
export default Login;
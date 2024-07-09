"use client"
import { useState } from "react"
 export function Login() {
     const [email,setEmail] = useState("");
     const [password,setPassword] = useState("");

     async function handleSubmit(e){
        e.preventDefault();
        console.log(email,password)
        setEmail("")
        setPassword("")
     }
return (
<form  className="flex flex-col justify-center items-center gap-4" onSubmit={handleSubmit} >
<label htmlFor="">Email</label>
<input type="email" name="email" placeholder="Email" className="p-1 border border-black rounded-md" value={email} onChange={ (e) => setEmail(e.target.value)}/>
<label htmlFor="">Password</label>
<input type="password" name="password" placeholder="******" className="p-1 border border-black rounded-md" value={password} onChange={ (e) => setPassword(e.target.value)} />
<button type="submit" className="bg-red-500 p-2 rounded-md">Submit</button>

</form>
  )
 }
"use client"
import { useState } from "react"
import {createUser} from "../actions/signup"


 export function Signup() {
    const [name,setName] = useState("");
     const [email,setEmail] = useState("");
     const [password,setPassword] = useState("");
     const [message, setMessage] = useState("")

     async function handleSubmit(e){
        e.preventDefault();
        console.log(name,email,password);
        const response = await createUser({name, email, password});
        setMessage(response.success || response.error)
        setName("")
        setEmail("")
        setPassword("")
     }
return (
<form  className="flex flex-col justify-center items-center gap-4" onSubmit={handleSubmit} >
   <p>{message}</p>
<label htmlFor="">Name</label>
<input type="name" name="name" placeholder="Name" className="p-1 border border-black rounded-md" value={name} onChange={ (e) => setName(e.target.value)}/>

<label htmlFor="">Email</label>
<input type="email" name="email" placeholder="Email" className="p-1 border border-black rounded-md" value={email} onChange={ (e) => setEmail(e.target.value)}/>
<label htmlFor="">Password</label>
<input type="password" name="password" placeholder="******" className="p-1 border border-black rounded-md" value={password} onChange={ (e) => setPassword(e.target.value)} />
<button type="submit" className="bg-red-500 p-2 rounded-md">Submit</button>

</form>
  )
 }
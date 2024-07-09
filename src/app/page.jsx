import Image from "next/image";

export default function Login() {
  async function handleSubmit(formData) {
    "use server"
    const email = formData.get("email")
    const password = formData.get("password")
     console.log(email,password)

  }
  return (
    
<div className="w-screen h-screen flex flex-col  items-center justify-center">
<h2 className="font-bold text-xl mb-4">Login</h2>
<form action={handleSubmit} className="flex flex-col justify-center items-center gap-4" >

<label htmlFor="">Email</label>
<input type="email" name="email" placeholder="Email" className="p-1 border border-black rounded-md"/>
<label htmlFor="">Password</label>
<input type="password" name="password" placeholder="******" className="p-1 border border-black rounded-md"/>
<button type="submit" className="bg-green-500 p-2 rounded-md">Submit</button>

</form>
</div>
  
  )
}
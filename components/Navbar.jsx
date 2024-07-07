"use client"
import Link from "next/link"
import { signOut, useSession } from "next-auth/react"
import { Button } from "@material-tailwind/react"

const Navbar = ()=>{

    const {data:session }=useSession()

    return(
    <nav className="bg-black fixed p-4  sx:bg-black " >
        <div className="container mx-auto ">
            <ul className="flex justify-between h-screen flex-col sx:flex-row sx:w-screen sx:h-auto ">
                <div className="one   ">
                    <li className="mx-4 mt-5">
                        <Link href="/" className="text-white font-bold sx:rounded-lg sx:bg-gray-800 p-2 active:bg-gray-900">
                        Home</Link>
                    </li>
                    <li className="mx-4 mt-5 ">
                        <Link href="/dashboard"  className="text-white font-bold sx:rounded-lg sx:bg-gray-800 p-2 active:bg-gray-900">
                        Dashboard</Link>
                    </li>
                </div>

                <div className="auth  sx:inline-block sx:flex sx:justify-end sx:mr-10">
                    {!session?( <><li className="mx-4 mt-5">
                        <Link href="/login" className="text-white font-bold sx:rounded-lg sx:bg-gray-800 p-2 active:bg-gray-900">
                        Login</Link>
                    </li>

                    <li className="mx-4 mb-[2rem] sx:mt-5">
                        <Link href="/Register" className="text-white font-bold sx:rounded-lg sx:bg-gray-800 p-2 active:bg-gray-900">
                        Register</Link>
                    </li>
                    </>):( 
                        <div className="flex-col ">
                       <p className="mb-4 text-white">{session.user?.email}</p>
                       <li>
                       <Button className="bg-red-900 p-2 px-5 mb-[2rem]" onClick={()=>signOut()} >Log Out</Button>
                       </li>
                    </div>)}
                    <>
                   
                    </>
                </div>
            </ul>
        </div>

    </nav>
 

    )
}
export default Navbar
'use client'
import React, { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react'
import Link from 'next/link'
import { toast } from 'react-toastify'

import {
    Card,
    Input,
    Button,
    Typography,
  } from "@material-tailwind/react";


const Register = () => {
    const router =useRouter()
    const {data:session, status:sessionStatus}= useSession()

    useEffect(()=>{
        if(sessionStatus=="authenticated"){
            router.push("/dashboard")
        }
    },[sessionStatus,router]);

    const  handleSubmit = async(e) =>{
      e.preventDefault()
      const username= e.target[0].value
      const email = e.target[1].value  
      const password = e.target[2].value
      const confirmPassword = e.target[3].value
    

    if(!username || !email || !password || !confirmPassword){
      toast.error("Please fill all the input fields")
      return;
    }else if(password!==confirmPassword){
      toast.error("Passwords do not match")
      return;
    }
  }
    
  



    return (
    sessionStatus!=="authenticated" && (
    <div className='flex justify-center items-center '>
    <Card color="transparent" shadow={false} className='mt-11  pt-4 pl-8 pr-8'>
      <Typography variant="h4" color="blue-gray">
        Register 
      </Typography>
      <Typography color="gray" className="mt-1 font-normal">
        Nice to meet you! Enter your details to register.
      </Typography>
      <form  onSubmit={handleSubmit} className="mt-8 mb-2 w-60 max-w-screen-lg sm:w-96">
        <div className="mb-1 flex flex-col gap-3 ">
          <Typography variant="h6" htmlFor="username"  color="blue-gray" className="-mb-3 text-[14px]" >
            Username
          </Typography>
          <Input
            id='username'
            name="username"
            size="md"
            placeholder="name@mail.com"
            className=" !border-t-blue-gray-200  focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
          <Typography variant="h6" color="blue-gray" className="-mb-3 text-[14px]">
            Your Email
          </Typography>
          <Input
          id='email'
            name="email"
            size="lg"
            placeholder="name@mail.com"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
          <Typography variant="h6" color="blue-gray" className="-mb-3 text-[14px]">
            Password
          </Typography>
          <Input
          id='password'
            name="password"
            type="password"
            size="lg"
            placeholder="********"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
          <Typography variant="h6" color="blue-gray" className="-mb-3 text-[14px]">
            Confirm Password
          </Typography>
          <Input
            id='password-confirm'
            name="password-confirm"
            type="password"
            size="lg"
            placeholder="********"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
        </div>
        <Button type='submit' className="mt-6 bg-gray-800 hover:bg-black text-none" fullWidth >
          Register
        </Button>
        <Typography color="gray" className="mt-4 text-center font-normal">
          Already have an account?{" "}
          <Link href="/login" className="font-medium text-gray-900">
            Login
          </Link>
        </Typography>
      </form>
    </Card>
    </div>
    
  )
)
}

export default Register
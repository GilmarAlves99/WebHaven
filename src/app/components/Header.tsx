"use client"
import { signIn, useSession } from "next-auth/react";
import Image from "next/image";
import React from "react"
import {AiOutlineMenu} from "react-icons/ai"
const Header = () =>{
    const {status,data} = useSession();
    const handleLoginClick=()=> signIn();
    return  ( 
        <div className="container mx-auto p-5 flex justify-between items-center">
            <div className="relative h-[32px] w-[182px]">
            <Image src="/logoFull.png" alt="Full Stack Week" fill/>
            </div>
           {status == "unauthenticated" &&( <button className="text-primary text-sm font-semibold" onClick={handleLoginClick}>Login</button>)}
           {status == "authenticated" && data.user &&( 
          <div className="flex items-center gap-3 border-grayPrimary border border-solid rounded-full p-2">
            <AiOutlineMenu size={16} />
            <Image height={30} width={30} src={data.user.image!} alt={data.user.name!} className="rounded-full"/>
          </div>
           
           )}
        
        </div>
    );
}

export default Header;
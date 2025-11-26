"use client"
import React from 'react'
import { redirect, useRouter } from 'next/navigation';
function Btn() {
    const router=useRouter();
     function handleClick(){
        console.log("your animal is ready to buy");
        router.push("/animal");
        // router.back();
        // router.forward();
        // redirect;
  }  
  return (
    <div>
         <button
         className='p-4 rounded bg-blue-200 text-white' 
         onClick={handleClick}>
         Buy Now
         </button>
    </div>
  )
}

export default Btn;
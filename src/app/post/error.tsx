"use client";
import React from 'react'
import { useRouter } from 'next/navigation';
import { startTransition } from 'react';


function error({error , reset}:{error:Error,reset:()=>void}) {
   const router=useRouter();
    function onClick(){
        router.refresh();
        startTransition(()=>{
            reset();
        }); }
  return (
    <div>
        <h1>{error.message}</h1>
        <button onClick={()=>onClick() } className='bg-red-400 text-white py-2 px-6 rounded'> Try again</button>
    </div>
  )
}

export default error;
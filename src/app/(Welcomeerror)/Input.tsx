"use client"
import React, { useState } from 'react'

function Input() {
    const [input,setInput]=useState("");
  return (
    <div>
        <input type="text" placeholder='enter a data' className='border  bg-gray-300 p-2 h-8 m-8 rounded ' />
    </div>
  )
}

export default Input;
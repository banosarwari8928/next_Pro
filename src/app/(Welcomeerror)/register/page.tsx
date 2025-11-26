import React from 'react'

async function page() {
    await new Promise(resolve=>{
        setTimeout(()=>{
            resolve("waiting")
        },8000);
    })
  return (
    <div>page Register</div>
  )
}

export default page
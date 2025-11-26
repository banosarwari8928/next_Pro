import React from 'react'

function getRnum( num:number){
    return Math.floor(Math.random()*num)
}
function page() {
   const Rondomnum= getRnum(3);
   if(Rondomnum<2){
    throw new Error("NOT FOUND");
   }
  return (
    <div className='text-2xl p-4 bg-gray-300 m-8 rounded-md justify-center items-center h-fit w-fit'>This is Post page  </div>
  )
}

export default page;
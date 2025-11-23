import React from 'react'

function getRnum( num:number){
    return Math.floor(Math.random()*num)
}
function page() {
   const Rnum= getRnum(3);
   if(Rnum<2){
    throw new Error("NOT FOUND");
   }
  return (
    <div className='text-2xl p-4 bg-red-800 h-fit w-fit'>This is Post page  </div>
  )
}

export default page;
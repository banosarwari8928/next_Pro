import React from 'react';
import Btn from './Btn'
async function page({params}:{params:Promise<{buyid:string}>}) {
  const  buyid=(await params).buyid;
 
  return (
    <div className='flex items-center justify-center bg-gray-100 text-cursive'> 
        <h1 className=''>
            You bought an animal with id {buyid}
        </h1>
         <Btn />
            </div>
  )
}

export default page
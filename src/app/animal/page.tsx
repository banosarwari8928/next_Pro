import Link from 'next/link';
import React from 'react'

const list:{id:number,name:string}[]=[
    {id:1,name:"Dog"},
    {id:2,name:"Cat"},
    {id:3,name:"Goat"},
    {id:4,name:"Cow"},
    {id:5,name:"Zebra"},
    {id:6,name:"Dog"},
    {id:7,name:"Cat"},
    {id:8,name:"Goat"},
    {id:9,name:"Cow"},
    {id:10,name:"Zebra"},
]
function animal() {
   return (
    <div className='flex  flex-wrap  h-screen justify-center gap-6 mt-8 p-8 w-full bg-gray-400 '>
        {list.map(animal=>(<div className='p-8 bg-green-900 flex  flex-wrap  h-fit rounded-xl' key={animal.id}> 
            <h1 className='w-6  flex justify-center iems-center text-green-900  h-6  bg-gray-200 rounded-full'>{animal.id}</h1>
            <h1 className='text-2xl text-gray-200 p-2  w-fit rounded-md '>{animal.name}</h1>
            <Link className=' p-2 bg-gray-200 rounded h-fit text-green-900 w-fit ' href={`animal/buy/${animal.id}`}> Buy</Link> 
        </div>))}
    </div>
  );
}

export default animal;
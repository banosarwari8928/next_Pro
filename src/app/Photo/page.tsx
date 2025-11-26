import Link from 'next/link';
import React from 'react'
const PhotosList=Array.from({length:50},(_,index)=>({
    id:index+1,
    name: `Photo ${index+1}`,

}

));

async function page({searchParams}:{searchParams:Promise<{page?:string}>}) {
    const pageNumberToString=(await  searchParams).page;
    const pageNumber= Number(pageNumberToString)||1;
    const PhotosPerpage=8;
    const start=(pageNumber-1)* PhotosPerpage;
    const end =start+PhotosPerpage ;
   const Picturre=  PhotosList.slice(start,end);
   const totalPage=Math.ceil( PhotosList.length/PhotosPerpage); 
  return (
    <div className='w-full bg-blue-50  flex flex-wrap items-center  justify-between'>
    <div className='items-center flex-wrap justify-center h-fit flex'>   {Picturre.map(photo=>(<div key={photo.id} className='m-12 rounded border-blue-800 border-b-[4px] shadow-2xl   text-blue-800 border-b bg-blue-200 gap-8 p-12 justify-center border-dashed flex items-center'>
            <h1>{photo.name}</h1>
        </div>
    ))} </div> 
    <Pageniation currentPage={pageNumber} total={totalPage} />    
            </div>
  );
}

export default page;
function Pageniation({currentPage,total}:{currentPage:number,total:number}){
   const ListPagenum=Array.from({length:total},(_,i)=>i+1);
    return(
        <div className='w-full flex flex-wrap justify-between items-center gap-6'>
            <h1 className='m-12 rounded    text-blue-800  bg-blue-200 gap-8 p-4 justify-center border border-dashed flex items-center'>
                Page {currentPage} of 7
            </h1>
            <div className='m-12 rounded    text-blue-800  bg-blue-200 gap-8 p-4 justify-center border border-dashed flex items-center'>
                {currentPage >1 &&(<Link className='text-4xl' href={`?page=${currentPage-1}`} >⬅️
                </Link>)}
                {ListPagenum.map(page=>(<Link key={page} className='hover:bg-blue-300 hover:p-2' href={`?page=${page}`} >{page}</Link>))}
                {currentPage< total &&(<Link className='text-4xl' href={`?page=${currentPage+1}`}>➡️</Link>
                )}
            </div>
        </div>
    )
}
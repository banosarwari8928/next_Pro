import Link from "next/link";
import React, { Children } from "react";

export default function layout({children}:{children: React.ReactNode}){
  return(
    <html>
      <body>
      <nav style={{backgroundColor:'skyblue',  boxShadow:'inherit',height:'30px',width:'100vw' , textAlign:'center', justifyContent:'center' }}>
    <Link href="/post" className="">Post</Link>
        
            </nav>
    <h1>{children}</h1>
    <footer 
    style={{ backgroundColor:'yellowgreen', boxShadow:"0.5px  0.9px 9px gray", height:'30px', width:'100vw' ,textAlign:'center',justifyContent:'center'
        }}>
    This is my Footer
          </footer>
      </body>
    </html>
  );
}
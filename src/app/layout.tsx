import React, { Children } from "react";

export default function layout({children}:{children: React.ReactNode}){
  return(
    <html>
      <body>
      <nav style={{backgroundColor:'skyblue',
         boxShadow:'inherit',
         height:'30px',
         width:'100vw' ,
         textAlign:'center',
         justifyContent:'center'
          }}>
            This is my navbar
            </nav>
   <h1 
   style={{
     color:"green", 
     fontFamily:"cursive", 
     borderRadius:"5px" ,
     padding:"4px",
     textAlign:"center", 
     alignItems:"center", 
     width:"30%", 
     margin:"auto 0px" 
     }}>
       Hi I am from layout</h1>
    <h1>{children}</h1>
    <footer 
    style={{
    backgroundColor:'yellowgreen',
    boxShadow:"0.5px  0.9px 9px gray",
    height:'30px',
    width:'100vw' ,
    textAlign:'center',
    justifyContent:'center'
        }}>
    This is my Footer
          </footer>
      </body>
    </html>
  );
}
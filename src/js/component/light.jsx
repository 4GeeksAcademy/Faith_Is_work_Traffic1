import React from "react";
//import Light from  
 
 const  Light =  ({color, lit,setLit }) => {
 return (

      <div className ="">
              
       <div className ="light" 
       style={{backgroundColor: color === lit? color: "grey" }}
          
         onClick={() => setLit(color )}
       
         ></div>
		
        </div>
 );

}
 export default Light;
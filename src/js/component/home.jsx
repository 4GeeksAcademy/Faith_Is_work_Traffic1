import React, {useState} from "react";
import Light from "./light";
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component 
function Home () {
const colors = ["red", "yellow", "green" ];
const [lit, setLit] = useState("red");
	return (
		<div className= "Home"> 
		{colors.map((color) => {

             return <Light color={color} lit={lit} setLit= {setLit} />;


		}
			
			)}
		
		
		</div>
	);
}

export default Home;

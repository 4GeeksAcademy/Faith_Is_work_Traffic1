import React, {useState} from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
const [red , setRed ] = useState("red")
const [yellow , setYellow ] = useState("yellow")
const [green , setGreen ] = useState("green")

      const [glored , glowRed] = useState('')
      const [gloyellow , glowYellow ] = useState('')
	  const [glogreen , glowGreen ] = useState('')
	return (
		<div className =" mt-4 ">
              <div className="pipe mx-auto"></div>
			  <div className="bg-black pipe2 mx-auto rounded p-4">
                    <div className =" circle bg-danger mx-auto "></div>
					<div className =" circle bg-warning mx-auto "></div>
					<div className =" circle bg-success mx-auto "></div>


			  </div>
		</div>
	);
};

export default Home;

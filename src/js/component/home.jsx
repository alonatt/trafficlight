import React, { useState } from "react";

//include images into your bundle
//import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [selectedColor, setSelectedColor] = useState("");
	return (
		<div className="Trafficlight text-center mt-5">
			<div
				onClick={() => setSelectedColor("rojo")}
				className={
					"Luz rojo" + (selectedColor === "rojo" ? " brillo" : "")
				}></div>

			<div
				onClick={() => setSelectedColor("amarillo")}
				className={
					"Luz amarillo" +
					(selectedColor === "amarillo" ? " brillo" : "")
				}></div>

			<div
				onClick={() => setSelectedColor("verde")}
				className={
					"Luz verde" + (selectedColor === "verde" ? " brillo" : "")
				}></div>
		</div>
	);
};

export default Home;

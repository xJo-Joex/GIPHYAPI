import { useState } from "react";
import AddCategory from "./Components/AddCategory";
import GifGrid from "./Components/GifGrid";
import "animate.css";
const GifExpertApp = () => {
	const [categorias, setCategories] = useState(["One Punch"]);
	// const handleApp = () => {
	// 	setCategorias([...categorias, "nueva"]);
	// };
	return (
		<>
			<h2>GifExpertApp</h2>
			<hr />
			<AddCategory setCategories={setCategories} />
			<ol>
				{categorias.map((categoria) => (
					<GifGrid key={categoria} category={categoria} />
				))}
			</ol>
		</>
	);
};

export default GifExpertApp;

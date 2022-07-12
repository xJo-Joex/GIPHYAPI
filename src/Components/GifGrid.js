import React from "react";
import GifGridItem from "./GifGridItem";
import useFetchGifs from "../hooks/useFetchGifs";

const GifGrid = ({ category }) => {
	const { data: images, loading } = useFetchGifs(category);

	// useEffect(() => {
	// 	getElements(category).then(setImages);
	// }, [category]);

	return (
		<>
			<h3 className="animate__animated animate__bounceIn">{category}</h3>
			{loading && <p className="animate__animated animate__flash">Cargando...</p>}
			{
				<div className="card-grid">
					{images.map((img) => (
						<GifGridItem key={img.id} {...img} />
					))}
				</div>
			}
		</>
	);
};

export default GifGrid;

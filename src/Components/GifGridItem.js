import React from "react";

const GifGridItem = ({ url, title, id }) => {
	return (
		<div className="card animate__animated animate__bounceIn ">
			<img src={url} alt={title} />
			<p>{title}</p>
		</div>
	);
};

export default GifGridItem;

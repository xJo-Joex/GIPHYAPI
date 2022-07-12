import { useEffect, useState } from "react";
import { getElements } from "../helpers/getGifs";

const useFetchGifs = (category) => {
	const [state, setState] = useState({ data: [], loading: true });
	useEffect(() => {
		getElements(category).then((imgs) => setState({ data: imgs, loading: false }));
	}, [category]);
	return state;
};

export default useFetchGifs;

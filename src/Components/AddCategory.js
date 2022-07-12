import React, { useState } from "react";
import PropTypes from "prop-types";

const AddCategory = ({ setCategories }) => {
	const [inputValue, setInpuValue] = useState("");
	const handleChangeInput = (e) => {
		setInpuValue(e.target.value);
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		if (inputValue.length > 2) {
			setCategories((cats) => [inputValue, ...cats]);
			setInpuValue("");
		}
	};
	return (
		<div>
			<form onSubmit={handleSubmit}>
				<label>Añade una categoria</label>
				<input value={inputValue} onChange={handleChangeInput} />
			</form>
		</div>
	);
};
AddCategory.propTypes = {
	setCategories: PropTypes.func.isRequired,
};
export default AddCategory;

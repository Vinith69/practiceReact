import React, { useState } from "react";
import AddComponent from "./AddComponent";

function SelectOperation() {
	const [operator, setOperator] = useState("+");

	return (
		<div>
			<h1>operation</h1>
			<button onClick={() => setOperator("+")}>+</button>
			<button onClick={() => setOperator("-")}>-</button>
			<button onClick={() => setOperator("*")}>*</button>
			<button onClick={() => setOperator("/")}>/</button>
			<AddComponent operator={operator} />
		</div>
	);
}

export default SelectOperation;

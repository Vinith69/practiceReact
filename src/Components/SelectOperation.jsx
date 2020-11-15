import React, { useState } from "react";
import AddComponent from "./AddComponent";

function SelectOperation() {
	const [operator, setOperator] = useState("+");

	return (
		<div>
			<h5 className="operation-title">Select operations</h5>
			<div className="operation-buttons">
				<button onClick={() => setOperator("+")}>+</button>
				<button onClick={() => setOperator("-")}>-</button>
				<button onClick={() => setOperator("*")}>*</button>
				<button onClick={() => setOperator("/")}>/</button>
			</div>
			<AddComponent operator={operator} />
		</div>
	);
}

export default SelectOperation;

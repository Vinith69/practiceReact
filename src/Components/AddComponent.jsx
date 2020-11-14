import React, { useState } from "react";

function AddComponent() {
	const [num1, setNum1] = useState(Math.floor(1 + Math.random() * (10 - 1)));
	const [num2, setNum2] = useState(Math.floor(1 + Math.random() * (10 - 1)));
	const [score, setScore] = useState(0);
	const [realAnswer, setRealAnswer] = useState("");
	const [myAnswer, setMyAnswer] = useState("");
	const [answer, setAnswer] = useState("");
	const [count, setCount] = useState(0);

	const handleAnswer = e => {
		if (e.charCode === 13) {
			if (answer !== "") addFunction(e);
		}
	};

	const handleInput = e => {
		setAnswer(e.target.value);
	};

	const addFunction = e => {
		let min = 3;
		let max = 10;
		// console.log(count, min);

		if (count === 3) {
			// min += 2;
			// max += 3;
			setCount(0);
		}

		let output = num1 + num2;
		setRealAnswer(`Previous : ${num1} + ${num2} = ${output}`);
		setMyAnswer(`Your answer was : ${answer}`);

		if (parseInt(answer) === output) {
			setScore(score + 1);
			setCount(count + 1);
		} else {
			if (score !== 0) {
				setScore(score - 1);
			}
		}

		setNum1(Math.floor(min + Math.random() * (max - min)));
		setNum2(Math.floor(min + Math.random() * (max - min)));
		setAnswer("");
	};

	return (
		<div>
			<h1>Your Score {score}</h1>
			<div className="display-num">
				<h3>{num1}</h3>
				<h3>+</h3>
				<h3>{num2}</h3>
			</div>

			<input
				value={answer}
				onChange={handleInput}
				type="text"
				name="answer"
				placeholder="Answer.."
				onKeyPress={handleAnswer}
				autoComplete="off"
			/>
			<h4>{realAnswer}</h4>
			<h4>{myAnswer}</h4>
		</div>
	);
}

export default AddComponent;

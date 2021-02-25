import { useState, useEffect, useRef, useMemo } from 'react';
import './App.css';

function complexCompute(num) {
	let i = 0;
	while (i < 10000000) i++;
	return num * 2;
}

function App() {
	const [number, setNumber] = useState(42);
	const [colored, setColored] = useState(false);

	const styles = useMemo(
		() => ({
			color: colored ? 'darkred' : 'black',
		}),
		[colored]
	);

	const computed = useMemo(() => {
		return complexCompute(number);
	}, [number]);

	useEffect(() => {
		console.log('style changed');
	}, [styles]);

	return (
		<div className="App">
			<h1 style={styles}>Property: {number}</h1>
			<button
				className="btn btn-success m-1"
				onClick={() => setNumber((prev) => prev + 1)}
			>
				Increment
			</button>
			<button
				className="btn btn-danger m-1"
				onClick={() => setNumber((prev) => prev + 1)}
			>
				Decrement
			</button>
			<button
				className="btn btn-warning m-1"
				onClick={() => setColored((prev) => !prev)}
			>
				Change
			</button>
		</div>
	);
}

export default App;

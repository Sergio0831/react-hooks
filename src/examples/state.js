import { useState } from 'react';
import './App.css';

function computeInitialCounter() {
	console.log('calc...');
	return Math.trunc(Math.random() * 20);
}

function App() {
	// const [counter, setCounter] = useState(0);
	// const [counter, setCounter] = useState(computeInitialCounter());
	const [counter, setCounter] = useState(() => {
		return computeInitialCounter();
	});

	const [state, setState] = useState({
		title: 'Counter',
		date: Date.now(),
	});

	const [title, setTitle] = useState('Counter');
	const [date, setDate] = useState(Date.now());

	const increment = () => {
		// setCounter(counter + 1);
		setCounter((prevCounter) => {
			return prevCounter + 1;
		});
	};

	const decrement = () => {
		setCounter(counter - 1);
	};

	// function changeTitle() {
	// 	setState((prev) => {
	// 		return {
	// 			...prev,
	// 			title: 'New title',
	// 		};
	// 	});
	// }

	return (
		<div className="App">
			<h1>Counter: {counter}</h1>
			<button onClick={increment} className="btn btn-success">
				Increase
			</button>
			<button onClick={decrement} className="btn btn-danger">
				Decrease
			</button>
			<button onClick={() => setTitle('New title')} className="btn btn-primary">
				Change title
			</button>

			<p>{title}</p>
		</div>
	);
}

export default App;

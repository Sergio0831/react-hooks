import { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import './App.css';
import ItemsList from './ItemsList';

function App() {
	const [colored, setColored] = useState(false);
	const [count, setCount] = useState(1);

	const styles = {
		color: colored ? 'green' : 'black',
	};

	const generateItemsFromApi = useCallback(
		(indexNumber) => {
			return new Array(count)
				.fill('')
				.map((_, index) => `Element ${index + indexNumber}`);
		},
		[count]
	);

	return (
		<div className="App">
			<h1 style={styles}>Elements qty: {count}</h1>
			<button
				className="btn btn-success m-1"
				onClick={() => setCount((prev) => prev + 1)}
			>
				Add
			</button>
			<button
				className="btn btn-warning m-1"
				onClick={() => setColored((prev) => !prev)}
			>
				Change
			</button>
			<ItemsList getItems={generateItemsFromApi} />
		</div>
	);
}

export default App;

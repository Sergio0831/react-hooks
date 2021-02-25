import { useState, useEffect, useRef } from 'react';
import './App.css';

function App() {
	// const [renderCount, setRenderCount] = useState(1);
	const [value, setValue] = useState('initial');
	const renderCount = useRef(1);
	const inputRef = useRef(null);
	const prevValue = useRef('');

	useEffect(() => {
		renderCount.current++;
	});

	const focus = () => inputRef.current.focus();

	useEffect(() => {
		prevValue.current = value;
	}, [value]);

	return (
		<div className="App">
			<h2>Render qty: {renderCount.current}</h2>
			<h2>Prev value: {prevValue.current}</h2>
			<input
				type="text"
				ref={inputRef}
				onChange={(e) => setValue(e.target.value)}
			/>
			<button className="btn btn-success m-1" onClick={focus}>
				Focus
			</button>
		</div>
	);
}

export default App;

import { useAlert } from './alert/AlertContext';

const Main = () => {
	const { show } = useAlert();
	return (
		<>
			<h1>Hello with Context</h1>
			<button
				onClick={() => show('Hello from Main.js')}
				className="btn-success btn"
			>
				Show Alert
			</button>
		</>
	);
};

export default Main;

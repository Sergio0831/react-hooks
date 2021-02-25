import { useAlert } from './alert/AlertContext';

const Main = () => {
	const { toggle } = useAlert();
	return (
		<>
			<h1>Hello with Context</h1>
			<button onClick={toggle} className="btn-success btn">
				Show Alert
			</button>
		</>
	);
};

export default Main;

import { useAlert } from './AlertContext';

const Alert = () => {
	const alert = useAlert();

	if (!alert.visible) return null;

	return (
		<div className={'alert alert-danger'} onClick={alert.toggle}>
			It's very important message
		</div>
	);
};

export default Alert;

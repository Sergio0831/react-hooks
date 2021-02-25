import {
	useState,
	useEffect,
	useRef,
	useMemo,
	useCallback,
	useContext,
	React,
} from 'react';
import Alert from './alert/Alert';
import './App.css';
import Main from './Main';
import { AlertProvider } from './alert/AlertContext';

function App() {
	return (
		<div className="App">
			<AlertProvider value={alert}>
				<div className="container pt-3">
					<Alert />
					<Main toggle={() => {}} />
				</div>
			</AlertProvider>
		</div>
	);
}

export default App;

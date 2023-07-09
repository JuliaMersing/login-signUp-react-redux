import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './features/store';
import { Login } from './pages/login';
import { SignUp } from './pages/signUp';
import { Error } from './pages/error';

export const App: React.FunctionComponent = () => {
	return (
		<>
			<Provider store={store}>
				<BrowserRouter>
					<ToastContainer />
					<Routes>
						<Route path="/" element={<Login />} />
						<Route path="/signUp" element={<SignUp />} />
						<Route path="*" element={<Error />} />
					</Routes>
				</BrowserRouter>
			</Provider>
			,
		</>
	);
};

import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Header } from './components/Header/Header';

export const App: React.FunctionComponent = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Header title="Login" />} />
			</Routes>
		</BrowserRouter>
	);
};

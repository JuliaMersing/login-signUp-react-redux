import React from 'react';
import { Header } from '../Header/Header';

export const NotFound: React.FC = () => {
	return (
		<div className="container-form">
			<div className="container-header">
				<Header
					heading="Ups! This page does not exist!"
					paragraph="Go back"
					href="/"
					linkParagraph="Login"
				/>
				<img
					className="mt-8 mx-auto"
					src="https://media2.giphy.com/media/C21GGDOpKT6Z4VuXyn/200.gif?cid=6104955evb11k2ex00v7rnd2wo4pmyw2utmvbh918tnppbyc&ep=v1_gifs_translate&rid=200.gif&ct=g"
					alt="404 - Page Not Found"
				/>
			</div>
		</div>
	);
};

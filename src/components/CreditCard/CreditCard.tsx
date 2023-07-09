import React from 'react';
import { Header } from '../Header/Header';

export const CreditCard: React.FC = () => {
	return (
		<div className="container-form">
			<div className="container-header">
				<Header
					heading="Sorry! I'm still working on this page!"
					paragraph="Go back"
					href="/"
					linkParagraph="Login"
				/>
				<img
					className="mt-8 mx-auto"
					src="https://media2.giphy.com/media/3owyp2SViuDIGh8YoM/200.gif?cid=6104955edpjtf3kp37hwqdoacwl378xw7arcdjpbgodhxmbz&ep=v1_gifs_translate&rid=200.gif&ct=g"
					alt="404 - Page Not Found"
				/>
			</div>
		</div>
	);
};

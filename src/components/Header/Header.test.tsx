import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Header } from './Header';
import '@testing-library/jest-dom';

describe('Header component', () => {
	test('should navigate to the correct place when link is clicked', () => {
		render(
			<Header
				heading="Sign Up to create an account"
				paragraph="Already have an account?"
				href="/"
				linkParagraph="Login"
			/>
		);
		const link = screen.getByRole('link');
		userEvent.click(link);
		expect(link).toHaveAttribute('href', '/');
	});
});

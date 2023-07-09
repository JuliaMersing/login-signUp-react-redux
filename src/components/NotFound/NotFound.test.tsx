import React from 'react';
import { render } from '@testing-library/react';
import { NotFound } from './NotFound';

describe('NotFound', () => {
	test('should render the component', () => {
		const { getByText, getByAltText } = render(<NotFound />);
		expect(getByText('Ups! This page does not exist!')).toBeInTheDocument();

		expect(getByText('Go back')).toBeInTheDocument();

		const link = getByText('Login');
		expect(link).toBeInTheDocument();
		expect(link.getAttribute('href')).toBe('/');

		const image = getByAltText('404 - Page Not Found');
		expect(image).toBeInTheDocument();
		expect(image.getAttribute('src')).toBe(
			'https://media2.giphy.com/media/C21GGDOpKT6Z4VuXyn/200.gif?cid=6104955evb11k2ex00v7rnd2wo4pmyw2utmvbh918tnppbyc&ep=v1_gifs_translate&rid=200.gif&ct=g'
		);
	});
});

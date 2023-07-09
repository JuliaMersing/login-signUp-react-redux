import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { Input } from './Input';

describe('Input component', () => {
	const setUp = () => {
		const mockHandleInputChange = jest.fn();
		const mockHandleInputBlur = jest.fn();

		const utils = render(
			<Input
				id="email"
				type="email"
				name="email"
				value=""
				placeholder="Email"
				onChange={mockHandleInputChange}
				onBlur={mockHandleInputBlur}
				error=""
				className="input"
			/>
		);
		return {
			...utils,
			mockHandleInputBlur,
			mockHandleInputChange,
		};
	};
	test('call handleOnChange when user enter an email', async () => {
		const { mockHandleInputChange } = setUp();

		const email = 'test@gmail.com';
		const input = screen.getByRole('textbox', { name: '' });
		await userEvent.type(input, email);

		expect(mockHandleInputChange).toHaveBeenCalled();
	});

	test('call handleErrorEmail when email is not valid', async () => {
		const { mockHandleInputChange, mockHandleInputBlur } = setUp();

		const email = 'test.com';
		const input = screen.getByRole('textbox', { name: '' });
		await userEvent.type(input, email);

		expect(mockHandleInputChange).toHaveBeenCalled();
		await userEvent.tab();
		expect(mockHandleInputBlur).toHaveBeenCalled();
	});
});

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { newUser } from '../../features/registerSlice';
import { verifyEmail, verifyPassword } from '../../utils/validations';
import { Button } from '../Button/Button';
import { Header } from '../Header/Header';
import { Input } from '../Input/Input';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { existingUser } from '../../features/signUpSlice';
import { useNavigate } from 'react-router-dom';

export interface FormProps {
	isSignUp?: boolean;
}

export const Form: React.FC<FormProps> = ({ isSignUp = false }) => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [emailError, setEmailError] = useState('');
	const [passwordError, setPasswordError] = useState('');
	const validLogin = passwordError === '' && emailError === '';

	const dispatch = useDispatch();
	const navigate = useNavigate();

	const handleInputChange = (event: any) => {
		const { name, value } = event.target;

		if (name === 'email') {
			setEmail(value);
		} else if (name === 'password') {
			setPassword(value);
		}
	};

	const handleInputBlur = (event: any) => {
		const { name, value } = event.target;

		if (name === 'email') {
			const error = verifyEmail(value);
			setEmailError(error);
		} else if (name === 'password') {
			const error = verifyPassword(value);
			setPasswordError(error);
		}
	};

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		const emailError = verifyEmail(email);
		const passwordError = verifyPassword(password);
		setEmailError(emailError);
		setPasswordError(passwordError);

		if (!validLogin || email === '' || (isSignUp && passwordError !== '')) {
			toast.error('Please fill in all the required fields.', {
				position: toast.POSITION.TOP_CENTER,
			});
			return;
		}

		if (isSignUp) {
			dispatch(
				newUser({
					email,
					password,
				})
			);
			toast.success('User successfully created!', {
				position: toast.POSITION.TOP_CENTER,
			});
		} else {
			dispatch(existingUser({ email }));
			toast.success('Almost there!', {
				position: toast.POSITION.TOP_CENTER,
			});
		}
		navigate('/payment');
	};

	return (
		<div className="container-form">
			<div className="container-header">
				<ToastContainer />
				{isSignUp ? (
					<Header
						heading="Let's get started!"
						paragraph="Already have an account?"
						href="/"
						linkParagraph="Login"
					/>
				) : (
					<Header
						heading="Welcome back!"
						paragraph="Don't have an account?"
						href="/signUp"
						linkParagraph="SignUp"
					/>
				)}

				<form
					className="mt-8 space-y-6"
					action="#"
					method="POST"
					onSubmit={handleSubmit}
				>
					<input type="hidden" name="remember" value="true" />
					<div className="rounded-md shadow-sm -space-y-px">
						<Input
							id="email"
							type="email"
							name="email"
							value={email}
							placeholder="Email"
							onChange={handleInputChange}
							onBlur={handleInputBlur}
							error={emailError}
							className={emailError !== '' ? 'input-error' : 'input'}
						/>
						{isSignUp && (
							<Input
								id="password"
								type="password"
								name="password"
								value={password}
								placeholder="Confirm password"
								onChange={handleInputChange}
								onBlur={handleInputBlur}
								error={passwordError}
								className={passwordError !== '' ? 'input-error' : 'input'}
							/>
						)}
					</div>
					{isSignUp ? <Button> Sign in </Button> : <Button> Login </Button>}
				</form>
			</div>
		</div>
	);
};

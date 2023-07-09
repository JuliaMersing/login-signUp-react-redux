export const verifyEmail = (email: any): string => {
	const emailRegex = /\S+@\S+\.\S+$/;
	if (email === '') return 'Please, enter your email';
	if (!emailRegex.test(email)) return 'Invalid email provided';
	return '';
};

export const verifyPassword = (password: any): string => {
	const passwordRegex = /(?=.*?[A-Z]).{8,}/;
	if (password === '') return 'Please, enter a password';
	if (!passwordRegex.test(password)) return '8 characters and 1 upper case';
	return '';
};

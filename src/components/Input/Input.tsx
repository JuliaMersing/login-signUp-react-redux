import React, { FormEvent } from 'react';

export interface InputProps {
	value: string;
	onChange: (e: FormEvent) => void;
	onBlur?: (e: FormEvent) => void;
	name: string;
	type?: string;
	id?: string;
	placeholder: string;
	error?: string;
	className?: string;
}

export const Input: React.FC<InputProps> = ({
	value,
	onChange,
	onBlur,
	name,
	type,
	id,
	placeholder,
	error,
	className,
}) => (
	<div className="mb-6">
		<input
			name={name}
			onChange={onChange}
			onBlur={onBlur}
			value={value}
			className={className}
			type={type}
			id={id}
			placeholder={placeholder}
		/>
		{error && <div className="text-red-600">{error}</div>}
	</div>
);

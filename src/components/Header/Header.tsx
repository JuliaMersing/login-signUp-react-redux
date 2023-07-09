import React from 'react';

interface HeaderProps {
	title: string;
}

export const Header: React.FunctionComponent<HeaderProps> = ({
	title,
}: HeaderProps) => {
	return (
		<div className="container-title">
			<h2 className="title">{title}</h2>
		</div>
	);
};

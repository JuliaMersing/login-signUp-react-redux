import React from 'react';

interface HeaderProps {
	heading: string;
	paragraph?: string;
	href?: string;
	linkParagraph?: string;
}

export const Header: React.FC<HeaderProps> = ({
	heading,
	paragraph,
	href,
	linkParagraph,
}) => (
	<>
		<h2 className="heading">{heading}</h2>
		<p className="paragraphs">
			{paragraph}
			<a href={href} className="link">
				{linkParagraph}
			</a>
		</p>
	</>
);

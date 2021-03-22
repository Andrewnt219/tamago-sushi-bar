import React from 'react';
import styled from 'styled-components/macro';
import { BaseLogo } from '../../ui/BaseLogo';
import { SocialMediaIcons } from './SocialMediaIcons';

interface FooterProps {}
export const Footer: React.FC<FooterProps & ContainerProps> = ({ height }) => {
	return (
		<Container height={height}>
			<Logo />

			<SocialMediaIcons />

			<Text>
				© 2020 All Rights Reserved.
				<br />
				Developed by Tuan Phong (Andrew) Nguyen
			</Text>
		</Container>
	);
};

interface ContainerProps {
	height: string;
}
const Container = styled.footer<ContainerProps>`
	position: absolute;
	bottom: 0;
	left: 0;

	height: ${(p) => p.height};
	width: 100%;
	background: ${(p) => p.theme.blackBackground};

	display: grid;
	grid-template-columns: 1fr 1fr;
	justify-content: center;
	justify-items: flex-start;
	gap: 3vh;
	padding: 3rem 1rem;

	@media screen and (min-width: ${(p) => p.theme.breakpoints.lg}) {
		padding: 3rem 1rem;
	}
`;

const Text = styled.p`
	font-size: 1rem;
	color: white;
	display: flex;
	align-items: center;
	grid-column: 1/-1;
	text-align: center;
	display: flex;
	justify-content: center;
	width: 100%;

	@media screen and (min-width: ${(p) => p.theme.breakpoints.lg}) {
		grid-column: 2/3;
		justify-content: start;
	}
`;

const Logo = styled(BaseLogo)`
	transform: none;

	height: 10rem;

	justify-self: center;
	align-self: center;

	@media screen and (min-width: ${(p) => p.theme.breakpoints.lg}) {
		grid-row: 1/-1;
	}
`;

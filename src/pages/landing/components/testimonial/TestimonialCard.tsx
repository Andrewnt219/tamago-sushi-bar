import { rgba } from 'polished';
import React from 'react';
import styled from 'styled-components/macro';
import { ReactComponent as UserSvg } from '../../../../asset/user.svg';
export interface CustomerDetail {
	name: string;
	avatar: string;
}

interface TestimonialCardProps {
	customer: CustomerDetail;
	heading: string;
}

/**
 * @description renders a single card that store a user's testimonial inside the Landing Page
 * @param customer an object stores customer's info
 * @param heading the title of the customer's review
 * @param children the body of the review
 */
export const TestimonialCard: React.FC<TestimonialCardProps> = ({
	customer,
	heading,
	children,
}) => {
	return (
		<Container>
			<Avatar>
				<Picture>
					<UserSvg />
				</Picture>
				<CustomerName>{customer.name}</CustomerName>
			</Avatar>

			<Content>
				<Heading>{heading}</Heading>
				<Review>{children}</Review>
				<Footer>{customer.name}</Footer>
			</Content>
		</Container>
	);
};

interface ContainerProps {}
const Container = styled.div<ContainerProps>`
	background-color: ${(p) => rgba(p.theme.white, 0.8)};
	padding: 10%;
	border-radius: 4px;
	transition: background-color ${(p) => p.theme.transitionSpeed.quick} ease;

	&:hover {
		background-color: ${(p) => rgba(p.theme.white, 1)};
	}

	@media screen and (min-width: ${(p) => p.theme.breakpoints.md}) {
		padding: 5%;
	}
`;

interface ContentProps {}
const Content = styled.div<ContentProps>``;

const Heading = styled.h3`
	font-weight: bolder;
	margin-bottom: 1rem;
	text-transform: uppercase;
`;

const Review = styled.p``;
const Footer = styled.p`
	font-style: italic;
	text-align: center;
	margin-top: 1rem;

	&:before {
		content: '- ';
	}

	&:after {
		content: ' -';
	}
`;

interface AvatarProps {}
const Avatar = styled.figure<AvatarProps>`
	clip-path: circle(50% at 50% 50%);
	shape-outside: circle(50% at 50% 50%);
	width: 100%;
	height: 10rem;
	margin-bottom: 1rem;

	display: flex;
	justify-content: center;
	align-items: center;

	position: relative;
	overflow: hidden;

	&:hover {
		img {
			filter: blur(4px) brightness(60%);
			transform: scale(1);
		}

		figcaption {
			opacity: 1;
			transform: translate(-50%, -50%);
		}
	}

	@media screen and (min-width: ${(p) => p.theme.breakpoints.sm}) {
		display: inline-block;
		float: left;
		margin-right: 2rem;

		width: 10rem;
	}
`;

interface CustomerNameProps {}
const CustomerName = styled.figcaption<CustomerNameProps>`
	position: absolute;
	top: 50%;
	left: 50%;

	text-align: center;
	color: ${(p) => p.theme.white};
	text-transform: uppercase;

	width: 100%;
	font-size: 1.5rem;
	font-weight: 500;
	word-wrap: break-word;

	opacity: 0;
	transform: translate(-50%, -20%);
	transition: all ${(p) => p.theme.transitionSpeed.quick} ease;
`;

interface PictureProps {}
const Picture = styled.div<PictureProps>`
	max-height: 80%;
	border-radius: 50%;

	display: flex;
	justify-content: center;
	align-items: center;

	transform: scale(1.1);
	transition: all ${(p) => p.theme.transitionSpeed.quick} ease;

	svg {
		height: 10rem;
		width: 10rem;
	}
`;

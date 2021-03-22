import React, { useState } from 'react';
import { useScrollToTop, useTitle } from '../../hook';
import { Features, HeroImage, LandingMenu, Testimonial } from './components';

interface LandingProps {}

interface SectionLandingProps {}

/**
 * @description renders a Landing Page for the app
 */
const Landing: React.FC<LandingProps> = () => {
	const [isLoading, setIsLoading] = useState(true);
	useScrollToTop();
	useTitle('Welcome');

	return (
		<>
			<HeroImage onLoad={() => setIsLoading(false)} />
			<Features />
			<Testimonial />
			<LandingMenu />
		</>
	);
};

export default Landing;

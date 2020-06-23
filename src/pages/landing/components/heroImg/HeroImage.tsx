import React, { useEffect } from 'react';
import styled from 'styled-components/macro';
import backgroundImgUrl from '../../../../asset/bg-2.jpg';
import { rgba } from 'polished';
import { BaseButton } from '../../../../components/ui/BaseButton';

interface HeroImageProps {
  onLoad: () => void;
}
/**
 * @description the first section upon visiting the app, with fullscreen img
 * @param onLoad triggers a callback when background is loaded
 */
export const HeroImage: React.FC<HeroImageProps> = ({ onLoad }) => {
  useEffect(() => {
    const img = new Image();
    img.src = backgroundImgUrl;
    img.onload = function () {
      onLoad();
    };
  }, [onLoad]);

  return (
    <Backdrop>
      <Content>
        <SubHeading>come and enjoy</SubHeading>
        <Heading>
          Tokyo&apos;s finest <span> sushi bar</span>
        </Heading>
        <BaseButton
          style={{ marginTop: '4rem', fontSize: '2rem' }}
          shadowed
          contained
        >
          FIND OUT MORE
        </BaseButton>
      </Content>
    </Backdrop>
  );
};

interface BackdropProps {}
const Backdrop = styled.article<BackdropProps>`
  height: 100vh;
  max-width: 100vw;
  background-image: linear-gradient(
      ${(p) => rgba(p.theme.black, 0.6)},
      ${(p) => rgba(p.theme.black, 0.6)}
    ),
    url(${backgroundImgUrl});
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
`;

interface ContentProps {}
const Content = styled.div<ContentProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  color: ${(p) => p.theme.text};

  width: 100%;
  height: 100%;
  padding: 0 10%;
`;

interface HeadingProps {}
const Heading = styled.h1<HeadingProps>`
  text-align: center;
  font-size: 5rem;
  span {
    display: inline-block;
    color: ${(p) => p.theme.h1};
  }
`;

interface SubHeadingProps {}
const SubHeading = styled.h2<SubHeadingProps>`
  font-weight: 400;
  font-size: 3.2rem;
`;

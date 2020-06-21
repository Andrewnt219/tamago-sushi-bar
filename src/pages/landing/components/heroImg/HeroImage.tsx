import React, { useEffect } from 'react';
import styled from 'styled-components/macro';
import backgroundImg from '../../../../asset/bg-2.jpg';
import { rgba } from 'polished';
import { BaseButton } from '../../../../components/ui/BaseButton';
import { useInView } from 'react-intersection-observer';
import { useDispatch } from 'react-redux';
import { changeAppbarState } from '../../../../features/uiSlice';

interface HeroImageProps {}
/**
 * @param children the content displaying on the hero img
 */
export const HeroImage: React.FC<HeroImageProps> = ({ children }) => {
  const [ref, isInView] = useInView();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(changeAppbarState(!isInView));
  });

  return (
    <Backdrop ref={ref}>
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
    url(${backgroundImg});
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

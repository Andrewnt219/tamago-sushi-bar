import React from 'react';
import styled from 'styled-components/macro';
import { BaseButton } from '../../../../components/ui/BaseButton';
import { rgba } from 'polished';
import { StyledLink } from '../../../../components/navigation/StyledLink';

interface LandingMenuItemProps {
  header: string;
}
export const LandingMenuItem: React.FC<
  LandingMenuItemProps & ContainerProps
> = ({ imgSrc, children, header }) => {
  return (
    <Container imgSrc={imgSrc}>
      <MenuName>{header}</MenuName>
      <Description>{children}</Description>
      <StyledLink to="/menu">
        <Button outlined>VIEW MORE</Button>
      </StyledLink>
    </Container>
  );
};

interface ContainerProps {
  imgSrc: string;
}
const Container = styled.div<ContainerProps>`
  background-image: linear-gradient(
      to right,
      ${(p) => rgba(p.theme.black, 0.7)} 70%,
      transparent 100%
    ),
    url(${(p) => p.imgSrc});
  background-position: center;
  background-size: cover;
  border-radius: 4px;
  box-shadow: ${(p) => p.theme.shadow.button};

  padding: 5rem 30% 5rem 3rem;
  max-height: 80vh;

  color: ${(p) => p.theme.white};

  & > *:not(:last-child) {
    margin-bottom: 2rem;
  }
`;

const MenuName = styled.h3`
  font-size: 1.3rem;
  text-transform: uppercase;
`;

const Description = styled.p`
  word-wrap: break-word;
  font-size: 1.1rem;
`;

const Button = styled(BaseButton).attrs((p) => ({ color: p.theme.white }))`
  &:hover {
    background-color: ${(p) => p.theme.primary};
    border-color: ${(p) => p.theme.primary};
  }
`;

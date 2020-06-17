import React from 'react';
import styled from 'styled-components/macro';
import { LandingSection } from '../LandingSection';
import { LandingMenuItem } from './LandingMenuItem';
import menuSushi from '../../../../asset/menu-sushi.jpg';
import menuSalad from '../../../../asset/menu-salad.jpg';
import menuRice from '../../../../asset/menu-rice.jpg';
import menuDrink from '../../../../asset/menu-drink.jpg';

interface LandingMenuProps {}
export const LandingMenu: React.FC<LandingMenuProps> = () => {
  return (
    <LandingSection sectionName="culture of the far east">
      <LandingMenuItems>
        <LandingMenuItem header="sushi" imgSrc={menuSushi}>
          Originating in Japan, consisting of cooked vinegared rice combined
          with other ingredients such as raw seafood and vegetables
        </LandingMenuItem>

        <LandingMenuItem header="APPETIZER & SALADS" imgSrc={menuSalad}>
          We have an extensive range of traditional Japanese appetizer and
          salads, which includes all the traditional food
        </LandingMenuItem>

        <LandingMenuItem header="RICE & NOODLES" imgSrc={menuRice}>
          The modern French press consists of a narrow cylindrical beaker,
          equipped with lid and plunger that fits tightly in the cylinder.
        </LandingMenuItem>

        <LandingMenuItem header="DESSERTS & DRINKS" imgSrc={menuDrink}>
          We have an extensive range of traditional Japanese desserts and
          drinks, which includes all the traditional food items this country
        </LandingMenuItem>
      </LandingMenuItems>
    </LandingSection>
  );
};

interface ContainerProps {}
const LandingMenuItems = styled.div`
  padding: 0 2vw;
  width: 100%;

  & > *:not(:last-child) {
    margin-bottom: 2rem;
  }

  @media screen and (min-width: ${(p) => p.theme.breakpoints.xs}) {
    display: grid;

    grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
    gap: 2rem 5rem;

    & > *:not(:last-child) {
      margin-bottom: unset;
    }
  }
`;

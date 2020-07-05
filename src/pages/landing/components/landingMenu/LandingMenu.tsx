import React from 'react';
import styled from 'styled-components/macro';
import { LandingSection } from '../LandingSection';
import { LandingMenuItem } from './LandingMenuItem';

interface LandingMenuProps {}

/**
 * @description the menu section of the Landing Page, manages many LandingMenuItem
 */
export const LandingMenu: React.FC<LandingMenuProps> = () => {
  return (
    <LandingSection sectionName="culture of the far east">
      <LandingMenuItems>
        <LandingMenuItem
          menuId="sushiAndSashimi"
          header="sushi"
          imgSrc="https://i.imgur.com/Mq4X2Vl.jpg"
        >
          Originating in Japan, consisting of cooked vinegared rice combined
          with other ingredients such as raw seafood and vegetables
        </LandingMenuItem>

        <LandingMenuItem
          menuId="appetizersAndSalads"
          header="APPETIZER & SALADS"
          imgSrc="https://i.imgur.com/ZPQ0Kc2.jpg"
        >
          We have an extensive range of traditional Japanese appetizer and
          salads, which includes all the traditional food
        </LandingMenuItem>

        <LandingMenuItem
          menuId="riceAndNoodles"
          header="RICE & NOODLES"
          imgSrc="https://i.imgur.com/vxOyGwO.jpg"
        >
          It is impossible to get bored with out variety from Japanese udon
          noodles to buckwheat noodles to Japanese ramen and other forms of
          Japanese noodle soup.
        </LandingMenuItem>

        <LandingMenuItem
          menuId="dessertsAndDrinks"
          header="DESSERTS & DRINKS"
          imgSrc="https://i.imgur.com/s6UCB6c.jpg"
        >
          We have an extensive range of traditional Japanese desserts and
          drinks, which includes all the traditional food items this country
        </LandingMenuItem>
      </LandingMenuItems>
    </LandingSection>
  );
};

const LandingMenuItems = styled.div`
  padding: 0 2vw;
  width: 100%;

  & > *:not(:last-child) {
    margin-bottom: 2rem;
  }

  @media screen and (min-width: ${(p) => p.theme.breakpoints.xxs}) {
    display: grid;

    /* grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr)); */
    gap: 2rem 5rem;

    & > *:not(:last-child) {
      margin-bottom: unset;
    }
  }

  @media screen and (min-width: ${(p) => p.theme.breakpoints.md}) {
    grid-template-columns: 1fr 1fr;
  
`;

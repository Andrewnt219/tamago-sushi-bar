import styled from 'styled-components/macro';
import LogoImg from '../../asset/logo.svg';
import TextLogo from '../../asset/textLogo.svg';

// interface LogoStyledProps {}

// interface LogoProps {
//   className?: string;
//   showName?: boolean;
// }

// /**
//  * @return a LogoIcon with brand name - Tamago
//  */
// export const BaseLogo: React.FC<LogoProps> = ({ className, showName }) => {
//   return (
//     <Container className={className}>
//       <LogoIcon />
//       {showName && <BrandName>tamago</BrandName>}
//     </Container>
//   );
// };

type BaseLogoProps = {
  withText?: boolean;
};
export const BaseLogo = styled.img.attrs((p: BaseLogoProps) => ({
  src: p.withText ? TextLogo : LogoImg,
}))<BaseLogoProps>`
  max-height: 100%;
`;

// const Container = styled.div`
//   height: 100%;

//   display: inline-block;

//   display: flex;
//   flex-direction: column;
//   align-items: center;
// `;

// const BrandName = styled.p`
//   font-weight: 500;
//   text-align: center;
//   color: ${(p) => p.theme.primary};
// `;

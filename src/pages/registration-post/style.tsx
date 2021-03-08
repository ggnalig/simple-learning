import styled, { css } from 'styled-components';
import { IonToolbar, IonBackButton, IonPage, IonCard, IonInput, IonButton } from '@ionic/react';
import media from '../../utils/media-query'

const responsive = css`
  ${media.greaterThan('md')`
    max-width: ${props => props.theme.maxWidth};
    margin: 0 auto;
  `}
`;

export const StyledBackButton = styled(IonBackButton)`
  --background: transparent;
  --color: #121212;
  width: 48px;
  margin-top: 1rem;
  margin-left: 1rem;
`;

export const PageContainer = styled(IonPage)`
--ion-background-color: #FFE7BB;
`;

export const Title = styled.h1`
    margin: 1rem 7rem 0rem;
    padding-left: .5rem;
    font-weight: bold;
    font-size: 1.3rem;
    color: #121212;
`;

export const StyledToolbar = styled(IonToolbar)`
    --background: transparent;

    ${responsive}
`;

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column; 
  align-items: center; 
  justify-content: center; 
  width: 100%; 
  margin: 1rem auto 0rem;
`;

export const Card = styled(IonCard) <{ background?: string; }>`
   background: #F4F4F4;
   width: 20rem; 
   margin: 1rem;
   padding: 2rem 1rem 2rem 1rem; 
   border-radius: 25px;

   h4 {
    font-weight: bold
    font-color: #121212;
   }
`;

export const AvatarWrapper = styled.div`
  border-radius: 50%;
  z-index: 2;
  margin 0rem auto 0rem;
  text-align: center;

  img {
    width: 18rem; 
    height: 18rem; 
    border-radius: 1rem; 
    object-fit: cover; 
    border: .3rem solid #d3d3d3;
  }
`;

export const Form = styled.form`
  width: 100%;
`;

export const Input = styled(IonInput)`
  --background: #d3d3d3;
  --padding-start: 1rem;
  border-radius: 50px;
  margin: 1rem auto;
`;

export const ButtonUpdate = styled(IonButton)`
  --background: #90C418;
  --border-radius: 50px;
  width: 100%;
  height: 3rem;
  font-weight: bold;
`;

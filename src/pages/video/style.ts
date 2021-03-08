import styled, { css } from 'styled-components';
import { IonToolbar, IonBackButton, IonPage, IonCard } from '@ionic/react';
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
    margin: 0;
    margin-top: 1rem;
    padding-left: .5rem;
    font-weight: bold;
    font-size: 1.3rem;
    color: #121212;
    text-transform: capitalize;
`;

export const StyledToolbar = styled(IonToolbar)`
    --background: #FFE7BB;

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
   width: 23rem;
   margin: 1rem;
   padding: 1rem; 
   border-radius: 25px;
`;

export const ThumbnailWrapper = styled.div`
  border-radius: 25px;
  margin-bottom: .3rem;

  img {
    width: 11rem; 
    height: 6rem; 
    border-radius: 25px; 
    object-fit: cover; 
    border: 3.5px solid white;
  }
`;
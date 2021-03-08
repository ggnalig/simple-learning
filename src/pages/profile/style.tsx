import React from 'react'
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import { IonToolbar, IonBackButton, IonPage, IonCard, IonItem, IonLabel, IonList, IonRippleEffect } from '@ionic/react';
import media from '../../utils/media-query'
import { IonButton } from '@ionic/react';

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
   height: 32rem; 
   margin: -4rem 1rem 1rem 1rem;
   padding: 6rem 1rem 1rem 1rem; 
   border-radius: 25px;

   h4 {
    font-weight: bold
    font-color: #121212;
   }
`;

export const AvatarWrapper = styled.div`
  border-radius: 50%;
  z-index: 2;

  img {
    width: 8rem; 
    height:8rem; 
    border-radius:50%; 
    object-fit: cover; 
    border: .3rem solid white;
  }
`;

export const List = styled(IonList)`
  background-color: #F4F4F4;
`;

const StyledItem = styled(IonItem)`
  --background: #D3d3d3;
  margin: 0.5rem 0rem;
  border-radius: 0.5rem;
  --color-hover: #d1d1d1;
  --color-activated: #121212;
`;

const Label = styled(IonLabel)`
  text-align: center;
`;

const StyledLink = styled(Link)`
  text-decoration: none
`;

export const LabelText = styled.h6`
  color: #121212; 
  font-size: 1.5rem;
  font-weight: bold;
`;

export const LogoutButton = styled(IonButton)`
  width: 85%;
`;

export const Item: React.FC<{url: string}> = ({url, children}) => {
  return (
    <StyledLink to={url}>
      <StyledItem button lines='none'>
        <Label>{children}</Label>
        <IonRippleEffect />
      </StyledItem>
    </StyledLink>
  )
}
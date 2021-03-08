import styled from "styled-components";
import { IonInput, IonButton, IonPage, IonCard } from "@ionic/react";
import media from "../../utils/media-query";

export const PageContainer = styled(IonPage)`
--ion-background-color: #FFE7BB;
`;

export const HeaderContainer = styled.div<{ background?: string }>`
  height: 7rem;
  background-color: #FCBE4A;
  width: 100%;
  border-radius: 0rem 0rem 2rem 2rem;
  position: fixed;
  z-index: 2;

  ${media.greaterThan("md")`
     margin: 0 auto;
    `}
`;

export const HeaderWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content:space-between;
    align-items:center;
    padding:1rem 2rem 0rem;
`;

export const NameWrapper = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: flex-start;

   h6 {
    margin-bottom: 0rem; 
    font-size: 1rem;
   }

   h5 {
    margin-top: .5rem; 
    font-size: .8rem;
   }
`;

export const AvatarWrapper = styled.div`
  border-radius: 50%;

  img {
    width: 3rem; 
    height:3rem; 
    border-radius:50%; 
    object-fit: cover; 
    border: 3.5px solid white;
  }
`;

export const SearchBarWrapper = styled.div`
  width: 21rem; 
  background-color: #d3d3d3; 
  margin: 8.5rem auto 1rem; 
  border-radius: 50px;
  text-align: center;
  padding: .5rem;
`;



export const CardWrapper = styled.div`
  display: flex; 
  flex-wrap: wrap; 
  align-items: center; 
  justify-content: center; 
  width: 100%; 
  margin: 1rem auto 0rem;
`;

export const Card = styled(IonCard) <{ background?: string; }>`
   background: ${props => props.background ? `url(${props.background})` : null} top left no-repeat;
   background-position: -10px -10px !important;
   box-shadow: inset -5px -5px 10px rgba(12,12,12, 0.1); 
   width: 9.5rem; 
   height:9.5rem; 
   margin: 1rem;
   padding: 1rem; 
   border-radius: 10px;

   h4 {
    font-weight: bold
    font-color: #121212;
   }
`;
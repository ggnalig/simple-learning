import styled from "styled-components";
import { IonInput, IonButton, IonPage } from "@ionic/react";
import media from "../../utils/media-query";

export const LoginContainer = styled.div<{ background?: string }>`
  width: 18rem;
  height: 24rem;
  color: black;
  background-color: white;
  border-radius: 10px;
  background: ${props => props.background ? `url(${props.background})` : null} top left no-repeat;
  background-position: 0px -30px !important;

  ${media.greaterThan("md")`
     margin: 0 auto;
     width: 24rem;
     height: 30rem;
    `}
`;

export const Input = styled(IonInput)`
  --background: #d3d3d3;
  --padding-start: 1rem;
  border-radius: 50px;
  margin: 1rem auto;
`;

export const Form = styled.form`
  width: 100%;
`;

export const Title = styled.h6`
  font-size: 1.5rem;
  align-self: flex-start;
  font-weight: bold;

  ${media.greaterThan("md")`
	font-size: 2rem;
    `}
`;

export const LoginWrapper = styled.div`
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  margin: -5rem auto;

  ${media.greaterThan('md')`
    padding: 2rem;
  `}
`;

export const ButtonLogin = styled(IonButton)`
  --background: #fcbe4a;
  --border-radius: 50px;
  width: 100%;
  height: 3rem;
  font-weight: bold;
`;

export const Layout = styled(IonPage)`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	background-color: #FFE7BB;
`;

export const Redirect = styled.div`
margin: 1.5rem auto;
${media.greaterThan('md')`
  margin: 3rem auto;
`}
	h6 {
		font-size: .8rem;
	}
  h6:hover {
    color: blue;
    cursor: pointer;
    text-decoration: underline;
  }
	span {
	color: #FFE7BB;
	}
`;

export const Illustration = styled.div<{ src: string }>`
  margin: -4.5rem 0rem 1rem 8rem;
  z-index: 0;
  height: 180px;
  background: ${props => props.src ? `url(${props.src})` : null} top left no-repeat;
  background-size: 180px;
`;
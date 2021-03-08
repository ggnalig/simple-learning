import React from 'react';
import {
  IonContent,
  IonHeader,
  IonButtons,
} from "@ionic/react";
import { StyledToolbar, StyledBackButton, Title, PageContainer, CardWrapper, Card, AvatarWrapper, Item, LabelText, LogoutButton } from './style';
import { chevronBackOutline } from 'ionicons/icons';
import * as firebase from 'firebase'
import { getCurrentUser, logoutUser } from '../../config/firebase-config';
import { useHistory } from 'react-router-dom';

const Tab2: React.FC = () => {
  const [profile, setProfile] = React.useState<firebase.default.UserInfo | null>();
  const history = useHistory();

  React.useEffect(() => {
    getCurrentUser().then(result => {
      if (result !== null) {
        setProfile(result.providerData[0])
      }
    })
  }, [])

  const logout = () => {
    logoutUser();
    history.push('/')
  }

  return (
    <PageContainer>
      <IonContent>
        <IonHeader className='ion-no-border'>
          <StyledToolbar>
            <IonButtons>
              <StyledBackButton icon={chevronBackOutline} text='' defaultHref='/home' />
            <Title>Profil</Title>
            </IonButtons>
          </StyledToolbar>
        </IonHeader>
        <CardWrapper>
          <AvatarWrapper>
            <img src={profile?.photoURL || undefined} alt=""/>
          </AvatarWrapper>
          <Card>
            <Item url='/change-profile'>
              <LabelText>Ubah Profil</LabelText>
            </Item>
            <Item url='/change-password'>
              <LabelText>Ubah Password</LabelText>
            </Item>
          </Card>
          <LogoutButton expand='block' onClick={() => logout()} color='danger'>Logout</LogoutButton>
        </CardWrapper>
      </IonContent>
    </PageContainer>
  );
};

export default Tab2;

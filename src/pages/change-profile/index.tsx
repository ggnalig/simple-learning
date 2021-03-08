import React from 'react';
import {
  IonContent,
  IonHeader,
  IonButtons,
} from "@ionic/react";
import { getCurrentUser } from '../../config/firebase-config'
import { StyledToolbar, StyledBackButton, Title, PageContainer, CardWrapper, Card, AvatarWrapper, Form, Input, ButtonUpdate } from './style';
import { chevronBackOutline } from 'ionicons/icons';
import * as firebase from 'firebase'

const Tab2: React.FC = () => {
  const [name, setName] = React.useState<string | null | undefined>('');
  const [kelas, setKelas] = React.useState<string | null | undefined>('');
  const [profile, setProfile] = React.useState<firebase.default.UserInfo | null>();

  React.useEffect(() => {
    getCurrentUser().then(result => {
      if (result !== null) {
        setProfile(result.providerData[0])
      }
    })
  }, [])

  const updateProfile = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const payload = {
      photo: 'asdasd',
      nama: name,
      kelas: kelas,
    }
    console.log(payload)
  }

  const handleNameInput = (value: string | null | undefined) => {
    setName(value)
  }

  const handleKelasInput = (value: string | null | undefined) => {
    setKelas(value)
  }

  return (
    <PageContainer>
      <IonContent>
        <IonHeader className='ion-no-border'>
          <StyledToolbar>
            <IonButtons>
              <StyledBackButton icon={chevronBackOutline} text='' defaultHref='/home' />
            <Title>Ubah Profil</Title>
            </IonButtons>
          </StyledToolbar>
        </IonHeader>
        <CardWrapper>
          <Card>
          <AvatarWrapper>
            <img src={profile?.photoURL || undefined} alt=""/>
          </AvatarWrapper>
           <Form onSubmit={updateProfile}>
              <Input color="light" name='username' onIonChange={(e) => handleNameInput(e.detail.value) } value={profile?.displayName} placeholder="Nama" type="text" />
              <Input color="light" name='kelas' onIonChange={(e) => handleKelasInput(e.detail.value) } value={profile?.displayName}placeholder="Kelas" type="text" />
              <ButtonUpdate expand="full" shape="round" type="submit">
                Ubah
              </ButtonUpdate>
            </Form>
         </Card>
        </CardWrapper>
      </IonContent>
    </PageContainer>
  );
};

export default Tab2;

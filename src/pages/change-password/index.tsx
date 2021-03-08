import React from 'react';
import {
  IonContent,
  IonHeader,
  IonButtons,
} from "@ionic/react";
import { StyledToolbar, StyledBackButton, Title, PageContainer, CardWrapper, Card, AvatarWrapper, Form, Input, ButtonUpdate } from './style';
import { chevronBackOutline } from 'ionicons/icons';
import { toast } from '../../utils/toast';
import { getCurrentUser } from '../../config/firebase-config';

const Tab2: React.FC = () => {
  const [passwordLama, setPasswordLama] = React.useState<string>();
  const [passwordBaru, setPasswordBaru] = React.useState<string>();
  const [confirmPasswordBaru, setConfirmPasswordBaru] = React.useState<string>();

  const updateProfile = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (passwordBaru === passwordLama) {
      toast({ message: 'password lama tidak boleh sama dengan password baru' })
    } else if (passwordBaru !== confirmPasswordBaru) {
      toast({ message: 'password baru tidak sama dengan konfirmasi password'})
    } else {
      const user = await getCurrentUser();
      const newPassword = passwordBaru && passwordBaru;
      const updatedProfile = user.updatePassword(newPassword || '');
      if (updatedProfile !== null) {
        console.log(updatedProfile)
        toast({ message: 'Sukses mengupdate profile' })
        setPasswordLama('')
        setPasswordBaru('')
        setConfirmPasswordBaru('')
      }
    }
  }

  const handlePasswordLama = (value: string | null | undefined) => {
    setPasswordLama(value?.toString())
  }

  const handlePasswordBaru = (value: string | null | undefined) => {
    setPasswordBaru(value?.toString())
  }

  const handleConfirmPasswordBaru = (value: string | null | undefined) => {
    setConfirmPasswordBaru(value?.toString())
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
           <Form onSubmit={updateProfile}>
              <Input color="light" name='password_lama' onIonChange={(e) => handlePasswordLama(e.detail.value) } value={passwordLama} placeholder="Password Lama" type="password" />
              <Input color="light" name='password_baru' onIonChange={(e) => handlePasswordBaru(e.detail.value)} value={passwordBaru} placeholder="Password Baru" type="password" />
              <Input color="light" name='konfirmasi_password_baru' onIonChange={(e) => handleConfirmPasswordBaru(e.detail.value) } value={confirmPasswordBaru} placeholder="Konfirmasi Password Baru" type="password" />
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

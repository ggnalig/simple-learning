import React from 'react';
import {
  IonContent,
  IonHeader,
  IonButtons,
} from "@ionic/react";
import { getCurrentUser, storage } from '../../config/firebase-config'
import { StyledToolbar, Title, PageContainer, CardWrapper, Card, AvatarWrapper, Form, Input, ButtonUpdate } from './style';
import { toast } from '../../utils/toast';
import { useHistory } from 'react-router-dom';
import ImageUploading, { ImageListType } from 'react-images-uploading';

const Tab2: React.FC = () => {
  const [name, setName] = React.useState<string | null | undefined>('');
  const [kelas, setKelas] = React.useState<string | null | undefined>('');
  const [images, setImages] = React.useState([]);
  const [imageLink, setImageLink] = React.useState<string>();
  const history = useHistory();
  const maxNumber = 69;

  const onChange = async (imageList: ImageListType, addUpdateIndex: number[] | undefined) => {
    if (imageList) {
      setImages(imageList as never[]);
    }
    const fileName = `${name}-${new Date().getTime()}`;
    const uploadTask = storage.ref(`/images/${fileName}`).put(new File(images, 'image', { type: 'image/jpeg' }));
    uploadTask.on("state_changed", console.log, console.error, () => {
      storage
        .ref("images")
        .getDownloadURL()
        .then((url) => {
          setImageLink(url)
        })
    });
  };


  const updateProfile = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const payload = {
      displayName: name,
      photoURL: imageLink
    }
    const data = await getCurrentUser();
    if (data) {
      try {
        const updatedProfile = await data.updateProfile(payload);
        if (updatedProfile !== null) {
          toast({ message: 'Sukses menambahkan profile' })
          history.push('/home')
        }
      } catch (error) {
        toast({ message: error.message })
      }
    }
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
            <Title>Input Profil</Title>
            </IonButtons>
          </StyledToolbar>
        </IonHeader>
        <CardWrapper>
          <Card>
          <AvatarWrapper>
             <ImageUploading
        multiple
        value={images}
        onChange={onChange}
        maxNumber={maxNumber}
        dataURLKey="data_url"
      >
        {({
          imageList,
          onImageUpload,
          onImageUpdate,
          onImageRemove,
          dragProps,
        }) => (
          // write your building UI
          <div className="upload__image-wrapper">
            {imageList.toString() ? (
              <>
                {imageList.map((image, index) => (
                  <div>
                  <img src={image['data_url']} alt="" width="100" />
                    <div className="image-item__btn-wrapper">
                      <button onClick={() => onImageUpdate(index)}>Update</button>
                      <button onClick={() => onImageRemove(index)}>Remove</button>
                    </div>
                  </div>
                ))}
              </>
            ): (
              <button
                style={{ width: '100%', height: '15rem', borderRadius: "10px" }}
                onClick={onImageUpload}
                {...dragProps}
              >
                Upload Gambar
              </button>          
            )}
          </div>
        )}
      </ImageUploading>
          </AvatarWrapper>
           <Form onSubmit={updateProfile}>
              <Input color="light" name='username' onIonChange={(e) => handleNameInput(e.detail.value) } placeholder="Nama" type="text" />
              <Input color="light" name='kelas' onIonChange={(e) => handleKelasInput(e.detail.value) }placeholder="Kelas" type="text" />
              <ButtonUpdate expand="full" shape="round" type="submit">
                Simpan
              </ButtonUpdate>
            </Form>
         </Card>
        </CardWrapper>
      </IonContent>
    </PageContainer>
  );
};

export default Tab2;

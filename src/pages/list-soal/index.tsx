import React from 'react';
import {
  IonContent,
  IonHeader,
  IonButtons,
} from "@ionic/react";
import { StyledToolbar, StyledBackButton, Title, PageContainer, CardWrapper, Card, ThumbnailWrapper } from './style';
import { chevronBackOutline } from 'ionicons/icons';
import SoalImage from '../../components/img/soal-illustration.png';
import { useHistory } from 'react-router-dom';

const Tab2: React.FC = () => {
  const history = useHistory();
  const [videos] = React.useState([
    {
      id: 1,
      kelas: 'kelas-1',
      list_soal:  [
          {id: 1, soal: "1 + 1", jawaban: 2, skor: 20},
          {id: 2, soal: "2 + 5", jawaban: 7, skor: 20},
          {id: 3, soal: "7 + 7", jawaban: 14, skor: 20},
          {id: 4, soal: "3 + 3", jawaban: 6, skor: 20},
          {id: 5, soal: "4 + 5", jawaban: 9, skor: 20},
        ]},
    {
      id: 2,
      kelas: 'kelas-2',
      list_soal:  [
          {id: 1, soal: "1 + 1", jawaban: 2, skor: 20},
          {id: 2, soal: "2 + 5", jawaban: 7, skor: 20},
          {id: 3, soal: "7 + 7", jawaban: 14, skor: 20},
          {id: 4, soal: "3 + 3", jawaban: 6, skor: 20},
          {id: 5, soal: "4 + 5", jawaban: 9, skor: 20},
        ]},
    {
      id: 3,
      kelas: 'kelas-3',
      list_soal:  [
          {id: 1, soal: "1 + 1", jawaban: 2, skor: 20},
          {id: 2, soal: "2 + 5", jawaban: 7, skor: 20},
          {id: 3, soal: "7 + 7", jawaban: 14, skor: 20},
          {id: 4, soal: "3 + 3", jawaban: 6, skor: 20},
          {id: 5, soal: "4 + 5", jawaban: 9, skor: 20},
        ]},
    {
      id: 4,
      kelas: 'kelas-4',
      list_soal:  [
          {id: 1, soal: "1 + 1", jawaban: 2, skor: 20},
          {id: 2, soal: "2 + 5", jawaban: 7, skor: 20},
          {id: 3, soal: "7 + 7", jawaban: 14, skor: 20},
          {id: 4, soal: "3 + 3", jawaban: 6, skor: 20},
          {id: 5, soal: "4 + 5", jawaban: 9, skor: 20},
        ]},
    {
      id: 5,
      kelas: 'kelas-5',
      list_soal:  [
          {id: 1, soal: "1 + 1", jawaban: 2, skor: 20},
          {id: 2, soal: "2 + 5", jawaban: 7, skor: 20},
          {id: 3, soal: "7 + 7", jawaban: 14, skor: 20},
          {id: 4, soal: "3 + 3", jawaban: 6, skor: 20},
          {id: 5, soal: "4 + 5", jawaban: 9, skor: 20},
        ]},
    {
      id: 6,
      kelas: 'kelas-6',
      list_soal:  [
          {id: 1, soal: "1 + 1", jawaban: 2, skor: 20},
          {id: 2, soal: "2 + 5", jawaban: 7, skor: 20},
          {id: 3, soal: "7 + 7", jawaban: 14, skor: 20},
          {id: 4, soal: "3 + 3", jawaban: 6, skor: 20},
          {id: 5, soal: "4 + 5", jawaban: 9, skor: 20},
        ]},
  ])
  return (
    <PageContainer>
      <IonContent>
        <IonHeader className='ion-no-border'>
          <StyledToolbar>
            <IonButtons>
              <StyledBackButton icon={chevronBackOutline} text='' defaultHref='/home' />
            <Title>Daftar Soal</Title>
            </IonButtons>
          </StyledToolbar>
        </IonHeader>
        <CardWrapper>
          {videos?.map(video => {
            return (
              <Card onClick={() => history.push({ pathname: `/list-soal/${video.kelas}`, state: video})}>
                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                  <div style={{ display:'flex', flexDirection:'row', alignItems:'center' }}>
                    <ThumbnailWrapper>
                      <img src={SoalImage} alt="thumbnail"/>
                    </ThumbnailWrapper>
                    <div style={{ margin: '0rem .5rem .6rem', display:'flex', flexDirection: 'column', justifyContent:'center' }}>
                      <h4 style={{ color: '#121212', textTransform: 'capitalize' }}><b>{video.kelas.replace('-', ' ')}</b></h4>
                    </div>
                  </div>
                </div>
              </Card>
            )
          })}

        </CardWrapper>
      </IonContent>
    </PageContainer>
  );
};

export default Tab2;

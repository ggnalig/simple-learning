import React from 'react';
import {
  IonContent,
  IonHeader,
  IonButtons,
  IonSpinner
} from "@ionic/react";
import ReactPlayer from 'react-player/youtube';
import { StyledToolbar, StyledBackButton, Title, PageContainer, CardWrapper, Card } from './style';
import { chevronBackOutline } from 'ionicons/icons';
import { useParams, useLocation } from 'react-router-dom';

interface StateProps {
  author: string;
  id: number;
  judul: string;
  jumlah_video: number;
  kelas: string;
  list_video: string[];
}

const Tab2: React.FC = () => {
  const { judul } = useParams<{ judul: string; }>();
  const { state } = useLocation<StateProps>();
  const [mediaReady, setMediaReady] = React.useState(false)
  console.log(state)
  
  return (
    <PageContainer>
      <IonContent>
        <IonHeader style={{ zIndex: 2, position: 'fixed', width: '100%' }} className='ion-no-border'>
          <StyledToolbar>
            <IonButtons>
              <StyledBackButton icon={chevronBackOutline} text='' defaultHref='/home' />
            <Title>{judul?.replace('-', ' ')}</Title>
            </IonButtons>
          </StyledToolbar>
        </IonHeader>
        <CardWrapper>
          <div style={{ zIndex: 2, position: 'fixed', width: '100%', top: '4rem' }}>
              <ReactPlayer onReady={() => setMediaReady(true)} url={state?.list_video} width='100%' />
          </div>
          <div style={{ marginTop: '26rem' }}>
          <Card>
              <h6 style={{ textAlign:'justify', color: '#121212', fontWeight: 'bold' }}>Perbedaan Antara Angka dan Bilangan</h6>
              <p style={{ textAlign:'justify', color: '#121212' }}>Angka adalah suatu tanda atau lambang yang digunakan untuk melambangkan bilangan. Atau dengan kata lain Angka disebut juga digit. Angka tidak sama dengan bilangan, tetapi bilangan terdiri dari angka-angka. Contoh :  “123” merupakan bilangan seratus dua puluh tiga yang terdiri dari tiga angka. Pada poin ini, penjumlahan dua bilangan dapat berupa penjumlahan dua bilangan satuan, dua bilangan puluhan, dua bilangan ratusan ataupun penjumlahan antara bilangan satu dengan yang lainnya.</p>
          </Card>
          <Card>
              <h6 style={{ textAlign:'justify', color: '#121212', fontWeight: 'bold' }}>Contoh Penjumlahan Dua Bilangan</h6>
              <p style={{ textAlign: 'justify', color: '#121212' }}>
                <span style={{ margin: '.5rem 8rem .5rem', border: '2px solid black', padding: '.1rem' }}>15 + 7 = 22</span><br/><br/>
                15 merupakan bilangan yang pertama yang dijumlahkan dengan 7 sebagai bilangan yang kedua dan 22 merupakan hasil dari penjumlahan dua bilangan tersebut.<br /><br /> <span style={{ margin: '.5rem 7.3rem .5rem', border: '2px solid black', padding: '.1rem' }}>175 + 50 = 225</span><br/><br/>175 merupakan bilangan yang pertama yang dijumlahkan dengan 50 sebagai bilangan yang kedua dan 225 merupakan hasil dari pejumlahan kedua bilangan tersebut.</p>
          </Card>
          </div>
        </CardWrapper>
      </IonContent>
    </PageContainer>
  );
};

export default Tab2;

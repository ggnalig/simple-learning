import React from 'react';
import {
  IonContent,
  IonHeader,
  IonButtons,
} from "@ionic/react";
import ProgressBar from "@ramonak/react-progress-bar";
import { StyledToolbar, StyledBackButton, Title, PageContainer, CardWrapper, Card, ThumbnailWrapper } from './style';
import { chevronBackOutline } from 'ionicons/icons';
import SoalImage from '../../components/img/soal-illustration.png';
import { useLocation } from 'react-router-dom';

interface StateProps {
  author: string;
  id: number;
  judul: string;
  jumlah_video: number;
  kelas: string;
  list_soal: Soal[];
}

interface Soal {
  id: number,
  soal: string,
  jawaban: number,
  skor: number
}

const Tab2: React.FC = () => {
  const { state } = useLocation<StateProps>();
  const [point, setPoint] = React.useState(0);
  
  return (
    <PageContainer>
      <IonContent>
        <IonHeader className='ion-no-border'>
          <StyledToolbar>
            <IonButtons>
              <StyledBackButton icon={chevronBackOutline} text='' defaultHref='/home' />
              <Title>{state?.kelas.replace('-', ' ')}</Title>
            </IonButtons>
          </StyledToolbar>
        </IonHeader>
        <CardWrapper>
          {state?.list_soal?.map(soal => {
            return (
              <Card key={soal.id}>
                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems:'center' }}>
                  <div style={{ display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'center' }}>
                    <div style={{ margin: '0rem .5rem .6rem', display:'flex', flexDirection: 'column', justifyContent:'center', alignItems: 'center' }}>
                      <h4 style={{ color: '#121212' }}><b>{soal.soal}</b></h4>
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

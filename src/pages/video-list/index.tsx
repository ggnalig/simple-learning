import React from 'react';
import {
  IonContent,
  IonHeader,
  IonButtons,
} from "@ionic/react";
import ProgressBar from "@ramonak/react-progress-bar";
import { StyledToolbar, StyledBackButton, Title, PageContainer, CardWrapper, Card, ThumbnailWrapper } from './style';
import { chevronBackOutline } from 'ionicons/icons';
import ThumbnailImage from '../../components/img/vid-thumbnail.png';
import { useParams, useHistory, useLocation } from 'react-router-dom';

interface StateProps {
  id: number;
  kelas: string;
  list_materi: ListMateri[] | undefined;
}

interface ListMateri {
  author: string;
  id: number;
  judul: string;
  jumlah_video: number;
  kelas: string;
  list_video: string[];
}

const Tab2: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { state } = useLocation<StateProps>();
  const history = useHistory();
  console.log(state)

  return (
    <PageContainer>
      <IonContent>
        <IonHeader className='ion-no-border'>
          <StyledToolbar>
            <IonButtons>
              <StyledBackButton icon={chevronBackOutline} text='' defaultHref='/home' />
            <Title>{id?.replace('-', ' ')}</Title>
            </IonButtons>
          </StyledToolbar>
        </IonHeader>
        <CardWrapper>
          {state?.list_materi?.map(video => {
            return (
              <Card key={state.id} onClick={() => history.push({ pathname:`/materi/${id}/${video.judul}`, state: video })}>
                <div style={{ display:'flex', flexDirection: 'column', justifyContent:'center' }}>
                  <div style={{ display:'flex', flexDirection:'row', alignItems:'center' }}>
                    <ThumbnailWrapper>
                      <img src={ThumbnailImage} alt="thumbnail"/>
                    </ThumbnailWrapper>
                    <div style={{ margin: '0rem .5rem .6rem', display:'flex', flexDirection: 'column', justifyContent:'center' }}>
                      <h4 style={{ color: '#121212', fontSize: '.8rem', textTransform: 'capitalize' }}><b>{video.judul}</b></h4>
                      <h6 style={{ margin: '0rem', padding: '0rem', fontSize: '.6rem', color: '#121212' }}>{video.jumlah_video} Video</h6>
                      <h6 style={{ margin: '0rem', padding: '0rem', fontSize: '.6rem', color: '#121212' }}>Oleh: {video.author}</h6>
                      <h6 style={{ margin: '0rem', padding: '0rem', fontSize: '.6rem', color: '#121212' }}>Kelas: {video.kelas}</h6>
                    </div>
                  </div>
                  <ProgressBar bgcolor='#4EA4E9' completed={60} />
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

import React from 'react';
import {
  IonContent,
  // IonInput
} from "@ionic/react";
import CardBackground from '../../components/img/card-background.svg'
import { HeaderContainer, PageContainer, HeaderWrapper, NameWrapper, AvatarWrapper, SearchBarWrapper, CardWrapper, Card } from "./style";
import { useHistory } from 'react-router-dom';
import { getCurrentUser } from '../../config/firebase-config'
import * as firebase from 'firebase'

const Home: React.FC = () => {
  const [profile, setProfile] = React.useState<firebase.default.UserInfo | null>();
  const [materi] = React.useState([
    {
      id: 1,
      kelas: 'kelas-1',
      list_materi: [{
        id: 1,
        judul: "Penjumlahan",
        jumlah_video: 7,
        author: "RajaTutordotcom",
        kelas: "1 SD",
        list_video: [
          'https://www.youtube.com/watch?v=i15SMVJisEg',
          'https://www.youtube.com/watch?v=-A92RCPfMWA',
          'https://www.youtube.com/watch?v=lutCpQ9quz8',
          'https://www.youtube.com/watch?v=djOdEnyH158',
          'https://www.youtube.com/watch?v=g95nz09V_lE',
          'https://www.youtube.com/watch?v=TlSwnWwPX1A',
          'https://www.youtube.com/watch?v=npSOvsycrKU'
        ]
      }]
    },
    {
      id: 2,
      kelas: 'kelas-2',
      list_materi: [{
        id: 1,
        judul: "Penjumlahan",
        jumlah_video: 7,
        author: "RajaTutordotcom",
        kelas: "2 SD",
        list_video: [
          'https://www.youtube.com/watch?v=i15SMVJisEg',
          'https://www.youtube.com/watch?v=-A92RCPfMWA',
          'https://www.youtube.com/watch?v=lutCpQ9quz8',
          'https://www.youtube.com/watch?v=djOdEnyH158',
          'https://www.youtube.com/watch?v=g95nz09V_lE',
          'https://www.youtube.com/watch?v=TlSwnWwPX1A',
          'https://www.youtube.com/watch?v=npSOvsycrKU'
        ]
      }] },
    {
      id: 3,
      kelas: 'kelas-3',
      list_materi: [{
        id: 1,
        judul: "Penjumlahan",
        jumlah_video: 7,
        author: "RajaTutordotcom",
        kelas: "3 SD",
        list_video: [
          'https://www.youtube.com/watch?v=i15SMVJisEg',
          'https://www.youtube.com/watch?v=-A92RCPfMWA',
          'https://www.youtube.com/watch?v=lutCpQ9quz8',
          'https://www.youtube.com/watch?v=djOdEnyH158',
          'https://www.youtube.com/watch?v=g95nz09V_lE',
          'https://www.youtube.com/watch?v=TlSwnWwPX1A',
          'https://www.youtube.com/watch?v=npSOvsycrKU'
        ]
      }] },
    {
      id: 4,
      kelas: 'kelas-4',
      list_materi: [{
        id: 1,
        judul: "Penjumlahan",
        jumlah_video: 7,
        author: "RajaTutordotcom",
        kelas: "4 SD",
        list_video: [
          'https://www.youtube.com/watch?v=i15SMVJisEg',
          'https://www.youtube.com/watch?v=-A92RCPfMWA',
          'https://www.youtube.com/watch?v=lutCpQ9quz8',
          'https://www.youtube.com/watch?v=djOdEnyH158',
          'https://www.youtube.com/watch?v=g95nz09V_lE',
          'https://www.youtube.com/watch?v=TlSwnWwPX1A',
          'https://www.youtube.com/watch?v=npSOvsycrKU'
        ]
      }] },
    {
      id: 5,
      kelas: 'kelas-5',
      list_materi: [{
        id: 1,
        judul: "Penjumlahan",
        jumlah_video: 7,
        author: "RajaTutordotcom",
        kelas: "5 SD",
        list_video: [
          'https://www.youtube.com/watch?v=i15SMVJisEg',
          'https://www.youtube.com/watch?v=-A92RCPfMWA',
          'https://www.youtube.com/watch?v=lutCpQ9quz8',
          'https://www.youtube.com/watch?v=djOdEnyH158',
          'https://www.youtube.com/watch?v=g95nz09V_lE',
          'https://www.youtube.com/watch?v=TlSwnWwPX1A',
          'https://www.youtube.com/watch?v=npSOvsycrKU'
        ]
      }] },
    {
      id: 6,
      kelas: 'kelas-6',
      list_materi: [{
        id: 1,
        judul: "Penjumlahan",
        jumlah_video: 7,
        author: "RajaTutordotcom",
        kelas: "6 SD",
        list_video: [
          'https://www.youtube.com/watch?v=i15SMVJisEg',
          'https://www.youtube.com/watch?v=-A92RCPfMWA',
          'https://www.youtube.com/watch?v=lutCpQ9quz8',
          'https://www.youtube.com/watch?v=djOdEnyH158',
          'https://www.youtube.com/watch?v=g95nz09V_lE',
          'https://www.youtube.com/watch?v=TlSwnWwPX1A',
          'https://www.youtube.com/watch?v=npSOvsycrKU'
        ]
      }] },
  ])
  const history = useHistory();

  React.useEffect(() => {
    getCurrentUser().then(result => {
      if (result !== null) {
        setProfile(result.providerData[0])
      }
    })
  }, [])
  return (
    <PageContainer>
      <IonContent>
      <HeaderContainer>
        <HeaderWrapper>
          <NameWrapper>
            <h6>{profile?.displayName}</h6>
            <h5>Kelas 1</h5>
            </NameWrapper>
            {profile !== null ? (
              <AvatarWrapper onClick={() => history.push('/profile')}>
                <img src={profile?.photoURL || undefined} alt="profile"/>
              </AvatarWrapper>) : (null)}
        </HeaderWrapper>
      </HeaderContainer>
        <SearchBarWrapper><h1 style={{ color: '#121212' }}>Selamat Datang</h1></SearchBarWrapper>
        <CardWrapper>
          {materi?.map(data => {
            return (
              <Card key={data.id} background={CardBackground} onClick={() => history.push({pathname: `/materi/${data.kelas}`, state: data})}>
                <h4>{data.kelas.replace('-', ' ')}</h4>
              </Card>
            )
          })}
      </CardWrapper>
      </IonContent>

    </PageContainer>
  );
};

export default Home;

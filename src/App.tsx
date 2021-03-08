import { Redirect, Route } from "react-router-dom";
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { videocam, documentText, home, person } from "ionicons/icons";
import Home from "./pages/home";
import VideoList from "./pages/video-list";
import ListSoal from "./pages/list-soal";
import Soal from "./pages/soal";
import Profile from "./pages/profile";
import Login from "./pages/login-register";
import ChangeProfile from './pages/change-profile';
import ChangePassword from './pages/change-password';
import RegistrationPost from './pages/registration-post';
import Video from './pages/video'

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/video">
            <Video />
          </Route>
          <Route exact path="/list-soal">
            <ListSoal/>
          </Route>
          <Route exact path="/list-soal/:kelas">
            <Soal/>
          </Route>
           <Route exact path="/registration-post">
            <RegistrationPost />
          </Route>
          <Route exact path="/profile">
            <Profile />
          </Route>
          <Route exact path="/materi/:id">
            <VideoList />
          </Route>
          <Route exact path="/materi/:id/:judul">
            <Video />
          </Route>
          <Route exact path="/change-profile">
            <ChangeProfile />
          </Route>
          <Route exact path="/change-password">
            <ChangePassword />
          </Route>
          <Route exact path="/">
            <Redirect to="/login" />
          </Route>
        </IonRouterOutlet>
        <IonTabBar style={{ backgroundColor: '#4D749F' }} slot="bottom">
          <IonTabButton style={{ backgroundColor: '#4D749F' }} tab="home" href="/home">
            <IonIcon style={{ color:'#fff' }} icon={home} />
            <IonLabel style={{ color:'#fff' }}>Home</IonLabel>
          </IonTabButton>
          <IonTabButton style={{ backgroundColor: '#4D749F' }} tab="soal" href="/list-soal">
            <IonIcon style={{ color:'#fff' }} icon={documentText} />
            <IonLabel style={{ color:'#fff' }}>Soal</IonLabel>
          </IonTabButton>
          <IonTabButton style={{ backgroundColor: '#4D749F' }} tab="profile" href="/profile">
            <IonIcon style={{ color:'#fff' }} icon={person} />
            <IonLabel style={{ color:'#fff' }}>Profil</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;

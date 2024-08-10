import React from 'react';
import Avatar from './components/Avatar';
import Header from "./components/Header";
import {AppContainer, Container} from "./styles/styles";
import GlobalStyles from "./styles/globalStyles";
import SettingPanel from "./components/settingPanel";
import RankList from "./components/RankList";
import ProgressBar from "./components/ProgressBar";
import Stats from "./components/Stats";

// В файле вашего компонента или стилей
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Footer from "./components/Footer";



const App: React.FC = () => {

    return (
        <>
            <GlobalStyles/>
            <AppContainer>
                <Header/>
                <Container>
                    <SettingPanel/>
                    <Avatar/>
                    <RankList/>
                    <ProgressBar/>
                    <Stats />
                </Container>
                <Footer/>

            </AppContainer>
        </>

    );
};

export default App;
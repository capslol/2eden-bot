import React from 'react';
import Avatar from './components/Avatar';
import Header from "./components/Header";
import {AppContainer, Container} from "./styles/styles";
import GlobalStyles from "./styles/globalStyles";
import RankList from "./components/RankList";
import ProgressBar from "./components/ProgressBar";
import Stats from "./components/Stats";

import Footer from "./components/Footer";
import ControlPanel from "./components/ControlPanel";

const App: React.FC = () => {

    return (
        <>
            <GlobalStyles/>
            <AppContainer>
                <Header/>
                <Container>
                    <ControlPanel/>
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
import React from 'react';
import styled from 'styled-components';
import Avatar from './components/Avatar';
import Rank from './components/Rank';
import UpgradeButton from './components/UpgradeButton';
import Header from "./components/Header";
import {AppContainer, Container} from "./styles/styles";
import GlobalStyles from "./styles/globalStyles";
import SettingPanel from "./components/settingPanel";
import RankList from "./components/RankList";
import ProgressBar from "./components/ProgressBar";
import Stats from "./components/Stats";


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
                    <Stats/>
                    {/*<Rank />*/}
                    {/*<UpgradeButton />*/}
                </Container>

            </AppContainer>

        </>

    );
};

export default App;
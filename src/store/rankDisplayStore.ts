import create from 'zustand';
import {UserRank, useStore} from './store';

interface RankDisplayState {
    currentRankToDisplay: number;
    currentLevelToDisplay: number;
    ranks: UserRank[];
    setCurrentRankToDisplay: (index: number) => void;
    setCurrentLevelToDisplay: (index: number) => void;
    upgradeLevelOrRank: () => void;
}

export const useRankDisplayStore = create<RankDisplayState>((set) => ({
    currentRankToDisplay: useStore.getState().currentRank,
    currentLevelToDisplay: useStore.getState().currentLevel,
    ranks: useStore.getState().ranks,
    setCurrentRankToDisplay: (index) => set({ currentRankToDisplay: index }),
    setCurrentLevelToDisplay: (index) => set({ currentLevelToDisplay: index }),
    upgradeLevelOrRank: () => set((state) => {
        const {currentRankToDisplay, currentLevelToDisplay,  ranks} = state
        const rank = ranks[currentRankToDisplay];

        const lastRankIndex = state.ranks.length - 1;
        const lastLevelIndex = rank.levels.length;


        if (state.currentRankToDisplay === lastRankIndex && state.currentLevelToDisplay === lastLevelIndex) {
            // Достигнут последний ранг и последний уровень, ничего не делаем
            return state;
        } else if (state.currentLevelToDisplay < lastLevelIndex) {
            // Увеличиваем уровень, если не достигли последнего уровня
            return { currentLevelToDisplay: state.currentLevelToDisplay + 1 };
        } else {
            // Достигнут последний уровень, переходим к следующему рангу и сбрасываем уровень на 0
            return {
                currentRankToDisplay: state.currentRankToDisplay + 1,
                currentLevelToDisplay: 1
            };
        }

    })
}));

import create from 'zustand';

// Интерфейс для характеристик ранга
export interface UserRank {
    name: string;
    levels: number;
    impactForce: number;
    maxEnergy: number;
    recovery: number;
}

// Интерфейс состояния хранилища
interface StoreState {
    balance: number;
    userName: string;
    currentRank: number;
    currentLevel: number;
    ranks: UserRank[];
    upgradeRank: () => void;
    incrementTokens: () => void;
}

// Определение рангов с характеристиками
const ranks: UserRank[] = [
    { name: 'Acolyte', levels: 1, impactForce: 10, maxEnergy: 100, recovery: 5 },
    { name: 'Deacon', levels: 2, impactForce: 20, maxEnergy: 200, recovery: 10 },
    { name: 'Priest', levels: 3, impactForce: 30, maxEnergy: 300, recovery: 15 },
    { name: 'Bishop', levels: 2, impactForce: 40, maxEnergy: 400, recovery: 20 },
    { name: 'Archbishop', levels: 1, impactForce: 50, maxEnergy: 500, recovery: 25 },
];

export const useStore = create<StoreState>((set) => ({
    balance: 0,
    userName: 'Jugglerez',
    currentRank: 0, // Начальный ранг - Acolyte (индекс 0)
    currentLevel: 1,
    ranks,
    incrementTokens: () => set((state) => ({ balance: state.balance + 1000 })),
    upgradeRank: () => set((state) => {
        const { currentRank, currentLevel, balance, ranks } = state;
        const nextRankIndex = currentRank + 1;
        const nextLevelIndex = currentLevel + 1;

        if (nextLevelIndex > ranks[currentRank].levels) {
            if (nextRankIndex >= ranks.length) return state; // Не можем повысить ранг выше последнего
            if (balance < 2000) return state; // Не хватает токенов
            return {
                currentRank: nextRankIndex,
                currentLevel: 1,
                balance: balance - 2000,
            };
        } else {
            if (balance < 2000) return state; // Не хватает токенов
            return {
                currentLevel: nextLevelIndex,
                balance: balance - 2000,
            };
        }
    }),
}));

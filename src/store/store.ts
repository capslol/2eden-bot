import create from 'zustand';
import { Swiper } from 'swiper';

import AcolyteIcon from '../assets/icons/acolyte.svg';
import DeaconIcon from '../assets/icons/deacon.svg';
import PriestIcon from '../assets/icons/priest.svg';
import BishopIcon from '../assets/icons/bishop.svg';
import ArchbishopIcon from '../assets/icons/archbishop.svg';

export interface UserRank {
    name: string;
    levels: UserRankLevel[];
    image: string;
}

interface UserRankLevel {
    impactForce: number;
    maxEnergy: number;
    recovery: number;
}

interface StoreState {
    balance: number;
    userName: string;
    currentRank: number;
    currentLevel: number;
    ranks: UserRank[];
    upgradeRank: () => void;
    setCurrentRank: (rankIndex: number) => void;
    setCurrentLevel: (level: number) => void;
    increaseBalance: () => void;
    swiperInstance: Swiper | null;
    setSwiperInstance: (swiper: Swiper) => void
}

const ranks: UserRank[] = [
    {
        name: 'Acolyte',
        levels: [
            { impactForce: 0, maxEnergy: 1000, recovery: 5 },
        ],
        image: AcolyteIcon
    },
    {
        name: 'Deacon',
        levels: [
            { impactForce: 200, maxEnergy: 2000, recovery: 10 },
            { impactForce: 250, maxEnergy: 2500, recovery: 12 },
        ],
        image: DeaconIcon
    },
    {
        name: 'Priest',
        levels: [
            { impactForce: 300, maxEnergy: 3000, recovery: 15 },
            { impactForce: 350, maxEnergy: 3500, recovery: 18 },
            { impactForce: 400, maxEnergy: 4000, recovery: 20 },
        ],
        image: PriestIcon
    },
    {
        name: 'Bishop',
        levels: [
            { impactForce: 450, maxEnergy: 4000, recovery: 20 },
            { impactForce: 500, maxEnergy: 4500, recovery: 22 },
        ],
        image: BishopIcon
    },
    {
        name: 'Archbishop',
        levels: [
            { impactForce: 550, maxEnergy: 5000, recovery: 25 },
            { impactForce: 600, maxEnergy: 5500, recovery: 30 },
            { impactForce: 650, maxEnergy: 6000, recovery: 35 },
        ],
        image: ArchbishopIcon
    },
];

export const useStore = create<StoreState>((set) => ({
    balance: 0,
    userName: 'Jugglerez',
    currentRank: 0,
    currentLevel: 1,
    ranks,
    swiperInstance: null,
    setSwiperInstance: (swiper) => set({ swiperInstance: swiper }),
    setCurrentRank: (rankIndex) => set({ currentRank: rankIndex, currentLevel: 1 }),
    setCurrentLevel: (level) => set({ currentLevel: level }),
    increaseBalance: () => set((state) => {
        const { balance, ranks, currentRank, currentLevel } = state;
        const impactForce = ranks[currentRank].levels[currentLevel - 1].impactForce;
        return {
            balance: balance + 1000 + impactForce
        };
    }),
    upgradeRank: () => set((state) => {
        const { currentRank, currentLevel, balance, ranks,swiperInstance } = state;
        const rank = ranks[currentRank];
        const lastRankIndex = state.ranks.length - 1;
        const lastLevelIndex = rank.levels.length;

        if (currentRank === lastRankIndex && currentLevel === lastLevelIndex) {
            return state;
        } else if (currentLevel < lastLevelIndex) {
            return {
                currentLevel: currentLevel + 1,
                balance: balance - 2000
            };
        } else {
            console.log(swiperInstance)
            swiperInstance.slideTo(currentRank + 1)
            return {
                currentRank: currentRank + 1,
                currentLevel: 1,
                balance: balance - 2000

            };
        }
    }),

}));



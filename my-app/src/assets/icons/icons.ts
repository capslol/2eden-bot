import AcolyteIcon from './acolyte.svg';
import DeaconIcon from './deacon.svg';
import PriestIcon from './priest.svg';
import BishopIcon from './bishop.svg';
import ArchbishopIcon from './archbishop.svg';

export type Rank = 'Acolyte' | 'Deacon' | 'Priest' | 'Bishop' | 'Archbishop';

const rankIcons: Record<Rank, string> = {
    Acolyte: AcolyteIcon,
    Deacon: DeaconIcon,
    Priest: PriestIcon,
    Bishop: BishopIcon,
    Archbishop: ArchbishopIcon,
};

export default rankIcons;

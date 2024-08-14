// BalanceCounter.tsx
import React, {useRef, useEffect} from 'react';
import {CountUp} from 'countup.js';
import {useStore} from "../store/store";
import styled from "styled-components";
import {colors} from "../styles/styles";

// interface BalanceCounterProps {
//     endValue: number;
//     duration?: number; // Опционально, длительность анимации в секундах
// }

const BalanceCounter: React.FC = () => {
    const {balance, increaseBalance} = useStore();
    const countUpRef = useRef<HTMLSpanElement>(null);
    const prevBalance = useRef(balance);
    console.log(prevBalance)

    useEffect(() => {
        initCountUp()
    }, [balance]);

    useEffect(() => {
        console.log('BalanceCounter')
    })

    function initCountUp() {
        if (countUpRef.current) {
            const countUp = new CountUp(countUpRef.current, balance, {
                startVal: prevBalance.current,
                decimalPlaces: 0,
                duration: 0.5
            });
            if (!countUp.error) {
                countUp.start();
            } else {
                console.error(countUp.error);
            }
        }
        prevBalance.current = balance;
    }

    return (
        <Balance>
            <span ref={countUpRef}>{balance}</span>
        </Balance>
    );
};

const Balance = styled.span`
  color: ${colors.primaryText};
  font-size: 18px;
  font-weight: bold;
`;

export default BalanceCounter;

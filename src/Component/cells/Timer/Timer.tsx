import React, { useEffect, useState } from "react";
import { FlexContainer } from "../../common";
import styles from './Timer.module.scss'

const getPadTime = (time: any) => time.toString().padStart(2, '0');

export const Timer = () => {
    const [timeLeft, setTimeLeft] = useState(2 * 60);
    const minutes = getPadTime(Math.floor(timeLeft / 60));
    const seconds = getPadTime(timeLeft - minutes * 60);

    return (
        <FlexContainer className={styles.Timer} alignItems="center" justifyContent="center" height={200}>
            <span>{minutes}</span>
            <span>:</span>
            <span>{seconds}</span>
        </FlexContainer>
    )
} 

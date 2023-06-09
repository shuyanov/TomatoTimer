import React, { useEffect, useState } from "react";
import { FlexContainer } from "../../common";
import styles from './Timer.module.scss'

const getPadTime = (time: any) => time.toString().padStart(2, '0');

type TimerProps = {
    minutes: number;
    seconds: number;
};

export const Timer: React.FC<TimerProps> = ({ minutes, seconds }) => {
    return (
        <FlexContainer className={styles.Timer} alignItems="center" justifyContent="center" height={200}>
            <span>{minutes}</span>
            <span>:</span>
            <span>{seconds}</span>
        </FlexContainer>
    )
} 

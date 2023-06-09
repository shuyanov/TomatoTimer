import React from "react";
import { FlexContainer } from "../../common";
import styles from './ButtonTimer.module.scss'

export type ButtonTimerProps = {
    label: string,
    backgroundColor?: string
    color?: string
    style?: React.CSSProperties
}

export const ButtonTimer: React.FC<ButtonTimerProps> = ({ backgroundColor, color, label, style }) => {
    return (
        <button className={styles.ButtonTimer} style={{ backgroundColor, color, ...style }}>
            {label}
        </button>
    )
}

import React, { useEffect, useState } from "react";
import { FlexContainer } from "../../common";
import { ButtonTimer } from "../../atom/ButtonTimer/ButtonTimer";
import { Timer } from "../../cells/Timer/Timer";

const getPadTime = (time: any) => time.toString().padStart(2, '0');

export const TimerPage = () => {

    const [timeLeft, setTimeLeft] = useState(25 * 60);
    const [isCounting, setIsCounting] = useState(false);

    const minutes = getPadTime(Math.floor(timeLeft / 60));
    const seconds = getPadTime(timeLeft - minutes * 60);

    useEffect(() => {
        const interval = setInterval(() => {
            isCounting &&
            setTimeLeft((timeLeft) => (timeLeft >= 1 ? timeLeft - 1 : 0))
        }, 1000);
        if (timeLeft === 0) setIsCounting(false);
        return () => {
            clearInterval(interval);
        };
    }, [timeLeft, isCounting]);

    const handleStart = () => {
        if (timeLeft === 0) setTimeLeft(25 * 60);
        setIsCounting(true);
    };
    const handleStop = () => {
        setIsCounting(false);
    };
    const handleReset = () => {
        setIsCounting(false);
        setTimeLeft(25 * 60);
    };

    return (
        <FlexContainer>
            <FlexContainer flexDirection="column">
                <FlexContainer>
                    <Timer seconds={seconds} minutes={minutes} />
                </FlexContainer>
                <FlexContainer alignItems="center" height={100} justifyContent="center" gap={40}>
                    {isCounting ? (
                        <ButtonTimer onClic={handleStop} label="Stop" />
                    ) : (
                        <ButtonTimer onClic={handleStart} label="Start" />
                    )}
                    <ButtonTimer onClic={handleReset} label="Restart" />
                </FlexContainer>
            </FlexContainer>
        </FlexContainer>
    )
}

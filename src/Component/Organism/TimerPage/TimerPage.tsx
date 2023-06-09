import React from "react";
import { FlexContainer } from "../../common";
import { ButtonTimer } from "../../atom/ButtonTimer/ButtonTimer";
import { Timer } from "../../cells/Timer/Timer";


export const TimerPage = () => {
    return (
        <FlexContainer>
            <FlexContainer flexDirection="column">
                <FlexContainer>
                    <Timer />
                </FlexContainer>
                <FlexContainer alignItems="center" height={100} justifyContent="center" gap={40}>
                    <ButtonTimer label="Start" />
                    <ButtonTimer label="Pause" />
                    <ButtonTimer label="Stop" />
                </FlexContainer>
            </FlexContainer>
        </FlexContainer>
    )
}

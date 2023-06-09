import React, { PropsWithChildren } from "react";
import { FlexContainer } from "../FlexContainer";

const Header = ({ children }: PropsWithChildren<object>) => {
    return (
        <FlexContainer
            position="sticky"
            flexDirection="row"
            justifyContent="center"
            alignItems="center"
            height={100}
            width={'100%'}
            top={0}
            zIndex={'auto'}
            style={{ backgroundColor: '#C25957' }}
        >
            {children}
        </FlexContainer>
    )
}

const Body = ({ children }: PropsWithChildren<object>) => {
    return (
        <FlexContainer justifyContent='center'>
            {children}
        </FlexContainer>
    )
}

const Footer = ({ children }: PropsWithChildren<object>) => {
    return (
        <FlexContainer
            flexDirection="row"
            top={'auto'}
            position="sticky"
            alignItems="center"
            justifyContent="center"
            style={{ backgroundColor: '#5C2A29' }}
        >
            {children}
        </FlexContainer>
    )
}

export const Layout = ({ children }: PropsWithChildren<object>) => {
    return <FlexContainer flexDirection="column">{children}</FlexContainer>
}

Layout.Header = Header
Layout.Body = Body
Layout.Footer = Footer

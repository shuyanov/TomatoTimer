import React, { PropsWithChildren } from "react";

type FlexContainerProps = {
    flexWrap?: 'wrap' | 'nowrap' | 'wrap-reverse'
    flexDirection?: 'column' | 'row'
    alignItems?: string
    gap?: number
    width?: number
    height?: number | string
    justifyContent?: string
    position?: 'absolute' | 'relative' | 'fixed' | 'sticky'
    className?: string
    top?: number | 'auto' | 0
    zIndex?: number | 'auto'
    style?: React.CSSProperties
}

export const FlexContainer: React.FC<PropsWithChildren<FlexContainerProps>> = ({
    flexWrap,
    flexDirection,
    alignItems,
    gap,
    width,
    height,
    justifyContent,
    position,
    className,
    zIndex,
    top,
    style,
    children,

}) => {
    return (
        <div className={className}
            style={{
                display: 'flex',
                flexWrap: flexWrap || 'nowrap',
                flexDirection: flexDirection || 'row',
                alignItems: alignItems || 'flex-start',
                gap: gap || 0,
                width: width || '100%',
                height: height || '100%',
                justifyContent: justifyContent || 'flex-start',
                position: position || 'static',
                top: top || 'auto' || 0,
                zIndex: zIndex || 'auto',
                ...style,
            }}
        >
            {children}
        </div>
    )
}

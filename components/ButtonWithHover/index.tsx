import React, {PropsWithChildren} from 'react'

type Props = PropsWithChildren<{
    padding?: string
    width?: string
    height?: string
    borderRadius?: string
    backgroundColor?: string
    backgroundHoverColor?: string
    transition?: string
    gap?: string
}>

const ButtonWithHover = ({
    padding,
    width,
    height,
    borderRadius,
    backgroundColor = 'none',
    backgroundHoverColor = 'hsla(206, 100%, 15%, 0.1)',
    transition = '0.25',
    gap = '0.2rem',
    children,
}: Props) => {
    return (
        <button
            style={{
                padding: padding,
                width: width,
                height: height,
                backgroundColor: backgroundColor,
                borderRadius: borderRadius,
            }}
            className="relative flex justify-center items-center outline-none"
        >
            <div
                style={{
                    borderRadius: borderRadius,
                    width: width,
                    height: height,
                    backgroundColor: backgroundHoverColor,
                    transition: `all ${transition}`,
                }}
                className="absolute scale-95 duration-300 opacity-0 hover:scale-100 hover:opacity-100"
            ></div>
            <div
                style={{gap: gap}}
                className="pointer-events-none relative flex w-full h-full justify-center items-center"
            >
                {children}
            </div>
        </button>
    )
}

export default ButtonWithHover

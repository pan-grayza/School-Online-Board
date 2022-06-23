import React, {PropsWithChildren} from 'react'
import styles from './styles.module.css'

type Props = PropsWithChildren<{
    padding?: string
    width?: string
    height?: string
    borderRadius?: string
    backgroundOpacity?: string
    transition?: string
}>

const InstrumentsButton = ({
    padding,
    width,
    height,
    borderRadius,
    backgroundOpacity,
    transition = '0.25',
    children,
}: Props) => {
    return (
        <button
            style={{
                padding: padding,
                width: width,
                height: height,
                borderRadius: borderRadius,
            }}
            className={styles.button}
        >
            <div
                style={{
                    borderRadius: borderRadius,
                    opacity: backgroundOpacity,
                    transition: `all ${transition}`,
                }}
                className={styles.background}
            ></div>
            {children}
        </button>
    )
}

export default InstrumentsButton

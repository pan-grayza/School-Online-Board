import React, {PropsWithChildren} from 'react'
import styles from './styles.module.css'

type Props = PropsWithChildren<{
    padding?: string
    width?: string
    height?: string
}>

const ButtonWithHover = ({padding, width, height, children}: Props) => {
    return (
        <button
            style={{padding: padding, width: width, height: height}}
            className={styles.button}
        >
            {children}
        </button>
    )
}

export default ButtonWithHover

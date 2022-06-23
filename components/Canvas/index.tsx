import React from 'react'
import styles from './styles.module.css'

type Props = {
    backgroundColor?: string
}

const Canvas = ({backgroundColor = '#ffffff'}: Props) => {
    return (
        <div
            style={{backgroundColor: backgroundColor}}
            className={styles.canvas}
        ></div>
    )
}

export default Canvas

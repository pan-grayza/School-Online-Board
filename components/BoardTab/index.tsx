import React from 'react'
import styles from './styles.module.css'

import Canvas from '../Canvas/index'

import InstrumentsBar from '../InstrumentsBar/index'

const BoardTab = () => {
    return (
        <div className={styles.board_tab}>
            <Canvas />

            <InstrumentsBar />
        </div>
    )
}

export default BoardTab

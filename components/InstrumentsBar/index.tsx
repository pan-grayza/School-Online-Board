import React from 'react'
import styles from './styles.module.css'

import InstrumentsButton from '../InstrumentsButton/index'
import InstrumentsBasicTools from '../InstrumentsBasicTools/index'
import InstrumentsSize from '../InstrumentsSize/index'

const InstrumentsBar = () => {
    return (
        <div className={styles.instruments_bar}>
            <InstrumentsBasicTools />
            <InstrumentsSize />
            <div className={styles.tools_section}>
                <div
                    className={`${styles.tools_container} ${styles.container}`}
                ></div>
            </div>
            <div className={styles.colors_section}>
                <div
                    className={`${styles.colors_container} ${styles.container}`}
                ></div>
            </div>
        </div>
    )
}

export default InstrumentsBar

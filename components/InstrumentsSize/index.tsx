import React from 'react'
import styles from './styles.module.css'
import MinusSVG from '../../public/SVGs/instruments/Size/MinusSVG'
import PlusSVG from '../../public/SVGs/instruments/Size/PlusSVG'
import InvisibleButtonWithHover from '../InvisibleButtonWithHover/index'
import Input from '../Input/index'

const InstrumentsSize = () => {
    return (
        <div className={styles.size_section}>
            <div className={`${styles.size_container} ${styles.container}`}>
                <div className={styles.representation_section}>
                    <InvisibleButtonWithHover
                        width="2rem"
                        height="2rem"
                        borderRadius="0.5rem"
                    >
                        <MinusSVG />
                    </InvisibleButtonWithHover>

                    <div className={styles.size_representation}>
                        <div className={styles.circle_representation}></div>
                    </div>
                    <InvisibleButtonWithHover
                        width="2rem"
                        height="2rem"
                        borderRadius="0.5rem"
                    >
                        <PlusSVG />
                    </InvisibleButtonWithHover>
                </div>
            </div>
            <Input width="3rem" height="1.5rem" borderRadius="0.5rem" />
        </div>
    )
}

export default InstrumentsSize

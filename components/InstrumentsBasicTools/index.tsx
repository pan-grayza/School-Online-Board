import React from 'react'
import styles from './styles.module.css'
import InstrumentsButton from '../InstrumentsButton/index'

//Brushes
import BasicBrushSVG from '../../public/SVGs/instruments/BasicTools/BasicBrushSVG'
import PencilSVG from '../../public/SVGs/instruments/BasicTools/PencilSVG'
import MarkerSVG from '../../public/SVGs/instruments/BasicTools/MarkerSVG'
import EraserSVG from '../../public/SVGs/instruments/BasicTools/EraserSVG'

const InstrumentsBasicTools = () => {
    return (
        <div className={styles.brushes_section}>
            <div className={`${styles.brushes_container} ${styles.container}`}>
                <InstrumentsButton
                    width="3rem"
                    height="3rem"
                    borderRadius="0.5rem"
                >
                    <BasicBrushSVG />
                </InstrumentsButton>
                <InstrumentsButton
                    width="3rem"
                    height="3rem"
                    borderRadius="0.5rem"
                >
                    <PencilSVG />
                </InstrumentsButton>
                <InstrumentsButton
                    width="3rem"
                    height="3rem"
                    borderRadius="0.5rem"
                >
                    <MarkerSVG />
                </InstrumentsButton>
                <InstrumentsButton
                    width="3rem"
                    height="3rem"
                    borderRadius="0.5rem"
                >
                    <EraserSVG />
                </InstrumentsButton>
            </div>
        </div>
    )
}

export default InstrumentsBasicTools

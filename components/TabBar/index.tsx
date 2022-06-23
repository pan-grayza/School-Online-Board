import React from 'react'
import Tab from '../Tab/index'
import styles from './styles.module.css'
import PlusSVG from '../../public/SVGs/tabbar/PlusSVG'
import DemacrationLineSVG from '../../public/SVGs/tabbar/DemacrationLineSVG'
import ButtonWithHover from '../InvisibleButtonWithHover/index'

const TabBar = () => {
    return (
        <div className={styles.tab_bar}>
            <Tab title="First board" />
            <Tab title="Second board" />
            <Tab title="Third board" />
            <div className={styles.add_new_tab_container}>
                <ButtonWithHover
                    width="2rem"
                    height="2rem"
                    borderRadius="0.5rem"
                    backgroundOpacity="0.6"
                >
                    <PlusSVG />
                </ButtonWithHover>
            </div>
        </div>
    )
}

export default TabBar

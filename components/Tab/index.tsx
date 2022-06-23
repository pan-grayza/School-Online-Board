import React, {useState} from 'react'
import styles from './styles.module.css'
import CloseSVG from '../../public/SVGs/tabbar/CloseSVG'
import ButtonWithHover from '../InvisibleButtonWithHover/index'

const Tab = (props: {title: string}) => {
    const {title} = props
    return (
        <div className={styles.tab}>
            <p className={styles.tab_title}>{title}</p>
            <div className={styles.close_container}>
                <ButtonWithHover
                    width="1.75rem"
                    height="1.75rem"
                    borderRadius="0.5rem"
                    backgroundOpacity="0.6"
                >
                    <CloseSVG />
                </ButtonWithHover>
            </div>
        </div>
    )
}

export default Tab

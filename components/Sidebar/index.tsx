import React from 'react'
import ButtonWithHover from '../InvisibleButtonWithHover/index'

import MainLogoSVG from '../../public/SVGs/sidebar/MainLogoSVG'
import CreateNewSVG from '../../public/SVGs/sidebar/CreateNewSVG'
import MyBoardsSVG from '../../public/SVGs/sidebar/MyBoardsSVG'
import styles from './styles.module.css'

const index = () => {
    return (
        <div className={styles.sidebar}>
            <div className={styles.logo_section}>
                <div className={styles.logo_contaier}>
                    <MainLogoSVG />
                </div>
            </div>

            <div className={styles.menu}>
                <div className={styles.button_container}>
                    <ButtonWithHover
                        width="5rem"
                        height="5rem"
                        borderRadius="0.5rem"
                    >
                        <CreateNewSVG />
                        <p className={styles.button_text}>Create new</p>
                    </ButtonWithHover>
                </div>
                <div className={styles.button_container}>
                    <ButtonWithHover
                        width="5rem"
                        height="5rem"
                        borderRadius="0.5rem"
                    >
                        <MyBoardsSVG />
                        <p className={styles.button_text}>My boards</p>
                    </ButtonWithHover>
                </div>
            </div>
        </div>
    )
}

export default index

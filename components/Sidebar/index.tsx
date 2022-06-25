import React from 'react'
import ButtonWithHover from '../ButtonWithHover/index'

import MainLogoSVG from '../../public/SVGs/tabbar/MainLogoSVG'
import CreateNewSVG from '../../public/SVGs/sidebar/CreateNewSVG'
import MyBoardsSVG from '../../public/SVGs/tabbar/MyBoardsSVG'

const index = () => {
    return (
        <div className="relative flex flex-col h-screen w-24 bg-primary-100">
            <div className="relative flex flex-col w-full mt-2">
                <div className="relative flex justify-center items-center w-full mt-2 grand-child:scale-95">
                    <ButtonWithHover
                        width="5rem"
                        height="5rem"
                        borderRadius="0.5rem"
                    >
                        <CreateNewSVG />
                        <p className="text-sm">Create new</p>
                    </ButtonWithHover>
                </div>
                <div className="relative flex justify-center items-center w-full mt-2 grand-child:scale-90">
                    <ButtonWithHover
                        width="5rem"
                        height="5rem"
                        borderRadius="0.5rem"
                    >
                        <MyBoardsSVG />
                        <p className="text-sm">My boards</p>
                    </ButtonWithHover>
                </div>
            </div>
        </div>
    )
}

export default index

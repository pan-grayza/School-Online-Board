import React from 'react'
import Tab from '../Tab/index'
import PlusSVG from '../../public/SVGs/tabbar/PlusSVG'
import ButtonWithHover from '../ButtonWithHover/index'
import MainLogoSVG from '../../public/SVGs/tabbar/MainLogoSVG'
import MyBoardsSVG from '../../public/SVGs/tabbar/MyBoardsSVG'

const TabBar = () => {
    return (
        <div className="relative flex flex-row align-end items-center w-full h-12 bg-primary-100">
            <div className="relative flex justify-center items-center w-24 h-16 child:w-10 child:h-10">
                <MainLogoSVG />
            </div>
            <div className="relative flex justify-center items-center h-full child:pr-6">
                <ButtonWithHover
                    width="8rem"
                    height="2.5rem"
                    borderRadius="0.5rem"
                    gap="0.5rem"
                >
                    <div className="relative flex justify-center items-center child:w-6 child:h-6">
                        <MyBoardsSVG />
                    </div>

                    <p className="text-sm whitespace-nowrap">My boards</p>
                </ButtonWithHover>
            </div>
            <Tab title="First board" />
            <Tab title="Second board" />
            <Tab title="Third board" />

            <div className="relative flex justify-center items-center ml-2 w-8 h-full cursor-pointer scale-110">
                <ButtonWithHover
                    width="2rem"
                    height="2rem"
                    borderRadius="0.5rem"
                >
                    <PlusSVG />
                </ButtonWithHover>
            </div>
        </div>
    )
}

export default TabBar

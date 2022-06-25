import React from 'react'
import CloseSVG from '../../public/SVGs/tabbar/CloseSVG'
import ButtonWithHover from '../ButtonWithHover/index'

const Tab = (props: {title: string}) => {
    const {title} = props
    return (
        <div className="relative flex flex-row justify-between items-center p-4 h-full w-40 bg-primary-200 cursor-pointer before:-ml-4 before:absolute before:w-full before:h-full before:pointer-events-none before:duration-300 before:opacity-0 hover:before:bg-primary-900 hover:before:opacity-5">
            <p className="relative w-28 truncate pointer-events-none text-sm scale-105">
                {title}
            </p>
            <div className="-mr-2">
                <ButtonWithHover
                    width="1.75rem"
                    height="1.75rem"
                    borderRadius="0.5rem"
                >
                    <CloseSVG />
                </ButtonWithHover>
            </div>
        </div>
    )
}

export default Tab

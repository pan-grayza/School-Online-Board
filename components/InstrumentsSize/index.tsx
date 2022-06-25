import React from 'react'
import MinusSVG from '../../public/SVGs/instruments/Size/MinusSVG'
import PlusSVG from '../../public/SVGs/instruments/Size/PlusSVG'
import ButtonWithHover from '../ButtonWithHover/index'
import Input from '../Input/index'

const InstrumentsSize = () => {
    return (
        <div className="relative flex flex-col justify-center items-center gap-1">
            <div className="relative flex flex-row justify-center items-center gap-1">
                <ButtonWithHover
                    width="2rem"
                    height="2rem"
                    borderRadius="0.5rem"
                >
                    <MinusSVG />
                </ButtonWithHover>

                <div className="relative flex justify-center items-center w-12 h-12 rounded-lg bg-white">
                    <div className="relative w-1 h-1 bg-primary-900 rounded-full"></div>
                </div>
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

export default InstrumentsSize

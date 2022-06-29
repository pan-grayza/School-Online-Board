import React from 'react'
import ButtonWithHover from '../ButtonWithHover/index'

//Tools
import PencilSVG from '../../public/SVGs/instruments/BasicTools/PencilSVG'
import EraserSVG from '../../public/SVGs/instruments/BasicTools/EraserSVG'
import TextSVG from '../../public/SVGs/instruments/Tools/TextSVG'
import CursorSVG from '../../public/SVGs/instruments/Tools/CursorSVG'
import LineSVG from '../../public/SVGs/instruments/BasicTools/LineSVG'
import ArrowSVG from '../../public/SVGs/instruments/BasicTools/ArrowSVG'

const InstrumentsTools = () => {
    return (
        <div className="flex flex-col gap-2 justify-center items-center">
            <div className="flex flex-row gap-2 grand-child:w-8 grand-child:h-8">
                <ButtonWithHover
                    width="3rem"
                    height="3rem"
                    borderRadius="0.5rem"
                    backgroundColor="#C9D9E9"
                    backgroundHoverColor="#4C9EEF"
                >
                    <PencilSVG />
                </ButtonWithHover>
                <ButtonWithHover
                    width="3rem"
                    height="3rem"
                    borderRadius="0.5rem"
                    backgroundColor="#C9D9E9"
                    backgroundHoverColor="#4C9EEF"
                >
                    <EraserSVG />
                </ButtonWithHover>

                <ButtonWithHover
                    width="3rem"
                    height="3rem"
                    borderRadius="0.5rem"
                    backgroundColor="#C9D9E9"
                    backgroundHoverColor="#4C9EEF"
                >
                    <CursorSVG />
                </ButtonWithHover>

                <ButtonWithHover
                    width="3rem"
                    height="3rem"
                    borderRadius="0.5rem"
                    backgroundColor="#C9D9E9"
                    backgroundHoverColor="#4C9EEF"
                >
                    <TextSVG />
                </ButtonWithHover>

                <ButtonWithHover
                    width="3rem"
                    height="3rem"
                    borderRadius="0.5rem"
                    backgroundColor="#C9D9E9"
                    backgroundHoverColor="#4C9EEF"
                >
                    <LineSVG />
                </ButtonWithHover>

                <ButtonWithHover
                    width="3rem"
                    height="3rem"
                    borderRadius="0.5rem"
                    backgroundColor="#C9D9E9"
                    backgroundHoverColor="#4C9EEF"
                >
                    <ArrowSVG />
                </ButtonWithHover>
                <ButtonWithHover
                    width="3rem"
                    height="3rem"
                    borderRadius="0.5rem"
                    backgroundColor="#C9D9E9"
                    backgroundHoverColor="#4C9EEF"
                >
                    <ArrowSVG />
                </ButtonWithHover>
            </div>
        </div>
    )
}

export default InstrumentsTools

import React from 'react'

import ButtonWithHover from '../ButtonWithHover/index'

import ColorPickerSVG from '../../public/SVGs/instruments/Tools/ColorPickerSVG'
import CursorSVG from '../../public/SVGs/instruments/Tools/CursorSVG'
import FillSVG from '../../public/SVGs/instruments/Tools/FillSVG'
import TextSVG from '../../public/SVGs/instruments/Tools/TextSVG'
import MirrorHorizontallySVG from '../../public/SVGs/instruments/Tools/MirrorHorizontallySVG'
import MirrorVerticallySVG from '../../public/SVGs/instruments/Tools/MirrorVerticallySVG'

const InstrumentsTools = () => {
    return (
        <div className="relative flex flex-row gap-2 grand-child:w-8 grand-child:h-8">
            <ButtonWithHover
                width="3rem"
                height="3rem"
                borderRadius="0.5rem"
                backgroundColor="#C9D9E9"
                backgroundHoverColor="#4C9EEF"
            >
                <ColorPickerSVG />
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
                <FillSVG />
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
                <MirrorHorizontallySVG />
            </ButtonWithHover>

            <ButtonWithHover
                width="3rem"
                height="3rem"
                borderRadius="0.5rem"
                backgroundColor="#C9D9E9"
                backgroundHoverColor="#4C9EEF"
            >
                <MirrorVerticallySVG />
            </ButtonWithHover>
        </div>
    )
}

export default InstrumentsTools

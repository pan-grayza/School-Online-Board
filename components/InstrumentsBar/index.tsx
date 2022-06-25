import React from 'react'

import InstrumentsBasicTools from '../InstrumentsBasicTools/index'
import InstrumentsSize from '../InstrumentsSize/index'
import InstrumentsSecondaryTools from '../InstrumentsTools/index'
import InstrumentsColors from '../InstrumentsColors/index'

const InstrumentsBar = () => {
    return (
        <div className="relative flex flex-row shrink-0 justify-center items-center h-24  gap-4 bg-primary-100 ">
            <InstrumentsBasicTools />
            <InstrumentsSize />
            <InstrumentsSecondaryTools />
            <InstrumentsColors />
        </div>
    )
}

export default InstrumentsBar

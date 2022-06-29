import React from 'react'

import InstrumentsTools from '../InstrumentsTools/index'
import InstrumentsSize from '../InstrumentsSize/index'

const InstrumentsBar = () => {
    return (
        <div className="fixed bottom-0 self-center flex flex-row justify-center items-center h-24 w-fit p-6 rounded-t-lg gap-4 bg-primary-100 ">
            <InstrumentsTools />
            <InstrumentsSize />
        </div>
    )
}

export default InstrumentsBar

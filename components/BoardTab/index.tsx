import React from 'react'

import Canvas from '../Canvas/index'

import InstrumentsBar from '../InstrumentsBar/index'

const BoardTab = () => {
    return (
        <div className="flex flex-col relative h-[calc(100vh-2.75rem)] w-full">
            <Canvas />

            <InstrumentsBar />
        </div>
    )
}

export default BoardTab

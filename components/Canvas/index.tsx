import React from 'react'

type Props = {
    backgroundColor?: string
}

const Canvas = ({backgroundColor = '#ffffff'}: Props) => {
    return (
        <div
            style={{backgroundColor: backgroundColor}}
            className="h-screen w-screen"
        ></div>
    )
}

export default Canvas

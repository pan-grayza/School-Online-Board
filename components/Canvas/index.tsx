import React from 'react'

type Props = {
    backgroundColor?: string
}

const Canvas = ({backgroundColor = '#ffffff'}: Props) => {
    return (
        <div
            style={{backgroundColor: backgroundColor}}
            className="relative flex h-full w-full"
        ></div>
    )
}

export default Canvas

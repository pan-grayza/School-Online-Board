import React, {PropsWithChildren, useState} from 'react'

type Props = PropsWithChildren<{
    padding?: string
    width?: string
    height?: string
    borderRadius?: string
    type?: 'text' | 'password' | 'email'
    placeholder?: string
}>

const Input = ({
    padding = '0px',
    width,
    height,
    borderRadius = '0px',
    type = 'text',
    placeholder = '',
    children,
}: Props) => {
    const [value, setValue] = useState('')
    const onChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        setValue(e.target.value)
    }
    return (
        <input
            style={{
                padding: padding,
                width: width,
                height: height,
                borderRadius: borderRadius,
            }}
            placeholder={placeholder}
            type={type}
            className="relative flex flex-row text-center bg-primary-50 border-none outline-none focus:border-secondary-400 focus:border-2 focus:border-solid"
            value={value}
            onChange={onChange}
        >
            {children}
        </input>
    )
}

export default Input

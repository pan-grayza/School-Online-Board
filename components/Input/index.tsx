import React, {PropsWithChildren} from 'react'
import styles from './styles.module.css'

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
            className={styles.input}
            value="4px"
        >
            {children}
        </input>
    )
}

export default Input

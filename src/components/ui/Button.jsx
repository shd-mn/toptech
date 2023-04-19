import React from 'react'

const Button = ({ children, type = 'text', ...rest }) => {
    return (
        <button type={type}  {...rest} >{children}</button>
    )
}

export default Button
import React from 'react'

export const Button = ({children, variant = "primary", btnmargin, onClick, ...props}) => {
  return (
    <button className={`btn btn-${variant} ${btnmargin}`} {...props} onClick={onClick}>
        {children}
    </button>
  )
}
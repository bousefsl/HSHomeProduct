import React from 'react'
import { Link } from 'react-router-dom'

export const ButtonLink = ({children, toLink, variant = "primary", otherProps = "", ...props}) => {
  return (
    <Link to={toLink} className={`btn btn-${variant} ${otherProps}`} {...props}>
        {children}
    </Link>
  )
}

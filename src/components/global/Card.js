import React from 'react'

export function Card({children, props}) {
    return (
        <div className={`card ${props}`}>
            {children}
        </div>
    )
}

export function CardHeader({children, props}) {
    return (
        <div className={`card-header ${props}`}>
            {children}
        </div>
    )
}

export function CardBody({children}) {
    return (
        <div className='card-body'>
            {children}
        </div>
    )
}

export function CardImg({cardImg}) {
    return (
        <img src={cardImg} className="card-img-top" alt="" />
    )
}

export function CardTitle({children, props}) {
    return (
        <div className={`card-title ${props}`}>
            {children}
        </div>
    )
}

export function CardText({children, props}) {
    return (
        <div className={`card-text ${props}`}>
            {children}
        </div>
    )
}

export function CardFooter({children}) {
    return (
        <div className='card-footer'>
            {children}
        </div>
    )
}
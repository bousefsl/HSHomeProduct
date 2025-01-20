import React from 'react'
//Components
import { Link } from 'react-router-dom';
import { ButtonLink } from '../global/ButtonLink';

export function EmblaSlide({slideImg, slideLink, btnText, altText, children}) {
  return (
    <div className="embla__slide">
        <div className='embla-img'>
            <Link to={slideLink}><img src={slideImg} alt={altText} /></Link>
        </div>
        {children}
        <div><ButtonLink toLink={slideLink} variant='secondary' otherProps="">{btnText}</ButtonLink></div>
    </div>
  )
}

export function EmblaNumber({children}) {
    return (
        <div className="embla__slide__number">
            {children}
        </div>
    )
  }
import React from 'react'
//Components
import { ButtonLink } from './ButtonLink';
//Styles
import classes from '../../assets/styles/checklist.module.css';
//Images
import HSHouseLogoSVG from '../../assets/images/hs-house-bg.svg';

export default function CheckList({content, query}) {

  return (
    <div className='get-started'>
        <section className='section-spacer bg-light py-5'>
            <div className='container-xl'>
                <div className='row justify-content-center'>
                    <div className='col-md-10'>
                        <div>
                            <h2 className='text-center mb-5'>{content.letsGetStartedHeader}</h2>
                            <ul className={`${classes["get-started-list"]} mb-4`}>
                                <li className='d-flex mb-3'>
                                    <div className={`me-4 ${classes["home-bg-marker"]}`} style={{backgroundImage: `url(${HSHouseLogoSVG})`}}>
                                        <span className={classes["home-bg-no"]}>1</span>
                                    </div>
                                    <div>
                                        <p className='h4 homeserve-thick mb-1'>{content.letsGetStartedParagraphOneTitle}</p>
                                        <p>{content.letsGetStartedParagraphOne}</p>
                                    </div>
                                </li>
                                <li className='d-flex mb-3'>
                                    <div className={`me-4 ${classes["home-bg-marker"]}`} style={{backgroundImage: `url(${HSHouseLogoSVG})`}}>
                                        <span className={classes["home-bg-no"]}>2</span>
                                    </div>
                                    <div>
                                        <p className='h4 homeserve-thick mb-1'>{content.letsGetStartedParagraphTwoTitle}</p>
                                        <p>{content.letsGetStartedParagraphTwoPartOne} 
                                            {query ? content.housePropertyCriteriaText : content.flatPropertyCriteriaText}
                                            <span dangerouslySetInnerHTML={{__html: content.letsGetStartedParagraphTwoPartTwo}}></span></p>
                                    </div>
                                </li>
                                <li className='d-flex mb-3'>
                                    <div className={`me-4 ${classes["home-bg-marker"]}`} style={{backgroundImage: `url(${HSHouseLogoSVG})`}}>
                                        <span className={classes["home-bg-no"]}>3</span>
                                    </div>
                                    <div>
                                        <p className='h4 homeserve-thick mb-1'>{content.letsGetStartedParagraphThreeTitle}</p>
                                        <p dangerouslySetInnerHTML={{__html: content.letsGetStartedParagraphThree}}></p>
                                    </div>
                                </li>
                            </ul>
                            <div className='text-center'>
                                <ButtonLink toLink='#'>Apply now</ButtonLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

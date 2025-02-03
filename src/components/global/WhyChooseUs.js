import React from 'react'
//Components
import { ButtonLink } from './ButtonLink';
//Styles
import classes from '../../assets/styles/whychooseus.module.css';
//Images
import WrenchImg from '../../assets/images/wrench.svg';
import SafeHandsImg from '../../assets/images/house-safe-hands.svg';
import RadiatorImg from '../../assets/images/radiator.svg';
import PhoneImg from '../../assets/images/phone.svg';
import RosetteImg from '../../assets/images/rosette.svg';


export default function WhyChooseUs() {
  return (
    <div className='why-choose-us'>
        <section className='section-spacer bg-white'>
            <div className={`${classes["wcu-wrapper"]} pt-5`}>
                <div className='container-xl'>
                    <div className='d-flex flex-column flex-lg-row'>
                        <div className={`d-flex align-items-center ${classes["wcu-header"]}`}>
                            <div>
                                <h2 className='h1'>Why choose us?</h2>
                                <p>Whether it's 24/7 home emergency cover, a one-off repair, or new boiler, you can trust we'll take care of it.</p>
                                <div class="d-grid gap-0 d-sm-inline-block col-10 col-sm-8 col-lg-12 mx-auto mb-3">
                                    <ButtonLink toLink='#' otherProps='me-1 me-sm-3 me-lg-1 me-xxl-3 mb-3'>View cover</ButtonLink>
                                    <ButtonLink toLink='#' variant='secondary' otherProps='mb-3'>View service plans</ButtonLink>
                                </div>
                            </div>
                        </div>
                        <div className={classes["wcu-list"]}>
                            <ul className='p-0'>
                                <li className='d-flex'>
                                    <div className='pe-4'>
                                        <img className={classes["wcu-img-item"]} src={WrenchImg} alt='' />
                                    </div>
                                    <div className='align-self-center pt-3'>
                                        <p className='h4 homeserve-medium'>Parts, labour and VAT included within cover limits</p>
                                    </div>
                                </li>
                                <li className='d-flex'>
                                    <div className='pe-4'>
                                        <img className={classes["wcu-img-item"]} src={SafeHandsImg} alt='' />
                                    </div>
                                    <div className='align-self-center pt-3'>
                                        <p className='h4 homeserve-medium'>Our Home Experts are always on hand to help</p>
                                    </div>
                                </li>
                                <li className='d-flex'>
                                    <div className='pe-4'>
                                        <img className={classes["wcu-img-item"]} src={RadiatorImg} alt='' />
                                    </div>
                                    <div className='align-self-center pt-3'>
                                        <p className='h4 homeserve-medium'>12 month guarantee on all gas repairs</p>
                                    </div>
                                </li>
                                <li className='d-flex'>
                                    <div className='pe-4'>
                                        <img className={classes["wcu-img-item"]} src={PhoneImg} alt='' />
                                    </div>
                                    <div className='align-self-center pt-3'>
                                        <p className='h4 homeserve-medium'>24/7 support - we're here for you 365 days a year</p>
                                    </div>
                                </li>
                                <li className='d-flex'>
                                    <div className='pe-4'>
                                        <img className={classes["wcu-img-item"]} src={RosetteImg} alt='' />
                                    </div>
                                    <div className='align-self-center pt-3'>
                                        <p className='h4 homeserve-medium'>We always aim to fix your problem first time</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

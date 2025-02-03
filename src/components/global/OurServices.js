import React from 'react'
//Components
import { Link } from 'react-router-dom';
import { ButtonLink } from './ButtonLink';
//Styles
import classes from '../../assets/styles/ourservices.module.css';
//Images
import ServicesBGImg from '../../assets/images/services-background.svg';
import ServicesNewBoilerImg from '../../assets/images/services-new-boiler.jpg';
import ServicesHeatPumpImg from '../../assets/images/services-heat-pump.jpg';
import ServicesRepairsImg from '../../assets/images/services-one-off-repair.jpg';

export default function OurServices() {
  return (
    <div className='our-services'>
        <section className='section-spacer'>
            <div className={classes["os-wrapper"]} style={{backgroundImage: `url(${ServicesBGImg})`}}>
                <div className='container-xl'>
                    <div className='row'>
                        <div className='col-sm-6 col-lg-4'>
                            <div className='d-flex align-items-center h-100'>
                                <div>
                                    <h2 className='h1'>Our Services</h2>
                                    <p className='homeserve-thick'>
                                        Augue tamquam recteque ex mea. Nec summo albucius euripidis id. Tota conceptam referrentur mea at, sea graeco utroque at.
                                    </p>
                                    <ButtonLink toLink='#' variant='secondary' otherProps='mb-5'>View service plans</ButtonLink>
                                </div>
                            </div>
                        </div>
                        <div className='col-sm-6 col-lg-4'>
                            <div className="card scale-bg-img-card">
                                <Link to='#' className='scale-bg-img-link animated-arrow-link'>
                                    <div className='scale-bg-img' style={{backgroundImage: `url(${ServicesNewBoilerImg})`}}>
                                        <div className='scale-img-gradient'>    
                                            <div className="card-img-overlay">
                                                <p className="card-title h4 homeserve-thick">Need a new boiler?</p>
                                                <p className="card-text homeserve-medium">We're working together with BOXT to ensure you get the best boiler for your home.</p>
                                                Get your new boiler quote <i aria-hidden='true' className='icon-hs-arrow-forward' />
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <div className='col-sm-12 col-lg-4 mt-4 mt-lg-auto'>
                            <div className='row'>
                                <div className='col-12 col-sm-6'>
                                    <div className="card card-transparent h-100">
                                        <Link to='#'><img src={ServicesHeatPumpImg} className="card-img-top" alt="" /></Link>
                                        <div className="card-body text-white px-0">
                                            <p className="card-title lead homeserve-thick">Heat pump service plans</p>
                                            <p className="card-text homeserve-medium">
                                                Keep your house warm all year round with an air source heat pump service from a qualified engineer.
                                            </p>
                                            <Link to='#' className='text-white animated-arrow-link'>View our plans <i aria-hidden='true' className='icon-hs-arrow-forward' /></Link>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-12 col-sm-6'>
                                    <div className="card card-transparent h-100">
                                        <Link to='#'><img src={ServicesRepairsImg} className="card-img-top" alt="" /></Link>
                                        <div className="card-body text-white px-0">
                                            <p className="card-title lead homeserve-thick">Do you need a one-off repair?</p>
                                            <p className="card-text homeserve-medium">
                                                Our team of engineers are on hand nationwide, ready to help fix a range of plumbing, gas, boiler and electrical issues.
                                            </p>
                                            <Link to='#' className='text-white animated-arrow-link'>View our plans <i aria-hidden='true' className='icon-hs-arrow-forward' /></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

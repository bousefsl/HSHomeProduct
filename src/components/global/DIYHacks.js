import React from 'react'
//Components
import { Link } from 'react-router-dom'
import { Card, CardBody, CardFooter, CardImg, CardTitle } from './Card';
//Images
import OverflowPipeImg from '../../assets/images/leaking-overflow-pipe.jpg';
import BlockedToiletImg from '../../assets/images/blocked-toilet.jpg';
import OutsideDrainImg from '../../assets/images/blocked-outside-drain.jpg';
import BoilerProblemsImg from '../../assets/images/common-boiler-problems.jpg';

export default function DIYHacks() {
  return (
    <div className='diy-hacks'>
        <section className='section-spcer'>
            <div className='container-xl'>
                <div className='row'>
                    <div className='col'>
                        <h2 className='text-center'>DIY advice and hacks articles</h2>
                        <div className='row justify-content-center'>
                            <div className='col-md-10 col-lg-8'>
                                <p className='homeserve-medium text-start text-md-center mb-5'>
                                    With <Link to='#'>Knowledge Hub</Link>, whether it's home maintenance, help and guidance or even DIY tips, 
                                    we've got everything you need to take on those smaller jobs at home.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 g-4">
                    <div className="col">
                        <Card props="h-100">
                            <CardImg cardImg={OverflowPipeImg}></CardImg>
                            <CardBody>
                                <p><Link to='#' className='homeserve-thick'>Plumbing advice • Liam Sharkey</Link></p>
                                <CardTitle props='homeserve-thick'>How to stop your overflow pipe leaking</CardTitle>
                            </CardBody>
                            <CardFooter>24 Jan 2020 | 10 minutes</CardFooter>
                        </Card>
                    </div>
                    <div className="col">
                        <Card props="h-100">
                            <CardImg cardImg={BlockedToiletImg}></CardImg>
                            <CardBody>
                                <p><Link to='#' className='homeserve-thick'>Plumbing advice • Chris Houghton</Link></p>
                                <CardTitle props='homeserve-thick'>How to unblock a toilet</CardTitle>
                            </CardBody>
                            <CardFooter>12 Apr 2017 | 8 minutes</CardFooter>
                        </Card>
                    </div>
                    <div className="col">
                        <Card props="h-100">
                            <CardImg cardImg={BoilerProblemsImg}></CardImg>
                            <CardBody>
                                <p><Link to='#' className='homeserve-thick'>Boiler advice • Yasmin</Link></p>
                                <CardTitle props='homeserve-thick'>10 common boiler problems</CardTitle>
                            </CardBody>
                            <CardFooter>21 Apr 2024 | 7 minutes</CardFooter>
                        </Card>
                    </div>
                    <div className="col">
                        <Card props="h-100">
                            <CardImg cardImg={OutsideDrainImg}></CardImg>
                            <CardBody>
                                <p><Link to='#' className='homeserve-thick'>Plumbing advice • Liam Sharkey</Link></p>
                                <CardTitle props='homeserve-thick'>How to stop your overflow pipe leaking</CardTitle>
                            </CardBody>
                            <CardFooter>19 Mar 2021 | 7 minutes</CardFooter>
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

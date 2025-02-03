import React from 'react'
import { Link } from 'react-router-dom'
import { Card, CardBody, CardHeader } from './Card';

export default function ProductInclusionExclusion({content}) {
  return (
    <div className='product-inclusions-exclusions'>
        <section className='section-spacer'>
            <div className='container-xl'>
                <h2 className='homeserve-thick text-center mb-5'>{content.thisInsuranceIsForHeader}</h2>
                <div className='row justify-content-center'>
                    <div className='col-md-5'>
                        <div className='px-2'>
                            <ul className='ticks'>
                                <li><strong>Homeowners</strong></li>
                                <li><strong>People who only want cover for their home's plumbing and drainage</strong></li>
                            </ul>
                        </div>
                    </div>
                    <div className='col-md-5'>
                        <div>
                            <div className='px-2'>
                                <ul className='crosses'>
                                    <li><strong>Landlords</strong></li>
                                    <li className='blank'><strong>View <Link to="#">Landlords Plumbing and Drainage Plus cover</Link></strong></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='row justify-content-center'>
                    <div className='col-md-5 mb-4 mb-lg-5'>

                        <Card props='h-100 border-0 shadow p-4'>
                            <CardHeader props='border-0 bg-white text-center'>
                                <i aria-hidden="true" className='icon-hs-tick-outline icon-hs-2x text-teal pe-2' /> 
                                <span className='h4 homeserve-thick'>{content.includesHeader}</span>
                            </CardHeader>
                            <CardBody>
                                <ul>
                                    <>
                                        {content.includes.map((includesListItem, k) => {
                                            return (
                                                <li key={k}>{includesListItem}</li>
                                            )
                                        })}
                                    </>
                                </ul>
                            </CardBody>
                        </Card>

                    </div>
                    <div className='col-md-5 mb-4 mb-lg-5'>

                        <Card props='h-100 border-0 shadow p-4'>
                            <CardHeader props='border-0 bg-white text-center'>
                                <i aria-hidden="true" className='icon-hs-cross-outline icon-hs-2x text-primary pe-2' /> 
                                <span className='h4 homeserve-thick'>{content.excludesHeader}</span>
                            </CardHeader>
                            <CardBody>
                                <ul>
                                    <>
                                        {content.excludes.map((excludesListItem, k) => {
                                            return (
                                                <li key={k}>{excludesListItem}</li>
                                            )
                                        })}
                                    </>
                                </ul>
                            </CardBody>
                        </Card>

                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

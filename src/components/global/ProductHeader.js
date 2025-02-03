import React, { useLayoutEffect, useState } from 'react'

export default function ProductHeader({hTitle, introText, price, onQuery, propertyState}) {

    const [activeBtnText, setActiveBtnText] = useState("House");
    const [activeBtnBool, setActiveBtnBool] = useState(true);

    useLayoutEffect(() => {
        const pState = propertyState;
        if (pState.bool === undefined || pState.bool === "true") {
            setActiveBtnText("House");
            setActiveBtnBool(true);
        } else {
            setActiveBtnText("Flat");
            setActiveBtnBool(false);
            onQuery(false);
        }
    }, [propertyState, onQuery]);

    const handleQuery = (e) => {
        const property = e.currentTarget.innerText;
        setActiveBtnText(property); 
        setActiveBtnBool(!activeBtnBool);
        onQuery(!activeBtnBool);
    }

  return (
    <div className='product-header mt-5'>
        <section className='section-spacer mb-4'>
            <div className='container-xl'>
                <div className='row'>
                    <div className='col-md-6'>
                        <div>
                            <h1 className='mb-4'>{hTitle}</h1>
                            <div className='d-flex mb-4'>
                                <div className='mt-2 me-3'>
                                    I need this for a:
                                </div>
                                <div className="btn-group" role="group" aria-label="Type of property button group">
                                    <button type="button" onClick={(e) => {handleQuery(e);}} 
                                        className={`btn btn-dark btn-icon-wrapper ps-2 ${activeBtnBool ? "active" : ""}`}>
                                        <span className="btn-icon">&nbsp;</span>House
                                    </button>
                                    <button type="button" onClick={(e) => {handleQuery(e);}} 
                                        className={`btn btn-dark btn-icon-wrapper ps-2 ${activeBtnBool ? "" : "active"}`}>
                                        <span className="btn-icon">&nbsp;</span>Flat
                                    </button>
                                </div>
                            </div>
                            
                            <p className='pe-md-5'>{introText}</p>
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <div>
                            <div className='card text-bg-dark px-sm-2 px-lg-5 ms-lg-5'>
                                <div className="card-body text-white text-center">
                                    <p><span className='h1'>{price.monthlyPriceFormatted}</span> <br />a month in your first year</p>
                                    <div className='row'>
                                        <div className='col-lg-6'>
                                            <p className='h4 homeserve-medium'>Annual price: {price.yearlyPriceFormatted}</p>
                                        </div>
                                        <div className='col-lg-6'>
                                            <p className='h4 homeserve-medium'>Your excess: {price.excessPriceFormatted}</p>
                                        </div>
                                    </div>
                                    <p className='text-start'>Your price will increase at renewal, but you'll always receive a reminder. 
                                        If you choose to continue into your second year, the expected price for customers who haven't made a claim 
                                        is {activeBtnBool ? price.year2MonthlyPriceFormatted : price.year2MonthlyFlatPriceFormatted} a month* 
                                        ({activeBtnBool ? price.year2YearlyPriceFormatted : price.year2YearlyFlatPriceFormatted} for the year).</p>
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

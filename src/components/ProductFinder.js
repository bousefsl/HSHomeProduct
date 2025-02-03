import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
//Styles
import classes from '../assets/styles/productfinder.module.css';
//Components
import { Button } from './global/Button';

export default function ProductFinder() {
    const navigate = useNavigate();

    const [propertyOwnerTypeText, setPropertyOwnerTypeText] = useState("You are a...?");
    const [coverTypeText, setCoverTypeText] = useState("What would you like to cover?");
    const [propertyTypeText, setPropertyTypeText] = useState("For what type of property?");

    const [propertyOwnerSelected, setPropertyOwnerSelected] = useState(false);
    const [coverTypeSelected, setCoverTypeSelected] = useState(false);

    useEffect(() => {}, [propertyOwnerSelected, coverTypeSelected])

    const handlePropertyOwnerTypeSelection = (e) => {
        const elemText = e.currentTarget.innerText;
        setPropertyOwnerTypeText(elemText.toString());
        setPropertyOwnerSelected(true);
    }

    const handleCoverTypeSelection = (e) => {
        const elemText = e.currentTarget.innerText;
        setCoverTypeText(elemText.toString());
        setCoverTypeSelected(true);
    }

    const handlePropertyTypeSelection = (e) => {
        const elemText = e.currentTarget.innerText;
        setPropertyTypeText(elemText.toString());
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        var propName = propertyTypeText.replace(/ .*/,'').toString().toLowerCase();
        var propBool;

        if (propName === "flat") {
            propBool = "false";
        } else {
            //a "house", so set the name to "house" & true
            propBool = "true";
            propName = "house";
        }

        var propState = { name: propName, bool: propBool }

        /*Create logic to, maybe, send the user to a comparison page where product options are presented based on the selections or
        for some instances, directly to a product page should options not exist.
        For the purpose of the demo, we'll simply disable the options and send the user to the plumbing page.*/
        if ((propertyOwnerTypeText.toLowerCase() === "homeowner") && (coverTypeText.toLowerCase() === "plumbing")) {
            navigate('/plumbing-drainage', {state:(propState)});
        }
    }

  return (
    <div className='product-finder'>
        <div className='container-xl'>
            <div className='row'>
                <div className='col-12'>
                    <div className={classes["product-wrapper"]}>
                        <p className='h4 homeserve-thick mb-4'>Need help? Let's find the right cover for you</p>
                        <form className={`row gx-3 gy-1 ${classes["col-bg"]}`} onSubmit={handleSubmit}>
                            <div className={`col-lg-3 ${classes["col-border"]}`}>
                                <div className="dropdown">
                                    <button id='propertyOwnerType' className={`btn ${classes["btn-product-finder"]} dropdown-toggle`} type="button" 
                                        data-bs-toggle="dropdown" aria-expanded="false" aria-label="Property owner type">
                                        <i aria-hidden="true" className='icon-hs-customer icon-hs-1-5x text-primary'></i> {propertyOwnerTypeText}
                                    </button>
                                    <ul className={`dropdown-menu ${classes["dd-menu"]}`}>
                                        <li>
                                            <button className="dropdown-item" type="button" onClick={handlePropertyOwnerTypeSelection}>
                                                Homeowner
                                            </button>
                                        </li>
                                        <li>
                                            <button className="dropdown-item disabled" type="button" onClick={handlePropertyOwnerTypeSelection}>
                                                Landlord
                                            </button>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className={`col-lg-3 ${classes["col-border"]}`}>
                                <div className="dropdown">
                                    <button id='coverType' className={`btn ${classes["btn-product-finder"]} dropdown-toggle`} type="button" data-bs-toggle="dropdown" aria-expanded="false" aria-label="Cover type">
                                        <i aria-hidden="true" className='icon-hs-secure-shield icon-hs-1-5x text-primary'></i> {coverTypeText}
                                    </button>
                                    <ul className={`dropdown-menu ${classes["dd-menu"]}`}>
                                        <li>
                                            <button className="dropdown-item" type="button" onClick={handleCoverTypeSelection}>
                                                Plumbing
                                            </button>
                                        </li>
                                        <li>
                                            <button className="dropdown-item disabled" type="button" onClick={handleCoverTypeSelection}>
                                                Heating
                                            </button>
                                        </li>
                                        <li>
                                            <button className="dropdown-item disabled" type="button" onClick={handleCoverTypeSelection}>
                                                Electrics
                                            </button>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className={`col-lg-3 ${classes["col-border"]}`}>
                                <div className="dropdown">
                                    <button id='propertyType' className={`btn ${classes["btn-product-finder"]} dropdown-toggle`} type="button" data-bs-toggle="dropdown" aria-expanded="false" aria-label="Property type">
                                        <i aria-hidden="true" className='icon-hs-home icon-hs-1-5x text-primary'></i> {propertyTypeText}
                                    </button>
                                    <ul className={`dropdown-menu ${classes["dd-menu"]}`}>
                                        <li>
                                            <button className="dropdown-item" type="button" onClick={handlePropertyTypeSelection}>
                                                House or Bungalow
                                            </button>
                                        </li>
                                        <li>
                                            <button className="dropdown-item" type="button" onClick={handlePropertyTypeSelection}>
                                                Flat or Maisonette
                                            </button>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className='col-lg-3 text-lg-end'>
                                <div className='d-grid d-md-inline-block gap-2 col-10 col-sm-8 col-lg-auto mx-auto mb-3 mb-lg-0'>
                                    <Button type="submit" variant="secondary" btnmargin="" disabled={!(propertyOwnerSelected && coverTypeSelected)} id='submit-btn'>
                                        Search cover
                                    </Button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

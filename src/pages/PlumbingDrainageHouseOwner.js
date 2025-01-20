import React, { useEffect, useLayoutEffect, useState } from 'react'
//Hooks
import { useLocation } from 'react-router-dom';
//Components
import ProductHeader from '../components/global/ProductHeader';
import ProductInclusionExclusion from '../components/global/ProductInclusionExclusion';
import CheckList from '../components/global/CheckList';
import FAQs from '../components/global/FAQs';

export default function PlumbingDrainageHouseOwner() {
    //To collect our initial data should the user have used the "help to find cover component"
    const location = useLocation();
    var propState = location.state || "";

    //State for data/content API (db.json)
    const [apiData, setApiData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);       
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch("http://localhost:8000/product", {
                headers: {
                    Accept: 'application/json',
                }
            })
            .then((response) => {
                //console.log("response", response);
                if(!response.ok) {                                   
                    throw Error('Could not fetch the data for that resource');      
                }
                return response.json();
            })
            .then(data => {
                setIsLoading(false);                          
                setApiData(data);
                setError(null);
                //console.log("data is: ", data)                              
            })
            .catch((error) => {
                if (error) {
                    console.error(error);
                } else {
                    setIsLoading(false);
                    setError(error.message);
                } 
            })
    }, [])

    /*State to keep track of the "activeBtnBool" state in our "ProductHeader" child component & to pass it to our "CheckList" child component 
    so it can be used for the Ternary operator found in there
    (Added to the FAQs component too - to set the content's visibility depending on what has been selected) */
    const [query, setQuery] = useState(propState.bool);

    useLayoutEffect(() => {
        //If the user hasn't used the component, then initialise the useState on load
        if (propState.bool === undefined) {
            setQuery(true);
        }
    }, [propState])

  return (
    <div className='plumbing-drainage'>
        { isLoading && <div>Loading...</div> }      {/*If "isLoading" is true, output "Loading" */}
        { error && <div>{ error }</div> }           {/*Write the error if there is one */} 

        {/*Only when we have received all of our data (apiData), we then render the components reliant on it*/}
        { apiData && 
            (<ProductHeader hTitle={apiData.shortName} introText={apiData.content.introText} price={apiData.price} onQuery={setQuery} propertyState={propState} />) }

        { apiData && (<ProductInclusionExclusion content={apiData.content} />) }

        { apiData && (<CheckList content={apiData.content} query={query} />) }

        { apiData && (<FAQs content={apiData.content.faq} query={query} />) }
        
    </div>
  )
}

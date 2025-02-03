import React, { useEffect } from 'react'
import Accordion from './Accordion'

export default function FAQs({content, query}) {

    /*Due to the accordion content having differing property text (classes: "house" & "flat" in content (json file)),
    we have wrapped it in tags & the function below is used to toggle the display of each depending on what has been
    selected in the ProductHeader (query)*/
    useEffect(() => {
        var acc = document.getElementById("property-toggle");

        if (!query) {
            acc.classList.remove("house-selected");
            acc.classList.add("flat-selected");
        } else {
            acc.classList.remove("flat-selected");
            acc.classList.add("house-selected");
        }
    }, [query])

  return (
    <div className='faqs'>
        <section className='section-spacer py-5'>
            <div className='container-xl'>
                <div className='row justify-content-center'>
                    <div className='col-md-10'>
                        <h2 className='text-center mb-5'>{content.header}</h2>
                        <div id='property-toggle' className='house-selected'>
                            <Accordion accordionID="accordion-faqs" content={content.items} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

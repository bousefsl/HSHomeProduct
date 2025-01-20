import React from 'react'

export default function Accordion({accordionID, content}) {

  return (
    <div className='accordion' id={accordionID}>
        <>
            {content.map((accordionItem, index) => {
                return (
                    <div key={index} className="accordion-item">
                        <h2 className="accordion-header">
                            <button className={`accordion-button ${accordionItem.expandedonload ? "" : "collapsed"}`} type="button" data-bs-toggle="collapse" data-bs-target={`#collapse${index}`} 
                                aria-expanded={`${JSON.parse(accordionItem.expandedonload)}`} aria-controls={`collapse${index}`}>
                                {accordionItem.question}
                            </button>
                        </h2>
                        <div id={`collapse${index}`} className={`accordion-collapse collapse ${accordionItem.expandedonload ? "show" : ""}`} data-bs-parent={`#${accordionID}`}>
                            <div className="accordion-body" dangerouslySetInnerHTML={{__html: accordionItem.answer}}></div>
                        </div>
                    </div>
                )
            })}
        </>
    </div>
  )
}

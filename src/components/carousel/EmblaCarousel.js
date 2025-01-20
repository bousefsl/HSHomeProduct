import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
//Components
import {PrevButton, NextButton, usePrevNextButtons} from './EmblaCarouselArrowButtons'
import { EmblaNumber, EmblaSlide } from './EmblaSlide';
//Images
import PlumbingImg from '../../assets/images/slider-plumbing-drainage.jpg';
import BoilerImg from '../../assets/images/slider-heating.jpg';
import ElectricsImg from '../../assets/images/slider-electrics.jpg';
import LandlordsImg from '../../assets/images/slider-landlord.jpg';
import HeatPumpImg from '../../assets/images/slider-heat-pump.jpg';
import NewBoilerImg from '../../assets/images/slider-new-boiler.jpg';

const EmblaCarousel = (props) => {
  const { options } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options)

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi)

  return (
    <section className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">

            <EmblaSlide slideLink='#' slideImg={PlumbingImg} altText='Plumbing and drainage cover now from 50p a month' btnText='View cover'>
              <EmblaNumber>
                <p>Plumbing and drainage cover <span className='text-info'>now from 50p a month</span></p>
              </EmblaNumber>
            </EmblaSlide>

            <EmblaSlide slideLink='#' slideImg={BoilerImg} altText='Boiler and heating cover from £10 a month' btnText='View cover'>
              <EmblaNumber>
                <p>Boiler and heating cover <span className='text-info'>from &pound;10 a month</span></p>
              </EmblaNumber>
            </EmblaSlide>

            <EmblaSlide slideLink='#' slideImg={ElectricsImg} altText='Electrics cover from £3 a month' btnText='View cover'>
              <EmblaNumber>
                <p>Electrics cover <span className='text-info'>from &pound;3 a month</span></p>
              </EmblaNumber>
            </EmblaSlide>

            <EmblaSlide slideLink='#' slideImg={LandlordsImg} altText='Cover for landlords now from 50p a month' btnText='View cover'>
              <EmblaNumber>
                <p>Cover for landlords <span className='text-info'>now from 50p a month</span></p>
              </EmblaNumber>
            </EmblaSlide>

            <EmblaSlide slideLink='#' slideImg={HeatPumpImg} altText='Heat Pump Service plans' btnText='View service plans'>
              <EmblaNumber>
                <p>Heat Pump Service plans</p>
              </EmblaNumber>
            </EmblaSlide>

            <EmblaSlide slideLink='#' slideImg={NewBoilerImg} altText='New boilers installed next day with BOXT' btnText='Get a new boiler'>
              <EmblaNumber>
                <p>New boilers installed next day with BOXT</p>
              </EmblaNumber>
            </EmblaSlide>

            <EmblaSlide slideLink='#' slideImg={ElectricsImg} altText='Electrics cover from £3 a month' btnText='View cover'>
              <EmblaNumber>
                <p>Electrics cover <span className='text-info'>from &pound;3 a month</span></p>
              </EmblaNumber>
            </EmblaSlide>
            
        </div>
      </div>

      <div className="embla__controls">
        <div className="embla__buttons">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>
      </div>
    </section>
  )
}

export default EmblaCarousel
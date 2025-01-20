import React from 'react'
//Components
import Hero from '../components/Hero';
import ProductsServices from '../components/ProductsServices';
import WhyChooseUs from '../components/global/WhyChooseUs';
import OurServices from '../components/global/OurServices';
import DIYHacks from '../components/global/DIYHacks';

export default function Home() {
  return (
    <div className='homepage'>
        <Hero />
        <ProductsServices />
        <WhyChooseUs />
        <OurServices />
        <DIYHacks />
    </div>
  )
}

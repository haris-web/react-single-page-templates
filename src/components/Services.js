import React from 'react'
import {Carousel}  from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import img1  from '../assets/3.jpg'
import img2  from '../assets/4.jpg'

const Services = () => {
  return (
    <div className="services">
 <Carousel infiniteLoop autoPlay showStatus={false} interval={1000} showThumbs={false}    showIndicators={false}>
    <div>
           <img src={img1} alt="image-one"  />
           <p className='legend'>Full stack</p>
    </div>
    <div>
           <img src={img2} alt="image-two "  />
           <p className='legend'>peer to peer support</p>
    </div>
 </Carousel>
    </div>
  )
}

export default Services

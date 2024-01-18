'use client'
import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import img1 from '../../../assets/swiper/1.png'
import img2 from '../../../assets/swiper/2.png'
import img3 from '../../../assets/swiper/3.png'
import img4 from '../../../assets/swiper/4.png'
import img5 from '../../../assets/swiper/5.png'
import styles from './home.module.css'
function Swiper() {
    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, display: "block", background: "black", borderRadius: '10px', }}
                onClick={onClick}
            />
        );
    }
    
    function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, display: "block", background: "black", borderRadius: '10px' }}
                onClick={onClick}
            />
        );
    }
    

        const settings = {
            dots: false,
            infinite: true,
            speed: 700,
            slidesToShow: 4,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
            initialSlide: 0,
            lazyLoad: true,
            nextArrow: <SampleNextArrow />,
            prevArrow: <SamplePrevArrow />,
            responsive: [
                {
                  breakpoint: 900,
                  settings: {
                    slidesToShow: 3,
                    slidesToScroll: 4,
          
          
                  }
                },
                {
                  breakpoint: 600,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                  }
                },
                {
                  breakpoint: 480,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                  }
                }
              ]
        };
        return (
            <div className="container mt-5 overflow-hidden">
          <h2 className=' text-center fst-italic fw-bold '>OUR PARTNERS</h2>
                <Slider {...settings} className='m-auto  mt-4  ' style={{width:'87%'}} >
                    <div className={`${styles.partners}  text-center `}>
                        <img src={img1.src} alt='One chemic swiper partners image 1' className='m-auto img-fluid '   />
                    </div>
    
                    <div className={`${styles.partners}  text-center`}>
                        <img src={img2.src} alt='One chemic swiper partners image 2' className=' m-auto img-fluid '   />
                    </div>
    
                    <div className={`${styles.partners}  text-center`}>
                        <img src={img3.src} alt='One chemic swiper partners image 3' className=' m-auto img-fluid '   />
                    </div>
    
                    <div className={`${styles.partners}  text-center`}>
                        <img src={img4.src} alt='One chemic swiper partners image 4' className=' m-auto img-fluid '   />
                    </div>
    
                    <div className={`${styles.partners}  text-center`}>
                        <img src={img5.src} alt='One chemic swiper partners image 5' className=' m-auto img-fluid '   />
                    </div>
                </Slider>
            </div>
    
        )
}

export default Swiper
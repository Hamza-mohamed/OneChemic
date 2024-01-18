'use client'
import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import img1 from '../../../assets/slider/1.jpg'
import img2 from '../../../assets/slider/2.jpg'
import img3 from '../../../assets/slider/3.jpg'
import img4 from '../../../assets/slider/4.jpg'
import styles from './home.module.css'
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

function Carusel() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 700,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1800,
        initialSlide: 0,
        lazyLoad: true,
        // nextArrow: <SampleNextArrow />,
        // prevArrow: <SamplePrevArrow />

    };
    return (
        <div className="container-fluid overflow-hidden"  >
            <Slider {...settings} className='m-auto  mt-4  ' style={{width:'100%'}} >
                <div className={`${styles.image}  text-center `}>

                    <img src={img1.src} alt='One chemic slider image 1' className='m-auto img-fluid ' style={{height:'400px',width:'100%'}}  />

                </div>

                <div className={`${styles.image}  text-center`}>
                    <img src={img2.src} alt='One chemic slider image 2' className=' m-auto img-fluid ' style={{height:'400px',width:'100%'}}  />
                </div>

                <div className={`${styles.image}  text-center`}>
                    <img src={img3.src} alt='One chemic slider image 3' className=' m-auto img-fluid ' style={{height:'400px',width:'100%'}}  />
                </div>

                <div className={`${styles.image}  text-center`}>
                    <img src={img4.src} alt='One chemic slider image 4' className=' m-auto img-fluid ' style={{height:'400px',width:'100%'}}  />
                </div>

            </Slider>
        </div>

    )
}

export default Carusel
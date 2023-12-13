import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { Component } from "react";
// import img3 from '../assets/hero.webp';

function SampleArrow(props) {
    const { className, style,onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "black", color:"black",fontSize:"10px" }}
       
        onClick={onClick}
      />
    );
  }

function Crousal() {
    const data = [
        {
            name: 'John Morgan',
            img: '/Images/hero.webp',
            review: 'The best choice for learning anything is to practice.',
        },
        {
            name: `Madhu`,
            img: `/Images/download.jpg`,
            review: `The best way for learning any thing is to do pratice.`
        },
        {
            name: `John Morgan`,
            img: `/Images/download.jpg`,
            review: `The best choice for learning any thing is to do pratice.`
        },
        {
            name: `John Morgan`,
            img: `/Images/download.jpg`,
            review: `The best choice for learning any thing is to do pratice.`
        },
        {
            name: `John Morgan`,
            img: `/Images/download.jpg`,
            review: `The best choice for learning any thing is to do pratice.`
        },
        {
            name: `John Morgan`,
            img: `/Images/download.jpg`,
            review: `The best choice for learning any thing is to do pratice.`
        }
        // Add other data objects here...
    ];
    
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: <SampleArrow />,
        prevArrow: <SampleArrow />,
        responsive: [
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
        <div className='w-3/4 m-auto bg-white'>
            <div className='mt-20'>
            <Slider {...settings}>
                {data.map((d) => (
                    <div key={d.name} className='bg-white h-[450px] text-black rounded-xl'>
                        <div className='h-56 bg-light-pink flex justify-center items-center rounded-t-xl'>
                            <img src={d.img} alt='' className='h-44 w-44 rounded-full'/>
                        </div>
                        <div className='flex flex-col items-center justify-center gap-4 p-4'>

                            <p className='text-xl font-semibold'>{d.name}</p>
                            <p className='text-center'>{d.review}</p>
                        </div>
                    </div>
                ))}
                </Slider>
            </div>
        </div>
    );
}



export default Crousal
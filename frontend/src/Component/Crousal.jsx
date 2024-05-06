import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import React, { Component } from "react";


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

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <div className='w-3/4 m-auto bg-white'>
            <div className='mt-20'>
                <Carousel
                    responsive={responsive}
                    swipeable={false}
                    draggable={false}
                    infinite={true}
                    autoPlay={false}
                    // autoPlaySpeed={3000}
                    keyBoardControl={true}
                    slidesToSlide={1}
                >
                    {data.map((d) => (
                        <div className='bg-white h-[450px] text-black rounded-xl '>
                            <div className='h-56 bg-light-pink flex justify-center items-center rounded-t-xl'>
                                <img src={d.img} alt='' className='h-44 w-44 rounded-full' />
                            </div>
                            <div className='flex flex-col items-center justify-center gap-4 p-4'>

                                <p className='text-xl font-semibold'>{d.name}</p>
                                <p className='text-center'>{d.review}</p>
                            </div>
                        </div>
                    ))}
                </Carousel>
            </div>
        </div>
    );
}



export default Crousal
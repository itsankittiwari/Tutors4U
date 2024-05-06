import React from 'react'
import img1 from '../assets/hero.webp';
function Card() {
  const data = [
    {
        no: '1',
        img: '/Images/hero.webp',
        quote:'Find your tutor.',
        color:'blue',
        review: 'The best choice for learning anything is to practice.',
    },
    {
        no: `2`,
        img: `/Images/download.jpg`,
        quote:'Start learning.',
        color:'yellow',
        review: `We’ll connect you with a tutor who will motivate, challenge, and inspire you.`
    },
    {
        no: `3`,
        img: `/Images/img1.png`,
        quote:'Speak. Read. Write. Repeat.',
        color:'purple',
        review: `The best choice for learning any thing is to do pratice.`
    }
  ];
  return (
    <>
        <div className='bg-white flex flex-row gap-4 mt-10 mb-1' >
        {data.map((d) => (
            <div key={d.no} className='border-2 rounded-md justify-center items-center w-[400px]'>
                <div className='mt-7 ml-7' > 
                <span style={{ backgroundColor: d.color }} className={`font-bold text-start items-start px-2 text-3xl`}>{d.no}</span>
                <h2 className='font-bold text-start items-start mt-7 text-3xl'>{d.quote}</h2>
                <p className='text-start items-start mt-4 text-sm'>{d.review}</p>
                </div>
                <div>
                    <img src={d.img} alt='Work_Image' className='w-full mt-7'/>
                </div>

            </div>
            ))}
        </div>

        
    </>
  )
}

export default Card
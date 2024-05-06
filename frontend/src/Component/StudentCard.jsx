import React from 'react'
import { Link } from 'react-router-dom';
function StudentCard() {
    const data2 = [
        {
            img: '/Images/hero.webp',
            quote:'Find your tutor.',
            review: 'The best choice for learning anything is to practice.',
        },
        {
            img: `/Images/stu2.jpg`,
            quote:'Start learning.',
            review: `We’ll connect you with a tutor who will motivate, challenge, and inspire you.`
        },
        {
            img: `/Images/stu1.jpg`,
            quote:'Speak. Read. Write. Repeat.',
            review: `The best choice for learning any thing is to do pratice.`
        }
      ];
    return (
        <div className='bg-white flex flex-row gap-4  mb-1' >
            {data2.map((d) => (
               <Link to="#" class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src={d.img} alt="image"/>
                    <div class="flex flex-col justify-between p-4 leading-normal">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-black dark:text-white">{d.quote}</h5>
                        <p class="mb-3 font-normal text-black dark:text-gray-400">{d.review}</p>
                    </div>
            </Link>
            ))}
        </div>
    )
}

export default StudentCard
import React from 'react';
import '../Styles/style_section.scss';

function Section8() {
  return (
    <div>
         <div className='background-color8 alignItem '>
             <div className='text-center'>
                <div class="text-[#ff6752] text-1xl font-semibold pt-10">Join With Us</div>
                <div class="text-4xl font-bold pt-1"> Which One is Suitable For You</div> 
            </div>
            

            <div class="flex gap-8 pt-20">
                 
            <a class="flex flex-col items-center bg-white rounded-lg border shadow-lg md:flex-row md:max-w-xl">
                <img class="object-cover w-full h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src="./cardImg.png" alt=""/>
            <div class="flex flex-col justify-between p-4 leading-normal">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Do You Want To <span class="text-[#ff6752]">Learn</span > here</h5>
                <h5></h5>
                <p class="mb-3 font-normal text-gray-500 dark:text-gray-200">Dramatically supply tranparent deliverables before backward</p>
                <div className='logo pt-1 '>
                    <button class="bg-[#ffffff] text-[#ff6752] font-medium py-2 px-4 border border-[#ff6752] rounded">
                        Join Now
                    </button>
                </div>
            </div>
            </a>
            
            <a class="flex flex-col items-center bg-white rounded-lg border shadow-lg md:flex-row md:max-w-xl pl-2">
                <img class="object-cover w-full h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src="./cardImg2.png" alt=""/>
            <div class="flex flex-col justify-between p-4 leading-normal">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Do You Want To <span class="text-[#ff6752]">Teach</span > here</h5>
                <p class="mb-3 font-normal text-gray-500 dark:text-gray-200">Dramatically supply tranparent deliverables before backward</p>
                <div className='logo pt-1 '>
                    <button class="bg-[#ffffff] text-[#ff6752] font-medium py-2 px-4 border border-[#ff6752] rounded">
                        Join Now
                    </button>
                </div>
            </div>
            </a>



            </div>

         </div>
    </div>
  )
}

export default Section8
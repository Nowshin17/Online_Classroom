import React from 'react';
import '../Styles/style_section.scss';

function Section7() {
  return (
<div>
        <div className='background-color4 alignItem '>
            <div className='flex '>
                <div className='text-4xl font-bold pt-12'>Our Expert Instructor</div>
                <div className='pl-[700px] pt-12 flex gap-4'>
                    <button class="p-2 border rounded-full bg-[#FFEFEF] border-transparent text-neutral-50">
                        <svg class="w-6 h-6 text-[#FE6752]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
                    </button>
                    <button class="p-2 border rounded-full bg-[#FE6752] border-transparent text-neutral-50">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
                    </button>
                </div>
            </div>
            <div class="pt-12 flex gap-10 ">
                <div class="max-w-sm rounded overflow-hidden shadow-lg text-center p-6">
                    <img src="./girl_image.png" alt="img" /> 
                    <div class="px-6 py-4">
                        <div class="font-bold text-xl mb-2"> Devon lane</div>
                            <p class="text-gray-700 text-base font-semibold">
                            INSTRUCTOR
                            </p>
                    </div>
                
                </div>

                <div class="max-w-sm rounded overflow-hidden shadow-lg text-center p-6">
                    <img src="./girl_image.png" alt="img" /> 
                    <div class="px-6 py-4">
                        <div class="font-bold text-xl mb-2"> Devon lane</div>
                            <p class="text-gray-700 text-base font-semibold">
                            INSTRUCTOR
                            </p>
                    </div>
                
                </div>

                <div class="max-w-sm rounded overflow-hidden shadow-lg text-center p-6">
                    <img src="./girl_image.png" alt="img" /> 
                    <div class="px-6 py-4">
                        <div class="font-bold text-xl mb-2"> Devon lane</div>
                            <p class="text-gray-700 text-base font-semibold">
                            INSTRUCTOR
                            </p>
                    </div>
                
                </div>

                
            </div>

            <div className='logo pt-10 text-center'>
                <button class="bg-[#ff6752] text-white font-medium py-2 px-4 border border-[#ff6752] rounded">
                        All Instructor
                </button>
            </div>

            

        </div>
</div>
  )
}

export default Section7
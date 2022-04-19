import React from 'react';
import '../Styles/style_section.scss';


function Section2() {
  return (
<div>
    <div class="flex">
        <div className='background-color2'  class="pt-16 pl-60">
             <img src="./sect2_img.png" alt="img" /> 
        </div>
        <div class=" pt-40 pl-20">
            <div class="text-[#ff6752] text-1xl font-semibold pt-16"> About our Courses</div>
            <div class="text-4xl font-bold pt-1"> Explore Thousands <br/>of Creative Clases.</div>
            <div class=" pt-8 text-gray-600"> Dramatically supply tranparent deliverables before</div>
            <div class="text-gray-600">backward internal or "organic" sources. Completely <br/> leverage other. </div>

            <div className='logo pt-10 '>
                <button class="bg-[#ff6752] text-white font-medium py-2 px-4 border border-[#ff6752] rounded">
                    Explore Courses
                </button>
            </div>

        </div>
    </div>
</div>
  )
}

export default Section2
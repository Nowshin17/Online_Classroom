import React from 'react'
import { Link } from 'react-router-dom'
import '../Styles/Navbar.scss';
import '../Styles/style_section.scss';




function Navbar() {
  return (
  <div> 
    <div className='imgCover alignItem' >
        <div className='sum'>


            <div className='logo pl-20'>
                <button class="bg-[#ff6752] text-white font-medium py-2 px-4 border border-[#ff6752] rounded">
                    Categories
                </button>
            </div>

            <div className='item'>
                <ul className='ul'>
                {/* <svg class="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg> */}
                    <li> <div class="pt-2.5"><Link to='/'> Home </Link> </div> </li>
                    <li> <div class="pt-2.5"><Link to='/Pages'> Pages</Link></div></li>
                    <li> <div class="pt-2.5"><Link to='/Instructor'> Instructor</Link></div></li>
                    <li> <div class="pt-2.5"><Link to='/Course'> Course</Link> </div></li>
                    <li> <div class="pt-2.5"><Link to='/Blog'> Blog</Link> </div></li>
                    <li>
                        
                        <div class="container flex border rounded-3xl bg-[#ffffff]" >

                                <div class="flex border rounded-3xl ">
                                    <button class="flex items-center justify-center px-4 border-rounded ">
                                        <svg class="w-6 h-6 text-[#ff6752] bg-[#ffffff] " fill="currentColor" xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24">
                                            <path
                                                d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z">
                                            </path>
                                        </svg>
                                    </button>
                                    <input type="text" class="px-0 py-2 w-40 bg-[#ffffff] text-[#ff6752] pl-3 rounded-3xl " placeholder="Search Courses"/>
                                </div>
                        </div>  
                    
                    </li>

                    <li>
                        <Link to='/Profile'>
                            <button class="p-2 border rounded-3xl bg-neutral-100/10 border-transparent">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                            </button>
                        </Link>
                    </li>

                    <li>
                        <Link to='/Shop'>
                            <button class="p-2 border rounded-3xl bg-neutral-100/10 border-transparent">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                                </svg>
                            </button>
                        </Link>
                    </li>
                    
                </ul>

            </div>
        </div>

        <div class="pt-40">
            <div class="text-[#ffffff]">Learn New Skills & Popular Courses</div>
            <div class="text-[#ffffff] text-6xl font-bold">For Every Student,</div>
            <div class="text-[#ffffff] text-6xl font-bold">Every  <span class="text-[#ff6752]">Classroom </span >.</div>
            <div class=" pt-8 text-[#e2e2e2]"> Dramatically supply tranparent deliverables before backward</div>
            <div class="text-[#e2e2e2]">comp internam or "organic" sources. Completely leverage other. </div>

            <div className='logo pt-10 '>
                <button class="bg-[#ff6752] hover:[#ff6752] text-white font-medium py-2 px-4 border border-[#ff6752] rounded">
                    Explore Courses
                </button>
            </div>
            {/* border-4  border-l-[#e8e8e8] */}
            <div class="absolute top-42 right-80 ">
                <div class="p-2 border rounded-[8px] bg-neutral-100/10 border-transparent box-border h-30 w-40 p-4 border-4 shadow-md 
                "> 
                    <div class="text-[#ff6752] text-2xl font-semibold">235k </div>
                    <div class="text-[#ffffff] text-xs"> Worldwide Students </div>
                </div>
                
            </div>

        </div>

    </div>
</div>

  )
}

export default Navbar
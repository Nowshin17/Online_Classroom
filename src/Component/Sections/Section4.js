import React from 'react';
import '../Styles/style_section.scss';

function Section4() {
  return (
    <div>
        <div className='background-color44 alignItem'>
            <div className='flex'>

                
                <div className='text-4xl font-bold pt-12'>Explore Popular Courses</div>

                <div className='pl-[700px] pt-12'>
                    <button id="dropdownDefault" data-dropdown-toggle="dropdown" class="text-[#FF6752] bg-[#FEF8F5] hover:[#FF6752] focus:ring-4 focus:outline-none focus:ring-[#FF6752] font-medium text-sm px-4 py-2.5 text-center inline-flex items-center" type="button">All Category <svg class="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></button>

                        <div id="dropdown" class="hidden z-10 w-44 bg-[#FEF8F5] divide-y divide-gray-100  text-[#FF6752] shadow dark:bg-gray-700">
                            <ul class="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefault">
                            <li>
                                <a href="#" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
                            </li>
                            <li>
                                <a href="#" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
                            </li>
                            <li>
                                <a href="#" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
                            </li>
                            </ul>
                        </div>

                </div>
            </div>

        <div class="flex gap-4 pt-16">
            <div class="max-w-sm rounded overflow-hidden shadow-lg">
                <img class="w-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnKxaVNOJ9_ENS9CXvirmfFzBvOUd9TZorNfPEmObSCEXUkDPO0-LmDj2EFSzBnmtLVPA&usqp=CAU" alt="Sunset in the mountains"/>
                
                <div class="px-6 py-4">
                    <div class="flex gap-3" >

                        <img class="w-14 h-14 object-cover rounded-full " 
                            src="https://thumbs.dreamstime.com/b/photo-portrait-smart-guy-taking-notes-working-computer-desk-modern-industrial-office-indoors-photo-portrait-smart-208903730.jpg"/>
                        
                        <div class="font-bold text-xl mb-2">The complete 2022 Web Development camp</div>
                    </div>
                    <div class="flex gap-4 pt-2 pb-4">
                        <div class="flex gap-1 text-[#FE6652] ">
                            <div>
                            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clip-rule="evenodd"></path></svg>
                            </div>
                            <p class="text-gray-400 text-base">
                                35 classes
                            </p>
                        </div>
                        <div class="flex gap-1 ">
                            <div>
                                <svg class="w-5 h-5 text-[#FE6652]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg>
                            </div>
                            <div>   
                                <p class="text-gray-400 text-base">
                                291 student
                                </p>
                            </div>
                        </div>


                        <div class="flex gap-1 ">
                            <div> <svg class="w-5 h-5 text-[#FE6652]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div>
                            <p class="text-gray-400 text-base">
                            4.1
                            </p>
                        </div>
                    </div>
                    <hr class=" "></hr>
                </div>
                

                <div class="flex gap-4 ">
                    <div class="px-8 pb-4">
                        <span class="inline-block bg-[#FFEFEF]  px-4 py-2 text-sm font-bold text-gray-700 mr-4 mb-2">Design</span>
                        <span class="inline-block bg-[#FFEFEF]  px-4 py-2 text-sm font-bold text-gray-700 mr-4 mb-2">Development</span>
                        <span class="inline-block px-3 py-1 text-lg font-bold text-gray-700 mr-2 mb-2">$29.99</span>
                    </div>
                </div>


            </div>


            <div class="max-w-sm rounded overflow-hidden shadow-lg">
                <img class="w-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnKxaVNOJ9_ENS9CXvirmfFzBvOUd9TZorNfPEmObSCEXUkDPO0-LmDj2EFSzBnmtLVPA&usqp=CAU" alt="Sunset in the mountains"/>
                
                <div class="px-6 py-4">
                    <div class="flex gap-3" >

                        <img class="w-14 h-14 object-cover rounded-full " 
                            src="https://thumbs.dreamstime.com/b/photo-portrait-smart-guy-taking-notes-working-computer-desk-modern-industrial-office-indoors-photo-portrait-smart-208903730.jpg"/>
                        
                        <div class="font-bold text-xl mb-2">The complete 2022 Web Development camp</div>
                    </div>
                    <div class="flex gap-4 pt-2 pb-4">
                        <div class="flex gap-1 text-[#FE6652] ">
                            <div>
                            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clip-rule="evenodd"></path></svg>
                            </div>
                            <p class="text-gray-400 text-base">
                                35 classes
                            </p>
                        </div>
                        <div class="flex gap-1 ">
                            <div>
                                <svg class="w-5 h-5 text-[#FE6652]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg>
                            </div>
                            <div>   
                                <p class="text-gray-400 text-base">
                                291 student
                                </p>
                            </div>
                        </div>


                        <div class="flex gap-1 ">
                            <div> <svg class="w-5 h-5 text-[#FE6652]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div>
                            <p class="text-gray-400 text-base">
                            4.1
                            </p>
                        </div>
                    </div>
                    <hr class=" "></hr>
                </div>
                
                
                <div class="flex gap-4 ">
                    <div class="px-8 pb-4">
                        <span class="inline-block bg-[#FFEFEF]  px-4 py-2 text-sm font-bold text-gray-700 mr-4 mb-2">Design</span>
                        <span class="inline-block bg-[#FFEFEF]  px-4 py-2 text-sm font-bold text-gray-700 mr-4 mb-2">Development</span>
                        <span class="inline-block px-3 py-1 text-lg font-bold text-gray-700 mr-2 mb-2">$29.99</span>
                    </div>
                </div>


            </div>


            <div class="max-w-sm rounded overflow-hidden shadow-lg">
                <img class="w-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnKxaVNOJ9_ENS9CXvirmfFzBvOUd9TZorNfPEmObSCEXUkDPO0-LmDj2EFSzBnmtLVPA&usqp=CAU" alt="Sunset in the mountains"/>
                
                <div class="px-6 py-4">
                    <div class="flex gap-3" >

                        <img class="w-14 h-14 object-cover rounded-full " 
                            src="https://thumbs.dreamstime.com/b/photo-portrait-smart-guy-taking-notes-working-computer-desk-modern-industrial-office-indoors-photo-portrait-smart-208903730.jpg"/>
                        
                        <div class="font-bold text-xl mb-2">The complete 2022 Web Development camp</div>
                    </div>
                    <div class="flex gap-4 pt-2 pb-4">
                        <div class="flex gap-1 text-[#FE6652] ">
                            <div>
                            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clip-rule="evenodd"></path></svg>
                            </div>
                            <p class="text-gray-400 text-base">
                                35 classes
                            </p>
                        </div>
                        <div class="flex gap-1 ">
                            <div>
                                <svg class="w-5 h-5 text-[#FE6652]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg>
                            </div>
                            <div>   
                                <p class="text-gray-400 text-base">
                                291 student
                                </p>
                            </div>
                        </div>


                        <div class="flex gap-1 ">
                            <div> <svg class="w-5 h-5 text-[#FE6652]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div>
                            <p class="text-gray-400 text-base">
                            4.1
                            </p>
                        </div>
                    </div>
                    <hr class=" "></hr>
                </div>
                
                
                <div class="flex gap-4 ">
                    <div class="px-8 pb-4">
                        <span class="inline-block bg-[#FFEFEF]  px-4 py-2 text-sm font-bold text-gray-700 mr-4 mb-2">Design</span>
                        <span class="inline-block bg-[#FFEFEF]  px-4 py-2 text-sm font-bold text-gray-700 mr-4 mb-2">Development</span>
                        <span class="inline-block px-3 py-1 text-lg font-bold text-gray-700 mr-2 mb-2">$29.99</span>
                    </div>
                </div>


            </div>
          

        
        </div>





        <div class="flex gap-4 pt-10">
            <div class="max-w-sm rounded overflow-hidden shadow-lg">
                <img class="w-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnKxaVNOJ9_ENS9CXvirmfFzBvOUd9TZorNfPEmObSCEXUkDPO0-LmDj2EFSzBnmtLVPA&usqp=CAU" alt="Sunset in the mountains"/>
                
                <div class="px-6 py-4">
                    <div class="flex gap-3" >

                        <img class="w-14 h-14 object-cover rounded-full " 
                            src="https://thumbs.dreamstime.com/b/photo-portrait-smart-guy-taking-notes-working-computer-desk-modern-industrial-office-indoors-photo-portrait-smart-208903730.jpg"/>
                        
                        <div class="font-bold text-xl mb-2">The complete 2022 Web Development camp</div>
                    </div>
                    <div class="flex gap-4 pt-2 pb-4">
                        <div class="flex gap-1 text-[#FE6652] ">
                            <div>
                            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clip-rule="evenodd"></path></svg>
                            </div>
                            <p class="text-gray-400 text-base">
                                35 classes
                            </p>
                        </div>
                        <div class="flex gap-1 ">
                            <div>
                                <svg class="w-5 h-5 text-[#FE6652]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg>
                            </div>
                            <div>   
                                <p class="text-gray-400 text-base">
                                291 student
                                </p>
                            </div>
                        </div>


                        <div class="flex gap-1 ">
                            <div> <svg class="w-5 h-5 text-[#FE6652]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div>
                            <p class="text-gray-400 text-base">
                            4.1
                            </p>
                        </div>
                    </div>
                    <hr class=" "></hr>
                </div>
                

                <div class="flex gap-4 ">
                    <div class="px-8 pb-4">
                        <span class="inline-block bg-[#FFEFEF]  px-4 py-2 text-sm font-bold text-gray-700 mr-4 mb-2">Design</span>
                        <span class="inline-block bg-[#FFEFEF]  px-4 py-2 text-sm font-bold text-gray-700 mr-4 mb-2">Development</span>
                        <span class="inline-block px-3 py-1 text-lg font-bold text-gray-700 mr-2 mb-2">$29.99</span>
                    </div>
                </div>


            </div>


            <div class="max-w-sm rounded overflow-hidden shadow-lg">
                <img class="w-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnKxaVNOJ9_ENS9CXvirmfFzBvOUd9TZorNfPEmObSCEXUkDPO0-LmDj2EFSzBnmtLVPA&usqp=CAU" alt="Sunset in the mountains"/>
                
                <div class="px-6 py-4">
                    <div class="flex gap-3" >

                        <img class="w-14 h-14 object-cover rounded-full " 
                            src="https://thumbs.dreamstime.com/b/photo-portrait-smart-guy-taking-notes-working-computer-desk-modern-industrial-office-indoors-photo-portrait-smart-208903730.jpg"/>
                        
                        <div class="font-bold text-xl mb-2">The complete 2022 Web Development camp</div>
                    </div>
                    <div class="flex gap-4 pt-2 pb-4">
                        <div class="flex gap-1 text-[#FE6652] ">
                            <div>
                            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clip-rule="evenodd"></path></svg>
                            </div>
                            <p class="text-gray-400 text-base">
                                35 classes
                            </p>
                        </div>
                        <div class="flex gap-1 ">
                            <div>
                                <svg class="w-5 h-5 text-[#FE6652]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg>
                            </div>
                            <div>   
                                <p class="text-gray-400 text-base">
                                291 student
                                </p>
                            </div>
                        </div>


                        <div class="flex gap-1 ">
                            <div> <svg class="w-5 h-5 text-[#FE6652]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div>
                            <p class="text-gray-400 text-base">
                            4.1
                            </p>
                        </div>
                    </div>
                    <hr class=" "></hr>
                </div>
                
                
                <div class="flex gap-4 ">
                    <div class="px-8 pb-4">
                        <span class="inline-block bg-[#FFEFEF]  px-4 py-2 text-sm font-bold text-gray-700 mr-4 mb-2">Design</span>
                        <span class="inline-block bg-[#FFEFEF]  px-4 py-2 text-sm font-bold text-gray-700 mr-4 mb-2">Development</span>
                        <span class="inline-block px-3 py-1 text-lg font-bold text-gray-700 mr-2 mb-2">$29.99</span>
                    </div>
                </div>


            </div>


            <div class="max-w-sm rounded overflow-hidden shadow-lg">
                <img class="w-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnKxaVNOJ9_ENS9CXvirmfFzBvOUd9TZorNfPEmObSCEXUkDPO0-LmDj2EFSzBnmtLVPA&usqp=CAU" alt="Sunset in the mountains"/>
                
                <div class="px-6 py-4">
                    <div class="flex gap-3" >

                        <img class="w-14 h-14 object-cover rounded-full " 
                            src="https://thumbs.dreamstime.com/b/photo-portrait-smart-guy-taking-notes-working-computer-desk-modern-industrial-office-indoors-photo-portrait-smart-208903730.jpg"/>
                        
                        <div class="font-bold text-xl mb-2">The complete 2022 Web Development camp</div>
                    </div>
                    <div class="flex gap-4 pt-2 pb-4">
                        <div class="flex gap-1 text-[#FE6652] ">
                            <div>
                            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clip-rule="evenodd"></path></svg>
                            </div>
                            <p class="text-gray-400 text-base">
                                35 classes
                            </p>
                        </div>
                        <div class="flex gap-1 ">
                            <div>
                                <svg class="w-5 h-5 text-[#FE6652]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg>
                            </div>
                            <div>   
                                <p class="text-gray-400 text-base">
                                291 student
                                </p>
                            </div>
                        </div>


                        <div class="flex gap-1 ">
                            <div> <svg class="w-5 h-5 text-[#FE6652]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div>
                            <p class="text-gray-400 text-base">
                            4.1
                            </p>
                        </div>
                    </div>
                    <hr class=" "></hr>
                </div>
                
                
                <div class="flex gap-4 ">
                    <div class="px-8 pb-4">
                        <span class="inline-block bg-[#FFEFEF]  px-4 py-2 text-sm font-bold text-gray-700 mr-4 mb-2">Design</span>
                        <span class="inline-block bg-[#FFEFEF]  px-4 py-2 text-sm font-bold text-gray-700 mr-4 mb-2">Development</span>
                        <span class="inline-block px-3 py-1 text-lg font-bold text-gray-700 mr-2 mb-2">$29.99</span>
                    </div>
                </div>


            </div>
          

        
        </div>

        <div className='logo pt-10 text-center'>
                    <button class="bg-[#ff6752] text-white font-medium py-2 px-4 border border-[#ff6752] rounded">
                        Browse All Courses
                    </button>
                </div>





            
        </div>
    </div>
  )
}

export default Section4
"use client"
import React, { useState } from 'react'
import { CiEdit, CiSearch } from 'react-icons/ci'
import Sidebar from '../../components/main/Home/WelcomeSection/SideBar'
import { RxHamburgerMenu } from "react-icons/rx";

const page = () => {
    const [isWide, setIsWide] = useState(true);
    return (
        <div className='flex'>
            <Sidebar isWide={isWide} setIsWide={setIsWide} />
            <div className='w-full h-screen'>
                <div className='flex justify-between w-[100%] px-10 pt-14 h-[126px] border '>
                    <div className='font-bold text-[26px] space-x-2 flex'>
                        <div className='lg:hidden text-[#586AEA] text-[44px] -mt-12' onClick={() => setIsWide(true)}><RxHamburgerMenu /></div>
                        <div>Projects</div>
                    </div>
                    <div className='flex items-center space-x-4'>
                        <div className='flex items-center px-4 border-2 space-x-2 rounded-lg'>
                            <CiSearch fontSize={20} color='#DFDEDE' />
                            <input type="search" name="" id="" className='py-2 outline-none' placeholder='Search...' />
                        </div>
                        <div>
                            <button className='px-4 py-2 rounded-lg bg-[#586AEA] text-white'>+ Create Project</button>
                        </div>
                        <div className='flex space-x-2 items-center'>
                            <div><img src="/t3.png" alt="" /></div>
                            <div>
                                <div>Noah Ally</div>
                                <div className='text-[13px] leading-tight'>View Profile</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-[100%] h-[calc(100%-126px)] overflow-y-auto px-10 pb-5'>
                    <div className='overflow-hidden overflow-x-auto  w-[800px] md:w-[100%] grid grid-cols-4 py-4 gap-10'>
                        <div className='py-2 rounded-lg border'>
                            <div className='pl-4 space-y-2 border-r-2 border-[#FF7F5C]'>
                                <div className='text-[#A0A0A0]'>Projects:</div>
                                <div className='text-[#FF7F5C] text-[32px] font-semibold'>137</div>
                            </div>
                        </div>
                        <div className='py-2 rounded-lg border'>
                            <div className='pl-4 space-y-2 border-r-2 border-[#70CABD]'>
                                <div className='text-[#A0A0A0]'>Tasks:</div>
                                <div className='text-[#70CABD] text-[32px] font-semibold'>594</div>
                            </div>
                        </div>
                        <div className='py-2 rounded-lg border'>
                            <div className='pl-4 space-y-2 border-r-2 border-[#FFC366]'>
                                <div className='text-[#A0A0A0]'>Sprints:</div>
                                <div className='text-[#FFC366] text-[32px] font-semibold'>412</div>
                            </div>
                        </div>
                        <div className='py-2 rounded-lg border'>
                            <div className='pl-4 space-y-2 border-r-2 border-[#C891FF]'>
                                <div className='text-[#A0A0A0]'>Backlogs:</div>
                                <div className='text-[#C891FF] text-[32px] font-semibold'>1086</div>
                            </div>
                        </div>
                    </div>
                    <div className='overflow-hidden overflow-x-auto  w-[800px] md:w-[100%] flex items-center border rounded-lg bg-[#F5F7F9]'>
                        <div className='border-r-2 border-[#DEE3E7] py-2 text-[#2D2D2D] w-[20%] text-center'>Project Name</div>
                        <div className='border-r-2 border-[#DEE3E7] py-2 text-[#2D2D2D] w-[25%] text-center'>Description</div>
                        <div className='border-r-2 border-[#DEE3E7] py-2 text-[#2D2D2D] w-[20%] text-center'>Teams</div>
                        <div className='border-r-2 border-[#DEE3E7] py-2 text-[#2D2D2D] w-[15%] text-center'>PM</div>
                        <div className='py-2 text-[#2D2D2D] w-[25%] text-center'>Action</div>
                    </div>
                    <div className='overflow-hidden overflow-x-auto  w-[800px] md:w-[100%]  px-4 py-2 font-semibold text-[18px]'>A</div>
                    <div className='overflow-hidden overflow-x-auto  w-[800px] md:w-[100%]  border rounded-lg'>
                        <a href='/project_detail' className='flex items-center border-b w-[100%]'>
                            <div className='border-r-2 border-[#DEE3E7] py-1 text-[#2D2D2D] w-[20%] text-center text-[13px]'>Absol Tech</div>
                            <div className='border-r-2 border-[#DEE3E7] py-1 text-[#2D2D2D] w-[25%] text-center text-[13px]'>Lorem Ipsum is simply dummy text of....</div>
                            <div className='border-r-2 border-[#DEE3E7] py-1 text-[#2D2D2D] w-[20%] flex justify-center text-[13px]'><img src="/combine.png" alt="" /></div>
                            <div className='border-r-2 border-[#DEE3E7] py-1 text-[#2D2D2D] w-[15%] flex justify-center text-[13px]'><img src="/t3.png" width={25} alt="" /></div>
                            <div className='flex justify-center items-center space-x-3 py-1 text-[#2D2D2D] w-[25%] text-[14px]'>
                                <div className='border py-1 rounded-lg'>
                                    <button className='px-6 py-1 border-l text-[#586AEA] border-[#586AEA]'>
                                        {/* <p className='px-2 py-1 hidden hover:block'><CiEdit /></p> */}
                                        <p>Edit</p>
                                    </button>
                                </div>
                                <div className='border py-1 rounded-lg'>
                                    <button className='px-6 py-1 border-l text-[#E04C4C] border-[#E04C4C]'>Delete</button>
                                </div>
                                <div></div>
                            </div>
                        </a>
                        <div className='flex items-center w-[100%]'>
                            <div className='border-r-2 border-[#DEE3E7] py-1 text-[#2D2D2D] w-[20%] text-center text-[13px]'>Absol Tech</div>
                            <div className='border-r-2 border-[#DEE3E7] py-1 text-[#2D2D2D] w-[25%] text-center text-[13px]'>Lorem Ipsum is simply dummy text of....</div>
                            <div className='border-r-2 border-[#DEE3E7] py-1 text-[#2D2D2D] w-[20%] flex justify-center text-[13px]'><img src="/combine.png" alt="" /></div>
                            <div className='border-r-2 border-[#DEE3E7] py-1 text-[#2D2D2D] w-[15%] flex justify-center text-[13px]'><img src="/t3.png" width={25} alt="" /></div>
                            <div className='flex justify-center items-center space-x-3 py-1 text-[#2D2D2D] w-[25%] text-[14px]'>
                                <div className='border py-1 rounded-lg'>
                                    <button className='px-6 py-1 border-l text-[#586AEA] border-[#586AEA]'>
                                        {/* <p className='px-2 py-1 hidden hover:block'><CiEdit /></p> */}
                                        <p>Edit</p>
                                    </button>
                                </div>
                                <div className='border py-1 rounded-lg'>
                                    <button className='px-6 py-1 border-l text-[#E04C4C] border-[#E04C4C]'>Delete</button>
                                </div>
                                <div></div>
                            </div>
                        </div>

                    </div>
                    <div className='w-[100%] px-4 py-2 font-semibold text-[18px]'>B</div>
                    <div className='overflow-hidden overflow-x-auto  w-[800px] md:w-[100%]  border rounded-lg'>
                        <div className='flex items-center border-b w-[100%]'>
                            <div className='border-r-2 border-[#DEE3E7] py-1 text-[#2D2D2D] w-[20%] text-center text-[13px]'>Absol Tech</div>
                            <div className='border-r-2 border-[#DEE3E7] py-1 text-[#2D2D2D] w-[25%] text-center text-[13px]'>Lorem Ipsum is simply dummy text of....</div>
                            <div className='border-r-2 border-[#DEE3E7] py-1 text-[#2D2D2D] w-[20%] flex justify-center text-[13px]'><img src="/combine.png" alt="" /></div>
                            <div className='border-r-2 border-[#DEE3E7] py-1 text-[#2D2D2D] w-[15%] flex justify-center text-[13px]'><img src="/t3.png" width={25} alt="" /></div>
                            <div className='flex justify-center items-center space-x-3 py-1 text-[#2D2D2D] w-[25%] text-[14px]'>
                                <div className='border py-1 rounded-lg'>
                                    <button className='px-6 py-1 border-l text-[#586AEA] border-[#586AEA]'>
                                        {/* <p className='px-2 py-1 hidden hover:block'><CiEdit /></p> */}
                                        <p>Edit</p>
                                    </button>
                                </div>
                                <div className='border py-1 rounded-lg'>
                                    <button className='px-6 py-1 border-l text-[#E04C4C] border-[#E04C4C]'>Delete</button>
                                </div>
                                <div></div>
                            </div>
                        </div>
                        <div className='flex items-center border-b w-[100%]'>
                            <div className='border-r-2 border-[#DEE3E7] py-1 text-[#2D2D2D] w-[20%] text-center text-[13px]'>Absol Tech</div>
                            <div className='border-r-2 border-[#DEE3E7] py-1 text-[#2D2D2D] w-[25%] text-center text-[13px]'>Lorem Ipsum is simply dummy text of....</div>
                            <div className='border-r-2 border-[#DEE3E7] py-1 text-[#2D2D2D] w-[20%] flex justify-center text-[13px]'><img src="/combine.png" alt="" /></div>
                            <div className='border-r-2 border-[#DEE3E7] py-1 text-[#2D2D2D] w-[15%] flex justify-center text-[13px]'><img src="/t3.png" width={25} alt="" /></div>
                            <div className='flex justify-center items-center space-x-3 py-1 text-[#2D2D2D] w-[25%] text-[14px]'>
                                <div className='border py-1 rounded-lg'>
                                    <button className='px-6 py-1 border-l text-[#586AEA] border-[#586AEA]'>
                                        {/* <p className='px-2 py-1 hidden hover:block'><CiEdit /></p> */}
                                        <p>Edit</p>
                                    </button>
                                </div>
                                <div className='border py-1 rounded-lg'>
                                    <button className='px-6 py-1 border-l text-[#E04C4C] border-[#E04C4C]'>Delete</button>
                                </div>
                                <div></div>
                            </div>
                        </div>
                        <div className='flex items-center border-b w-[100%]'>
                            <div className='border-r-2 border-[#DEE3E7] py-1 text-[#2D2D2D] w-[20%] text-center text-[13px]'>Absol Tech</div>
                            <div className='border-r-2 border-[#DEE3E7] py-1 text-[#2D2D2D] w-[25%] text-center text-[13px]'>Lorem Ipsum is simply dummy text of....</div>
                            <div className='border-r-2 border-[#DEE3E7] py-1 text-[#2D2D2D] w-[20%] flex justify-center text-[13px]'><img src="/combine.png" alt="" /></div>
                            <div className='border-r-2 border-[#DEE3E7] py-1 text-[#2D2D2D] w-[15%] flex justify-center text-[13px]'><img src="/t3.png" width={25} alt="" /></div>
                            <div className='flex justify-center items-center space-x-3 py-1 text-[#2D2D2D] w-[25%] text-[14px]'>
                                <div className='border py-1 rounded-lg'>
                                    <button className='px-6 py-1 border-l text-[#586AEA] border-[#586AEA]'>
                                        {/* <p className='px-2 py-1 hidden hover:block'><CiEdit /></p> */}
                                        <p>Edit</p>
                                    </button>
                                </div>
                                <div className='border py-1 rounded-lg'>
                                    <button className='px-6 py-1 border-l text-[#E04C4C] border-[#E04C4C]'>Delete</button>
                                </div>
                                <div></div>
                            </div>
                        </div>
                        <div className='flex items-center w-[100%]'>
                            <div className='border-r-2 border-[#DEE3E7] py-1 text-[#2D2D2D] w-[20%] text-center text-[13px]'>Absol Tech</div>
                            <div className='border-r-2 border-[#DEE3E7] py-1 text-[#2D2D2D] w-[25%] text-center text-[13px]'>Lorem Ipsum is simply dummy text of....</div>
                            <div className='border-r-2 border-[#DEE3E7] py-1 text-[#2D2D2D] w-[20%] flex justify-center text-[13px]'><img src="/combine.png" alt="" /></div>
                            <div className='border-r-2 border-[#DEE3E7] py-1 text-[#2D2D2D] w-[15%] flex justify-center text-[13px]'><img src="/t3.png" width={25} alt="" /></div>
                            <div className='flex justify-center items-center space-x-3 py-1 text-[#2D2D2D] w-[25%] text-[14px]'>
                                <div className='border py-1 rounded-lg'>
                                    <button className='px-6 py-1 border-l text-[#586AEA] border-[#586AEA]'>
                                        {/* <p className='px-2 py-1 hidden hover:block'><CiEdit /></p> */}
                                        <p>Edit</p>
                                    </button>
                                </div>
                                <div className='border py-1 rounded-lg'>
                                    <button className='px-6 py-1 border-l text-[#E04C4C] border-[#E04C4C]'>Delete</button>
                                </div>
                                <div></div>
                            </div>
                        </div>

                    </div>
                    <div className='w-[100%] px-4 py-2 font-semibold text-[18px]'>C</div>
                    <div className='overflow-hidden overflow-x-auto  w-[800px] md:w-[100%]  border rounded-lg'>
                        <div className='flex items-center w-[100%]'>
                            <div className='border-r-2 border-[#DEE3E7] py-1 text-[#2D2D2D] w-[20%] text-center text-[13px]'>Absol Tech</div>
                            <div className='border-r-2 border-[#DEE3E7] py-1 text-[#2D2D2D] w-[25%] text-center text-[13px]'>Lorem Ipsum is simply dummy text of....</div>
                            <div className='border-r-2 border-[#DEE3E7] py-1 text-[#2D2D2D] w-[20%] flex justify-center text-[13px]'><img src="/combine.png" alt="" /></div>
                            <div className='border-r-2 border-[#DEE3E7] py-1 text-[#2D2D2D] w-[15%] flex justify-center text-[13px]'><img src="/t3.png" width={25} alt="" /></div>
                            <div className='flex justify-center items-center space-x-3 py-1 text-[#2D2D2D] w-[25%] text-[14px]'>
                                <div className='border py-1 rounded-lg'>
                                    <button className='px-6 py-1 border-l text-[#586AEA] border-[#586AEA]'>
                                        {/* <p className='px-2 py-1 hidden hover:block'><CiEdit /></p> */}
                                        <p>Edit</p>
                                    </button>
                                </div>
                                <div className='border py-1 rounded-lg'>
                                    <button className='px-6 py-1 border-l text-[#E04C4C] border-[#E04C4C]'>Delete</button>
                                </div>
                                <div></div>
                            </div>
                        </div>
                    </div>
                    <div className='w-[100%] px-4 py-2 font-semibold text-[18px]'>D</div>
                    <div className='overflow-hidden overflow-x-auto  w-[800px] md:w-[100%]  border rounded-lg'>
                        <div className='flex items-center border-b w-[100%]'>
                            <div className='border-r-2 border-[#DEE3E7] py-1 text-[#2D2D2D] w-[20%] text-center text-[13px]'>Absol Tech</div>
                            <div className='border-r-2 border-[#DEE3E7] py-1 text-[#2D2D2D] w-[25%] text-center text-[13px]'>Lorem Ipsum is simply dummy text of....</div>
                            <div className='border-r-2 border-[#DEE3E7] py-1 text-[#2D2D2D] w-[20%] flex justify-center text-[13px]'><img src="/combine.png" alt="" /></div>
                            <div className='border-r-2 border-[#DEE3E7] py-1 text-[#2D2D2D] w-[15%] flex justify-center text-[13px]'><img src="/t3.png" width={25} alt="" /></div>
                            <div className='flex justify-center items-center space-x-3 py-1 text-[#2D2D2D] w-[25%] text-[14px]'>
                                <div className='border py-1 rounded-lg'>
                                    <button className='px-6 py-1 border-l text-[#586AEA] border-[#586AEA]'>
                                        {/* <p className='px-2 py-1 hidden hover:block'><CiEdit /></p> */}
                                        <p>Edit</p>
                                    </button>
                                </div>
                                <div className='border py-1 rounded-lg'>
                                    <button className='px-6 py-1 border-l text-[#E04C4C] border-[#E04C4C]'>Delete</button>
                                </div>
                                <div></div>
                            </div>
                        </div>
                        <div className='flex items-center border-b w-[100%]'>
                            <div className='border-r-2 border-[#DEE3E7] py-1 text-[#2D2D2D] w-[20%] text-center text-[13px]'>Absol Tech</div>
                            <div className='border-r-2 border-[#DEE3E7] py-1 text-[#2D2D2D] w-[25%] text-center text-[13px]'>Lorem Ipsum is simply dummy text of....</div>
                            <div className='border-r-2 border-[#DEE3E7] py-1 text-[#2D2D2D] w-[20%] flex justify-center text-[13px]'><img src="/combine.png" alt="" /></div>
                            <div className='border-r-2 border-[#DEE3E7] py-1 text-[#2D2D2D] w-[15%] flex justify-center text-[13px]'><img src="/t3.png" width={25} alt="" /></div>
                            <div className='flex justify-center items-center space-x-3 py-1 text-[#2D2D2D] w-[25%] text-[14px]'>
                                <div className='border py-1 rounded-lg'>
                                    <button className='px-6 py-1 border-l text-[#586AEA] border-[#586AEA]'>
                                        {/* <p className='px-2 py-1 hidden hover:block'><CiEdit /></p> */}
                                        <p>Edit</p>
                                    </button>
                                </div>
                                <div className='border py-1 rounded-lg'>
                                    <button className='px-6 py-1 border-l text-[#E04C4C] border-[#E04C4C]'>Delete</button>
                                </div>
                                <div></div>
                            </div>
                        </div>
                        <div className='flex items-center border-b w-[100%]'>
                            <div className='border-r-2 border-[#DEE3E7] py-1 text-[#2D2D2D] w-[20%] text-center text-[13px]'>Absol Tech</div>
                            <div className='border-r-2 border-[#DEE3E7] py-1 text-[#2D2D2D] w-[25%] text-center text-[13px]'>Lorem Ipsum is simply dummy text of....</div>
                            <div className='border-r-2 border-[#DEE3E7] py-1 text-[#2D2D2D] w-[20%] flex justify-center text-[13px]'><img src="/combine.png" alt="" /></div>
                            <div className='border-r-2 border-[#DEE3E7] py-1 text-[#2D2D2D] w-[15%] flex justify-center text-[13px]'><img src="/t3.png" width={25} alt="" /></div>
                            <div className='flex justify-center items-center space-x-3 py-1 text-[#2D2D2D] w-[25%] text-[14px]'>
                                <div className='border py-1 rounded-lg'>
                                    <button className='px-6 py-1 border-l text-[#586AEA] border-[#586AEA]'>
                                        {/* <p className='px-2 py-1 hidden hover:block'><CiEdit /></p> */}
                                        <p>Edit</p>
                                    </button>
                                </div>
                                <div className='border py-1 rounded-lg'>
                                    <button className='px-6 py-1 border-l text-[#E04C4C] border-[#E04C4C]'>Delete</button>
                                </div>
                                <div></div>
                            </div>
                        </div>
                        <div className='flex items-center w-[100%]'>
                            <div className='border-r-2 border-[#DEE3E7] py-1 text-[#2D2D2D] w-[20%] text-center text-[13px]'>Absol Tech</div>
                            <div className='border-r-2 border-[#DEE3E7] py-1 text-[#2D2D2D] w-[25%] text-center text-[13px]'>Lorem Ipsum is simply dummy text of....</div>
                            <div className='border-r-2 border-[#DEE3E7] py-1 text-[#2D2D2D] w-[20%] flex justify-center text-[13px]'><img src="/combine.png" alt="" /></div>
                            <div className='border-r-2 border-[#DEE3E7] py-1 text-[#2D2D2D] w-[15%] flex justify-center text-[13px]'><img src="/t3.png" width={25} alt="" /></div>
                            <div className='flex justify-center items-center space-x-3 py-1 text-[#2D2D2D] w-[25%] text-[14px]'>
                                <div className='border py-1 rounded-lg'>
                                    <button className='px-6 py-1 border-l text-[#586AEA] border-[#586AEA]'>
                                        {/* <p className='px-2 py-1 hidden hover:block'><CiEdit /></p> */}
                                        <p>Edit</p>
                                    </button>
                                </div>
                                <div className='border py-1 rounded-lg'>
                                    <button className='px-6 py-1 border-l text-[#E04C4C] border-[#E04C4C]'>Delete</button>
                                </div>
                                <div></div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default page
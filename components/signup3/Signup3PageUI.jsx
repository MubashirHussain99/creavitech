import React from 'react'
import Custom_Radio_Button from '../structure/custom_radio_button'
import Custrom_Button from '../structure/custrom_button'

const Signup3PageUI = () => {
    return (
        <div>
            <div className='w-[100%] sm:px-12 px-4 sm:py-7 py-5'>   
                <img src="/mainlogo.png" alt="Main logo is missing Beacuse of Network issue." />
            </div>
            <div className='flex flex-col items-center justify-center sm:pt-12'>
                <div className='w-[100%] grid grid-flow-row sm:px-12 px-4 sm:pt-16'>
                    <div>
                        <div className='text-[32px] font-bold text-[#323338]'>How many people are on your team?</div>
                        <div className='grid sm:grid-cols-6  grid-cols-2 sm:min-w-[880px] w-[500px] gap-y-2 sm:space-y-0 gap-4 py-3 px-4'>
                            <Custom_Radio_Button name="1" radio_text="Only me " />
                            <Custom_Radio_Button name="1" radio_text="2 - 5" />
                            <Custom_Radio_Button name="1" radio_text="6 - 10" />
                            <Custom_Radio_Button name="1" radio_text="11 - 15" />
                            <Custom_Radio_Button name="1" radio_text="16 - 25" />
                            <Custom_Radio_Button name="1" radio_text="25 - 50" />
                        </div>
                        <div className='grid grid-cols-2 md:w-[350px] w-[500px] gap-y-2 sm:space-y-0 gap-4 px-4'>
                            <Custom_Radio_Button name="1" radio_text="51- 100" />
                            <Custom_Radio_Button name="1" radio_text="100 - 500" />
                        </div>
                    </div>
                    
                    
                    <div>
                        <div className='text-[32px] font-bold text-[#323338]'>How many people work at your company?</div>
                        <div className='grid sm:grid-cols-6  grid-cols-2 sm:min-w-[880px] w-[500px] gap-y-2 sm:space-y-0 gap-4 py-3 px-4'>
                            <Custom_Radio_Button name="2" radio_text="1 - 2" />
                            <Custom_Radio_Button name="2" radio_text="3 - 5" />
                            <Custom_Radio_Button name="2" radio_text="6 - 10" />
                            <Custom_Radio_Button name="2" radio_text="11 - 15" />
                            <Custom_Radio_Button name="2" radio_text="16 - 25" />
                            <Custom_Radio_Button name="2" radio_text="25 - 50" />
                        </div>
                        <div className='grid grid-cols-2 md:w-[350px] w-[500px] gap-y-2 sm:space-y-0 gap-4 px-4'>
                            <Custom_Radio_Button name="2" radio_text="51- 100" />
                            <Custom_Radio_Button name="2" radio_text="100 - 500+" />
                        </div>
                    </div>

                    {/* <div className='pt-10'>
                        <div className='text-[32px] font-bold text-[#323338]'>How many people work at your company?</div>
                        <div className='flex space-x-4 py-3'>
                            <Custom_Radio_Button name="2" radio_text="1-2" />
                            <Custom_Radio_Button name="2" radio_text="3 - 5" />
                            <Custom_Radio_Button name="2" radio_text="6 - 10" />
                            <Custom_Radio_Button name="2" radio_text="11 - 15" />
                            <Custom_Radio_Button name="2" radio_text="16 - 25" />
                            <Custom_Radio_Button name="2" radio_text="25 - 50" />
                        </div>
                        <div className='flex space-x-4 py-3'>
                            <Custom_Radio_Button name="2" radio_text="51- 100" />
                            <Custom_Radio_Button name="2" radio_text="100 - 500+" />
                        </div>
                    </div> */}
                    <div className='sm:flex sm:space-x-3'>
                        <a href="/signup2"><Custrom_Button className={`py-3 px-[100px]  text-[#586AEA] border-2 border-[#586AEA] font-medium rounded-[6px]`} div_className="py-3" buttonText="Back" /></a>
                        <a href="/signup4"><Custrom_Button className={`py-3 px-[100px]  bg-[#586AEA] text-white font-medium rounded-[6px]`} div_className="py-3" buttonText="Continue" /></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signup3PageUI
import React from 'react'
import Custom_Radio_Button from '../structure/custom_radio_button'
import Custrom_Button from '../structure/custrom_button'
import { useState } from 'react'

const Signup2PageUI = () => {
    const [radioShow, setRadioShow] = useState(0)
    return (
        <div>
            <div className='w-[100%] sm:px-12 px-4 py-7'>
                <img src="/mainlogo.png" alt="Main logo is missing Beacuse of Network issue." />
            </div>
            <div className='flex flex-col items-center justify-center pt-12'>
                <div className='w-[100%] grid grid-flow-row sm:px-12 px-4 pt-16'>
                    <div className='text-[32px] font-bold text-[#323338]'>Hey there, what brings you here today?</div>
                    <div>
                        <div className='grid sm:grid-cols-4 grid-cols-2 sm:w-[740px] w-[500px] gap-y-2 sm:space-y-0 gap-4 py-3 px-4'>
                            <Custom_Radio_Button name="1" onclick={() => setRadioShow(1)} radio_text="Work" />
                            <Custom_Radio_Button name="1" onclick={() => setRadioShow(1)} radio_text="Personal" />
                            <Custom_Radio_Button name="1" onclick={() => setRadioShow(1)} radio_text="School" />
                            <Custom_Radio_Button name="1" onclick={() => setRadioShow(1)} radio_text="Non Profits" />
                        </div>
                    </div>

                    {radioShow == 1 && (    
                        <div className='pt-10'>
                            <div className='text-[32px] font-bold text-[#323338]'>Hey there, what brings you here today?</div>
                            <div className='grid sm:grid-cols-4 grid-cols-2 sm:w-[740px] w-[500px] gap-y-2 sm:space-y-0 gap-4 py-3 px-4'>
                                <Custom_Radio_Button name="2" radio_text="Business Owner" />
                                <Custom_Radio_Button name="2" radio_text="Team Member" />
                                <Custom_Radio_Button name="2" radio_text="Team Leader" />
                                <Custom_Radio_Button name="2" radio_text="Freelancer" />
                            </div>
                        </div>
                    )}


                    <a href="/signup3"><Custrom_Button className={`py-3 ${radioShow ? 'px-[100px] py-3 bg-[#586AEA] text-white font-medium rounded-[6px]' : 'px-[100px] py-4 bg-[#D9D9D9] text-white font-medium rounded-[6px]'}`} div_className="py-3" buttonText="Continue" /></a>
                </div>
            </div>
        </div>
    )
}

export default Signup2PageUI
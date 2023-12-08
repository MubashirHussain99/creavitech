import React from 'react'
import Custom_Radio_Button from '../structure/custom_radio_button'
import Custrom_Button from '../structure/custrom_button'

const Signup4PageUI = () => {
    return (
        <div>
            <div className='w-[100%] sm:px-12 px-4 py-7'>
                <img src="/mainlogo.png" alt="Main logo is missing Beacuse of Network issue." />
            </div>
            <div className='flex flex-col items-center justify-center pt-12'>
                <div className='w-[100%]  grid grid-flow-row sm:px-12 px-4 pt-16'>
                    <div>
                        <div className='text-[32px] font-bold text-[#323338]'>One last question, how did you hear about us?</div>
                        <div className='grid sm:grid-cols-6  grid-cols-2 sm:min-w-[1250px] w-[500px] gap-y-2 sm:space-y-0 gap-4 py-3 px-4 '>
                            <Custom_Radio_Button name="1" radio_text="Social ads " />
                            <Custom_Radio_Button name="1" radio_text="Review Sites" />
                            <Custom_Radio_Button name="1" radio_text="LinkedIn" />
                            <Custom_Radio_Button name="1" radio_text="Friend_Colleague" />
                            <Custom_Radio_Button name="1" radio_text="Other" />
                        </div>
                    </div>

                   
                    <div className='flex space-x-3 py-3'>
                        <a href="/signup3"><Custrom_Button className={`py-3 px-[100px]  text-[#586AEA] border-2 border-[#586AEA] font-medium rounded-[6px]`} div_className="py-3" buttonText="Back" /></a>
                        <a href="/"><Custrom_Button className={`py-3 px-[100px]  bg-[#586AEA] text-white font-medium rounded-[6px]`} div_className="py-3" buttonText="Finish" /></a>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default Signup4PageUI
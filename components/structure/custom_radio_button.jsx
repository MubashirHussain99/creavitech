import React from 'react'

const Custom_Radio_Button = ({ radio_text,onclick,name }) => {
    return (
        <div>
            <div className='flex items-center space-x-3 px-4 py-3 border border-[#979797] rounded-full'>
                <input type="radio" onClick={onclick} name={name} id="" className='w-5 h-5' />
                <p className='text-[#929292] font-medium'>{radio_text}</p>
            </div>
        </div>
    )
}

export default Custom_Radio_Button
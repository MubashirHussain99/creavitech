import React from 'react'

const Custom_Textfield = ({labelText, placeholder, type,error ,setInput,id}) => {
    return (
        <div>
            <div className={`flex flex-col space-y-2 py-2`}>
                <label className='text-[#616161] font-medium'>{labelText}</label>
                <input
                    type={type}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder={placeholder || `Enter your ${labelText}`}
                    error={error}
                    className={`border border-[#979797] px-4 py-3 rounded-[6px] placeholder:text-[D9D9D9]`}
                    //className='border border-[#979797] px-4 py-3 rounded-[6px] placeholder:text-[D9D9D9]'
                    name=""
                    id={id}
                />
            </div>
        </div>
    )
}

export default Custom_Textfield
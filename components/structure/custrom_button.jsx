import React from 'react'

const Custrom_Button = ({buttonText,imageUrl,className,div_className,type}) => {
    return (
        <div className={`${div_className}`}>
            <button type={type} className={`${className}`} 
            //className='w-[100%] py-4 bg-[#586AEA] text-white font-medium rounded-[6px]'
            >
                <img src={imageUrl} alt="" />
                <p>{buttonText}</p>
            </button>

        </div>
    )
}

export default Custrom_Button
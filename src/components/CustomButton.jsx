import React from 'react'

const CustomButton = () => {
    return (
        <button className="relative p-[1px] rounded-full bg-linear-to-r from-transparent to-white hover:scale-105 transition-transform duration-300 cursor-pointer">

            <div className="bg-blue-200 px-6 py-2 rounded-full h-full w-full flex items-center justify-center gap-2">
                <span className="text-xl font-vanta text-white">
                    Create your own
                </span>

                <img src="/images/arrow.png" className="w-5 h-5"/>
            </div>
        </button>
    )
}
export default CustomButton

import React from 'react'
import Image from 'next/image'
import frame from '../assets/Frame 204.svg'
import arrow from '../assets/Icon (2).svg'

const ContactUs = () => {
    return (
        <div className='w-full px-5 grid grid-cols-1 md:grid-cols-2 gap-3 ' >
            <div className='object-cover'>
                <Image src={frame} alt='' />
            </div>

            <div className='flex flex-col gap-3 p-4 py-6 bg-[#FFF3F9] rounded-3xl'>
                <div className='flex flex-col gap-5 '>
                    <div className='text-3xl font-medium text-mainn font-poppins'>
                        S&apos;inscrire & économiser  <span className='text-[#5CD2DD] font-medium '>10%</span>
                    </div>

                    <div className='font-inter text-lgray text-sm text-justify '>
                        Office ipsum you must be muted. Synergize helicopter prioritize anyway
                        job due harvest most opportunity didn&apos;t. Yet busy any meeting shark light
                        marginalised 4-blocker message. Productize corporate nail caught synergy highlights
                        lunch. Company another pushback items dear or any.
                    </div>

                    <div className='flex gap-2 justify-center items-center'>
                        <div className='flex flex-grow'>
                            <input
                                type="text"
                                id="product"
                                className="bg-gray-50 h-full w-full px-4 py-4 rounded-lg border-[1px] focus:border-gray-100 border-[#F5E1EB] flex-grow  md:placeholder:text-gray-400"
                                placeholder="john@doe.com"
                                required
                            />
                        </div>

                        <div className=" bg-pop h-full m-0 px-5 flex justify-center items-center rounded-md hover:bg-[#29b6c4] ">
                            <button className="bg-inherit text-white font-normal font-inter items-center w-full p-0 m-0 uppercase">
                                <div className='flex justify-between items-center gap-2'>
                                    <div>S’inscrire</div>
                                    <Image src={arrow} alt='' />
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactUs
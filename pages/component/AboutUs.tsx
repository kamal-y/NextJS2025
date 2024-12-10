import Image from 'next/image'
import React from 'react'
import shopimg from '../assets/Groupe_25.svg'
import dish from '../assets/dish.svg'
import pc from '../assets/Groupe_56.svg'
import car from '../assets/Groupe_123.svg'

const AboutUs = () => {
    return (
        <div className='w-full py-4 mb-16 pb-14 bg-gradient-to-b from-pinkish to-[#FFFFFF]'>
            <div className='flex flex-col gap-10 p-8 pb-8'>
                <div className='flex flex-col gap-1 mx-auto'>
                    <div className='text-lg font-poppins mx-auto'>
                        On s’occupe de <span className='text-[#5CD2DD] font-bold'>tout</span>
                    </div>

                    <div className='font-inter text-lgray text-sm text-center'>
                        Office ipsum you must be muted. It meeting commitment busy pain.
                    </div>
                </div>

                <div className='flex gap-6 justify-center items-center flex-col md:flex-row'>
                    <div className='flex flex-col justify-between items-center gap-2'>
                        <div className='relative flex justify-center items-center'>
                            <Image src={shopimg} alt='' />
                            <div className="hidden md:block flex-1 h-[1px] bg-grayy ml-4 relative overflow-visible">
                                {/* Overflow effect */}
                                <div className="absolute top-0 left-full w-16 h-[1px] bg-grayy"></div>
                            </div>
                        </div>

                        <div className='text-lg font-inter text-mainn'>
                            Livraison & Reprise
                        </div>

                        <div className='px-3 font-inter text-lgray text-sm'>
                            Selon vos besoins
                        </div>
                    </div>



                    <div className='flex flex-col justify-between items-center gap-2'>
                        <div className='relative flex justify-center items-center gap-2'>
                            <div className="hidden md:block flex-1 h-[1px] bg-gray-400 ml-4 pr-2 relative overflow-visible">
                                {/* Line overflowing to the right */}
                                <div className="absolute top-0 right-full  w-16 h-[1px] bg-gray-400"></div>
                            </div>
                            <Image src={dish} alt='' />
                            <div className="hidden md:block flex-1 h-[1px] bg-grayy ml-4 relative overflow-visible">
                                {/* Overflow effect */}
                                <div className="absolute top-0 left-full w-16 h-[1px] bg-grayy"></div>
                            </div>
                        </div>

                        <div className='text-lg font-inter text-mainn'>
                            Nettoyage
                        </div>

                        <div className='px-3 font-inter text-lgray text-sm'>
                            Selon vos besoins
                        </div>
                    </div>

                    <div className='flex flex-col justify-between items-center gap-2'>
                        <div className='relative flex justify-center items-center gap-2'>
                            <div className="hidden md:block flex-1 h-[1px] bg-gray-400 ml-4 pr-2 relative overflow-visible">
                                {/* Line overflowing to the right */}
                                <div className="absolute top-0 right-full  w-16 h-[1px] bg-gray-400"></div>
                            </div>
                            <Image src={pc} alt='' />
                            <div className="hidden md:block flex-1 h-[1px] bg-grayy ml-4 relative overflow-visible">
                                {/* Overflow effect */}
                                <div className="absolute top-0 left-full w-16 h-[1px] bg-grayy"></div>
                            </div>
                        </div>

                        <div className='text-lg font-inter text-mainn'>
                            Nettoyage
                        </div>

                        <div className='px-3 font-inter text-lgray text-sm'>
                            Selon vos besoins
                        </div>
                    </div>

                    <div className='flex flex-col justify-between items-center gap-2'>
                        <div className='relative flex justify-center items-center gap-2'>
                            <div className="hidden md:block flex-1 h-[1px] bg-gray-400 ml-4 pr-2 relative overflow-visible">
                                {/* Line overflowing to the right */}
                                <div className="absolute top-0 right-full  w-16 h-[1px] bg-gray-400"></div>
                            </div>
                            <Image src={car} alt='' />
                        </div>

                        <div className='text-lg font-inter text-mainn'>
                            Nettoyage
                        </div>

                        <div className='px-3 font-inter text-lgray text-sm'>
                            Selon vos besoins
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUs
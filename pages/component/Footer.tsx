import React from 'react'
import LOGO1 from '../assets/Group.svg'
import LOGO2 from '../assets/Group (1).svg'
import Image from 'next/image'
import twitter from '../assets/Frame 117.svg'
import instaIcon from '../assets/Frame 117 (1).svg'
import linkdIn from '../assets/Frame 117 (2).svg'

const Footer = () => {
    return (
        <div className='border-t-2 mt-20 border-gray-100 flex justify-between items-center md:flex-row flex-col px-6 py-10 md:pb-96 md:gap-7 gap-12'>
            <div className='flex justify-between items-start flex-col md:flex-row gap-5'>
                <div className='flex items-center justify-center flex-col gap-2 mx-auto my-auto hover:cursor-pointer'>
                    <Image src={LOGO1} alt="weframe-image" />
                    <Image src={LOGO2} alt="weframe-image" />

                </div>

                <div className='flex justify-between gap-9 '>
                    <div className='flex flex-col gap-2 '>
                        <div className='md:text-base text-sm font-poppins  text-mainn font-medium'>INFOS PRATIQUES</div>
                        <div className='flex flex-col gap-2 font-space text-xs md:text-sm text-mainn '>
                            <div>À propos</div>
                            <div>Livraisons & Reprises</div>
                            <div>Mode d’emploi</div>
                            <div>F.A.Q</div>
                        </div>
                    </div>

                    <div className='flex flex-col gap-2 '>
                        <div className='md:text-base text-sm font-poppins  text-mainn font-medium'>LÉGAL</div>
                        <div className='flex flex-col gap-2 font-space text-xs md:text-sm text-mainn'>
                            <div>Mentions légales</div>
                            <div>CGU</div>
                            <div>CGV</div>
                            <div>Politique de confidentialité</div>
                        </div>
                    </div>

                    <div className='flex flex-col gap-2 '>
                        <div className='md:text-base text-sm font-poppins  text-mainn font-medium'>MON COMPTE</div>
                        <div className='flex flex-col gap-2 font-space text-xs md:text-sm text-mainn'>
                            <div>Accéder à mon compte</div>
                            <div>Ma liste d’envie</div>
                            <div>Créer un compte</div>
                            <div>Mot de passe oublié</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='flex justify-end md:items-end items-center gap-2 flex-col'>
                <div className='md:text-base text-sm font-poppins  text-mainn font-medium ml-0'>
                    NOUS SUIVRE
                </div>

                <div className='flex justify-between items-center gap-2 '>
                    <div  className='transform transition-transform duration-300 hover:scale-110 hover:cursor-pointer'>
                        <a><Image src={twitter} alt='' /></a>
                    </div>
                    <div className='transform transition-transform duration-300 hover:scale-110 hover:cursor-pointer'>
                        <a><Image src={instaIcon} alt='' /></a>
                    </div>
                    <div className='transform transition-transform duration-300 hover:scale-110 hover:cursor-pointer'>
                        <a><Image src={linkdIn} alt='' /></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
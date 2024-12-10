import React from 'react'
import LOGO1 from '../assets/Group.svg'
import LOGO2 from '../assets/Group (1).svg'
import icon1 from '../assets/Icon.svg'
import icon2 from '../assets/Icon (1).svg'
import Image from 'next/image'
import cartlogo from '../assets/shopping-cart-01.svg'
import cheveron from '../assets/chevron-down.svg'

const Header = () => {
  return (
    <header className='flex items-center justify-between md:gap-6 mx-2 w-full md:w-auto overflow-auto'>

      {/* Logo and Search Bar  */}

      <div className='flex  items-center p-3  gap-2 flex-grow'>
        <div className='flex items-center justify-center flex-col gap-2'>
          <Image src={LOGO1} alt="weframe-image" />
          <Image src={LOGO2} alt="weframe-image" />

        </div>

        {/* Search Bar   */}
        <div className='flex-grow relative flex items-center'>
          <input
            type="text"
            id="product"
            className="bg-gray-50 h-full w-full px-4 py-4 rounded border-none focus:outline-none focus:ring-2 focus:ring-mainn-400 flex-grow placeholder:opacity-0 md:placeholder:opacity-100 placeholder:text-white md:placeholder:text-gray-400"
            placeholder="Rechercher un produit"
            required
          />

          {/* <!--Search icon--> */}
          <span
            className="absolute z-1 right-0 input-group-text flex items-center whitespace-nowrap rounded px-3 py-1.5 text-center text-base font-normal text-lgray dark:text-neutral-200"
            id="basic-addon2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5">
              <path
                fillRule="evenodd"
                d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                clipRule="evenodd" />
            </svg>
          </span>
        </div>
      </div>

      {/* Navigation Link and buttons  */}

      <div className='flex justify-between items-center text-mainn font-medium text-md'>


        {/* First Two Links  */}
        <div className="z-1 hidden md:block min-h-[60vh]] w-full md:static md:w-auto absolute bg-white  items-center px-5" id="navbar-default">
          <ul className='flex justify-between md:gap-[4vw] md:items-center md:flex-row flex-col'>
            <li className='hover:cursor-pointer'>
              <a>
                <div className='flex justify-between items-center p-2 gap-3 '>
                  <Image src={icon1} alt='bulb' className='w-5' />
                  <div className='text-mainn'>
                    Inspirations
                  </div>
                </div>
              </a>
            </li>

            <li className='hover:cursor-pointer'>
              <a>
                <div className='flex justify-between items-center p-2  gap-3 '>
                  <Image src={icon2} alt='bulb' className='w-5 ' />
                  <div className='flex justify-center items-center text-mainn whitespace-nowrap'>
                    Mes favoris
                  </div>

                  <div className='p-2'>
                    <div className='rounded-full flex justify-center p-1 bg-gray-200 items-center min-w-8 min-h-4 text-xs'>
                      24
                    </div>
                  </div>
                </div>
              </a>
            </li>
          </ul>
        </div>





        <div className='p-3 flex justify-center items-center '>

          <div className=' border-sky-600 border bg-skyy rounded-md p-3 flex justify-between items-center gap-1 py-3 hover:cursor-pointer hover:bg-sky-600'>
            <div className='w-5'>
              <Image src={cartlogo} alt='cart' className='text-black'></Image>
            </div>

            <div className=' text-white font-inter hidden md:block'>
              Panier
            </div>
          </div>

        </div>


        <div className='flex justify-between items-center gap-2 hover:cursor-pointer'>
          <div className='rounded-full p-1 bg-gray-200 items-center min-w-10 min-h-10 border-gray-400 md:border-none border-4'>

          </div>

          <div className='flex justify-between items-center p-1 text-mainn gap-1'>
            <div className='hidden md:block'>FR</div>

            <div className='text-mainn w-4'>
              <Image src={cheveron} alt="chevron-image" />
            </div>
          </div>
        </div>

        <div className="flex items-center gap-6">
          {/* <div className="text-3xl cursor-pointer md:hidden">88</div>
                 */}

          <button
            className=" px-2 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          >
            {0 ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                className="h-6 w-6"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>

      </div>


    </header>
  )
}

export default Header
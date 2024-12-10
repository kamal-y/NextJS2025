import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import leftbutton from '../assets/Icon (3).svg'
import rightbutton from '../assets/Icon (4).svg'
import React from "react";

interface CarouselProps {
  children: React.ReactNode; // Proper typing for multiple children
  autoSlide?: boolean;
  autoSlideInterval?: number;
}

export default function Carousel({
  children,
  autoSlide = false,
  autoSlideInterval = 3000,
}: CarouselProps) {
  const [curr, setCurr] = useState(0)

  const prev = () =>
    setCurr((curr) => (curr === 0 ? React.Children.count(children) - 1 : curr - 1))

  const next = useCallback(() => {
    setCurr((curr) => (curr === React.Children.count(children) - 1 ? 0 : curr + 1))
  }, [children])

  useEffect(() => {
    if (!autoSlide) return
    const slideInterval = setInterval(next, autoSlideInterval)
    return () => clearInterval(slideInterval)
  }, [autoSlide, autoSlideInterval, next])

  return (
    <div className="overflow-hidden relative">
      <div
        className="flex transition-transform ease-out duration-500"
        style={{
          transform: `translateX(-${curr * 100}%)`,
          display: 'flex',
          flexWrap: 'nowrap', // Prevent wrapping of slides
        }}
      >
        {children}
      </div>
      <div className="absolute inset-0 flex items-center justify-between p-4 px-0">
        <button
          onClick={prev}
          className=" shadow bg-white/80 text-gray-800 hover:bg-white"
        >
          <div className="bg-pop p-4">
            <Image src={leftbutton} alt="Left Button" />
          </div>
        </button>
        <button
          onClick={next}
          className="shadow bg-white/80 text-gray-800 hover:bg-white"
        >
          <div className="bg-pop p-4">
            <Image src={rightbutton} alt="Right Button" />
          </div>
        </button>
      </div>

      <div className="absolute bottom-4 right-0 left-0">
      </div>
    </div>
  )
}

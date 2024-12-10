import React, { useMemo, useState } from 'react';

const Navbar = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null); // Initialize with type 'number | null'

    const NavbarItems = useMemo(
        () => [
            { label: 'Art de la table', href: '/' },
            { label: 'Mobilier', href: '/profile' },
            { label: 'Nappage', href: '/more' },
            { label: 'Matériel de salle', href: '/' },
            { label: 'Cuisine', href: '/profile' },
            { label: 'Barbecue', href: '/more' },
            { label: 'Tente', href: '/' },
            { label: 'Chauffage', href: '/profile' },
            { label: 'Podium - Piste de danse', href: '/more' },
            { label: 'Son et lumière', href: '/' },
            { label: 'Packs', href: '/profile' },
            { label: 'Consommables', href: '/more' },
        ],
        []
    );

    const handleClick = (index: number) => {
        setActiveIndex(index);
    };

    return (
        <div className='border-b-2 border-gray-200 mx-0 flex justify-evenly items-center md:gap-2 my-3 w-full md:w-auto uppercase overflow-auto whitespace-nowrap gap-3'>
            {NavbarItems.map((item, index) => (
                <div
                    key={index}
                    onClick={() => handleClick(index)}
                    className={`text-grayy text-sm flex items-center justify-center w-fit pb-2 cursor-pointer mb-0 uppercase${
                        activeIndex === index
                            ? 'font-medium text-lg text-skyy border-skyy border-b-2'
                            : 'border-transparent'
                    }`}
                >
                    {item.label}
                </div>
            ))}
        </div>
    );
};

export default Navbar;

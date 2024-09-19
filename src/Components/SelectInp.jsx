import React, { useState } from 'react';
import icon from "public/images/banner-image/input-ico.png";
import Image from 'next/image';

export default function SelectInp() {
    const [isDropdownVisible, setDropdownVisible] = useState(false);
    const [selectedOption, setSelectedOption] = useState('');

    const toggleDropdown = (e, option) => {
        e.stopPropagation();
        setDropdownVisible(!isDropdownVisible);
        setSelectedOption(option);
    };

    return (
        <>
            <div className="relative">
                <input
                    type="text"
                    className='bg-[#707070]/50  backdrop-blur-lg focus:outline-0 h-[48px] rounded-[8px] w-full px-3 text-white placeholder:text-white text-[14px] relative' placeholder='Select Service you Want'
                    value={selectedOption}
                    onClick={(e) => toggleDropdown(e, 'Service 1')}
                />
                <Image quality={80} src={icon} className='absolute right-[10px] top-[21px]' />
                {isDropdownVisible && (
                    <ul className="absolute top-[40px] left-0 bg-[#707070]  backdrop-blur-lg text-center border-2 min-h-[175px] rounded-b-md border-t-0 mt-1 w-full z-[9999999999]">
                        <li onClick={(e) => toggleDropdown(e, 'Service 1')} className="py-2 px-3 text-white hover:text-black hover:bg-gray-100 cursor-pointer">Service 1</li>
                        <li onClick={(e) => toggleDropdown(e, 'Service 2')} className="py-2 px-3 text-white hover:text-black hover:bg-gray-100 cursor-pointer">Service 2</li>
                        <li onClick={(e) => toggleDropdown(e, 'Service 3')} className="py-2 px-3 text-white hover:text-black hover:bg-gray-100 cursor-pointer">Service 3</li>
                        <li onClick={(e) => toggleDropdown(e, 'Service 4')} className="py-2 px-3 text-white hover:text-black hover:bg-gray-100 cursor-pointer">Service 4</li>
                    </ul>
                )}
            </div>
        </>
    );
}

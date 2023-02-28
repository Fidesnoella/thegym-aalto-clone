import { useState, useEffect } from 'react';
import Image from 'next/image';
import Button from '../ui/Button';
import Logo from "../../public/assets/aalto-logo.svg"
import lock from "../../public/assets/lock.svg"
import search from "../../public/assets/search.svg"
import menu from "../../public/assets/menu.svg"
import heart from "../../public/assets/heart.svg"
import earth from "../../public/assets/earth.svg"
import chevronDown from "../../public/assets/chevron-down.svg"

export default function Navbar() {

    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.pageYOffset > 2) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };
        window.addEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className='fixed w-full z-30'>
            <div className={`flex justify-between items-center border-black border-b bg-white text-black px-3 lg:pl-20 lg:pr-14 ${scrolled ? "py-1" : "py-6"}`}>
                <Image src={Logo} className={`${scrolled ? "w-12 lg:w-18 duration-300" : "w-20 lg:w-24"}`} />
                <div className='flex gap-4 lg:gap-8 items-center cursor-pointer'>
                    <ul className='hidden font-normal text-[#2d2d2d] text-base leading-[19px] lg:flex items-center gap-4 lg:gap-8'>
                        <li className='flex gap-2 py-2 hover:bg-[#e3e3e3]' ><Image src={lock} className="w-5" />For personnel</li>
                        <li className='flex gap-2 py-2 hover:bg-[#e3e3e3]'><Image src={heart} className="w-5" />Support us</li>
                        <li>|</li>
                        <li className='flex gap-2 py-2 hover:bg-[#e3e3e3]'><Image src={earth} className="w-5" />EN<Image src={chevronDown} className="w-5" /></li>
                        <li className='flex gap-2 py-2 hover:bg-[#e3e3e3]'><Image src={search} className="w-5" />Search</li>
                        <li className='flex gap-2 py-2 hover:bg-[#e3e3e3]'><Image src={menu} className="w-5" />Menu</li>
                    </ul>
                    <ul className='flex lg:hidden items-center font-normal text-[#2d2d2d] gap-4'>
                        <li className='flex gap-2 py-2 hover:bg-[#e3e3e3]'><Image src={search} className="w-5" /></li>
                        <li>|</li>
                        <li className='flex gap-2 py-2 hover:bg-[#e3e3e3]'><Image src={menu} className="w-5" /></li>
                    </ul>
                    <div className='hidden lg:block'>
                        <Button style={"text-white"}>Log in</Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

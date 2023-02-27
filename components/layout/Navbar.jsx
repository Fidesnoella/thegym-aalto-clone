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
    return (
        <div className='grid grid-cols-2 items-center border-black border-b-2 bg-white text-black px-3 md:pl-20 md:pr-14 py-2 md:py-0'>
            <Image src={Logo} className='w-20 md:w-24 py-4' />
            <div className='flex gap-8 items-center cursor-pointer'>
                <ul className='hidden font-normal text-[#2d2d2d] text-base leading-[19px] md:flex items-center gap-8 py-[35px]'>
                    <li className='flex gap-4 hover:bg-[#e3e3e3]' ><Image src={lock} className="w-5" />For personnel</li>
                    <li className='flex gap-2 hover:bg-[#e3e3e3]'><Image src={heart} className="w-5" />Support us</li>
                    <li >|</li>
                    <li className='flex gap-2 hover:bg-[#e3e3e3]'><Image src={earth} className="w-5" />EN<Image src={chevronDown} className="w-5" /></li>
                    <li className='flex gap-2 hover:bg-[#e3e3e3]'><Image src={search} className="w-5" />Search</li>
                    <li className='flex gap-2 hover:bg-[#e3e3e3]'><Image src={menu} className="w-5" />Menu</li>
                </ul>
                <ul className='flex md:hidden font-normal text-[#2d2d2d] gap-8'>
                    <li className='flex gap-2 hover:bg-[#e3e3e3]'><Image src={search} className="w-5" /></li>
                    <li className='flex gap-2 hover:bg-[#e3e3e3]'><Image src={menu} className="w-5" /></li>
                </ul>
                <div className='hidden md:block'>
                    <Button style={"text-white"}>Log in</Button>
                </div>
            </div>
        </div>
    );
}

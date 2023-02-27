import Image from 'next/image';
import Button from '../ui/Button';
import Logo from "../../public/assets/aalto-logo.svg"
import lock from "../../public/assets/lock.svg"

export default function Navbar() {
    return (
        <div className='grid grid-cols-2 items-center border-black border-b-2 bg-white text-black px-3 md:pl-20 md:pr-14 py-2 md:py-0'>
            <Image src={Logo} className='w-20 md:w-24' />
            <div className='flex gap-8 items-center'>
                <ul className='hidden font-normal text-[#2d2d2d] text-base leading-[19px] md:flex items-center gap-8 py-[35px]'>
                    <li className='flex gap-4' ><Image src={lock} className="w-5" />For personnel</li>
                    <li>Support us</li>
                    <li>EN</li>
                </ul>
                <ul className='flex font-normal text-[#2d2d2d] gap-8'>
                    <li>Search</li>
                    <li>Menu</li>
                </ul>
                <div className='hidden md:block'>
                    <Button style={"text-white"}>Log in</Button>
                </div>
            </div>
        </div>
    );
}

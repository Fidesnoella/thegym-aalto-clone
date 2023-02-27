import Image from 'next/image';
import Button from '../ui/Button';
import Logo from "../../public/assets/aalto-logo.svg"

export default function Navbar() {
    return (
        <div className='flex justify-between items-center border-black border-b-2 bg-white text-black pl-20 pr-14'>
            <div className='py-[35px]'>
                <Image src={Logo} className='w-16' />
            </div>
            <div className='flex gap-8 items-center'>
                <ul className='font-normal text-[#2d2d2d] text-base leading-[19px] flex items-center gap-8 py-[35px]'>
                    <li>For personnel</li>
                    <li>Support us</li>
                    <li>EN</li>
                    <li>Search</li>
                    <li>Menu</li>
                </ul>
                <Button style={"text-white"}>Log in</Button>
            </div>
        </div>
    );
}

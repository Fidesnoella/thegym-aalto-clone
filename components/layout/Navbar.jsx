import { useState, useEffect } from 'react';
import Image from 'next/image';
import Button from '../ui/Button';
import Logo from "../../public/assets/aalto-logo.svg"
import Link from 'next/link';
import lock from "../../public/assets/lock.svg"
import search from "../../public/assets/search.svg"
import menu from "../../public/assets/menu.svg"
import heart from "../../public/assets/heart.svg"
import earth from "../../public/assets/earth.svg"
import chevronDown from "../../public/assets/chevron-down.svg"
import xmark from "../../public/assets/cross.svg"


export default function Navbar() {

    const [scrolled, setScrolled] = useState(false);
    const [showSearch, setShowSearch] = useState(false);
    const [showMenu, setShowMenu] = useState(false)

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
        <>
            <div className='fixed w-full z-30'>
                <div className={`flex justify-between items-center border-black border-b bg-white text-black px-3 lg:pl-20 lg:pr-14 ${scrolled ? "py-1" : "py-6"}`}>
                    <Link href={"/"}><Image src={Logo} className={`${scrolled ? "w-12 lg:w-18 duration-300" : "w-20 lg:w-24"}`} /></Link>
                    <div className='flex gap-4 lg:gap-8 items-center cursor-pointer'>
                        <ul className='hidden font-normal text-[#2d2d2d] text-base leading-[19px] lg:flex items-center gap-4 lg:gap-8'>
                            <Link href={"/personnel"}>
                                <li className='flex gap-2 py-2 hover:bg-[#e3e3e3]' ><Image src={lock} className="w-5" />For personnel</li>
                            </Link>
                            <Link href={"/support"}>
                                <li className='flex gap-2 py-2 hover:bg-[#e3e3e3]'><Image src={heart} className="w-5" />Support us</li>
                            </Link>
                            <li>|</li>
                            <li className='flex gap-2 py-2 hover:bg-[#e3e3e3]'><Image src={earth} className="w-5" />EN<Image src={chevronDown} className="w-5" /></li>
                            <li className='flex gap-2 py-2 hover:bg-[#e3e3e3]' onClick={(() => setShowSearch(!showSearch))}><Image src={search} className="w-5" />Search</li>
                            <li className='flex gap-2 py-2 hover:bg-[#e3e3e3]'><Image src={menu} className="w-5" />Menu</li>
                        </ul>
                        <ul className='flex lg:hidden items-center font-normal text-[#2d2d2d] gap-4'>
                            <li className='flex gap-2 py-2 hover:bg-[#e3e3e3]' onClick={(() => setShowSearch(!showSearch))}><Image src={search} className="w-5" /></li>
                            <li>|</li>
                            <li className='flex gap-2 py-2 hover:bg-[#e3e3e3]'><Image src={menu} className="w-5" /></li>
                        </ul>
                        <div className='hidden lg:block'>
                            <Button style={"text-white"}>Log in</Button>
                        </div>
                    </div>
                </div>
            </div>
            {
                showSearch &&
                <div className='h-screen pt-[106px] xl:pt-28 flex flex-col'>
                    <div className='bg-[#ffcd00] py-10 xl:py-20 h-screen xl:h-fit'>
                        <div className='mx-auto container px-3 md:px-32'>
                            <div className='flex justify-between py-8'>
                                <h1 className='text-[1.3125rem] leading-[1.3125rem]'>Search</h1>
                                <Image src={xmark} className="w-10 hover:border hover:border-black hover:rounded-full cursor-pointer" onClick={(() => setShowSearch(!showSearch))} />
                            </div>
                            <div className='flex border border-black justify-between rounded-full h-12 pl-1 sm:pl-3'>
                                <input type="text" name="#" id="#" className='bg-[#ffcd00] outline-none rounded-full' />
                                <Image src={search} className="w-10 sm:w-16 border-l border-black px-2 sm:px-4" />
                            </div>
                        </div>
                    </div>
                    <div className='bg-black bg-opacity-80 hidden xl:block flex-1'></div>
                </div>
            }

            {/* {
                showMenu && (
                    <div className='h-screen bg-[#333333] bg-opacity-90 text-white top-0 duration-300 z-[9999] fixed inset-x-0 max-w-6xl mx-auto'>
                        <div className='flex items-center bg-[#333333] gap-x-8 justify-between sm:px-4 px-[5.625rem] py-10'>
                            <Link href={"/"}>
                                <div><Image src={LogoWhite} /></div>
                            </Link>
                            <div className='flex items-center gap-2'>
                                <span><Image src={SearchWhite} width={30} height={30} /></span>
                                <span onClick={() => setShowMenu(!showMenu)}><Image src={cross} width={40} height={30} /></span>
                            </div>
                        </div>
                        <div className='pt-10'>
                            <div className='flex flex-col gap-5 text-lg text-white sm:px-4 px-[5.625rem]'>
                                {
                                    ["All study programs", "Starting Out", "Study organisation", "Examination Organisation", "Digital Services"].map((item, i) => {
                                        return (
                                            <Link href={item} key={i} className="flex w-full justify-between border-b-2 border-dashed p-2 hover:bg-[#00bcff]">
                                                <span>{item}</span>
                                                <span><Image src={chevron} width={20} height={20} /></span>
                                            </Link>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                )
            } */}
        </>
    );
}

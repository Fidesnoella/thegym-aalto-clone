import { useState, useEffect } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
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
import plus from "../../public/assets/plus.svg"
import information from "../../public/assets/information.svg"
import services from "../../public/assets/services.svg"


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
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Remove scrolling
    useEffect(() => {
        document.body.style.overflow = showMenu ? "hidden" : "auto";
        return () => (document.body.style.overflow = "scroll");
    }, [showMenu]);

    useEffect(() => {
        document.body.style.overflow = showSearch ? "hidden" : "auto";
        return () => (document.body.style.overflow = "scroll");
    }, [showSearch]);

    // Remove background
    const dynamic = useRouter().asPath;
    useEffect(() => setShowMenu(false), [dynamic]);




    return (
        <>
            <div className='fixed w-full z-30'>
                <div className={`flex justify-between items-center border-black border-b bg-white text-black px-3 lg:pl-20 lg:pr-14 ${scrolled ? "py-1" : "py-6"}`}>
                    <Link href={"/"}><Image src={Logo} className={`${scrolled ? "w-12 lg:w-18 duration-300" : "w-20 lg:w-24"}`} /></Link>
                    <div className='flex gap-4 lg:gap-8 items-center cursor-pointer'>
                        <ul className='hidden font-normal text-[#2d2d2d] text-base leading-[19px] lg:flex items-center gap-4 lg:gap-8'>
                            <Link href={"/personnel"}>
                                <li className='flex gap-2 items-center py-2 hover:bg-[#e3e3e3]' ><Image src={lock} className="w-5" />For personnel</li>
                            </Link>
                            <Link href={"/support"}>
                                <li className='flex gap-2 items-center py-2 hover:bg-[#e3e3e3]'><Image src={heart} className="w-5" />Support us</li>
                            </Link>
                            <li>|</li>
                            <li className='flex gap-2 items-center py-2 hover:bg-[#e3e3e3]'><Image src={earth} className="w-5" />EN<Image src={chevronDown} className="w-5" /></li>
                            <li className='flex gap-2 items-center py-2 hover:bg-[#e3e3e3]' onClick={(() => setShowSearch(!showSearch))}><Image src={search} className="w-5" />Search</li>
                            <li className='flex gap-2 items-center py-2 hover:bg-[#e3e3e3]' onClick={(() => setShowMenu(!showMenu))}>{showMenu ? <div className='flex gap-2 items-center'><Image src={xmark} className="w-5" />Close menu</div> : <div className='flex gap-2'><Image src={menu} className="w-5" />Menu</div>}</li>
                        </ul>
                        <ul className='flex lg:hidden items-center font-normal text-[#2d2d2d] gap-4'>
                            <li className='flex gap-2 items-center py-2 hover:bg-[#e3e3e3]' onClick={(() => setShowSearch(!showSearch))}><Image src={search} className="w-5" /></li>
                            <li>|</li>
                            <li className='flex gap-2 items-center py-2 hover:bg-[#e3e3e3]' onClick={(() => setShowMenu(!showMenu))}>
                                {showMenu ? <span>Close menu</span> : <Image src={menu} className="w-5" />}</li>
                        </ul>
                        <div className='hidden lg:block'>
                            <Button style={"text-white"}>Log in</Button>
                        </div>
                    </div>
                </div>
            </div>
            {
                showSearch &&
                <div className='h-screen pt-[106px] xl:pt-28 flex flex-col scale'>
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
            {
                showMenu && <div className='flex pt-28 h-screen overflow-auto anime'>
                    <div className='w-1/6 bg-black opacity-80 hidden md:block'></div>
                    <div className='flex-1 px-3 md:px-14'>
                        <div className='hidden md:flex justify-between items-center pt-8 pb-10 border-b border-black'>
                            <div className='flex gap-2'>
                                {
                                    ["Services", "Site index", "Student guide", "Apply to Aalto"].map((item, index) => <div className='flex flex-col xl:items-center gap-2' key={index}><Image src={services} width={20} />{item}</div>)
                                }
                            </div>
                            <div className='flex gap-2'><Image src={information} width={20} /><span>Aalto community members please log in to see internal content</span></div>
                        </div>
                        <div className='flex flex-col text-lg text-black cursor-pointer'>
                            {
                                ["Admissions and applying", "News and events", "Research and art", "For students", "Schools and departments", "Tools", "About us", "Collaboration"].map((item, i) => {
                                    return (
                                        <div key={i} className="flex w-full justify-between border-b border-black py-6 hover:bg-[#e3e3e3] text-[#2d2d2d] font-bold text-[1.3125rem] md:text-[1.75rem] leading-[2.0625rem]">
                                            <span className='pl-4'>{item}</span>
                                            <span><Image src={plus} width={30} height={30} /></span>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            }
        </>
    );
}

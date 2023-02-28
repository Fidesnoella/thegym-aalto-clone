import Image from 'next/image';
import MainWrapper from '../wrappers/MainWrapper';
import CustomLink from '../ui/CustomLink';
import Button from '../ui/Button';
import Logo from "../../public/assets/aalto-logo.svg";
import facebook from "../../public/assets/facebook.svg"
import linkedin from "../../public/assets/linkedin.svg"
import twitter from "../../public/assets/twitter.svg"
import instagram from "../../public/assets/instagram.svg"
import youtube from "../../public/assets/youtube.svg"
import snap from "../../public/assets/snapchat.svg"
import blog from "../../public/assets/blog.svg"

export default function Footer() {
    return (
        <MainWrapper>
            <div className='grid sm:grid-cols-2 lg:grid-cols-4 py-4 gap-4'>
                <div className='flex flex-col gap-4'>
                    <Image src={Logo} className='w-20' />
                    <p className='flex flex-col text-[#2d2d2d] text-lg leading-[1.625rem] font-normal'>
                        {
                            ["Aalto University", "PO Box 11000 Otakaari 1B", "FI00076 AALTO", "Switchboard 358 9 47001"].map((item, i) => <span key={i}>{item}</span>)
                        }
                    </p>
                    <p className='text-[#2d2d2d] text-[1.3125rem] leading-[1.5625rem] font-normal py-2'>Follow us:
                    </p>
                    <div className='flex items-baseline gap-2'>
                        {
                            [facebook, linkedin, twitter, instagram, youtube, snap, blog].map((item, i) => <div key={i}><Image src={item} className="w-6 hover:bg-gray-200 rounded-full cursor-pointer" /></div>)
                        }
                    </div>
                </div>
                <div>
                    <h2 className='text-[1.3125rem] leading-[1.5625rem] text-[#2d2d2d] font-normal py-2'>Quicklinks</h2>
                    <div className='flex flex-col gap-2'>
                        {
                            ["Research and artistic outputs", "Library Learning Centre", "Admissions", "Alumni", "Media", "IT services", "Open University", "Aalto University Shop"].map((item, index) => <CustomLink key={index} style={"underline text-base leading-[1.1875rem]"}>{item}</CustomLink>)
                        }
                    </div>
                    <h2 className='text-[1.3125rem] leading-[1.5625rem] text-[#2d2d2d] font-normal py-4'>Latest</h2>
                    <div className='flex flex-col gap-2'>
                        {
                            ["News", "Events", "Careers"].map((item, index) => <CustomLink key={index} style={"underline text-base leading-[1.1875rem]"}>{item}</CustomLink>)
                        }
                    </div>
                </div>
                <div>
                    <h2 className='text-[1.3125rem] leading-[1.5625rem] text-[#2d2d2d] font-normal py-2'>Contact</h2>
                    <div className='flex flex-col gap-2'>
                        {
                            ["Campus maps", "Contact information"].map((item, index) => <CustomLink key={index} style={"underline text-base leading-[1.1875rem]"}>{item}</CustomLink>)
                        }
                    </div>
                    <h2 className='text-[1.3125rem] leading-[1.5625rem] text-[#2d2d2d] font-normal pb-2 pt-4'>For students</h2>
                    <div className='flex flex-col gap-2'>
                        {
                            ["Student Guide", "Webmail", "MyCourses", "MyStudies", "Sisu"].map((item, index) => <CustomLink key={index} style={"underline text-base leading-[1.1875rem]"}>{item}</CustomLink>)
                        }
                    </div>
                </div>
                <div className='border-t border-black py-4 sm:py-0 sm:border-none'>
                    <h1 className="font-normal text-[1.75rem] text-[#2d2d2d] leading-[2.0625rem]">Together towards a better world.</h1>
                    <p className="flex text-lg max-w-[57.125rem] leading-[1.5625rem] font-normal text-[#2d2d2d] py-4">
                        Support new ideas, research, work and leadership development towards a stronger Finland.
                    </p>
                    <Button style="text-center text-white max-w-xs md:max-w-none">Donate to Aalto University </Button>
                </div>
            </div>
            <div className='flex flex-col md:flex-row justify-between border-t border-black pb-6'>
                <div className='py-6 gap-3 flex flex-col md:flex-row'>
                    {
                        ["Privacy notice", "Cookie policy", "Feedback", "Accessibility statement", "Cookie settings"].map((item, index) => {
                            return (
                                <div className='flex flex-col gap-3'>
                                    <CustomLink key={index} style={"underline text-base leading-[1.1875rem]"}>{item}</CustomLink>
                                </div>
                            )
                        })
                    }
                </div>
                <div className='flex flex-col md:flex-row gap-3 py-6'>
                    <CustomLink style={"underline text-base leading-[1.1875rem]"}>Suomeksi</CustomLink>
                    <CustomLink style={"underline text-base leading-[1.1875rem]"}>Svenska</CustomLink>
                    <CustomLink style={"text-base leading-[1.1875rem]"}>English</CustomLink>
                </div>
            </div>
        </MainWrapper>
    );
}

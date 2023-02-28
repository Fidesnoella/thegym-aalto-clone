import React from 'react';
import CustomLink from '../ui/CustomLink';
import MainWrapper from '../wrappers/MainWrapper';

export default function ContactUs() {
    return (
        <main className='py-[4.5rem] border-b border-black'>
            <div className=' bg-[#ffcd00]'>
                <MainWrapper>
                    <div className='flex gap-4 flex-col justify-center items-center py-[6.6875rem]'>
                        <h1 className="text-[1.875rem] md:text-[4.6875rem] leading-[2.25rem] md:leading-[5.5rem] text-black font-bold">Follow Us</h1>
                        <div className='flex gap-4 flex-col md:flex-row text-[2.25rem] leading-[2.625rem] text-[#2d2d2d]'>
                            <div className='flex'><CustomLink style={"text-[2.25rem] leading-[2.625rem] underline"}>facebook</CustomLink> <span>,</span></div>
                            <div className='flex'><CustomLink style={"text-[2.25rem] leading-[2.625rem] underline"}>twitter</CustomLink>  <span>,</span></div>
                            <div className='flex gap-4'><CustomLink style={"text-[2.25rem] leading-[2.625rem] underline"}>instagram</CustomLink>
                                <span>&</span></div>
                            <div className='flex'><CustomLink style={"text-[2.25rem] leading-[2.625rem] underline"}>linkedin</CustomLink></div>
                        </div>
                    </div>
                </MainWrapper>
            </div>
        </main>
    );
}


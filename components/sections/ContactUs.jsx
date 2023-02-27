import React from 'react';
import CustomLink from '../ui/CustomLink';
import MainWrapper from '../wrappers/MainWrapper';

export default function ContactUs() {
    return (
        <main className='py-[4.5rem] border-b-2 border-black'>
            <div className=' bg-[#ffcd00]'>
                <MainWrapper>
                    <div className='flex flex-col justify-center items-center py-[6.6875rem]'>
                        <h1 className="p-10 text-[1.875rem] md:text-[4.6875rem] leading-[2.25rem] md:leading-[5.5rem] text-black font-bold">Follow Us</h1>
                        <div className='flex flex-col md:flex-row text-[2.25rem] leading-[42px] text-[#2d2d2d]'>
                            <CustomLink style={"text-[2.25rem] leading-[42px] underline"}>facebook</CustomLink>,&nbsp;
                            <CustomLink style={"text-[2.25rem] leading-[42px] underline"}>twitter</CustomLink>, &nbsp;
                            <CustomLink style={"text-[2.25rem] leading-[42px] underline"}>instagram</CustomLink>&nbsp; & &nbsp;
                            <CustomLink style={"text-[2.25rem] leading-[42px] underline"}>linkedin</CustomLink>
                        </div>
                    </div>
                </MainWrapper>
            </div>
        </main>
    );
}


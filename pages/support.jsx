import Image from "next/image";
import MainWrapper from "@/components/wrappers/MainWrapper";
import unt from "../public/assets/unt.jpeg"

export default function support() {
    return (
        <MainWrapper>
            <div className='flex flex-col gap-4 pt-40 pb-10 border-b border-black'>
                <h1 className="font-normal text-[1.75rem] text-[#2d2d2d] leading-[2.0625rem]">Give for the future </h1>
                <Image src={unt} className="w-full" />
            </div>
        </MainWrapper>
    );
}

import Image from "next/image";
import CustomLink from "../ui/CustomLink";
import chevronRight from "../../public/assets/chevron-right.svg"
import chevronLeft from "../../public/assets/chevron-left.svg"
import arrowRight from "../../public/assets/right-arrow-white.svg"


function Hero() {
    return (
        <div className='lg:relative flex flex-col-reverse pt-6'>
            <img className='lg:pb-10 mx-auto py-0 lg:py-16' src="https://www.aalto.fi/sites/g/files/flghsv161/files/styles/3_0_1800w_600h_d/public/2023-01/Terveysteknologia%20aivot.png?h=6f14bdd4&itok=Cd0vx02J" alt="" />
            <div className="px-0 lg:px-[5.4375rem] mx-auto container pt-16 lg:pt-0">
                <div className='bg-black py-7 px-3 lg:px-10 font-normal text-white lg:absolute bottom-0 lg:-bottom-8 xl:-bottom-4 -ml-0 lg:-ml-10'>
                    <div className="max-w-[37.5rem] flex flex-col gap-y-4">
                        <h1 className='text-4xl leading-[2.625rem]'>How tech is transforming diagnostics and care</h1>
                        <p className='text-[1.3125rem] leading-[1.5625rem] '>Read three inspiring stories of how Aaltonians are bringing new hope to people who suffer from</p>
                        <ul className='flex flex-col gap-3'>
                            {
                                ["Alzheimers disease", "ADHD", "Alcoholism"].map((item, index) => <div className="flex group"><Image src={arrowRight} width={20} className="group-hover:bg-[#e3e3e3]" />< CustomLink style={"underline text-white text-lg leading-[1.375rem pl-2 group-hover:text-black"} key={index}>{item}</CustomLink></div>)
                            }
                        </ul>
                        <div className='flex justify-between cursor-pointer'>
                            <Image src={chevronLeft} className="w-10 rounded-full border" />
                            <Image src={chevronRight} className="w-10 rounded-full border" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;
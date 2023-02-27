import Image from "next/image";
import chevronRight from "../../public/assets/chevron-right.svg"
import chevronLeft from "../../public/assets/chevron-left.svg"


function Hero() {
    return (
        <div className='md:relative flex flex-col-reverse'>
            <img className='md:pb-10 mx-auto' src="https://www.aalto.fi/sites/g/files/flghsv161/files/styles/3_0_1800w_600h_d/public/2023-01/Terveysteknologia%20aivot.png?h=6f14bdd4&itok=Cd0vx02J" alt="" />
            <div className="px-0 md:px-[5.4375rem] mx-auto container">
                <div className='bg-black py-7 px-3 md:px-10 font-normal text-white md:absolute bottom-0 -ml-0 md:-ml-10'>
                    <div className="max-w-[37.5rem] flex flex-col gap-y-4">
                        <h1 className='text-4xl leading-[2.625rem]'>How tech is transforming diagnostics and care</h1>
                        <p className='text-[1.3125rem] leading-[1.5625rem] '>Read three inspiring stories of how Aaltonians are bringing new hope to people who suffer from</p>
                        <ul className='flex flex-col'>
                            {[1, 2, 3].map(() => <li>Alcolism</li>)}
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
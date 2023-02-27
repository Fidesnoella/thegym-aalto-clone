import Image from "next/image";
import CustomLink from "../ui/CustomLink";
import MainWrapper from "../wrappers/MainWrapper";
import arrowRight from "../../public/assets/right-arrow.svg"
import Raskinen from "../../public/assets/Raskinen.jpeg"

export default function Campus() {
    return (
        <MainWrapper>
            <div className="pt-14 space-y-[4.5rem]">
                <div className="grid md:grid-cols-2">
                    <img src="https://www.aalto.fi/sites/g/files/flghsv161/files/styles/1_333_800w_600h_n/public/2018-04/unto_rautio_aalto_unt9424_weblarge_jpg.jpg?h=0d9f7c6e&itok=blqBmH_o" className="w-full" />
                    <div className="flex flex-col justify-center gap-y-4 pl-14">
                        <h1 className="font-normal text-[1.75rem] text-[#2d2d2d] leading-[2.0625rem]">Campus - lively and thriving</h1>
                        <p className="flex text-lg leading-[1.5625rem] font-normal text-[#2d2d2d]">
                            Aalto University's campus in Otaniemi is a renewable and living environment for research, art, learning, entrepreneurship and housing. The campus area inspires people to collaborate, try out new ideas and innovate together.
                        </p>
                        <p className="pt-2 flex flex-col gap-2">
                            {
                                [1, 2, 3].map(() => <div className="flex group"><Image src={arrowRight} width={20} className="group-hover:bg-[#e3e3e3]" />< CustomLink style={"underline text-lg leading-[1.375rem pl-2"} > Book a space</CustomLink></div>)
                            }
                        </p>
                    </div>
                </div>
                <div className="grid md:grid-cols-2">
                    <div className="flex flex-col justify-center gap-y-4 pl-14">
                        <h1 className="font-normal text-[1.75rem] text-[#2d2d2d] leading-[2.0625rem]">Virtual Campus Experience</h1>
                        <p className="flex text-lg leading-[1.5625rem] font-normal text-[#2d2d2d]">
                            Explore Aalto University’s campus from anywhere in the world! Our digital guides, an Aalto University student and an assistant professor, introduce you to our learning facilities, laboratories, workshops, service spots and outdoor spaces. The tour can be experienced on desktop, mobile or VR headset.
                        </p>
                        <p className="pt-2 flex flex-col gap-2">
                            <div className="flex group">
                                <Image src={arrowRight} width={20} className="group-hover:bg-[#e3e3e3]" />
                                < CustomLink style={"underline text-lg leading-[1.375rem] pl-2"} >Visit the tour</CustomLink>
                            </div>
                        </p>
                    </div>
                    <img src="https://www.aalto.fi/sites/g/files/flghsv161/files/styles/1_6_690w_431h_d/public/2021-02/aalto-website-3.jpg?h=e1c30e35&itok=JNNANuU2" className="w-full" />
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pb-[2.625rem]">
                    {
                        [1, 2, 3, 4, 5, 6, 7, 8].map(() => <div className="flex flex-col"><Image src={Raskinen} className="hover:opacity-80" /><p className="font-normal text-sm leading-[1.125rem] text-[#4a4a4a] cursor-pointer">Building Finland's first quantum computer. Photo: Aalto University / Mikko Raskinen.</p> </div>)
                    }
                </div>
            </div>
        </MainWrapper >
    );
}

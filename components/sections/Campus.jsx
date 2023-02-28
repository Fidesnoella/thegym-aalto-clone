import Image from "next/image";
import CustomLink from "../ui/CustomLink";
import MainWrapper from "../wrappers/MainWrapper";
import arrowRight from "../../public/assets/right-arrow.svg"
import Raskinen from "../../public/assets/Raskinen.jpeg"
import garden from "../../public/assets/garden.jpeg"
import university from "../../public/assets/university.jpeg"
import four from "../../public/assets/four.jpeg"
import avajaiset from "../../public/assets/avajaiset.jpeg"
import collection from "../../public/assets/collection.jpeg"
import factory from "../../public/assets/factory.jpeg"
import vision from "../../public/assets/Vision.jpeg"


export default function Campus() {
    const items = [
        {
            img: Raskinen,
            caption: "Building Finland's first quantum computer. Photo: Aalto University / Mikko Raskinen."
        },
        {
            img: garden,
            caption: "Creative sustainability. Photo: Aalto University / Mikko Raskinen."
        },
        {
            img: university,
            caption: "Architectural gems of Otaniemi. Photo: Aalto University / Tuomas Uusheimo."
        },
        {
            img: four,
            caption: "Trail to the Laajalahti Nature Reserve and one of South Finland's best birdwatching bay. Photo: Aalto University."
        },
        {
            img: avajaiset,
            caption: "Developing a connected campus. Photo: Aalto University / Jaakko Kahilaniemi."
        },
        {
            img: collection,
            caption: "Aalto University’s Art & Design ranked 6th in the world. QS – Art & Design 2022."
        },
        {
            img: factory,
            caption: "One of the most international universities in Europe. Photo: Aalto Design Factory / Bijan Mokhtari."
        },
        {
            img: vision,
            caption: "Educating future thought-leaders. Photo: Aalto Vision Forum / Lasse Lecklin."
        }
    ]
    return (
        <MainWrapper>
            <div className="pt-14 space-y-[4.5rem]">
                <div className="grid lg:grid-cols-2 gap-4">
                    <img src="https://www.aalto.fi/sites/g/files/flghsv161/files/styles/1_333_800w_600h_n/public/2018-04/unto_rautio_aalto_unt9424_weblarge_jpg.jpg?h=0d9f7c6e&itok=blqBmH_o" className="w-full" />
                    <div className="flex flex-col justify-center gap-y-4 px-3 md:pl-14">
                        <h1 className="font-normal text-[1.75rem] text-[#2d2d2d] leading-[2.0625rem]">Campus - lively and thriving</h1>
                        <p className="flex text-lg leading-[1.5625rem] font-normal text-[#2d2d2d]">
                            Aalto University's campus in Otaniemi is a renewable and living environment for research, art, learning, entrepreneurship and housing. The campus area inspires people to collaborate, try out new ideas and innovate together.
                        </p>
                        <p className="pt-2 flex flex-col gap-2">
                            {
                                ["Explore our vibrant innovation ecosystem", "Explore our campus", "Book a space"].map((item, index) => <div className="flex group"><Image src={arrowRight} width={20} className="group-hover:bg-[#e3e3e3]" />< CustomLink style={"underline text-lg leading-[1.375rem pl-2"} key={index}>{item}</CustomLink></div>)
                            }
                        </p>
                    </div>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                    <div className="flex flex-col justify-center gap-y-4 px-3 md:pl-14 order-2 md:order-none">
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
                    <img src="https://www.aalto.fi/sites/g/files/flghsv161/files/styles/1_6_690w_431h_d/public/2021-02/aalto-website-3.jpg?h=e1c30e35&itok=JNNANuU2" className="w-full order-1 md:order-none" />
                </div>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 pb-[2.625rem]">
                    {
                        items.map((item, index) => <div className="flex flex-col" key={index}><Image src={item.img} className="hover:opacity-80" /><p className="font-normal text-sm leading-[1.125rem] text-[#4a4a4a] cursor-pointer">{item.caption}</p> </div>)
                    }
                </div>
            </div>
        </MainWrapper >
    );
}

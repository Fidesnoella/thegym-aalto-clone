import Image from "next/image";
import CustomLink from "../ui/CustomLink";
import MainWrapper from "../wrappers/MainWrapper";
import thumbnail from "../../public/assets/thumbnail.jpeg"
import Raskinene from "../../public/assets/Raskinene.jpeg"
import guy from "../../public/assets/guy.jpeg"

export default function Community() {
    const items = [
        {
            img: Raskinene,
            text: "Watch our videos"
        },
        {
            img: thumbnail,
            text: "Read our blogs"
        },
        {
            img: guy,
            text: "Listen to podcasts"
        }
    ]
    return (
        <MainWrapper>
            <div className="py-[4.5rem]">
                <h1 className="font-normal text-[1.75rem] text-[#2d2d2d] leading-[2.0625rem] text-center pb-4">Community voices</h1>
                <div className="flex flex-col items-center md:items-stretch">
                    <div className="flex flex-col md:flex-row justify-between px-3 lg:px-24 cursor-pointer gap-4">
                        {
                            items.map((item, index) => {
                                return (
                                    <div className="group flex  items-center gap-2" key={index}>
                                        <span>
                                            <Image src={item.img} className="group-hover:opacity-80 w-20 rounded-full" />
                                        </span>
                                        <CustomLink style="text-lg md:text-[1.3125rem]">{item.text}</CustomLink>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </MainWrapper>
    );
}

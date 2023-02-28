import Image from "next/image";
import CustomLink from "../ui/CustomLink";
import MainWrapper from "../wrappers/MainWrapper";
import pen from "../../public/assets/pen.png"
import folder from "../../public/assets/folder.png"
import phone from "../../public/assets/phone.png"

export default function QuickLinks() {
    const items = [
        {
            img: pen,
            text: "For personnel"
        },
        {
            img: folder,
            text: "Aalto Handbook"
        },
        {
            img: phone,
            text: "Safety"
        }
    ]
    return (
        <MainWrapper>
            <div className="pt-[11.25rem] pb-2">
                <h1 className="font-normal text-[1.75rem] text-[#2d2d2d] leading-[2.0625rem] text-center pb-4">Import quicklinks</h1>
                <div className="flex flex-col items-center">
                    <div className="flex flex-col md:flex-row md:justify-between px-3 lg:px-24 cursor-pointer gap-4 justify-center">
                        {
                            items.map((item, i) => {
                                return (
                                    <div className="group flex items-center gap-2">
                                        <span>
                                            <Image src={item.img} key={i} className="group-hover:opacity-80 w-20 rounded-full" />
                                        </span>
                                        <CustomLink key={i} style="text-lg md:text-[1.3125rem]">{item.text}</CustomLink>
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

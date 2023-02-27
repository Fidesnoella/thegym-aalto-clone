import Image from "next/image";
import CustomLink from "../ui/CustomLink";
import MainWrapper from "../wrappers/MainWrapper";
import thumbnail from "../../public/assets/thumbnail.jpeg"

export default function Community() {
    return (
        <MainWrapper>
            <div className="py-[4.5rem]">
                <h1 className="font-normal text-[1.75rem] text-[#2d2d2d] leading-[2.0625rem] text-center pb-4">Community voices</h1>
                <div className="flex justify-between px-24 cursor-pointer">
                    {
                        [1, 2, 3].map(() => {
                            return (
                                <div className="group flex items-center gap-2">
                                    <span>
                                        <Image src={thumbnail} className="group-hover:opacity-80 w-20 rounded-full" />
                                    </span>
                                    <CustomLink>Read our blogs</CustomLink>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </MainWrapper>
    );
}

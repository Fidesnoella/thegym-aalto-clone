import Image from "next/image";
import CustomLink from "../ui/CustomLink";
import MainWrapper from "../wrappers/MainWrapper";
import pen from "../../public/assets/pen.png"

export default function QuickLinks() {
    return (
        <MainWrapper>
            <div className="pt-[11.25rem]">
                <h1 className="font-normal text-[1.75rem] text-[#2d2d2d] leading-[2.0625rem] text-center pb-4">Import quicklinks</h1>
                <div className="flex justify-between px-24 cursor-pointer">
                    {
                        [1, 2, 3].map(() => {
                            return (
                                <div className="group flex items-center gap-2">
                                    <span>
                                        <Image src={pen} className="group-hover:opacity-80 w-20 rounded-full" />
                                    </span>
                                    <CustomLink>For personnel</CustomLink>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </MainWrapper>
    );
}

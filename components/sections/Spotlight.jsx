import Image from "next/image";
import MainWrapper from "../wrappers/MainWrapper";
import Event from "../cards/Event";
import CustomLink from "../ui/CustomLink";
import pxl from "../../public/assets/PXL_1.jpeg"
import Button from "../ui/Button";

export default function Spotlight() {
    return (
        <MainWrapper>
            <div className="pt-10 flex justify-between">
                <h1 className="font-normal text-[1.75rem] text-[#2d2d2d] leading-[2.0625rem]">Spotlight</h1>

                <Button style={"bg-white border border-black text-[#2d2d2d] hover:border-none"}>See All Alto University news</Button>
            </div>
            <p className="flex py-4 gap-2 text-[1.3125rem] leading-[1.5625rem] font-normal text-[#2d2d2d]">Find more current news and interesting events on the<CustomLink style="underline">News and event page.</CustomLink></p>
            <div className="grid grid-cols-3 gap-4 pb-14">
                {[1, 2, 3].map(() => <Event img={pxl} link={<CustomLink>Shriking from the heat</CustomLink>} paragraph={"Reactive fabrics respond to changes in temperature"} date={"21.2.2023 | News"} />)}
            </div>
        </MainWrapper>
    );
}

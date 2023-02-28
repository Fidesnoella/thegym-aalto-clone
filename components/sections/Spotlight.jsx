import Image from "next/image";
import MainWrapper from "../wrappers/MainWrapper";
import Event from "../cards/Event";
import CustomLink from "../ui/CustomLink";
import Button from "../ui/Button";
import pxl from "../../public/assets/PXL_1.jpeg";
import pipot from "../../public/assets/pipot4_1.jpeg";
import slush from "../../public/assets/SLUSH.jpeg";


export default function Spotlight() {
    const items = [
        {
            img: pxl,
            link: "Shrinking from the heat",
            paragraph: "Reactive fabrics respond to changes in temperature",
            date: "21.2.2023 | News"
        },
        {
            img: pipot,
            link: "Knit an Aalto hat for yourself or a friend!",
            paragraph: "Follow Marja Niemi and Outi Elina Kansanen’s knitting pattern to make a lovely gift for someone special",
            date: "13.2.2023 | News"
        },
        {
            img: slush,
            link: "Aalto Startup Center makes global top three in 2021-2022 university business accelerator ranking",
            paragraph: "UBI Global World Benchmark Study ranks top",
            date: "25.1.2023 | News"
        },
    ]
    return (
        <MainWrapper>
            <div className="pt-14 flex flex-col md:flex-row justify-between">
                <h1 className="font-normal text-[1.75rem] text-[#2d2d2d] leading-[2.0625rem]">Spotlight</h1>

                <Button style={"hidden md:block bg-white border border-black text-[#2d2d2d] hover:border-none"}>See All Alto University news</Button>
            </div>
            <div className="flex flex-wrap py-4 gap-2 text-[1.3125rem] leading-[1.5625rem] font-normal text-[#2d2d2d]">Find more current news and interesting events on the<CustomLink style="underline">News and event page.</CustomLink></div>
            <div className="grid md:grid-cols-3 gap-4 pb-14">
                {items.map((item, index) => <Event key={index} img={item.img} link={<CustomLink>{item.link}</CustomLink>} paragraph={item.paragraph} date={item.date} />)}
            </div>
            <Button style={"block md:hidden max-w-[17.5rem] mb-10 bg-white border border-black text-[#2d2d2d] hover:border-none"}>See All Alto University news</Button>
        </MainWrapper>
    );
}

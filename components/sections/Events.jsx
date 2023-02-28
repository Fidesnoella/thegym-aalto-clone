import MainWrapper from '../wrappers/MainWrapper';
import Event from '../cards/Event';
import CustomLink from '../ui/CustomLink';
import Button from '../ui/Button';
import solve from "../../public/assets/solvethesdgs_7.png"
import energy from "../../public/assets/energy.jpeg"
import ss from "../../public/assets/SS.png"

export default function Events() {
    const items = [
        {
            img: solve,
            link: "Solve the SDGs 2023",
            paragraph: "A hackathon on two continents for one purpose: building a better tomorrow.",
            date: "31.3.-2.4.2023 | Events"
        },
        {
            img: energy,
            link: "Energy Futures: Critical minerals, climate neutrality and transition pathways",
            paragraph: "An exhibition on energy transitions and the challenges and solutions driving our response to",
            date: "16.3.2023 16:00-17:30 | Events"
        },
        {
            img: ss,
            link: "Sustainability Science Days 2023: PATHWAYS OF HOPE – Knowledge, Actions, Solutions",
            paragraph: "The Sustainability Science Days (SSD) is an",
            date: "23.-26.5.2023 | Events"
        },
    ]
    return (
        <main className='bg-[#f1f1f1] pt-14 pb-20'>
            <MainWrapper>
                <div className="flex flex-col md:flex-row justify-between">
                    <h1 className="font-normal text-[1.75rem] text-[#2d2d2d] leading-[2.0625rem]">Join our many events</h1>
                    <Button style={"hidden md:block bg-white border border-black text-[#2d2d2d] hover:border-none"}>See all events</Button>
                </div>
                <div className="flex flex-wrap py-4 gap-2 text-[1.3125rem] leading-[1.5625rem] font-normal text-[#2d2d2d]">Find more current news and interesting events on the<CustomLink style="underline">News and event page.</CustomLink></div>
                <div className="grid md:grid-cols-3 gap-4">
                    {items.map((item, index) => <Event key={index} style={"border-none bg-white"} img={item.img} link={<CustomLink>{item.link}</CustomLink>} paragraph={item.paragraph} date={item.date} />)}
                </div>
                <Button style={"md:hidden block max-w-[11.25rem] mt-6 bg-white border border-black text-[#2d2d2d] hover:border-none"}>See all events</Button>
            </MainWrapper>
        </main>
    );
}

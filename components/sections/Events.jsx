import MainWrapper from '../wrappers/MainWrapper';
import Event from '../cards/Event';
import CustomLink from '../ui/CustomLink';
import Button from '../ui/Button';
import solve from "../../public/assets/solvethesdgs_7.png"

export default function Events() {
    return (
        <main className='bg-[#f1f1f1] pt-14 pb-20'>
            <MainWrapper>
                <div className="flex flex-col md:flex-row justify-between">
                    <h1 className="font-normal text-[1.75rem] text-[#2d2d2d] leading-[2.0625rem]">Join our many events</h1>
                    <Button style={"bg-white border border-black text-[#2d2d2d] hover:border-none"}>See all events</Button>
                </div>
                <div className="flex py-4 gap-2 text-[1.3125rem] leading-[1.5625rem] font-normal text-[#2d2d2d]">Find more current news and interesting events on the<CustomLink style="underline">News and event page.</CustomLink></div>
                <div className="grid md:grid-cols-3 gap-4">
                    {[1, 2, 3].map(() => <Event style={"border-none bg-white"} img={solve} link={<CustomLink>Solve the SDGs 2023</CustomLink>} paragraph={"A hackathon on two continents for one purpose: building a better tomorrow"} date={"21.2.2023 | Events"} />)}
                </div>
            </MainWrapper>
        </main>
    );
}

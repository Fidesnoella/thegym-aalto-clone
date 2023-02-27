import MainWrapper from "../wrappers/MainWrapper";
import CustomLink from "../ui/CustomLink";
import Event from "../cards/Event";
import dsc from "../../public/assets/_DSC.jpeg";

export default function Courses() {
    return (
        <main className='bg-[#f1f1f1] pt-14 pb-20'>
            <MainWrapper>
                <h1 className="font-normal text-[1.75rem] text-[#2d2d2d] leading-[2.0625rem] pb-10">Studies and courses open to all</h1>
                <div className="grid md:grid-cols-3 gap-4">
                    {[1, 2, 3].map(() => <Event style={"border-none bg-white"} img={dsc} link={<CustomLink>Lifewide Learning</CustomLink>} paragraph={"Select a solution that suits you, ranging from individual courses to programmes that are open for all."} />)}
                </div>
            </MainWrapper>
        </main>
    );
}

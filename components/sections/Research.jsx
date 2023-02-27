import MainWrapper from "../wrappers/MainWrapper";
import Event from "../cards/Event";
import CustomLink from "../ui/CustomLink";
import sensualMathematics from "../../public/assets/sensual-mathematics.jpeg"
import science from "../../public/assets/science.jpeg"

export default function Research() {
    return (
        <main className='bg-[#f1f1f1] pt-14 pb-20'>
            <MainWrapper>
                <h1 className="font-normal text-[1.75rem] text-[#2d2d2d] leading-[2.0625rem]">Read about our research and donate</h1>
                <p className="flex text-lg max-w-[57.125rem] leading-[1.5625rem] font-normal text-[#2d2d2d] py-4">At Aalto University, we create the conditions for innovation, economic growth, employment and wellbeing. A gift to the university is an investment in a better future.</p>
                <div className="grid grid-cols-2 gap-4">
                    <Event style={"border-none bg-white"} img={sensualMathematics} link={<CustomLink>Research & Art</CustomLink>} paragraph={"Our research focuses on seven key areas combining four core competences in the fields of ICT, materials, arts, design and"} />
                    <Event style={"border-none bg-white"} img={science} link={<CustomLink>Give for the future</CustomLink>} paragraph={"Join us in building a sustainable future! Together we can solve some of the toughest problems of our time."} />
                </div>
            </MainWrapper>
        </main>
    );
}


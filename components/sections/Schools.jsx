import MainWrapper from "../wrappers/MainWrapper";
import School from "../cards/School";
import CustomLink from "../ui/CustomLink";
import aaltoDisco from "../../public/assets/unto_rautio_aalto_dsc.jpeg"
import juvonen from "../../public/assets/juvonen.jpeg"
import people from "../../public/assets/people.jpeg"
import chemical from "../../public/assets/chemical.jpeg"
import microwave from "../../public/assets/microwave.jpeg"
import ray from "../../public/assets/ray.jpeg"

export default function Schools() {
    const items = [
        {
            img: aaltoDisco,
            link: "School of Arts, Design and Architecture",
            text: "The School of Arts, Design and..."
        },
        {
            img: juvonen,
            link: "School of Engineering",
            text: "Research, education and new solutions in t..."
        },
        {
            img: people,
            link: "School of Business",
            text: "At the School of Business we strive for bette..."
        },
        {
            img: chemical,
            link: "School of Chemical Engineering",
            text: "At the School of Chemical Engineering, we..."
        },
        {
            img: microwave,
            link: "School of Electrical Engineering",
            text: "At the School of Electrical Engineering, we..."
        },
        {
            img: ray,
            link: "School of Science",
            text: "Science for tomorrow’s technology, innovati..."
        },
    ]
    return (
        <MainWrapper>
            <div className="flex flex-col gap-2 pt-[4.5rem]">
                <h1 className="font-normal text-[1.75rem] text-[#2d2d2d] leading-[2.0625rem]">Explore our six schools</h1>
                <p className="flex py-4 gap-2 text-lg leading-[1.5625rem] font-normal text-[#2d2d2d]">Scientific research and artistic activities are carried out at six schools and their departments and units.</p>
            </div>
            <div className="gap-4 grid md:grid-cols-2 overflow-hidden">
                {
                    items.map((item, index) => <School key={index} img={item.img} link={<CustomLink style={"text-lg sm:text-[1.3125rem]"}>{item.link}</CustomLink>} paragraph={item.text} />)
                }
            </div>
        </MainWrapper>
    );
}


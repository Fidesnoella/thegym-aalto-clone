import MainWrapper from "../wrappers/MainWrapper";
import CustomLink from "../ui/CustomLink";
import Event from "../cards/Event";
import dsc from "../../public/assets/_DSC.jpeg";
import weblarge from "../../public/assets/weblarge.jpeg";
import musta from "../../public/assets/musta.png"

export default function Courses() {
    const items = [
        {
            img: dsc,
            link: "Lifewide Learning",
            paragraph: "Select a solution that suits you, ranging from individual courses to programmes that are open for all."
        },
        {
            img: weblarge,
            link: "Aalto University Open University",
            paragraph: "Open University courses are open to everyone regardless of"
        },
        {
            img: musta,
            link: "Aalto University Junior",
            paragraph: "Aalto University Junior is art, science, technology and entrepreneurship for children,"
        },
    ]
    return (
        <main className='bg-[#f1f1f1] pt-14 pb-20'>
            <MainWrapper>
                <h1 className="font-normal text-[1.75rem] text-[#2d2d2d] leading-[2.0625rem] pb-10">Studies and courses open to all</h1>
                <div className="grid md:grid-cols-3 gap-4">
                    {items.map((item, index) => <Event key={index} style={"border-none bg-white"} img={item.img} link={<CustomLink>{item.link}</CustomLink>} paragraph={item.paragraph} />)}
                </div>
            </MainWrapper>
        </main>
    );
}

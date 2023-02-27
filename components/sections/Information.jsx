import MainWrapper from "../wrappers/MainWrapper";
import School from "../cards/School";
import CustomLink from "../ui/CustomLink";
import flag from "../../public/assets/flag.png"
import aaltoyliopisto from "../../public/assets/aaltoyliopisto.jpeg"

export default function Information() {
    return (
        <MainWrapper>
            <div className="py-[4.5rem]">
                <h1 className="font-normal text-[1.75rem] text-[#2d2d2d] leading-[2.0625rem] pb-10">Information on Ukraine and coronavirus</h1>
                <div className="gap-4 grid md:grid-cols-2">
                    <School img={flag} link={<CustomLink>Ukraine war</CustomLink>} paragraph={"On this page, we will gather information..."} />
                    <School img={aaltoyliopisto} link={<CustomLink>Information on coronavirus</CustomLink>} paragraph={"Information on the effects of coronavirus and COVID-19 on activ..."} />
                </div>
            </div>
        </MainWrapper>
    );
}

import MainWrapper from "../wrappers/MainWrapper";
import School from "../cards/School";
import CustomLink from "../ui/CustomLink";
import aaltoDisco from "../../public/assets/unto_rautio_aalto_dsc.jpeg"

export default function Schools() {
    return (
        <MainWrapper>
            <div className="flex flex-col gap-2 pt-[4.5rem]">
                <h1 className="font-normal text-[1.75rem] text-[#2d2d2d] leading-[2.0625rem]">Explore our six schools</h1>
                <p className="flex py-4 gap-2 text-lg leading-[1.5625rem] font-normal text-[#2d2d2d]">Scientific research and artistic activities are carried out at six schools and their departments and units.</p>
            </div>
            <div className="gap-4 grid grid-cols-2">
                {
                    [1, 2, 3, 4, 5, 6].map(() => <School img={aaltoDisco} link={<CustomLink>School of Arts, Design and Architecture</CustomLink>} paragraph={"The School of Arts, Design and..."} />)
                }
            </div>
        </MainWrapper>
    );
}


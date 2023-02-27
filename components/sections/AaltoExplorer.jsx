import rautio from "../../public/assets/unto_rautio.webp"
import CustomLink from "../ui/CustomLink";
import MainWrapper from "../wrappers/MainWrapper";

export default function AaltoExplorer() {
    return (
        <>
            <div className="mt-[4.5rem] bg-[url('https://www.aalto.fi/sites/g/files/flghsv161/files/styles/s2560wc_1800w_400h_n/public/2020-01/unto_rautio_aalto_dsc5557_web.jpg?itok=vZ292N9N')] py-9">
                <MainWrapper>
                    <div className="bg-[#ffcd00] relative top-36">
                        <h1 className="p-10 text-[4.6875rem] leading-[5.5rem] text-black font-bold">Explore Aalto University</h1>
                        <div className="border-t border-black flex justify-between w-full items-center text-center">
                            <div className="py-10 flex justify-center w-full">
                                <CustomLink style={"underline text-[1.75rem] leading-[2.0625rem]"}>Study at Aalto</CustomLink>
                            </div>
                            <div className="border-l border-r border-black flex justify-center w-full py-10">
                                <CustomLink style={"underline text-[1.75rem] leading-[2.0625rem]"}>Open positions</CustomLink>
                            </div>
                            <div className="py-10 flex justify-center w-full">
                                <CustomLink style={"underline text-[1.75rem] leading-[2.0625rem] text-center"}>Contact us</CustomLink>
                            </div>
                        </div>
                    </div>
                </MainWrapper >
            </div >
        </>
    );
}


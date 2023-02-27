import Image from "next/image";

export default function Event({ img, link, paragraph, date, style }) {
    return (
        <div className={`border border-black group cursor-pointer ${style}`}>
            <Image src={img} className="w-full container bg-cover group-hover:opacity-90" />
            <div className="flex flex-col gap-4 p-4">
                <button>{link}</button>
                <p className="text-[1.3125rem] text-[#2d2d2d] leading-[1.5625rem] font-normal">{paragraph}</p>
                <p className="text-sm font-normal text-[#2d2d2d]">{date}</p>
            </div>
        </div>
    );
}

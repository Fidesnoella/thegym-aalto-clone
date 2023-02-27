import Link from "next/link";

export default function CustomLink({ children, style }) {
    return (
        <Link href="#" className={`text-[#2d2d2d] hover:bg-[#e3e3e3] group-hover:bg-[#e3e3e3] text-[1.3125rem] leading-[1.5625rem] font-normal w-fit cursor-pointer flex items-start ${style}`}>
            {children}
        </Link>
    );
}

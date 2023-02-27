
export default function CustomLink({ children, style }) {
    return (
        <div className={`text-[#2d2d2d] hover:bg-[#e3e3e3] group-hover:bg-[#e3e3e3] text-[1.3125rem] leading-[1.5625rem] font-normal w-fit cursor-pointer ${style}`}>
            {children}
        </div>
    );
}

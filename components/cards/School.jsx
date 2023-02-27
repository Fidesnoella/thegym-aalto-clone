import Image from "next/image";

export default function School({ style, link, paragraph, img }) {
    return (
        <div className={`border border-black group w-full cursor-pointer flex justify-between ${style}`}>
            <div className="flex flex-col gap-4 p-4 self-end">
                <button>{link}</button>
                <p>{paragraph}</p>
            </div>
            <Image src={img} className="group-hover:opacity-90" />
        </div>
    );
}


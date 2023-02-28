import MainWrapper from '@/components/wrappers/MainWrapper';
import Button from '@/components/ui/Button';

export default function personnel() {
    return (
        <MainWrapper>
            <div className='flex flex-col gap-4 pt-40 pb-10 border-b border-black'>
                <h1 className="font-normal text-[1.75rem] text-[#2d2d2d] leading-[2.0625rem]">Please log in. </h1>
                <div className="flex  py-4 gap-2 text-base leading-[1rem] font-normal text-[#2d2d2d]">The requested page can not be viewed without logging in.e</div>
                <Button style={"text-white max-w-[6.875rem]"}>Log in</Button>
            </div>
        </MainWrapper>
    );
}

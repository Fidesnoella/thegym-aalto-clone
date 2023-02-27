import React from 'react';

export default function Button({ style, children }) {
    return (
        <div className={`bg-black hover:bg-[#ffcd00] text-base rounded-[29px] hover:text-black py-[10px] px-[31px] ${style}`}>
            {children}
        </div>
    );
}

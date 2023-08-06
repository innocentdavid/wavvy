import Link from 'next/link';
import React from 'react'
import SignUpButton from './SignUpButton';

export default function Hero() {
  return (
    <div className="max-w-[960px] mx-auto my-24 px-4">
      <div className="mb-8">
        <h1 className="max-w-[400px] text-[34px] leading-[1] md:text-[48px] md:leading-[1.25] font-extrabold mb-5">
          Kickstart your collaborative&nbsp;app
        </h1>
        <p className="max-w-[460px] text-lg md:text-xl text-[#A1A1A1]">
          Use the Liveblocks Starter Kit to build your document-based
          collaborative app in&nbsp;minutes.
        </p>
      </div>

      <div className="flex items-center gap-4">
        <SignUpButton />
        
        <Link href="#"
          className="text-[14px] text-[#D4D4D4] font-medium"
        //   target="_blank"
        >
          <span className="">Learn more</span>
        </Link>
      </div>
    </div>
  );
}

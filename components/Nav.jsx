import Link from 'next/link'
import React from 'react'
import SignUpButton from './SignUpButton'

export default function Nav() {
    return (
        <div className="border-b border-[#333338]">
            <div className="max-w-[960px] mx-auto h-[60px] flex items-center justify-between px-4">
                <Link href="/" className="flex items-center gap-2"><svg width={24} height={24} className="Logo_mark__XUkez" fill="none" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path clipRule="evenodd" d="M21.657 8H2l5.657 5.6v7.733L21.657 8ZM10.343 24H30l-5.657-5.6v-7.733L10.343 24Z" fill="currentColor" fillRule="evenodd" /></svg><span className="text-[18px] whitespace-nowrap font-bold">Starter Kit</span></Link>

                <SignUpButton />
            </div>
        </div>
    )
}

"use client"
import React from 'react'
import { signIn, signOut, useSession } from "next-auth/react";
import Image from 'next/image';
const UserInfo = () => {
    const { status, data: session } = useSession();
    if (status === "authenticated") {

        return <div>
            <Image
            src = {session?.user?.image}
            width={60}
            height={60}
            />
            <div>Name: <span>{session?.user?.name}</span></div>
            <div>email: <span>{session?.user?.email}</span></div>
        </div>
    } else {
        return (
            <button onClick={() => signIn('google')} className="bg-[#F6FBFF] rounded-lg bg-ghostwhite border-stroke border-[1px] border-solid flex flex-row items-center justify-center py-4 px-[47px] gap-[23px] whitespace-nowrap mq450:pl-[23px] mq450:pr-[23px] mq450:box-border">
                <img
                    className="h-[31px] w-[31px] relative object-cover"
                    loading="lazy"
                    alt=""
                    src="/image-2@2x.png"
                />
                <div className="relative tracking-[0.01em] leading-[100%] font-medium ">
                    Connexion avec Google @estin.dz
                </div>
            </button>
        )
    }
}

export default UserInfo
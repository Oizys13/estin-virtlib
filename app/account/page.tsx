"use client"
import SideBar from '@/components/side-bar'
import TopMain1 from '@/components/top-main1'
import Account from '@/pages/Account'
import React from 'react'

const page = () => {
    return (
        <main className="h-full w-full">
            <div className="flex flex-col gap-2">
                <div className="h-[994px] w-[1544px] relative bg-white leading-[normal] tracking-[normal] text-left text-mini text-dimgray-600 font-inter ">
                    <img
                        className="fixed object-cover  top-0 left-[-37.3px] w-full h-full"
                        alt=""
                        src="/bg-vector1.svg"
                    />
                    <div className="absolute self-stretch top-[48px] left-[341px] bg-[#F3F3F7] rounded-3xs bg-whitesmoke-200 w-[1544px] overflow-y-auto flex flex-col items-start justify-start pb-[216px] box-border gap-5 max-w-full z-[1]">
                        <div className="self-stretch h-full relative rounded-tl-none rounded-tr-3xs rounded-br-3xs rounded-bl-none bg-whitesmoke-200 shrink-0 hidden" />
                        <TopMain1
                            polygonIconTop="0"
                            polygonIconPosition="sticky"
                            polygonIconAlignSelf="stretch"
                            polygonIconLeft="unset"
                            polygonIconFlex="unset"
                            searchLabelOverflow="hidden"
                            username={name!}
                        />
                        <Account/>
                    </div>
                    <SideBar
                        propPosition="absolute"
                        propTop="48px"
                        propLeft="35px"
                        propWidth="306px"
                        propHeight="800px"
                        propAlignSelf="unset"
                        propFlex="unset"
                        group3="/group-3@2x.png"
                        propTextDecoration="unset"
                        search="/search-1.svg"
                        propColor="#8a8a8a"
                        giveGift="/give-gift2.svg"
                        propColor1="#4d4d4d"
                    />
                </div>
            </div>
        </main >
    )
}

export default page
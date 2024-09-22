"use client"
import SideBar from "@/components/side-bar";
import TopMain1 from "@/components/top-main1";
import HomePage from "@/pages/home-page";
import { useEffect, useState } from "react";

export default function Main() {
    const [screenSize, setScreenSize] = useState('');

    const checkScreenSize = () => {
        const width = window.innerWidth;
        if (width > 1200) {
            setScreenSize('large');
        } else if (width > 800) {
            setScreenSize('medium');
        } else {
            setScreenSize('small');
        }
    };

    useEffect(() => {
        window.addEventListener('resize', checkScreenSize);
        checkScreenSize(); // On component mount

        return () => window.removeEventListener('resize', checkScreenSize);
    }, []);

    return (
        <main className="h-full w-full overflow-y-auto scrollbar-hidden">
            {screenSize === 'large' && (


                <div className="flex flex-col gap-2 overflow-y-auto scrollbar-hidden">
                    <div className="h-[900px] w-[1544px] relative bg-white leading-[normal] tracking-[normal] text-left text-mini text-dimgray-600 font-inter ">
                        <img
                            className="fixed object-cover  top-0 left-[-37.3px] w-full h-full"
                            alt=""
                            src="/bg-vector1.svg"
                        />
                        <div className="absolute h-[900px] overflow-y-auto scrollbar-hidden self-stretch top-[48px] left-[341px] bg-[#F3F3F7] rounded-3xs  w-[1544px]  flex flex-col items-start justify-start pb-0 box-border gap-5 max-w-full z-[1]">
                            <div className="h-full self-stretch  relative rounded-tl-none rounded-tr-3xs rounded-br-3xs rounded-bl-none shrink-0 hidden" />
                            <TopMain1
                                polygonIconTop="0"
                                polygonIconPosition="sticky"
                                polygonIconAlignSelf="stretch"
                                polygonIconLeft="unset"
                                polygonIconFlex="unset"
                                searchLabelOverflow="hidden"
                                username={name!}
                            />
                            <HomePage />
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
            )}

            {screenSize === 'small' && (

                <HomePage/>




            )}
        </main >
    )
}
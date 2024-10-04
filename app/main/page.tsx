"use client"
import SideBar from "@/components/side-bar";
import TopMain1 from "@/components/top-main1";
import HomePage from "@/pages/home-page";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import TopBar from "@/components/TopBar";

export default function Main() {
    const { data: session, status } = useSession();
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

    if (status === "loading") {
        return <div>Loading...</div>;
    }

    if (status === "unauthenticated") {
        const router = useRouter();
        router.push('/');
        return null;
    }

    return (
        <main className="h-full w-full overflow-y-auto scrollbar-hidden top">
            {screenSize === 'large' && (
                <div className="flex flex-col gap-2 overflow-y-auto scrollbar-hidden">
                    <div className="h-[900px] w-full relative leading-[normal] tracking-[normal] text-left text-mini text-dimgray-600 font-inter ">
                        
                        <div className="absolute h-[900px] overflow-y-auto scrollbar-hidden self-stretch left-[306px] bg-[#FAFAFA] rounded-3xs  flex flex-col items-start justify-start pb-0 box-border gap-5 max-w-full z-[1]">
                            <div className="h-full self-stretch  relative rounded-tl-none rounded-tr-3xs rounded-br-3xs rounded-bl-none shrink-0 hidden" />
                            <TopBar/>
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
"use client"
import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/navigation";
import TopMain1 from "@/components/top-main1";
import RecommendationItems from "@/components/recommendation-items";
import SideBar from "@/components/side-bar";

const Contribute: NextPage = () => {
    const router = useRouter();

    const onSearchMenuContainerClick = useCallback(() => {
        router.push("/search");
    }, [router]);

    const onGroupButtonClick = useCallback(() => {
        router.push("/contribute-complete");
    }, [router]);

    return (
        <div className="w-full h-[1080px] relative bg-white leading-[normal] tracking-[normal] text-left text-xl text-black font-inter mq1300:h-auto mq1300:min-h-[1080]">
            <img
                className="fixed object-cover top-0 left-[-37.3px] w-full h-full"
                alt=""
                src="/bg-vector1.svg"
            />
            <div className="absolute top-[48px] bg-[#F3F3F7] left-[341px] rounded-3xs bg-whitesmoke-200 w-[1544px] overflow-y-auto flex flex-col items-start justify-start pt-0 px-0 pb-[216px] box-border gap-[98px] max-w-full z-[1]">
                <div className="self-stretch h-[994px] relative rounded-tl-none rounded-tr-3xs rounded-br-3xs rounded-bl-none bg-whitesmoke-200 shrink-0 hidden" />
                <TopMain1
                    polygonIconTop="0"
                    polygonIconPosition="sticky"
                    polygonIconAlignSelf="stretch"
                    polygonIconLeft="unset"
                    polygonIconFlex="unset"
                    searchLabelOverflow="hidden"
                />
                <div className="w-[1452px] flex flex-row items-start justify-start py-0 px-[68px] box-border max-w-full">
                    <div className="flex-1 flex flex-row items-start justify-start gap-14 max-w-full mq1300:flex-wrap">
                        <div className="flex-1 flex flex-col items-start justify-start pt-1.5 px-0 pb-0 box-border min-w-[441px] max-w-full mq800:min-w-full">
                            <div className="self-stretch rounded-[10px] bg-white flex flex-col items-start justify-start pt-7 pb-[47px] pl-[61px] pr-[51px] box-border gap-[41px] max-w-full z-[2]">
                                <div className="w-[678px] h-[562px] relative rounded-3xs bg-white hidden max-w-full" />
                                <div className="w-[338px] flex flex-row items-start justify-start py-0 px-0.5 box-border max-w-full">
                                    <div className="flex-1 relative leading-[26px] inline-block max-w-full z-[1] mq450:text-base mq450:leading-[21px]">
                                        Fill up Book Details
                                    </div>
                                </div>
                                <div className="self-stretch flex flex-col items-start justify-start gap-[18px] max-w-full text-center text-base text-dimgray-600">
                                    <div className="self-stretch flex flex-row items-start justify-start gap-[37px] max-w-full mq800:flex-wrap">
                                        <div className="flex-1 rounded-[5px] bg-white border-lightgray-100 border-[1px] border-solid box-border flex flex-row items-start justify-start pt-[18px] px-5 pb-1.5 min-w-[233px] max-w-full z-[1]">
                                            <div className="h-[59px] w-[359px] relative rounded-3xs bg-white border-lightgray-100 border-[1px] border-solid box-border hidden" />
                                            <input
                                                className="w-[255px] [border:none] [outline:none] font-medium font-inter text-base bg-[transparent] h-[31px] relative text-darkgray-600 text-left inline-block p-0 z-[1]"
                                                placeholder="Book name"
                                                type="text"
                                            />
                                        </div>
                                        
                                    </div>
                                    <div className="self-stretch flex flex-row items-center justify-center gap-[37px] max-w-full text-left text-darkgray-600 mq800:flex-wrap">
                                        <div className="flex-1 flex flex-col items-center justify-center gap-[46px] min-w-[233px] max-w-full">
                                            <div className="self-stretch flex flex-col items-center justify-center gap-[18px] max-w-full">
                                                <div className="self-stretch rounded-[5px] bg-white border-lightgray-100 border-[1px] border-solid box-border flex flex-row items-start justify-start pt-[18px] px-5 pb-1.5 whitespace-nowrap max-w-full z-[1]">
                                                    <div className="h-[59px] w-[359px] relative rounded-3xs bg-white border-lightgray-100 border-[1px] border-solid box-border hidden max-w-full" />
                                                    <input
                                                        className="w-[255px] [border:none] [outline:none] font-medium font-inter text-base bg-[transparent] h-[31px] relative text-darkgray-600 text-left inline-block p-0 z-[1]"
                                                        placeholder="Author Name"
                                                        type="text"
                                                    />

                                                </div>
                                                <textarea
                                                    className="border-lightgray-100 border-[1px] border-solid bg-white h-[159px] w-auto [outline:none] self-stretch rounded-3xs box-border flex flex-row items-start justify-start p-5 font-inter font-medium text-base text-darkgray-600 z-[1]"
                                                    placeholder="Reason For Your Contribution"
                                                    rows={8}
                                                    cols={18}
                                                />
                                            </div>
                                            <div className="-w-[320px] h-[61px] flex flex-col items-center justify-center box-border">
                                                <button
                                                    className="flex- flex-row items-center justify-center cursor-pointer w-[320px] h-[61px] [border:none bg-[#F4683C] text-white text-18pt font-medium rounded-[5px] pt-1.5 px-2.5 pb-[7px] bg-tomato-200 flex-1 rounded-8xs flex flex-row items-start justify-start whitespace-nowrap z-[1] hover:bg-tomato-600"
                                                    onClick={onGroupButtonClick}
                                                >
                                                Submit
                                                </button>
                                            </div>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-[582px] flex flex-col items-center justify-center pt-[180px] gap-[76px] min-w-[582px] max-w-full text-31xl text-dimgray-600 mq800:min-w-full mq1300:flex-1">
                            <div className="m-0 py-0 self-stretch relative text-inherit leading-[128.52%] font-bold font-[inherit] z-[1] mq800:text-21xl mq800:leading-[51px] mq450:text-11xl mq450:leading-[39px]">
                                <span className="text-48pt text-[#4D4D4D] pr-4">{`Your `}</span>
                                <span className="text-[#F4683C] text-48pt">{`Contribution `}</span>
                            </div>
                            <div className="pl-2 m-0 py-0 self-stretch relative text-inherit leading-[128.52%] font-bold font-[inherit] z-[1] mq800:text-21xl mq800:leading-[51px] mq450:text-11xl mq450:leading-[39px]">
                                <span className="text-48pt text-[#4D4D4D] whitespace-nowrap">Helps Other to Learn</span>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
            <SideBar
                propPosition="absolute"
                propTop="48px"
                propLeft="35px"
                propWidth="306px"
                propHeight="994px"
                propAlignSelf="unset"
                propFlex="unset"
                group3="/group-3@2x.png"
                propTextDecoration="unset"
                onSearchMenuContainerClick={onSearchMenuContainerClick}
                search="/search-1.svg"
                propColor="#8a8a8a"
                giveGift="/give-gift2.svg"
                propColor1="#4d4d4d"
            />
        </div>
    );
};

export default Contribute;

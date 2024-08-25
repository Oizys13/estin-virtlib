"use client"
import type { NextPage } from "next";
import TopMain1 from "../components/top-main1";
import SideBar from "../components/side-bar";
import { useSearchParams } from 'next/navigation';

const HomeProfile: NextPage = () => {
  const searchParams = useSearchParams();

  const email = searchParams?.get('email');
  const name = searchParams?.get('username');
  return (
    <div className="w-full h-[1080px] relative bg-white leading-[normal] tracking-[normal] text-left text-mini text-dimgray-600 font-inter mq1300:h-auto mq1300:min-h-[1080]">
      <img
        className="absolute top-[-66.3px] left-[-37.3px] w-[1994.3px] h-[1143.5px]"
        alt=""
        src="/bg-vector1.svg"
      />
      <div className="absolute top-[48px] left-[341px] bg-[#F3F3F7] rounded-3xs bg-whitesmoke-200 w-[1544px] overflow-y-auto flex flex-col items-start justify-start pt-0 px-0 pb-[216px] box-border gap-5 max-w-full z-[1]">
        <div className="self-stretch h-[994px] relative rounded-tl-none rounded-tr-3xs rounded-br-3xs rounded-bl-none bg-whitesmoke-200 shrink-0 hidden" />
        <TopMain1
          polygonIconTop="0"
          polygonIconPosition="sticky"
          polygonIconAlignSelf="stretch"
          polygonIconLeft="unset"
          polygonIconFlex="unset"
          searchLabelOverflow="hidden"
          username={name}
        />
        <div className="w-[1428px] h-full bg-[#F3F3F7] flex flex-row items-start justify-start py-0 px-11 box-border max-w-full">
          <div className="flex-1 flex flex-col items-start justify-start gap-[58px] max-w-full">
            <div
              className="w-[180px] flex flex-row items-start justify-start gap-[9px] cursor-pointer z-[1]"
              
            >
              <img
                className="h-5 w-5 relative overflow-hidden shrink-0 min-h-[20px]"
                loading="lazy"
                alt=""
                src="/heroiconsoutlinearrowsmallleft1.svg"
              />
              <div className="flex-1 relative leading-[128.52%]">{`Back `}</div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start py-0 pl-6 pr-0 box-border max-w-full text-center text-xl text-black">
              <div className="flex-1 flex flex-row items-start justify-start gap-14 max-w-full mq1300:flex-wrap">
                <div className="flex-1 flex flex-col items-start justify-start pt-1.5 px-0 pb-0 box-border min-w-[441px] max-w-full mq800:min-w-full">
                  <div className="self-stretch rounded-3xs bg-white flex flex-col items-center justify-start pt-[105px] px-5 pb-[140px] box-border gap-[55px] max-w-full z-[2]">
                    <div className="w-[678px] h-[562px] relative rounded-3xs bg-white hidden max-w-full" />
                    <div className="w-[334px] flex flex-row items-start justify-start pt-0 px-0 pb-2 box-border max-w-full">
                      <div className="flex-1 relative leading-[26px] inline-block max-w-full z-[1] mq450:text-base mq450:leading-[21px]">{`Thank you For your Submission `}</div>
                    </div>
                    <div className="w-[334px] flex flex-row items-start justify-center max-w-full">
                      <img
                        className="h-[140px] w-[140px] relative z-[1]"
                        alt=""
                        src="/vector-11.svg"
                      />
                    </div>
                    <div className="w-[334px] h-[33px] relative leading-[128.52%] inline-block shrink-0 max-w-full z-[1] mq450:text-base mq450:leading-[21px]">
                      You will be contacted shortly {email}
                    </div>
                  </div>
                </div>
                <div className="w-[582px] flex flex-col items-start justify-start gap-[76px] min-w-[582px] max-w-full text-left text-31xl text-dimgray-600 mq800:min-w-full mq1300:flex-1">
                  <h1 className="m-0 self-stretch relative text-inherit leading-[128.52%] font-bold font-[inherit] z-[1] mq800:text-21xl mq800:leading-[51px] mq450:text-11xl mq450:leading-[39px]">
                    <span>{`Your `}</span>
                    <span className="text-tomato-200">{`Contribution `}</span>
                    <span>Helps Other to Learn</span>
                  </h1>
                  <div className="flex flex-row items-start justify-start py-0 px-[5px] box-border max-w-full text-6xl">
                    <div className="flex flex-col items-start justify-start gap-[29px] max-w-full">
                      <div className="w-[426px] relative leading-[33px] inline-block max-w-full z-[1] mq450:text-xl mq450:leading-[26px]">
                        Your Previous Contributions
                      </div>
                      <div className="h-[260px] overflow-x-auto shrink-0 flex flex-row items-start justify-start gap-[39px] z-[1] text-3xs">
                        <div className="w-40 rounded-3xs bg-white overflow-hidden shrink-0 flex flex-col items-end justify-start pt-4 px-[15px] pb-[13px] box-border gap-3">
                          <div className="self-stretch flex flex-row items-start justify-end py-0 pl-[5px] pr-0.5">
                            <img
                              className="h-[170px] flex-1 relative rounded-8xs max-w-full overflow-hidden object-cover"
                              loading="lazy"
                              alt=""
                              src="/rectangle-12@2x.png"
                            />
                          </div>
                          <div className="self-stretch flex flex-col items-start justify-start gap-[5px]">
                            <div className="self-stretch relative text-xs leading-[128.52%]">
                              Don’t Make Me think
                            </div>
                            <div className="w-[101px] relative leading-[14px] inline-block">
                              Steve Krug, 2000
                            </div>
                            <div className="w-[101px] relative leading-[128.52%] inline-block">
                              14k Readers
                            </div>
                          </div>
                        </div>
                        
                      </div>
                    </div>
                  </div>
                </div>
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
        search="/search-1.svg"
        propColor="#8a8a8a"
        giveGift="/give-gift2.svg"
        propColor1="#4d4d4d"
      />
    </div>
  );
};

export default HomeProfile;

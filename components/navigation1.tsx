import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";

export type Navigation1Type = {
  className?: string;
};

const Navigation1: NextPage<Navigation1Type> = ({ className = "" }) => {
  const router = useRouter();

  const onGroupButtonClick = useCallback(() => {
    router.push("/read-now");
  }, [router]);

  const onGroupClick = useCallback(() => {
    router.push("/listen");
  }, [router]);

  return (
    <div
      className={`self-stretch flex flex-row items-start justify-start py-0 pl-11 pr-[45px] box-border max-w-full text-left text-mini text-dimgray-600 font-inter ${className}`}
    >
      <div className="flex-1 flex flex-row flex-wrap items-start justify-start gap-[72px] max-w-full">
        <div className="h-[445px] w-[273px] flex flex-col items-start justify-start gap-5">
          <div className="w-[180px] flex flex-row items-start justify-start gap-[9px]">
            <img
              className="h-5 w-5 relative overflow-hidden shrink-0 min-h-[20px] z-[1]"
              loading="lazy"
              alt=""
              src="/heroiconsoutlinearrowsmallleft1.svg"
            />
            <h3 className="m-0 flex-1 relative text-inherit leading-[128.52%] font-normal font-[inherit] z-[1]">
              Back to results
            </h3>
          </div>
          <div className="self-stretch flex-1 rounded-3xs bg-white overflow-hidden flex flex-col items-start justify-start pt-6 px-8 pb-[25px] gap-[27px] z-[1] text-2xs text-darkslategray font-liberation-sans">
            <img
              className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover"
              loading="lazy"
              alt=""
              src="/rectangle-19@2x.png"
            />
            <div className="self-stretch flex flex-row items-start justify-start py-0 pl-4 pr-[17px]">
              <div className="flex-1 flex flex-row items-start justify-start gap-[17.8px]">
                <div className="flex-1 rounded flex flex-col items-start justify-start pt-0.5 px-1.5 pb-1.5">
                  <div className="flex flex-row items-start justify-start py-0 pl-[3px] pr-1">
                    <img
                      className="h-8 w-8 relative"
                      loading="lazy"
                      alt=""
                      src="/reviewssvg.svg"
                    />
                  </div>
                  <b className="relative leading-[12px] inline-block min-w-[38px]">
                    Review
                  </b>
                </div>
                <div className="flex-1 rounded flex flex-col items-start justify-start pt-0.5 px-1.5 pb-1.5">
                  <img
                    className="w-8 h-8 relative"
                    loading="lazy"
                    alt=""
                    src="/notessvg.svg"
                  />
                  <b className="relative leading-[12px] inline-block min-w-[31px]">
                    Notes
                  </b>
                </div>
                <div className="flex-1 rounded flex flex-col items-start justify-start pt-0.5 px-1.5 pb-1.5">
                  <img
                    className="w-8 h-8 relative object-cover"
                    loading="lazy"
                    alt=""
                    src="/sharesvg@2x.png"
                  />
                  <b className="relative leading-[12px] inline-block min-w-[31px]">
                    Share
                  </b>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 flex flex-col items-start justify-start pt-10 px-0 pb-0 box-border min-w-[721px] max-w-full mq1125:min-w-full">
          <div className="self-stretch flex flex-col items-end justify-start gap-[29px] max-w-full">
            <div className="self-stretch flex flex-row items-start justify-start gap-[158px] max-w-full mq1125:flex-wrap">
              <div className="flex-1 flex flex-col items-start justify-start gap-[29.5px] min-w-[327px] max-w-full">
                <div className="w-[429px] flex flex-col items-start justify-start gap-1.5 max-w-full">
                  <h1 className="m-0 self-stretch relative text-16xl leading-[45px] font-normal font-[inherit] z-[1] mq450:text-2xl mq450:leading-[27px] mq800:text-9xl mq800:leading-[36px]">{`Don’t Make Me Think `}</h1>
                  <div className="w-72 h-[30px] relative inline-block shrink-0 z-[1]">
                    {`By `}
                    <span className="[text-decoration:underline]">
                      Steve Krug
                    </span>
                    , 2000
                  </div>
                  <h3 className="m-0 w-[183px] h-3.5 relative text-inherit leading-[19px] font-normal font-[inherit] text-darkgray-400 inline-block shrink-0 z-[1]">
                    Second Edition
                  </h3>
                </div>
                <div className="self-stretch flex flex-row items-start justify-start gap-[19px] z-[1] text-sm text-darkslategray mq800:flex-wrap">
                  <div className="flex-1 flex flex-row items-center justify-start gap-[11px] min-w-[112px] text-dimgray-600">
                    <div className="h-3 flex-1 flex flex-row items-start justify-start pt-0 px-0 pb-0 box-border gap-[3px]">
                      <img
                        className="h-[13.2px] w-3.5 relative object-cover"
                        loading="lazy"
                        alt=""
                        src="/star@2x.png"
                      />
                      <img
                        className="h-[13.2px] w-3.5 relative object-cover"
                        alt=""
                        src="/star@2x.png"
                      />
                      <img
                        className="h-[13.2px] w-3.5 relative object-cover"
                        alt=""
                        src="/star@2x.png"
                      />
                      <img
                        className="h-[13.2px] w-3.5 relative object-cover"
                        alt=""
                        src="/star@2x.png"
                      />
                      <img
                        className="h-[13.2px] w-3.5 relative object-cover"
                        alt=""
                        src="/star@2x.png"
                      />
                    </div>
                    <div className="relative font-medium inline-block min-w-[80px]">
                      5.0 Ratings
                    </div>
                  </div>
                  <div className="relative font-medium">
                    25 Currently reading
                  </div>
                  <div className="w-[146px] relative font-medium inline-block shrink-0">
                    119 Have read
                  </div>
                </div>
                <div className="w-[456px] flex flex-row items-end justify-start max-w-full [row-gap:20px] mq450:flex-wrap">
                  <div className="flex-1 flex flex-col items-start justify-start gap-[43px] min-w-[183px]">
                    <div className="self-stretch flex flex-row items-start justify-start gap-[17px]">
                      <div className="flex-1 flex flex-col items-start justify-start gap-[9px]">
                        <b className="self-stretch relative text-sm z-[1]">
                          Availability
                        </b>
                        <div className="flex flex-row items-start justify-start py-0 pl-[23px] pr-[25px]">
                          <h3 className="m-0 relative text-inherit font-normal font-[inherit] inline-block min-w-[84px] z-[1]">
                            Hard Copy
                          </h3>
                        </div>
                        <div className="self-stretch flex flex-row items-start justify-start py-0 pl-[22px] pr-[26px]">
                          <h3 className="m-0 flex-1 relative text-inherit leading-[150%] font-normal font-[inherit] z-[1]">
                            E - Book
                          </h3>
                        </div>
                        <div className="flex flex-row items-start justify-start py-0 pl-[21px] pr-[27px]">
                          <h3 className="m-0 relative text-inherit leading-[150%] font-normal font-[inherit] inline-block min-w-[84px] z-[1]">
                            Audio book
                          </h3>
                        </div>
                      </div>
                      <div className="flex-1 flex flex-col items-start justify-start gap-[14.8px]">
                        <b className="self-stretch relative text-sm z-[1]">
                          Status
                        </b>
                        <div className="w-[85px] shadow-[0px_0px_4px_rgba(0,_0,_0,_0.25)] rounded-8xs bg-forestgreen-100 flex flex-row items-start justify-start pt-[5px] px-0 pb-1 box-border z-[1] text-center text-white">
                          <div className="h-[26px] w-[85px] relative rounded-8xs bg-forestgreen-100 hidden" />
                          <h3 className="m-0 flex-1 relative text-inherit font-normal font-[inherit] z-[1]">
                            In-Shelf
                          </h3>
                        </div>
                        <div className="w-[98px] flex flex-row items-start justify-start gap-px">
                          <img
                            className="h-5 w-5 relative overflow-hidden shrink-0 object-cover z-[1]"
                            loading="lazy"
                            alt=""
                            src="/heroiconsminimappin@2x.png"
                          />
                          <div className="flex-1 relative leading-[24px] z-[1]">
                            {" "}
                            CS A-15
                          </div>
                        </div>
                      </div>
                    </div>
                    <button className="cursor-pointer [border:none] pt-1.5 px-2.5 pb-[7px] bg-coral-100 w-[209px] rounded-8xs flex flex-row items-start justify-start box-border z-[1] hover:bg-coral-200">
                      <div className="h-[61px] w-[209px] relative rounded-8xs bg-coral-100 hidden" />
                      <div className="h-12 flex-1 relative text-xl leading-[12px] font-semibold font-inter text-white text-center flex items-center justify-center z-[1] mq450:text-base mq450:leading-[10px]">
                        Download
                      </div>
                    </button>
                  </div>
                  <div className="w-[209px] flex flex-col items-end justify-start gap-[65px] min-w-[209px] ml-[-34px] text-white mq450:flex-1 mq450:ml-0">
                    <div className="w-[135px] flex flex-row items-start justify-end py-0 px-1 box-border">
                      <div className="flex-1 rounded-8xs bg-dimgray-600 flex flex-row items-start justify-start py-2.5 pl-4 pr-2 z-[1] mq450:flex-1">
                        <div className="h-10 w-[127px] relative rounded-8xs bg-dimgray-600 hidden z-[1]" />
                        <div className="flex-1 relative leading-[20px] z-[1]">
                          Add to List
                        </div>
                        <div className="flex flex-col items-start justify-start pt-[7px] px-0 pb-0 ml-[-9px]">
                          <img
                            className="w-[17px] h-[9px] relative rounded-12xs object-contain z-[1]"
                            alt=""
                            src="/polygon-1-31.svg"
                          />
                        </div>
                      </div>
                    </div>
                    <button
                      className="cursor-pointer [border:none] py-0 pl-2.5 pr-px bg-forestgreen-200 self-stretch rounded-8xs flex flex-row items-start justify-start gap-[9px] z-[1]"
                      onClick={onGroupButtonClick}
                    >
                      <div className="self-stretch w-[209px] relative rounded-8xs bg-forestgreen-200 hidden" />
                      <div className="flex-1 flex flex-col items-start justify-start pt-1.5 px-0 pb-0">
                        <b className="self-stretch h-12 relative text-xl leading-[12px] flex font-inter text-white text-center items-center justify-center shrink-0 z-[1] mq450:text-base mq450:leading-[10px]">
                          Read Now
                        </b>
                      </div>
                      <img
                        className="h-[61px] w-[66px] relative cursor-pointer z-[1]"
                        alt=""
                        src="/group-32.svg"
                        onClick={onGroupClick}
                      />
                    </button>
                  </div>
                </div>
              </div>
              <div className="w-[445px] rounded-3xs bg-white overflow-hidden shrink-0 flex flex-col items-start justify-start pt-[31px] pb-[29px] pl-[30px] pr-[29px] box-border gap-[22px] min-w-[445px] max-w-full z-[1] text-xl text-coral-100 mq800:min-w-full mq1125:flex-1">
                <div className="self-stretch flex flex-col items-start justify-start gap-[7px]">
                  <div className="w-72 h-[116px] flex flex-row items-start justify-between gap-5">
                    <div className="w-[138px] flex flex-col items-start justify-start gap-[25px]">
                      <h2 className="m-0 relative text-inherit leading-[26px] font-semibold font-[inherit] mq450:text-base mq450:leading-[21px]">
                        <span>About</span>
                        <span className="text-dimgray-600"> Author</span>
                      </h2>
                      <h2 className="m-0 self-stretch relative text-inherit leading-[26px] font-normal font-[inherit] text-dimgray-600 mq450:text-base mq450:leading-[21px]">
                        Steve Krug
                      </h2>
                    </div>
                    <div className="self-stretch w-[88px] flex flex-col items-start justify-start pt-[15px] px-0 pb-0 box-border">
                      <img
                        className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover"
                        alt=""
                        src="/rectangle-19-1@2x.png"
                      />
                    </div>
                  </div>
                  <div className="self-stretch relative text-smi leading-[128.52%] text-dimgray-600">
                    Steve Krug is a usability consultant who has more than 30
                    years of experience as a user advocate for companies like
                    Apple, Netscape, AOL, Lexus, and others. Based in part on
                    the success of his first book, Don't Make Me Think, he has
                    become a highly sought-after speaker on usability design.
                  </div>
                </div>
                <div className="w-[169px] h-32 flex flex-col items-start justify-start text-mini text-dimgray-600">
                  <h3 className="m-0 w-[138px] h-[29px] relative text-inherit leading-[128.52%] font-bold font-[inherit] inline-block shrink-0">
                    Other Books
                  </h3>
                  <div className="self-stretch flex-1 flex flex-row items-start justify-start gap-[19px]">
                    <div className="self-stretch flex-1 rounded-8xs flex flex-row items-center justify-start bg-[url('/rectangle-16@2x.png')] bg-cover bg-no-repeat bg-[top]">
                      <img
                        className="h-[99px] w-[75px] relative rounded-8xs object-cover hidden"
                        alt=""
                        src="/rectangle-16@2x.png"
                      />
                    </div>
                    <div className="self-stretch flex-1 rounded-8xs flex flex-row items-center justify-start bg-[url('/rectangle-161@2x.png')] bg-cover bg-no-repeat bg-[top]">
                      <img
                        className="h-[99px] w-[75px] relative rounded-8xs object-cover hidden"
                        alt=""
                        src="/rectangle-161@2x.png"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-1 max-w-full text-smi text-dimgray-400">
              <div className="self-stretch bg-white border-gainsboro-200 border-b-[1px] border-solid overflow-x-auto flex flex-row items-start justify-start pt-1.5 px-0 pb-[0.5px] gap-[92.2px] z-[1]">
                <button className="cursor-pointer [border:none] pt-1 pb-[7px] pl-[15px] pr-3.5 bg-[transparent] border-coral-100 border-b-[2px] border-solid flex flex-row items-start justify-start hover:bg-coral-300">
                  <div className="relative text-smi leading-[20px] font-semibold font-inter text-coral-100 text-left inline-block min-w-[60px]">
                    Overview
                  </div>
                </button>
                <div className="w-[140.8px] shrink-0 flex flex-col items-start justify-start pt-[3px] pb-0 pl-0 pr-5 box-border">
                  <div className="relative leading-[20px] font-medium inline-block min-w-[111px]">
                    View 166 Editions
                  </div>
                </div>
                <div className="w-[72.8px] shrink-0 flex flex-col items-start justify-start pt-[3px] pb-0 pl-0 pr-5 box-border">
                  <div className="relative leading-[20px] font-medium inline-block min-w-[43px]">
                    Details
                  </div>
                </div>
                <div className="w-[109.8px] shrink-0 flex flex-col items-start justify-start pt-[3px] pb-0 pl-0 pr-5 box-border">
                  <div className="relative leading-[20px] font-medium inline-block min-w-[80px]">
                    4.1k Reviews
                  </div>
                </div>
                <div className="w-[59.8px] shrink-0 flex flex-col items-start justify-start pt-[3px] pb-0 pl-0 pr-5 box-border">
                  <div className="relative leading-[20px] font-medium inline-block min-w-[30px]">
                    Lists
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
                  <div className="relative leading-[20px] font-medium inline-block min-w-[89px]">
                    Related Books
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-3 box-border max-w-full text-center text-2xs-5">
                <div className="flex-1 overflow-hidden flex flex-row items-start justify-center py-2.5 px-0 box-border gap-[50px] max-w-full z-[1] mq1125:flex-wrap">
                  <div className="flex-1 rounded-8xs bg-white border-gainsboro-200 border-[1px] border-solid box-border flex flex-col items-center justify-start py-2 px-5 gap-[3px] min-w-[180px] max-w-[240px]">
                    <div className="relative font-semibold inline-block min-w-[64px]">
                      Publish Date
                    </div>
                    <div className="flex flex-row items-start justify-start py-0 px-[15px] text-smi-8 text-darkslategray">
                      <div className="relative font-semibold inline-block min-w-[34px]">
                        2000
                      </div>
                    </div>
                  </div>
                  <div className="flex-[0.4747] rounded-8xs bg-white border-gainsboro-200 border-[1px] border-solid box-border flex flex-col items-start justify-start pt-2 px-[72px] pb-[9px] gap-1.5 min-w-[180px] max-w-[240px] mq450:flex-1">
                    <div className="flex flex-row items-start justify-start py-0 pl-[22px] pr-6">
                      <div className="relative font-semibold inline-block min-w-[48px]">
                        Publisher
                      </div>
                    </div>
                    <div className="relative text-2xs-8 font-semibold text-coral-100 inline-block min-w-[92px]">
                      New Riders Press
                    </div>
                  </div>
                  <div className="flex-1 rounded-8xs bg-white border-gainsboro-200 border-[1px] border-solid box-border flex flex-col items-center justify-start py-2 px-5 gap-[5px] min-w-[180px] max-w-[240px]">
                    <div className="relative font-semibold inline-block min-w-[51px]">
                      Language
                    </div>
                    <div className="flex flex-row items-start justify-start py-0 pl-1.5 pr-[7px] text-2xs-8 text-coral-100">
                      <div className="relative font-semibold inline-block min-w-[39px]">
                        English
                      </div>
                    </div>
                  </div>
                  <div className="flex-1 rounded-8xs bg-white border-gainsboro-200 border-[1px] border-solid box-border flex flex-col items-center justify-start py-2 px-5 gap-1 min-w-[180px] max-w-[240px]">
                    <div className="relative font-semibold inline-block min-w-[32px]">
                      Pages
                    </div>
                    <div className="w-[34px] flex flex-row items-start justify-start py-0 pl-1 pr-1.5 box-border text-smi-8 text-darkslategray">
                      <div className="w-[23px] relative font-semibold flex items-center justify-center min-w-[23px]">
                        216
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative text-xs leading-[19.5px] font-semibold z-[1]">
                <span>{`Previews available in: `}</span>
                <span className="[text-decoration:underline] text-coral-100">
                  English
                </span>
              </div>
              <div className="self-stretch relative leading-[19.5px] z-[1] text-darkslategray">
                <span className="whitespace-pre-wrap">{`Since Don’t Make Me Think was first published in 2000, hundreds of thousands of Web designers and developers have relied on usability guru Steve Krug’s guide to help them understand the principles of intuitive navigation and information design. Witty, commonsensical, and eminently practical, it’s one of the best-loved and most...  `}</span>
                <span className="text-coral-100">Read more</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation1;

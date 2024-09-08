import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/navigation";

export type BookPreviewCardType = {
  className?: string;
};

const BookPreviewCard: NextPage<BookPreviewCardType> = ({ className = "" }) => {
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
          <div className="w-[180px] flex flex-row items-center justify-center gap-[9px]">
            <img
              className="h-5 w-5 relative overflow-hidden shrink-0 min-h-[20px] z-[1]"
              loading="lazy"
              alt=""
              src="/heroiconsoutlinearrowsmallleft1.svg"
            />
            <span className="m-0 flex-1 text-[#4D4D4D] text-14pt whitespace-nowrap relative text-inherit leading-[128.52%] font-normal font-[inherit] z-[1]">
              Back to results
            </span>
          </div>
          <div className="self-stretch flex-1 rounded-[10px] bg-white overflow-hidden flex flex-col items-start justify-start pt-6 px-8 pb-[25px] gap-[27px] z-[1] text-2xs text-darkslategray font-liberation-sans">
            <img
              className="self-stretch flex-1 relative rounded-[5px] max-w-full overflow-hidden max-h-full object-cover"
              loading="lazy"
              alt=""
              src="/rectangle-19@2x.png"
            />
          </div>
        </div>
        <div className="flex-1 flex flex-col items-start justify-start pt-10 px-0 pb-0 box-border min-w-[721px] max-w-full mq1125:min-w-full">
          <div className="self-stretch flex flex-col items-end justify-start gap-[29px] max-w-full">
            <div className="self-stretch flex flex-row items-start justify-start gap-[158px] max-w-full mq1125:flex-wrap">
              <div className="flex-1 flex flex-col items-start justify-start gap-[29.5px] min-w-[327px] max-w-full">
                <div className="w-[429px] flex flex-col items-start justify-start gap-1.5 max-w-full">
                  <h1 className="m-0 text-30pt whitespace-nowrap self-stretch relative text-16xl leading-[45px] font-normal font-[inherit] z-[1] mq450:text-2xl mq450:leading-[27px] mq800:text-9xl mq800:leading-[36px]">{`Don’t Make Me Think `}</h1>
                  <div className="w-72 h-[30px] text-12pt  relative inline-block shrink-0 z-[1]">
                    {`By `}
                    <span className="[text-decoration:underline] text-12pt">
                      Steve Krug
                    </span>
                    , 2000
                  </div>
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
                        <b className="self-stretch relative text-12pt whitespace-nowrap text-sm z-[1]">
                          Availability
                        </b>
                        <div className="flex flex-row items-start justify-start py-0 pl-[23px] pr-[25px]">
                          <h3 className="m-0 relative text-inherit text-12pt whitespace-nowrap font-normal font-[inherit] inline-block min-w-[84px] z-[1]">
                            Hard Copy
                          </h3>
                        </div>
                        <div className="self-stretch flex flex-row items-start justify-start py-0 pl-[22px] pr-[26px]">
                          <h3 className="m-0 flex-1 relative text-12pt whitespace-nowrap text-inherit leading-[150%] font-normal font-[inherit] z-[1]">
                            E - Book
                          </h3>
                        </div>
                        <div className="flex flex-row items-start justify-start py-0 pl-[21px] pr-[27px]">
                          <h3 className="m-0 relative text-12pt whitespace-nowrap text-inherit leading-[150%] font-normal font-[inherit] inline-block min-w-[84px] z-[1]">
                            Audio book
                          </h3>
                        </div>
                      </div>
                      
                    </div>
                    <button className="cursor-pointer [border:none] pt-1.5 px-2.5 pb-[7px] bg-coral-100 w-[209px] rounded-[10px] flex flex-row items-start justify-start box-border z-[1] hover:bg-coral-200">
                      <div className="h-[61px] w-[209px] bg-[#F27851] relative rounded-[10px] bg-coral-100 hidden" />
                      <span className="h-[61px] flex-1 relative text-xl leading-[12px] bg-[#F27851] rounded-[5px] font-semibold font-inter text-white text-center flex items-center justify-center z-[1] mq450:text-base mq450:leading-[10px]">
                        Download
                      </span>
                    </button>
                  </div>
                  <div className="w-[209px] flex flex-col items-end justify-start gap-[65px] min-w-[209px] ml-[-34px] text-white mq450:flex-1 mq450:ml-0">
                    
                    <button
                      className="cursor-pointer [border:none] py-0 pl-2.5 pr-px bg-forestgreen-200 self-stretch rounded-8xs flex flex-row items-start justify-start gap-[9px] z-[1]"
                      onClick={onGroupButtonClick}
                    >
                      <div className="self-stretch w-[209px] relative   hidden" />
                      <div className="flex-1 flex flex-col items-start justify-start pt-1.5 px-0 pb-0">
                        <b className="self-stretch h-[61px] relative text-xl leading-[12px] bg-[#41B64D] rounded-[5px] flex font-inter text-white text-center items-center justify-center shrink-0 z-[1] mq450:text-base mq450:leading-[10px]">
                          Read Now
                        </b>
                      </div>
    
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
            <div className="w-[1285px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full mt-[-166px]">
          <div className="w-[507px] rounded-8xs bg-white border-gainsboro-200 border-[1px] border-solid box-border flex flex-col items-start justify-start pt-0 px-10 pb-[37px] gap-[212.8px] shrink-0 max-w-full z-[1]">
            <div className="w-[1002px] h-[166px] flex flex-row items-start justify-between pt-0 px-0 pb-0 box-border max-w-[236%] shrink-0 gap-5 mq450:h-auto">
              <div className="h-[166px] w-[255px] flex flex-col items-start justify-start pt-[29px] px-0 pb-0 box-border mq450:h-auto">
                <div className="self-stretch flex flex-col items-start justify-start gap-7">
                  <h1 className="m-0 relative text-inherit font-semibold font-[inherit] mq450:text-lg">
                    Book Details
                  </h1>
                  <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[14.8px] gap-[13px] text-sm">
                    <div className="relative font-semibold inline-block min-w-[83px]">
                      Published in
                    </div>
                    <div className="flex flex-row items-start justify-start pt-0 px-0 pb-[5px] text-xs">
                      <div className="relative leading-[20px] font-semibold inline-block min-w-[79px]">
                        United States
                      </div>
                    </div>
                    <div className="self-stretch flex flex-col items-start justify-start gap-2.5">
                      <div className="w-[91px] h-[17px] relative font-semibold flex items-center">
                        Edition Notes
                      </div>
                      <div className="self-stretch flex flex-row items-start justify-between gap-5 text-2xs mq450:flex-wrap">
                        <div className="w-[34px] flex flex-col items-start justify-start gap-[11px]">
                          <div className="self-stretch relative font-semibold">
                            Series
                          </div>
                          <div className="w-[33px] relative font-semibold inline-block">
                            Genre
                          </div>
                        </div>
                        <div className="w-[135px] flex flex-col items-start justify-start gap-[11px]">
                          <div className="self-stretch relative font-semibold">
                            Dover large print classics
                          </div>
                          <div className="w-9 relative text-3xs font-semibold inline-block">
                            Fiction.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-[213px] h-[77px] flex flex-col items-start justify-start gap-[9px] text-smi-8 text-dimgray-400">
                    <div className="w-[92px] h-[15px] relative font-semibold flex items-center">
                      Classifications
                    </div>
                    <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-[9px] text-xs">
                      <div className="w-[159px] flex-1 flex flex-row items-start justify-between gap-5">
                        <div className="self-stretch w-[83.6px] relative font-semibold flex items-center shrink-0">
                          Dewey Decimal Class
                        </div>
                        <div className="w-[39px] flex flex-col items-start justify-start pt-px px-0 pb-0 box-border text-darkslategray">
                          <div className="self-stretch relative font-semibold shrink-0">
                            823/.8
                          </div>
                        </div>
                      </div>
                      <div className="self-stretch flex flex-row items-start justify-start gap-3.5 text-2xs">
                        <div className="h-3.5 flex-1 relative font-semibold flex items-center">
                          Library of Congress
                        </div>
                        <div className="w-[93px] relative font-semibold text-darkslategray flex items-center">
                          PR5485 .A1 2002
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="rounded-8xs bg-white border-gainsboro-200 border-[1px] border-solid box-border flex flex-col items-start justify-start pt-[18px] px-[34px] pb-7 gap-5 max-w-[calc(100%_-_275px)] shrink-0 text-xs-2 text-dimgray-400">
                <div className="w-[430px] flex flex-col items-start justify-start gap-[6.7px] max-w-full">
                  <div className="self-stretch flex flex-row items-start justify-between gap-5 text-3xl text-dimgray-600 font-liberation-sans mq800:flex-wrap">
                    <div className="w-[218.4px] flex flex-col items-start justify-start gap-[18px]">
                      <h1 className="m-0 self-stretch relative text-inherit font-bold font-[inherit] mq450:text-lg">
                        Community Reviews
                      </h1>
                      <div className="self-stretch flex flex-row items-start justify-start py-0 pl-0.5 pr-0 text-xs-2 text-dimgray-400 font-inter">
                        <div className="flex-1 flex flex-col items-start justify-start gap-1.5">
                          <div className="flex flex-row items-end justify-start gap-[19.4px]">
                            <div className="flex flex-col items-start justify-end pt-0 px-0 pb-1.5">
                              <div className="relative tracking-[0.5px] uppercase font-semibold inline-block min-w-[32px]">
                                Pace
                              </div>
                            </div>
                            <div className="rounded-2xl border-lightgray-300 border-[1px] border-solid flex flex-row items-start justify-start py-1 pl-[9px] pr-2 whitespace-nowrap text-xs text-darkslategray">
                              <div className="relative font-semibold whitespace-pre-wrap inline-block min-w-[108px]">
                                <span>{`Meandering `}</span>
                                <span className="text-gray-400"> 100%</span>
                              </div>
                            </div>
                          </div>
                          <div className="self-stretch flex flex-col items-start justify-start gap-[7px]">
                            <div className="self-stretch flex flex-row items-end justify-start gap-[18.4px] mq450:flex-wrap">
                              <div className="flex flex-col items-start justify-end pt-0 px-0 pb-[5px]">
                                <div className="relative tracking-[0.5px] uppercase font-semibold inline-block min-w-[87px]">
                                  Enjoyability
                                </div>
                              </div>
                              <div className="flex-1 rounded-2xl border-lightgray-300 border-[1px] border-solid box-border flex flex-row items-start justify-start pt-1 px-2 pb-[5px] min-w-[72px] whitespace-nowrap text-2xs text-darkslategray">
                                <div className="relative leading-[14px] font-semibold inline-block min-w-[91px]">
                                  <span>Interesting</span>
                                  <span className="text-gray-400"> 100%</span>
                                </div>
                              </div>
                            </div>
                            <div className="w-[203.2px] flex flex-row items-end justify-start gap-[18.4px]">
                              <div className="w-[70px] flex flex-col items-start justify-end pt-0 px-0 pb-1.5 box-border">
                                <div className="self-stretch h-3.5 relative tracking-[0.5px] uppercase font-semibold flex items-center shrink-0">
                                  Difficulty
                                </div>
                              </div>
                              <div className="flex-1 rounded-2xl border-lightgray-300 border-[1px] border-solid flex flex-row items-start justify-start py-1 pl-[9px] pr-[7px] shrink-0 whitespace-nowrap text-xs text-darkslategray">
                                <div className="h-[15px] flex-1 relative font-semibold flex items-center">
                                  <span className="whitespace-pre-wrap">
                                    <span>{`Advanced `}</span>
                                    <span className="text-gray-400"> 100%</span>
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start pt-1 px-0 pb-0 text-mini text-tomato-100">
                      <h3 className="m-0 relative text-inherit [text-decoration:underline] font-bold font-[inherit] inline-block min-w-[79px]">
                        Feedback?
                      </h3>
                    </div>
                  </div>
                  <div className="w-[261.1px] flex flex-row items-start justify-start py-0 px-0.5 box-border">
                    <div className="flex-1 flex flex-row flex-wrap items-end justify-start gap-[20.4px]">
                      <div className="w-[49px] flex flex-col items-start justify-end pt-0 px-0 pb-[5px] box-border">
                        <b className="self-stretch h-3.5 relative tracking-[0.5px] uppercase flex items-center">
                          Genres
                        </b>
                      </div>
                      <div className="flex-1 flex flex-row items-start justify-start gap-[6.4px] min-w-[122px] text-2xs text-darkslategray mq450:flex-wrap">
                        <div className="w-[85px] rounded-2xl border-lightgray-300 border-[1px] border-solid box-border flex flex-row items-start justify-start pt-1 px-[9px] pb-[5px] shrink-0 whitespace-nowrap">
                          <div className="h-[13px] w-16 relative font-semibold flex items-center">
                            <span className="w-full whitespace-pre-wrap">
                              <span>{`Horror `}</span>
                              <span className="text-gray-400"> 66%</span>
                            </span>
                          </div>
                        </div>
                        <div className="flex-1 rounded-2xl border-lightgray-300 border-[1px] border-solid box-border flex flex-row items-start justify-start pt-1 px-[9px] pb-[5px] min-w-[62px] shrink-0 whitespace-nowrap">
                          <div className="h-[13px] w-[73px] relative font-semibold flex items-center">
                            <span className="w-full whitespace-pre-wrap">
                              <span>{`Mystery `}</span>
                              <span className="text-gray-400"> 33%</span>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-[269.1px] flex flex-row items-start justify-start py-0 px-0.5 box-border text-2xs text-darkslategray">
                    <div className="flex-1 flex flex-row items-end justify-start gap-[7.5px] mq450:flex-wrap">
                      <div className="w-[48.5px] flex flex-col items-start justify-end pt-0 pb-[5px] pl-0 pr-2.5 box-border text-xs-2 text-dimgray-400">
                        <div className="self-stretch h-3.5 relative tracking-[0.5px] uppercase font-semibold flex items-center">
                          Mood
                        </div>
                      </div>
                      <div className="flex-1 rounded-2xl border-lightgray-300 border-[1px] border-solid box-border flex flex-row items-start justify-start pt-1 px-[9px] pb-[5px] min-w-[66px] whitespace-nowrap mq450:flex-1">
                        <div className="h-[13px] w-[76px] relative font-semibold flex items-center">
                          <span className="w-full whitespace-pre-wrap">
                            <span>{`Ominous `}</span>
                            <span className="text-gray-400"> 25%</span>
                          </span>
                        </div>
                      </div>
                      <div className="flex-1 rounded-2xl border-lightgray-300 border-[1px] border-solid box-border flex flex-row items-start justify-start pt-1 px-[9px] pb-[5px] min-w-[66px] whitespace-nowrap mq450:flex-1">
                        <div className="h-[13px] w-[79px] relative flex items-center">
                          <span className="w-full">
                            <span>
                              <span className="font-semibold">Scientific</span>
                              <b className="font-liberation-sans whitespace-pre-wrap text-gray-400">{` `}</b>
                            </span>
                            <b className="font-liberation-sans whitespace-pre-wrap text-gray-400">
                              <span> 25%</span>
                            </b>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-[343.7px] flex flex-row items-start justify-start py-0 px-0.5 box-border max-w-full">
                    <div className="flex-1 flex flex-col items-start justify-start gap-1.5 max-w-full">
                      <div className="self-stretch flex flex-row flex-wrap items-end justify-start gap-[19.4px]">
                        <div className="w-[83px] flex flex-col items-start justify-end pt-0 px-0 pb-1.5 box-border">
                          <div className="self-stretch h-3.5 relative tracking-[0.5px] uppercase font-semibold flex items-center">{`Impressions `}</div>
                        </div>
                        <div className="flex-1 flex flex-row items-start justify-start gap-[5.4px] min-w-[154px] text-xs text-darkslategray mq450:flex-wrap">
                          <div className="flex-1 rounded-2xl border-lightgray-300 border-[1px] border-solid box-border flex flex-row items-start justify-start py-1 pl-[9px] pr-2 min-w-[76px] shrink-0 whitespace-nowrap">
                            <div className="h-[15px] flex-1 relative font-semibold flex items-center">
                              <span className="whitespace-pre-wrap">
                                <span>{`Overhyped `}</span>
                                <span className="text-gray-400"> 50%</span>
                              </span>
                            </div>
                          </div>
                          <div className="flex-1 rounded-2xl border-lightgray-300 border-[1px] border-solid box-border flex flex-row items-start justify-start py-1 pl-[9px] pr-[7px] min-w-[76px] shrink-0 whitespace-nowrap">
                            <div className="h-[15px] flex-1 relative font-semibold flex items-center">
                              <span className="whitespace-pre-wrap">
                                <span>{`Forgettable `}</span>
                                <span className="text-gray-400"> 50%</span>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="w-[153.2px] flex flex-row items-end justify-start gap-[19.2px]">
                        <div className="w-[49px] flex flex-col items-start justify-end pt-0 px-0 pb-[5px] box-border">
                          <div className="self-stretch h-3.5 relative tracking-[0.5px] uppercase font-semibold flex items-center">{`Length `}</div>
                        </div>
                        <div className="flex-1 rounded-2xl border-lightgray-300 border-[1px] border-solid flex flex-row items-start justify-start pt-1 px-[9px] pb-[5px] whitespace-nowrap text-2xs text-darkslategray">
                          <div className="h-[13px] w-[65px] relative font-semibold flex items-center">
                            <span className="w-full whitespace-pre-wrap">
                              <span>{`Short `}</span>
                              <span className="text-gray-400"> 100%</span>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-48 h-4 flex flex-row items-start justify-start py-0 px-0.5 box-border text-sm text-dimgray-600 font-liberation-sans">
                  <b className="self-stretch flex-1 relative [text-decoration:underline] flex items-center">
                    Add your community review
                  </b>
                </div>
              </div>
            </div>
            <div className="w-[237px] flex flex-col items-start justify-start gap-[41.8px] text-smi-8 text-dimgray-400">
              <div className="self-stretch h-[64.2px] flex flex-col items-start justify-start gap-[10.2px]">
                <div className="w-[124px] h-[15px] relative font-semibold flex items-center">
                  The Physical Object
                </div>
                <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-[11px] text-2xs">
                  <div className="self-stretch flex-1 flex flex-row items-start justify-between gap-5">
                    <div className="self-stretch w-[57px] relative font-semibold flex items-center">
                      Pagination
                    </div>
                    <div className="self-stretch w-[117px] relative font-semibold text-darkslategray flex items-center">
                      ix, 112 p. (large print) ;
                    </div>
                  </div>
                  <div className="w-[141px] flex-1 flex flex-row items-start justify-start gap-7">
                    <div className="flex-1 relative font-semibold">
                      Number of pages
                    </div>
                    <div className="self-stretch w-[21px] relative text-xs font-semibold text-darkslategray flex items-center">
                      216
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[197px] flex flex-col items-start justify-start gap-2.5">
                <div className="w-[73px] h-[15px] relative font-semibold flex items-center">
                  ID Numbers
                </div>
                <div className="self-stretch flex flex-row items-start justify-between gap-5 text-2xs">
                  <div className="w-[77px] flex flex-col items-start justify-start gap-[11.3px]">
                    <div className="self-stretch relative font-semibold">
                      My Book Shelf
                    </div>
                    <div className="w-[41px] relative font-semibold inline-block">
                      ISBN 10
                    </div>
                    <div className="w-[31px] relative font-semibold inline-block">
                      LCCN
                    </div>
                    <div className="w-[65px] relative text-3xs font-semibold inline-block">
                      Library Thing
                    </div>
                    <div className="w-[59px] relative font-semibold inline-block">
                      Goodreads
                    </div>
                  </div>
                  <div className="w-[77px] flex flex-col items-start justify-start gap-[9.5px] text-xs text-dimgray-600">
                    <div className="w-[74px] relative text-2xs font-semibold text-darkslategray inline-block">
                      OL3570252M
                    </div>
                    <div className="self-stretch relative font-semibold text-darkslategray">
                      0486424715
                    </div>
                    <div className="self-stretch relative font-semibold">
                      2002073560
                    </div>
                    <div className="w-[37px] relative font-semibold inline-block">
                      12349
                    </div>
                    <div className="w-[47px] relative font-semibold inline-block">
                      690668
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
  );
};

export default BookPreviewCard;

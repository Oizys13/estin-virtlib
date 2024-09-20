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

            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default BookPreviewCard;

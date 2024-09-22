import type { NextPage } from "next";

export type GroupComponent5Type = {
  className?: string;
};

const GroupComponent5: NextPage<GroupComponent5Type> = ({ className = "" }) => {
  return (
    <div
      className={`flex-1 shadow-[0px_0px_30px_rgba(170,_170,_170,_0.16),_0px_10px_20px_rgba(194,_194,_194,_0.16)] h-[418px] w-[1136px] rounded-[10px] bg-white flex flex-row items-end justify-start pt-12 px-6 pb-[120px] box-border gap-[75px] max-w-full z-[1] text-left text-xl text-tomato-200 font-inter mq800:flex-wrap ${className}`}
    >
      <div className="h-[418px] w-[1136px] fixed  shadow-[0px_0px_30px_rgba(170,_170,_170,_0.16),_0px_10px_20px_rgba(194,_194,_194,_0.16)] rounded-3xs bg-white hidden max-w-full" />
      <div className="h-[250px] w-[188px] flex flex-col items-start justify-start gap-[13px] min-w-[188px] mq800:flex-1">
        <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-7 gap-[9px]">
          <div className="flex flex-row items-start justify-start py-0 px-3">
            <b className="relative text-[#F4683C] whitespace-pre-wrap z-[1] mq450:text-base">
              Account Setting
            </b>
          </div>
          <div className="self-stretch h-0.5 relative border-[#F4683C] border-t-[2px] border-solid box-border z-[1]" />
        </div>
        <div className="flex-1 flex flex-col items-start justify-start gap-4 text-base text-dimgray-500">
          <p className="relative font-medium whitespace-pre-wrap z-[1]">
            Your Profile Picture
          </p>
          <div className="flex-1 flex flex-row items-center justify-center py-0 pl-[21px] pr-[31px]">
            <img
              className="h-[100px] w-[100px] relative object-cover z-[1]"
              loading="lazy"
              alt=""
              src="/group-31@2x.png"
            />
          </div>
        </div>
        <div className="w-[142px] flex flex-row items-start justify-start py-0 px-[13px] box-border text-center text-3xs text-gray-100">
          <button className="flex-1 relative text-[#909090] text-10pt items-center justify-center whitespace-nowrap [text-decoration:underline] leading-[25px] font-medium z-[1]">
            Upload New photo
          </button>
        </div>
      </div>
      <div className="flex flex-col items-start justify-end pt-0 px-0 pb-[15px] box-border min-w-[404px] max-w-full text-13xl text-white mq800:flex-1 mq800:min-w-full">
        <div className="flex flex-row items-start justify-start gap-8 mq800:flex-wrap">
          <div className="w-[175px] rounded-[10px] bg-[#F27851] flex flex-col items-start justify-start pt-[21px] pb-[15px] pl-[15px] pr-3 box-border gap-[26px] min-w-[175px] z-[1] mq800:flex-1">
            <div className="w-[175px] h-[149px] relative rounded-3xs bg-coral-100 hidden" />
            <div className="flex flex-row items-start justify-start gap-[23px]">
              <img
                className="h-12 w-[54px] relative z-[1]"
                loading="lazy"
                alt=""
                src="/group-133536.svg"
              />
              <div className="flex flex-col items-start justify-start pt-1 px-0 pb-0">
                <div className="relative leading-[36px] text-24pt font-medium inline-block min-w-[63px] z-[1] mq800:text-7xl mq800:leading-[29px] mq450:text-lgi mq450:leading-[22px]">
                  120
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start py-0 pl-1.5 pr-0 text-6xl">
              <div className="h-[39px] text-18pt flex-1 relative leading-[112.4%] font-medium inline-block z-[1] mq450:text-xl mq450:leading-[22px]">
                Readings
              </div>
            </div>
          </div>
          <div className="rounded-[10px] bg-[#926CFF] bg-mediumslateblue flex flex-col items-start justify-start pt-[21px] px-[15px] pb-[15px] box-border gap-[26px] min-w-[197px] z-[1] mq800:flex-1">
            <div className="w-[197px] h-[149px] relative rounded-[10px] bg-[#926CFF] bg-mediumslateblue hidden" />
            <div className="w-[140px] flex flex-row items-start justify-start gap-[23px]">
              <div className="h-12 w-[54px] relative rounded-[10px] bg-white z-[1]">
                <div className="absolute top-[0px] left-[0px] rounded-[10px] bg-white w-full h-full hidden" />
                <img
                  className="absolute top-[13px] left-[16px] w-[21px] h-[21px] overflow-hidden z-[1]"
                  loading="lazy"
                  alt=""
                  src="/give-gift1.svg"
                />
              </div>
              <div className="flex-1 flex flex-col items-start justify-start pt-1 px-0 pb-0">
                <div className="self-stretch textt-24pt relative leading-[36px] font-medium z-[1] mq800:text-7xl mq800:leading-[29px] mq450:text-lgi mq450:leading-[22px]">
                  10
                </div>
              </div>
            </div>
            <div className="flex flex-row items-start justify-start py-0 pl-1.5 pr-[7px] text-6xl">
              <div className="h-[39px] text-18pt relative leading-[112.4%] font-medium inline-block z-[1] mq450:text-xl mq450:leading-[22px]">
                Contribution
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GroupComponent5;
import type { NextPage } from "next";

export type TopMain2Type = {
  className?: string;
};

const TopMain2: NextPage<TopMain2Type> = ({ className = "" }) => {
  return (
    <header
      className={`flex-1 flex flex-row items-start justify-start max-w-full z-[5] text-left text-xl text-dimgray-600 font-inter ${className}`}
    >
      <div className="flex-1 rounded-tl-none rounded-tr-3xs rounded-b-none [background:linear-gradient(180deg,_#fff,_#f3f3f7_66.67%,_rgba(243,_243,_247,_0.88))] overflow-hidden flex flex-row items-start justify-start pt-[38px] pb-6 pl-[46px] pr-[45px] box-border gap-7 max-w-full">
        <div className="flex-1 rounded-[40px] shadow-[0px_0px_4px_rgba(0,_0,_0,_0.25)] rounded-21xl bg-white flex flex-row items-start justify-between py-0 pl-0 pr-[17px] box-border max-w-full gap-5 z-[1]">
          <div className="self-stretch w-[541px] relative shadow-[0px_0px_4px_rgba(0,_0,_0,_0.25)] rounded-21xl bg-white hidden max-w-full" />
          <div className="w-[352px] flex flex-row items-start justify-start gap-[21px] max-w-full">
            <div className="rounded-tl-21xl bg-[#F7F7FA] rounded-[40px] rounded-tr-none rounded-br-none rounded-bl-21xl bg-whitesmoke-100 flex flex-row items-start justify-start pt-3 pb-[13px] pl-[37px] pr-[11px] gap-2.5 z-[1]">
              <div className="h-[49px] w-[102px] relative rounded-tl-21xl rounded-tr-none rounded-br-none rounded-bl-21xl bg-whitesmoke-100 hidden" />
              <div className="relative leading-[128.52%] inline-block min-w-[27px] z-[1]">
                All
              </div>
              <div className="flex flex-col items-start justify-start pt-2 px-0 pb-0 box-border w-[17px] h-[17px]">
                <img
                  className="w-[17px] h-[9px] relative rounded-12xs object-contain z-[1]"
                  alt=""
                  src="/search-icon.svg"
                />
              </div>
            </div>
            <div className="flex-1 flex flex-col items-start justify-start pt-3 px-0 pb-0 text-silver-100">
              <h1 className="m-0 self-stretch relative text-inherit leading-[128.52%] font-normal font-[inherit] z-[1]">
                Search
              </h1>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start pt-2 px-0 pb-0">
            <div className="h-[33px] flex flex-row items-start justify-start gap-[9.5px]">
              <div className="w-5 flex flex-col items-start justify-start pt-[7px] px-0 pb-0 box-border">
                <img
                  className="w-5 h-5 relative overflow-hidden shrink-0 z-[1]"
                  loading="lazy"
                  alt=""
                  src="/search.svg"
                />
              </div>
              <div className="h-[34px] w-px relative border-gainsboro-300 border-r-[1px] border-solid box-border z-[1]" />
              <div className="w-5 flex flex-col items-start justify-start pt-1.5 px-0 pb-0 box-border">
                <img
                  className="w-5 h-5 relative overflow-hidden shrink-0 z-[1]"
                  loading="lazy"
                  alt=""
                  src="/barcode-scanner.svg"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="w-[170px] rounded-[40px] shadow-[0px_0px_4px_rgba(0,_0,_0,_0.25)] rounded-11xl bg-white flex flex-row items-start justify-start pt-3 px-[25px] pb-[12.9px] box-border z-[1] text-center">
          <div className="h-[47px] w-[170px] relative shadow-[0px_0px_4px_rgba(0,_0,_0,_0.25)] rounded-11xl bg-white hidden z-[1]" />
          <div className="flex flex-col items-start justify-start pt-0.5 pb-0 pl-0 pr-[7px]">
            <img
              className="w-5 h-5 relative overflow-hidden shrink-0 z-[1]"
              alt=""
              src="/translate.svg"
            />
          </div>
          <div className="flex flex-col items-start justify-start py-0 px-0 ml-[-7px]">
            <a className="ml-[-5px] [text-decoration:none] w-[91px] relative leading-[22.1px] text-[inherit] inline-block z-[1]">
              Lang
            </a>
          </div>
          <div className="flex flex-col items-start justify-start pt-[7px] px-0 pb-0 ml-[-7px]">
            <img
              className="w-[17px] h-[9px] relative rounded-12xs object-contain z-[1]"
              alt=""
              src="/search-icon.svg"
            />
          </div>
        </div>
        <div className="w-[455px] flex flex-col items-start justify-start pt-px px-0 pb-0 box-border max-w-full text-center text-mini font-digital-numbers mq1300:w-0">
          <div className="self-stretch rounded-[40px] shadow-[0px_0px_4px_rgba(0,_0,_0,_0.25)] rounded-21xl bg-white flex flex-row items-start justify-between pt-3.5 pb-[13px] pl-[57px] pr-[52px] box-border max-w-full gap-5 z-[1] mq1300:hidden">
            <div className="h-[46px] w-[455px] relative shadow-[0px_0px_4px_rgba(0,_0,_0,_0.25)] rounded-21xl bg-white hidden max-w-full" />
            <div className="w-[133px] flex flex-row items-start justify-start gap-[5px]">
              <img
                className="h-[19px] w-[19px] relative overflow-hidden shrink-0 min-h-[19px] z-[1]"
                alt=""
                src="/time1.svg"
              />
              <div className="flex-1 relative tracking-[-0.04em] leading-[128.52%] whitespace-nowrap z-[1]">
                09:00 hrs
              </div>
            </div>
            <div className="w-[149px] flex flex-row items-start justify-start gap-[5px]">
              <img
                className="h-[19px] w-[19px] relative min-h-[19px] z-[1]"
                alt=""
                src="/vector-1.svg"
              />
              <div className="flex-1 relative tracking-[-0.04em] leading-[128.52%] z-[1]">
                4-Mar-2023
              </div>
            </div>
          </div>
        </div>
        <div className="w-[203px] rounded-[40px] shadow-[0px_0px_4px_rgba(0,_0,_0,_0.25)] rounded-14xl bg-white flex flex-row items-start justify-start pt-[3px] px-[3px] pb-0.5 box-border z-[1]">
          <div className="h-[50px] w-[203px] relative shadow-[0px_0px_4px_rgba(0,_0,_0,_0.25)] rounded-14xl bg-white hidden" />
          <div className="flex flex-col items-start justify-start py-0 pl-0 pr-[18px]">
            <img
              className="w-[45px] h-[45px] relative rounded-[50%] object-cover z-[1]"
              alt=""
              src="/profile-picture@2x.png"
            />
          </div>
          <div className="w-[91px] flex flex-col items-start justify-start pt-[11px] px-0 pb-0 box-border">
            <div className="self-stretch relative leading-[27px] z-[1]">
              Kenson
            </div>
          </div>
          <div className="flex flex-col items-start justify-start pt-[18px] px-0 pb-0">
            <img
              className="w-[17px] h-[9px] relative rounded-12xs object-contain z-[1]"
              alt=""
              src="/search-icon.svg"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default TopMain2;

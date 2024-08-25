import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";

export type SearchBarAreaType = {
  className?: string;
};

const SearchBarArea: NextPage<SearchBarAreaType> = ({ className = "" }) => {
  const router = useRouter();

  const onGroupContainerClick = useCallback(() => {
    router.push("/search1");
  }, [router]);

  return (
    <header
      className={`self-stretch rounded-tl-none rounded-tr-3xs rounded-b-none [background:linear-gradient(180deg,_#fff,_#f3f3f7_66.67%,_rgba(243,_243,_247,_0.88))] flex flex-col items-start justify-start pt-[38px] px-11 pb-[7px] box-border gap-[31px] max-w-full z-[2] text-center text-xl text-dimgray-600 font-inter ${className}`}
    >
      <div className="self-stretch flex flex-row items-start justify-start py-0 pl-0.5 pr-px box-border top-[0] z-[99] sticky max-w-full">
        <div className="flex-1 flex flex-row items-start justify-start gap-7 max-w-full">
          <div className="flex-1 shadow-[0px_0px_4px_rgba(0,_0,_0,_0.25)] rounded-21xl bg-white flex flex-row items-start justify-between py-0 pl-0 pr-[17px] box-border max-w-full gap-5 z-[3] text-left">
            <div className="self-stretch w-[541px] relative shadow-[0px_0px_4px_rgba(0,_0,_0,_0.25)] rounded-21xl bg-white hidden max-w-full" />
            <div className="w-[352px] flex flex-row items-start justify-start gap-[21px] max-w-full">
              <div className="rounded-tl-21xl rounded-tr-none rounded-br-none rounded-bl-21xl bg-whitesmoke-100 flex flex-row items-start justify-start pt-3 pb-[13px] pl-[37px] pr-[11px] gap-2.5 z-[1]">
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
              <input
                className="w-full [border:none] [outline:none] bg-[transparent] h-9 flex-1 flex flex-col items-start justify-start pt-3 px-0 pb-0 box-border font-inter text-xl text-silver-100 min-w-[137px]"
                placeholder="Search"
                type="text"
              />
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
          <div className="w-[170px] shadow-[0px_0px_4px_rgba(0,_0,_0,_0.25)] rounded-11xl bg-white flex flex-row items-start justify-start pt-3 px-[25px] pb-[12.9px] box-border z-[3]">
            <div className="h-[47px] w-[170px] relative shadow-[0px_0px_4px_rgba(0,_0,_0,_0.25)] rounded-11xl bg-white hidden z-[1]" />
            <div className="flex flex-col items-start justify-start pt-0.5 pb-0 pl-0 pr-[7px]">
              <img
                className="w-5 h-5 relative overflow-hidden shrink-0 z-[1]"
                loading="lazy"
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
          <div className="w-[455px] flex flex-col items-start justify-start pt-px px-0 pb-0 box-border max-w-full text-mini font-digital-numbers mq1300:w-0">
            <div className="self-stretch shadow-[0px_0px_4px_rgba(0,_0,_0,_0.25)] rounded-21xl bg-white flex flex-row items-start justify-between pt-3.5 pb-[13px] pl-[57px] pr-[52px] box-border max-w-full gap-5 z-[3] mq1300:hidden">
              <div className="h-[46px] w-[455px] relative shadow-[0px_0px_4px_rgba(0,_0,_0,_0.25)] rounded-21xl bg-white hidden max-w-full" />
              <div className="w-[133px] flex flex-row items-start justify-start gap-[5px]">
                <img
                  className="h-[19px] w-[19px] relative overflow-hidden shrink-0 min-h-[19px] z-[1]"
                  loading="lazy"
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
                  loading="lazy"
                  alt=""
                  src="/vector-1.svg"
                />
                <div className="flex-1 relative tracking-[-0.04em] leading-[128.52%] z-[1]">
                  4-Mar-2023
                </div>
              </div>
            </div>
          </div>
          <button className="cursor-pointer [border:none] pt-[3px] px-[3px] pb-0.5 bg-white w-[203px] shadow-[0px_0px_4px_rgba(0,_0,_0,_0.25)] rounded-14xl flex flex-row items-start justify-start box-border z-[3]">
            <div className="h-[50px] w-[203px] relative shadow-[0px_0px_4px_rgba(0,_0,_0,_0.25)] rounded-14xl bg-white hidden" />
            <div className="flex flex-col items-start justify-start py-0 pl-0 pr-[18px]">
              <img
                className="w-[45px] h-[45px] relative rounded-[50%] object-cover z-[1]"
                alt=""
                src="/profile-picture@2x.png"
              />
            </div>
            <div className="w-[91px] flex flex-col items-start justify-start pt-[11px] px-0 pb-0 box-border">
              <div className="self-stretch relative text-xl leading-[27px] font-inter text-dimgray-600 text-left z-[1]">
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
          </button>
        </div>
      </div>
      <div
        className="w-[170px] shadow-[0px_0px_4px_rgba(0,_0,_0,_0.25)] rounded-11xl bg-white flex flex-row items-start justify-start pt-[11px] pb-2.5 pl-[27px] pr-6 box-border gap-[11px] cursor-pointer"
        onClick={onGroupContainerClick}
      >
        <div className="h-[47px] w-[170px] relative shadow-[0px_0px_4px_rgba(0,_0,_0,_0.25)] rounded-11xl bg-white hidden" />
        <div className="flex-1 relative leading-[26px] z-[1] mq450:text-base mq450:leading-[21px]">
          Browse
        </div>
        <div className="flex flex-col items-start justify-start pt-2 px-0 pb-0 box-border w-[17px] h-[17px]">
          <img
            className="w-[17px] h-[9px] relative rounded-12xs object-contain z-[1]"
            alt=""
            src="/search-icon.svg"
          />
        </div>
      </div>
    </header>
  );
};

export default SearchBarArea;

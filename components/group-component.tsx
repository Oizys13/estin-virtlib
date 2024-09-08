import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/navigation";

export type GroupComponentType = {
  className?: string;

  /** Action props */
  onGroupButtonClick?: () => void;
};

const GroupComponent: NextPage<GroupComponentType> = ({
  className = "",
  onGroupButtonClick,
}) => {
  const router = useRouter();

  const onGroupButtonClick1 = useCallback(() => {
    router.push("/book-preview");
  }, [router]);

  return (
    <div
      className={`self-stretch rounded-3xs bg-white flex flex-row items-start justify-between py-[13px] pl-[23px] pr-[34px] box-border max-w-full gap-5 z-[1] text-left text-xl text-dimgray-600 font-inter mq1300:flex-wrap ${className}`}
    >
      <div className="h-[125px] w-[1454px] relative rounded-3xs bg-white hidden max-w-full" />
      <div className="w-[347px] flex flex-col items-start justify-start py-0 pl-0 pr-[18px] box-border max-w-full">
        <div className="self-stretch flex flex-row items-center justify-start gap-[47px] z-[1] mq450:flex-wrap">
          <img
            className="h-[99px] w-[75px] relative rounded-8xs object-cover"
            loading="lazy"
            alt=""
            src="/rectangle-16@2x.png"
          />
          <div className="flex-1 flex flex-col items-start justify-start gap-2.5 min-w-[135px]">
            <div className="self-stretch flex flex-col items-start justify-start gap-2">
              <div className="relative leading-[26px] mq450:text-base mq450:leading-[21px]">{`Don’t Make Me Think `}</div>
              <div className="w-[140px] h-3.5 relative text-mini leading-[128.52%] inline-block shrink-0">
                Steve Krug, 2000
              </div>
            </div>
            <div className="w-[140px] relative text-3xs leading-[14px] inline-block">
              Second Edition
            </div>
          </div>
        </div>
      </div>
      <div className="w-[60px] flex flex-col items-start justify-start pt-9 px-0 pb-0 box-border">
        <div className="self-stretch relative leading-[27px] z-[1]">
          <span>4.5</span>
          <span className="text-mini text-darkgray-200">/5</span>
        </div>
      </div>
      <div className="w-[198px] flex flex-col items-start justify-start pt-[21px] pb-0 pl-0 pr-[18px] box-border">
        <div className="self-stretch flex flex-col items-start justify-start gap-[11px]">
          <div className="relative leading-[27px] z-[1] mq450:text-base mq450:leading-[21px]">
            Computer Science
          </div>
          <div className="self-stretch relative text-mini leading-[128.52%] z-[1]">
            UX Design
          </div>
        </div>
      </div>
      <div className="w-[137px] flex flex-col items-start justify-start pt-[12.5px] pb-0 pl-0 pr-[30px] box-border text-mini">
        <div className="self-stretch flex flex-col items-start justify-start gap-2">
          <div className="self-stretch flex flex-col items-start justify-start gap-2">
            <div className="flex flex-row items-start justify-start gap-2">
              <div className="flex flex-col items-start justify-start pt-[1.5px] px-0 pb-0">
                <img
                  className="w-[15px] h-[15px] relative z-[1]"
                  alt=""
                  src="/vector.svg"
                />
              </div>
              <div className="relative inline-block min-w-[84px] z-[1]">
                Hard Copy
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start gap-[7px]">
              <div className="flex flex-col items-start justify-start pt-[2.5px] px-0 pb-0">
                <img
                  className="w-[15px] h-[15px] relative z-[1]"
                  alt=""
                  src="/vector.svg"
                />
              </div>
              <div className="flex-1 relative leading-[150%] z-[1]">
                E - Book
              </div>
            </div>
          </div>
          <div className="flex flex-row items-start justify-start gap-1.5">
            <div className="flex flex-col items-start justify-start pt-[2.5px] px-0 pb-0">
              <img
                className="w-[15px] h-[15px] relative z-[1]"
                alt=""
                src="/vector.svg"
              />
            </div>
            <div className="relative leading-[150%] inline-block min-w-[84px] z-[1]">
              Audio book
            </div>
          </div>
        </div>
      </div>
      <div className="w-[116px] flex flex-col items-start justify-start pt-[18px] pb-0 pl-0 pr-[18px] box-border text-center text-mini text-white">
        <div className="self-stretch flex flex-col items-start justify-start gap-[13px]">
          <div className="w-[85px] shadow-[0px_0px_4px_rgba(0,_0,_0,_0.25)] rounded-8xs bg-forestgreen-100 flex flex-row items-start justify-start pt-[5px] px-0 pb-1 box-border z-[1]">
            <div className="h-[26px] w-[85px] relative rounded-8xs bg-forestgreen-100 hidden" />
            <div className="flex-1 relative z-[1]">In-Shelf</div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start gap-px text-left text-dimgray-600">
            <img
              className="h-5 w-5 relative overflow-hidden shrink-0 object-cover z-[1]"
              loading="lazy"
              alt=""
              src="/heroiconsminimappin1@2x.png"
            />
            <div className="flex-1 relative leading-[24px] z-[1]"> CS A-15</div>
          </div>
        </div>
      </div>
      <div className="w-[179px] flex flex-col items-start justify-start pt-[34.5px] px-0 pb-0 box-border">
        <div
          className="self-stretch flex flex-row items-start justify-between gap-5"
          onClick={onGroupButtonClick}
        >
          <img
            className="h-[30px] w-[30px] relative overflow-hidden shrink-0 min-h-[30px] z-[1]"
            loading="lazy"
            alt=""
            src="/heart.svg"
          />
          <button
            className="cursor-pointer border-tomato-100 border-[1px] border-solid py-1 pl-[13px] pr-3 bg-[transparent] w-[85px] rounded-8xs box-border flex flex-row items-start justify-start z-[1] hover:bg-tomato-700 hover:border-tomato-500 hover:border-[1px] hover:border-solid hover:box-border"
            onClick={onGroupButtonClick}
          >
            <div className="h-[30px] w-[85px] relative rounded-8xs border-tomato-100 border-[1px] border-solid box-border hidden" />
            <div className="flex-1 relative text-mini font-inter text-tomato-100 text-center inline-block min-w-[60px] z-[1]">
              Preview
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default GroupComponent;

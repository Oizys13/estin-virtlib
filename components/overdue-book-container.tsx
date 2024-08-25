import type { NextPage } from "next";

export type OverdueBookContainerType = {
  className?: string;
  rectangle16?: string;
  theDesignOfEveryDayThings?: string;
  donNorman1988?: string;
};

const OverdueBookContainer: NextPage<OverdueBookContainerType> = ({
  className = "",
  rectangle16,
  theDesignOfEveryDayThings,
  donNorman1988,
}) => {
  return (
    <div
      className={`self-stretch flex flex-col items-start justify-start gap-[7px] text-left text-xl text-dimgray-600 font-inter ${className}`}
    >
      <div className="self-stretch flex flex-row items-start justify-start gap-8 mq450:flex-wrap">
        <img
          className="h-[99px] w-[75px] relative rounded-8xs object-cover z-[1]"
          alt=""
          src={rectangle16}
        />
        <div className="flex-1 flex flex-col items-start justify-start gap-1.5 min-w-[158px]">
          <div className="self-stretch h-[54px] relative leading-[128.52%] inline-block shrink-0 z-[1] mq450:text-base mq450:leading-[21px]">
            {theDesignOfEveryDayThings}
          </div>
          <div className="w-[207px] h-3.5 relative text-mini leading-[128.52%] inline-block shrink-0 z-[1]">
            {donNorman1988}
          </div>
        </div>
      </div>
      <div className="w-[243px] flex flex-row items-start justify-start py-0 px-0.5 box-border text-smi text-dimgray-100">
        <div className="flex-1 flex flex-row items-start justify-start [row-gap:20px] mq450:flex-wrap">
          <div className="w-[114px] flex flex-col items-start justify-start pt-2.5 px-0 pb-0 box-border">
            <div className="self-stretch h-[19px] relative leading-[128.52%] inline-block shrink-0 whitespace-nowrap z-[1]">
              <span>{`13 Mar 2023 `}</span>
              <span className="text-crimson">(Over Due)</span>
            </div>
          </div>
          <div className="flex-1 rounded-8xs bg-white border-tomato-100 border-[1px] border-solid box-border flex flex-row items-start justify-start pt-[7px] pb-2 pl-4 pr-3 min-w-[81px] z-[1] text-center text-mini text-tomato-100">
            <div className="h-10 w-[125px] relative rounded-8xs bg-white border-tomato-100 border-[1px] border-solid box-border hidden" />
            <div className="h-[21px] flex-1 relative leading-[128.52%] font-semibold inline-block z-[1]">
              Return
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverdueBookContainer;

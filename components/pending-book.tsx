import type { NextPage } from "next";

export type PendingBookType = {
  className?: string;
  rectangle16?: string;
  theDesignOfEveryDayThings?: string;
  donNorman1988?: string;
};

const PendingBook: NextPage<PendingBookType> = ({
  className = "",
  rectangle16,
  theDesignOfEveryDayThings,
  donNorman1988,
}) => {
  return (
    <div
      className={`self-stretch flex flex-row items-start justify-start gap-8 text-left text-xl text-dimgray-600 font-inter mq450:flex-wrap ${className}`}
    >
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
  );
};

export default PendingBook;

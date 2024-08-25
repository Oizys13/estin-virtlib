import type { NextPage } from "next";

export type RecommendationItemsType = {
  className?: string;
  rectangle12?: string;
  theDesignOfEvery?: string;
  donNorman1988?: string;
};

const RecommendationItems: NextPage<RecommendationItemsType> = ({
  className = "",
  rectangle12,
  theDesignOfEvery,
  donNorman1988,
}) => {
  return (
    <div
      className={`self-stretch w-40 rounded-3xs bg-white overflow-hidden shrink-0 flex flex-col items-start justify-start pt-[15px] px-[15px] pb-[13px] box-border gap-[11.2px] text-left text-3xs text-dimgray-600 font-inter ${className}`}
    >
      <img
        className="self-stretch flex-1 relative rounded-8xs max-w-full overflow-hidden max-h-full object-cover"
        alt=""
        src={rectangle12}
      />
      <div className="flex flex-col items-start justify-start gap-[5px]">
        <div className="relative text-xs leading-[128.52%]">
          {theDesignOfEvery}
        </div>
        <div className="w-[101px] relative leading-[14px] inline-block">
          {donNorman1988}
        </div>
        <div className="w-[101px] relative leading-[128.52%] font-semibold inline-block">
          14k Readers
        </div>
      </div>
    </div>
  );
};

export default RecommendationItems;

import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type GroupComponent4Type = {
  className?: string;
  dontMakeMeThinkNotes?: string;
  lastEdited2hrsAgo?: string;

  /** Style props */
  propBackgroundColor?: CSSProperties["backgroundColor"];
  propBackgroundColor1?: CSSProperties["backgroundColor"];
  propWidth?: CSSProperties["width"];
  propPadding?: CSSProperties["padding"];
};

const GroupComponent4: NextPage<GroupComponent4Type> = ({
  className = "",
  propBackgroundColor,
  propBackgroundColor1,
  dontMakeMeThinkNotes,
  propWidth,
  propPadding,
  lastEdited2hrsAgo,
}) => {
  const groupDiv1Style: CSSProperties = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
    };
  }, [propBackgroundColor]);

  const rectangleDivStyle: CSSProperties = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor1,
    };
  }, [propBackgroundColor1]);

  const lastEditedTimesStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
      padding: propPadding,
    };
  }, [propWidth, propPadding]);

  return (
    <div
      className={`flex-1 rounded-mini bg-lightgreen flex flex-col items-start justify-start pt-[37px] pb-[42px] pl-8 pr-[17px] box-border gap-[27px] min-w-[263px] max-w-full z-[1] text-center text-xl text-white font-inter mq1125:flex-1 ${className}`}
      style={groupDiv1Style}
    >
      <div
        className="w-[405px] h-[149px] relative rounded-mini bg-lightgreen hidden max-w-full"
        style={rectangleDivStyle}
      />
      <b className="self-stretch relative leading-[26px] mq450:text-base mq450:leading-[21px]">
        {dontMakeMeThinkNotes}
      </b>
      <div
        className="w-[322px] h-[17px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full text-xs"
        style={lastEditedTimesStyle}
      >
        <div className="self-stretch w-[136px] relative leading-[128.52%] font-semibold inline-block shrink-0">
          {lastEdited2hrsAgo}
        </div>
      </div>
    </div>
  );
};

export default GroupComponent4;

import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type SkipType = {
  className?: string;

  /** Style props */
  propTransform?: CSSProperties["transform"];
  propTransform1?: CSSProperties["transform"];
};

const Skip: NextPage<SkipType> = ({
  className = "",
  propTransform,
  propTransform1,
}) => {
  const skipStyle: CSSProperties = useMemo(() => {
    return {
      transform: propTransform,
    };
  }, [propTransform]);

  const playIconStyle: CSSProperties = useMemo(() => {
    return {
      transform: propTransform1,
    };
  }, [propTransform1]);

  return (
    <div
      className={`w-3.5 h-[13px] relative opacity-[0.6] z-[1] ${className}`}
      style={skipStyle}
    >
      <img
        className="absolute h-full w-[92.86%] top-[0%] right-[7.14%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
        alt=""
        src="/play.svg"
        style={playIconStyle}
      />
      <div className="absolute h-[84.62%] w-[14.29%] top-[7.69%] right-[0%] bottom-[7.69%] left-[85.71%] bg-white z-[1]" />
    </div>
  );
};

export default Skip;

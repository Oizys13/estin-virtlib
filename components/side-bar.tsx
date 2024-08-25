import type { NextPage } from "next";
import { useMemo, type CSSProperties, useCallback } from "react";
import { useRouter } from "next/navigation";

export type SideBarType = {
  className?: string;
  group3?: string;
  search?: string;
  giveGift?: string;

  /** Style props */
  propPosition?: CSSProperties["position"];
  propTop?: CSSProperties["top"];
  propLeft?: CSSProperties["left"];
  propWidth?: CSSProperties["width"];
  propHeight?: CSSProperties["height"];
  propAlignSelf?: CSSProperties["alignSelf"];
  propFlex?: CSSProperties["flex"];
  propTextDecoration?: CSSProperties["textDecoration"];
  propColor?: CSSProperties["color"];
  propColor1?: CSSProperties["color"];

  /** Action props */
  onSearchMenuContainerClick?: () => void;
  onFavouriteMenuContainerClick?: () => void;
};

const SideBar: NextPage<SideBarType> = ({
  className = "",
  propPosition,
  propTop,
  propLeft,
  propWidth,
  propHeight,
  propAlignSelf,
  propFlex,
  group3,
  propTextDecoration,
  onSearchMenuContainerClick,
  search,
  propColor,
  onFavouriteMenuContainerClick,
  giveGift,
  propColor1,
}) => {
  const sideBarStyle: CSSProperties = useMemo(() => {
    return {
      position: propPosition,
      top: propTop,
      left: propLeft,
      width: propWidth,
      height: propHeight,
      alignSelf: propAlignSelf,
      flex: propFlex,
    };
  }, [
    propPosition,
    propTop,
    propLeft,
    propWidth,
    propHeight,
    propAlignSelf,
    propFlex,
  ]);

  const homeStyle: CSSProperties = useMemo(() => {
    return {
      textDecoration: propTextDecoration,
    };
  }, [propTextDecoration]);

  const search1Style: CSSProperties = useMemo(() => {
    return {
      color: propColor,
    };
  }, [propColor]);

  const contributeStyle: CSSProperties = useMemo(() => {
    return {
      color: propColor1,
    };
  }, [propColor1]);

  const router = useRouter();

  const onHomeMenuContainerClick = useCallback(() => {
    router.push("/home");
  }, [router]);

  const onSearchMenuContainerClick1 = useCallback(() => {
    router.push("/search");
  }, [router]);

  const onMyShelfMenuClick = useCallback(() => {
    router.push("/my-shelf");
  }, [router]);

  const onFavouriteMenuContainerClick1 = useCallback(() => {
    router.push("/contribute");
  }, [router]);

  return (
    <div
      className={`absolute top-[48px] left-[35px] w-[306px] h-[994px] flex flex-row items-start justify-start z-[1] text-left text-xl text-gray-200 font-inter ${className}`}
      style={sideBarStyle}
    >
      <div className="self-stretch flex-1 rounded-tl-[18px] rounded-tr-none rounded-br-none rounded-bl-3xs bg-white overflow-hidden flex flex-col items-start justify-start pt-[38px] px-[66px] pb-[51px] gap-[99.8px]">
        <div className="flex flex-row items-start justify-start py-0 px-0.5">
          <img
            className="h-[74.2px] w-[120px] relative object-cover z-[1]"
            loading="lazy"
            alt=""
            src={group3}
          />
        </div>
        <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-[34px]">
          <div
            className="self-stretch flex flex-row items-start justify-start gap-3 cursor-pointer z-[1]"
            onClick={onHomeMenuContainerClick}
          >
            <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
              <img
                className="w-[23px] h-[23px] relative overflow-hidden shrink-0"
                loading="lazy"
                alt=""
                src="/heroiconsminihome1.svg"
              />
            </div>
            <a
              className="[text-decoration:none] flex-1 relative text-[inherit] mq450:text-base"
              style={homeStyle}
            >
              Home
            </a>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start py-0 px-px">
            <div
              className="flex-1 flex flex-row items-start justify-start gap-[11px] cursor-pointer z-[1]"
              onClick={onSearchMenuContainerClick}
            >
              <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
                <img
                  className="w-[23px] h-[23px] relative"
                  alt=""
                  src={search}
                />
              </div>
              <div
                className="flex-1 relative mq450:text-base"
                style={search1Style}
              >
                Search
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start py-0 px-[3px]">
            <div
              className="flex-1 flex flex-row items-start justify-start gap-3 cursor-pointer z-[1]"
              onClick={onMyShelfMenuClick}
            >
              <div className="flex flex-col items-start justify-start pt-[2.5px] px-0 pb-0">
                <img
                  className="w-5 h-5 relative overflow-hidden shrink-0"
                  loading="lazy"
                  alt=""
                  src="/bookshelf.svg"
                />
              </div>
              <div className="flex-1 relative mq450:text-base">My Shelf</div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start py-0 px-0.5">
            <div
              className="flex-1 flex flex-row items-start justify-start gap-3 cursor-pointer z-[1]"
              onClick={onFavouriteMenuContainerClick}
            >
              <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
                <img
                  className="w-[21px] h-[21px] relative overflow-hidden shrink-0"
                  loading="lazy"
                  alt=""
                  src={giveGift}
                />
              </div>
              <div
                className="flex-1 relative shrink-0 mq450:text-base"
                style={contributeStyle}
              >
                Contribute
              </div>
            </div>
          </div>
        </div>
        <div className="w-[138px] flex flex-row items-start justify-start py-0 px-0.5 box-border text-mini">
          <div className="flex-1 flex flex-col items-start justify-start gap-[15px]">
            <div className="self-stretch relative z-[2]">{`About `}</div>
            <div className="self-stretch relative z-[2]">Support</div>
            <div className="relative z-[2]">{`Terms & Condition`}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;

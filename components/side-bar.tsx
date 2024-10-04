import type { NextPage } from "next";
import { useMemo, type CSSProperties, useCallback } from "react";
import { useRouter } from "next/navigation";
import useSuperuserStatus from '@/pages/lib/useSuperuserStatus';

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

  const RedirectHome = useCallback(() => {
    router.push("/main");
  }, [router]);

  const RedirectSearch = useCallback(() => {
    router.push("/search");
  }, [router]);
  const Redirectcontribute = useCallback(() => {
    router.push("/contribute");
  }, [router]);
  const RedirectStats = useCallback(() => {
    router.push("/statistics");
  }, [router]);
  const RedirecMyShelf = useCallback(() => {
    router.push("/myshelf");
  }, [router]);

  const [isSuperuser, loading] = useSuperuserStatus();
  
  return (
    <div
      className={`absolute left-0 h-full w-[306px] border-[#DCD9D9] border-r  flex flex-row items-start justify-start z-[1] text-left text-xl text-gray-200 font-inter`}
      
    >
      <div className="self-stretch flex-1 h-[900px] bg-white overflow-hidden flex flex-col items-center justify-center px-[66px] gap-[99.8px]">
        <div className="flex flex-row items-center justify-center py-0 px-0.5 h-[100px] w-[306px] border-[#DCD9D9] border-b ">
          <h1 className="text-[#FA7C54] font-bold text-18pt">ESTIN VirtLib</h1>
        </div>
        <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-[34px]">
          <div
            className="self-stretch flex flex-row items-start justify-start gap-3 cursor-pointer z-[1] w-[268px] hover:bg-[#F0F0F0]"
            
          >
            <div className="flex flex-col items-start justify-start pt-px px-0 pb-0  ">
              <img
                className="w-[23px] h-[23px] relative overflow-hidden shrink-0 bg"
                loading="lazy"
                alt=""
                src="/heroiconsminihome1.svg"
                onClick={RedirectHome}
              />
            </div>
            <a
              className="[text-decoration:none] text-[#8A8A8A] flex-1 relative mq450:text-base hover:text-[#4D4D4D]"
              
              onClick={RedirectHome}
            >
              Home
            </a>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start py-0 px-px">
            <div
              className="flex-1 flex flex-row items-start justify-start gap-[11px] cursor-pointer z-[1]"
              
            >
              <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
                <img
                  className="w-[23px] h-[23px] relative  "
                  alt=""
                  src={search}
                  onClick={RedirectSearch}
                />
              </div>
              <div
               onClick={RedirectSearch}
                className="flex-1 relative mq450:text-base text-[#8A8A8A] hover:text-[#4D4D4D]"
              >
                Search
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start py-0 px-[3px]">
            <div
              className="flex-1 flex flex-row items-start justify-start gap-3 cursor-pointer z-[1]"

            >
              <div className="flex flex-col items-start justify-start pt-[2.5px] px-0 pb-0">
                <img
                  className="w-5 h-5 relative overflow-hidden shrink-0"
                  loading="lazy"
                  alt=""
                  src="/bookshelf.svg"
                  onClick={RedirecMyShelf}
                />
              </div>
              <div className="flex-1 relative mq450:text-base text-[#8A8A8A] hover:text-[#4D4D4D]" onClick={RedirecMyShelf}>My Shelf</div>
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
                  src="/gift.png"
                  onClick={Redirectcontribute}
                />
              </div>
              <div className="flex-1 relative mq450:text-base text-[#8A8A8A] hover:text-[#4D4D4D]" onClick={Redirectcontribute}>Contribute</div>
            </div>
          </div>
          {isSuperuser === true ? 
          <div className="self-stretch flex flex-row items-start justify-start py-0 px-0.5">
            <div
              className="flex-1 flex flex-row items-start justify-start gap-3 cursor-pointer z-[1]"
              
            >
              <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
                <img
                  className="w-[21px] h-[21px] relative overflow-hidden shrink-0"
                  loading="lazy"
                  alt=""
                  src="/dash.png"
                  onClick={RedirectStats}
                />
              </div>
              <div className="flex-1 relative mq450:text-base text-[#8A8A8A] hover:text-[#4D4D4D]" onClick={RedirectStats}>Dashboard</div>
            </div>
          </div>
          
          : null
          
        }
        </div>
        
      </div>
    </div>
  );
};

export default SideBar;

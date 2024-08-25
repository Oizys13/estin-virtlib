import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";

export type SideBar2Type = {
  className?: string;
};

const SideBar2: NextPage<SideBar2Type> = ({ className = "" }) => {
  const router = useRouter();

  const onHomeMenuContainerClick = useCallback(() => {
    router.push("/home");
  }, [router]);

  const onSearchMenuContainerClick = useCallback(() => {
    router.push("/search");
  }, [router]);

  const onFavouriteMenuContainerClick = useCallback(() => {
    router.push("/contribute");
  }, [router]);

  return (
    <div
      className={`flex-1 rounded-tl-[18px] rounded-tr-none rounded-br-none rounded-bl-3xs bg-white overflow-hidden flex flex-col items-start justify-start pt-[38px] px-[66px] pb-[51px] gap-[99.8px] text-left text-xl text-gray-200 font-inter ${className}`}
    >
      <div className="flex flex-row items-start justify-start py-0 px-0.5">
        <img
          className="h-[74.2px] w-[120px] relative object-cover z-[1]"
          loading="lazy"
          alt=""
          src="/group-3@2x.png"
        />
      </div>
      <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[342.2px] gap-[34px]">
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
          <a className="[text-decoration:none] flex-1 relative text-[inherit] mq450:text-base">
            Home
          </a>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start py-0 px-px">
          <div className="flex-1 flex flex-col items-start justify-start gap-[34px]">
            <div
              className="self-stretch flex flex-row items-start justify-start gap-[11px] cursor-pointer z-[1]"
              onClick={onSearchMenuContainerClick}
            >
              <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
                <img
                  className="w-[23px] h-[23px] relative"
                  alt=""
                  src="/search-1.svg"
                />
              </div>
              <div className="flex-1 relative mq450:text-base">Search</div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start py-0 px-px text-dimgray-600">
              <div className="flex-1 flex flex-row items-start justify-start gap-3">
                <div className="flex flex-col items-start justify-start pt-[2.5px] px-0 pb-0">
                  <img
                    className="w-5 h-5 relative overflow-hidden shrink-0 z-[1]"
                    loading="lazy"
                    alt=""
                    src="/bookshelf1.svg"
                  />
                </div>
                <div className="flex-1 relative z-[1] mq450:text-base">
                  My Shelf
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start py-0 px-px">
              <div
                className="flex-1 flex flex-row items-start justify-start gap-3 cursor-pointer z-[1]"
                onClick={onFavouriteMenuContainerClick}
              >
                <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
                  <img
                    className="w-[21px] h-[21px] relative overflow-hidden shrink-0"
                    loading="lazy"
                    alt=""
                    src="/give-gift.svg"
                  />
                </div>
                <div className="flex-1 relative shrink-0 mq450:text-base">
                  Contribute
                </div>
              </div>
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
  );
};

export default SideBar2;

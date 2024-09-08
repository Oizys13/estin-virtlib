"use client"
import type { NextPage } from "next";
import { useCallback } from "react";
import TopMain1 from "../components/top-main1";
import BookPreviewCard from "../components/book-preview-card";
import { useRouter } from "next/navigation";

const BookPreview: NextPage = () => {
  const router = useRouter();

  const onHomeMenuContainerClick = useCallback(() => {
    router.push("/home");
  }, [router]);

  const onSearchMenuContainerClick = useCallback(() => {
    router.push("/search");
  }, [router]);

  const onMyShelfMenuClick = useCallback(() => {
    router.push("/my-shelf");
  }, [router]);

  const onFavouriteMenuContainerClick = useCallback(() => {
    router.push("/contribute");
  }, [router]);

  return (
    <div className="w-full h-[1080px] relative bg-white leading-[normal] tracking-[normal] text-left text-3xl text-dimgray-600 font-inter mq1300:h-auto mq1300:min-h-[1080]">
      <img
        className="fixed object-cover top-0 left-[-37.3px] w-full h-full"
        alt=""
        src="/bg-vector1.svg"
      />
      <div className="absolute bg-[#F3F3F7] top-[48px] left-[341px] rounded-[5px] w-[1544px] h-[994px]  flex flex-col items-start justify-start max-w-full z-[1] mq1300:h-auto">
            <TopMain1 />
        <div className="self-stretch flex flex-col overflow-y-auto scrollbar-hidden items-start justify-start pt-0 px-0 pb-[216px] box-border relative gap-5 shrink-0 max-w-full">
          <div className="w-full h-[1556px] absolute !m-[0] right-[0px] bottom-[-524px] left-[0px]">
            <div className="absolute top-[0px] left-[0px] rounded-tl-none rounded-tr-[5px] rounded-br-[5px] rounded-bl-none bg-whitesmoke-200 w-full h-full" />
            <img
              className="absolute top-[376.5px] left-[393px] w-[15px] h-[15px] z-[1]"
              loading="lazy"
              alt=""
              src="/vector.svg"
            />
            <img
              className="absolute top-[403.5px] left-[393px] w-[15px] h-[15px] z-[1]"
              alt=""
              src="/vector.svg"
            />
            <img
              className="absolute top-[431.5px] left-[393px] w-[15px] h-[15px] z-[1]"
              alt=""
              src="/vector.svg"
            />
          </div>
          <BookPreviewCard />
        </div>
        
      </div>
      <div className="absolute top-[48px] left-[35px] w-[306px] h-[994px] flex flex-row items-start justify-start z-[1] text-xl text-gray-200">
        <div className="self-stretch flex-1 rounded-tl-[18px] rounded-tr-none rounded-br-none rounded-bl-[18px] bg-white overflow-hidden flex flex-col items-start justify-start pt-[38px] px-[66px] pb-[51px] gap-[99.8px]">
          <div className="flex flex-row items-start justify-start py-0 px-0.5">
            <img
              className="h-[74.2px] w-[120px] relative object-cover z-[1]"
              loading="lazy"
              alt=""
              src="/group-3@2x.png"
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
              <a className="[text-decoration:none] flex-1 relative text-[inherit] mq450:text-base">
                Home
              </a>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start py-0 px-px text-dimgray-600">
              <div
                className="flex-1 flex flex-row items-start justify-start gap-[11px] cursor-pointer z-[1]"
                onClick={onSearchMenuContainerClick}
              >
                <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
                  <img
                    className="w-[23px] h-[23px] relative"
                    alt=""
                    src="/search-11.svg"
                  />
                </div>
                <h2 className="m-0 flex-1 relative text-inherit font-normal font-[inherit] mq450:text-base">
                  Search
                </h2>
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
                <h2 className="m-0 flex-1 relative text-inherit font-normal font-[inherit] mq450:text-base">
                  My Shelf
                </h2>
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
                    src="/give-gift.svg"
                  />
                </div>
                <h2 className="m-0 flex-1 relative text-inherit font-normal font-[inherit] shrink-0 mq450:text-base">
                  Contribute
                </h2>
              </div>
            </div>
          </div>
          <div className="w-[138px] flex flex-row items-start justify-start py-0 px-0.5 box-border text-mini">
            <div className="flex-1 flex flex-col items-start justify-start gap-[15px]">
              <h3 className="m-0 self-stretch relative text-inherit font-normal font-[inherit] z-[2]">{`About `}</h3>
              <h3 className="m-0 self-stretch relative text-inherit font-normal font-[inherit] z-[2]">
                Support
              </h3>
              <h3 className="m-0 relative text-inherit font-normal font-[inherit] z-[2]">{`Terms & Condition`}</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookPreview;

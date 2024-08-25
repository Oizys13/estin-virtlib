import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import BookItems from "./book-items";
import BookItemFormats from "./book-item-formats";
import BookItemLocations from "./book-item-locations";
import BookInformation from "./book-information";

export type BookDisplayType = {
  className?: string;
};

const BookDisplay: NextPage<BookDisplayType> = ({ className = "" }) => {
  const router = useRouter();

  const onGroupButtonClick = useCallback(() => {
    router.push("/book-preview");
  }, [router]);

  const onBackButtonContainerClick = useCallback(() => {
    router.push("/home");
  }, [router]);

  return (
    <div
      className={`self-stretch flex flex-row items-start justify-start py-0 pl-[41px] pr-[46px] box-border max-w-full text-left text-xl text-dimgray-600 font-inter ${className}`}
    >
      <div className="flex-1 flex flex-col items-start justify-start gap-[23px] max-w-full">
        <div className="w-[289px] flex flex-col items-start justify-start pt-0 px-0 pb-[21px] box-border gap-[15px] text-mini">
          <div
            className="w-[180px] flex flex-row items-start justify-start gap-[9px] cursor-pointer z-[1]"
            onClick={onBackButtonContainerClick}
          >
            <img
              className="h-5 w-5 relative overflow-hidden shrink-0 min-h-[20px]"
              loading="lazy"
              alt=""
              src="/heroiconsoutlinearrowsmallleft1.svg"
            />
            <div className="flex-1 relative leading-[128.52%]">Back</div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start py-0 pl-[3px] pr-0 text-6xl">
            <h2 className="m-0 flex-1 relative text-inherit leading-[33px] font-bold font-[inherit] z-[1] mq450:text-xl mq450:leading-[26px]">
              Your Favourite
            </h2>
          </div>
        </div>
        <div className="w-[1164px] flex flex-row items-start justify-start py-0 px-[3px] box-border max-w-full">
          <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-5 mq1125:flex-wrap">
            <div className="w-[90px] relative leading-[29px] font-medium inline-block shrink-0 z-[1] mq450:text-base mq450:leading-[21px]">
              Title
            </div>
            <div className="flex flex-row items-start justify-start gap-[105px] max-w-full mq800:flex-wrap">
              <div className="w-[296px] flex flex-row items-start justify-start py-0 pl-0 pr-[73px] box-border gap-[61px]">
                <div className="relative leading-[29px] font-medium inline-block min-w-[72px] z-[1] mq450:text-base mq450:leading-[21px]">
                  Ratings
                </div>
                <div className="relative leading-[29px] font-medium inline-block min-w-[90px] z-[1] mq450:text-base mq450:leading-[21px]">
                  Category
                </div>
              </div>
              <div className="relative leading-[29px] font-medium inline-block min-w-[105px] z-[1] mq450:text-base mq450:leading-[21px]">
                Availability
              </div>
              <div className="w-[105px] relative leading-[26px] font-medium inline-block shrink-0 z-[1] mq450:text-base mq450:leading-[21px]">
                Status
              </div>
            </div>
          </div>
        </div>
        <BookItems onGroupButtonClick={onGroupButtonClick} />
        <div className="self-stretch flex flex-row items-start justify-start py-0 pl-[3px] pr-0 box-border max-w-full">
          <div className="flex-1 rounded-3xs bg-white flex flex-row items-start justify-between py-[13px] pl-[23px] pr-[34px] box-border max-w-full gap-5 z-[1] mq1300:flex-wrap">
            <div className="h-[125px] w-[1454px] relative rounded-3xs bg-white hidden max-w-full" />
            <div className="w-[329px] flex flex-row items-center justify-start gap-[47px] max-w-full z-[1] mq450:flex-wrap">
              <img
                className="h-[99px] w-[75px] relative rounded-8xs object-cover"
                alt=""
                src="/rectangle-16-2@2x.png"
              />
              <div className="flex-1 flex flex-col items-start justify-start py-5 px-0 box-border min-w-[135px]">
                <div className="self-stretch flex flex-col items-start justify-start gap-2">
                  <div className="self-stretch relative leading-[26px] mq450:text-base mq450:leading-[21px]">
                    Rich Dad Poor Dad
                  </div>
                  <div className="w-[202px] h-3.5 relative text-mini leading-[128.52%] inline-block shrink-0">
                    Robert T.Kiyosaki, 1997
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[312px] flex flex-col items-start justify-start pt-9 px-0 pb-0 box-border">
              <div className="self-stretch flex flex-row items-start justify-between gap-5 mq450:flex-wrap">
                <div className="w-[60px] relative leading-[27px] inline-block shrink-0 z-[1]">
                  <span>4.5</span>
                  <span className="text-mini text-darkgray-200">/5</span>
                </div>
                <div className="w-[180px] relative leading-[27px] inline-block shrink-0 z-[1] mq450:text-base mq450:leading-[21px]">
                  Financial MGMT
                </div>
              </div>
            </div>
            <BookItemFormats propWidth="119px" />
            <BookItemLocations propWidth="98px" />
            <BookInformation />
          </div>
        </div>
        <BookItems />
      </div>
    </div>
  );
};

export default BookDisplay;

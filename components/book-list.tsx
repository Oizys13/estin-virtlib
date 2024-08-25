import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import BookItemFormats from "./book-item-formats";
import BookItemLocations from "./book-item-locations";
import BookInformation from "./book-information";
import GroupComponent1 from "./group-component1";
import GroupComponent2 from "./group-component2";
import GroupComponent from "./group-component";

export type BookListType = {
  className?: string;
};

const BookList: NextPage<BookListType> = ({ className = "" }) => {
  const router = useRouter();

  const onGroupButtonClick = useCallback(() => {
    router.push("/book-preview");
  }, [router]);

  return (
    <div
      className={`self-stretch flex flex-row items-start justify-start py-0 pl-11 pr-[46px] box-border max-w-full text-left text-xl text-dimgray-600 font-inter mq1300:pl-[22px] mq1300:pr-[23px] mq1300:box-border ${className}`}
    >
      <div className="flex-1 flex flex-col items-end justify-start gap-[23px] max-w-full">
        <div className="w-[1308px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
          <div className="w-[716px] flex flex-row items-start justify-between gap-5 max-w-full mq800:flex-wrap">
            <div className="w-[296px] flex flex-row items-start justify-start py-0 pl-0 pr-[73px] box-border gap-[61px] mq450:gap-[30px] mq450:pr-5 mq450:box-border">
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
        <div className="self-stretch rounded-3xs bg-white flex flex-row items-start justify-between py-[13px] pl-[23px] pr-[34px] box-border relative max-w-full gap-5 z-[1] mq1300:flex-wrap mq1300:justify-center">
          <div className="h-[125px] w-[1454px] relative rounded-3xs bg-white hidden max-w-full z-[0]" />
          <div className="w-[347px] flex flex-col items-start justify-start py-0 pl-0 pr-[18px] box-border max-w-full">
            <div className="self-stretch flex flex-row items-center justify-start gap-[47px] z-[1] mq450:flex-wrap mq450:gap-[23px]">
              <img
                className="h-[99px] w-[75px] relative rounded-8xs object-cover"
                loading="lazy"
                alt=""
                src="/rectangle-16@2x.png"
              />
              <div className="flex-1 flex flex-col items-start justify-start gap-2.5 min-w-[135px]">
                <div className="self-stretch flex flex-col items-start justify-start gap-2">
                  <div className="relative leading-[26px] mq450:text-base mq450:leading-[21px]">{`Don’t Make Me Think `}</div>
                  <div className="w-[140px] h-3.5 relative text-mini leading-[128.52%] inline-block shrink-0">
                    Steve Krug, 2000
                  </div>
                </div>
                <div className="w-[140px] relative text-3xs leading-[14px] inline-block">
                  Second Edition
                </div>
              </div>
            </div>
          </div>
          <div className="w-[60px] flex flex-col items-start justify-start pt-9 px-0 pb-0 box-border">
            <div className="self-stretch relative leading-[27px] z-[1]">
              <span>4.5</span>
              <span className="text-mini text-darkgray-200">/5</span>
            </div>
          </div>
          <div className="w-[198px] flex flex-col items-start justify-start pt-[21px] pb-0 pl-0 pr-[18px] box-border">
            <div className="self-stretch flex flex-col items-start justify-start gap-[11px]">
              <div className="relative leading-[27px] z-[1] mq450:text-base mq450:leading-[21px]">
                Computer Science
              </div>
              <div className="self-stretch relative text-mini leading-[128.52%] z-[1]">
                UX Design
              </div>
            </div>
          </div>
          <BookItemFormats />
          <BookItemLocations />
          <BookInformation onGroupButtonClick={onGroupButtonClick} />
          <div className="w-[170px] !m-[0] absolute top-[-114px] left-[0px] shadow-[0px_0px_4px_rgba(0,_0,_0,_0.25)] rounded-3xs bg-white border-gainsboro-200 border-[1px] border-solid box-border flex flex-col items-start justify-start py-[19px] pl-[17px] pr-[7px] gap-[25px] z-[2]">
            <div className="w-[90px] relative leading-[29px] font-medium hidden mq450:text-base mq450:leading-[21px]">
              Title
            </div>
            <div className="w-[170px] h-[272px] relative shadow-[0px_0px_4px_rgba(0,_0,_0,_0.25)] rounded-3xs bg-white border-gainsboro-200 border-[1px] border-solid box-border hidden" />
            <div className="relative leading-[26px] inline-block min-w-[118px] z-[1] mq450:text-base mq450:leading-[21px]">
              Engineering
            </div>
            <div className="w-[118px] relative leading-[26px] inline-block z-[1] mq450:text-base mq450:leading-[21px]">
              Medical
            </div>
            <div className="relative leading-[26px] z-[1] mq450:text-base mq450:leading-[21px]">{`Arts & Science`}</div>
            <div className="self-stretch relative leading-[26px] z-[1] mq450:text-base mq450:leading-[21px]">
              Architecture
            </div>
            <div className="self-stretch relative leading-[26px] z-[1] mq450:text-base mq450:leading-[21px]">
              Law
            </div>
          </div>
        </div>
        <GroupComponent1 />
        <GroupComponent2 />
        <GroupComponent onGroupButtonClick={onGroupButtonClick} />
        <GroupComponent onGroupButtonClick={onGroupButtonClick} />
      </div>
    </div>
  );
};

export default BookList;

import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import GroupComponent from "./group-component";
import GroupComponent1 from "./group-component1";
import GroupComponent2 from "./group-component2";

export type BooksAreaType = {
  className?: string;
};

const BooksArea: NextPage<BooksAreaType> = ({ className = "" }) => {
  const router = useRouter();

  const onGroupButtonClick = useCallback(() => {
    router.push("/book-preview");
  }, [router]);

  return (
    <div
      className={`self-stretch flex flex-row items-start justify-start py-0 pl-11 pr-[46px] box-border max-w-full text-left text-xl text-dimgray-600 font-inter ${className}`}
    >
      <div className="flex-1 flex flex-col items-start justify-start gap-[23px] max-w-full">
        <div className="w-[1158px] flex flex-row items-start justify-between max-w-full gap-5 mq1125:flex-wrap">
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
        <GroupComponent onGroupButtonClick={onGroupButtonClick} />
        <GroupComponent1 />
        <GroupComponent2 />
        <GroupComponent onGroupButtonClick={onGroupButtonClick} />
        <GroupComponent onGroupButtonClick={onGroupButtonClick} />
      </div>
    </div>
  );
};

export default BooksArea;

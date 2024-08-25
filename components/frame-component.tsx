import type { NextPage } from "next";
import { useCallback } from "react";
import TopMain1 from "./top-main1";
import { useRouter } from "next/router";

export type FrameComponentType = {
  className?: string;
};

const FrameComponent: NextPage<FrameComponentType> = ({ className = "" }) => {
  const router = useRouter();

  const onBackButtonContainerClick = useCallback(() => {
    router.push("/book-preview");
  }, [router]);

  return (
    <div
      className={`self-stretch flex flex-col items-start justify-start max-w-full ${className}`}
    >
      <TopMain1
        polygonIconTop="unset"
        polygonIconPosition="unset"
        polygonIconAlignSelf="stretch"
        polygonIconLeft="unset"
        polygonIconFlex="unset"
        searchLabelOverflow="hidden"
      />
      <div className="self-stretch h-24 rounded-t-none rounded-b-3xs flex flex-row items-start justify-start pt-0 px-0 pb-0 box-border relative max-w-full z-[1]">
        <div className="h-[878px] flex-1 shadow-[0px_-1px_0px_#000] bg-dimgray-600 flex flex-row items-start justify-start py-[34px] px-[18px] box-border max-w-full">
          <div className="h-[878px] w-[1544px] relative shadow-[0px_-1px_0px_#000] bg-dimgray-600 hidden max-w-full" />
          <div
            className="w-[200px] flex flex-row items-start justify-start py-0 pl-0 pr-5 box-border gap-[9px] cursor-pointer z-[1]"
            onClick={onBackButtonContainerClick}
          >
            <img
              className="h-5 w-5 relative overflow-hidden shrink-0 min-h-[20px]"
              alt=""
              src="/heroiconsoutlinearrowsmallleft.svg"
            />
            <input
              className="w-[calc(100%_-_40px)] [border:none] [outline:none] font-inter text-mini bg-[transparent] h-[19px] flex-1 relative leading-[128.52%] text-white text-left inline-block min-w-[91px] p-0"
              placeholder="Back"
              type="text"
            />
          </div>
        </div>
        <img
          className="h-[715px] w-[466px] absolute !m-[0] bottom-[-660px] left-[calc(50%_-_233px)] object-cover z-[2]"
          alt=""
          src="/screenshot-20230314-at-1013-1@2x.png"
        />
      </div>
    </div>
  );
};

export default FrameComponent;

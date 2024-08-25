
import type { NextPage } from "next";
import TopMain1 from "../components/top-main1";
import GroupComponent5 from "../components/group-component5";
import SideBar1 from "../components/side-bar1";

const Account: NextPage = () => {
  return (
    <div className="w-full h-[1080px] relative bg-white leading-[normal] tracking-[normal] mq800:h-auto mq800:min-h-[1080]">
      <div className="absolute top-[48px] left-[341px] rounded-3xs bg-whitesmoke-200 w-[1544px] overflow-y-auto flex flex-col items-start justify-start pt-0 px-0 pb-[460px] box-border gap-1 max-w-full z-[1]">
        <div className="self-stretch h-[994px] relative rounded-tl-none rounded-tr-3xs rounded-br-3xs rounded-bl-none bg-whitesmoke-200 shrink-0 hidden" />
        <TopMain1
          polygonIconTop="0"
          polygonIconPosition="sticky"
          polygonIconAlignSelf="stretch"
          polygonIconLeft="unset"
          polygonIconFlex="unset"
          searchLabelOverflow="unset"
        />
        <div className="w-[1224px] flex flex-row items-start justify-start py-0 px-11 box-border max-w-full">
          <GroupComponent5 />
        </div>
      </div>
      <div className="absolute top-[0px] left-[0px] w-full h-full">
        <img
          className="absolute top-[-66.3px] left-[-37.3px] w-[1994.3px] h-[1143.5px]"
          alt=""
          src="/bg-vector1.svg"
        />
        <SideBar1
          group3="/group-3@2x.png"
          propTextDecoration="unset"
          propTextDecoration1="unset"
        />
      </div>
    </div>
  );
};

export default Account;

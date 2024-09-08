"use client";
import type { NextPage } from "next";

import { useCallback } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import TopMain1 from "@/components/top-main1";
import SideBar from "@/components/side-bar";
import Carousel from "@/components/carousel";
import NewsNewArrivals from "@/components/news-new-arrivals";
import BookItemContainer from "@/components/book-item-container";

const HomePage: NextPage = () => {
  const searchParams = useSearchParams();
  const email = searchParams?.get("email");
  const name = searchParams?.get("username");

  return (
        <div className="overflow-y-auto scrollbar-hidden ">
          <div className="flex flex-row">

            <Carousel />
            <NewsNewArrivals />
          </div>
        <div className="flex flex-col h-[1000px] whitespace-nowrap ">
          <span className="text-26pt font-[inter] font-medium text-[#4D4D4D] pl-11 py-[20px]">Good Morning</span>

          <div className="flex flex-row gap-[35px] pl-11 overflow-x-auto whitespace-nowrap scrollbar-hidden min-h-[300px] w-[1530px]">

            <BookItemContainer image="rectangle-12-35@2x.png" title="Don't Make Me Think" year="2000" author="Youcef Meh" />
            <BookItemContainer image="rectangle-12-35@2x.png" title="Don't Make Me Think" year="2000" author="Youcef Meh" />
            <BookItemContainer image="rectangle-12-35@2x.png" title="Don't Make Me Think" year="2000" author="Youcef Meh" />
            <BookItemContainer image="rectangle-12-35@2x.png" title="Don't Make Me Think" year="2000" author="Youcef Meh" />
            <BookItemContainer image="rectangle-12-35@2x.png" title="Don't Make Me Think" year="2000" author="Youcef Meh" />
            <BookItemContainer image="rectangle-12-35@2x.png" title="Don't Make Me Think" year="2000" author="Youcef Meh" />
            <BookItemContainer image="rectangle-12-35@2x.png" title="Don't Make Me Think" year="2000" author="Youcef Meh" />
            <BookItemContainer image="rectangle-12-35@2x.png" title="Don't Make Me Think" year="2000" author="Youcef Meh" />
            <BookItemContainer image="rectangle-12-35@2x.png" title="Don't Make Me Think" year="2000" author="Youcef Meh" />
            <BookItemContainer image="rectangle-12-35@2x.png" title="Don't Make Me Think" year="2000" author="Youcef Meh" />
            <BookItemContainer image="rectangle-12-35@2x.png" title="Don't Make Me Think" year="2000" author="Youcef Meh" />


          </div>

          <span className="text-26pt font-[inter] font-medium text-[#4D4D4D] pl-[45px] py-[20px]">Good Morning</span>

          <div className="flex flex-row gap-[35px] pl-[45px] overflow-x-auto whitespace-nowrap scrollbar-hidden min-h-[300px] w-[1530px]">

            <BookItemContainer image="rectangle-12-35@2x.png" title="Don't Make Me Think" year="2000" author="Youcef Meh" />
            <BookItemContainer image="rectangle-12-35@2x.png" title="Don't Make Me Think" year="2000" author="Youcef Meh" />
            <BookItemContainer image="rectangle-12-35@2x.png" title="Don't Make Me Think" year="2000" author="Youcef Meh" />
            <BookItemContainer image="rectangle-12-35@2x.png" title="Don't Make Me Think" year="2000" author="Youcef Meh" />
            <BookItemContainer image="rectangle-12-35@2x.png" title="Don't Make Me Think" year="2000" author="Youcef Meh" />
            <BookItemContainer image="rectangle-12-35@2x.png" title="Don't Make Me Think" year="2000" author="Youcef Meh" />
            <BookItemContainer image="rectangle-12-35@2x.png" title="Don't Make Me Think" year="2000" author="Youcef Meh" />
            <BookItemContainer image="rectangle-12-35@2x.png" title="Don't Make Me Think" year="2000" author="Youcef Meh" />
            <BookItemContainer image="rectangle-12-35@2x.png" title="Don't Make Me Think" year="2000" author="Youcef Meh" />
            <BookItemContainer image="rectangle-12-35@2x.png" title="Don't Make Me Think" year="2000" author="Youcef Meh" />
            <BookItemContainer image="rectangle-12-35@2x.png" title="Don't Make Me Think" year="2000" author="Youcef Meh" />


          </div>
          <span className="text-26pt font-[inter] font-medium text-[#4D4D4D] pl-[45px] py-[20px]">Good Morning</span>

          <div className="flex flex-row gap-[35px] pl-[45px] overflow-x-auto whitespace-nowrap scrollbar-hidden min-h-[300px] w-[1530px]">

            <BookItemContainer image="rectangle-12-35@2x.png" title="Don't Make Me Think" year="2000" author="Youcef Meh" />
            <BookItemContainer image="rectangle-12-35@2x.png" title="Don't Make Me Think" year="2000" author="Youcef Meh" />
            <BookItemContainer image="rectangle-12-35@2x.png" title="Don't Make Me Think" year="2000" author="Youcef Meh" />
            <BookItemContainer image="rectangle-12-35@2x.png" title="Don't Make Me Think" year="2000" author="Youcef Meh" />
            <BookItemContainer image="rectangle-12-35@2x.png" title="Don't Make Me Think" year="2000" author="Youcef Meh" />
            <BookItemContainer image="rectangle-12-35@2x.png" title="Don't Make Me Think" year="2000" author="Youcef Meh" />
            <BookItemContainer image="rectangle-12-35@2x.png" title="Don't Make Me Think" year="2000" author="Youcef Meh" />
            <BookItemContainer image="rectangle-12-35@2x.png" title="Don't Make Me Think" year="2000" author="Youcef Meh" />
            <BookItemContainer image="rectangle-12-35@2x.png" title="Don't Make Me Think" year="2000" author="Youcef Meh" />
            <BookItemContainer image="rectangle-12-35@2x.png" title="Don't Make Me Think" year="2000" author="Youcef Meh" />
            <BookItemContainer image="rectangle-12-35@2x.png" title="Don't Make Me Think" year="2000" author="Youcef Meh" />


          </div>
          </div>
</div>
      );
};

      export default HomePage;

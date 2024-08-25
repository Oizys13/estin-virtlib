"use client"
import type { NextPage } from "next";

import { useCallback } from "react";
import { useRouter } from "next/navigation";
import BookItemContainer from "../components/book-item-container";
import TopMain from "../components/top-main";
import NewsNewArrivals from "../components/news-new-arrivals";
import BackgroundContainer from "../components/background-container";

const HomePage: NextPage = () => {
  const router = useRouter();

  const onBookItemContainerClick = useCallback(() => {
    router.push("/book-preview");
  }, [router]);

  const onGroupContainerClick = useCallback(() => {
    router.push("/home-search-all");
  }, [router]);

  return (
    <div className="w-full relative bg-white flex flex-col items-start justify-start pt-12 px-[35px] pb-[38px] box-border leading-[normal] tracking-[normal]">
      <main className="self-stretch flex flex-row items-start justify-end max-w-full">
        <section className="h-[994px] w-[1544px] rounded-tl-none rounded-tr-3xs rounded-b-none overflow-y-auto shrink-0 flex flex-col items-start justify-end pt-[527px] pb-[207px] pl-[9px] pr-0 box-border relative gap-[108px] max-w-full z-[1] text-left text-3xs text-dimgray-600 font-inter mq450:gap-[27px] mq800:h-auto mq800:gap-[54px] mq800:pt-[223px] mq800:pb-[88px] mq800:box-border mq1100:pt-[343px] mq1100:pb-[135px] mq1100:box-border">
          <div className="w-[1535px] h-[260px] overflow-x-auto shrink-0 flex flex-row items-start justify-start gap-[39px] max-w-full z-[1] mq800:gap-[19px]">
            <BookItemContainer
              onBookItemContainerClick={onBookItemContainerClick}
              rectangle12="/rectangle-12@2x.png"
              dontMakeMeThink="Don’t Make Me think"
              steveKrug2000="Steve Krug, 2000"
            />
            <div className="self-stretch w-40 rounded-3xs bg-white overflow-hidden shrink-0 flex flex-col items-start justify-start pt-[15px] px-[15px] pb-[13px] box-border gap-[11.2px]">
              <img
                className="self-stretch flex-1 relative rounded-8xs max-w-full overflow-hidden max-h-full object-cover"
                loading="lazy"
                alt=""
                src="/rectangle-12-1@2x.png"
              />
              <div className="flex flex-col items-start justify-start gap-[5px]">
                <div className="relative text-xs leading-[128.52%]">
                  The Design of Every..
                </div>
                <div className="w-[101px] relative leading-[14px] inline-block">
                  Don Norman, 1988
                </div>
                <div className="w-[101px] relative leading-[128.52%] inline-block">
                  <span>4.5</span>
                  <span className="text-darkgray-200">/5</span>
                </div>
              </div>
            </div>
            <div className="self-stretch w-40 rounded-3xs bg-white overflow-hidden shrink-0 flex flex-col items-start justify-start pt-[15px] px-[15px] pb-[13px] box-border gap-[11.2px]">
              <img
                className="self-stretch flex-1 relative rounded-8xs max-w-full overflow-hidden max-h-full object-cover"
                loading="lazy"
                alt=""
                src="/rectangle-12-2@2x.png"
              />
              <div className="flex flex-col items-start justify-start gap-[5px]">
                <div className="relative text-xs leading-[128.52%]">
                  Sprint : How to solve...
                </div>
                <div className="w-[101px] relative leading-[14px] inline-block">
                  Jake Knapp, 2000
                </div>
                <div className="w-[101px] relative leading-[128.52%] inline-block">
                  <span>4.5</span>
                  <span className="text-darkgray-200">/5</span>
                </div>
              </div>
            </div>
            <div className="self-stretch w-40 rounded-3xs bg-white overflow-hidden shrink-0 flex flex-col items-start justify-start pt-[15px] px-[15px] pb-[13px] box-border gap-[11.2px]">
              <img
                className="self-stretch flex-1 relative rounded-8xs max-w-full overflow-hidden max-h-full object-cover"
                alt=""
                src="/rectangle-12-3@2x.png"
              />
              <div className="flex flex-col items-start justify-start gap-[5px]">
                <div className="relative text-xs leading-[128.52%]">
                  Learn UX : Design Gr...
                </div>
                <div className="w-[101px] relative leading-[14px] inline-block">
                  Jeff Gothelf, 2016
                </div>
                <div className="w-[101px] relative leading-[128.52%] inline-block">
                  <span>4.5</span>
                  <span className="text-darkgray-200">/5</span>
                </div>
              </div>
            </div>
            <div className="self-stretch w-40 rounded-3xs bg-white overflow-hidden shrink-0 flex flex-col items-start justify-start pt-[15px] px-[15px] pb-[13px] box-border gap-[11.2px]">
              <img
                className="self-stretch flex-1 relative rounded-8xs max-w-full overflow-hidden max-h-full object-cover"
                alt=""
                src="/rectangle-12-4@2x.png"
              />
              <div className="self-stretch flex flex-col items-start justify-start gap-[5px]">
                <div className="self-stretch relative text-xs leading-[128.52%]">
                  The Road to React
                </div>
                <div className="w-[101px] relative leading-[14px] inline-block">
                  Steve Krug, 2000
                </div>
                <div className="w-[101px] relative leading-[128.52%] inline-block">
                  <span>4.5</span>
                  <span className="text-darkgray-200">/5</span>
                </div>
              </div>
            </div>
            <div className="self-stretch w-40 rounded-3xs bg-white overflow-hidden shrink-0 flex flex-col items-start justify-start pt-[15px] px-[15px] pb-[13px] box-border gap-[11.2px]">
              <img
                className="self-stretch flex-1 relative rounded-8xs max-w-full overflow-hidden max-h-full object-cover"
                alt=""
                src="/rectangle-12-5@2x.png"
              />
              <div className="self-stretch flex flex-col items-start justify-start gap-[5px]">
                <div className="self-stretch relative text-xs leading-[128.52%]">
                  Rich Dad Poor Dad
                </div>
                <div className="self-stretch relative leading-[14px]">
                  Robert T.Kiyosaki, 1997
                </div>
                <div className="w-[101px] relative leading-[128.52%] inline-block">
                  <span>5</span>
                  <span className="text-darkgray-200">/5</span>
                </div>
              </div>
            </div>
            <div className="self-stretch w-40 rounded-3xs bg-white overflow-hidden shrink-0 flex flex-col items-start justify-start pt-[15px] px-[15px] pb-[13px] box-border gap-[11.2px]">
              <img
                className="self-stretch flex-1 relative rounded-8xs max-w-full overflow-hidden max-h-full object-cover"
                loading="lazy"
                alt=""
                src="/rectangle-12-6@2x.png"
              />
              <div className="flex flex-col items-start justify-start gap-[5px]">
                <div className="relative text-xs leading-[128.52%]">
                  Harry Potter and The...
                </div>
                <div className="w-[101px] relative leading-[14px] inline-block">
                  J.K. Rowling, 2002
                </div>
                <div className="w-[101px] relative leading-[128.52%] inline-block">
                  <span>4.9</span>
                  <span className="text-darkgray-200">/5</span>
                </div>
              </div>
            </div>
            <div className="self-stretch w-40 rounded-3xs bg-white overflow-hidden shrink-0 flex flex-col items-start justify-start pt-[15px] px-[15px] pb-3 box-border gap-[11.2px]">
              <img
                className="self-stretch flex-1 relative rounded-8xs max-w-full overflow-hidden max-h-full object-cover"
                loading="lazy"
                alt=""
                src="/rectangle-12-7@2x.png"
              />
              <div className="flex flex-col items-start justify-start gap-[5px]">
                <div className="w-[130px] relative text-xs leading-[128.52%] inline-block">
                  You Don’t Know JS: S..
                </div>
                <div className="relative leading-[14px] inline-block min-w-[101px]">
                  Kyle Simpson, 2014
                </div>
                <div className="w-[101px] relative leading-[128.52%] inline-block">
                  <span>4.9</span>
                  <span className="text-darkgray-200">/5</span>
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch h-[137px] shrink-0 flex flex-col items-start justify-start py-0 px-0 box-border gap-[53px] max-w-full text-6xl mq800:h-auto mq800:gap-[26px]">
            <div className="w-[1535px] h-[260px] overflow-x-auto shrink-0 flex flex-row items-start justify-start gap-[39px] max-w-full z-[1] text-3xs mq800:gap-[19px]">
              <BookItemContainer
                dontMakeMeWidth="160px"
                rectangle12="/rectangle-12@2x.png"
                dontMakeMeThink="Don’t Make Me think"
                spanHeight="14px"
                spanDisplay="inline-block"
                steveKrug2000="Steve Krug, 2000"
                propHeight="14px"
                propHeight1="11px"
              />
              <div className="self-stretch w-40 rounded-3xs bg-white overflow-hidden shrink-0 flex flex-col items-start justify-start pt-[15px] px-[15px] pb-[13px] box-border gap-[11.2px]">
                <img
                  className="self-stretch flex-1 relative rounded-8xs max-w-full overflow-hidden max-h-full object-cover"
                  loading="lazy"
                  alt=""
                  src="/rectangle-12-1@2x.png"
                />
                <div className="self-stretch flex flex-col items-start justify-start gap-[5px]">
                  <div className="self-stretch h-3.5 relative text-xs leading-[128.52%] inline-block shrink-0">
                    The Design of Every..
                  </div>
                  <div className="w-[101px] h-3.5 relative leading-[128.52%] inline-block shrink-0">
                    Don Norman, 1988
                  </div>
                  <div className="w-[101px] h-[11px] relative leading-[128.52%] inline-block shrink-0">
                    <span>4.5</span>
                    <span className="text-darkgray-200">/5</span>
                  </div>
                </div>
              </div>
              <div className="self-stretch w-40 rounded-3xs bg-white overflow-hidden shrink-0 flex flex-col items-start justify-start pt-[15px] px-[15px] pb-[13px] box-border gap-[11.2px]">
                <img
                  className="self-stretch flex-1 relative rounded-8xs max-w-full overflow-hidden max-h-full object-cover"
                  loading="lazy"
                  alt=""
                  src="/rectangle-12-2@2x.png"
                />
                <div className="self-stretch flex flex-col items-start justify-start gap-[5px]">
                  <div className="self-stretch h-3.5 relative text-xs leading-[128.52%] inline-block shrink-0">
                    Sprint : How to solve...
                  </div>
                  <div className="w-[101px] h-3.5 relative leading-[128.52%] inline-block shrink-0">
                    Jake Knapp, 2000
                  </div>
                  <div className="w-[101px] h-[11px] relative leading-[128.52%] inline-block shrink-0">
                    <span>4.5</span>
                    <span className="text-darkgray-200">/5</span>
                  </div>
                </div>
              </div>
              <div className="self-stretch w-40 rounded-3xs bg-white overflow-hidden shrink-0 flex flex-col items-start justify-start pt-[15px] px-[15px] pb-[13px] box-border gap-[11.2px]">
                <img
                  className="self-stretch flex-1 relative rounded-8xs max-w-full overflow-hidden max-h-full object-cover"
                  loading="lazy"
                  alt=""
                  src="/rectangle-12-3@2x.png"
                />
                <div className="self-stretch flex flex-col items-start justify-start gap-[5px]">
                  <div className="self-stretch h-3.5 relative text-xs leading-[128.52%] inline-block shrink-0">
                    Learn UX : Design Gr...
                  </div>
                  <div className="w-[101px] h-3.5 relative leading-[128.52%] inline-block shrink-0">
                    Jeff Gothelf, 2016
                  </div>
                  <div className="w-[101px] h-[11px] relative leading-[128.52%] inline-block shrink-0">
                    <span>4.5</span>
                    <span className="text-darkgray-200">/5</span>
                  </div>
                </div>
              </div>
              <div className="self-stretch w-40 rounded-3xs bg-white overflow-hidden shrink-0 flex flex-col items-start justify-start pt-[15px] px-[15px] pb-[13px] box-border gap-[11.2px]">
                <img
                  className="self-stretch flex-1 relative rounded-8xs max-w-full overflow-hidden max-h-full object-cover"
                  loading="lazy"
                  alt=""
                  src="/rectangle-12-4@2x.png"
                />
                <div className="self-stretch flex flex-col items-start justify-start gap-[5px]">
                  <div className="self-stretch h-3.5 relative text-xs leading-[128.52%] inline-block shrink-0">
                    The Road to React
                  </div>
                  <div className="w-[101px] h-3.5 relative leading-[128.52%] inline-block shrink-0">
                    Steve Krug, 2000
                  </div>
                  <div className="w-[101px] h-[11px] relative leading-[128.52%] inline-block shrink-0">
                    <span>4.5</span>
                    <span className="text-darkgray-200">/5</span>
                  </div>
                </div>
              </div>
              <div className="self-stretch w-40 rounded-3xs bg-white overflow-hidden shrink-0 flex flex-col items-start justify-start pt-[15px] px-[15px] pb-[13px] box-border gap-[11.2px]">
                <img
                  className="self-stretch flex-1 relative rounded-8xs max-w-full overflow-hidden max-h-full object-cover"
                  loading="lazy"
                  alt=""
                  src="/rectangle-12-5@2x.png"
                />
                <div className="self-stretch flex flex-col items-start justify-start gap-[5px]">
                  <div className="self-stretch h-3.5 relative text-xs leading-[128.52%] inline-block shrink-0">
                    Rich Dad Poor Dad
                  </div>
                  <div className="self-stretch h-3.5 relative leading-[128.52%] inline-block shrink-0">
                    Robert T.Kiyosaki, 1997
                  </div>
                  <div className="w-[101px] h-[11px] relative leading-[128.52%] inline-block shrink-0">
                    <span>5</span>
                    <span className="text-darkgray-200">/5</span>
                  </div>
                </div>
              </div>
              <div className="self-stretch w-40 rounded-3xs bg-white overflow-hidden shrink-0 flex flex-col items-start justify-start pt-[15px] px-[15px] pb-[13px] box-border gap-[11.2px]">
                <img
                  className="self-stretch flex-1 relative rounded-8xs max-w-full overflow-hidden max-h-full object-cover"
                  loading="lazy"
                  alt=""
                  src="/rectangle-12-6@2x.png"
                />
                <div className="self-stretch flex flex-col items-start justify-start gap-[5px]">
                  <div className="self-stretch h-3.5 relative text-xs tracking-[-0.12px] leading-[128.52%] inline-block shrink-0">
                    Harry Potter and The ...
                  </div>
                  <div className="w-[101px] h-3.5 relative leading-[128.52%] inline-block shrink-0">
                    J.K. Rowling, 2002
                  </div>
                  <div className="w-[101px] h-[11px] relative leading-[128.52%] inline-block shrink-0">
                    <span>4.9</span>
                    <span className="text-darkgray-200">/5</span>
                  </div>
                </div>
              </div>
              <div className="self-stretch w-40 rounded-3xs bg-white overflow-hidden shrink-0 flex flex-col items-start justify-start pt-[15px] px-[15px] pb-[13px] box-border gap-[11.2px]">
                <img
                  className="self-stretch flex-1 relative rounded-8xs max-w-full overflow-hidden max-h-full object-cover"
                  loading="lazy"
                  alt=""
                  src="/rectangle-12-7@2x.png"
                />
                <div className="flex flex-col items-start justify-start gap-[5px]">
                  <div className="w-[130px] h-3.5 relative text-xs leading-[128.52%] inline-block shrink-0">
                    You Don’t Know JS: S..
                  </div>
                  <div className="w-[101px] h-3.5 relative leading-[128.52%] inline-block shrink-0">
                    Kyle Simpson, 2014
                  </div>
                  <div className="w-[101px] h-[11px] relative leading-[128.52%] inline-block shrink-0">
                    <span>4.9</span>
                    <span className="text-darkgray-200">/5</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start pt-0 pb-2.5 pl-0 pr-[18px] box-border gap-[11px] shrink-0 max-w-[102%]">
              <div className="w-[1453px] flex flex-row items-start justify-between gap-5 max-w-full mq800:flex-wrap">
                <div className="w-[238px] flex flex-col items-start justify-start pt-2.5 px-0 pb-0 box-border">
                  <h1 className="m-0 self-stretch h-[34px] relative text-inherit leading-[128.52%] font-normal font-[inherit] inline-block shrink-0 mq450:text-xl mq450:leading-[26px]">
                    Academic Books
                  </h1>
                </div>
                <h1 className="m-0 w-[143px] relative text-xl leading-[26px] font-normal font-[inherit] text-gray-200 text-right inline-block shrink-0 mq450:text-base mq450:leading-[21px]">
                  Show All
                </h1>
              </div>
              <div className="w-[1535px] h-[260px] overflow-x-auto shrink-0 flex flex-row items-start justify-start gap-[39px] max-w-full text-3xs mq800:gap-[19px]">
                <BookItemContainer
                  dontMakeMeWidth="160px"
                  rectangle12="/rectangle-12@2x.png"
                  dontMakeMeThink="Don’t Make Me think"
                  spanHeight="14px"
                  spanDisplay="inline-block"
                  steveKrug2000="Steve Krug, 2000"
                  propHeight="14px"
                  propHeight1="11px"
                />
                <div className="self-stretch w-40 rounded-3xs bg-white overflow-hidden shrink-0 flex flex-col items-start justify-start pt-[15px] px-[15px] pb-[13px] box-border gap-[11.2px]">
                  <img
                    className="self-stretch flex-1 relative rounded-8xs max-w-full overflow-hidden max-h-full object-cover"
                    alt=""
                    src="/rectangle-12-1@2x.png"
                  />
                  <div className="self-stretch flex flex-col items-start justify-start gap-[5px]">
                    <div className="self-stretch h-3.5 relative text-xs leading-[128.52%] inline-block shrink-0">
                      The Design of Every..
                    </div>
                    <div className="w-[101px] h-3.5 relative leading-[128.52%] inline-block shrink-0">
                      Don Norman, 1988
                    </div>
                    <div className="w-[101px] h-[11px] relative leading-[128.52%] inline-block shrink-0">
                      <span>4.5</span>
                      <span className="text-darkgray-200">/5</span>
                    </div>
                  </div>
                </div>
                <div className="self-stretch w-40 rounded-3xs bg-white overflow-hidden shrink-0 flex flex-col items-start justify-start pt-[15px] px-[15px] pb-[13px] box-border gap-[11.2px]">
                  <img
                    className="self-stretch flex-1 relative rounded-8xs max-w-full overflow-hidden max-h-full object-cover"
                    alt=""
                    src="/rectangle-12-2@2x.png"
                  />
                  <div className="self-stretch flex flex-col items-start justify-start gap-[5px]">
                    <div className="self-stretch h-3.5 relative text-xs leading-[128.52%] inline-block shrink-0">
                      Sprint : How to solve...
                    </div>
                    <div className="w-[101px] h-3.5 relative leading-[128.52%] inline-block shrink-0">
                      Jake Knapp, 2000
                    </div>
                    <div className="w-[101px] h-[11px] relative leading-[128.52%] inline-block shrink-0">
                      <span>4.5</span>
                      <span className="text-darkgray-200">/5</span>
                    </div>
                  </div>
                </div>
                <div className="self-stretch w-40 rounded-3xs bg-white overflow-hidden shrink-0 flex flex-col items-start justify-start pt-[15px] px-[15px] pb-[13px] box-border gap-[11.2px]">
                  <img
                    className="self-stretch flex-1 relative rounded-8xs max-w-full overflow-hidden max-h-full object-cover"
                    alt=""
                    src="/rectangle-12-3@2x.png"
                  />
                  <div className="self-stretch flex flex-col items-start justify-start gap-[5px]">
                    <div className="self-stretch h-3.5 relative text-xs leading-[128.52%] inline-block shrink-0">
                      Learn UX : Design Gr...
                    </div>
                    <div className="w-[101px] h-3.5 relative leading-[128.52%] inline-block shrink-0">
                      Jeff Gothelf, 2016
                    </div>
                    <div className="w-[101px] h-[11px] relative leading-[128.52%] inline-block shrink-0">
                      <span>4.5</span>
                      <span className="text-darkgray-200">/5</span>
                    </div>
                  </div>
                </div>
                <div className="self-stretch w-40 rounded-3xs bg-white overflow-hidden shrink-0 flex flex-col items-start justify-start pt-[15px] px-[15px] pb-[13px] box-border gap-[11.2px]">
                  <img
                    className="self-stretch flex-1 relative rounded-8xs max-w-full overflow-hidden max-h-full object-cover"
                    alt=""
                    src="/rectangle-12-4@2x.png"
                  />
                  <div className="self-stretch flex flex-col items-start justify-start gap-[5px]">
                    <div className="self-stretch h-3.5 relative text-xs leading-[128.52%] inline-block shrink-0">
                      The Road to React
                    </div>
                    <div className="w-[101px] h-3.5 relative leading-[128.52%] inline-block shrink-0">
                      Steve Krug, 2000
                    </div>
                    <div className="w-[101px] h-[11px] relative leading-[128.52%] inline-block shrink-0">
                      <span>4.5</span>
                      <span className="text-darkgray-200">/5</span>
                    </div>
                  </div>
                </div>
                <div className="self-stretch w-40 rounded-3xs bg-white overflow-hidden shrink-0 flex flex-col items-start justify-start pt-[15px] px-[15px] pb-[13px] box-border gap-[11.2px]">
                  <img
                    className="self-stretch flex-1 relative rounded-8xs max-w-full overflow-hidden max-h-full object-cover"
                    alt=""
                    src="/rectangle-12-5@2x.png"
                  />
                  <div className="self-stretch flex flex-col items-start justify-start gap-[5px]">
                    <div className="self-stretch h-3.5 relative text-xs leading-[128.52%] inline-block shrink-0">
                      Rich Dad Poor Dad
                    </div>
                    <div className="self-stretch h-3.5 relative leading-[128.52%] inline-block shrink-0">
                      Robert T.Kiyosaki, 1997
                    </div>
                    <div className="w-[101px] h-[11px] relative leading-[128.52%] inline-block shrink-0">
                      <span>5</span>
                      <span className="text-darkgray-200">/5</span>
                    </div>
                  </div>
                </div>
                <div className="self-stretch w-40 rounded-3xs bg-white overflow-hidden shrink-0 flex flex-col items-start justify-start pt-[15px] px-[15px] pb-[13px] box-border gap-[11.2px]">
                  <img
                    className="self-stretch flex-1 relative rounded-8xs max-w-full overflow-hidden max-h-full object-cover"
                    alt=""
                    src="/rectangle-12-6@2x.png"
                  />
                  <div className="self-stretch flex flex-col items-start justify-start gap-[5px]">
                    <div className="self-stretch h-3.5 relative text-xs tracking-[-0.12px] leading-[128.52%] inline-block shrink-0">
                      Harry Potter and The ...
                    </div>
                    <div className="w-[101px] h-3.5 relative leading-[128.52%] inline-block shrink-0">
                      J.K. Rowling, 2002
                    </div>
                    <div className="w-[101px] h-[11px] relative leading-[128.52%] inline-block shrink-0">
                      <span>4.9</span>
                      <span className="text-darkgray-200">/5</span>
                    </div>
                  </div>
                </div>
                <div className="self-stretch w-40 rounded-3xs bg-white overflow-hidden shrink-0 flex flex-col items-start justify-start pt-[15px] px-[15px] pb-[13px] box-border gap-[11.2px]">
                  <img
                    className="self-stretch flex-1 relative rounded-8xs max-w-full overflow-hidden max-h-full object-cover"
                    alt=""
                    src="/rectangle-12-7@2x.png"
                  />
                  <div className="flex flex-col items-start justify-start gap-[5px]">
                    <div className="w-[130px] h-3.5 relative text-xs leading-[128.52%] inline-block shrink-0">
                      You Don’t Know JS: S..
                    </div>
                    <div className="w-[101px] h-3.5 relative leading-[128.52%] inline-block shrink-0">
                      Kyle Simpson, 2014
                    </div>
                    <div className="w-[101px] h-[11px] relative leading-[128.52%] inline-block shrink-0">
                      <span>4.9</span>
                      <span className="text-darkgray-200">/5</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[67px] shrink-0 max-w-[102%] text-gray-200 mq450:gap-[17px] mq800:gap-[33px]">
              <div className="self-stretch flex flex-col items-start justify-start py-0 pl-0 pr-[18px] box-border gap-[11px] max-w-full">
                <div className="w-[1453px] flex flex-row items-start justify-between max-w-full gap-5 mq800:flex-wrap">
                  <h1 className="m-0 h-[34px] w-[513px] relative text-inherit leading-[128.52%] font-normal font-[inherit] inline-block shrink-0 max-w-full mq450:text-xl mq450:leading-[26px]">{`Journals, Articles & Paper Publications`}</h1>
                  <h1 className="m-0 w-[143px] relative text-xl leading-[26px] font-normal font-[inherit] text-right inline-block shrink-0 mq450:text-base mq450:leading-[21px]">
                    Show All
                  </h1>
                </div>
                <div className="w-[1535px] h-[260px] overflow-x-auto shrink-0 flex flex-row items-start justify-start gap-[39px] max-w-full z-[1] text-3xs text-dimgray-600 mq800:gap-[19px]">
                  <BookItemContainer
                    dontMakeMeWidth="160px"
                    rectangle12="/rectangle-12@2x.png"
                    dontMakeMeThink="Don’t Make Me think"
                    spanHeight="14px"
                    spanDisplay="inline-block"
                    steveKrug2000="Steve Krug, 2000"
                    propHeight="14px"
                    propHeight1="11px"
                  />
                  <div className="self-stretch w-40 rounded-3xs bg-white overflow-hidden shrink-0 flex flex-col items-start justify-start pt-[15px] px-[15px] pb-[13px] box-border gap-[11.2px]">
                    <img
                      className="self-stretch flex-1 relative rounded-8xs max-w-full overflow-hidden max-h-full object-cover"
                      alt=""
                      src="/rectangle-12-1@2x.png"
                    />
                    <div className="self-stretch flex flex-col items-start justify-start gap-[5px]">
                      <div className="self-stretch h-3.5 relative text-xs leading-[128.52%] inline-block shrink-0">
                        The Design of Every..
                      </div>
                      <div className="w-[101px] h-3.5 relative leading-[128.52%] inline-block shrink-0">
                        Don Norman, 1988
                      </div>
                      <div className="w-[101px] h-[11px] relative leading-[128.52%] inline-block shrink-0">
                        <span>4.5</span>
                        <span className="text-darkgray-200">/5</span>
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch w-40 rounded-3xs bg-white overflow-hidden shrink-0 flex flex-col items-start justify-start pt-[15px] px-[15px] pb-[13px] box-border gap-[11.2px]">
                    <img
                      className="self-stretch flex-1 relative rounded-8xs max-w-full overflow-hidden max-h-full object-cover"
                      alt=""
                      src="/rectangle-12-2@2x.png"
                    />
                    <div className="self-stretch flex flex-col items-start justify-start gap-[5px]">
                      <div className="self-stretch h-3.5 relative text-xs leading-[128.52%] inline-block shrink-0">
                        Sprint : How to solve...
                      </div>
                      <div className="w-[101px] h-3.5 relative leading-[128.52%] inline-block shrink-0">
                        Jake Knapp, 2000
                      </div>
                      <div className="w-[101px] h-[11px] relative leading-[128.52%] inline-block shrink-0">
                        <span>4.5</span>
                        <span className="text-darkgray-200">/5</span>
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch w-40 rounded-3xs bg-white overflow-hidden shrink-0 flex flex-col items-start justify-start pt-[15px] px-[15px] pb-[13px] box-border gap-[11.2px]">
                    <img
                      className="self-stretch flex-1 relative rounded-8xs max-w-full overflow-hidden max-h-full object-cover"
                      alt=""
                      src="/rectangle-12-3@2x.png"
                    />
                    <div className="self-stretch flex flex-col items-start justify-start gap-[5px]">
                      <div className="self-stretch h-3.5 relative text-xs leading-[128.52%] inline-block shrink-0">
                        Learn UX : Design Gr...
                      </div>
                      <div className="w-[101px] h-3.5 relative leading-[128.52%] inline-block shrink-0">
                        Jeff Gothelf, 2016
                      </div>
                      <div className="w-[101px] h-[11px] relative leading-[128.52%] inline-block shrink-0">
                        <span>4.5</span>
                        <span className="text-darkgray-200">/5</span>
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch w-40 rounded-3xs bg-white overflow-hidden shrink-0 flex flex-col items-start justify-start pt-[15px] px-[15px] pb-[13px] box-border gap-[11.2px]">
                    <img
                      className="self-stretch flex-1 relative rounded-8xs max-w-full overflow-hidden max-h-full object-cover"
                      alt=""
                      src="/rectangle-12-4@2x.png"
                    />
                    <div className="self-stretch flex flex-col items-start justify-start gap-[5px]">
                      <div className="self-stretch h-3.5 relative text-xs leading-[128.52%] inline-block shrink-0">
                        The Road to React
                      </div>
                      <div className="w-[101px] h-3.5 relative leading-[128.52%] inline-block shrink-0">
                        Steve Krug, 2000
                      </div>
                      <div className="w-[101px] h-[11px] relative leading-[128.52%] inline-block shrink-0">
                        <span>4.5</span>
                        <span className="text-darkgray-200">/5</span>
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch w-40 rounded-3xs bg-white overflow-hidden shrink-0 flex flex-col items-start justify-start pt-[15px] px-[15px] pb-[13px] box-border gap-[11.2px]">
                    <img
                      className="self-stretch flex-1 relative rounded-8xs max-w-full overflow-hidden max-h-full object-cover"
                      alt=""
                      src="/rectangle-12-5@2x.png"
                    />
                    <div className="self-stretch flex flex-col items-start justify-start gap-[5px]">
                      <div className="self-stretch h-3.5 relative text-xs leading-[128.52%] inline-block shrink-0">
                        Rich Dad Poor Dad
                      </div>
                      <div className="self-stretch h-3.5 relative leading-[128.52%] inline-block shrink-0">
                        Robert T.Kiyosaki, 1997
                      </div>
                      <div className="w-[101px] h-[11px] relative leading-[128.52%] inline-block shrink-0">
                        <span>5</span>
                        <span className="text-darkgray-200">/5</span>
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch w-40 rounded-3xs bg-white overflow-hidden shrink-0 flex flex-col items-start justify-start pt-[15px] px-[15px] pb-[13px] box-border gap-[11.2px]">
                    <img
                      className="self-stretch flex-1 relative rounded-8xs max-w-full overflow-hidden max-h-full object-cover"
                      alt=""
                      src="/rectangle-12-6@2x.png"
                    />
                    <div className="self-stretch flex flex-col items-start justify-start gap-[5px]">
                      <div className="self-stretch h-3.5 relative text-xs tracking-[-0.12px] leading-[128.52%] inline-block shrink-0">
                        Harry Potter and The ...
                      </div>
                      <div className="w-[101px] h-3.5 relative leading-[128.52%] inline-block shrink-0">
                        J.K. Rowling, 2002
                      </div>
                      <div className="w-[101px] h-[11px] relative leading-[128.52%] inline-block shrink-0">
                        <span>4.9</span>
                        <span className="text-darkgray-200">/5</span>
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch w-40 rounded-3xs bg-white overflow-hidden shrink-0 flex flex-col items-start justify-start pt-[15px] px-[15px] pb-[13px] box-border gap-[11.2px]">
                    <img
                      className="self-stretch flex-1 relative rounded-8xs max-w-full overflow-hidden max-h-full object-cover"
                      alt=""
                      src="/rectangle-12-7@2x.png"
                    />
                    <div className="flex flex-col items-start justify-start gap-[5px]">
                      <div className="w-[130px] h-3.5 relative text-xs leading-[128.52%] inline-block shrink-0">
                        You Don’t Know JS: S..
                      </div>
                      <div className="w-[101px] h-3.5 relative leading-[128.52%] inline-block shrink-0">
                        Kyle Simpson, 2014
                      </div>
                      <div className="w-[101px] h-[11px] relative leading-[128.52%] inline-block shrink-0">
                        <span>4.9</span>
                        <span className="text-darkgray-200">/5</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[558px] flex flex-col items-start justify-start gap-[11px] max-w-full">
                <h1 className="m-0 w-[513px] h-[34px] relative text-inherit leading-[128.52%] font-normal font-[inherit] inline-block shrink-0 max-w-full mq450:text-xl mq450:leading-[26px]">
                  News
                </h1>
                <div className="self-stretch grid flex-row items-start justify-start gap-[39px] grid-cols-[repeat(3,_minmax(120px,_1fr))] z-[1] mq450:grid-cols-[minmax(120px,_1fr)] mq800:gap-[19px] mq800:justify-center mq800:grid-cols-[repeat(2,_minmax(120px,_208px))]">
                  <BookItemContainer
                    dontMakeMeWidth="unset"
                    rectangle12="/rectangle-12-32@2x.png"
                    dontMakeMeThink="14 Mar 2023"
                    spanHeight="14px"
                    spanDisplay="inline-block"
                    steveKrug2000="The Hindu News"
                    propHeight="14px"
                    propHeight1="11px"
                  />
                  <BookItemContainer
                    dontMakeMeWidth="unset"
                    rectangle12="/rectangle-12-33@2x.png"
                    dontMakeMeThink="14 Mar 2023"
                    spanHeight="14px"
                    spanDisplay="inline-block"
                    steveKrug2000="TOI News"
                    propHeight="14px"
                    propHeight1="11px"
                  />
                  <BookItemContainer
                    dontMakeMeWidth="unset"
                    rectangle12="/rectangle-12-34@2x.png"
                    dontMakeMeThink="14 Mar 2023"
                    spanHeight="14px"
                    spanDisplay="inline-block"
                    steveKrug2000="Deccan Cronicle"
                    propHeight="14px"
                    propHeight1="11px"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="w-full !m-[0] absolute right-[0px] bottom-[-38px] left-[0px] flex flex-col items-start justify-start pt-0 px-0 pb-[148px] box-border gap-[25px] max-w-full text-xl text-white">
            <div className="w-full h-[2313px] absolute !m-[0] right-[0px] bottom-[-1281px] left-[0px] rounded-tl-none rounded-tr-3xs rounded-br-3xs rounded-bl-none bg-whitesmoke-200" />
            <TopMain onGroupContainerClick={onGroupContainerClick} />
            <div className="self-stretch flex flex-row items-start justify-start py-0 pl-11 pr-12 box-border max-w-full mq1300:pl-[22px] mq1300:pr-6 mq1300:box-border">
              <div className="flex-1 flex flex-col items-start justify-start gap-[43px] max-w-full mq800:gap-[21px]">
                <div className="self-stretch flex flex-row items-start justify-start gap-11 max-w-full mq800:gap-[22px] mq1300:flex-wrap">
                  <div className="w-[547px] rounded-3xs [background:linear-gradient(rgba(0,_0,_0,_0.1),_rgba(0,_0,_0,_0.1)),_linear-gradient(140.88deg,_#eb5231,_#571fcf)] overflow-hidden shrink-0 flex flex-col items-start justify-start pt-[33px] px-[23px] pb-[27px] box-border gap-5 min-w-[547px] max-w-full z-[1] mq800:min-w-full mq1300:flex-1">
                    <div className="w-[218px] flex flex-row items-start justify-start py-0 px-[13px] box-border text-6xl">
                      <h1 className="m-0 flex-1 relative text-inherit leading-[128.52%] font-medium font-[inherit] mq450:text-xl mq450:leading-[26px]">
                        Today’s Quote
                      </h1>
                    </div>
                    <div className="self-stretch flex flex-row items-start justify-start pt-0 pb-[5px] pl-[13px] pr-px box-border max-w-full">
                      <blockquote className="m-0 flex-1 relative leading-[150%] inline-block max-w-full mq450:text-base mq450:leading-[24px]">
                        “There is more treasure in books than in all the
                        pirate’s loot on Treasure Island.”
                      </blockquote>
                    </div>
                    <div className="w-[487px] flex flex-row items-start justify-start max-w-full text-right">
                      <h1 className="m-0 h-[31px] w-[487px] relative text-inherit leading-[128.52%] font-normal font-[inherit] inline-block shrink-0 max-w-full mq450:text-base mq450:leading-[21px]">
                        -Walt Disney
                      </h1>
                      <div className="flex flex-col items-start justify-start pt-[26px] px-0 pb-0 ml-[-474px]">
                        <div className="flex flex-row items-start justify-start gap-2.5">
                          <div className="h-2.5 w-2.5 relative rounded-[50%] bg-white border-white border-[0px] border-solid box-border" />
                          <div className="h-2.5 w-2.5 relative rounded-[50%] bg-purple border-white border-[0px] border-solid box-border" />
                          <div className="h-2.5 w-2.5 relative rounded-[50%] bg-purple border-white border-[0px] border-solid box-border" />
                          <div className="h-2.5 w-2.5 relative rounded-[50%] bg-purple border-white border-[0px] border-solid box-border" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <NewsNewArrivals
                    newsImagePair="/rectangle-12-35@2x.png"
                    newsImagePair1="/rectangle-12-6@2x.png"
                    newsImagePair2="/rectangle-12-3@2x.png"
                    newsImagePair3="/rectangle-12-38@2x.png"
                    rectangle12="/rectangle-12-39@2x.png"
                    rectangle121="/rectangle-12-40@2x.png"
                    rectangle122="/rectangle-12-41@2x.png"
                    rectangle123="/rectangle-12-42@2x.png"
                  />
                </div>
                <div className="self-stretch flex flex-col items-start justify-start gap-6 text-16xl text-dimgray-600">
                  <h1 className="m-0 w-[268px] relative text-inherit leading-[45px] font-semibold font-[inherit] inline-block z-[1] mq450:text-2xl mq450:leading-[27px] mq800:text-9xl mq800:leading-[36px]">
                    Good Morning
                  </h1>
                  <div className="self-stretch flex flex-row items-start justify-between gap-5 text-6xl mq800:flex-wrap">
                    <div className="w-[286px] flex flex-col items-start justify-start gap-[335px] mq450:gap-[167px]">
                      <h1 className="m-0 self-stretch relative text-inherit leading-[33px] font-normal font-[inherit] z-[1] mq450:text-xl mq450:leading-[26px]">
                        Recommended for You
                      </h1>
                      <h1 className="m-0 w-[228px] relative text-inherit leading-[34px] font-normal font-[inherit] inline-block z-[1] mq450:text-xl mq450:leading-[26px]">
                        Recent Readings
                      </h1>
                    </div>
                    <div className="w-[143px] flex flex-col items-end justify-start gap-[342px] text-right text-xl text-gray-200">
                      <h1 className="m-0 w-[129px] relative text-inherit leading-[26px] font-normal font-[inherit] inline-block z-[1] mq450:text-base mq450:leading-[21px]">
                        Show All
                      </h1>
                      <h1 className="m-0 self-stretch relative text-inherit leading-[26px] font-normal font-[inherit] z-[1] mq450:text-base mq450:leading-[21px]">
                        Show All
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <BackgroundContainer bGVector="/bg-vector.svg" group3="/group-3@2x.png" />
    </div>
  );
};

export default HomePage;

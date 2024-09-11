"use client";
import type { NextPage } from "next";

import Carousel from "@/components/carousel";
import NewsNewArrivals from "@/components/news-new-arrivals";
import BookItemContainer from "@/components/book-item-container";
import { useEffect, useState } from "react";

const HomePage: NextPage = () => {
  const [booklist, setBookList] = useState([]);
  useEffect(() => {
    const fetchBookRequests = async () => {
        try {
            const response = await fetch('/api/get-book-list'); // Adjust to the correct route
            if (!response.ok) {
                throw new Error('Failed to fetch book list');
            }

            const data = await response.json();
            setBookList(data);
        } catch (err) {
            setError(err.message);

        }
    };

    fetchBookRequests();
}, []);

const book =  booklist[0];

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

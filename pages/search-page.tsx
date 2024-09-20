"use client"
import type { NextPage } from "next";
import { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import SearchBarArea from "../components/search-bar-area";
import SideBar from "../components/side-bar";
import GroupComponent1 from "@/components/group-component1";

interface Book {
  _id: string;
  title: string;
  author: string;
  category: string;
  isbn: string;
  publisher: string;
  overview: string;
  language: string;
}

const Search: NextPage = () => {
  const router = useRouter();

  const onFavouriteMenuContainerClick = useCallback(() => {
    router.push("/contribute");
  }, [router]);
  
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchBooks = async (query = '') => {
    setLoading(true);
    setError(null);

    try {
      const res = await fetch(`/api/search-books?query=${encodeURIComponent(query)}`);
      if (!res.ok) {
        throw new Error('Failed to fetch books');
      }
      const data = await res.json();
      setBooks(data);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    // Fetch all books on initial load
    fetchBooks();
  }, []);

  const handleSearch = (query: string) => {
    fetchBooks(query); // Fetch books based on the search query
  };

  return (
    <div className="w-full h-[1080px] relative bg-white leading-[normal] tracking-[normal] mq1125:h-auto mq1125:min-h-[1080]">
      <img
        className="fixed object-cover  top-0 left-[-37.3px] w-full h-full"
        alt=""
        src="/bg-vector1.svg"
      />
      <div className="absolute bg-[#F3F3F7] top-[48px] left-[341px] rounded-3xs w-[1544px] h-[994px] overflow-y-auto scrollbar-hidden max-w-full z-[1] mq1125:h-auto mq1125:min-h-[994]">
        <div className="absolute top-[0px] left-[0px] w-full flex flex-col items-start justify-start pt-0 px-0 pb-6 box-border gap-[66px] max-w-full">
          <div className="w-full h-[1957px] absolute !m-[0] right-[0px] bottom-[-925px] left-[0px] rounded-tl-none rounded-tr-3xs rounded-br-3xs rounded-bl-none bg-whitesmoke-200" />
          <SearchBarArea onSearch={handleSearch} />

          <div
            className={`self-stretch flex flex-row items-start justify-start py-0 pl-11 pr-[46px] box-border max-w-full text-left text-xl text-dimgray-600 font-inter`}
          >
            <div className="flex-1 flex flex-col items-start justify-start gap-[23px] max-w-full">
              <div className="w-[1158px] flex flex-row items-start justify-between max-w-full gap-5 mq1125:flex-wrap">
                <div className="w-[90px] text-[#4D4D4D] relative leading-[29px] font-medium inline-block shrink-0 z-[1] mq450:text-base mq450:leading-[21px]">
                  Title
                </div>
                <div className="flex flex-row items-start justify-start gap-[105px] max-w-full mq800:flex-wrap">
                  <div className="w-[296px] flex flex-row items-start justify-start py-0 pl-0 pr-[73px] box-border gap-[61px]">
                    <div className="relative text-[#4D4D4D] leading-[29px] font-medium inline-block min-w-[72px] z-[1] mq450:text-base mq450:leading-[21px]">
                      Ratings
                    </div>
                    <div className="relative text-[#4D4D4D] leading-[29px] font-medium inline-block min-w-[90px] z-[1] mq450:text-base mq450:leading-[21px]">
                      Category
                    </div>
                  </div>
                  <div className="relative text-[#4D4D4D] leading-[29px] font-medium inline-block min-w-[105px] z-[1] mq450:text-base mq450:leading-[21px]">
                    Availability
                  </div>
                  <div className="w-[105px] text-[#4D4D4D] relative leading-[26px] font-medium inline-block shrink-0 z-[1] mq450:text-base mq450:leading-[21px]">
                    Status
                  </div>
                </div>
              </div>
              {books.map((book) => (
            <GroupComponent1 key={book.isbn} book={book}  /> // Render each book using GroupComponent1
          ))}

            </div>
          </div>
        </div>

      </div>
      <SideBar
        propPosition="absolute"
        propTop="48px"
        propLeft="35px"
        propWidth="306px"
        propHeight="994px"
        propAlignSelf="unset"
        propFlex="unset"
        group3="/group-3@2x.png"
        propTextDecoration="unset"
        search="/search-11.svg"
        propColor="#4d4d4d"
        onFavouriteMenuContainerClick={onFavouriteMenuContainerClick}
        giveGift="/give-gift.svg"
        propColor1="#8a8a8a"
      />
    </div>
  );
};

export default Search;

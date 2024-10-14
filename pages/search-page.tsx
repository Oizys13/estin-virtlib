"use client"
import type { NextPage } from "next";
import { useCallback, useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import SearchBarArea from "../components/search-bar-area";
import SideBar from "../components/side-bar";
import GroupComponent1 from "@/components/group-component1";
import TopBar from "@/components/TopBar";

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
  const searchParams = useSearchParams();
  const query = searchParams.get('query') || '';
  const category = searchParams.get('category') || 'All'; // Extract the query from the URL
  const [filteredBooks, setFilteredBooks] = useState<Book[]>([]);
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);





  const fetchBooks = async (searchQuery = '', selectedCategory = 'All') => {
    setLoading(true);
    setError(null);

    try {
      const res = await fetch(`/api/search-books?query=${encodeURIComponent(searchQuery)}`);
      if (!res.ok) {
        throw new Error('Failed to fetch books');
      }
      const data = await res.json();
      setBooks(data);

      // Filter the books based on category if it's not "All"
      const filtered = selectedCategory === 'All'
        ? data
        : data.filter((book: Book) => book.category === selectedCategory);
      setFilteredBooks(filtered);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // Fetch books based on both search query and category
    fetchBooks(query, category);
  }, [query, category]);

  const handleSearch = (newQuery: string) => {
    // Update URL and fetch books
    router.push(`/search?query=${encodeURIComponent(newQuery)}`);
    fetchBooks(newQuery);
  };

  return (
    <div className="w-full h-[900px] relative bg-white leading-[normal] overflow-y-auto scrollbar-hidden tracking-[normal] mq1125:h-auto mq1125:min-h-[1080]">
      
      <div className="absolute bg-[#FAFAFA] left-[306px] overflow-y-auto scrollbar-hidden rounded-3xs h-[900px] max-w-full z-[1] mq1125:h-auto mq1125:min-h-[994]">
          <TopBar/>
        <div className="absolute flex flex-col items-start justify-start pb-6 box-border gap-[66px] ">

          <div
            className={`self-stretch flex flex-row items-start justify-start py-0 pl-11 pr-[46px] box-border max-w-full text-left text-xl text-dimgray-600 font-inter`}
          >
            <div className="flex-1 flex flex-col items-start justify-start gap-[23px] max-w-full">
              <div className=" flex flex-row items-start justify-between  gap-5 mq1125:flex-wrap">
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
              {filteredBooks.map((book) => (
                <GroupComponent1 key={book.isbn} book={book} /> // Render each book using GroupComponent1
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

        giveGift="/give-gift.svg"
        propColor1="#8a8a8a"
      />
    </div>
  );
};

export default Search;

"use client"
import type { NextPage } from "next";
import { useRouter } from "next/navigation";
import TopMain1 from "@/components/top-main1";
import { useCallback, useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import SideBar from "@/components/side-bar";
import MyShelfBookContainer from "@/components/myShelf-book-container";

const MyBookShelf: NextPage = () => {
  const { data: session } = useSession();
  const [books, setBooks] = useState([]);
  const [favoriteBooks, setFavoriteBooks] = useState([]);
  const [activeTab, setActiveTab] = useState<'read' | 'favorites'>('read');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  useEffect(() => {
    const fetchReadings = async () => {
      if (session?.user?.email) {
        try {
          const response = await fetch(`/api/get-user-readings?user=${session.user.email}`);
          const data = await response.json();
          if (response.ok) {
            setBooks(data);
          } else {
            console.error("Error fetching books:", data.error);
          }
        } catch (error) {
          console.error("Error fetching books:", error);
        }
      }
    };

    fetchReadings();
  }, [session]);

  useEffect(() => {
    const fetchFavorites = async () => {
      if (session?.user?.email) {
        try {
          const response = await fetch(`/api/get-user-favorites?user=${session.user.email}`);
          const data = await response.json();
          if (response.ok) {
            setFavoriteBooks(data);
          } else {
            console.error("Error fetching books:", data.error);
          }
        } catch (error) {
          console.error("Error fetching books:", error);
        }
      }
    };

    fetchFavorites();
  }, [session]);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const paginatedBooks = (activeTab === 'read' ? books : favoriteBooks).slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const totalPages = Math.ceil((activeTab === 'read' ? books.length : favoriteBooks.length) / itemsPerPage);

  return (
    <div className="w-full h-[900px] overflow-y-auto scrollbar-hidden relative bg-white leading-[normal] tracking-[normal] text-left text-xl text-black font-inter mq1300:h-auto mq1300:min-h-[1080]">
      <img
        className="fixed object-cover top-0 left-[-37.3px] w-full h-full"
        alt=""
        src="/bg-vector1.svg"
      />
      <div className="absolute h-[900px] overflow-y-auto scrollbar-hidden top-[48px]  bg-[#F3F3F7] left-[341px] rounded-3xs bg-whitesmoke-200 w-[1544px] flex flex-col items-start justify-start pt-0 px-0 pb-[216px] box-border gap-[20px] max-w-full z-[1]">
        <TopMain1
          polygonIconTop="0"
          polygonIconPosition="sticky"
          polygonIconAlignSelf="stretch"
          polygonIconLeft="unset"
          polygonIconFlex="unset"
          searchLabelOverflow="hidden"
        />
        <div className="flex flex-row items-start w-[286px] h-[33px] pl-11">
            <span className="text-2xl font-bold mr-1">Your</span>      
            <span className="text-2xl font-bold text-[#EF8361]">Shelf</span>
        </div>
        <div className="flex flex-row items-center justify-center gap-[200px] w-full h-[33px] pl-11">
            <span 
              className={`text-2xl font-bold mr-1 cursor-pointer ${activeTab === 'favorites' ? 'text-[#EF8361]' : ''}`}
              onClick={() => { setActiveTab('favorites'); setCurrentPage(1); }}
            >
              Favorites
            </span>      
            <span 
              className={`text-2xl font-bold cursor-pointer ${activeTab === 'read' ? 'text-[#EF8361]' : ''}`}
              onClick={() => { setActiveTab('read'); setCurrentPage(1); }}
            >
              Read Books
            </span>
        </div>
        <div className="" >
        <div className="w-[1452px] px-11 flex flex-wrap justify-between items-center gap-8">
          {paginatedBooks.map((book) => (
            <MyShelfBookContainer
              key={book._id}
              isbn={book.isbn}
              title={book.title}
              author={book.author}
              year={book.category}
              url={book.url}
            />
          ))}
          {totalPages > 1 && (
            <div className="flex flex-row items-center justify-center gap-4 mt-4">
              <button
                onClick={handlePreviousPage}
                disabled={currentPage === 1}
                className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
              >
                Previous
              </button>
              <span>Page {currentPage} of {totalPages}</span>
              <button
                onClick={handleNextPage}
                disabled={currentPage === totalPages}
                className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
              >
                Next
              </button>
            </div>
          )}
          
            
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
        
        search="/search-1.svg"
        propColor="#8a8a8a"
        giveGift="/give-gift2.svg"
        propColor1="#4d4d4d"
      />
    </div>
  );
};

export default MyBookShelf;

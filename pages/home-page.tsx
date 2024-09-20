import type { NextPage } from "next";
import Carousel from "@/components/carousel";
import NewsNewArrivals from "@/components/news-new-arrivals";
import BookItemContainer from "@/components/book-item-container";
import { useEffect, useState } from "react";

const HomePage: NextPage = () => {
  const [booklist, setBookList] = useState<any[]>([]); // Use proper type if you have one
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBookRequests = async () => {
      try {
        const response = await fetch('/api/get-book-list'); // Adjust to the correct route
        if (!response.ok) {
          throw new Error('Failed to fetch book list');
        }

        const data = await response.json();
        setBookList(data);
      } catch (err: any) {
        setError(err.message);
      }
    };

    fetchBookRequests();
  }, []);

  const [screenSize, setScreenSize] = useState('');

  const checkScreenSize = () => {
    const width = window.innerWidth;
    if (width > 1200) {
      setScreenSize('large');
    } else if (width > 800) {
      setScreenSize('medium');
    } else {
      setScreenSize('small');
    }
  };

  useEffect(() => {
    window.addEventListener('resize', checkScreenSize);
    checkScreenSize(); // On component mount

    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  return (
    <main>
      {screenSize === 'large' && (
        <div className=" ">
          <div className="flex flex-row">

            <Carousel />
            <NewsNewArrivals />
          </div>

          <div className="flex flex-col h-[1000px] whitespace-nowrap  ">
            <span className="text-26pt font-[inter] font-medium text-[#4D4D4D] pl-11 py-[20px]">Good Morning</span>

            <div className="flex flex-row gap-[35px] pl-11 overflow-x-auto whitespace-nowrap scrollbar-hidden min-h-[300px] w-[1530px]">
              {booklist.length > 0 ? (
                booklist.map((request, index) => (
                  <BookItemContainer
                    key={index} // Adding a key prop for list items
                    url={request.url}
                    title={request.title}
                    year={request.year} // Fixed to use `year` if `overview` is incorrect
                    author={request.author}
                  />
                ))
              ) : (
                <div>No books available</div> // Handle empty booklist case
              )}
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
      )}
      {screenSize === 'small' && (
        <div className="flex flex-col bg-background text-foreground p-4">
          <header className="flex justify-between items-center mb-4">
            <img src="group-3@2x.png" className="h-12"></img>
            <div className="w-[50px] rounded-[40px] shadow-[0px_0px_4px_rgba(0,_0,_0,_0.25)] rounded-14xl bg-white flex flex-row items-center justify-center box-border z-[1]">
              <div className="flex flex-col items-center justify-center">
                <img
                  className="w-[50px] h-[50px] relative rounded-[50%] object-cover z-[1]"
                  alt=""
                  src="/profile-picture@2x.png"
                />
              </div>
            </div>
          </header>
              <Carousel/>
          
          <h2 className="text-lg font-semibold mb-2">Good Morning</h2>
          <section className="mb-4">
            <h3 className="font-semibold">Recommended for You</h3>
            <div className="grid grid-cols-2 gap-4">
              
            {booklist.length > 0 ? (
                booklist.map((request, index) => (
                  <BookItemContainer
                    key={index} // Adding a key prop for list items
                    url={request.url}
                    title={request.title}
                    year={request.year} // Fixed to use `year` if `overview` is incorrect
                    author={request.author}
                  />
                ))
              ) : (
                <div>No books available</div> // Handle empty booklist case
              )}
            </div>
          </section>
          
        </div>
      )}
    </main>

  );
};

export default HomePage;

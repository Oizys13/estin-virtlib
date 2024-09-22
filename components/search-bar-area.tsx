import { useCallback, useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { signOut, useSession } from "next-auth/react";

export type SearchBarAreaType = {
  className?: string;
};
interface SearchBarProps {
  onSearch: (query: string) => void;
  books: Book[];
}
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


const SearchBarArea: React.FC<SearchBarProps> = ({ onSearch, books }) => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [filteredBooks, setFilteredBooks] = useState<Book[]>(books);
  const [query, setQuery] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isCategoryDropdownOpen, setIsCategoryDropdownOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('');

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
    setIsCategoryDropdownOpen(false);

    // Get the existing search query from the URL
    const searchQuery = searchParams.get("query") || '';

    // Update the URL with both search query and selected category
    router.push(`/search?query=${encodeURIComponent(searchQuery)}&category=${encodeURIComponent(category)}`, undefined, { shallow: true });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const handleSearch = () => {
    onSearch(query);
  };



  const RedirectProfile = useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    router.push("/profile");
  }, [router]);

  const { status, data: session } = useSession();
  useEffect(() => {
    // Avoid redirecting when session is still loading
    if (status === 'loading') return;

    // Redirect if user is not authenticated
    if (status === 'unauthenticated') {
      router.push('/');
    }
  }, [status, router]);

  return (


    <header
      className="self-stretch flex flex-col  w-full max-w-full z-[2] text-left text-xl text-dimgray-600 font-inter "
    >
      <div
        className="flex-1 self-stretch justify-between  rounded-tl-none rounded-tr-3xs rounded-b-none [background:linear-gradient(180deg,_#fff,_#f3f3f7_66.67%,_rgba(243,_243,_247,_0.88))] overflow-hidden flex flex-row items-center  pt-[38px] pb-6 pl-[46px] pr-[45px] box-border gap-7 max-w-full"
      >
        <div className="flex-1 min-h-[54px] rounded-[40px] shadow-[0px_0px_4px_rgba(0,_0,_0,_0.25)] rounded-21xl bg-white flex flex-row items-start justify-between py-0 pl-0 pr-[17px] box-border max-w-[541px] gap-5 z-[1]">
          <div className="self-stretch w-[541px] relative shadow-[0px_0px_4px_rgba(0,_0,_0,_0.25)] rounded-21xl bg-white hidden max-w-full" />
          <div className="w-[352px] flex flex-row items-center justify-center gap-[21px] max-w-full">
            <div className="rounded-tl-21xl bg-[#F7F7FA] rounded-[40px]   rounded-tr-none rounded-br-none rounded-bl-21xl bg-whitesmoke-100 flex flex-row items-center justify-center  py-[14px] px-[20px]  gap-2.5 z-[1]">

              {selectedCategory ?
                <div className="relative leading-[128.52%] inline-block min-w-[27px] z-[1]">
                  {selectedCategory}
                </div>
                :
                (
                  <div className="relative leading-[128.52%] inline-block min-w-[27px] z-[1]">
                    All
                  </div>
                )
              }
              
            </div>
            <input
              className=" w-full  [border:none] [outline:none] bg-[transparent] h-9 flex-1 flex flex-col items-center justify-center box-border font-inter text-xl text-silver-100  min-w-[137px]"
              placeholder="Search"
              type="text"
              onChange={handleInputChange}
            />
          </div>
          <div className="flex flex-col items-center justify-center pt-2 px-0 pb-0">
            <div className="h-[33px] flex flex-row items-center justify-center gap-[9.5px]">
              <div className="w-5 flex flex-col items-center justify-center pt-[7px] px-0 pb-0 box-border">
                <img
                  className="w-5 h-5 relative overflow-hidden shrink-0 z-[1]"
                  loading="lazy"
                  alt=""
                  src="/search.svg"
                  onClick={handleSearch}
                />

              </div>


            </div>
          </div>
        </div>

        <span className="text-30pt font-[inter] font-medium text-[#4D4D4D] py-[20px]">Welcome Back, our dear student</span>

        <div className="relative z-[1000]"> {/* Ensure the container has a high z-index */}
          <div
            className="w-[50px] rounded-[40px] shadow-[0px_0px_4px_rgba(0,_0,_0,_0.25)] rounded-14xl bg-white flex flex-row items-center justify-center box-border cursor-pointer"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            <div className="flex flex-col items-center justify-center">
              <img
                className="w-[50px] h-[50px] relative rounded-[50%] object-cover"
                alt=""
                src="/profile.jpg"
              />
            </div>
          </div>

          {isDropdownOpen && (
            <div className="fixed right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-[1010]">
              <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                <a href="" onClick={RedirectProfile} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Profile</a>
                <a href="" onClick={() => signOut()} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Sign out</a>
              </div>
            </div>
          )}
        </div>

      </div>
      <div className="pl-11">


        <div
          className="w-[170px] shadow-[0px_0px_4px_rgba(0,_0,_0,_0.25)] rounded-[40px] bg-white flex flex-row items-start justify-start pt-[11px] pb-2.5 pl-[27px] pr-6 box-border gap-[11px] cursor-pointer"
          onClick={() => setIsCategoryDropdownOpen(!isCategoryDropdownOpen)}
        >
          <div className="h-[47px] w-[170px] relative shadow-[0px_0px_4px_rgba(0,_0,_0,_0.25)] rounded-11xl bg-white hidden" />
          {selectedCategory ?
            <div className="flex-1 relative leading-[26px] z-[1] mq450:text-base mq450:leading-[21px]">
              {selectedCategory}

            </div> : (
              <div className="flex-1 relative leading-[26px] z-[1] mq450:text-base mq450:leading-[21px]">
                Category

              </div>
            )
          }
          <div className="flex flex-col items-start justify-start pt-2 px-0 pb-0 box-border w-[17px] h-[17px]">
            <img
              className="w-[17px] h-[9px] relative rounded-12xs object-contain z-[1]"
              alt=""
              src="/search-icon.svg"
            />
          </div>
        </div>
        {isCategoryDropdownOpen && (
          <div className="absolute mb-2 ml-8 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-[1010]" style={{ top: '21%', left: '0' }}>
            <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
              <a href="#" onClick={() => handleCategorySelect('All')} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">All</a>
              <a href="#" onClick={() => handleCategorySelect('Math')} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Math</a>
              <a href="#" onClick={() => handleCategorySelect('Programming')} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Programming</a>
              <a href="#" onClick={() => handleCategorySelect('AI')} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">AI</a>
              <a href="#" onClick={() => handleCategorySelect('Databases')} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Databases</a>
            </div>
          </div>
        )}
      </div>
      
    </header>
  );
};

export default SearchBarArea;

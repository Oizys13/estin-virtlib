"use client"
import type { NextPage } from "next";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useMemo, useState, type CSSProperties } from "react";
import {signOut, useSession } from "next-auth/react";

export type TopMain1Type = {
  className?: string;

  /** Style props */
  polygonIconTop?: CSSProperties["top"];
  polygonIconPosition?: CSSProperties["position"];
  polygonIconAlignSelf?: CSSProperties["alignSelf"];
  polygonIconLeft?: CSSProperties["left"];
  polygonIconFlex?: CSSProperties["flex"];
  searchLabelOverflow?: CSSProperties["overflow"];
  email?: string;
  username?: string;
};

const TopMain1: NextPage<TopMain1Type> = ({
  className = "",
  polygonIconTop,
  polygonIconPosition,
  polygonIconAlignSelf,
  polygonIconLeft,
  polygonIconFlex,
  searchLabelOverflow,
  email,
  username,
}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const topMainStyle: CSSProperties = useMemo(() => {
    return {
      top: polygonIconTop,
      position: polygonIconPosition,
      alignSelf: polygonIconAlignSelf,
      left: polygonIconLeft,
      flex: polygonIconFlex,
    };
  }, [
    polygonIconTop,
    polygonIconPosition,
    polygonIconAlignSelf,
    polygonIconLeft,
    polygonIconFlex,
  ]);
  const router = useRouter();
  const RedirectProfile = useCallback((e) => {
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

  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {
    if (searchQuery.trim()) {
      router.push(`/search?query=${encodeURIComponent(searchQuery)}`);
    }
  };
  const handleSearchSubmit = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && searchQuery.trim()) {
      router.push(`/search?query=${encodeURIComponent(searchQuery.trim())}`);
    }
  };
  return (
    
    <header
      className={`self-stretch flex flex-row items-center justify-center w-full max-w-full z-[2] text-left text-xl text-dimgray-600 font-inter ${className}`}
    >
      <div
        className="flex-1 self-stretch justify-between  rounded-tl-none rounded-tr-3xs rounded-b-none [background:linear-gradient(180deg,_#fff,_#f3f3f7_66.67%,_rgba(243,_243,_247,_0.88))] overflow-hidden flex flex-row items-center  pt-[38px] pb-6 pl-[46px] pr-[45px] box-border gap-7 max-w-full"
      >
        <div className="flex-1 rounded-[40px] shadow-[0px_0px_4px_rgba(0,_0,_0,_0.25)] rounded-21xl bg-white flex flex-row items-start justify-between py-0 pl-0 pr-[17px] box-border max-w-[541px] gap-5 z-[1]">
          <div className="self-stretch w-[541px] relative shadow-[0px_0px_4px_rgba(0,_0,_0,_0.25)] rounded-21xl bg-white hidden max-w-full" />
          <div className="w-[352px] flex flex-row items-center justify-center gap-[21px] max-w-full">
            
            <input
              className="w-full pl-6 [border:none] [outline:none] bg-[transparent] h-14 flex-1 flex flex-col items-center justify-center box-border font-inter text-xl text-silver-100 min-w-[137px]"
              placeholder="Search"
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={handleSearchSubmit}
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
        <button onClick={() => signOut()} className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Sign out</button>
      </div>
    </div>
  )}
</div>

      </div>
    </header>
  );
};

export default TopMain1;
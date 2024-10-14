import { useRouter } from 'next/navigation';
import React, { useCallback, useEffect, useState } from 'react';
import {signOut, useSession } from "next-auth/react";


const SearchBar: React.FC = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
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
    <main className="flex flex-wrap gap-10 items-center justify-between max-md:max-w-full pl-[48px] min-h-[100px] w-[1614px] border-[#DCD9D9] border-b  bg-white">
      <div className="flex flex-col self-stretch my-auto text-xl leading-none w-[859px] rounded-none max-md:max-w-full">
        <div className="flex flex-wrap gap-5 justify-between py-px pr-3.5 w-full bg-white rounded-lg shadow-[0px_0px_4px_rgba(0,0,0,0.25)] max-md:max-w-full">
          <div className="flex flex-wrap gap-10 max-md:max-w-full">
            <button className="flex gap-3 items-start px-6 pt-3 pb-4 whitespace-nowrap rounded-tl-lg rounded-bl-lg bg-slate-50 text-neutral-600 max-md:px-5">
              <span>All</span>
              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/2000f40c53a438c8d0cbeac1ddcf5b54f104dc9b3d125002f9f1debf1f21008a?placeholderIfAbsent=true&apiKey=565a4f47f66640df9558be0a177ed686" alt="" className="object-contain shrink-0 mt-2.5 rounded-sm aspect-[1.83] w-[11px]" />
            </button>
            <input
              type="text"
              className="flex-auto my-auto text-stone-300 w-[386px]"
              placeholder="Search by Title, Author, Keyword or ISBN"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={handleSearchSubmit}
              
            />
          </div>
          <img onClick={handleSearch} loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/bee0b6224fd289a9874a3dc82b4702572992fe742326e3989240891f0978e108?placeholderIfAbsent=true&apiKey=565a4f47f66640df9558be0a177ed686" alt="" className="object-contain shrink-0 my-auto aspect-square w-[18px]" />
        </div>
      </div>
      <div className="flex gap-10 items-center self-stretch my-auto pr-[48px]">
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/8bed8fcabe491fc99f67a4757cdb5be2b0bf4ab3f969ac7caf6c644d6fd0c056?placeholderIfAbsent=true&apiKey=565a4f47f66640df9558be0a177ed686" alt="" className="object-contain shrink-0 self-stretch my-auto w-5 aspect-[1.33]" />
        <div className="flex flex-col items-center justify-center">
      <img
        className="w-[30px] h-[30px] relative rounded-[50%] object-cover"
        alt=""
        src="/profile.jpg"
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
      />
      {isDropdownOpen && (
    <div className="fixed right-0 top-[60px] mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-[1010]">
      <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
        <a href="" onClick={RedirectProfile} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Profile</a>
        <button onClick={() => signOut()} className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Sign out</button>
      </div>
    </div>
  )}
    </div>      </div>
    </main>
  );
};

export default SearchBar;
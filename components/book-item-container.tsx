"use client"
import type { NextPage } from "next";
import { useMemo, type CSSProperties, useCallback, useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

export type BookItemContainerType = {
  className?: string;
  url?: string;
  title?: string;
  author?: string;
  year?: string;

  /** Style props */
  dontMakeMeWidth?: CSSProperties["width"];
  spanHeight?: CSSProperties["height"];
  spanDisplay?: CSSProperties["display"];
  propHeight?: CSSProperties["height"];
  propHeight1?: CSSProperties["height"];

  /** Action props */
  onBookItemContainerClick?: () => void;
};

const BookItemContainer: NextPage<BookItemContainerType> = ({
  className = "",
  onBookItemContainerClick,
  dontMakeMeWidth,
  url,
  title,
  spanHeight,
  spanDisplay,
  author,
  year,
  propHeight,
  propHeight1,
}) => {
  const bookItemContainerStyle: CSSProperties = useMemo(() => {
    return {
      width: dontMakeMeWidth,
    };
  }, [dontMakeMeWidth]);

  const dontMakeMeStyle: CSSProperties = useMemo(() => {
    return {
      height: spanHeight,
      display: spanDisplay,
    };
  }, [spanHeight, spanDisplay]);

  const authorStyle: CSSProperties = useMemo(() => {
    return {
      height: propHeight,
    };
  }, [propHeight]);

  const bookRatingsStyle: CSSProperties = useMemo(() => {
    return {
      height: propHeight1,
    };
  }, [propHeight1]);

  const router = useRouter();

  const onBookItemContainerClick1 = useCallback(() => {
    router.push("/book-preview");
  }, [router]);

  const [thumbnail, setThumbnail] = useState<string | null>(null);

  const fetchThumbnail = useCallback(async () => {
    if (!url) return;
    try {
      const response = await axios.get('/api/get-book-thumbnail', {
        params: { fileLink: url }, // Ensure parameter name matches API
      });
      setThumbnail(response.data.thumbnailLink);
    } catch (err) {
      console.log('Failed to fetch thumbnail:', err);
    }
  }, [url]);

  useEffect(() => {
    fetchThumbnail();
  }, [fetchThumbnail]);

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
      { screenSize === 'large' && (

      
    <div
      className={`w-[160px] h-[260px] rounded-[10px] bg-white overflow-hidden shrink-0 flex flex-col items-start justify-center px-[15px] box-border gap-3 cursor-pointer text-left text-3xs text-dimgray-600 font-inter ${className}`}
      onClick={onBookItemContainerClick}
      style={bookItemContainerStyle}
    >
      <div>



      </div>
      <div className="self-stretch  flex flex-row items-start justify-center py-0 pr-0.5">
        {thumbnail ?

          <img
          className="h-[170px] rounded-[5px] flex-1 relative rounded-8xs max-w-full overflow-hidden object-cover"
          loading="lazy"
          alt=""
          src={thumbnail}
          /> :
          <img
          className="h-[170px] rounded-[5px] flex-1 relative rounded-8xs max-w-full overflow-hidden object-cover"
          loading="lazy"
          alt=""
          src="rectangle-12-35@2x.png"
          />
        }
      </div>
      <div className="self-stretch flex flex-col items-start justify-start gap-[5px]">
        <div
          className="self-stretch relative text-10pt whitespace-nowrap leading-[128.52%]"
          style={dontMakeMeStyle}
        >
          {title}
        </div>
        <div
          className="w-[101px] relative text-8pt leading-[14px] inline-block"
          style={authorStyle}
        >
          {author}, {year}
        </div>
        <div
          className="w-[101px] relative text-8pt leading-[128.52%] inline-block"
          style={bookRatingsStyle}
        >
          <span>4.5</span>
          <span className="text-darkgray-200">/5</span>
        </div>
      </div>
    </div>
    )}
    {screenSize ==='small' && (
      <div className="bg-card p-2 rounded-lg">
      {thumbnail ? 
      <img src={thumbnail} alt="Don't Make Me Think" className="w-full h-auto rounded-lg"></img>
      :
      <img src="https://placehold.co/150x200" alt="Don't Make Me Think" className="w-full h-auto rounded-lg"></img>
}
      <p className="font-semibold">{title}</p>
      <p className="text-sm">{author}, {year}</p>
      <p className="text-sm">4.5/5</p>
    </div>
    )}
    </main>
  );
};

export default BookItemContainer;

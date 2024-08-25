import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";

export type BookInformationType = {
  className?: string;

  /** Action props */
  onGroupButtonClick?: () => void;
};

const BookInformation: NextPage<BookInformationType> = ({
  className = "",
  onGroupButtonClick,
}) => {
  const router = useRouter();

  const onGroupButtonClick1 = useCallback(() => {
    router.push("/book-preview");
  }, [router]);

  return (
    <div
      className={`w-[179px] flex flex-col items-start justify-start pt-[34.5px] px-0 pb-0 box-border ${className}`}
    >
      <div className="self-stretch flex flex-row items-start justify-between gap-5">
        <img
          className="h-[30px] w-[30px] relative overflow-hidden shrink-0 min-h-[30px] z-[1]"
          loading="lazy"
          alt=""
          src="/heart.svg"
        />
        <button
          className="cursor-pointer border-tomato-100 border-[1px] border-solid py-1 pl-[13px] pr-3 bg-[transparent] w-[85px] rounded-8xs box-border flex flex-row items-start justify-start z-[1] hover:bg-tomato-700 hover:border-tomato-500 hover:border-[1px] hover:border-solid hover:box-border"
          onClick={onGroupButtonClick}
        >
          <div className="h-[30px] w-[85px] relative rounded-8xs border-tomato-100 border-[1px] border-solid box-border hidden" />
          <div className="flex-1 relative text-mini font-inter text-tomato-100 text-center inline-block min-w-[60px] z-[1]">
            Preview
          </div>
        </button>
      </div>
    </div>
  );
};

export default BookInformation;

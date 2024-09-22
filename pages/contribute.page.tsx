"use client"
import type { NextPage } from "next";
import { useRouter } from "next/navigation";
import TopMain1 from "@/components/top-main1";
import { useCallback, useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import SideBar from "@/components/side-bar";

const Contribute: NextPage = () => {
  const router = useRouter();

  const onSearchMenuContainerClick = useCallback(() => {
    router.push("/search");
  }, [router]);

  const onGroupButtonClick = useCallback(() => {
    router.push("/contribute-complete");
  }, [router]);

  const { data: session } = useSession(); // Get session data
  const [email, setEmail] = useState<string | null>(null);
  const [bookTitle, setBookTitle] = useState("");
  const [authorName, setAuthorName] = useState("");
  const [motive, setMotive] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [isCategoryDropdownOpen, setIsCategoryDropdownOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('');

  useEffect(() => {
    // Get email from session or local storage
    if (session?.user?.email) {
      setEmail(session.user.email);
    } else {
      const storedEmail = localStorage.getItem("email");
      setEmail(storedEmail);
    }
  }, [session]);

  const handleBookRequestSubmit = async () => {
    if (!bookTitle || !authorName) {
      alert("Please fill out the required fields");
      return;
    }

    try {
      const response = await fetch("/api/book-request", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: bookTitle,
          author: authorName,
          category: selectedCategory,
          motive: motive,
          user: email,
        }),
      });

      const data = await response.json();
      if (response.ok) {
        
        // Set submitted to true to render the "after submitting" part
        setSubmitted(true);
        setBookTitle("");
        setAuthorName("");
        setMotive("");
      } else {
        alert("Failed to submit book request: " + data.error);
      }
    } catch (error) {
      console.error("Error submitting book request:", error);
      alert("There was an error. Please try again.");
    }
  };
  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
    setIsCategoryDropdownOpen(false);
  };
  return (
    <div className="w-full h-[900px] overflow-y-auto scrollbar-hidden relative bg-white leading-[normal] tracking-[normal] text-left text-xl text-black font-inter mq1300:h-auto mq1300:min-h-[1080]">
      <img
        className="fixed object-cover top-0 left-[-37.3px] w-full h-full"
        alt=""
        src="/bg-vector1.svg"
      />
      <div className="absolute h-[900px] overflow-y-auto scrollbar-hidden top-[48px]  bg-[#F3F3F7] left-[341px] rounded-3xs bg-whitesmoke-200 w-[1544px] flex flex-col items-start justify-start pt-0 px-0 pb-[216px] box-border gap-[98px] max-w-full z-[1]">
        <div className="self-stretch h-full relative rounded-tl-none rounded-tr-3xs rounded-br-3xs rounded-bl-none bg-whitesmoke-200 shrink-0 hidden" />
        <TopMain1
          polygonIconTop="0"
          polygonIconPosition="sticky"
          polygonIconAlignSelf="stretch"
          polygonIconLeft="unset"
          polygonIconFlex="unset"
          searchLabelOverflow="hidden"
        />
        <div className="w-[1452px] flex flex-row items-start justify-start py-0 px-[68px] box-border max-w-full">
          <div className="flex-1 flex flex-row items-start justify-start gap-14 max-w-full mq1300:flex-wrap">
            <div className="flex-1 flex flex-col items-start justify-start pt-1.5 px-0 pb-0 box-border min-w-[441px] max-w-full mq800:min-w-full">
              {!submitted ? (
                // before submitting
                <div className="self-stretch rounded-[10px] bg-white flex flex-col items-start justify-start pt-7 pb-[47px] pl-[61px] pr-[51px] box-border gap-[41px] max-w-full z-[2]">
                  <div className="w-[678px] h-[562px] relative rounded-3xs bg-white hidden max-w-full" />
                  <div className="w-[338px] flex flex-row items-start justify-start py-0 px-0.5 box-border max-w-full">
                    <div className="flex-1 relative leading-[26px] inline-block max-w-full z-[1] mq450:text-base mq450:leading-[21px]">
                      Fill up Book Details
                    </div>
                  </div>
                  <div className="self-stretch flex flex-col items-start justify-start gap-[18px] max-w-full text-center text-base text-dimgray-600">
                    <div className="self-stretch flex flex-row items-start justify-start gap-[37px] max-w-full mq800:flex-wrap">
                      <div className="flex-1 rounded-[5px] bg-white border-lightgray-100 border-[1px] border-solid box-border flex flex-row items-start justify-start pt-[18px] px-5 pb-1.5 min-w-[233px] max-w-full z-[1]">
                        <div className="h-[59px] w-[359px] relative rounded-3xs bg-white border-lightgray-100 border-[1px] border-solid box-border hidden" />
                        <input
                          className="w-[255px] [border:none] [outline:none] font-medium font-inter text-base bg-[transparent] h-[31px] relative text-darkgray-600 text-left inline-block p-0 z-[1]"
                          placeholder="Book title"
                          type="text"
                          value={bookTitle}
                          onChange={(e) => setBookTitle(e.target.value)}
                        />
                      </div>
                      <div
                        className="w-[170px] shadow-[0px_0px_4px_rgba(0,_0,_0,_0.25)] rounded-[40px] bg-white flex flex-row items-start justify-start pt-[11px] pb-2.5 pl-[27px] pr-6 box-border gap-[11px] cursor-pointer"
                        onClick={() => setIsCategoryDropdownOpen(!isCategoryDropdownOpen)}
                      >
                        <div className="h-[47px] w-[170px] relative shadow-[0px_0px_4px_rgba(0,_0,_0,_0.25)] rounded-11xl bg-white hidden" />

                        <div className="flex-1 relative leading-[26px] z-[1] mq450:text-base mq450:leading-[21px]">
                          {selectedCategory || "Category"}
                        </div>
                      </div>

                      {isCategoryDropdownOpen && (
                        <div className="absolute mb-2 ml-8 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-[1010]" style={{ top: '43%', left: '31%' }}>
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
                    <div className="self-stretch flex flex-row items-center justify-center gap-[37px] max-w-full text-left text-darkgray-600 mq800:flex-wrap">
                      <div className="flex-1 flex flex-col items-center justify-center gap-[46px] min-w-[233px] max-w-full">
                        <div className="self-stretch flex flex-col items-center justify-center gap-[18px] max-w-full">
                          <div className="self-stretch rounded-[5px] bg-white border-lightgray-100 border-[1px] border-solid box-border flex flex-row items-start justify-start pt-[18px] px-5 pb-1.5 whitespace-nowrap max-w-full z-[1]">
                            <div className="h-[59px] w-[359px] relative rounded-3xs bg-white border-lightgray-100 border-[1px] border-solid box-border hidden max-w-full" />
                            <input
                              className="w-[255px] [border:none] [outline:none] font-medium font-inter text-base bg-[transparent] h-[31px] relative text-darkgray-600 text-left inline-block p-0 z-[1]"
                              placeholder="Author Name"
                              type="text"
                              value={authorName}
                              onChange={(e) => setAuthorName(e.target.value)}
                            />
                          </div>
                          <textarea
                            className="border-lightgray-100 border-[1px] border-solid bg-white h-[159px] w-auto [outline:none] self-stretch rounded-3xs box-border flex flex-row items-start justify-start p-5 font-inter font-medium text-base text-darkgray-600 z-[1]"
                            placeholder="Reason For Your Contribution"
                            rows={8}
                            cols={18}
                            value={motive}
                            onChange={(e) => setMotive(e.target.value)}
                          />
                        </div>
                        <div className="-w-[320px] h-[61px] flex flex-col items-center justify-center box-border">
                          <button
                            className="flex- flex-row items-center justify-center cursor-pointer w-[320px] h-[61px] [border:none bg-[#F4683C] text-white text-18pt font-medium rounded-[5px] pt-1.5 px-2.5 pb-[7px] bg-tomato-200 flex-1 rounded-8xs flex flex-row items-start justify-start whitespace-nowrap z-[1] hover:bg-tomato-600"
                            onClick={handleBookRequestSubmit}
                          >
                            Submit
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                // after submitting
                <div className="self-stretch rounded-[10px] bg-white flex flex-col items-center justify-start pt-[105px] px-5 pb-[140px] box-border gap-[55px] max-w-full z-[2]">
                  <div className="w-[678px] h-[562px] relative rounded-3xs bg-white hidden max-w-full" />
                  <div className="w-[334px] flex flex-row items-start justify-start pt-0 px-0 pb-2 box-border max-w-full">
                    <div className="flex-1 relative leading-[26px] inline-block max-w-full z-[1] mq450:text-base mq450:leading-[21px]">{`Thank you For your Submission `}</div>
                  </div>
                  <div className="w-[334px] flex flex-row items-start justify-center max-w-full">
                    <img
                      className="h-[140px] w-[140px] relative z-[1]"
                      alt=""
                      src="/vector-11.svg"
                    />
                  </div>
                  <div className="w-[334px] h-[33px] relative leading-[128.52%] inline-block shrink-0 max-w-full z-[1] mq450:text-base mq450:leading-[21px]">

                  </div>
                </div>
              )}
            </div>
            <div className="w-[582px] flex flex-col items-center justify-center pt-[180px] gap-[76px] min-w-[582px] max-w-full text-31xl text-dimgray-600 mq800:min-w-full mq1300:flex-1">
              <div className="m-0 py-0 self-stretch relative text-inherit leading-[128.52%] font-bold font-[inherit] z-[1] mq800:text-21xl mq800:leading-[51px] mq450:text-11xl mq450:leading-[39px]">
                <span className="text-48pt text-[#4D4D4D] pr-4">{`Your `}</span>
                <span className="text-[#F4683C] text-48pt">{`Contribution `}</span>
              </div>
              <div className="pl-2 m-0 py-0 self-stretch relative text-inherit leading-[128.52%] font-bold font-[inherit] z-[1] mq800:text-21xl mq800:leading-[51px] mq450:text-11xl mq450:leading-[39px]">
                <span className="text-48pt text-[#4D4D4D] whitespace-nowrap">Helps Other to Learn</span>
              </div>
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
        onSearchMenuContainerClick={onSearchMenuContainerClick}
        search="/search-1.svg"
        propColor="#8a8a8a"
        giveGift="/give-gift2.svg"
        propColor1="#4d4d4d"
      />
    </div>
  );
};

export default Contribute;

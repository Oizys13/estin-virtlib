import React, { useState } from 'react';
import Quote from './quote';
import quotes from './quotesList'

function getRandomQuotes(quotesArray) {
  // Shuffle the array
  const shuffled = quotesArray.sort(() => 0.5 - Math.random());
  // Get the first 4 elements
  return shuffled.slice(0, 4);
}
const randomQuotes = getRandomQuotes(quotes);


const Carousel = () => {
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const handleButtonClick = (index) => {
    setCurrentIndex(index);
  };

  return (
      <div className="flex-1 flex flex-col items-start justify-start gap-[58px] max-w-full px-11">
        <div className="w-[547px] h-[233px] rounded-[10px] bg-gradient-to-br from-[#bc4344] to-[#7b2a8c] overflow-hidden shrink-0 flex flex-col items-start justify-start pt-[33px] px-[23px] pb-[27px] box-border gap-5 min-w-[547px] max-w-full z-[1] mq800:min-w-full mq1300:flex-1">

          <Quote quote={randomQuotes[currentIndex].quote} />
          <div className="w-[487px] flex flex-row items-start justify-start max-w-full text-right ">
            <h1 className="m-0 h-[31px] w-[487px] text-white relative text-inherit leading-[128.52%] font-normal font-[inherit] inline-block shrink-0 max-w-full mq450:text-base mq450:leading-[21px]">
              -{randomQuotes[currentIndex].author}
            </h1>
            <div className="flex flex-col items-start justify-start pt-[10px] px-0 pb-0 ml-[-474px]">
              <div className="flex flex-row items-start justify-start gap-2.5">
              {randomQuotes.map((_, index) => (
                <button
                  key={index}
                  id={index + 1}
                  className={`h-[10px] w-[10px] relative rounded-[50%] bg-purple border-white border-[1px] border-solid box-border ${
                    currentIndex === index ? 'bg-white' : 'bg-purple'
                  }`}
                  onClick={() => handleButtonClick(index)}
                ></button>
              ))}
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Carousel;
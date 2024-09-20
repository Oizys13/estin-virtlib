import React, { useState, useEffect } from 'react';
import Quote from './quote';
import quotes from './quotesList'

function getRandomQuotes(quotesArray: typeof quotes) {
  const shuffled = [...quotesArray].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, 4);
}

const randomQuotes = getRandomQuotes(quotes);

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [screenSize, setScreenSize] = useState('large');

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
    checkScreenSize();

    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const handleButtonClick = (index: number) => {
    setCurrentIndex(index);
  };

  if (screenSize === 'large') {
    return (
      <div className="flex-1 flex flex-col items-start justify-start gap-[58px] max-w-full px-11">
        <div className="w-[547px] h-[233px] rounded-[10px] bg-gradient-to-br from-[#bc4344] to-[#7b2a8c] overflow-hidden shrink-0 flex flex-col items-start justify-start pt-[33px] px-[23px] pb-[27px] box-border gap-5 min-w-[547px] max-w-full z-[1] mq800:min-w-full mq1300:flex-1">
          <Quote quote={randomQuotes[currentIndex].quote} author={randomQuotes[currentIndex].author} />
          <div className="w-[487px] flex flex-row items-start justify-start max-w-full text-right ">
            <h1 className="m-0 h-[31px] w-[487px] text-white relative text-inherit leading-[128.52%] font-normal font-[inherit] inline-block shrink-0 max-w-full mq450:text-base mq450:leading-[21px]">
              -{randomQuotes[currentIndex].author}
            </h1>
            <div className="flex flex-col items-start justify-start pt-[10px] px-0 pb-0 ml-[-474px]">
              <div className="flex flex-row items-start justify-start gap-2.5">
              {randomQuotes.map((_, index) => (
                <button
                  key={index}
                  id={(index + 1).toString()}
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
  } else {
    return (
      <div className="flex flex-col items-center justify-start w-full px-4 py-6">
        <div className="w-full max-w-[380px] h-auto rounded-[10px] bg-gradient-to-br from-[#bc4344] to-[#7b2a8c] overflow-hidden flex flex-col items-start justify-start pt-6 px-4 pb-4 box-border gap-4">
          <Quote quote={randomQuotes[currentIndex].quote} author={randomQuotes[currentIndex].author} />
          <div className="w-full flex flex-col items-start justify-start text-right">
            <h1 className="m-0 w-full text-white text-sm leading-[128.52%] font-normal font-inherit">
              -{randomQuotes[currentIndex].author}
            </h1>
            <div className="w-full flex justify-center mt-4">
              <div className="flex flex-row items-center justify-center gap-2">
              {randomQuotes.map((_, index) => (
                <button
                  key={index}
                  id={(index + 1).toString()}
                  className={`h-[8px] w-[8px] relative rounded-[50%] bg-purple border-white border-[1px] border-solid box-border ${
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
  }
};

export default Carousel;
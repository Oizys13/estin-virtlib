import React, { useState } from 'react';

import quotes from './quotesList'

function getRandomQuotes(quotesArray: typeof quotes) {
    const shuffled = [...quotesArray].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 4);
}

const randomQuotes = getRandomQuotes(quotes);
const QuoteComponent: React.FC = () => {
    const paginationItems = [
        { active: true, ariaLabel: "Current page" },
        { active: false, ariaLabel: "Page 2" },
        { active: false, ariaLabel: "Page 3" },
        { active: false, ariaLabel: "Page 4" },
    ];
    const [currentIndex, setCurrentIndex] = useState(0);
    const handleButtonClick = (index: number) => {
        setCurrentIndex(index);
      };
    return (
        <section className="flex relative w-[547px] h-[250px] rounded-[10px] flex-col py-10 max-md:max-w-full">
            <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/971aa0fd280d950b9792349dc6e98065700ebb780152e31b714ea2507adf15f9?placeholderIfAbsent=true&apiKey=565a4f47f66640df9558be0a177ed686"
                alt=""
                className="object-cover absolute inset-0 size-full rounded-[10px]"
            />
            <div className="flex relative flex-col px-9 text-xl leading-none text-white max-md:px-5 max-md:max-w-full">
                <h2 className="self-start text-2xl font-semibold">Today's Quote</h2>
                <p className="mt-7 mr-9 leading-8 max-md:mr-2.5 max-md:max-w-full">
                    "{randomQuotes[currentIndex].quote}"
                </p>
            </div>
            <nav className="flex absolute bottom-0 gap-2.5 justify-between items-end self-start pb-[40px] mb-2 ml-9 max-md:ml-2.5" aria-label="Quote pagination">
            {randomQuotes.map((_, index) => (
                    <button
                    key={index}
                    id={(index + 1).toString()}
                        className={`flex shrink-0 w-2.5 h-2.5 rounded-full border border-white border-solid ${currentIndex === index ? 'bg-white' : 'bg-fuchsia-800'}`}
                        onClick={() => handleButtonClick(index)}    
                    />
                ))}
                <div className="self-end mt-9 pl-[240px] pb-[20px] text-right">
                    <span className="italic text-white">-</span>
                    <span className="italic text-white">{randomQuotes[currentIndex].author}</span>
                </div>
            </nav>
        </section>
    );
};

export default QuoteComponent;
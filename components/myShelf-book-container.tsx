import React, { useState, useCallback, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';

interface BookProps {
    isbn: string;
    title: string;
    author: string;
    year: string;
    url: string;
}



const MyShelfBookContainer: React.FC<BookProps> = ({ isbn, title, author, year, url }) => {
    const [thumbnail, setThumbnail] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);

    const fetchThumbnail = useCallback(async () => {
        if (!url) return;
        try {
            const response = await axios.get('/api/get-book-thumbnail', {
                params: { fileLink: url }, // Ensure parameter name matches API
            });
            setThumbnail(response.data.thumbnailLink);
            setError(null); // Clear any previous errors
        } catch (err) {
            console.log('Failed to fetch thumbnail:', err);
            setError('Failed to load image');
        }
    }, [url]);

    useEffect(() => {
        fetchThumbnail();
    }, [fetchThumbnail]);
    const router = useRouter(); // Initialize the router

    const handlePreviewClick = () => {
      router.push(`/book/${isbn}`); // Navigate to /book/{isbn}
    };

    return (
        <div className="w-[390px] h-[260px] shadow-md rounded-lg bg-white flex flex-row ">
            <div className="flex flex-col items-center justify-center">
                <img src={thumbnail} alt={`${title} Book Cover`} className="w-[200px] h-[300px] rounded-md pl-[10px] " />
            </div>

            <div className="mt-6 flex flex-col items-center justify-center">
                <span className="font-bold text-14pt">{title}</span>
                <span className="text-muted-foreground text-10pt">{author}, {year}</span>
                <button onClick={() => {window.open(url, '_blank');}} className="cursor-pointer [border:none] pt-1.5 px-2.5 pb-[7px] bg-coral-100 w-[209px] rounded-[10px] flex flex-row items-start justify-start box-border z-[1] hover:bg-coral-200">
                    <div className="h-[61px] w-[209px] bg-[#41B64D] relative rounded-[10px] bg-coral-100 hidden" />
                    <span className="h-[61px] flex-1 relative text-xl leading-[12px] bg-[#41B64D] rounded-[5px] font-semibold font-inter text-white text-center flex items-center justify-center z-[1] mq450:text-base mq450:leading-[10px]">
                        Download
                    </span>
                </button>
                <button onClick={handlePreviewClick} className="cursor-pointer [border:none] pt-1.5 px-2.5 pb-[7px] bg-coral-100 w-[209px] rounded-[10px] flex flex-row items-start justify-start box-border z-[1] hover:bg-coral-200">
                    <div className="h-[61px] w-[209px] bg-[#F27851] relative rounded-[10px] bg-coral-100 hidden" />
                    <span className="h-[61px] flex-1 relative text-xl leading-[12px] bg-[#F27851] rounded-[5px] font-semibold font-inter text-white text-center flex items-center justify-center z-[1] mq450:text-base mq450:leading-[10px]">
                        Preview
                    </span>
                </button>
            </div>
        </div>
    )
}

export default MyShelfBookContainer
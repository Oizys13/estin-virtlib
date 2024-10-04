"use client";
import React, { useState } from 'react';
import axios from 'axios';
import TopMain1 from './top-main1';
import SideBar from './side-bar';
import TopBar from './TopBar';

const AddBook = () => {
    const [file, setFile] = useState<File | null>(null);
    const [uploadStatus, setUploadStatus] = useState<string>('');
    const [isbn, setIsbn] = useState("");
    const [bookTitle, setBookTitle] = useState("");
    const [authorName, setAuthorName] = useState("");
    const [year, setYear] = useState("");
    const [languages, setLanguages] = useState("");
    const [numPages, setNumPages] = useState("");
    const [downloadable, setDownloadable] = useState("Yes");
    const [hardCopy, setHardCopy] = useState("Yes");
    const [publisher, setPublisher] = useState("");
    const [url, setUrl] = useState(""); // URL for the uploaded file
    const [tags, setTags] = useState<string>("");

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            setFile(e.target.files[0]);
        }
    };

    const handleAddTag = () => {
        if (tags) {
            setTags(tags + ',');
        }
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!file) {
            setUploadStatus("No file selected.");
            return;
        }

        setUploadStatus("Uploading...");

        const formData = new FormData();
        formData.append('file', file);

        try {
            const response = await axios.post('/api/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            const fileId = response.data.fileId;
            const fileUrl = `https://drive.google.com/file/d/${fileId}/view`;

            setUrl(fileUrl);
            setUploadStatus(`File uploaded successfully! File ID: ${fileId}`);

            // Now that the PDF is uploaded, submit the book information to MongoDB
            const bookData = {
                isbn,
                title: bookTitle,
                author: authorName,
                year,
                languages,
                numPages,
                downloadable,
                hardCopy,
                publisher,
                url: fileUrl,
                tags
            };

            await axios.post('/api/upload-book-info', bookData); // Call the API to insert the book information into MongoDB

            setUploadStatus("Book added successfully!");
            setIsbn("");
            setBookTitle("");
            setAuthorName("");
            setYear("");
            setLanguages("");
            setNumPages("");
            setDownloadable("");
            setHardCopy("");
            setPublisher("");
            setTags("");

        } catch (error) {
            console.error('Error uploading file or adding book:', error);
            setUploadStatus(`Error: ${error.message}`);
        }
    };

    return (
        

        
        <div className="flex flex-col gap-2 overflow-y-auto scrollbar-hidden">
                    <div className="h-[900px] w-full relative leading-[normal] tracking-[normal] text-left text-mini text-dimgray-600 font-inter ">
                        
                        <div className="absolute h-[900px] self-stretch left-[306px] bg-[#FAFAFA] rounded-3xs  flex flex-col items-start justify-start pb-0 box-border gap-5 max-w-full z-[1]">
                    <div className="self-stretch h-full relative rounded-tl-none rounded-tr-3xs rounded-br-3xs rounded-bl-none bg-whitesmoke-200 shrink-0 hidden" />
                    <TopBar/>
                    <div className="w-[180px] flex flex-row items-center justify-center gap-[9px] pl-[44px]">
                        <img
                            className="h-5 w-5 relative overflow-hidden shrink-0 min-h-[20px] z-[1]"
                            loading="lazy"
                            alt=""
                            src="/heroiconsoutlinearrowsmallleft1.svg"
                        />
                        <span className="m-0 flex-1 text-[#4D4D4D] text-14pt whitespace-nowrap relative text-inherit leading-[128.52%] font-normal font-[inherit] z-[1]">
                            Back to books
                        </span>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className='w-full h-full flex flex-col items-start pl-[138px] pr-[190px] '>
                            <div className='w-[1216px] h-[775px] bg-white rounded-[12px] flex flex-col justify-start shadow-lg px-[40px] py-[32px] '>
                                <span className='text-14pt text-inherit font-bold'>Book Info</span>
                                <br />
                                <br />
                                <div className='flex flex-row w-[1152] h-[132px] justify-between '>
                                    <div className='flex flex-col'>
                                        <span className='text-[#8E95A9]'>Book ISBN</span>
                                        <input
                                            type="text"
                                            name="isbn"
                                            className='w-[304px] h-[48px] border-[#CDD1DE] border-[1px] rounded-[4px] mt-2 px-3'
                                            onChange={(e) => setIsbn(e.target.value)}
                                        />
                                    </div>
                                    <div className='flex flex-col'>
                                        <span className='text-[#8E95A9]'>Book Title</span>
                                        <input
                                            type="text"
                                            name="title"
                                            className='w-[512px] h-[48px] border-[#CDD1DE] border-[1px] rounded-[4px] mt-2 px-3'
                                            value={bookTitle}
                                            onChange={(e) => setBookTitle(e.target.value)}
                                        />
                                    </div>
                                    <div className='flex flex-col'>
                                        <span className='text-[#8E95A9]'>Author</span>
                                        <input
                                            type="text"
                                            name="author"
                                            className='w-[272px] h-[48px] border-[#CDD1DE] border-[1px] rounded-[4px] mt-2 px-3'
                                            value={authorName}
                                            onChange={(e) => setAuthorName(e.target.value)}
                                        />
                                    </div>
                                    <br />
                                    <br />
                                    <br />
                                </div>
                                <div className='flex flex-row w-[1152] h-[132px] justify-between '>
                                    <div className='flex flex-col'>
                                        <span className='text-[#8E95A9]'>Year</span>
                                        <input
                                            type="text"
                                            name="year"
                                            className='w-[264] h-[48px] border-[#CDD1DE] border-[1px] rounded-[4px] mt-2 px-3'
                                            value={year}
                                            onChange={(e) => setYear(e.target.value)}
                                        />
                                    </div>
                                    <div className='flex flex-col'>
                                        <span className='text-[#8E95A9]'>Language</span>
                                        <select
                                            name="category"
                                            
                                            className='w-[264px] h-[48px] border-[#CDD1DE] border-[1px] rounded-[4px] mt-2 px-3'
                                            value={languages}
                                            onChange={(e) => setLanguages(e.target.value)}
                                        >
                                            <option value=""></option>
                                            <option value="English">English</option>
                                            <option value="French">French</option>
                                            <option value="Arabic">Arabic</option>
                                            
                                        </select>
                                    </div>
                                    <div className='flex flex-col'>
                                        <span className='text-[#8E95A9]'>Number of pages</span>
                                        <input
                                            type="text"
                                            name="numberOfPages"
                                            className='w-[264px] h-[48px] border-[#CDD1DE] border-[1px] rounded-[4px] mt-2 px-3'
                                            value={numPages}
                                            onChange={(e) => setNumPages(e.target.value)}
                                        />
                                    </div>
                                    <div className='flex flex-col'>
                                        <span className='text-[#8E95A9]'>Tags</span>
                                        <div className='w-[264px] h-[48px] border-[#CDD1DE] border-[1px] rounded-[4px] mt-2 px-3'>
                                            <input
                                                type="text"
                                                name="tags"
                                                className='w-full h-full'
                                                value={tags}
                                                onChange={(e) => setTags(e.target.value)}
                                                placeholder='Add tags separated by commas'
                                            />
                                        </div>
                                        <button onClick={handleAddTag}>Add Tag</button>
                                        {tags && tags.split(',').map((tag, index) => (
                                            <div key={index}>{tag}</div>
                                        ))}
                                    </div>
                                </div>
                                <div className='flex flex-row w-[910px] h-[132px] justify-between '>
                                    <div className='flex flex-col'>
                                        <span className='text-[#8E95A9]'>Downloadable</span>
                                        <select
                                            name="downloadable"
                                            className='w-[264px] h-[48px] border-[#CDD1DE] border-[1px] rounded-[4px] mt-2 px-3'
                                            value={downloadable}
                                            onChange={(e) => setDownloadable(e.target.value)}
                                        >
                                            <option value="Yes">Yes</option>
                                            <option value="No">No</option>
                                        </select>
                                    </div>
                                    <div className='flex flex-col'>
                                        <span className='text-[#8E95A9]'>Hard copy</span>
                                        <select
                                            name="hardCopy"
                                            className='w-[264px] h-[48px] border-[#CDD1DE] border-[1px] rounded-[4px] mt-2 px-3'
                                            value={hardCopy}
                                            onChange={(e) => setHardCopy(e.target.value)}
                                        >
                                            <option value="Yes">Yes</option>
                                            <option value="No">No</option>
                                        </select>
                                    </div>
                                    <div className='flex flex-col'>
                                        <span className='text-[#8E95A9]'>Publisher</span>
                                        <input
                                            type="text"
                                            name="publisher"
                                            className='w-[318px] h-[48px] border-[#CDD1DE] border-[1px] rounded-[4px] mt-2 px-3'
                                            value={publisher}
                                            onChange={(e) => setPublisher(e.target.value)}
                                        />
                                    </div>
                                </div>
                                <div className='flex flex-row w-[630px] h-[132px] justify-between '>
                                    <div className='flex flex-col'>
                                        <span className='text-[#8E95A9]'>Upload pdf file</span>
                                        <div className='w-[264px] h-[48px] border-[#CDD1DE] border-[1px] rounded-[4px] mt-2 px-3'>
                                            <input
                                                type='file'
                                                id='fileInput'
                                                className='w-full h-full'
                                                onChange={handleFileChange} accept=".pdf"
                                            />

                                        </div>
                                    </div>
                                </div>
                                <hr />
                                <div className='flex flex-row justify-end items-center w-[1152px] h-[78px] right-0 bottom-0 gap-16 mt-[32px]'>
                                    <button type='button' className='text-inherit font-medium'>Cancel</button>
                                    <button type='submit' className='bg-[#FF8901] rounded-[4px] w-[98px] h-[46px] text-white text-inherit font-medium'>Add</button>
                                </div>
                                {uploadStatus && <p>{uploadStatus}</p>}
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <SideBar
                propPosition="absolute"
                propTop="48px"
                propLeft="35px"
                propWidth="306px"
                propHeight="800px"
                propAlignSelf="unset"
                propFlex="unset"
                group3="/group-3@2x.png"
                propTextDecoration="unset"
                search="/search-1.svg"
                propColor="#8a8a8a"
                giveGift="/give-gift2.svg"
                propColor1="#4d4d4d"
            />
        </div>
        
    );
};

export default AddBook;

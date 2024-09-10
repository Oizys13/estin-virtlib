// "use client";
// import React, { useState } from 'react';
// import axios from 'axios';
// import TopMain1 from './top-main1';
// import SideBar from './side-bar';

// const AddBook = () => {


//     return (
//         <div className="flex flex-col gap-2">
//             <div className="h-[994px] w-[1544px] relative bg-white leading-[normal] tracking-[normal] text-left text-mini text-dimgray-600 font-inter ">
//                 <img
//                     className="fixed object-cover  top-0 left-[-37.3px] w-full h-full"
//                     alt=""
//                     src="/bg-vector1.svg"
//                 />
//                 <div className="absolute self-stretch top-[48px] left-[341px] bg-[#F3F3F7] rounded-3xs bg-whitesmoke-200 w-[1544px] overflow-y-auto flex flex-col items-start justify-start pb-[216px] box-border gap-5 max-w-full z-[1]">
//                     <div className="self-stretch h-full relative rounded-tl-none rounded-tr-3xs rounded-br-3xs rounded-bl-none bg-whitesmoke-200 shrink-0 hidden" />
//                     <TopMain1
//                         polygonIconTop="0"
//                         polygonIconPosition="sticky"
//                         polygonIconAlignSelf="stretch"
//                         polygonIconLeft="unset"
//                         polygonIconFlex="unset"
//                         searchLabelOverflow="hidden"
//                         username={name!}
//                     />
//                     <div className="w-[180px] flex flex-row items-center justify-center gap-[9px] pl-[44px]">
//                         <img
//                             className="h-5 w-5 relative overflow-hidden shrink-0 min-h-[20px] z-[1]"
//                             loading="lazy"
//                             alt=""
//                             src="/heroiconsoutlinearrowsmallleft1.svg"
//                         />
//                         <span className="m-0 flex-1 text-[#4D4D4D] text-14pt whitespace-nowrap relative text-inherit leading-[128.52%] font-normal font-[inherit] z-[1]">
//                             Back to books
//                         </span>
//                     </div>
//                     <form >
//                         <div className='w-full h-full flex flex-col items-start pl-[138px] pr-[190px] '>
//                             <div className='w-[1216px] h-[775px] bg-white rounded-[12px] flex flex-col justify-start shadow-lg px-[40px] py-[32px] '>
//                                 <span className='text-14pt text-inherit font-bold'>Book Info</span>
//                                 <br />
//                                 <br />
//                                 <div className='flex flex-row w-[1152] h-[132px] justify-between '>
//                                     <div className='flex flex-col'>
//                                         <span className='text-[#8E95A9]'>Book ISBN</span>
//                                         <input
//                                             type="text"
//                                             name="isbn"
                                            
//                                             className='w-[304px] h-[48px] border-[#CDD1DE] border-[1px] rounded-[4px] mt-2 px-3'
//                                         />
//                                     </div>
//                                     <div className='flex flex-col'>
//                                         <span className='text-[#8E95A9]'>Book Title</span>
//                                         <input
//                                             type="text"
//                                             name="title"
                                            
//                                             className='w-[512px] h-[48px] border-[#CDD1DE] border-[1px] rounded-[4px] mt-2 px-3'
//                                         />
//                                     </div>
//                                     <div className='flex flex-col'>
//                                         <span className='text-[#8E95A9]'>Author</span>
//                                         <input
//                                             type="text"
//                                             name="author"
                                           
//                                             className='w-[272px] h-[48px] border-[#CDD1DE] border-[1px] rounded-[4px] mt-2 px-3'
//                                         />
//                                     </div>
//                                     <br />
//                                     <br />
//                                     <br />
//                                 </div>
//                                 <div className='flex flex-row w-[1152] h-[132px] justify-between '>
//                                     <div className='flex flex-col'>
//                                         <span className='text-[#8E95A9]'>Overview</span>
//                                         <input
//                                             type="text"
//                                             name="overview"
                                            
//                                             className='w-[264] h-[48px] border-[#CDD1DE] border-[1px] rounded-[4px] mt-2 px-3'
//                                         />
//                                     </div>
//                                     <div className='flex flex-col'>
//                                         <span className='text-[#8E95A9]'>Language</span>
//                                         <input
//                                             type="text"
//                                             name="language"
                                           
//                                             className='w-[264] h-[48px] border-[#CDD1DE] border-[1px] rounded-[4px] mt-2 px-3'
//                                         />
//                                     </div>
//                                     <div className='flex flex-col'>
//                                         <span className='text-[#8E95A9]'>Number of pages</span>
//                                         <input
//                                             type="text"
//                                             name="numberOfPages"
                                            
//                                             className='w-[264px] h-[48px] border-[#CDD1DE] border-[1px] rounded-[4px] mt-2 px-3'
//                                         />
//                                     </div>
//                                     <div className='flex flex-col'>
//                                         <span className='text-[#8E95A9]'>Category</span>
//                                         <input
//                                             type="text"
//                                             name="category"
                                            
//                                             className='w-[264px] h-[48px] border-[#CDD1DE] border-[1px] rounded-[4px] mt-2 px-3'
//                                         />
//                                     </div>
//                                 </div>
//                                 <div className='flex flex-row w-[910px] h-[132px] justify-between '>
//                                     <div className='flex flex-col'>
//                                         <span className='text-[#8E95A9]'>Downloadable</span>
//                                         <select
//                                             name="downloadable"
                                            
//                                             className='w-[264px] h-[48px] border-[#CDD1DE] border-[1px] rounded-[4px] mt-2 px-3'
//                                         >
//                                             <option value="Yes">Yes</option>
//                                             <option value="No">No</option>
//                                         </select>
//                                     </div>
//                                     <div className='flex flex-col'>
//                                         <span className='text-[#8E95A9]'>Hard copy</span>
//                                         <select
//                                             name="hardCopy"
                                            
//                                             className='w-[264px] h-[48px] border-[#CDD1DE] border-[1px] rounded-[4px] mt-2 px-3'
//                                         >
//                                             <option value="Yes">Yes</option>
//                                             <option value="No">No</option>
//                                         </select>
//                                     </div>
//                                     <div className='flex flex-col'>
//                                         <span className='text-[#8E95A9]'>Publisher</span>
//                                         <input
//                                             type="text"
//                                             name="publisher"
                                            
//                                             className='w-[318px] h-[48px] border-[#CDD1DE] border-[1px] rounded-[4px] mt-2 px-3'
//                                         />
//                                     </div>
//                                 </div>
//                                 <div className='flex flex-row w-[630px] h-[132px] justify-between '>
//                                     <div className='flex flex-col'>
//                                         <span className='text-[#8E95A9]'>Upload pdf file</span>
//                                         <div className='w-[264px] h-[48px] border-[#CDD1DE] border-[1px] rounded-[4px] mt-2 px-3'>
//                                             <input
//                                                 type='file'
//                                                 id='fileInput'
//                                                 className='w-full h-full'
                                                
//                                             />
//                                             <label htmlFor="fileInput" className='hidden'>Upload</label>
//                                         </div>
//                                     </div>
//                                 </div>
//                                 <hr />
//                                 <div className='flex flex-row justify-end items-center w-[1152px] h-[78px] right-0 bottom-0 gap-16 mt-[32px]'>
//                                     <button type='button' className='text-inherit font-medium'>Cancel</button>
//                                     <button type='submit' className='bg-[#FF8901] rounded-[4px] w-[98px] h-[46px] text-white text-inherit font-medium'>Add</button>
//                                 </div>
//                             </div>
//                         </div>
//                     </form>
//                 </div>
//             </div>
//             <SideBar
//                 propPosition="absolute"
//                 propTop="48px"
//                 propLeft="35px"
//                 propWidth="306px"
//                 propHeight="800px"
//                 propAlignSelf="unset"
//                 propFlex="unset"
//                 group3="/group-3@2x.png"
//                 propTextDecoration="unset"
//                 search="/search-1.svg"
//                 propColor="#8a8a8a"
//                 giveGift="/give-gift2.svg"
//                 propColor1="#4d4d4d"
//             />
//         </div>
//     );
// };

// export default AddBook;



import React, { useState } from 'react';
import axios from 'axios';

const AddBook = () => {
    const [file, setFile] = useState<File | null>(null);
    const [uploadStatus, setUploadStatus] = useState<string>('');

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            setFile(e.target.files[0]);
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
            setUploadStatus(`File uploaded successfully! File ID: ${response.data.fileId}`);
        } catch (error) {
            console.error('Error uploading file:', error);
            setUploadStatus(`Upload failed: ${error.message}`);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="file" onChange={handleFileChange} accept=".pdf" />
                <button type="submit">Upload File</button>
            </form>
            {uploadStatus && <p>{uploadStatus}</p>}
        </div>
    );
};

export default AddBook;

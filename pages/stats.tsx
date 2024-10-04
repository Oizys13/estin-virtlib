import React, { useState, useEffect } from 'react';
import TopMain1 from "@/components/top-main1";
import SideBar from "@/components/side-bar";
import { set } from 'mongoose';
import TopBar from '@/components/TopBar';


export const Statistics = () => {
    const handleAcceptRequest = async (title: string, author: string, category: string, motive: string, user: string) => {
        try {
            const response = await fetch('/api/accept-request', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ title, author, category, motive, user }),
            });

            if (!response.ok) {
                throw new Error('Failed to accept book request');
            }

            const result = await response.json();
            console.log('Book request accepted successfully', result);

            // Update the bookRequests state
            setBookRequests((prevRequests) =>
                prevRequests.map((request) =>
                    request.title === title &&
                    request.author === author &&
                    request.category === category &&
                    request.motive === motive &&
                    request.user === user
                        ? { ...request, status: true }
                        : request
                )
            );
        } catch (err: any) {
            setError(err.message);
        }
    };
    const [expandedTable, setExpandedTable] = useState<string | null>(null); // To track which table is expanded

    // Function to handle table expansion/collapse
    const toggleTable = (tableName: string) => {
        if (expandedTable === tableName) {
            setExpandedTable(null); // Collapse the table if it's already expanded
        } else {
            setExpandedTable(tableName); // Expand the selected table
        }
    };

    const [bookRequests, setBookRequests] = useState([]);
    const [booklist, setBookList] = useState([]);
    const [users, setUsers] = useState([]);

    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchBookRequests = async () => {
            try {
                const response = await fetch('/api/get-requests-list'); // Adjust to the correct route
                if (!response.ok) {
                    throw new Error('Failed to fetch book requests');
                }

                const data = await response.json();
                setBookRequests(data);
            } catch (err) {
                setError(err.message);

            }
        };

        fetchBookRequests();

    }, []);
    useEffect(() => {
        const fetchBooks = async () => {
            try {
                const response = await fetch('/api/get-book-list'); // Adjust to the correct route
                if (!response.ok) {
                    throw new Error('Failed to fetch book list');
                }

                const data = await response.json();
                setBookList(data);
            } catch (err) {
                setError(err.message);

            }
        };

        fetchBooks();
    }, []);

    const requestsPerPage = 5;
    const requestsTotalPages = Math.ceil(bookRequests.length / requestsPerPage);
    const booksTotalPages = Math.ceil(booklist.length / requestsPerPage);
    const [currentPage, setCurrentPage] = useState(1);
    const [usersCount, setUsersCount] = useState(0);
    const currentRequests = expandedTable === 'contributions'
        ? bookRequests.slice((currentPage - 1) * requestsPerPage, currentPage * requestsPerPage)
        : bookRequests.slice(0, 4);

    const currentBooks = expandedTable === 'books'
        ? booklist.slice((currentPage - 1) * requestsPerPage, currentPage * requestsPerPage)
        : booklist.slice(0, 4);

    const nextPage = () => {
        if (currentPage < requestsTotalPages) setCurrentPage(currentPage + 1);
    };

    // Handle Previous Page
    const previousPage = () => {
        if (currentPage > 1) setCurrentPage(currentPage - 1);
    };

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await fetch('/api/get-users'); // Adjust to the correct route
                if (!response.ok) {
                    throw new Error('Failed to fetch book list');
                }

                const data = await response.json();
                setUsers(data);
                setUsersCount(data.length);
            } catch (err) {
                setError(err.message);

            }
        };

        fetchUsers();
    }, []);

    const [filter, setFilter] = useState<string | null>(null);

    const handleFilter = (status: string) => {
        if (filter === status) {
            setFilter(null); // Cancel the filter if the same button is pressed again
        } else {
            setFilter(status); // Set the filter to the selected status
        }
    };

    const filteredRequests = filter
        ? bookRequests.filter((request) => (filter === 'accepted' ? request.status : !request.status))
        : bookRequests;

    const currentFilteredRequests = expandedTable === 'contributions'
        ? filteredRequests.slice((currentPage - 1) * requestsPerPage, currentPage * requestsPerPage)
        : filteredRequests.slice(0, 4);
    useEffect(() => {
        const fetchReadingsData = async () => {
            try {
                const response = await fetch('/api/count-readings');
                if (!response.ok) {
                    throw new Error('Failed to fetch readings data');
                }

                const data = await response.json();
                setTotalReadings(data.totalReadings);
                setTopBooks(data.topBooks);
                console.log(data.topBooks);
                console.log(data.totalReadings);
            } catch (err) {
                setError(err.message);
            }
        };

        fetchReadingsData();
    }, []);

    const [totalReadings, setTotalReadings] = useState<number | null>(null);
    const [topBooks, setTopBooks] = useState<any[]>([]);

    return (
        <main className='h-full w-full overflow-y-auto scrollbar-hidden'>

        
        <div className="flex flex-col gap-2 overflow-y-auto scrollbar-hidden">

        <div className="h-[900px] w-full relative leading-[normal] tracking-[normal] text-left text-mini text-dimgray-600 font-inter ">
                        
                        <div className="absolute h-[900px] self-stretch left-[306px] bg-[#FAFAFA] rounded-3xs  flex flex-col items-start justify-start pb-0 box-border gap-5 max-w-full z-[1]">
                    <TopBar/>
                    <div className="flex flex-col gap-5 justify-start mx-[50px]">
                        <div className='flex flex-row w-full'>

                            <span className='font-bold text-20pt left-0'>Dashboard</span>
                            
                        </div>
                        <br />
                        <div className="flex flex-row justify-start items-center gap-12">
                            <div className="w-[280px] h-[108px] bg-white rounded-[12px] py-[20px] px-[30px] shadow-lg">
                                <div className='flex flex-col gap-4'>
                                    <span className="text-10pt text-[#8E95A9]">Total number of books</span>
                                    <div className='flex flex-row items-center justify-between'>
                                        <span className="text-20pt text-inherit font-semibold">{booklist.length}</span>
                                        
                                    </div>

                                </div>
                            </div>
                            <div className="w-[280px] h-[108px] bg-white rounded-[12px] py-[20px] px-[30px] shadow-lg">
                                <div className='flex flex-col gap-4'>
                                    <span className="text-10pt text-[#8E95A9]">Total number of students</span>
                                    <div className='flex flex-row items-center justify-between'>
                                        <span className="text-20pt text-inherit font-semibold">{usersCount}</span>
                                        
                                    </div>

                                </div>
                            </div>
                            <div className="w-[280px] h-[108px] bg-white rounded-[12px] py-[20px] px-[30px] shadow-lg">
                                <div className='flex flex-col gap-4'>
                                    <span className="text-10pt text-[#8E95A9]">Readings</span>
                                    <div className='flex flex-row items-center justify-between'>
                                        <span className="text-20pt text-inherit font-semibold">{totalReadings?.[0]?.total || 0}</span>
                                        
                                    </div>

                                </div>
                            </div>
                            <div className="w-[280px] h-[108px] bg-white rounded-[12px] py-[20px] px-[30px] shadow-lg">
                                <div className='flex flex-col gap-4'>
                                    <span className="text-10pt text-[#8E95A9]">Contributions Demands</span>
                                    <div className='flex flex-row items-center justify-between'>
                                        <span className="text-20pt text-inherit font-semibold">{bookRequests.length}</span>
                                        
                                    </div>

                                </div>
                            </div>


                        </div>
                        <br /><br />

                        {/* Conditional rendering of tables based on expandedTable */}
                        {expandedTable === null && (
                            <div className="flex flex-row gap-24">
                                {/* Most Read Books Table */}
                                <div className="h-[366px] w-[592px]  py-[35px] bg-white rounded-[16px] shadow-lg">
                                    <div className="flex relative justify-between px-[35px]">
                                        <span className="left-3 text-[#1C2A53]">Most Read Books</span>
                                        <button onClick={() => toggleTable('books')} className="text-[#555F7E]">
                                            More
                                        </button>
                                    </div>
                                    <br />
                                    <br />
                                    <table className="w-full">
                                        <thead className="flex justify-between items-center text-[#8E95A9] bg-[#F8F8F8] h-[48px] rounded-[4px] px-[10px]">
                                            <tr className="flex w-full">
                                                <th className="w-3/5 text-left">Title</th>
                                                <th className="w-1/5 text-left">Author</th>
                                                <th className="w-1/5 text-left">Category</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {currentBooks.map((request, index) => (
                                                <tr className='flex w-full justify-between items-center h-[48px] px-[10px] text-[#555F7E] border-[#F8F8F8] border-b-2'>
                                                    <td className='w-3/5'>{request.title}</td> {/* Use same widths for alignment */}
                                                    <td className='w-1/5'>{request.author}</td>
                                                    <td className='w-1/5'>{request.category}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>

                                {/* Contribution Demands Table */}
                                <div className="h-[366px] w-[750px] py-[35px] bg-white rounded-[16px] shadow-lg">
                                    <div className="flex relative justify-between px-[35px]">
                                        <span className="left-3 text-[#1C2A53]">Contribution Demands</span>
                                        <button onClick={() => toggleTable('contributions')} className="text-[#555F7E]">
                                            More
                                        </button>
                                    </div>
                                    <br />
                                    <br />
                                    <table className="w-full">
                                        <thead className="flex justify-between items-center text-[#8E95A9] bg-[#F8F8F8] h-[48px] rounded-[4px] px-[10px]">
                                            <tr className="flex w-full">
                                                <th className="w-2/5 text-left">Title</th>
                                                <th className="w-1/5 text-left">Author</th>
                                                <th className="w-1/5 text-left">Category</th>
                                                <th className="w-1/5 text-left">Student</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {currentRequests.map((request, index) => (
                                                <tr key={index} className='flex justify-between items-center w-[716px] h-[48px] px-[10px] text-[#555F7E] border-[#F8F8F8] border-b-2'>
                                                    <td className='w-2/5'>{request.title}</td> {/* Title */}
                                                    <td className='w-1/5'>{request.author}</td> {/* Author */}
                                                    <td className='w-1/5'>{request.category}</td> {/* Category */}
                                                    <td className='w-1/5 text-10pt'>{request.user}</td> {/* Student */}
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        )}

                        {/* Expanded Most Read Books Table */}
                        {expandedTable === 'books' && (
                            <div className="w-[1356px] h-[430px] bg-white rounded-[16px] shadow-lg">
                                <div className="flex relative justify-between px-[35px] py-[35px]">
                                    <span className="text-[#1C2A53]">Most Read Books</span>
                                    <button onClick={() => toggleTable('books')} className="text-[#555F7E]">
                                        Less
                                    </button>
                                </div>
                                <table className="w-full">
                                    <thead className="flex justify-between items-center text-[#8E95A9] bg-[#F8F8F8] h-[48px] rounded-[4px] px-[10px]">
                                        <tr className="flex w-full">
                                            <th className="w-3/5 text-left">Title</th>
                                            <th className="w-1/5 text-left">Author</th>
                                            <th className="w-1/5 text-left">Category</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {currentBooks.map((request, index) => (
                                            <tr className='flex w-full justify-between items-center h-[48px] px-[10px] text-[#555F7E] border-[#F8F8F8] border-b-2'>
                                                <td className='w-3/5'>{request.title}</td> {/* Use same widths for alignment */}
                                                <td className='w-1/5'>{request.author}</td>
                                                <td className='w-1/5'>{request.category}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                                {/* Pagination Controls */}
                                {booklist.length > requestsPerPage && (
                                    <div className="flex justify-between px-4 py-2">
                                        <button onClick={previousPage} disabled={currentPage === 1} className="px-4 py-2 bg-gray-200 rounded">
                                            Previous
                                        </button>
                                        <span>Page {currentPage} of {booksTotalPages}</span>
                                        <button onClick={nextPage} disabled={currentPage === booksTotalPages} className="px-4 py-2 bg-gray-200 rounded">
                                            Next
                                        </button>
                                    </div>
                                )}
                            </div>
                        )}

                        {/* Expanded Contribution Demands Table */}
                        {expandedTable === 'contributions' && (
                            <div className="w-[1356px] h-[430px] bg-white rounded-[16px] shadow-lg">
                                <div className="flex relative justify-between px-[35px] py-[35px]">
                                    <span className="text-[#1C2A53]">Contribution Demands</span>
                                    <button onClick={() => toggleTable('contributions')} className="text-[#555F7E]">
                                        Less
                                    </button>
                                </div>
                                <div className="flex justify-between px-[35px] py-[10px]">
                                    <button onClick={() => handleFilter('accepted')} className={`px-4 py-2 rounded ${filter === 'accepted' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}>
                                        Accepted only
                                    </button>
                                    <button onClick={() => handleFilter('pending')} className={`px-4 py-2 rounded ${filter === 'pending' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}>
                                        Pending only
                                    </button>
                                </div>
                                <table className="w-full">
                                    <thead className="flex justify-between items-center text-[#8E95A9] bg-[#F8F8F8] h-[48px] rounded-[4px] px-[10px]">
                                        <tr className="flex w-full">
                                            <th className="w-2/5 text-left">Title</th>
                                            <th className="w-1/5 text-left">Author</th>
                                            <th className="w-1/5 text-left">Category</th>
                                            <th className="w-1/5 text-left">Student</th>
                                            <th className="w-1/5 text-left">Status</th>
                                        </tr>
                                    </thead>
                                    <tbody className='w-[1356px]'>
                                        {currentFilteredRequests.map((request, index) => (
                                            <tr className='flex w-full justify-between items-center h-[48px] px-[10px] text-[#555F7E] border-[#F8F8F8] border-b-2'>                                                <td className='w-2/5'>{request.title}</td> {/* Title */}
                                                <td className='w-1/5'>{request.author}</td> {/* Author */}
                                                <td className='w-1/5'>{request.category}</td> {/* Category */}
                                                <td className='w-1/5 text-10pt'>{request.user}</td> {/* Student */}
                                                <td className='w-1/5 text-xlt font-semibold font-inter text-green-600'>{request.status? 'Accepted' : (
                                                    <button 
                                                        className="cursor-pointer h-[40px] [border:none] bg-coral-100 w-[209px] rounded-[10px] flex flex-row items-start justify-start box-border z-[1] hover:bg-coral-200"
                                                        onClick={() => handleAcceptRequest(request.title, request.author, request.category, request.motive, request.user)}
                                                    >
                                                    <div className="h-[40px] w-[209px] bg-[#F27851] relative rounded-[10px] bg-coral-100 hidden" />
                                                    <span className="h-[40px] flex-1 relative text-xl leading-[12px] bg-[#F27851] rounded-[5px] font-semibold font-inter text-white text-center flex items-center justify-center z-[1] mq450:text-base mq450:leading-[10px]">
                                                      Mark as accepted
                                                        </span>
                                                    </button>
                                                )}</td> {/* Status */}

                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                                {/* Pagination Controls */}
                                {filteredRequests.length > requestsPerPage && (
                                    <div className="flex justify-between px-4 py-2">
                                        <button onClick={previousPage} disabled={currentPage === 1} className="px-4 py-2 bg-gray-200 rounded">
                                            Previous
                                        </button>
                                        <span>Page {currentPage} of {requestsTotalPages}</span>
                                        <button onClick={nextPage} disabled={currentPage === requestsTotalPages} className="px-4 py-2 bg-gray-200 rounded">
                                            Next
                                        </button>
                                    </div>
                                )}
                            </div>
                        )}
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
        </div>
        </main>
    );
};

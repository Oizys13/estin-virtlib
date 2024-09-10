import React, { useState } from 'react';
import TopMain1 from "@/components/top-main1";
import SideBar from "@/components/side-bar";

export const Statistics = () => {
    const [expandedTable, setExpandedTable] = useState<string | null>(null); // To track which table is expanded

    // Function to handle table expansion/collapse
    const toggleTable = (tableName: string) => {
        if (expandedTable === tableName) {
            setExpandedTable(null); // Collapse the table if it's already expanded
        } else {
            setExpandedTable(tableName); // Expand the selected table
        }
    };

    return (
        
        <div className="flex flex-col gap-2">
            
            <div className="h-[994px] w-[1544px] relative bg-white leading-[normal] tracking-[normal] text-left text-mini text-dimgray-600 font-inter ">
                <img
                    className="fixed object-cover top-0 left-[-37.3px] w-full h-full"
                    alt=""
                    src="/bg-vector1.svg"
                />
                <div className="absolute self-stretch top-[48px] left-[341px] bg-[#F3F3F7] rounded-3xs bg-whitesmoke-200 w-[1544px] overflow-y-auto flex flex-col items-start justify-start pb-[216px] box-border gap-5 max-w-full z-[1]">
                    <TopMain1
                        polygonIconTop="0"
                        polygonIconPosition="sticky"
                        polygonIconAlignSelf="stretch"
                        polygonIconLeft="unset"
                        polygonIconFlex="unset"
                        searchLabelOverflow="hidden"
                        username="John Doe" // Replace with dynamic user data
                    />
                                        <div className="flex flex-col gap-5 justify-start mx-[50px]">
                        <div className='flex flex-row w-full'>

                            <span className='font-bold text-20pt left-0'>Dashboard</span>
                            <select name="" id="" className='absolute right-[40px] w-[168px] h-[38px] rounded-[4px]'>
                                <option value="" selected={true}>Month1</option>
                                <option value="">Select</option>
                                <option value="">Select</option>
                                <option value="">Select</option>
                            </select>
                        </div>
                        <br />
                        <div className="flex flex-row justify-start items-center gap-12">
                            <div className="w-[280px] h-[108px] bg-white rounded-[12px] py-[20px] px-[30px] shadow-lg">
                                <div className='flex flex-col gap-4'>
                                    <span className="text-10pt text-[#8E95A9]">Total number of books</span>
                                    <div className='flex flex-row items-center justify-between'>
                                        <span className="text-20pt text-inherit font-semibold">$7,825</span>
                                        <span className='text-[#FF8901] font-bold'>+21%</span>
                                    </div>

                                </div>
                            </div>
                            <div className="w-[280px] h-[108px] bg-white rounded-[12px] py-[20px] px-[30px] shadow-lg">
                                <div className='flex flex-col gap-4'>
                                    <span className="text-10pt text-[#8E95A9]">Total number of students</span>
                                    <div className='flex flex-row items-center justify-between'>
                                        <span className="text-20pt text-inherit font-semibold">920</span>
                                        <span className='text-[#FF392B] font-bold'>-25%</span>
                                    </div>

                                </div>
                            </div>
                            <div className="w-[280px] h-[108px] bg-white rounded-[12px] py-[20px] px-[30px] shadow-lg">
                                <div className='flex flex-col gap-4'>
                                    <span className="text-10pt text-[#8E95A9]">Readings</span>
                                    <div className='flex flex-row items-center justify-between'>
                                        <span className="text-20pt text-inherit font-semibold">11542</span>
                                        <span className='text-[#279F51] font-bold'>+61%</span>
                                    </div>

                                </div>
                            </div>
                            <div className="w-[280px] h-[108px] bg-white rounded-[12px] py-[20px] px-[30px] shadow-lg">
                                <div className='flex flex-col gap-4'>
                                    <span className="text-10pt text-[#8E95A9]">Contributions</span>
                                    <div className='flex flex-row items-center justify-between'>
                                        <span className="text-20pt text-inherit font-semibold">$7,825</span>
                                        <span className='text-[#FFA000] font-bold'>+1.3%</span>
                                    </div>

                                </div>
                            </div>


                        </div>
                        <br /><br /><br /><br />
                        
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
                                        <tr className='flex w-full justify-between items-center h-[48px] px-[10px] text-[#555F7E] border-[#F8F8F8] border-b-2'>
                                            <td className='w-3/5'>Deco accessory</td> {/* Use same widths for alignment */}
                                            <td className='w-1/5'>nom lajjsdhfjkl</td>
                                            <td className='w-1/5'>Mathematics</td>
                                        </tr>
                                        <tr className='flex w-full justify-between items-center h-[48px] px-[10px] text-[#555F7E] border-[#F8F8F8] border-b-2'>
                                            <td className='w-3/5'>Deco accessory</td> {/* Use same widths for alignment */}
                                            <td className='w-1/5'>nom lajjsdhfjkl</td>
                                            <td className='w-1/5'>Mathematics</td>
                                        </tr>
                                        <tr className='flex w-full justify-between items-center h-[48px] px-[10px] text-[#555F7E] border-[#F8F8F8] border-b-2'>
                                            <td className='w-3/5'>Deco accessory</td> {/* Use same widths for alignment */}
                                            <td className='w-1/5'>nom lajjsdhfjkl</td>
                                            <td className='w-1/5'>Mathematics</td>
                                        </tr>
                                        <tr className='flex w-full justify-between items-center h-[48px] px-[10px] text-[#555F7E] border-[#F8F8F8] border-b-2'>
                                            <td className='w-3/5'>Deco accessory</td> {/* Use same widths for alignment */}
                                            <td className='w-1/5'>nom lajjsdhfjkl</td>
                                            <td className='w-1/5'>Mathematics</td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>

                                {/* Contribution Demands Table */}
                                <div className="h-[366px] w-[716px]  py-[35px] bg-white rounded-[16px] shadow-lg">
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
                                        <tr className='flex justify-between items-center w-[716px] h-[48px] px-[10px] text-[#555F7E] border-[#F8F8F8] border-b-2'>
                                            <td className='w-2/5'>Deco accessory</td> {/* Use same widths for alignment */}
                                            <td className='w-1/5'>nom lajjsdhfjkl</td>
                                            <td className='w-1/5'>Mathematics</td>
                                            <td className='w-1/5'>Youcef Meh</td>
                                        </tr>
                                        <tr className='flex justify-between items-center w-[716px] h-[48px] px-[10px] text-[#555F7E] border-[#F8F8F8] border-b-2'>
                                            <td className='w-2/5'>Deco accessory</td> {/* Use same widths for alignment */}
                                            <td className='w-1/5'>nom lajjsdhfjkl</td>
                                            <td className='w-1/5'>Mathematics</td>
                                            <td className='w-1/5'>Youcef Meh</td>
                                        </tr>
                                        <tr className='flex justify-between items-center w-[716px] h-[48px] px-[10px] text-[#555F7E] border-[#F8F8F8] border-b-2'>
                                            <td className='w-2/5'>Deco accessory</td> {/* Use same widths for alignment */}
                                            <td className='w-1/5'>nom lajjsdhfjkl</td>
                                            <td className='w-1/5'>Mathematics</td>
                                            <td className='w-1/5'>Youcef Meh</td>
                                        </tr>
                                        <tr className='flex justify-between items-center w-[716px] h-[48px] px-[10px] text-[#555F7E] border-[#F8F8F8] border-b-2'>
                                            <td className='w-2/5'>Deco accessory</td> {/* Use same widths for alignment */}
                                            <td className='w-1/5'>nom lajjsdhfjkl</td>
                                            <td className='w-1/5'>Mathematics</td>
                                            <td className='w-1/5'>Youcef Meh</td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        )}

                        {/* Expanded Most Read Books Table */}
                        {expandedTable === 'books' && (
                            <div className="w-[1356px] h-[800px] bg-white rounded-[16px] shadow-lg">
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
                                    <tr className='flex w-full justify-between items-center h-[48px] px-[10px] text-[#555F7E] border-[#F8F8F8] border-b-2'>
                                            <td className='w-3/5'>Deco accessory</td> {/* Use same widths for alignment */}
                                            <td className='w-1/5'>nom lajjsdhfjkl</td>
                                            <td className='w-1/5'>Mathematics</td>
                                        </tr>
                                    <tr className='flex w-full justify-between items-center h-[48px] px-[10px] text-[#555F7E] border-[#F8F8F8] border-b-2'>
                                            <td className='w-3/5'>Deco accessory</td> {/* Use same widths for alignment */}
                                            <td className='w-1/5'>nom lajjsdhfjkl</td>
                                            <td className='w-1/5'>Mathematics</td>
                                        </tr>
                                    <tr className='flex w-full justify-between items-center h-[48px] px-[10px] text-[#555F7E] border-[#F8F8F8] border-b-2'>
                                            <td className='w-3/5'>Deco accessory</td> {/* Use same widths for alignment */}
                                            <td className='w-1/5'>nom lajjsdhfjkl</td>
                                            <td className='w-1/5'>Mathematics</td>
                                        </tr>
                                    <tr className='flex w-full justify-between items-center h-[48px] px-[10px] text-[#555F7E] border-[#F8F8F8] border-b-2'>
                                            <td className='w-3/5'>Deco accessory</td> {/* Use same widths for alignment */}
                                            <td className='w-1/5'>nom lajjsdhfjkl</td>
                                            <td className='w-1/5'>Mathematics</td>
                                        </tr>
                                    <tr className='flex w-full justify-between items-center h-[48px] px-[10px] text-[#555F7E] border-[#F8F8F8] border-b-2'>
                                            <td className='w-3/5'>Deco accessory</td> {/* Use same widths for alignment */}
                                            <td className='w-1/5'>nom lajjsdhfjkl</td>
                                            <td className='w-1/5'>Mathematics</td>
                                        </tr>
                                    <tr className='flex w-full justify-between items-center h-[48px] px-[10px] text-[#555F7E] border-[#F8F8F8] border-b-2'>
                                            <td className='w-3/5'>Deco accessory</td> {/* Use same widths for alignment */}
                                            <td className='w-1/5'>nom lajjsdhfjkl</td>
                                            <td className='w-1/5'>Mathematics</td>
                                        </tr>
                                    <tr className='flex w-full justify-between items-center h-[48px] px-[10px] text-[#555F7E] border-[#F8F8F8] border-b-2'>
                                            <td className='w-3/5'>Deco accessory</td> {/* Use same widths for alignment */}
                                            <td className='w-1/5'>nom lajjsdhfjkl</td>
                                            <td className='w-1/5'>Mathematics</td>
                                        </tr>
                                    <tr className='flex w-full justify-between items-center h-[48px] px-[10px] text-[#555F7E] border-[#F8F8F8] border-b-2'>
                                            <td className='w-3/5'>Deco accessory</td> {/* Use same widths for alignment */}
                                            <td className='w-1/5'>nom lajjsdhfjkl</td>
                                            <td className='w-1/5'>Mathematics</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        )}

                        {/* Expanded Contribution Demands Table */}
                        {expandedTable === 'contributions' && (
                            <div className="w-[1356px] h-[800px] bg-white rounded-[16px] shadow-lg">
                                <div className="flex relative justify-between px-[35px] py-[35px]">
                                    <span className="text-[#1C2A53]">Contribution Demands</span>
                                    <button onClick={() => toggleTable('contributions')} className="text-[#555F7E]">
                                        Less
                                    </button>
                                </div>
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
                                    <tr className='flex justify-between items-center w-[1356px] h-[48px] px-[10px] text-[#555F7E] border-[#F8F8F8] border-b-2'>
                                            <td className='w-2/5'>Deco accessory</td> {/* Use same widths for alignment */}
                                            <td className='w-1/5'>nom lajjsdhfjkl</td>
                                            <td className='w-1/5'>Mathematics</td>
                                            <td className='w-1/5'>Youcef Meh</td>
                                        </tr>
                                    <tr className='flex justify-between items-center w-[1356px] h-[48px] px-[10px] text-[#555F7E] border-[#F8F8F8] border-b-2'>
                                            <td className='w-2/5'>Deco accessory</td> {/* Use same widths for alignment */}
                                            <td className='w-1/5'>nom lajjsdhfjkl</td>
                                            <td className='w-1/5'>Mathematics</td>
                                            <td className='w-1/5'>Youcef Meh</td>
                                        </tr>
                                    <tr className='flex justify-between items-center w-[1356px] h-[48px] px-[10px] text-[#555F7E] border-[#F8F8F8] border-b-2'>
                                            <td className='w-2/5'>Deco accessory</td> {/* Use same widths for alignment */}
                                            <td className='w-1/5'>nom lajjsdhfjkl</td>
                                            <td className='w-1/5'>Mathematics</td>
                                            <td className='w-1/5'>Youcef Meh</td>
                                        </tr>
                                    <tr className='flex justify-between items-center w-[1356px] h-[48px] px-[10px] text-[#555F7E] border-[#F8F8F8] border-b-2'>
                                            <td className='w-2/5'>Deco accessory</td> {/* Use same widths for alignment */}
                                            <td className='w-1/5'>nom lajjsdhfjkl</td>
                                            <td className='w-1/5'>Mathematics</td>
                                            <td className='w-1/5'>Youcef Meh</td>
                                        </tr>
                                    <tr className='flex justify-between items-center w-[1356px] h-[48px] px-[10px] text-[#555F7E] border-[#F8F8F8] border-b-2'>
                                            <td className='w-2/5'>Deco accessory</td> {/* Use same widths for alignment */}
                                            <td className='w-1/5'>nom lajjsdhfjkl</td>
                                            <td className='w-1/5'>Mathematics</td>
                                            <td className='w-1/5'>Youcef Meh</td>
                                        </tr>
                                    <tr className='flex justify-between items-center w-[1356px] h-[48px] px-[10px] text-[#555F7E] border-[#F8F8F8] border-b-2'>
                                            <td className='w-2/5'>Deco accessory</td> {/* Use same widths for alignment */}
                                            <td className='w-1/5'>nom lajjsdhfjkl</td>
                                            <td className='w-1/5'>Mathematics</td>
                                            <td className='w-1/5'>Youcef Meh</td>
                                        </tr>
                                    <tr className='flex justify-between items-center w-[1356px] h-[48px] px-[10px] text-[#555F7E] border-[#F8F8F8] border-b-2'>
                                            <td className='w-2/5'>Deco accessory</td> {/* Use same widths for alignment */}
                                            <td className='w-1/5'>nom lajjsdhfjkl</td>
                                            <td className='w-1/5'>Mathematics</td>
                                            <td className='w-1/5'>Youcef Meh</td>
                                        </tr>
                                    <tr className='flex justify-between items-center w-[1356px] h-[48px] px-[10px] text-[#555F7E] border-[#F8F8F8] border-b-2'>
                                            <td className='w-2/5'>Deco accessory</td> {/* Use same widths for alignment */}
                                            <td className='w-1/5'>nom lajjsdhfjkl</td>
                                            <td className='w-1/5'>Mathematics</td>
                                            <td className='w-1/5'>Youcef Meh</td>
                                        </tr>
                                    </tbody>
                                </table>
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
    );
};

"use client";
import type { NextPage } from "next";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import TopMain1 from "../components/top-main1";
import GroupComponent5 from "@/components/group-component5";
import SideBar from "../components/side-bar";

const Account: NextPage = () => {
  const { data: session, status } = useSession();
  const [bookRequests, setBookRequests] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBookRequests = async () => {
      if (status === 'authenticated' && session?.user?.email) {
        try {
          const response = await fetch(`/api/get-user-requests?user=${session.user.email}`);
          if (!response.ok) {
            throw new Error('Failed to fetch book requests');
          }
          const data = await response.json();
          setBookRequests(data);
        } catch (err) {
          setError(err.message);
        } finally {
          setLoading(false);
        }
      } else {
        setLoading(false); // Stop loading if not authenticated
      }
    };

    fetchBookRequests();
  }, [status, session]);

  return (
    <div className="h-[994px] w-[1544px] relative bg-white leading-[normal] tracking-[normal] text-left text-mini text-dimgray-600 font-inter">
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
        />
        <div className="pl-11">
          <GroupComponent5 />
          {loading && <p>Loading book requests...</p>}
          {error && <p className="text-red-500">{error}</p>}
          {bookRequests.length > 0 ? (
            <ul>
              {bookRequests.map((request) => (
                <li key={request._id}>
                  <p>Title: {request.title}</p>
                  <p>Author: {request.author}</p>
                  <p>Motive: {request.motive}</p>
                  <p>Status: {request.status ? 'Approved' : 'Pending'}</p>
                </li>
              ))}
            </ul>
          ) : (
            !loading && <p>No book requests found.</p>
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
  );
};

export default Account;

"use client"

import Search from '@/pages/search-page'
import React from 'react'
import { useSession } from "next-auth/react";
import { useRouter } from 'next/navigation';

const page = () => {
    const { data: session, status } = useSession();
    if (status === "loading") {
      return <div>Loading...</div>;
  }
  
  if (status === "unauthenticated") {
      const router = useRouter();
      router.push('/');
      return null;
  }
    return (
        
        <div className='h-full w-full'>
            <Search/>
        </div>
    )
}

export default page
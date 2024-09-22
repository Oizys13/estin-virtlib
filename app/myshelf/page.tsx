"use client"
import MyBookShelf from '@/pages/my-bookShelf'
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
    <main className='h-full w-full overflow-y-auto scrollbar-hidden'>
        <MyBookShelf />
    </main>
  )
}

export default page
"use client"
import BookPreview from '@/pages/book-preview'
import React from 'react'
import { useSession } from "next-auth/react";
import { useRouter } from 'next/navigation';

export const book = () => {
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
    <div>
        <BookPreview/>
    </div>
  )
}
export default book
"use client"
import Account from '@/pages/home-profile'
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
    <div>
        <Account/>
    </div>
  )
}

export default page
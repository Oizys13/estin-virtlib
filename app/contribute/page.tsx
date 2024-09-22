"use client";
import AddBook from '@/components/add-book';
import Contribute from '@/pages/contribute.page';
import React, { useState, useEffect } from 'react';
import { useSession } from "next-auth/react";
import { useRouter } from 'next/navigation';

const ContributePage = () => {
  const { status, data: session } = useSession();
  const [isSuperuser, setIsSuperuser] = useState<boolean | null>(null);

  useEffect(() => {
    const fetchSuperuserStatus = async () => {
      if (session?.user?.email) {
        try {
          const res = await fetch('/api/get-superuser-status', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email: session.user.email }),
          });

          const data = await res.json();
          setIsSuperuser(data.isSuperuser);
        } catch (error) {
          console.error('Error fetching superuser status:', error);
        }
      }
    };

    fetchSuperuserStatus();
  }, [session]);

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
  {isSuperuser === true ? <AddBook /> : <Contribute />}
    </main>
  );
};

export default ContributePage;

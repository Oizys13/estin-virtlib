// hooks/useSuperuserStatus.ts
import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';

const useSuperuserStatus = (): [boolean | null, boolean] => {
  const { status, data: session } = useSession();
  const [isSuperuser, setIsSuperuser] = useState<boolean | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

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
      setLoading(false);
    };

    fetchSuperuserStatus();
  }, [session]);

  return [isSuperuser, loading];
};

export default useSuperuserStatus;

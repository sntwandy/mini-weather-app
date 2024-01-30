"use client"
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    if (process.browser) {
      router.push('/home');
    }
  }, [router]);

  return <div>Redirecting...</div>;
}

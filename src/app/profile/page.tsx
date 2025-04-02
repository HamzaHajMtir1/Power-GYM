'use client';

import { useSession, signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function ProfilePage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/login');
    } else if (status === 'authenticated') {
      setIsLoading(false);
    }
  }, [status, router]);

  const handleSignOut = () => {
    signOut({ callbackUrl: '/' });
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-yellow-500"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
        <div className="bg-yellow-500 px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-white">My Profile</h1>
          <button
            onClick={handleSignOut}
            className="bg-white text-yellow-500 px-4 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors"
          >
            Sign Out
          </button>
        </div>
        <div className="p-6">
          <div className="flex items-center space-x-4 mb-6">
            {session?.user?.image ? (
              <img
                src={session.user.image}
                alt={session.user.name || 'Profile'}
                className="h-16 w-16 rounded-full object-cover"
              />
            ) : (
              <div className="h-16 w-16 rounded-full bg-yellow-200 flex items-center justify-center">
                <span className="text-2xl font-bold text-yellow-500">
                  {session?.user?.name?.charAt(0) || 'U'}
                </span>
              </div>
            )}
            <div>
              <h2 className="text-xl font-semibold">{session?.user?.name || 'User'}</h2>
              <p className="text-gray-600">{session?.user?.email}</p>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-4">
            <h3 className="text-lg font-semibold mb-4">Account Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="text-gray-500 text-sm">Name</p>
                <p className="font-medium">{session?.user?.name || 'Not provided'}</p>
              </div>
              <div>
                <p className="text-gray-500 text-sm">Email</p>
                <p className="font-medium">{session?.user?.email}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
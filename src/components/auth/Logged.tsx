'use client';

import { signOut } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';

export default function Logged({ image }: { image: string }) {
  return (
    <ul className='flex flex-row gap-4'>
      <Link
        href='/submit'
        className='bg-gray-600 text-white rounded-md p-2 hover:bg-gray-500'
      >
        Submit
      </Link>
      <button
        className='flex items-center gap-2 bg-gray-600 text-white rounded-md p-2 hover:bg-gray-500'
        onClick={() => signOut()}
      >
        <Image
          className='rounded-full'
          src={image}
          width={20}
          height={20}
          alt=''
        />
        Logout
      </button>
    </ul>
  );
}

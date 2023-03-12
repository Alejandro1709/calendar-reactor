'use client';

import { signIn } from 'next-auth/react';

export default function Login() {
  return (
    <li className='list-none'>
      <button
        className='bg-gray-600 text-white rounded-md p-2'
        onClick={() => signIn()}
      >
        Login
      </button>
    </li>
  );
}

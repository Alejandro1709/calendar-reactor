import useSession from '@/hooks/useSession';
import Link from 'next/link';
import Logged from './Logged';
import Login from './Login';

export default function Header() {
  const { session } = useSession();

  return (
    <header className='flex justify-center items-center h-16 bg-gray-700'>
      <div className='flex justify-between items-center w-full mx-6'>
        <Link href='/'>
          <h1 className='text-2xl font-bold text-white'>Horarios</h1>
        </Link>
        {session?.user ? <Logged image={session.user?.image} /> : <Login />}
      </div>
    </header>
  );
}

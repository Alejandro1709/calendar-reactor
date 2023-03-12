import Link from 'next/link';

function Header() {
  return (
    <header className='flex justify-center items-center h-16 bg-gray-700'>
      <div className='flex justify-between items-center w-full mx-6'>
        <Link href='/'>
          <h1 className='text-2xl font-bold text-white'>Horarios</h1>
        </Link>
        <div className='flex flex-row gap-4'>
          <Link
            href='/submit'
            className='bg-gray-600 text-white rounded-md p-2'
          >
            Submit
          </Link>
          <button className='bg-gray-600 text-white rounded-md p-2'>
            Logout
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;

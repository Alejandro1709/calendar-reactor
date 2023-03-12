import Image from 'next/image';

function Showcase() {
  return (
    <section className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-1 transition-all'>
      <article className='bg-gray-200'>
        <div className='relative z-10 h-full'>
          <Image
            src='https://images.unsplash.com/photo-1678452562928-1d0c269a913b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1587&q=80'
            alt=''
            width={400}
            height={200}
            priority
          />
          <div className='absolute bottom-0 h-16 w-full bg-white/60 z-20 p-2'>
            <h2 className='text-lg font-bold'>Que feo esta mi horario...</h2>
            <p className='text-sm'>@alepeusts99</p>
          </div>
        </div>
      </article>
      <article className='bg-gray-200'>
        <div className='relative z-10 h-full'>
          <Image
            src='https://images.unsplash.com/photo-1678452562928-1d0c269a913b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1587&q=80'
            alt=''
            width={400}
            height={200}
            priority
          />
          <div className='absolute bottom-0 h-16 w-full bg-white/60 z-20 p-2'>
            <h2 className='text-lg font-bold'>Que feo esta mi horario...</h2>
            <p className='text-sm'>@alepeusts99</p>
          </div>
        </div>
      </article>
    </section>
  );
}

export default Showcase;

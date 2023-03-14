import type IPost from '@/types/showcase';
import Image from 'next/image';
import { useEffect, useState } from 'react';

function Showcase() {
  const [showcase, setShowcase] = useState<IPost[]>([]);

  const handleFetch = async () => {
    const res = await fetch('/api/schedules');
    const data = await res.json();
    setShowcase(data.results);
  };

  useEffect(() => {
    handleFetch();
  }, []);

  return (
    <section className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-1 transition-all'>
      {showcase.map((showcase) => (
        <article className='bg-gray-200' key={showcase.id}>
          <div className='relative z-10 h-full'>
            <Image
              src={showcase.fileUrl}
              alt={showcase.content}
              width={400}
              height={200}
              priority
            />
            <div className='absolute bottom-0 h-16 w-full bg-white/60 z-20 p-2'>
              <h2 className='text-lg font-bold'>{showcase.content}</h2>
            </div>
          </div>
        </article>
      ))}
    </section>
  );
}

export default Showcase;

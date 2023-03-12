'use client';

import Layout from '@/components/Layout';

function SubmitPage() {
  return (
    <Layout
      title='Calendtion | Submit'
      description='Submit your schedule here!'
      session={null}
    >
      <section className='flex flex-col gap-2 p-4'>
        <h1 className='text-2xl font-medium'>Submit your schedule</h1>
        <form className='flex flex-col gap-2'>
          <div className='flex flex-col gap-2'>
            <label htmlFor='content'>
              What do you think about your schedule?
            </label>
            <input className='p-2 border' type='text' id='content' />
          </div>
          <div className='flex flex-col gap-2'>
            <label htmlFor='image'>Select or grag and drop your file</label>
            <input className='p-2 border' type='text' id='content' />
          </div>
          <button className='bg-gray-600 text-white rounded-md p-2 mt-2'>
            Submit
          </button>
        </form>
      </section>
    </Layout>
  );
}

export default SubmitPage;

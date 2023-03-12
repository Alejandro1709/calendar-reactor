import Layout from '@/components/Layout';

function NotFound() {
  return (
    <Layout title='Calendition | Not Found'>
      <div className='flex flex-col items-center mt-6'>
        <h1 className='text-4xl'>404 - Page Not Found</h1>
        <p>This page does not exist. Please go back to home</p>
      </div>
    </Layout>
  );
}

export default NotFound;

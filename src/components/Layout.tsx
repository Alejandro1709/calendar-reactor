import useModal from '@/hooks/useModal';
import Head from 'next/head';
import Header from './auth/Header';
import Modal from './Modal';

type LayoutProps = {
  title?: string;
  description?: string;
  children: React.ReactNode;
};

function Layout({
  title = 'Create Next App',
  description = 'Generated by create next app',
  children,
}: LayoutProps) {
  const { isOpen } = useModal();
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name='description' content={description} />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header />
      {isOpen ? <Modal /> : null}
      <main className='flex flex-col'>{children}</main>
    </>
  );
}

export default Layout;

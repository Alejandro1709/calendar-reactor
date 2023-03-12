import Layout from '@/components/Layout';
import Showcase from '@/components/Showcase';
import { AuthProvider } from '@/context/authContext';
import { getServerSession } from 'next-auth';
import { authOptions } from './api/auth/[...nextauth]';

type HomeProps = {
  session?: {
    expires: string;
    user: { email: string; image: string; name: string };
  };
};

export default function Home({ session }: HomeProps) {
  return (
    <AuthProvider session={session}>
      <Layout
        title='Calendtion'
        description='Upload your schedule and have people react to it!'
      >
        <Showcase />
      </Layout>
    </AuthProvider>
  );
}

export async function getServerSideProps(context: any) {
  const session = await getServerSession(context.req, context.res, authOptions);

  return {
    props: {
      session,
    },
  };
}

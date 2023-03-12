import Layout from '@/components/Layout';
import Showcase from '@/components/Showcase';
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
    <Layout
      title='Calendtion'
      description='Upload your schedule and have people react to it!'
      session={session}
    >
      <Showcase />
    </Layout>
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

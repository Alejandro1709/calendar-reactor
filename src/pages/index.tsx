import Layout from '@/components/Layout';
import Showcase from '@/components/Showcase';

export default function Home() {
  return (
    <Layout
      title='Calendtion'
      description='Upload your schedule and have people react to it!'
    >
      <Showcase />
    </Layout>
  );
}

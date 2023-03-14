// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { getServerSession } from 'next-auth';
import { authOptions } from './auth/[...nextauth]';
import prisma from '../../lib/prisma';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    const session = await getServerSession(req, res, authOptions);

    if (!session) {
      return res.status(401).json({ message: 'Unauthorized' });
    }

    const user = await prisma.user.findUnique({
      where: {
        email: session?.user?.email || '',
      },
    });

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    try {
      const result = await prisma.post.create({
        data: {
          content: req.body.content,
          fileUrl: req.body.file,
          userId: user.id,
        },
      });

      return res.status(201).json({ message: 'Post created', result });
    } catch (error) {
      console.log(error);
    }
  } else if (req.method === 'GET') {
    try {
      const results = await prisma.post.findMany({
        include: {
          user: true,
        },
      });

      return res.status(200).json({ message: 'Posts fetched', results });
    } catch (error) {
      console.log(error);
    }
  }

  return res.status(405).json({ message: 'Method not allowed' });
}

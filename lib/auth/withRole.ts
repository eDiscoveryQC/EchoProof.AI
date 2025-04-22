import { NextApiHandler, NextApiRequest, NextApiResponse } from 'next';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/pages/api/auth/[...nextauth]';

export function withRole(allowedRoles: string[], handler: NextApiHandler) {
  return async (req: NextApiRequest, res: NextApiResponse) => {
    const session = await getServerSession(req, res, authOptions);

    if (!session || !allowedRoles.includes(session.user.role)) {
      return res.status(403).json({ message: 'Access denied' });
    }

    return handler(req, res);
  };
}
import { useSession } from 'next-auth/react';

export const RoleGate = ({
  allowed,
  children,
}: {
  allowed: string[];
  children: React.ReactNode;
}) => {
  const { data: session } = useSession();
  const userRole = session?.user?.role;

  if (!userRole || !allowed.includes(userRole)) return null;

  return <>{children}</>;
};
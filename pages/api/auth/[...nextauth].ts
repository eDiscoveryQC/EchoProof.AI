import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: 'DevCredentials',
      credentials: {
        email: { label: 'Email', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        return {
          id: '1',
          name: credentials?.email,
          email: credentials?.email,
        };
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,

  callbacks: {
    async redirect({ url, baseUrl }) {
      return '/dashboard/projects';
    }
  }
});

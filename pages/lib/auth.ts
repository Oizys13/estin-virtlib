import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile }) {
        const emailAddress = profile?.email;
      
        if (emailAddress && emailAddress.endsWith("@estin.dz")) {
          return true;
        } else {
          return false; // Deny access to users not from 'estin.dz'
        }
      },
    async redirect({ url, baseUrl }) {
        console.log("logged in")
      return baseUrl;
    },
  },
  pages: {
    signIn: '/auth/signin',
  },
});

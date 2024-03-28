import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";
import User from "@/app/models/userModel";
import { connectDB } from "@/app/utils/connectDB";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async session({ session }) {
      const sessionUser = await User.findOne({ email: session.user.email });
      // console.log(sessionUser);
      session.user.id = sessionUser._id;
      return session;
    },

    async signIn({ profile }) {
      connectDB();
      try {
        const checkUser = await User.findOne({ email: profile.email });
        if (!checkUser) {
          await User.create({
            username: profile.name.replace(" ", "").toLowerCase(),
            email: profile.email,
            image: profile.picture,
          });
        }
        return true;
      } catch (error) {
        console.log(error);
        return false;
      }
    },
  },
});

export { handler as GET, handler as POST };

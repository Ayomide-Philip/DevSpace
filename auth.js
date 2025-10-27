import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import User from "./libs/models/user.models";
import bcrypt from "bcrypt";
import ConnectToDatabase from "@/libs/database";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      name: "Credentials",
      credentials: {
        email: {},
        password: {},
      },
      async authorize(credentials) {
        try {
          await ConnectToDatabase();
          const { email, password } = credentials;
          const userExist = await User.findOne({ email });
          if (!userExist) {
            throw new Error("User not found!");
          }

          const isPasswordValid = await bcrypt.compare(
            password,
            userExist?.password
          );

          if (!isPasswordValid) {
            console.log("Incorrect password");
            throw new Error("Incorrect password");
          }

          return {
            id: userExist?._id,
            name: userExist?.name,
            email: userExist?.email,
            username: userExist?.username,
          };
        } catch (err) {
          console.log("Error in authorize:", err);
          return null;
        }
      },
    }),
  ],
  session: {
    strategy: "jwt",
    maxAge: 2 * 24 * 60 * 60,
  },
  pages: {
    signIn: "/login",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user?.id;
        token.username = user?.username;
        token.email = user?.email;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user.username = token?.username;
        session.user.id = token?.id;
      }
      return session;
    },
  },
});

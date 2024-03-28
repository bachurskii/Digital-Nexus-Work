import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { connect } from "mongoose";
import User from "@/models/User";
import bcrypt from "bcryptjs";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    CredentialsProvider({
      async authorize(credentials) {
        console.log("Starting authorization...");
        try {
          console.log("Trying to connect to the database...");
          await connect();
          console.log("Connected to the database successfully");
        } catch (e) {
          console.error("Database connection error:", e);
          throw new Error("Cannot connect to database");
        }

        try {
          console.log("Received credentials:", credentials);
          const user = await User.findOne({ email: credentials.email });
          console.log("User found:", user);

          if (user) {
            const isPasswordCorrect = await bcrypt.compare(
              credentials.password,
              user.password
            );
            console.log("Password correct:", isPasswordCorrect);

            if (isPasswordCorrect) {
              console.log("Authorization successful for user:", user.email);
              return user;
            } else {
              console.log("Password is incorrect");
              throw new Error("Wrong credentials!");
            }
          } else {
            console.log("No user found with the provided email");
            throw new Error("User not found!");
          }
        } catch (error) {
          console.error("Authorize error:", error);
          throw new Error("Authentication failed");
        }
      },
    }),
  ],
  pages: {
    error: "/dashboard/login",
  },
});

export { handler as GET, handler as POST };

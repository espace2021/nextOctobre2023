import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";
import EmailProvider from "next-auth/providers/email";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import clientPromise from "../../../../lib/mongodb/client";

export const authOptions = {
    providers: [ 
        EmailProvider({
              server: {
              host: "smtp.example.com",
              port: 587,
              auth: {
                user: "sandrahammamitlili@gmail.com",
                pass: "zrvrdkfblorzpsps"
              }
            },
            from: "ABC@gmail.com"
          }),
        GitHubProvider({
            clientId: "8ae91e7483780c86e578",
            clientSecret: "a10f093c2d1eb2253b7e3149e8f42b11dafe9fc0",
          }),
        GoogleProvider({
            clientId: "31017781977-c2mev6djp0jd9dte3hcqal7v8ha2tp27.apps.googleusercontent.com",
            clientSecret: "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"
        })
    ],
    adapter: MongoDBAdapter(clientPromise),
  theme: {
    colorScheme: "light",
  },
  callbacks: {
    async jwt({ token }) {
      token.userRole = "admin"
      return token
    },
  },
}
   


const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }


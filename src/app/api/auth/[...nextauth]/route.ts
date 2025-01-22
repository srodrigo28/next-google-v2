import { handlers } from "@/auth";
export const { GET, POST } = handlers

// import NextAuth from "next-auth";

// const handler = NextAuth({
//     providers: [
//         GoogleProvider({
//           clientId: process.env.GOOGLE_CLIENT_ID as string,
//           clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
//         }),
//       ],
//       secret: process.env.NEXTAUTH_SECRET as string,
//   });
  
//   export const GET = handler.handlers.GET;
//   export const POST = handler.handlers.POST;

// function GoogleProvider(arg0: { clientId: string; clientSecret: string; }): import("@auth/core/providers").Provider {
//     throw new Error("Function not implemented.");
// }

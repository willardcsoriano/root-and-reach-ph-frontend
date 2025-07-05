// src/middleware.ts
export { default } from "next-auth/middleware";

export const config = {
  // The matcher forces the middleware to run only on specific paths
  // This forces the paths to use the Node.js runtime
  matcher: [
    "/", // Add any other paths you want to protect here
  ],
};
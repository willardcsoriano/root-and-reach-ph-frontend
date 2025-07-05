// src/app/api/auth/[...nextauth]/page.tsx

// This forces the route segment to use the Node.js runtime
export const runtime = 'nodejs'; 

// This is a dummy component that will never be rendered
export default function Page() {
  return <h1>This page should not be rendered.</h1>;
}
import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";


const protectedRoutes = createRouteMatcher([
  '/',
  '/upcoming',
  '/previous',
  '/recordings',
  '/personal-room',
  '/meeting(.*)'
]);

export default  clerkMiddleware( (auth, req) => {
  console.log("Midlware invoked for the path: ", req.nextUrl.pathname);
  if(protectedRoutes(req)) auth().protect();
  return;
})

// export const config = {
//   matcher: [
//     // Skip Next.js internals and all static files, unless found in search params
//     '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
//     // Always run for API routes
//     '/(api|trpc)(.*)',
//   ],
// };
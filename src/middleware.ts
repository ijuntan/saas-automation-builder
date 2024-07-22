import { auth, clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isPublicRoute = createRouteMatcher(['/', '/api/clerk-webhook', '/api/drive-activity/notification', '/sign-in(.*)', '/sign-out(.*)']);
const isIgnoredRoute = createRouteMatcher([
  '/api/auth/callback/discord',
  '/api/auth/callback/notion',
  '/api/auth/callback/slack',
  '/api/flow',
  '/api/cron/wait'
]);

export default clerkMiddleware((auth, request) => {
  if(isIgnoredRoute(request)) {
    return
  }

  if(!isPublicRoute(request)) {
    auth().protect();
  }
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
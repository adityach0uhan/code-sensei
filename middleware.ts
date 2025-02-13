import { withAuth } from '@kinde-oss/kinde-auth-nextjs/middleware';

export default withAuth(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    async function middleware(req: { kindeAuth: any }) {
        console.log('look at me', req.kindeAuth);
    },
    {
        isReturnToCurrentPage: true,
        loginPage: '/login',
        publicPaths: ['/public']
    }
);

export const config = {
    matcher: [
        '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)'
    ]
};

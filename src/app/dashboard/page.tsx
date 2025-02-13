import { LogoutLink } from '@kinde-oss/kinde-auth-nextjs/components';
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';
import { redirect } from 'next/navigation';

const page = async () => {
    const { isAuthenticated } = getKindeServerSession();
    const isUserAuthenticated = await isAuthenticated();

    if (!isUserAuthenticated) {
        return redirect('/login');
    }
    const { getUser } = getKindeServerSession();
    const user = await getUser();

    return (
        <div className='w-screen h-screen flex flex-col items-center justify-center'>
            <p>Dashboard</p>
            <p>Hello {user.given_name}</p>
            <LogoutLink>Log out</LogoutLink>
        </div>
    );
};

export default page;

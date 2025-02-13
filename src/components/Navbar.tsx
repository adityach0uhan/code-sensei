import LogOut from './LogOut';
import ThemeButton from './ThemeButton';
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';

const Navbar = async () => {
    const { getUser } = getKindeServerSession();
    const user = await getUser();
    return (
        <>
            <div className='w-screen flex items-center justify-between h-14 md:py-2 md:px-4 p-2 dark:bg-black dark:border-b-[1px] dark:border-slate-400 bg-white shadow-md'>
                <div>Code Sensi</div>
                <div className='flex items-center gap-2'>
                    <ThemeButton />
                    {user && <LogOut />}
                </div>
            </div>
        </>
    );
};

export default Navbar;

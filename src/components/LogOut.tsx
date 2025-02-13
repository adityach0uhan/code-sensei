'use server';
import { LogoutLink } from '@kinde-oss/kinde-auth-nextjs/components';
import { Button } from './ui/button';

const LogOut = () => {
    return (
        <LogoutLink>
            <Button variant={'outline'} className='w-full h-full'>
                Log Out
            </Button>
        </LogoutLink>
    );
};

export default LogOut;

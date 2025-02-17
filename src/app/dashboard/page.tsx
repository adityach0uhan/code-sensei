import CodeEditor from '@/components/CodeEditor';
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';
import { redirect } from 'next/navigation';

const page = async () => {
    const { isAuthenticated } = getKindeServerSession();
    const isUserAuthenticated = await isAuthenticated();

    if (!isUserAuthenticated) {
        return redirect('/login');
    }
    // const { getUser } = getKindeServerSession();
    // const user = await getUser();

    return (
        <div className='w-screen  flex flex-wrap items-center justify-center'>
            <div className=' w-full md:w-1/2  flex flex-col items-center '>
                <div className='w-full h-max p-2 m-4 rounded-md '>
                    <CodeEditor />
                </div>
            </div>

            <div className='md:w-1/2 w-full min-h-96  h-full bg-yellow-600'>
                ;lkfaslfka
            </div>
        </div>
    );
};

export default page;

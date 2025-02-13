import { LoginLink } from '@kinde-oss/kinde-auth-nextjs/components';
const page = () => {
    return <LoginLink postLoginRedirectURL='/dashboard'>Sign in</LoginLink>;
};

export default page;

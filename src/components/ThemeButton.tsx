'use client';
import { useTheme } from 'next-themes';
import { Button } from './ui/button';
import { IoSunnyOutline, IoMoonOutline } from 'react-icons/io5';

const ThemeButton = () => {
    const { theme, setTheme } = useTheme();
    return (
        <div>
            <Button
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
                {theme === 'dark' ? <IoSunnyOutline /> : <IoMoonOutline />}
            </Button>
        </div>
    );
};

export default ThemeButton;

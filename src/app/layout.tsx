import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import Navbar from '@/components/Navbar';
import { AuthProvider } from './AuthProvider';

export default function RootLayout({
    children
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang='en' suppressHydrationWarning>
            <body className={` antialiased`}>
                <AuthProvider>
                    <ThemeProvider
                        attribute='class'
                        defaultTheme='light'
                        enableSystem>
                        <Navbar />
                        <main>{children}</main>
                    </ThemeProvider>
                </AuthProvider>
            </body>
        </html>
    );
}

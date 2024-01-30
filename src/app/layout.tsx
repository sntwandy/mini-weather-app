import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.scss';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false;

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Mini Weather App',
  description: 'A wordlwide weather app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        {children}
        <span className='developed-by'>Developed by: @sntwandy</span>
      </body>
    </html>
  );
}

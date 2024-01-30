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
      <title>Mini Weather App</title>
      <meta
        name='viewport'
        content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no'
      ></meta>
      <meta
        name='description'
        content="Mini Weather App to know the forecast of 5 days"
      />
      <body className={inter.className}>
        {children}
        <span className='developed-by'>Developed by: @sntwandy</span>
      </body>
    </html>
  );
}

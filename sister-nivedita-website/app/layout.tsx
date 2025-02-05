import type { Metadata } from 'next';
import { Inter, Merriweather } from 'next/font/google';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import './globals.css';

// Font configurations
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const merriweather = Merriweather({
  weight: ['300', '400', '700', '900'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-merriweather',
});

// Metadata configuration
export const metadata: Metadata = {
  title: 'Sister Nivedita Convent',
  description: 'Sister Nivedita Convent is a leading educational institution in Bangalore, providing quality education since 1990.',
  keywords: 'Sister Nivedita Convent, education, school, Bangalore, SSLC, primary school',
};

/**
 * Root layout component that wraps all pages
 * Includes common elements like header and footer
 */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${merriweather.variable}`}>
      <body className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

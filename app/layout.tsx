import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://animehub.vercel.app'),
  title: {
    default: 'AnimeHub - Nonton Anime Subtitle Indonesia Gratis',
    template: '%s | AnimeHub'
  },
  description: 'Nonton anime subtitle Indonesia terbaru dan terlengkap secara gratis. Streaming anime ongoing, completed, dan batch download dengan kualitas HD.',
  keywords: [
    'anime',
    'nonton anime',
    'anime subtitle indonesia',
    'anime sub indo',
    'streaming anime',
    'download anime',
    'anime gratis',
    'anime terbaru',
    'anime ongoing',
    'anime completed',
    'batch anime',
    'animekompi'
  ],
  authors: [{ name: 'AnimeHub' }],
  creator: 'AnimeHub',
  publisher: 'AnimeHub',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'id_ID',
    url: 'https:///',
    siteName: 'AnimeHub',
    title: 'AnimeHub - Nonton Anime Subtitle Indonesia Gratis',
    description: 'Nonton anime subtitle Indonesia terbaru dan terlengkap secara gratis. Streaming anime ongoing, completed, dan batch download dengan kualitas HD.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'AnimeHub - Nonton Anime Sub Indo',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AnimeHub - Nonton Anime Subtitle Indonesia Gratis',
    description: 'Nonton anime subtitle Indonesia terbaru dan terlengkap secara gratis.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: '',
    yandex: '',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="dark" suppressHydrationWarning>
      <head>
        <link rel="canonical" href="https:///" />
        <meta name="theme-color" content="#0f172a" />
      </head>
      <body className={`${inter.variable} font-sans min-h-screen flex flex-col bg-slate-950 text-white antialiased`} suppressHydrationWarning>
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

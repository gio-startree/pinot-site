import 'css/tailwind.css';
import 'pliny/search/algolia.css';

import { Work_Sans } from 'next/font/google';
import { Analytics, AnalyticsConfig } from 'pliny/analytics';
import { SearchProvider, SearchConfig } from 'pliny/search';
import Header from '@/components/Header';
import SectionContainer from '@/components/SectionContainer';
import Footer from '@/components/Footer';
import siteMetadata from '@/data/siteMetadata';
import { ThemeProviders } from './theme-providers';
import { Metadata } from 'next';
import Head from 'next/head';

const work_sans = Work_Sans({
    subsets: ['latin'],
    display: 'swap',
    variable: '--custom-font-work-sans'
});

export const metadata: Metadata = {
    metadataBase: new URL(siteMetadata.siteUrl),
    title: {
        default: siteMetadata.title,
        template: `%s | ${siteMetadata.title}`
    },
    description: siteMetadata.description,
    openGraph: {
        title: siteMetadata.title,
        description: siteMetadata.description,
        url: './',
        siteName: siteMetadata.title,
        images: [siteMetadata.socialBanner],
        locale: 'en_US',
        type: 'website'
    },
    alternates: {
        canonical: './',
        types: {
            'application/rss+xml': `${siteMetadata.siteUrl}/feed.xml`
        }
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1
        }
    },
    twitter: {
        title: siteMetadata.title,
        card: 'summary_large_image',
        images: [siteMetadata.socialBanner]
    }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html
            lang={siteMetadata.language}
            className={`${work_sans.variable} scroll-smooth`}
            suppressHydrationWarning
        >
            <head>
                <meta
                    httpEquiv="Content-Security-Policy"
                    content="default-src 'self';script-src 'self' 'unsafe-eval' 'unsafe-inline' giscus.app analytics.umami.is www.youtube.com www.googletagmanager.com www.google-analytics.com;style-src 'self' 'unsafe-inline';img-src * blob: data:;media-src *.s3.amazonaws.com;connect-src *;font-src 'self';frame-src www.youtube.com youtube.com giscus.app youtu.be https://www.youtube.com https://youtube.com;"
                />
                <link
                    rel="apple-touch-icon"
                    sizes="76x76"
                    href="/static/favicons/apple-touch-icon.svg"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="32x32"
                    href="/static/favicons/favicon-32x32.svg"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="16x16"
                    href="/static/favicons/favicon-16x16.svg"
                />
                <link rel="manifest" href="/static/favicons/site.webmanifest" />
                <link
                    rel="mask-icon"
                    href="/static/favicons/safari-pinned-tab.svg"
                    color="#5bbad5"
                />
                <meta name="msapplication-TileColor" content="#000000" />
                <meta name="theme-color" media="(prefers-color-scheme: light)" content="#fff" />
                <meta name="theme-color" media="(prefers-color-scheme: dark)" content="#000" />
                <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
            </head>
            <body className="bg-white text-black antialiased dark:bg-gray-950 dark:text-white">
                <ThemeProviders>
                    <Analytics analyticsConfig={siteMetadata.analytics as AnalyticsConfig} />
                    <div className="mx-auto flex max-w-screen-customDesktop flex-col justify-between font-sans">
                        <SearchProvider searchConfig={siteMetadata.search as SearchConfig}>
                            <Header />
                            <main>{children}</main>
                            <Footer />
                        </SearchProvider>
                    </div>
                </ThemeProviders>
            </body>
        </html>
    );
}

import type { Metadata } from "next";
import "./globals.css";
import styles from "./layout.module.css";
import { Navigation } from "@/components/Navigation";
import { GoogleAnalytics } from '@next/third-parties/google'
// import { Roboto } from 'next/font/google'
import { basePath } from "@/utils/basePath";
import { BackToTop } from "@/components/BackToTop";

export const metadata: Metadata = {
  title: "Front End Developer Melbourne | Michael Raffaele",
  description: "Freelance Front End Development based in Melbourne. I write JavaScript, HTML &#038; CSS websites and applications.",
  robots: "index, follow",

};

export function generateViewport() {
  return {
    width: "device-width, shrink-to-fit=no",
    initialScale: 1,
    themeColor: "#130f40",
  }
}



// const roboto = Roboto({
//   subsets: ['latin'],
//   variable: '--font-roboto',
// });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      {/* <html lang="en" className={roboto.className}> */}
      <link rel="icon" href={`${basePath}/assets/icons/favicon.ico`} />
      <link rel="apple-touch-icon" sizes="180x180" href={`${basePath}/assets/icons/apple-touch-icon.png`} />
      <meta name="google-adsense-account" content="ca-pub-8901954447365291" />
      <meta property="og:image" content={`${basePath}/assets/icons/og-image.png`} />
      <GoogleAnalytics gaId="G-D41GHFW2SZ" />
      <body>
        <div className={styles.siteMain}>
          <Navigation />
          <div className={styles.content}>
            {children}
          </div>
        </div>
        <BackToTop />
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import "./globals.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Head from "next/head";
export const metadata: Metadata = {
  title: "DimaSoul",
  description: "Healthy Minds, Happy Lives Mental Health Consultancy",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* <Head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicons/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicons/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicons/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicons/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/favicons/safari-pinned-tab.svg"
          color="#5bbad5"
        />
        <link rel="shortcut icon" href="/favicons/favicon.ico" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </Head> */}
      {/* Apply the fonts to the body */}
      <body className={`antialiased`}>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

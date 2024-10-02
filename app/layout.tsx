import type { Metadata } from "next";
import "./globals.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import localFont from "next/font/local";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export const metadata: Metadata = {
  title: "DimaSoul",
  description: "Healthy Minds, Happy Lives Mental Health Consultancy",
};

const manrope = localFont({
  src: [
    {
      path: "../public/fonts/Manrope-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/Manrope-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/Manrope-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/fonts/Manrope-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased ${manrope.className}`}>
        <NavBar />
        <div className="overflow-hidden">{children}</div>
        <Footer />
      </body>
    </html>
  );
}

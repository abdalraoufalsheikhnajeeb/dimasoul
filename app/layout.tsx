import type { Metadata } from "next";
import localFont from "next/font/local"; // Import the local font utility
import "./globals.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

// Load the local fonts
// const robotoBold = localFont({
//   src: "/fonts/Roboto-Bold.woff2", // Path to your local font file
//   weight: "700", // Specify the font weight
//   style: "normal", // Specify the style (normal or italic)
//   display: "swap", // Optional: To improve performance
// });

// const robotoBlack = localFont({
//   src: "/fonts/Roboto-Black.woff2",
//   weight: "400",
//   style: "normal",
//   display: "swap",
// });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* Apply the fonts to the body */}
      <body
        className={`antialiased 
      
         `}
      >
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

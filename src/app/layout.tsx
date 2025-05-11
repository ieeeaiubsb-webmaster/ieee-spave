import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
// import MyNavbar from "@/components/Navbar";
import NextTopLoader from "nextjs-toploader";
// import Footer from "@/components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "IEEE SPAVE 8.0",
  description: "Created by IEEEAIUBSB Web Development Team",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <html lang="en">
        <body
          className={`${inter.className} ${geistSans.variable} ${geistMono.variable}  antialiased`}
        >
          <NextTopLoader color="#c400e2" height={4} showSpinner={false} />

          {/* <MyNavbar /> */}
          {children}
          {/* <Footer /> */}
        </body>
      </html>
    </>
  );
}

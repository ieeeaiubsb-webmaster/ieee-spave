import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/simple";
import Footer from "@/components/footer";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "IEEE SPAVe 7.0",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <Navbar /> */}
        {children}
        <Footer />
      </body>
    </html>
  );
}

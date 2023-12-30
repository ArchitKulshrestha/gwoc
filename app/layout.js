import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Tarang Sir",
  description: "Portfolio of Tarang Sir created for GWOC",
};

export default function RootLayout({ children }) {
  return (
    <html suppressHydrationWarning={true} lang="en">
      <body className={`${inter.className} bg-background-50`}>
        <Navbar />
        <main className="relative overflow-hidden top-[100px] max-w-[1440px] px-6 lg:px-20 ">
          {children}
        </main>
      </body>
    </html>
  );
}

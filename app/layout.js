import "./globals.css";

import { Footer, Navbar } from "./components";

export const metadata = {
  title: "Tarang Sir",
  description: "Portfolio of Tarang Sir created for GWOC",
  icons: {
    icon: "/favicon.ico",
  },
};

export const revalidate = 180;
export const dynamic = "force-dynamic";
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning={true}
        className={`  bg-gradient-to-l from-[#efecf9] to-[#e6f3fe] text-text-700`}>
        <main className="relative overflow-hidden ">{children}</main>
      </body>
    </html>
  );
}
// linear-gradient(90deg, #d1e6fa 0%, #dde6ee 100%)
// bg-gradient-to-r from-[#d1e6fa] to-[#dde6ee]

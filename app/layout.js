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
        className={`  bg-background-50 text-text-700`}>
        <main className="relative overflow-hidden ">{children}</main>
      </body>
    </html>
  );
}

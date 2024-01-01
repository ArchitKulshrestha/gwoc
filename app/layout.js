import "./globals.css";

import { Footer, Navbar } from "./components";

export const metadata = {
  title: "Tarang Sir",
  description: "Portfolio of Tarang Sir created for GWOC",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true} className={`  bg-background-50 `}>
        <main className="relative overflow-hidden   ">{children}</main>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { IBM_Plex_Sans } from "next/font/google";
import "./globals.css";

const IBM = IBM_Plex_Sans({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Meet Ritchie Ways",
  description:
    "Explore my portfolio to see how I've helped clients achieve their goals through Web Development. From front-end to back-end, you'll get a glimpse into my approach, skills, and passion for delivering exceptional results",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${IBM.className} bg-secondary scroll-smooth`}>
        {children}
      </body>
    </html>
  );
}

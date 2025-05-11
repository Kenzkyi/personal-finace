import { Public_Sans } from "next/font/google";
import "./globals.scss";

const publicSans = Public_Sans({
  variable: "--font-public-sans",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* <meta charSet="UTF-8" /> */}
        <link rel="icon" type="image/svg+xml" href="/favicon.ico" />
        <title>Personal Finance app</title>
      </head>
      <body className={`${publicSans.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}

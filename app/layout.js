import { Public_Sans } from "next/font/google";
import "./globals.scss";

const publicSans = Public_Sans({
  variable: "--font-public-sans",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${publicSans.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}

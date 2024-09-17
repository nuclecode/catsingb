import localFont from "next/font/local";
import "./globals.css";
import MobileMenu from "@/components/Menu/MobileMenu/MobileMenu";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Aquamarine Bloom Hobby Cattery",
  description: "Hobby breeders of Elf cats with odd eyes in London",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
      <MobileMenu />
        {children}
      </body>
    </html>
  );
}

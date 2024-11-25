import { Inter } from "next/font/google";
import Head from "next/head";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Softgroup",
  description:
    "Softgroup.uz — Uzbekistan's leading IT outsourcing company. We provide top-quality web development, mobile applications, and IT solutions to help businesses thrive in the digital world.",
  img: "/public/assets/icons/Softgroup.svg",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <meta charSet="UTF-8" />
        <link rel="icon" href={metadata.img} />
        <link rel="icon" href="/public/assets/icons/Softgroup.jpg"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}

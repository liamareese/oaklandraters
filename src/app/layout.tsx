import type { Metadata } from "next";
import './globals.css';

export const metadata: Metadata = {
  title: "Oakland Raters",
  description: "Personal restaurant reviews from around the world.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>Oakland Raters</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="page-body">
        {children}
      </body>
    </html>
  );
}
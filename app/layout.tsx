import type { Metadata } from "next";
import "./globals.css";
import { AppConfig } from "@/config/app.config";
import Navigation from "@/components/navigation/NavigationBar";
import Footer from "@/components/Footer/Footer";

export const metadata: Metadata = {
  title: AppConfig().app.name,
  description: AppConfig().app.slogan,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
        <NavigationBar/>
        <body>
          {children}
        </body>
      <Footer/>
    </html>
  );
}

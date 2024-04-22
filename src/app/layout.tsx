import Navigation from "./components/SideNavbar"
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const navLinks = [
    {
      name: 'Home',
      href: '/'
    },
    {
      name: 'Matemática',
      href: '/disciplines/math'
    },
    {
      name: 'Física',
      href: '/disciplines/physics'
    },
    {
      name: 'Química',
      href: '/disciplines/chemistry'
    }
  ]
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <Navigation navLinks={navLinks}/>
        {children}
        </body>
    </html>
  );
}

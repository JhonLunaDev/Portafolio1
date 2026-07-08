import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/header";
import { PageWrapper } from "@/components/page-wrapper";

export const metadata: Metadata = {
  title: "Jhon Alex Luna | Desarrollador de Software",
  description: "Portafolio personal de Jhon Alex Luna Canchihuaman - Desarrollador de Software",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>
        <PageWrapper>
          <Header />
          {children}
        </PageWrapper>
      </body>
    </html>
  );
}

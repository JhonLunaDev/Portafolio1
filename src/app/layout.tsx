import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { PageWrapper } from "@/components/page-wrapper";
import { personalInfo, skills } from "@/data/portfolio";

const inter = Inter({ subsets: ["latin"] });

const baseUrl = "https://portafolio1-nine-zeta.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: `${personalInfo.name} | ${personalInfo.title}`,
    template: `%s | ${personalInfo.name}`,
  },
  description:
    "Portafolio profesional de Jhon Alex Luna Canchihuaman - Desarrollador de Software egresado de Cibertec. Especializado en Java, Spring Boot, desarrollo web y bases de datos.",
  keywords: [
    "desarrollador de software",
    "java",
    "spring boot",
    "backend",
    "desarrollo web",
    "portafolio",
    "freelance",
    "perú",
    "cibertec",
    "jhon alex luna",
  ],
  authors: [{ name: personalInfo.name }],
  creator: personalInfo.name,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "es_PE",
    url: baseUrl,
    siteName: `${personalInfo.name} | Portafolio`,
    title: `${personalInfo.name} | ${personalInfo.title}`,
    description:
      "Portafolio profesional de Jhon Alex Luna - Desarrollador de Software. Especializado en Java, Spring Boot y desarrollo web.",
    images: [
      {
        url: `${baseUrl}/me.jpg`,
        width: 800,
        height: 600,
        alt: personalInfo.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${personalInfo.name} | ${personalInfo.title}`,
    description:
      "Portafolio profesional de Jhon Alex Luna - Desarrollador de Software.",
    images: [`${baseUrl}/me.jpg`],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: personalInfo.name,
              jobTitle: personalInfo.title,
              description: personalInfo.bio,
              url: baseUrl,
              sameAs: [
                personalInfo.social.instagram,
                personalInfo.social.linkedin,
                personalInfo.social.github,
              ],
              image: `${baseUrl}/me.jpg`,
              knowsAbout: skills.map((s) => s.name),
            }),
          }}
        />
      </head>
      <body className={inter.className}>
        <PageWrapper>
          <Header />
          {children}
        </PageWrapper>
      </body>
    </html>
  );
}


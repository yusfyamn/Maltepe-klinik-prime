import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import { DemoProvider } from "@/contexts/DemoContext";
import { LanguageProvider } from "@/contexts/LanguageContext";
import SmoothScroll from "@/components/SmoothScroll";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Maltepe Diş Kliniği | Premium Estetik Diş Hekimliği",
    template: "%s | Maltepe Diş Kliniği",
  },
  description:
    "Maltepe'nin en güvenilir özel diş kliniği. İmplant, zirkonyum, gülüş tasarımı ve estetik diş tedavilerinde uzman kadro. Hemen randevu alın.",
  keywords: [
    "maltepe diş kliniği",
    "maltepe özel diş",
    "maltepe implant",
    "maltepe estetik diş",
    "maltepe zirkonyum",
    "maltepe gülüş tasarımı",
  ],
  authors: [{ name: "Maltepe Diş Kliniği" }],
  creator: "Maltepe Diş Kliniği",
  metadataBase: new URL("https://maltepedisklinigi.com"),
  openGraph: {
    type: "website",
    locale: "tr_TR",
    siteName: "Maltepe Diş Kliniği",
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className={`${playfair.variable} ${inter.variable}`}>
      <body className="font-body antialiased bg-primary text-text">
        <SmoothScroll />
        <LanguageProvider>
          <DemoProvider>{children}</DemoProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}

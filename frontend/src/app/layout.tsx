// Root layout component that wraps the entire application
// Provides the basic HTML structure, fonts, and global providers
import { Header } from "@/components/Header";
import "./globals.css";
import { DM_Sans } from "next/font/google";
import { Footer } from "@/components/Footer";
import AppProviders from "@/components/AppProviders";
import type { Metadata } from "next";

// Configure the DM Sans font with all available weights
// This ensures consistent typography across the application
const dmSans = DM_Sans({
  subsets: ["latin", "latin-ext"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap", // Optimize font loading by showing fallback until custom font loads
});

// Enhanced metadata for better SEO
export const metadata: Metadata = {
  title: {
    default: "IO-TECH | Leading Law Firm Services",
    template: "%s | IO-TECH",
  },
  description:
    "IO-TECH is a leading law firm providing comprehensive legal services including consultation, contracts, foreign investment, and corporate governance. Expert legal solutions for individuals and businesses.",
  keywords: [
    "law firm",
    "legal services",
    "legal consultation",
    "contracts",
    "foreign investment",
    "corporate governance",
    "arbitration",
  ],
  authors: [{ name: "IO-TECH" }],
  creator: "IO-TECH",
  publisher: "IO-TECH",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://io-tech.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://io-tech.com",
    title: "IO-TECH | Leading Law Firm Services",
    description: "Comprehensive legal services for individuals and businesses",
    siteName: "IO-TECH",
  },
  twitter: {
    card: "summary_large_image",
    title: "IO-TECH | Leading Law Firm Services",
    description: "Comprehensive legal services for individuals and businesses",
  },
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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body
        className={`bg-background text-foreground min-h-screen flex flex-col ${dmSans.className}`}
        suppressHydrationWarning
      >
        {/* AppProviders wraps the entire app with Redux, React Query, and other global providers */}
        <AppProviders>
          <Header />
          {/* Main content area that grows to fill available space */}
          <main className="flex-1" role="main" id="main-content">
            {children}
          </main>
          <Footer />
        </AppProviders>
      </body>
    </html>
  );
}

// Root layout component that wraps the entire application
// Provides the basic HTML structure, fonts, and global providers
import { Header } from "@/components/Header";
import "./globals.css";
import { DM_Sans } from "next/font/google";
import { Footer } from "@/components/Footer";
import AppProviders from "@/components/AppProviders";

// Configure the DM Sans font with all available weights
// This ensures consistent typography across the application
const dmSans = DM_Sans({
  subsets: ["latin", "latin-ext"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap", // Optimize font loading by showing fallback until custom font loads
});

// Metadata for SEO and browser tab information
export const metadata = {
  title: "IO-TECH",
  description: "Frontend project using Next.js App Router",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <body
        className={`bg-background text-foreground min-h-screen flex flex-col ${dmSans.className}`}
        suppressHydrationWarning
      >
        {/* AppProviders wraps the entire app with Redux, React Query, and other global providers */}
        <AppProviders>
          <Header />
          {/* Main content area that grows to fill available space */}
          <main className="flex-1">{children}</main>
          <Footer />
        </AppProviders>
      </body>
    </html>
  );
}

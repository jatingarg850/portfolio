import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/providers";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap"
});

const spaceGrotesk = Space_Grotesk({ 
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap"
});

export const metadata: Metadata = {
  title: "DataVidhi - Guided by Data, Driven by Vidhi",
  description: "Future web solutions with precision in every byte. From first launch to full scale, we build products that win users and grow businesses.",
  keywords: ["data engineering", "web development", "AI/ML", "IoT", "full-stack", "React", "Next.js", "UI/UX", "startup tech"],
  authors: [{ name: "DataVidhi" }],
  openGraph: {
    title: "DataVidhi - Guided by Data, Driven by Vidhi",
    description: "Precision in Every Byte. Guided by data, Driven by Vidhi.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/image.jpg" type="image/jpeg" />
      </head>
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-sans antialiased bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100`}>
        <Providers>
          <div className="min-h-screen flex flex-col">
            <Header />
            <main className="pt-16 flex-1">
              {children}
            </main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
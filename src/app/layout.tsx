import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ranger Technologies — Future-Proof Service Ecosystem",
  description:
    "Ranger Technologies is a future-proof technology ecosystem spanning AI, Blockchain, AR/VR, HealthTech, EdTech, and Green Technology. Build the next decade with us.",
  keywords: [
    "AI Infrastructure",
    "Blockchain",
    "AR/VR",
    "HealthTech",
    "EdTech",
    "GreenTech",
    "Technology Agency",
    "Web3",
    "Ranger Technologies",
  ],
  authors: [{ name: "Ranger Technologies" }],
  openGraph: {
    title: "Ranger Technologies — Future-Proof Service Ecosystem",
    description:
      "The definitive technology partner for businesses entering the next decade. 10 service verticals spanning AI to GreenTech.",
    type: "website",
    url: "https://ranger.tech",
    siteName: "Ranger Technologies",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ranger Technologies",
    description: "Future-Proof Service Ecosystem — 10 verticals. One partner.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#000000",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="bg-black text-white antialiased" suppressHydrationWarning>
        {/* Film grain noise overlay */}
        <div className="noise-overlay" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}

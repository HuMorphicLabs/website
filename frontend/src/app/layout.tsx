import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { Providers } from "@/components/providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "HumorphicOS — The Operating System for Robotics Teams",
  description:
    "HumorphicOS is an AI-powered operating system for robotics clubs, engineering teams and research labs. Manage projects, hardware, people, labs and AI operations in one platform.",
  keywords: [
    "robotics operating system",
    "robotics club management",
    "hardware lab management",
    "ROS2 sprint management",
    "engineering WBS",
    "robotics inventory",
    "AI robotics copilot",
  ],
  authors: [{ name: "HumorphicOS Core Team" }],
  openGraph: {
    title: "HumorphicOS — The Operating System for Robotics Teams",
    description:
      "Plan projects. Track hardware. Automate operations. Let AI handle repetitive work while your team builds the future.",
    type: "website",
    locale: "en_US",
    siteName: "HumorphicOS",
  },
  twitter: {
    card: "summary_large_image",
    title: "HumorphicOS — The Operating System for Robotics Teams",
    description:
      "AI-powered operating system for robotics clubs, engineering teams, and research labs.",
  },
  manifest: "/manifest.json",
  appleWebApp: { capable: true, title: "HumorphicOS" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
      data-theme="dark"
      suppressHydrationWarning
    >
      <head>
        <Script id="theme-script" strategy="beforeInteractive">
          {`
            (function() {
              try {
                document.documentElement.setAttribute('data-theme', 'dark');
              } catch (e) {}
            })();
          `}
        </Script>
      </head>
      <body className="min-h-full bg-[#030712] text-white">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

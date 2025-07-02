import type { Metadata, Viewport } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Nguyen Quang Huy - Full Stack Developer | React, Next.js, TypeScript",
  description:
    "Full Stack Developer with 4+ years of experience specializing in React, Next.js, TypeScript, and modern web technologies. Crafting exceptional banking, fintech, and HR industry experiences.",
  keywords: [
    "Nguyen Quang Huy",
    "Full Stack Developer",
    "React Developer",
    "Next.js Developer",
    "TypeScript Developer",
    "Web Developer",
    "Software Engineer",
    "Frontend Developer",
    "Backend Developer",
    "JavaScript Developer",
    "Node.js Developer",
    "Fintech Developer",
    "Banking Software",
    "HR Software",
    "Portfolio",
  ],
  authors: [{ name: "Nguyen Quang Huy" }],
  creator: "Nguyen Quang Huy",
  publisher: "Nguyen Quang Huy",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_DOMAIN ||
      "https://nguyen-quang-huy-portfolio.vercel.app"
  ), // Replace with your actual domain
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: process.env.NEXT_PUBLIC_DOMAIN, // Replace with your actual domain
    title:
      "Nguyen Quang Huy - Full Stack Developer | React, Next.js, TypeScript",
    description:
      "Full Stack Developer with 4+ years of experience specializing in React, Next.js, TypeScript, and modern web technologies. Crafting exceptional banking, fintech, and HR industry experiences.",
    siteName: "Nguyen Quang Huy Portfolio",
    images: [
      {
        url: "/og-image.jpg", // You'll need to create this image
        width: 1200,
        height: 630,
        alt: "Nguyen Quang Huy - Full Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Nguyen Quang Huy - Full Stack Developer | React, Next.js, TypeScript",
    description:
      "Full Stack Developer with 4+ years of experience specializing in React, Next.js, TypeScript, and modern web technologies.",
    images: ["/og-image.jpg"], // Same as Open Graph image
    creator: "@your-twitter-handle", // Replace with your Twitter handle
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
  verification: {
    google: "your-google-verification-code", // Replace with your Google Search Console verification code
    // yandex: "your-yandex-verification-code",
    // yahoo: "your-yahoo-verification-code",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#0f172a" },
    { media: "(prefers-color-scheme: dark)", color: "#0f172a" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />

        {/* Structured Data for Person */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Nguyen Quang Huy",
              jobTitle: "Full Stack Developer",
              description:
                "Full Stack Developer with 4+ years of experience specializing in React, Next.js, TypeScript, and modern web technologies.",
              url: process.env.NEXT_PUBLIC_DOMAIN, // Replace with your actual domain
              sameAs: [
                "https://github.com/qnguyenhuy1999",
                "https://gitlab.com/qnguyenhuy1999",
                "https://linkedin.com/in/huynq-2912",
              ],
              email: "qnguyenhuy1999@gmail.com",
              knowsAbout: [
                "React",
                "Next.js",
                "TypeScript",
                "JavaScript",
                "Node.js",
                "Express.js",
                "Web Development",
                "Full Stack Development",
                "Fintech",
                "Banking Software",
                "HR Software",
              ],
              worksFor: {
                "@type": "Organization",
                name: "Freelance/Contract",
              },
              alumniOf: {
                "@type": "Organization",
                name: "Software Development",
              },
            }),
          }}
        />

        {/* Structured Data for WebSite */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Nguyen Quang Huy Portfolio",
              description:
                "Full Stack Developer Portfolio showcasing React, Next.js, TypeScript projects and experience.",
              url: process.env.NEXT_PUBLIC_DOMAIN, // Replace with your actual domain
              author: {
                "@type": "Person",
                name: "Nguyen Quang Huy",
              },
              potentialAction: {
                "@type": "SearchAction",
                target: `${process.env.NEXT_PUBLIC_DOMAIN}/search?q={search_term_string}`,
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />
      </head>
      <body
        className={`${spaceGrotesk.variable} antialiased`}
        suppressHydrationWarning={true}
      >
        {children}
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Providers } from "@/components/providers";
import "./globals.css";

const siteUrl = "https://verspect.akstechies.com";
const pageTitle = "Verspect";
const pageDescription =
  "Scan repositories, simulate breaking changes, and generate exact migration patches. Dependency intelligence for engineering teams.";
const socialDescription = "Know every upgrade before you ship it.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: pageTitle,
    template: "%s · Verspect",
  },
  description: pageDescription,
  alternates: {
    canonical: "/",
  },
  keywords: [
    "Verspect",
    "Python",
    "JavaScript",
    "TypeScript",
    "Go",
    "Java",
    "Rust",
    "PHP",
    "Ruby",
    "dependency scanning",
    "CVE",
    "upgrade simulator",
    "migration planning",
  ],
  openGraph: {
    title: pageTitle,
    description: socialDescription,
    url: siteUrl,
    siteName: "Verspect",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: socialDescription,
    images: [
      {
        url: "/opengraph-image",
        alt: "Verspect — dependency intelligence for package health, security risk, and upgrade impact.",
      },
    ],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Verspect",
    applicationCategory: "DeveloperApplication",
    operatingSystem: "Web",
    description:
      "Dependency intelligence for upgrades, security, and migrations across Python, JavaScript, TypeScript, Go, Java, Rust, PHP, and Ruby.",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        {/* Marketing webfonts for the public site; App Router has no _document. */}
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Syne:wght@500;600;700&family=DM+Sans:ital,opsz,wght@0,9..40,400;0,9..40,500;0,9..40,600;1,9..40,400&family=IBM+Plex+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { JetBrains_Mono, Inter } from "next/font/google";
import Script from "next/script";
import { cookies } from "next/headers";
import TerminalShell from "../components/TerminalShell";
import CookieConsent from "../components/CookieConsent";
import "../styles/global.css";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-mono",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://kavenkim.com"),
  title: {
    template: "%s | Kaven Kim",
    default: "Kaven Kim \u2014 product builder, using AI",
  },
  description:
    "I ship products with AI in the loop. Twelve years across product, paid media, and Shopify. Now freelancing and building small things end-to-end.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://kavenkim.com",
    siteName: "Kaven Kim",
    title: "Kaven Kim \u2014 product builder, using AI",
    description:
      "I ship products with AI in the loop. Twelve years across product, paid media, and Shopify. Now freelancing and building small things end-to-end.",
    images: [
      {
        url: "/images/og-default.jpg",
        width: 1200,
        height: 630,
        alt: "Kaven Kim \u2014 product builder, using AI",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kaven Kim \u2014 product builder, using AI",
    description:
      "I ship products with AI in the loop. Twelve years across product, paid media, and Shopify. Now freelancing and building small things end-to-end.",
    images: ["/images/og-default.jpg"],
  },
  robots: { index: true, follow: true },
};

const gtmId = process.env.NEXT_PUBLIC_GTM_ID;

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookieStore = await cookies();
  const consent = cookieStore.get("analytics_consent")?.value;
  // Soft opt-in: GA4 loads by default unless the visitor has explicitly opted out.
  const analyticsAllowed = Boolean(gtmId) && consent !== "declined";
  // First-time visitors see a short notice with an opt-out button.
  const needsConsent = Boolean(gtmId) && !consent;

  return (
    <html
      lang="en"
      className={`${jetbrainsMono.variable} ${inter.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){var s=localStorage.getItem('theme');if(s==='light'){document.documentElement.setAttribute('data-theme','light');}})();`,
          }}
        />
        {analyticsAllowed && (
          <Script
            id="gtm-script"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','${gtmId}');`,
            }}
          />
        )}
      </head>
      <body>
        {analyticsAllowed && (
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
            />
          </noscript>
        )}
        <TerminalShell>{children}</TerminalShell>
        {needsConsent && <CookieConsent />}
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Space_Grotesk, DM_Sans } from "next/font/google";
import Script from "next/script";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import "../styles/global.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "700"],
  variable: "--font-heading",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://kavenkim.com"),
  title: {
    template: "%s | Kaven Kim",
    default: "Kaven Kim \u2014 PM, Growth Marketer, Ecommerce Operator",
  },
  description:
    "I build products, scale brands, and turn growth loops into revenue. Product management, growth marketing, and ecommerce operations.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://kavenkim.com",
    siteName: "Kaven Kim",
    title: "Kaven Kim \u2014 PM, Growth Marketer, Ecommerce Operator",
    description:
      "I build products, scale brands, and turn growth loops into revenue. Product management, growth marketing, and ecommerce operations.",
    images: [
      {
        url: "/images/og-default.jpg",
        width: 1200,
        height: 630,
        alt: "Kaven Kim — PM, Growth Marketer, Ecommerce Operator",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kaven Kim \u2014 PM, Growth Marketer, Ecommerce Operator",
    description:
      "I build products, scale brands, and turn growth loops into revenue. Product management, growth marketing, and ecommerce operations.",
    images: ["/images/og-default.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const gtmId = process.env.NEXT_PUBLIC_GTM_ID;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${dmSans.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){var s=localStorage.getItem('theme');var p=window.matchMedia('(prefers-color-scheme:dark)').matches?'dark':'light';document.documentElement.setAttribute('data-theme',s||p);})();`,
          }}
        />
        {gtmId && (
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
      <body className={`${dmSans.className} antialiased`}>
        {gtmId && (
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
            />
          </noscript>
        )}
        <Navigation />
        <main className="min-h-[calc(100vh-160px)]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

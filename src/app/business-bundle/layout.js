export const metadata = {
  title: "Business Bundle £699 | AI-Powered Website + Lead Generation | Khamare Clarke",
  description:
    "Get a complete AI-powered business system in 7 days: custom website, lead capture, chatbot automation, and analytics. Only £699 for first 5 clients. UK-based support.",
  keywords: "AI website builder, business automation, lead generation, chatbot, UK web developer, custom website, AI employee, business bundle, conversion optimization",
  alternates: { canonical: "/business-bundle" },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: "Business Bundle £699 | AI-Powered Website + Lead Generation",
    description:
      "Complete AI-powered business system delivered in 7 days. Custom website, lead capture, chatbot automation, and analytics. Limited spots available.",
    url: "https://khamareclarke.com/business-bundle",
    siteName: "Khamare Clarke",
    images: [
      {
        url: "https://khamareclarke.com/images/business-bundle-og.jpg",
        width: 1200,
        height: 630,
        alt: "Business Bundle - AI-Powered Website and Lead Generation System",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Business Bundle £699 | AI-Powered Website + Lead Generation",
    description: "Complete AI-powered business system delivered in 7 days. Custom website, lead capture, chatbot automation, and analytics.",
    creator: "@khamareclarke",
    images: ["https://khamareclarke.com/images/business-bundle-twitter.jpg"],
  },
  other: {
    "price:amount": "699",
    "price:currency": "GBP",
    "product:availability": "limited",
    "business:contact_data:locality": "London",
    "business:contact_data:region": "England",
    "business:contact_data:country_name": "United Kingdom",
  },
};

export default function BusinessBundleLayout({ children }) {
  return children;
}

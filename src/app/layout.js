import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Khamare Clarke | AI Automation, Web & App Development, Digital Marketing UK',
  description: 'Khamare Clarke: AI automation, web & app development, and digital marketing expert for UK businesses. Proven results in lead generation, business growth, and automation systems.',
  keywords: 'AI automation, web development, app development, digital marketing, business growth, UK, lead generation',
  authors: [{ name: 'Khamare Clarke' }],
  creator: 'Khamare Clarke',
  publisher: 'Khamare Clarke',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://khamareclarke.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Khamare Clarke | AI Automation, Web & App Development, Digital Marketing UK',
    description: 'Personal, expert-led AI automation, web/app development, and digital marketing for UK businesses. Unlock real results and business growth with Khamare Clarke.',
    url: 'https://khamareclarke.com',
    siteName: 'Khamare Clarke',
    images: [
      {
        url: '/images/about-image.png',
        width: 1200,
        height: 630,
        alt: 'Khamare Clarke - AI Automation Expert'
      }
    ],
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Khamare Clarke | AI Automation, Web & App Development, Digital Marketing UK',
    description: 'Personal, expert-led AI automation, web/app development, and digital marketing for UK businesses. Unlock real results and business growth with Khamare Clarke.',
    images: ['/images/about-image.png'],
  },
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
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
            "name": "Khamare Clarke",
            "url": "https://khamareclarke.com",
            "logo": "https://khamareclarke.com/images/about-image.png",
          "sameAs": [
              "https://linkedin.com/in/khamare-clarke",
              "https://github.com/khamare-clarke"
          ],
          "description": "AI Automation, Web & App Development, and Digital Growth for real businesses.",
          "founder": {
            "@type": "Person",
              "name": "Khamare Clarke"
            }
          })
        }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": "https://khamareclarke.com/"
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": "Services",
                "item": "https://khamareclarke.com/#services"
              }
            ]
          })
        }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "serviceType": "AI Automation, Web & App Development, Digital Marketing",
          "provider": {
            "@type": "Person",
            "name": "Khamare Clarke",
            "url": "https://khamareclarke.com/"
          },
          "areaServed": "GB",
            "url": "https://khamareclarke.com/#services",
          "description": "AI automation, web/app development, digital marketing, lead generation, and business growth for UK businesses."
          })
        }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "What services do you offer?",
              "acceptedAnswer": { "@type": "Answer", "text": "I provide AI automation, web & app development, digital marketing, CRM systems, product development, analytics, UI/UX optimization, and business growth consulting. Every service is tailored to deliver measurable results and real business value." }
            },
            {
              "@type": "Question",
              "name": "How do I get started?",
                "acceptedAnswer": { "@type": "Answer", "text": "Just fill out the contact form below or book a free strategy call. We'll discuss your goals, challenges, and how I can help. You'll receive a personalized roadmap within 24 hours." }
            },
            {
              "@type": "Question",
              "name": "Do you work with startups or only established businesses?",
                "acceptedAnswer": { "@type": "Answer", "text": "I work with both startups and established businesses. Whether you're launching your first product or scaling an enterprise, I tailor solutions to your needs and growth stage." }
            },
            {
              "@type": "Question",
              "name": "What is your process?",
              "acceptedAnswer": { "@type": "Answer", "text": "My process starts with a discovery call to understand your needs. Then I create a strategy, implement solutions, and provide ongoing optimization and support. The focus is always on ROI and sustainable growth." }
            },
            {
              "@type": "Question",
              "name": "Can you integrate AI into my existing systems?",
              "acceptedAnswer": { "@type": "Answer", "text": "Absolutely. I specialize in integrating AI agents, automations, and analytics into your current workflows, CRMs, and platforms—seamlessly and securely, with minimal disruption to your business." }
            }
          ]
          })
        }} />
      </head>
      <body className={inter.className}>
        {children}
      </body>
  </html>
  )
}

import { siteConfig } from '@/lib/seo'

/**
 * Server-rendered JSON-LD graph. A single @graph keeps entities cross-referenced
 * (Person ↔ ProfessionalService ↔ WebSite ↔ WebPage) so search engines and AI
 * crawlers (Google, Bing Copilot, Perplexity, ChatGPT) build an accurate entity
 * model. Keep this in sync with the visible page content.
 */

// Mirror of the on-page FAQ. FAQPage rich results are deprecated in Google
// Search, but the markup is still parsed by AI/answer engines and Bing.
const faqs = [
  {
    q: 'How much does a project cost?',
    a: 'Pricing depends on scope, but engagements use fixed, agreed pricing rather than open-ended hourly billing. After a short discovery call you receive a clear proposal covering price, timeline, and deliverables before any work begins.',
  },
  {
    q: 'How long will it take?',
    a: 'A focused marketing site typically takes 1–3 weeks; a full web application runs 4–12 weeks depending on complexity. A realistic timeline is provided in the proposal with regular progress updates throughout.',
  },
  {
    q: 'How do we communicate during the project?',
    a: 'Communication happens however suits you best — Slack, email, or scheduled calls — with regular demos of working software rather than just status reports.',
  },
  {
    q: 'Are you available right now?',
    a: 'A limited number of projects are taken on at a time to keep quality high. Select work is currently being booked for Q3 2026; the fastest way to check fit and availability is to book a discovery call.',
  },
  {
    q: 'What about revisions and changes?',
    a: 'Revisions are part of the process. Each milestone includes review rounds, and because scope is agreed up front, changes are handled transparently with no surprise charges for reasonable iteration.',
  },
  {
    q: 'What happens after launch?',
    a: 'Launch is not the end. Post-launch support and optimisation are available, issues are monitored, and clean, documented code is handed over so your team can confidently take it forward.',
  },
]

const projects = [
  {
    name: 'My Doctor Shop',
    description:
      'A conversion-focused healthcare e-commerce storefront built on Next.js with fast search and a frictionless checkout.',
    url: 'http://mydoctorshop.com/',
    tech: 'Next.js, React, Tailwind CSS, WooCommerce',
  },
  {
    name: 'Inventory Management System',
    description:
      'A barcode-driven inventory web app in React with instant scanning, live stock counts, and a learn-in-minutes interface.',
    url: 'https://inventory-demo-test.netlify.app/scan',
    tech: 'React, Barcode API',
  },
  {
    name: 'Benders Agency',
    description:
      'A premium, high-performance Next.js corporate brand site with refined motion and instant page navigation.',
    url: 'https://www.bendersagency.com/',
    tech: 'Next.js, UI/UX, Animation',
  },
  {
    name: 'MyGovTools',
    description:
      'An accessible, well-structured React public-utility platform prioritising clarity and keyboard navigation.',
    url: 'https://www.mygovtools.org/',
    tech: 'React, Accessibility',
  },
  {
    name: 'Valorant Agent Hub',
    description:
      'An interactive platform serving structured agent data via API integration with a responsive UI.',
    url: 'https://valorantagenthub.vercel.app/',
    tech: 'React, API',
  },
]

export default function StructuredData() {
  const personId = `${siteConfig.url}/#person`
  const serviceId = `${siteConfig.url}/#service`
  const websiteId = `${siteConfig.url}/#website`
  const webpageId = `${siteConfig.url}/#webpage`

  const graph = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Person',
        '@id': personId,
        name: siteConfig.name,
        url: siteConfig.url,
        image: `${siteConfig.url}${siteConfig.image}`,
        jobTitle: siteConfig.jobTitle,
        email: `mailto:${siteConfig.email}`,
        telephone: siteConfig.phone,
        description: siteConfig.description,
        knowsAbout: [...siteConfig.skills],
        sameAs: [...siteConfig.sameAs],
        alumniOf: {
          '@type': 'CollegeOrUniversity',
          name: 'Government College University Faisalabad (GCUF)',
        },
        worksFor: {
          '@type': 'Organization',
          name: 'Aryze Tech',
        },
        knowsLanguage: ['English', 'Urdu'],
      },
      {
        '@type': 'ProfessionalService',
        '@id': serviceId,
        name: `${siteConfig.name} — ${siteConfig.jobTitle}`,
        url: siteConfig.url,
        image: `${siteConfig.url}${siteConfig.image}`,
        description:
          'Freelance React and Next.js engineering services: scalable web applications, high-converting marketing sites, full-stack feature delivery, and performance audits.',
        provider: { '@id': personId },
        founder: { '@id': personId },
        email: `mailto:${siteConfig.email}`,
        telephone: siteConfig.phone,
        priceRange: '$$',
        areaServed: siteConfig.areaServed.map((name) => ({
          '@type': name === 'Worldwide' ? 'Place' : 'Country',
          name,
        })),
        knowsAbout: [...siteConfig.skills],
        sameAs: [...siteConfig.sameAs],
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Web Engineering Services',
          itemListElement: [
            'Product web apps that scale',
            'Marketing sites that convert',
            'Full-stack feature delivery',
            'Rescue & performance audits',
          ].map((service) => ({
            '@type': 'Offer',
            itemOffered: { '@type': 'Service', name: service },
          })),
        },
      },
      {
        '@type': 'WebSite',
        '@id': websiteId,
        url: siteConfig.url,
        name: siteConfig.name,
        description: siteConfig.description,
        publisher: { '@id': personId },
        inLanguage: 'en-US',
      },
      {
        '@type': 'WebPage',
        '@id': webpageId,
        url: siteConfig.url,
        name: siteConfig.title,
        description: siteConfig.description,
        isPartOf: { '@id': websiteId },
        about: { '@id': personId },
        primaryImageOfPage: `${siteConfig.url}${siteConfig.ogImage}`,
        inLanguage: 'en-US',
        breadcrumb: { '@id': `${siteConfig.url}/#breadcrumb` },
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${siteConfig.url}/#breadcrumb`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: siteConfig.url },
          { '@type': 'ListItem', position: 2, name: 'Services', item: `${siteConfig.url}/#services` },
          { '@type': 'ListItem', position: 3, name: 'Work', item: `${siteConfig.url}/#work` },
          { '@type': 'ListItem', position: 4, name: 'About', item: `${siteConfig.url}/#about` },
          { '@type': 'ListItem', position: 5, name: 'Contact', item: `${siteConfig.url}/#contact` },
        ],
      },
      {
        '@type': 'ItemList',
        '@id': `${siteConfig.url}/#work`,
        name: 'Selected work',
        itemListElement: projects.map((p, i) => ({
          '@type': 'ListItem',
          position: i + 1,
          item: {
            '@type': 'CreativeWork',
            name: p.name,
            description: p.description,
            url: p.url,
            creator: { '@id': personId },
            keywords: p.tech,
          },
        })),
      },
      {
        '@type': 'FAQPage',
        '@id': `${siteConfig.url}/#faq`,
        mainEntity: faqs.map((f) => ({
          '@type': 'Question',
          name: f.q,
          acceptedAnswer: { '@type': 'Answer', text: f.a },
        })),
      },
    ],
  }

  return (
    <script
      type="application/ld+json"
      // JSON-LD is static and server-rendered; safe to inline.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  )
}

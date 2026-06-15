export interface ProcessStep {
  number: number;
  title: string;
  body: string;
}

export const processSteps: ProcessStep[] = [
  {
    number: 1,
    title: "Review",
    body: "I look at your current site, Google profile, services, photos, and contact flow.",
  },
  {
    number: 2,
    title: "Build",
    body: "I create a clean, mobile-friendly site that presents your services and project work clearly.",
  },
  {
    number: 3,
    title: "Finalize",
    body: "We adjust photos, service details, contact info, and anything that needs to be accurate before launch.",
  },
  {
    number: 4,
    title: "Launch",
    body: "I connect the domain, test the form, check mobile, and help get the site live.",
  },
];

export const pricingIncludes: string[] = [
  "Custom single-page or small multi-page website",
  "Mobile-friendly layout",
  "Clear service sections and calls-to-action",
  "Contact or estimate form setup",
  "Basic SEO titles and descriptions",
  "Domain and hosting connection help",
  "30 days of small post-launch fixes",
];

export const navLinks = [
  { label: "Examples", href: "#portfolio" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "#contact" },
];

export const site = {
  brand: "Cabriel Lovlie Web Design",
  phone: "425-293-3543",
  phoneHref: "tel:+14252933543",
  email: "CabeKLovlie@gmail.com",
  emailHref: "mailto:CabeKLovlie@gmail.com",
  title: "Websites for Local Contractors | Cabriel Lovlie Web Design",
  description:
    "Clean, mobile-friendly websites for local contractors and small service businesses with broken, outdated, or missing websites. Portfolio examples, estimate forms, and launch support.",
};

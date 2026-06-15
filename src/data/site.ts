export const pricingIncludes: string[] = [
  "Clean, mobile-friendly homepage",
  "Service sections or service pages",
  "Project gallery or work examples",
  "Call, message, or estimate request buttons",
  "Contact form setup",
  "Service area section",
  "Basic SEO title and description setup",
  "Help connecting the domain and launching the site",
  "Post-launch testing and small cleanup fixes",
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
  title: "Websites for Local Service Businesses | Cabriel Lovlie Web Design",
  description:
    "Clean, mobile-friendly websites for local service businesses and small businesses with broken, outdated, or missing websites. Portfolio examples, estimate forms, and launch support.",
};

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

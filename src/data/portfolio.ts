export interface PortfolioItem {
  id: number;
  name: string;
  category: string;
  description: string;
  url: string;
  screenshot: string;
  screenshotAlt: string;
  screenshotWidth: number;
  screenshotHeight: number;
  bestFor?: string;
}

export const featuredPortfolioItems: PortfolioItem[] = [
  {
    id: 1,
    name: "Northwest Detail Studio",
    category: "Auto Detailing",
    description:
      "A visual-first auto detailing concept built around service packages, condition guidance, gallery proof, and easy quote requests.",
    bestFor:
      "A service business that needs strong visuals, clear packages, and easy contact paths.",
    url: "https://northwest-detail-studio.netlify.app/",
    screenshot: "/images/portfolio/northwest-detail-desktop.png",
    screenshotAlt:
      "Screenshot of the Northwest Detail Studio homepage showing auto detailing service cards and a quote-focused layout.",
    screenshotWidth: 800,
    screenshotHeight: 500,
  },
  {
    id: 2,
    name: "Cascade Concrete Company",
    category: "Concrete Contractor",
    description:
      "A contractor-style site built around clear services, project photos, local credibility, and simple estimate requests.",
    bestFor:
      "A contractor that needs service clarity, project photos, and estimate requests.",
    url: "https://cascade-concrete-company.netlify.app/",
    screenshot: "/images/portfolio/cascade-concrete-desktop.png",
    screenshotAlt:
      "Screenshot of the Cascade Concrete Company homepage showing contractor services, project photos, and estimate request messaging.",
    screenshotWidth: 800,
    screenshotHeight: 500,
  },
];

export const secondaryPortfolioItems: PortfolioItem[] = [
  {
    id: 3,
    name: "Ridgeline Concrete Co.",
    category: "Concrete & Stamped Concrete",
    description:
      "A rugged concept focused on bold branding, before-and-after photos, and a strong quote flow.",
    url: "https://ridgeline-concrete-company.netlify.app/",
    screenshot: "/images/portfolio/ridgeline-concrete-desktop.png",
    screenshotAlt:
      "Screenshot of the Ridgeline Concrete Co. website showing bold branding and a strong quote flow.",
    screenshotWidth: 600,
    screenshotHeight: 375,
  },
  {
    id: 4,
    name: "Cedar Peak Roofing",
    category: "Roofing Contractor",
    description:
      "A roofing concept built around homeowner trust, documented inspections, and estimate requests.",
    url: "https://cedar-peak-roofing.netlify.app/",
    screenshot: "/images/portfolio/cedar-peak-roofing-desktop.png",
    screenshotAlt:
      "Screenshot of the Cedar Peak Roofing website showing inspection-focused roofing services and estimate request flow.",
    screenshotWidth: 600,
    screenshotHeight: 375,
  },
  {
    id: 5,
    name: "Northwest Home Renewal",
    category: "Remodeling Contractor",
    description:
      "A homeowner-friendly remodeling concept for kitchens, bathrooms, flooring, and home updates.",
    url: "https://northwest-home-renewal.netlify.app/",
    screenshot: "/images/portfolio/northwest-home-renewal-desktop.png",
    screenshotAlt:
      "Screenshot of the Northwest Home Renewal website showing a homeowner-friendly remodeling layout.",
    screenshotWidth: 600,
    screenshotHeight: 375,
  },
];

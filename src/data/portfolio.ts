export interface PortfolioItem {
  id: number;
  name: string;
  category: string;
  description: string;
  url: string;
  screenshot: string;
  bestFor?: string;
}

export const featuredPortfolioItems: PortfolioItem[] = [
  {
    id: 1,
    name: "Northwest Detail Studio",
    category: "Auto Detailing",
    description:
      "A polished service business site with strong visuals, clear packages, trust-building sections, and easy booking and contact paths.",
    bestFor:
      "A service business that needs strong visuals, clear packages, and easy contact paths.",
    url: "https://northwest-detail-studio.netlify.app/",
    screenshot: "/images/northwest-detail-screenshot.jpg",
  },
  {
    id: 2,
    name: "Cascade Concrete Company",
    category: "Concrete Contractor",
    description:
      "A contractor-style site with clear services, project photos, credibility sections, service area, and estimate requests.",
    bestFor:
      "A contractor that needs service clarity, project photos, and estimate requests.",
    url: "https://cascade-concrete-company.netlify.app/",
    screenshot: "/images/cascade-screenshot.jpg",
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
    screenshot: "/images/ridgeline-screenshot.jpg",
  },
  {
    id: 4,
    name: "Cedar Peak Roofing",
    category: "Roofing Contractor",
    description:
      "A roofing concept built around homeowner trust, documented inspections, and estimate requests.",
    url: "https://cedar-peak-roofing.netlify.app/",
    screenshot: "/images/cedar-peak-screenshot.jpg",
  },
  {
    id: 5,
    name: "Northwest Home Renewal",
    category: "Remodeling Contractor",
    description:
      "A homeowner-friendly remodeling concept for kitchens, bathrooms, flooring, and home updates.",
    url: "https://northwest-home-renewal.netlify.app/",
    screenshot: "/images/northwest-home-screenshot.jpg",
  },
];

export const heroScreenshots = [
  ...featuredPortfolioItems,
  ...secondaryPortfolioItems.slice(0, 2),
].map((item) => ({
  name: item.name,
  src: item.screenshot,
}));

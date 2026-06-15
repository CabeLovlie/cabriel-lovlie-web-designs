export interface PortfolioItem {
  id: number;
  name: string;
  category: string;
  description: string;
  url: string;
  screenshot: string;
}

export const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    name: "Cascade Concrete Co.",
    category: "Concrete Contractor",
    description:
      "A polished concrete contractor concept with services, project gallery, process, reviews, service area, and estimate form.",
    url: "https://cascade-concrete-company.netlify.app/",
    screenshot: "/images/cascade-screenshot.jpg",
  },
  {
    id: 2,
    name: "Ridgeline Concrete Co.",
    category: "Concrete & Stamped Concrete",
    description:
      "A rugged concept focused on bold branding, before-and-after photos, stamped concrete, and a strong quote flow.",
    url: "https://ridgeline-concrete-company.netlify.app/",
    screenshot: "/images/ridgeline-screenshot.jpg",
  },
  {
    id: 3,
    name: "Cedar Peak Roofing",
    category: "Roofing Contractor",
    description:
      "A warm roofing concept built around documented inspections, homeowner trust, services, and estimate requests.",
    url: "https://cedar-peak-roofing.netlify.app/",
    screenshot: "/images/cedar-peak-screenshot.jpg",
  },
  {
    id: 4,
    name: "Northwest Home Renewal",
    category: "Remodeling Contractor",
    description:
      "A homeowner-friendly remodeling concept for kitchens, bathrooms, flooring, and home updates.",
    url: "https://northwest-home-renewal.netlify.app/",
    screenshot: "/images/northwest-home-screenshot.jpg",
  },
];

export const heroScreenshots = portfolioItems.map((item) => ({
  name: item.name,
  src: item.screenshot,
}));

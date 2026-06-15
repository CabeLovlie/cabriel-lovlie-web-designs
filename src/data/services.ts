import type { LucideIcon } from "@lucide/astro";
import {
  LayoutList,
  Smartphone,
  Images,
  FileText,
  Search,
  Wrench,
} from "@lucide/astro";

export interface ServiceScreenshot {
  src: string;
  alt: string;
  width: number;
  height: number;
  class?: string;
}

export interface ServiceFeature {
  icon: LucideIcon;
  title: string;
  body: string;
  screenshot?: ServiceScreenshot;
}

export const serviceFeatures: ServiceFeature[] = [
  {
    icon: LayoutList,
    title: "Clear service sections",
    body: "Makes it easy for customers to understand what you do and why to call you.",
  },
  {
    icon: Smartphone,
    title: "Mobile-friendly layout",
    body: "Looks right and works cleanly on phones, tablets, and desktops.",
    screenshot: {
      src: "/images/portfolio/northwest-detail-mobile.png",
      alt: "Mobile screenshot of a local service business website showing a clean, phone-friendly layout.",
      width: 200,
      height: 430,
      class: "services-screenshot services-screenshot--mobile",
    },
  },
  {
    icon: Images,
    title: "Project photo galleries",
    body: "Shows real work and gives customers confidence before they reach out.",
    screenshot: {
      src: "/images/portfolio/northwest-detail-desktop.png",
      alt: "Example of a project photo gallery section on a local service business website.",
      width: 400,
      height: 250,
      class: "services-screenshot",
    },
  },
  {
    icon: FileText,
    title: "Quote and contact forms",
    body: "Gives visitors a direct way to request pricing or ask a question.",
    screenshot: {
      src: "/images/portfolio/cascade-concrete-desktop.png",
      alt: "Example of an estimate request form on a local contractor website.",
      width: 400,
      height: 250,
      class: "services-screenshot",
    },
  },
  {
    icon: Search,
    title: "Local SEO basics",
    body: "Page titles, descriptions, headings, and local service language set up correctly.",
  },
  {
    icon: Wrench,
    title: "Domain and launch support",
    body: "Help connecting your domain, testing the form, and getting the site live.",
  },
];

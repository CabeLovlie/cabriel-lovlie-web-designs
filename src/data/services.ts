import type { LucideIcon } from "@lucide/astro";
import {
  LayoutList,
  Smartphone,
  Images,
  FileText,
  Search,
  Wrench,
} from "@lucide/astro";

export interface ServiceFeature {
  icon: LucideIcon;
  title: string;
  body: string;
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
  },
  {
    icon: Images,
    title: "Project photo galleries",
    body: "Shows real work and gives customers confidence before they reach out.",
  },
  {
    icon: FileText,
    title: "Quote and contact forms",
    body: "Gives visitors a direct way to request pricing or ask a question.",
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

export interface ServiceScreenshot {
  src: string;
  alt: string;
  width: number;
  height: number;
  variant?: "desktop" | "mobile";
}

export interface PracticalFeature {
  title: string;
  description: string;
  screenshot: ServiceScreenshot;
}

export const practicalFeatures: PracticalFeature[] = [
  {
    title: "Clear service sections",
    description:
      "Distinct blocks that make each service easy to scan and understand.",
    screenshot: {
      src: "/images/portfolio/northwest-detail-services-desktop.png",
      alt: "Example of a clear services page on a local service business website, showing distinct service blocks.",
      width: 400,
      height: 250,
      variant: "desktop",
    },
  },
  {
    title: "Mobile-friendly layout",
    description:
      "Phone layouts that stay readable, tappable, and easy to navigate.",
    screenshot: {
      src: "/images/portfolio/northwest-detail-mobile.png",
      alt: "Mobile screenshot of a local service business website showing a clean, phone-friendly layout.",
      width: 200,
      height: 430,
      variant: "mobile",
    },
  },
  {
    title: "Project photo galleries",
    description:
      "Real project photos that build confidence before customers reach out.",
    screenshot: {
      src: "/images/portfolio/northwest-detail-desktop.png",
      alt: "Example of a project photo gallery section on a local service business website.",
      width: 400,
      height: 250,
      variant: "desktop",
    },
  },
  {
    title: "Quote and contact forms",
    description:
      "A direct path for visitors to request pricing or ask a question.",
    screenshot: {
      src: "/images/portfolio/cascade-concrete-desktop.png",
      alt: "Example of an estimate request form on a local contractor website.",
      width: 400,
      height: 250,
      variant: "desktop",
    },
  },
  {
    title: "Trust-building sections",
    description:
      "Proof points and credibility cues that help customers feel safe choosing you.",
    screenshot: {
      src: "/images/portfolio/cedar-peak-roofing-desktop.png",
      alt: "Example of trust-building sections on a local service business website.",
      width: 400,
      height: 250,
      variant: "desktop",
    },
  },
  {
    title: "Local SEO / service-area clarity",
    description:
      "Service-area language that helps local customers know you serve their region.",
    screenshot: {
      src: "/images/portfolio/ridgeline-service-area-desktop.png",
      alt: "Example of a service-area section on a local contractor website, showing the cities and region served.",
      width: 400,
      height: 250,
      variant: "desktop",
    },
  },
];

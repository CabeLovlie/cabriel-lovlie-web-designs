export interface ServiceScreenshot {
  src: string;
  alt: string;
  width: number;
  height: number;
  class?: string;
}

export interface PracticalFeature {
  title: string;
  screenshot?: ServiceScreenshot;
}

export const practicalFeatures: PracticalFeature[] = [
  {
    title: "Clear service sections",
    screenshot: {
      src: "/images/portfolio/northwest-detail-services-desktop.png",
      alt: "Example of a clear services page on a local service business website, showing distinct service blocks.",
      width: 400,
      height: 250,
      class: "services-screenshot",
    },
  },
  {
    title: "Mobile-friendly layout",
    screenshot: {
      src: "/images/portfolio/northwest-detail-mobile.png",
      alt: "Mobile screenshot of a local service business website showing a clean, phone-friendly layout.",
      width: 200,
      height: 430,
      class: "services-screenshot services-screenshot--mobile",
    },
  },
  {
    title: "Project photo galleries",
    screenshot: {
      src: "/images/portfolio/northwest-detail-desktop.png",
      alt: "Example of a project photo gallery section on a local service business website.",
      width: 400,
      height: 250,
      class: "services-screenshot",
    },
  },
  {
    title: "Quote and contact forms",
    screenshot: {
      src: "/images/portfolio/cascade-concrete-desktop.png",
      alt: "Example of an estimate request form on a local contractor website.",
      width: 400,
      height: 250,
      class: "services-screenshot",
    },
  },
  {
    title: "Trust-building sections",
    screenshot: {
      src: "/images/portfolio/cedar-peak-roofing-desktop.png",
      alt: "Example of trust-building sections on a local service business website.",
      width: 400,
      height: 250,
      class: "services-screenshot",
    },
  },
  {
    title: "Local SEO / service-area clarity",
    screenshot: {
      src: "/images/portfolio/ridgeline-service-area-desktop.png",
      alt: "Example of a service-area section on a local contractor website, showing the cities and region served.",
      width: 400,
      height: 250,
      class: "services-screenshot",
    },
  },
];

export interface ProblemCard {
  title: string;
  description: string;
}

export const problemCards: ProblemCard[] = [
  {
    title: "Broken or missing website",
    description:
      "Customers search for you, hit a broken or missing site, and move on.",
  },
  {
    title: "Outdated mobile experience",
    description:
      "Most local service business searches happen on phones — a bad mobile site loses leads.",
  },
  {
    title: "Weak or missing project gallery",
    description:
      "Without photos of real work, customers have no reason to trust you.",
  },
  {
    title: "No clear estimate form",
    description:
      "If there's no easy way to ask for a quote, customers call your competitor.",
  },
  {
    title: "Services are hard to understand",
    description:
      "Vague service pages make customers unsure if you do what they need.",
  },
  {
    title: "Domain or SSL issues",
    description:
      'A "not secure" warning or broken domain kills credibility instantly.',
  },
];

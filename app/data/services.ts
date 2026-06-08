export interface Service {
  step: string;
  icon: string;
  tags: string[];
  delay: string;
}

export const SERVICES: Service[] = [
  {
    step: "#1",
    icon: "ion-ios-world",
    tags: ["Vue.js", "React", "Nuxt", "TypeScript"],
    delay: ".1s",
  },
  {
    step: "#2",
    icon: "ion-iphone",
    tags: ["Responsive", "PWA", "Capacitor", "iOS & Android"],
    delay: ".2s",
  },
  {
    step: "#3",
    icon: "ion-ios-speedometer",
    tags: ["Lighthouse", "Core Web Vitals", "Schema.org", "SSR"],
    delay: ".3s",
  },
  {
    step: "#4",
    icon: "ion-ios-cloud",
    tags: ["Node.js", "Python", "REST", "GraphQL", "PostgreSQL"],
    delay: ".4s",
  },
  {
    step: "#5",
    icon: "ion-ios-analytics",
    tags: ["Strapi", "Supabase", "Custom CMS", "Analytics"],
    delay: ".5s",
  },
  {
    step: "#6",
    icon: "ion-ios-gear",
    tags: ["Docker", "Firebase", "VPS", "GitLab CI/CD"],
    delay: ".6s",
  },
];

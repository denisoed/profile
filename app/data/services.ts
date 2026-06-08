export interface Service {
  step: string;
  icon: string;
  iconClass: string;
  tags: string[];
  delay: string;
}

export const SERVICES: Service[] = [
  {
    step: "#1",
    icon: "vuedotjs",
    iconClass: "icon-img-50",
    tags: ["Vue.js", "React", "Nuxt", "TypeScript"],
    delay: ".1s",
  },
  {
    step: "#2",
    icon: "apple",
    iconClass: "icon-img-40",
    tags: ["Responsive", "PWA", "Capacitor", "iOS & Android"],
    delay: ".2s",
  },
  {
    step: "#3",
    icon: "google",
    iconClass: "icon-img-50",
    tags: ["Lighthouse", "Core Web Vitals", "Schema.org", "SSR"],
    delay: ".3s",
  },
  {
    step: "#4",
    icon: "nodedotjs",
    iconClass: "icon-img-50",
    tags: ["Node.js", "Python", "REST", "GraphQL", "PostgreSQL"],
    delay: ".4s",
  },
  {
    step: "#5",
    icon: "strapi",
    iconClass: "icon-img-50",
    tags: ["Strapi", "Supabase", "Custom CMS", "Analytics"],
    delay: ".5s",
  },
  {
    step: "#6",
    icon: "docker",
    iconClass: "icon-img-50",
    tags: ["Docker", "Firebase", "VPS", "GitLab CI/CD"],
    delay: ".6s",
  },
];


export type Profile = {
  username: string;
  name: string;
  role: string;
  company: string;
  location: string;
  bio: string;
  email: string;
  phone: string;
  whatsapp: string;
  website: string;
  linkedin: string;
  github: string;
  skills: string[];
  initials: string;
};

export const profiles: Record<string, Profile> = {
  bian: {
    username: "bian",
    name: "Ayyubian Ar Raufan Kamal",
    role: "Frontend Developer & Full-Stack Developer",
    company: "Independent Developer",
    location: "Tangerang, Indonesia",

    bio: "Hi, I'm Biyan — a Web Developer interested in building modern, responsive, and functional web applications. I work with frontend technologies and explore full-stack development through personal projects, from designing user interfaces to building APIs and integrating databases.",

    email: "ayyubian07@gmail.com",
    phone: "+62 89523689349",
    whatsapp: "6289523689349",

    website: "https://web-porto-nextjs.vercel.app/",
    linkedin: "https://www.linkedin.com/in/ayyubian-ar-raufan-kamal/",
    github: "https://github.com/Biyannn",

    skills: [
      "React.js",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "Golang",
      "REST API",
      "MySQL",
      "MongoDB",
    ],

    initials: "ARK",
  },
};

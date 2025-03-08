import { FaYoutube, FaFacebook, FaLandmark, FaMosque, FaCanadianMapleLeaf, FaBuilding, FaArchway } from "react-icons/fa";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from "react-icons/rx";
import { 
  GiUsaFlag,
  GiCastle,
  GiJapan,
  GiIndianPalace,
  GiTempleDoor,
  GiMountainCave
} from "react-icons/gi";
import { SiYourtraveldottv } from "react-icons/si";

type IconFamily = "Gi" | "Fa" | "Si";

interface SkillItem {
  skill_name: string;
  iconName: string;
  iconFamily: IconFamily;
  width: number;
  height: number;
}

export const SKILL_DATA: SkillItem[] = [
  {
    skill_name: "Europe",
    iconName: "GiCastle",
    iconFamily: "Gi",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Canada",
    iconName: "FaCanadianMapleLeaf",
    iconFamily: "Fa",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Iran",
    iconName: "FaMosque",
    iconFamily: "Fa",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Bangladesh",
    iconName: "GiTempleDoor",
    iconFamily: "Gi",
    width: 80,
    height: 80,
  },
  {
    skill_name: "India",
    iconName: "GiIndianPalace",
    iconFamily: "Gi",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Bhutan",
    iconName: "SiYourtraveldottv",
    iconFamily: "Si",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Japan",
    iconName: "GiJapan",
    iconFamily: "Gi",
    width: 80,
    height: 80,
  },
  {
    skill_name: "China",
    iconName: "FaLandmark",
    iconFamily: "Fa",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Uzbekistan",
    iconName: "FaArchway",
    iconFamily: "Fa",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Kazakhstan",
    iconName: "GiMountainCave",
    iconFamily: "Gi",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Kyrgyzstan",
    iconName: "GiMountainCave",
    iconFamily: "Gi",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Russia",
    iconName: "GiCastle",
    iconFamily: "Gi",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Timor-Leste",
    iconName: "FaBuilding",
    iconFamily: "Fa",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Egypt",
    iconName: "FaMosque",
    iconFamily: "Fa",
    width: 80,
    height: 80,
  },
];

export const SOCIALS = [
  {
    name: "Instagram",
    icon: RxInstagramLogo,
    link: "https://instagram.com",
  },
  {
    name: "Facebook",
    icon: FaFacebook,
    link: "https://facebook.com",
  },
  {
    name: "Twitter",
    icon: RxTwitterLogo,
    link: "https://twitter.com",
  },
] as const;

export const FRONTEND_SKILL = [
  {
    skill_name: "HTML",
    src: "/html.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "CSS",
    src: "/css.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "JavaScript",
    src: "/js.png",
    width: 65,
    height: 65,
  },
  {
    skill_name: "Tailwind CSS",
    src: "/tailwind.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Material UI",
    src: "/mui.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "React",
    src: "/react.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Redux",
    src: "/redux.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "React Query",
    src: "/reactquery.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "TypeScript",
    src: "/ts.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Next.js 14",
    src: "/next.png",
    width: 80,
    height: 80,
  },
] as const;

export const BACKEND_SKILL = [
  {
    skill_name: "Node.js",
    src: "/node.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Express.js",
    src: "/express.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "MongoDB",
    src: "/mongodb.png",
    width: 40,
    height: 40,
  },
  {
    skill_name: "Firebase",
    src: "/firebase.png",
    width: 55,
    height: 55,
  },
  {
    skill_name: "PostgreSQL",
    src: "/postgresql.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "MySQL",
    src: "/mysql.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Prisma",
    src: "/prisma.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Graphql",
    src: "/graphql.png",
    width: 80,
    height: 80,
  },
] as const;

export const FULLSTACK_SKILL = [
  {
    skill_name: "React Native",
    src: "/reactnative.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Tauri",
    src: "/tauri.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Docker",
    src: "/docker.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Figma",
    src: "/figma.png",
    width: 50,
    height: 50,
  },
] as const;

export const OTHER_SKILL = [
  {
    skill_name: "Go",
    src: "/go.png",
    width: 60,
    height: 60,
  },
] as const;

export const PROJECTS = [
  {
    title: "Modern Next.js 14 Portfolio",
    description:
      'Embark on a journey through my professional evolution with the "Modern Next.js Portfolio" - a dynamic showcase of my skills, experiences, and passion for web development. Crafted with precision and powered by Next.js, this portfolio is more than just a static display; it\'s an immersive experience that reflects the cutting edge of modern web technologies.',
    image: "/projects/project-1.png",
    link: "https://example.com",
  },
  {
    title: "Interactive Cards Portfolio",
    description:
      'Step into the extraordinary world of my professional journey through the "Interactive Cards Portfolio" - an innovative and visually captivating platform that redefines the traditional portfolio experience. Ditching the conventional static layout, this portfolio leverages interactive cards to showcase my skills, projects, and personality in an engaging and dynamic manner.',
    image: "/projects/project-2.png",
    link: "https://example.com",
  },
  {
    title: "Space Themed Website",
    description:
      'Embark on an interstellar journey with my "Space Themed Website", a mesmerizing space-themed website that invites you to explore the cosmic wonders beyond our world. Immerse yourself in an awe-inspiring digital experience that blends cutting-edge design with the mysteries of the universe.',
    image: "/projects/project-3.png",
    link: "https://example.com",
  },
] as const;

export const COURSES = [
  {
    title: "Coming Soon",
    description: "Our comprehensive course catalog is being prepared. Stay tuned for exciting educational opportunities that will help shape your future.",
    image: "/projects/coming-soon.png",
    link: "https://ie.infradexedu.in/about.php#courses",
  }
] as const;

export const FOOTER_DATA = [
  {
    title: "Quick Links",
    data: [
      {
        name: "Home",
        icon: null,
        link: "/",
      },
      {
        name: "About",
        icon: null,
        link: "https://ie.infradexedu.in/about.php",
      },
      {
        name: "Contact",
        icon: null,
        link: "https://ie.infradexedu.in/contact.php",
      },
      {
        name: "Login/Dashboard",
        icon: null,
        link: "https://ie.infradexedu.in/login-new.php",
      },
    ],
  },
  {
    title: "Social Media",
    data: [
      {
        name: "Instagram",
        icon: RxInstagramLogo,
        link: "https://instagram.com",
      },
      {
        name: "Twitter",
        icon: RxTwitterLogo,
        link: "https://twitter.com",
      },
      {
        name: "Linkedin",
        icon: RxLinkedinLogo,
        link: "https://linkedin.com",
      },
    ],
  },
  {
    title: "Services",
    data: [
      {
        name: "Study Abroad",
        icon: null,
        link: "https://ie.infradexedu.in/about.php#services",
      },
      {
        name: "Career Counseling",
        icon: null,
        link: "https://ie.infradexedu.in/about.php#services",
      },
      {
        name: "Visa Assistance",
        icon: null,
        link: "https://ie.infradexedu.in/about.php#services",
      },
    ],
  },
] as const;

export const NAV_LINKS = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "About",
    link: "https://ie.infradexedu.in/about.php",
  },
  {
    title: "Contact",
    link: "https://ie.infradexedu.in/contact.php",
  },
  {
    title: "Login/Dashboard",
    link: "https://ie.infradexedu.in/login-new.php",
  },
] as const;

export const LINKS = {
  sourceCode: "https://github.com/sanidhyy/space-portfolio",
};

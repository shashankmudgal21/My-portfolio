import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  thread,
  blog,
  lms,
  uni
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Unified Mentor",
    icon: uni,
    iconBg: "#383E56",
    date: "May 2024 - July 2024",
    points: [
      "Implemented small features for there website",
      "Collected, defined and translated user requirements into project designs and implementation plans.",
      "Assisted with troubleshooting tasks to uncover issues within software.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },

];



const projects = [
  {
    name: "EduMaster Learning Platform",
    description:
      "It is a learning management application built on nextjs with typescript",
    tags: [
      {
        name: "next",
        color: "blue-text-gradient",
      },
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "SQL",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: lms,
    source_code_link: "https://github.com/shashankmudgal21/LEARNING-MANAGEMENT-SYSTEM.git",
  },
  {
    name: "Blogging Platform",
    description:
      "Web application that enables users to create blog post and also allow users to like and comment on other user's post",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "Mongo db",
        color: "pink-text-gradient",
      },
    ],
    image: blog,
    source_code_link: "https://github.com/shashankmudgal21/BLOG-APP.git",
  },
  {
    name: "Thread clone",
    description:
      "Facilitating secure and smooth login system in which User can follow/unfollow any of the person who is on the thread app",
    tags: [
      {
        name: "React js",
        color: "blue-text-gradient",
      },
      {
        name: "Mongodb",
        color: "green-text-gradient",
      },
      {
        name: "Chakra ui",
        color: "pink-text-gradient",
      },
    ],
    image: thread,
    source_code_link: "https://github.com/shashankmudgal21/THREAD-CLONE.git",
  },
];

export { services, technologies, experiences, projects };

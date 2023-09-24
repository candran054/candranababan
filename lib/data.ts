import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import instanx from "../public/instanx.png"
import appinstanx from "../public/app-instanx.png"
import dappstrt from "../public/dapp-strt.png"
import mataair from "../public/mata-air-LP.png"

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  /*{*/
  /*name: "Contact",*/
  /*hash: "#contact",*/
  /*},*/
] as const;

export const experiencesData = [
  {
    title: "Front-End Developer",
    location: "Denpasar, Bali",
    description:
      "I worked as a Frontend Developer in Panak.Id for about 1 Years. Mainly using React",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2020",
  },
  {
    title: "Front-End Developer",
    location: "Medan, North Sumatra",
    description:
      "I worked as a front-end developer for 1 years and 4 Months job in STRT Button, technically a child company of Qubic Ball Agency. It's a Blockchain company and i learn many things such as NextJS, how Metamask works and make a functionality to connect the Browser to Metamask. I also learn Typescript",
    icon: React.createElement(CgWorkAlt),
    date: "2020 - 2021",
  },
] as const;

export const projectsData = [
  {
    title: "InstanX",
    description:
      "I worked as a Frontend developer on this startup project for a Months. This is the Landing Page for our project which called InstanX.",
    tags: ["React", "Next.js", "Tailwind", "Framer"],
    imageUrl: instanx,
  },
  {
    title: "InstanX App",
    description:
      "The App for InstanX, which i create with other Software Engineer. I build functionality such as Register, Login, OTP Verification, User Profile Integration",
    tags: ["React", "Next.js", "Tailwind", "TypeScript"],
    imageUrl: appinstanx,
  },
  {
    title: "Dapp STRT Button",
    description:
      "Blockchain dapp for STRT Button that i worked with several other Software Engineer.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind"],
    imageUrl: dappstrt,
  },
  {
    title: "Mata Air LP",
    description:
      "A Landing Page website for one of client of my company.",
    tags: ["React", "Next.js", "Tailwind", "Framer"],
    imageUrl: mataair,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Git",
  "Tailwind",
  "Redux",
  "Framer Motion",
] as const;

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
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated bootcamp",
    location: "Miami, FL",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Front-End Developer",
    location: "Orlando, FL",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Full-Stack Developer",
    location: "Houston, TX",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
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

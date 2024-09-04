import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import aconpyImg from "@/public/aconpy.png";
import astrohacksImg from "@/public/astroHacks.png";
import eycImg from "@/public/e&c.png";
import mercantilImg from "@/public/mercantil.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "Sobre mí",
    hash: "#about",
  },
  {
    name: "Proyectos",
    hash: "#projects",
  },
  {
    name: "Habilidades",
    hash: "#skills",
  },
  {
    name: "Experiencia",
    hash: "#experience",
  },
  {
    name: "Contacto",
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
    title: "Aconpy.com",
    description:
      "Trabajé principalmente en una migración de backend utilizando PHP - CI4. Mi rol incluyó diversas tareas relacionadas con base de datos y el desarrollo frontend utilizando JavaScript.",
    tags: ["PHP", "Code Igniter 4", "MySQL", "Javascript", "Tailwind"],
    imageUrl: aconpyImg
  },
  {
    title: "Astrohacks",
    description:
      "Ultimo proyecto freelance, E-commerce completo con autenticación de usuarios, mercado pago como medio de compras y varias funcionalidades.",
    tags: ["TypeScript", "Next.js", "Redux", "Mercado pago"],
    imageUrl: astrohacksImg,
  },
  {
    title: "E&C",
    description:
      "Tienda online de indumentaria, con filtros por producto, Stripe como pasarela de pago, etc.",
    tags: ["React", "Tailwind", "Stripe"],
    imageUrl: eycImg,
  },
  {
    title: "Mercantil",
    description:
      "Landing page de venta de seguros.",
    tags: ["HTML", "Css", "Javascript"],
    imageUrl: mercantilImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "MongoDB",
  "Redux",
  "Express",
  "PostgreSQL",
  "PHP",
  "Laravel",
  "Code Igniter 4",
  "Framer Motion",
] as const;

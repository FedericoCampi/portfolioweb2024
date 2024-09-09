import React from "react";
import { FaUser  } from "react-icons/fa";
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
    title: "Full Stack Developer",
    location: "Aconpy.com",
    description:
      "Trabajo como desarrollador full stack, utilizando principalmente PHP (CodeIgniter), React y bases de datos relacionales como MySQL. Me especializo en construir aplicaciones web dinámicas, integrando frontend y backend de manera eficiente.",
    icon: React.createElement(FaUser),
    date: "11/23 - actualidad",
  },
  {
    title: "Full Stack Developer",
    location: "UNB Collections",
    description:
      "Trabajé como desarrollador full stack creando aplicaciones web escalables utilizando PHP (Laravel) y JavaScript (React, Node.js). Desarrollé tanto soluciones de front-end como de back-end para varios proyectos.",
    icon: React.createElement(FaUser),
    date: "03/23 - 10/23",
  },
  {
    title: "Frontend Developer",
    location: "Zetenta agencia digital",
    description:
      "Desarrollar interfaces web responsivas usando HTML, CSS y Sass, colaborando con el equipo de diseño para crear sitios eficientes y atractivos visualmente.",
    icon: React.createElement(FaUser),
    date: "03/22 - 02/23",
  }
] as const;

export const projectsData = [
  {
    title: "Aconpy.com",
    description:
      "Trabajé principalmente en una migración de backend utilizando PHP - CI4. Mi rol incluyó diversas tareas relacionadas con base de datos y el desarrollo frontend utilizando JavaScript.",
    tags: ["PHP", "Code Igniter 4", "MySQL", "Javascript", "Tailwind"],
    imageUrl: aconpyImg,
    link: "https://aconpy.com/"
  },
  {
    title: "Astrohacks",
    description:
      "Ultimo proyecto freelance, E-commerce completo con autenticación de usuarios, mercado pago como medio de compras y varias funcionalidades.",
    tags: ["TypeScript", "Next.js", "Redux", "Mercado pago"],
    imageUrl: astrohacksImg,
    link: "https://www.astro-hacks.com/"
  },
  {
    title: "E&C",
    description:
      "Tienda online de indumentaria, con filtros por producto, Stripe como pasarela de pago, etc.",
    tags: ["React", "Tailwind", "Stripe"],
    imageUrl: eycImg,
    link: "https://cloth-store-kappa.vercel.app/"
  },
  {
    title: "Mercantil",
    description:
      "Landing page de venta de seguros.",
    tags: ["HTML", "Css", "Javascript"],
    imageUrl: mercantilImg,
    link: "https://mercantil.netlify.app"
  },
] as const;

export const skillsData = [
  { name: "HTML", color: "bg-red-600" },        // HTML color
  { name: "CSS", color: "bg-blue-600" },       // CSS color
  { name: "JavaScript", color: "bg-yellow-400" }, // JavaScript color
  { name: "TypeScript", color: "bg-blue-700" },  // TypeScript color
  { name: "React", color: "bg-cyan-400" },      // React color
  { name: "Next.js", color: "bg-black" },       // Next.js color
  { name: "Node.js", color: "bg-green-600" },   // Node.js color
  { name: "Git", color: "bg-red-500" },         // Git color
  { name: "Tailwind", color: "bg-teal-500" },   // Tailwind color
  { name: "MongoDB", color: "bg-green-700" },   // MongoDB color
  { name: "Redux", color: "bg-violet-700" },    // Redux color
  { name: "Express", color: "bg-black" },       // Express color
  { name: "PostgreSQL", color: "bg-blue-600" }, // PostgreSQL color
  { name: "PHP", color: "bg-blue-600" },        // PHP color
  { name: "Laravel", color: "bg-red-600" },     // Laravel color
  { name: "Code Igniter 4", color: "bg-yellow-500" }, // Code Igniter 4 color
  { name: "Framer Motion", color: "bg-teal-400" }, // Framer Motion color
] as const;

"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("Sobre mí");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>Sobre mí</SectionHeading>
      <p className="mb-3">
        Soy desarrollador{" "}
        <span className="font-medium">Full Stack</span> con experiencia en la
        creación de <span className="font-medium">soluciones tecnológicas innovadoras</span>.
        Poseo habilidades sólidas en tecnologías como{" "}
        <span className="font-medium">HTML, CSS, JavaScript</span>, así como en{" "}
        <span className="font-medium">frameworks</span> y{" "}
        <span className="font-medium">bibliotecas populares</span>.
      </p>

      <p className="mb-3">
        Tengo experiencia en el desarrollo tanto del lado del{" "}
        <span className="font-medium">cliente</span> como del{" "}
        <span className="font-medium">servidor</span>, utilizando lenguajes como{" "}
        <span className="font-medium">Typescript, PHP</span> y{" "}
        <span className="font-medium">Java principalmente</span>. Además, cuento con experiencia en el{" "}
        <span className="font-medium">despliegue y gestión de servidores</span> en{" "}
        <span className="font-medium">AWS</span>, incluyendo tareas de configuración, mantenimiento y escalabilidad.
      </p>

      <p className="mb-3">
        También tengo conocimientos en <span className="font-medium">diseño y experiencia de usuario (UX)</span>.
        He trabajado en diversos proyectos desafiantes en sectores como{" "}
        <span className="font-medium">el comercio electrónico, las finanzas</span> y{" "}
        <span className="font-medium">las redes sociales</span>. Soy capaz de trabajar tanto de forma{" "}
        <span className="font-medium">independiente</span> como en <span className="font-medium">equipo</span>, y me enorgullece entregar{" "}
        <span className="font-medium">resultados de calidad</span> en plazos establecidos.
      </p>

      <p>
        Siempre estoy dispuesto a <span className="italic">aprender</span> y mantenerme actualizado en las{" "}
        <span className="font-medium">últimas tendencias</span> y tecnologías emergentes. Estoy preparado para enfrentar{" "}
        <span className="italic">nuevos desafíos</span> y contribuir al <span className="font-medium">éxito</span> de cualquier proyecto.
      </p>
    </motion.section>
  );
}

"use client";

import React, { useState } from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/actions/sendEmail";
import SubmitBtn from "./submit-btn";
import toast from "react-hot-toast";

export default function Contact() {

  const { ref } = useSectionInView("Contacto");
  const [senderEmail, setSenderEmail] = useState("");
  const [message, setMessage] = useState("");
  const [pending, setPending] = useState(false);

  const handleSubmit = async (event:any) => {
    event.preventDefault();

    const lastSent = localStorage.getItem("lastSent");
    const now = Date.now();

    if (lastSent && now - Number(lastSent) < 2 * 60 * 1000) {
      // If less than 2 minutes have passed
      const timeRemaining = Math.ceil((2 * 60 * 1000 - (now - Number(lastSent))) / 1000);
      toast.error(`Debe esperar 2 minutos antes de enviar nuevamente.`);
      return;
    }

    setPending(true);

    const formData = new FormData();
    formData.append("senderEmail", senderEmail);
    formData.append("message", message);

    // Send FormData to the server
    const { error } = await sendEmail(formData);

    if (error) {
      toast.error(error);
      return;
    }

    toast.success("Email enviado correctamente!");

    localStorage.setItem("lastSent", now.toString());
    // Clear the form fields
    setSenderEmail("");
    setMessage("");
    setPending(false);
  };

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeading>Contacto</SectionHeading>

      <p className="text-gray-700 -mt-6 dark:text-white/80">
       Trabajemos juntos
      </p>

      <form
        className="mt-10 flex flex-col dark:text-black"
        onSubmit={handleSubmit}
      >
        <input
          className="h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          name="senderEmail"
          type="email"
          required
          maxLength={500}
          placeholder="Email"
          value={senderEmail} // Controlled input
          onChange={(e) => setSenderEmail(e.target.value)}
        />
        <textarea
          className="h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          name="message"
          placeholder="Mensaje"
          required
          maxLength={5000}
          value={message} // Controlled textarea
          onChange={(e) => setMessage(e.target.value)}
        />
        <SubmitBtn pending={pending}/>
      </form>
    </motion.section>
  );
}

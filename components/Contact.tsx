"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/YOUR_FORM_ID";

const fields = [
  { name: "name", label: "IMIĘ I NAZWISKO", type: "text", required: true },
  { name: "phone", label: "TELEFON", type: "tel", required: true },
  { name: "email", label: "E-MAIL", type: "email", required: true },
  { name: "car", label: "SAMOCHÓD", type: "text", required: false },
  { name: "service", label: "USŁUGA", type: "text", required: false },
];

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    const data = new FormData(form);
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setStatus("sent");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="relative py-28 md:py-36 bg-graphite-900 border-t border-graphite-800">
      <div className="container-edge grid lg:grid-cols-12 gap-14">
        <div className="lg:col-span-5">
          <h2 className="tech-label text-accent mb-6">08 / CONTACT</h2>
          <h3 className="font-display text-4xl md:text-5xl text-paper mb-10">LESZNO TIRE LAB</h3>

          <ul className="space-y-6 text-graphite-300">
            <li className="flex items-start gap-4">
              <MapPin size={18} className="text-accent mt-1 shrink-0" />
              <span>Leszno, 64-100, Poland</span>
            </li>
            <li className="flex items-start gap-4">
              <Phone size={18} className="text-accent mt-1 shrink-0" />
              <span>+48 XXX XXX XXX</span>
            </li>
            <li className="flex items-start gap-4">
              <Mail size={18} className="text-accent mt-1 shrink-0" />
              <span>kontakt@lesznotirelab.pl</span>
            </li>
            <li className="flex items-start gap-4">
              <Clock size={18} className="text-accent mt-1 shrink-0" />
              <span>
                Mon–Fri 08:00–18:00
                <br />
                Saturday 09:00–14:00
              </span>
            </li>
          </ul>

          <a
            href="https://maps.google.com/?q=Leszno+Poland"
            target="_blank"
            rel="noopener noreferrer"
            className="tech-label inline-flex items-center gap-3 border border-graphite-600 px-6 py-3 mt-10 text-paper hover:border-accent hover:text-accent transition-colors duration-300"
          >
            OPEN IN GOOGLE MAPS →
          </a>
        </div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          onSubmit={handleSubmit}
          className="lg:col-span-7 grid sm:grid-cols-2 gap-6"
        >
          {fields.map((f) => (
            <div key={f.name} className={f.name === "email" || f.name === "phone" ? "" : "sm:col-span-1"}>
              <label htmlFor={f.name} className="tech-label text-graphite-500 block mb-2">
                {f.label}
                {f.required && <span className="text-accent"> *</span>}
              </label>
              <input
                id={f.name}
                name={f.name}
                type={f.type}
                required={f.required}
                className="w-full bg-transparent border border-graphite-600 text-paper px-4 py-3 focus:border-accent outline-none transition-colors"
              />
            </div>
          ))}

          <div className="sm:col-span-2">
            <label htmlFor="message" className="tech-label text-graphite-500 block mb-2">
              WIADOMOŚĆ
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              className="w-full bg-transparent border border-graphite-600 text-paper px-4 py-3 focus:border-accent outline-none transition-colors resize-none"
            />
          </div>

          <div className="sm:col-span-2 flex items-center gap-5">
            <button
              type="submit"
              disabled={status === "sending"}
              className="tech-label inline-flex items-center gap-3 bg-accent text-graphite-950 px-8 py-4 hover:bg-accent-glow transition-colors duration-300 disabled:opacity-60"
            >
              {status === "sending" ? "WYSYŁANIE..." : "UMÓW SERWIS"}
            </button>
            {status === "sent" && <span className="tech-label text-graphite-300">WIADOMOŚĆ WYSŁANA</span>}
            {status === "error" && <span className="tech-label text-accent">BŁĄD — SPRÓBUJ PONOWNIE</span>}
          </div>
        </motion.form>
      </div>
    </section>
  );
}

"use client";

import { useState, useRef, FormEvent } from "react";
import emailjs from "@emailjs/browser";
import { contactInfo } from "@/data/portfolio";

export function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setStatus("loading");

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        formRef.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      )
      .then(() => {
        setStatus("success");
        formRef.current?.reset();
        setTimeout(() => setStatus("idle"), 5000);
      })
      .catch(() => {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 5000);
      });
  };

  return (
    <section id="contacto" className="py-20 px-4 sm:px-6 bg-gray-50">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-3 sm:mb-4">
            {contactInfo.title}
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto">
            {contactInfo.subtitle}
          </p>
        </div>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="bg-white border border-gray-200 rounded-3xl p-6 sm:p-10 shadow-lg space-y-6"
        >
          <div>
            <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
              Nombre
            </label>
            <input
              type="text"
              id="name"
              name="nombre"
              required
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-gray-900 focus:ring-2 focus:ring-gray-900/10 outline-none transition-all duration-200 text-gray-900 placeholder-gray-400"
              placeholder="Tu nombre"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-gray-900 focus:ring-2 focus:ring-gray-900/10 outline-none transition-all duration-200 text-gray-900 placeholder-gray-400"
              placeholder="tu@email.com"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
              Mensaje
            </label>
            <textarea
              id="message"
              name="title"
              required
              rows={5}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-gray-900 focus:ring-2 focus:ring-gray-900/10 outline-none transition-all duration-200 resize-none text-gray-900 placeholder-gray-400"
              placeholder="Cuéntame sobre tu proyecto..."
            />
          </div>

          <button
            type="submit"
            disabled={status === "loading"}
            className="w-full bg-black text-white py-4 rounded-full font-semibold text-lg hover:bg-gray-800 hover:scale-[1.02] transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {status === "loading" ? (
              <span className="flex items-center justify-center gap-2">
                <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24" fill="none">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                </svg>
                Enviando...
              </span>
            ) : (
              "Enviar Mensaje"
            )}
          </button>

          {status === "success" && (
            <div className="text-center py-3 px-4 bg-green-50 border border-green-200 rounded-xl text-green-700 font-medium">
              Mensaje enviado con éxito. Te responderé pronto.
            </div>
          )}

          {status === "error" && (
            <div className="text-center py-3 px-4 bg-red-50 border border-red-200 rounded-xl text-red-700 font-medium">
              Hubo un error al enviar. Intenta de nuevo o contáctame directamente por email.
            </div>
          )}
        </form>
      </div>
    </section>
  );
}

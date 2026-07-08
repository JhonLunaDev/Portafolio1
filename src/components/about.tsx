"use client";

import { useState, useEffect, useRef } from "react";
import { personalInfo, skills } from "@/data/portfolio";

export function About() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );
    const el = sectionRef.current;
    if (el) observer.observe(el);
    return () => { if (el) observer.unobserve(el); };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="acerca"
      className={`min-h-screen flex items-center justify-center px-4 sm:px-6 py-20 bg-gray-50 transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="flex justify-center lg:justify-start animate-fade-up">
          <div className="w-72 h-[30rem] sm:w-80 sm:h-[34rem] lg:w-[30rem] lg:h-[40rem] overflow-hidden rounded-3xl shadow-2xl">
            <img
              src="/me2.jpg"
              alt={personalInfo.name}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>

        <div className="space-y-8">
          <div className="transform transition-all duration-700 ease-out hover:scale-105"
            style={{ animation: isVisible ? 'fadeUp 0.8s ease-out 0.3s forwards' : 'none', opacity: 0 }}>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
              Acerca de{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-600">
                Mí
              </span>
            </h2>
          </div>

          <div className="transform transition-all duration-700 ease-out hover:translate-x-2"
            style={{ animation: isVisible ? 'fadeUp 0.8s ease-out 0.4s forwards' : 'none', opacity: 0 }}>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">{personalInfo.name}</h3>
            <p className="text-lg text-gray-600 leading-relaxed">{personalInfo.aboutBio}</p>
          </div>

          <div className="transform transition-all duration-700 ease-out hover:translate-x-2"
            style={{ animation: isVisible ? 'fadeUp 0.8s ease-out 0.5s forwards' : 'none', opacity: 0 }}>
            <h4 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
              <span className="inline-block w-1 h-6 bg-gray-900 rounded-full" /> Educación
            </h4>
            <div className="space-y-2 text-gray-600">
              <p><span className="font-semibold">{personalInfo.education.institution}</span></p>
              <p className="text-sm">{personalInfo.education.degree}</p>
              <p className="text-sm">{personalInfo.education.status}</p>
            </div>
          </div>

          <div className="transform transition-all duration-700 ease-out hover:translate-x-2"
            style={{ animation: isVisible ? 'fadeUp 0.8s ease-out 0.6s forwards' : 'none', opacity: 0 }}>
            <h4 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
              <span className="inline-block w-1 h-6 bg-gray-900 rounded-full" /> Objetivo Profesional
            </h4>
            <div className="space-y-2 text-gray-600">
              <p><span className="font-semibold">{personalInfo.objective.title}</span></p>
              <p className="text-sm">{personalInfo.objective.description}</p>
            </div>
          </div>

          <div className="transform transition-all duration-700 ease-out"
            style={{ animation: isVisible ? 'fadeUp 0.8s ease-out 0.7s forwards' : 'none', opacity: 0 }}>
            <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <span className="inline-block w-1 h-6 bg-gray-900 rounded-full" /> Habilidades Técnicas
            </h4>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill, index) => (
                <span
                  key={skill.name}
                  className="group px-4 py-2.5 bg-white border-2 border-gray-200 text-gray-700 rounded-full text-sm font-semibold hover:border-gray-900 hover:text-gray-900 hover:scale-105 transition-all duration-300 flex items-center gap-2"
                  style={{
                    animation: isVisible ? `fadeUp 0.5s ease-out ${0.8 + index * 0.05}s forwards` : 'none',
                    opacity: 0
                  }}
                >
                  <span
                    className="w-2.5 h-2.5 rounded-full"
                    style={{ backgroundColor: skill.color }}
                  />
                  {skill.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

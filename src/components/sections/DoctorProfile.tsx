"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  useMotionValueEvent,
  useScroll,
  useTransform,
  motion,
} from "framer-motion";
import { useDemo } from "@/contexts/DemoContext";

interface Doctor {
  name: string;
  title: string;
  specialization: string;
  experience: string;
  education: string;
  bio: string;
}

const doctors: Doctor[] = [
  {
    name: "Dr. Ahmet Yılmaz",
    title: "Klinik Direktörü",
    specialization: "İmplantoloji & Estetik Diş Hekimliği",
    experience: "15+ Yıl Deneyim",
    education: "İstanbul Üniversitesi Diş Hekimliği Fakültesi",
    bio: "İmplant tedavisi ve estetik diş hekimliği alanında uzmanlaşmış, binlerce başarılı operasyona imza atmış deneyimli bir diş hekimi. Hasta memnuniyetini ön planda tutarak, en son teknolojileri kullanmaktadır.",
  },
  {
    name: "Dr. Elif Kaya",
    title: "Estetik Diş Hekimi",
    specialization: "Gülüş Tasarımı & Zirkonyum",
    experience: "12+ Yıl Deneyim",
    education: "Marmara Üniversitesi Diş Hekimliği Fakültesi",
    bio: "Gülüş tasarımı ve zirkonyum kaplama konusunda uzman. Hollywood smile uygulamalarında yüzlerce hastaya hayallerindeki gülüşü kazandırdı. Estetik ve fonksiyonelliği bir arada sunmaktadır.",
  },
  {
    name: "Dr. Mehmet Demir",
    title: "Ortodonti Uzmanı",
    specialization: "Ortodonti & Şeffaf Plak Tedavisi",
    experience: "10+ Yıl Deneyim",
    education: "Ankara Üniversitesi Ortodonti Uzmanlığı",
    bio: "Çocuk ve yetişkin ortodontisinde uzman. Şeffaf plak tedavisi ile görünmez diş düzeltme uygulamalarında öncü. Her yaştan hastaya uygun tedavi planları oluşturmaktadır.",
  },
  {
    name: "Dr. Zeynep Arslan",
    title: "Periodontoloji Uzmanı",
    specialization: "Diş Eti Tedavisi & İmplant Cerrahisi",
    experience: "8+ Yıl Deneyim",
    education: "Ege Üniversitesi Periodontoloji Uzmanlığı",
    bio: "Diş eti hastalıkları ve implant cerrahisi konusunda uzman. Lazer destekli tedavi yöntemleri ile ağrısız ve hızlı iyileşme sağlamaktadır.",
  },
];

export function DoctorProfile() {
  const { config } = useDemo();
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  const sectionSpacing =
    config.spacing === "generous"
      ? "py-20 md:py-32"
      : config.spacing === "balanced"
      ? "py-16 md:py-24"
      : "py-12 md:py-16";

  return (
    <section
      className={`w-full bg-background-alt ${sectionSpacing} rounded-[32px] sm:rounded-[40px] md:rounded-[48px]`}
      ref={containerRef}
    >
      {/* Header */}
      <div className="container-default mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="font-heading text-h2 text-text mb-4">
            Uzman Kadromuz
          </h2>
          <p className="text-body text-text-muted max-w-2xl mx-auto">
            Alanında uzman diş hekimlerimiz ile tanışın. Her biri kendi
            branşında yılların deneyimine sahip.
          </p>
        </motion.div>
      </div>

      {/* Timeline */}
      <div ref={ref} className="relative max-w-5xl mx-auto px-4 md:px-8">
        {doctors.map((doctor, index) => (
          <div
            key={index}
            className="flex justify-start pt-10 md:pt-24 md:gap-10"
          >
            {/* Left side - Sticky title */}
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
              {/* Timeline dot */}
              <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-background flex items-center justify-center border border-border">
                <div className="h-4 w-4 rounded-full bg-accent" />
              </div>
              {/* Desktop title */}
              <h3 className="hidden md:block text-xl md:pl-20 md:text-3xl font-heading text-text">
                {doctor.name}
              </h3>
            </div>

            {/* Right side - Content */}
            <div className="relative pl-20 pr-4 md:pl-4 w-full">
              {/* Mobile title */}
              <h3 className="md:hidden block text-2xl mb-4 text-left font-heading text-text">
                {doctor.name}
              </h3>

              {/* Doctor Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-background rounded-xl sm:rounded-2xl border border-border p-5 sm:p-6 md:p-8"
              >
                {/* Title & Specialization */}
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className="px-3 py-1 bg-accent-light text-text rounded-full font-body text-sm">
                    {doctor.title}
                  </span>
                  <span className="px-3 py-1 bg-background-alt text-text-muted rounded-full font-body text-sm border border-border">
                    {doctor.experience}
                  </span>
                </div>

                {/* Specialization */}
                <p className="font-body text-accent font-medium mb-3">
                  {doctor.specialization}
                </p>

                {/* Bio */}
                <p className="font-body text-text-muted mb-4 leading-relaxed">
                  {doctor.bio}
                </p>

                {/* Education */}
                <div className="flex items-center gap-2 text-text-muted">
                  <svg
                    className="w-5 h-5 text-accent"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M12 14l9-5-9-5-9 5 9 5z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                    />
                  </svg>
                  <span className="font-body text-sm">{doctor.education}</span>
                </div>

                {/* Avatar placeholder */}
                <div className="mt-6 flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-accent-light flex items-center justify-center border-2 border-accent">
                    <span className="font-heading text-accent text-xl">
                      {doctor.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </span>
                  </div>
                  <div>
                    <p className="font-body text-sm text-text-muted">
                      Randevu için
                    </p>
                    <p className="font-body text-accent font-medium">
                      +90 216 XXX XX XX
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        ))}

        {/* Animated timeline line */}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-gradient-to-b from-transparent via-border to-transparent [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-accent via-accent-hover to-transparent rounded-full"
          />
        </div>
      </div>
    </section>
  );
}

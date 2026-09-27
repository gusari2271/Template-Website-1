import React from "react";
import { siteConfig } from "../data/content";
import Icon from "./Icon";
import { CheckCircle2, ArrowRight } from "lucide-react";

export default function About() {
  const { about } = siteConfig;

  return (
    <section id="about" className="py-20 md:py-28 bg-white border-y border-slate-200/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs font-semibold uppercase tracking-wider mb-4">
            {about.badge}
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            {about.title}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            {about.subtitle}
          </p>
        </div>

        {/* Narrative Section with 2-Column Story */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-20">
          <div className="lg:col-span-7 space-y-4">
            {about.narrative.map((paragraph, idx) => (
              <p key={idx} className="text-slate-600 text-base leading-relaxed">
                {paragraph}
              </p>
            ))}

            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                "Desain UI/UX Human-Centered",
                "Arsitektur Komponen Rapi",
                "Optimasi SEO & Kecepatan",
                "Dokumentasi Kode Komprehensif",
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2.5 text-sm font-medium text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-indigo-600 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 bg-gradient-to-br from-indigo-50 to-slate-100/70 p-6 sm:p-8 rounded-2xl border border-indigo-100/80 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-200/40 rounded-full blur-2xl -mr-10 -mt-10" />
            <h4 className="text-lg font-bold text-slate-900 mb-2">
              Kenapa Memilih Template Ini?
            </h4>
            <p className="text-sm text-slate-600 leading-relaxed mb-6">
              Template ini bukan sekadar tampilan statis, melainkan struktur frontend yang siap Anda pakai untuk proyek klien, portfolio pribadi, ataupun demo startup dengan arsitektur kode standar industri.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-600 hover:text-indigo-700 transition-colors"
            >
              <span>Konsultasi kebutuhan Anda</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Grid 3 Kartu Nilai Utama (Core Values / Highlights) */}
        <div>
          <div className="text-center sm:text-left mb-8">
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
              Prinsip & Nilai Fondasi Kami
            </h3>
            <p className="text-sm text-slate-500 mt-1">
              Standar tinggi yang diterapkan pada setiap aspek perancangan web.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {about.coreValues.map((value) => (
              <div
                key={value.id}
                className="group p-6 sm:p-8 rounded-2xl bg-slate-50/70 hover:bg-white border border-slate-200/80 hover:border-indigo-300 hover:shadow-xl hover:shadow-indigo-500/5 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-indigo-100/80 text-indigo-600 flex items-center justify-center mb-6 group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300 shadow-sm">
                    <Icon name={value.iconName} className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-slate-900 tracking-tight group-hover:text-indigo-600 transition-colors">
                    {value.title}
                  </h4>
                  <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

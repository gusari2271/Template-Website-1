import React, { useState } from "react";
import { siteConfig } from "../data/content";
import { ExternalLink, ArrowUpRight, Check, Eye } from "lucide-react";

export default function Projects() {
  const { projects } = siteConfig;
  const [activeProject, setActiveProject] = useState(null);

  return (
    <section id="projects" className="py-20 md:py-28 bg-slate-50/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs font-semibold uppercase tracking-wider mb-4">
              {projects.badge}
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              {projects.title}
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
              {projects.subtitle}
            </p>
          </div>

          <div className="text-sm text-slate-500 font-medium">
            Menampilkan <span className="text-indigo-600 font-bold">{projects.items.length}</span> Proyek Pilihan
          </div>
        </div>

        {/* 3 Modular Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.items.map((project) => (
            <div
              key={project.id}
              className="group bg-white rounded-2xl border border-slate-200/90 overflow-hidden shadow-sm hover:shadow-xl hover:shadow-slate-200/50 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Image Placeholder with Aspect Ratio & Overlay */}
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                  {/* Category Pill Tag */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white/90 backdrop-blur-md text-slate-800 shadow-sm">
                      {project.category}
                    </span>
                  </div>

                  {/* Quick Action Overlay Button */}
                  <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button
                      onClick={() => setActiveProject(project)}
                      className="px-3 py-1.5 rounded-lg bg-indigo-600 text-white text-xs font-semibold inline-flex items-center gap-1.5 shadow-md hover:bg-indigo-700 transition-colors"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>Ringkasan</span>
                    </button>
                  </div>
                </div>

                {/* Content Details */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="mt-2.5 text-sm text-slate-600 leading-relaxed line-clamp-3">
                    {project.description}
                  </p>

                  {/* Skill / Technology Tags */}
                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 text-xs font-medium rounded-md bg-slate-100 text-slate-700 border border-slate-200/60"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Links Footer */}
              <div className="px-6 py-4 border-t border-slate-100 bg-slate-50/50 flex items-center justify-between">
                <button
                  onClick={() => setActiveProject(project)}
                  className="text-xs font-semibold text-slate-700 hover:text-indigo-600 transition-colors inline-flex items-center gap-1"
                >
                  <span>Detail Spesifikasi</span>
                </button>

                <div className="flex items-center gap-2">
                  <a
                    href={project.demoUrl}
                    className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-700 transition-colors shadow-sm"
                    aria-label={`Demo live untuk ${project.title}`}
                  >
                    <span>Live Demo</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal Detail Proyek (Modular Dialog) */}
        {activeProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
            <div className="bg-white rounded-2xl max-w-xl w-full p-6 sm:p-8 shadow-2xl border border-slate-100 relative max-h-[90vh] overflow-y-auto">
              <div className="flex items-start justify-between pb-4 border-b border-slate-100">
                <div>
                  <span className="text-xs font-semibold text-indigo-600 uppercase tracking-wider">
                    {activeProject.category}
                  </span>
                  <h3 className="text-2xl font-bold text-slate-900 mt-1">
                    {activeProject.title}
                  </h3>
                </div>
                <button
                  onClick={() => setActiveProject(null)}
                  className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 text-xl font-bold"
                  aria-label="Tutup Dialog"
                >
                  ✕
                </button>
              </div>

              <div className="mt-4 rounded-xl overflow-hidden aspect-video bg-slate-100">
                <img
                  src={activeProject.image}
                  alt={activeProject.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <p className="mt-4 text-sm text-slate-600 leading-relaxed">
                {activeProject.description}
              </p>

              <div className="mt-4">
                <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2">
                  Stack Teknologi
                </h4>
                <div className="flex flex-wrap gap-2">
                  {activeProject.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 text-xs font-medium rounded-md bg-indigo-50 text-indigo-700 border border-indigo-100"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-end gap-3">
                <button
                  onClick={() => setActiveProject(null)}
                  className="px-4 py-2 text-sm font-semibold text-slate-600 hover:text-slate-900 rounded-lg hover:bg-slate-100"
                >
                  Tutup
                </button>
                <a
                  href={activeProject.demoUrl}
                  className="px-5 py-2 text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg shadow-sm inline-flex items-center gap-1.5"
                >
                  <span>Kunjungi Demo</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

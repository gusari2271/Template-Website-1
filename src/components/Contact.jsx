import React, { useState } from "react";
import { siteConfig } from "../data/content";
import Icon from "./Icon";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2 } from "lucide-react";

export default function Contact() {
  const { contact } = siteConfig;
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("idle"); // idle | loading | success

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setStatus("loading");
    // Simulasi pengiriman data
    setTimeout(() => {
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setStatus("idle"), 6000);
    }, 800);
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-white border-t border-slate-200/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs font-semibold uppercase tracking-wider mb-4">
            {contact.badge}
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            {contact.title}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            {contact.subtitle}
          </p>
        </div>

        {/* 2-Column Contact Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Contact Info & Socials */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-6">
              {/* WhatsApp / Phone */}
              <a
                href={contact.info.phone.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 hover:bg-indigo-50/60 border border-slate-200/70 hover:border-indigo-200 transition-all duration-200 group"
              >
                <div className="w-11 h-11 rounded-lg bg-indigo-100 text-indigo-600 flex items-center justify-center shrink-0 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                    WhatsApp / Telepon
                  </div>
                  <div className="text-base font-bold text-slate-900 mt-0.5 group-hover:text-indigo-600 transition-colors">
                    {contact.info.phone.display}
                  </div>
                  <span className="text-xs text-emerald-600 font-medium inline-block mt-0.5">
                    ● Fast response via WhatsApp
                  </span>
                </div>
              </a>

              {/* Email */}
              <a
                href={contact.info.email.href}
                className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 hover:bg-indigo-50/60 border border-slate-200/70 hover:border-indigo-200 transition-all duration-200 group"
              >
                <div className="w-11 h-11 rounded-lg bg-indigo-100 text-indigo-600 flex items-center justify-center shrink-0 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                    Email Resmi
                  </div>
                  <div className="text-base font-bold text-slate-900 mt-0.5 group-hover:text-indigo-600 transition-colors">
                    {contact.info.email.label}
                  </div>
                  <span className="text-xs text-slate-500 font-medium inline-block mt-0.5">
                    Balasan dalam waktu 1x24 jam
                  </span>
                </div>
              </a>

              {/* Location */}
              <div className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 border border-slate-200/70">
                <div className="w-11 h-11 rounded-lg bg-indigo-100 text-indigo-600 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                    Alamat Kantor / Studio
                  </div>
                  <div className="text-sm font-semibold text-slate-800 mt-0.5 leading-relaxed">
                    {contact.info.location.address}
                  </div>
                </div>
              </div>

              {/* Working Hours */}
              <div className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 border border-slate-200/70">
                <div className="w-11 h-11 rounded-lg bg-indigo-100 text-indigo-600 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                    Jam Operasional
                  </div>
                  <div className="text-sm font-semibold text-slate-800 mt-0.5">
                    {contact.info.workingHours}
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media Links */}
            <div>
              <div className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-3">
                Ikuti Kami di Media Sosial
              </div>
              <div className="flex items-center gap-3">
                {contact.socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-xl bg-slate-100 text-slate-700 hover:text-white hover:bg-indigo-600 border border-slate-200/80 flex items-center justify-center transition-all duration-200 hover:-translate-y-0.5 shadow-sm"
                    aria-label={social.name}
                  >
                    <Icon name={social.iconName} className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7 bg-slate-50/80 rounded-2xl border border-slate-200/90 p-6 sm:p-10 shadow-sm relative">
            <div className="mb-6">
              <h3 className="text-xl font-bold text-slate-900">
                {contact.form.title}
              </h3>
              <p className="text-sm text-slate-600 mt-1">
                {contact.form.description}
              </p>
            </div>

            {status === "success" && (
              <div className="mb-6 p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 flex items-start gap-3 animate-in fade-in duration-300">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div className="text-sm">
                  <strong className="font-semibold">Sukses!</strong> {contact.form.successMessage}
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-1.5">
                  Nama Lengkap <span className="text-indigo-600">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Contoh: Budi Pratama"
                  className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300/80 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-sm shadow-sm transition-all"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-1.5">
                  Alamat Email <span className="text-indigo-600">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="nama@perusahaan.com"
                  className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300/80 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-sm shadow-sm transition-all"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-1.5">
                  Detail Kebutuhan / Pesan <span className="text-indigo-600">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Ceritakan rencana proyek Anda, perkiraan batas waktu, atau pertanyaan lain..."
                  className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300/80 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-sm shadow-sm transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-700 active:scale-95 disabled:opacity-70 shadow-md shadow-indigo-500/25 transition-all duration-200 cursor-pointer"
              >
                {status === "loading" ? (
                  <span>Mengirimkan...</span>
                ) : (
                  <>
                    <span>{contact.form.submitButtonText}</span>
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

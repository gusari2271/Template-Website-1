/**
 * File data terpusat untuk konfigurasi konten website.
 * Semua teks, navigasi, informasi kontak, dan daftar proyek dapat diubah di sini
 * tanpa perlu mengubah kode komponen UI.
 */

export const siteConfig = {
  brand: {
    name: "NexusStudio",
    tagline: "Web Design & Development Agency",
    shortBio: "Membangun produk digital modern, cepat, dan berorientasi hasil untuk startup dan bisnis berkembang.",
    availableForHire: true,
    hireStatusText: "Tersedia untuk proyek baru",
    yearEstablished: "2024",
  },

  navigation: [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ],

  ctaButton: {
    label: "Let's Talk",
    href: "#contact",
  },

  hero: {
    badge: "✨ Solusi Digital Profesional & Terpercaya",
    headline: {
      prefix: "Wujudkan Ide Digital Anda Menjadi",
      highlight: "Website Modern & Berkelas",
      suffix: "dengan Performa Tinggi.",
    },
    subheadline:
      "Kami membantu bisnis dan kreator merancang landing page serta aplikasi web interaktif yang elegan, responsif, dan siap mengonversi pengunjung menjadi pelanggan setia.",
    ctaPrimary: {
      label: "Mulai Diskusi Proyek",
      href: "#contact",
    },
    ctaSecondary: {
      label: "Lihat Portofolio",
      href: "#projects",
    },
    metrics: [
      { value: "45+", label: "Proyek Terselesaikan" },
      { value: "99%", label: "Tingkat Kepuasan Klien" },
      { value: "< 24j", label: "Respons Cepat" },
    ],
  },

  about: {
    badge: "Tentang Kami",
    title: "Membangun Pengalaman Digital yang Berdampak",
    subtitle:
      "Kami adalah tim desainer dan pengembang web yang berfokus pada kualitas visual premium, performa kode bersih, dan kepuasan pengguna akhir.",
    narrative: [
      "Setiap proyek yang kami kerjakan selalu mengutamakan harmoni antara estetika visual modern dan arsitektur kode yang terukur. Kami percaya bahwa website bukan sekadar brosur online, melainkan aset digital yang mencerminkan kredibilitas brand Anda.",
      "Dengan standar industri terkini, kami memastikan setiap baris kode mudah dipelihara, cepat diakses dari perangkat apapun, dan siap diintegrasikan dengan teknologi modern.",
    ],
    coreValues: [
      {
        id: "value-1",
        iconName: "Zap",
        title: "Performa Cepat & Ringan",
        description:
          "Dioptimalkan untuk kecepatan muat kilat dengan skor performa tinggi demi pengalaman pengguna yang mulus.",
      },
      {
        id: "value-2",
        iconName: "Palette",
        title: "Desain Modern & Responsif",
        description:
          "Tata letak estetis dan adaptif yang terlihat memukau di layar smartphone, tablet, hingga monitor ultrawide.",
      },
      {
        id: "value-3",
        iconName: "ShieldCheck",
        title: "Kode Bersih & Modular",
        description:
          "Struktur arsitektur komponen React yang rapi, mudah diperluas, dan siap untuk penambahan fitur skala besar.",
      },
    ],
  },

  projects: {
    badge: "Karya Terpilih",
    title: "Portofolio & Showcase Demo",
    subtitle:
      "Eksplorasi beberapa contoh proyek digital yang telah kami rancang dengan sentuhan desain elegan dan fungsionalitas optimal.",
    items: [
      {
        id: "proj-1",
        title: "SaaS Analytics Dashboard",
        category: "Web Application",
        description:
          "Platform analitik bisnis real-time dengan visualisasi metrik finansial, konversi traffic, dan manajemen tim terpusat.",
        tags: ["React", "Tailwind CSS", "ChartJS", "REST API"],
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
        demoUrl: "#",
        repoUrl: "#",
      },
      {
        id: "proj-2",
        title: "E-Commerce Luxury Goods",
        category: "E-Commerce / Retail",
        description:
          "Toko online bertema minimalis modern dengan sistem checkout interaktif, katalog responsif, dan filter produk dinamis.",
        tags: ["React", "Tailwind CSS", "Zustand", "Stripe API"],
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
        demoUrl: "#",
        repoUrl: "#",
      },
      {
        id: "proj-3",
        title: "Fintech Mobile-First Portal",
        category: "Landing Page & UI Kit",
        description:
          "Landing page konversi tinggi untuk startup finansial dilengkapi kalkulator pinjaman interaktif dan simulasi investasi.",
        tags: ["React", "Tailwind CSS", "Framer Motion", "Vite"],
        image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=800&q=80",
        demoUrl: "#",
        repoUrl: "#",
      },
    ],
  },

  contact: {
    badge: "Hubungi Kami",
    title: "Mari Wujudkan Kolaborasi Hebat",
    subtitle:
      "Punya ide proyek menarik atau ingin konsultasi kebutuhan website? Hubungi kami langsung atau tinggalkan pesan di bawah.",
    info: {
      phone: {
        label: "+62 812-3456-7890",
        href: "https://wa.me/6281234567890",
        display: "+62 812 3456 7890",
      },
      email: {
        label: "halo@nexusstudio.dev",
        href: "mailto:halo@nexusstudio.dev",
      },
      location: {
        address: "Sudirman Central Business District (SCBD), Jakarta Selatan, Indonesia",
      },
      workingHours: "Senin – Jumat: 09:00 – 18:00 WIB",
    },
    socialLinks: [
      { name: "GitHub", href: "https://github.com", iconName: "Github" },
      { name: "LinkedIn", href: "https://linkedin.com", iconName: "Linkedin" },
      { name: "Instagram", href: "https://instagram.com", iconName: "Instagram" },
      { name: "Twitter", href: "https://twitter.com", iconName: "Twitter" },
    ],
    form: {
      title: "Kirim Pesan Langsung",
      description: "Isi formulir singkat ini dan kami akan membalas dalam waktu maksimal 24 jam kerja.",
      submitButtonText: "Kirimkan Pesan",
      successMessage: "Terima kasih! Pesan Anda telah terkirim. Kami akan segera menghubungi Anda kembali.",
    },
  },

  footer: {
    copyright: "© 2024 - 2026 NexusStudio. All rights reserved.",
    tagline: "Crafted with precision, passion, and modern web standards.",
    links: [
      { label: "Home", href: "#home" },
      { label: "About", href: "#about" },
      { label: "Projects", href: "#projects" },
      { label: "Contact", href: "#contact" },
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Service", href: "#" },
    ],
  },
};

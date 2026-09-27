# NexusStudio - Modern & Modular Portfolio/Agency Template (TEMPLATE 1)

Template landing page portofolio/demo yang bersih, modern, dan modular dibangun dengan **React 19**, **Vite**, dan **Tailwind CSS**. Dirancang khusus sebagai pondasi dasar siap pakai (*production-ready*) dengan pemisahan data konten yang sangat mudah dikustomisasi.

---

## 🚀 Cara Menjalankan Proyek

### 1. Masuk ke direktori dan pasang dependensi
```bash
npm install
```

### 2. Jalankan server pengembangan lokal (Dev Server)
```bash
npm run dev
```
Buka browser di URL: `http://localhost:5173`

### 3. Buat bundle produksi (Build)
```bash
npm run build
```

---

## 📁 Struktur Proyek & Komponen

```text
├── index.html                  # HTML entry point dengan Google Fonts (Plus Jakarta Sans)
├── vite.config.js              # Konfigurasi Vite & Tailwind CSS Plugin
├── package.json
└── src/
    ├── main.jsx                # React root mount
    ├── index.css               # Import Tailwind CSS dan konfigurasi styling global
    ├── App.jsx                 # Susunan perakitan komponen landing page
    ├── components/
    │   ├── Navbar.jsx          # Header navigasi sticky, responsif dengan mobile hamburger menu
    │   ├── Hero.jsx            # Hero banner, dual CTA buttons, key metrics, dan mockup frame
    │   ├── About.jsx           # Profil/narasi singkat & grid 3 core values card
    │   ├── Projects.jsx        # Grid 3 kartu proyek demo modular & modal dialog detail
    │   ├── Contact.jsx         # 2 Kolom: Info kontak langsung (WhatsApp, Email, Lokasi) & form pesan
    │   ├── Footer.jsx          # Copyright, navigasi sekunder, dan ikon media sosial
    │   └── Icon.jsx            # Pembantu render ikon teroptimasi (Lucide + SVG Brand Icons)
    └── data/
        └── content.js          # File data terpusat (Semua teks, kontak, & proyek diubah di sini!)
```

---

## 🛠️ Cara Kustomisasi Konten (`src/data/content.js`)

Semua data teks, judul, deskripsi, tautan sosial media, dan proyek sengaja dipisahkan ke dalam satu file objek JavaScript:
👉 `src/data/content.js`

Contoh mengubah informasi brand & kontak:
```javascript
export const siteConfig = {
  brand: {
    name: "NamaBrandAnda",
    tagline: "Desain & Pengembangan Web",
    // ...
  },
  contact: {
    info: {
      phone: {
        label: "+62 812-xxxx-xxxx",
        href: "https://wa.me/62812xxxxxxxx",
        display: "+62 812 xxxx xxxx"
      },
      email: {
        label: "kontak@domainanda.com",
        href: "mailto:kontak@domainanda.com"
      }
    }
  }
};
```

---

## 🎨 Palet Warna & Styling
- **Background**: Slate-50 / Putih bersih dengan kontras Slate-900.
- **Aksen Primer**: Indigo (`indigo-600` / `indigo-500`) dengan sentuhan Violet dan Sky untuk gradasi modern.
- **Ikon**: Menggunakan pustaka resmi `lucide-react`.
- **Responsif**: Fully responsive di perangkat Mobile, Tablet, dan Desktop.

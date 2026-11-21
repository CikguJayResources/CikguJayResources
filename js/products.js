/**
 * ==========================================================================
 * CIKGU JAY RESOURCES — CENTRALIZED PRODUCT, CAROUSEL & BILINGUAL CATALOG
 * ==========================================================================
 * OFFICIAL PRICING & DISCOUNTS (10 TERAWAL SAHAJA):
 * 1. STiM: RM 500 (Diskaun 50% daripada RM 1,000 · 10 Terawal Sahaja)
 * 2. e-GGs (e-Guru Ganti Sekolah): RM 100 (Diskaun 57% daripada RM 230 · 10 Terawal Sahaja)
 * 3. e-OPR: RM 50 (Diskaun 67% daripada RM 150 · 10 Terawal Sahaja)
 *
 * COPYRIGHT PROTECTION:
 * Every product slide in assets/products/* carries the embedded
 * "CikguJayResources" soft-grey 50% opacity copyright watermark.
 * ==========================================================================
 */

(function () {
  "use strict";

  const CATEGORY_LABELS = {
    "School Management Software": {
      ms: "Perisian Pengurusan Sekolah",
      en: "School Management Software"
    },
    "School Management": {
      ms: "Pengurusan Sekolah",
      en: "School Management"
    },
    "Educational Administration": {
      ms: "Pentadbiran Pendidikan",
      en: "Educational Administration"
    },
    "Upcoming Releases": {
      ms: "Akan Datang",
      en: "Upcoming Releases"
    }
  };

  const UI_STRINGS = {
    ms: {
      allCategories: "Semua",
      available: "Tersedia",
      comingSoon: "Akan Datang",
      unavailable: "Tidak Tersedia",
      priceTba: "Akan Diumumkan",
      priceFree: "Percuma",
      priceLabel: "Harga Promosi",
      statusLabel: "Status",
      targetAudienceLabel: "Sesuai Untuk",
      keyBenefitsTitle: "Kelebihan Utama",
      viewDetails: "Lihat Butiran",
      purchaseNow: "Beli Sekarang",
      notifyMe: "Maklumkan Saya",
      prevSlide: "Paparan sebelumnya",
      nextSlide: "Paparan seterusnya",
      goToSlide: "Pergi ke paparan",
      zoomSlide: "Besarkan paparan skrin",
      closeZoom: "Tutup pratonton",
      screensUnit: "paparan",
      showingCount: function (total, avail) {
        if (total === 0) return "Tiada produk ditemui";
        return `${total} produk dipaparkan (${avail} tersedia)`;
      },
      emptyTitle: "Tiada produk sepadan",
      emptyDesc: "Kosongkan carian atau pilih semua kategori.",
      resetFilters: "Papar Semua",
      notFoundTitle: "Produk Tidak Ditemui",
      notFoundDesc: "Produk ini tidak ditemui atau sedang dibangunkan.",
      backToCatalog: "Kembali ke Katalog",
      overview: "Ringkasan Produk",
      capabilities: "Kelebihan & Fungsi Utama",
      deliverables: "Pakej Pembelian",
      checkoutActiveCta: "Beli Sekarang",
      inquireLicensingCta: "Tempah / Pertanyaan Lesen",
      paymentInfoTitle: "Pembayaran & Penghantaran Digital",
      paymentActiveNote: "Transaksi selamat melalui gerbang pembayaran rasmi.",
      paymentPendingNote: "Integrasi pembayaran automatik (Billplz / BCL, ToyyibPay, CHIP) sedang diaktifkan. Hubungi kami untuk pembelian terus.",
      deliveryPrefix: "Penghantaran:",
      metaIdealFor: "Pengguna Sasaran",
      metaCompatibility: "Keserasian",
      metaGateways: "Gerbang Bayaran",
      relatedIndex: "Perisian Lain",
      relatedTitle: "Terokai Produk Lain",
      flagshipBadge: "Perisian Utama"
    },
    en: {
      allCategories: "All",
      available: "Available",
      comingSoon: "Coming Soon",
      unavailable: "Unavailable",
      priceTba: "To Be Announced",
      priceFree: "Free",
      priceLabel: "Promo Price",
      statusLabel: "Status",
      targetAudienceLabel: "Ideal For",
      keyBenefitsTitle: "Key Advantages",
      viewDetails: "View Details",
      purchaseNow: "Buy Now",
      notifyMe: "Notify Me",
      prevSlide: "Previous screen",
      nextSlide: "Next screen",
      goToSlide: "Go to screen",
      zoomSlide: "Enlarge screenshot",
      closeZoom: "Close preview",
      screensUnit: "screens",
      showingCount: function (total, avail) {
        if (total === 0) return "0 products found";
        return `Showing ${total} product${total === 1 ? "" : "s"} (${avail} available)`;
      },
      emptyTitle: "No matching products",
      emptyDesc: "Clear your search or select all categories.",
      resetFilters: "Show All",
      notFoundTitle: "Product Not Found",
      notFoundDesc: "The requested product is unavailable or in development.",
      backToCatalog: "Back to Catalog",
      overview: "Product Summary",
      capabilities: "Key Advantages & Features",
      deliverables: "What You Receive",
      checkoutActiveCta: "Buy Now",
      inquireLicensingCta: "Order / Licensing Inquiry",
      paymentInfoTitle: "Payment & Digital Delivery",
      paymentActiveNote: "Processed securely via verified payment gateway.",
      paymentPendingNote: "Automated gateway checkout (Billplz / BCL, ToyyibPay, CHIP) is being activated. Contact us for direct licensing.",
      deliveryPrefix: "Delivery:",
      metaIdealFor: "Ideal For",
      metaCompatibility: "Compatibility",
      metaGateways: "Gateways",
      relatedIndex: "More Software",
      relatedTitle: "Explore Other Products",
      flagshipBadge: "Flagship Suite"
    }
  };

  const products = [
    {
      id: "stim",
      name: "STiM",
      category: "School Management Software",
      price: 500,
      originalPrice: 1000,
      discountPercent: 50,
      currency: "RM",
      discountLabel: {
        ms: "Diskaun 50% · 10 Terawal Sahaja",
        en: "50% OFF · First 10 Only"
      },
      heroBadge: {
        ms: "-50% · 10 Terawal Sahaja",
        en: "-50% · First 10 Only"
      },
      screenshot: "assets/products/stim/slide-01.jpg",
      image: "assets/products/stim/slide-01.jpg",
      images: [
        { src: "assets/products/stim/slide-01.jpg", caption: { ms: "Matriks Jadual Waktu Kelas", en: "Class Timetable Matrix" } },
        { src: "assets/products/stim/slide-02.jpg", caption: { ms: "Papan Pemuka & Audit Konflik", en: "Admin Dashboard & Clash Audit" } },
        { src: "assets/products/stim/slide-03.jpg", caption: { ms: "Master Grid Keseluruhan (Drag & Drop)", en: "Drag & Drop Master Grid" } },
        { src: "assets/products/stim/slide-04.jpg", caption: { ms: "Kawalan Beban Mengajar Guru", en: "Teacher Workload Control" } },
        { src: "assets/products/stim/slide-05.jpg", caption: { ms: "Pengurusan Profil & Had Waktu Guru", en: "Teacher Profile & Period Limits" } },
        { src: "assets/products/stim/slide-06.jpg", caption: { ms: "Pengurusan Kelas & Kapasiti", en: "Class & Student Capacity" } },
        { src: "assets/products/stim/slide-07.jpg", caption: { ms: "Tetapan Subjek & Waktu Serentak", en: "Subjects & Concurrent Periods" } },
        { src: "assets/products/stim/slide-08.jpg", caption: { ms: "Konfigurasi Slot Masa Sekolah", en: "School Time-Slot Setup" } },
        { src: "assets/products/stim/slide-09.jpg", caption: { ms: "Pusat Cetakan Rasmi A4 Melintang", en: "Official A4 Print Center" } }
      ],
      status: "available",
      featured: true,
      isFlagship: true,
      themeVariant: "navy",
      checkoutUrl: "https://cikgujayresources.bcl.my/form/stim-school-time-manager-bycikgujayresources",
      supportedGateways: "Billplz / BCL · ToyyibPay · CHIP",
      i18n: {
        ms: {
          fullName: "School Timetable Manager",
          heroDesc: "Jadual induk, kelas & guru bebas pertindihan",
          description:
            "Bina jadual waktu induk, kelas dan guru bebas pertindihan dengan pengesanan konflik masa nyata.",
          longDescription:
            "STiM menyelaraskan agihan 44–46 waktu seminggu, had beban mengajar guru dan subjek serentak (PI/PM, BA/BKD) dalam satu pangkalan data pintar. Fungsi Master Grid Drag & Drop serta ConflictChecker memastikan jadual rasmi sekolah siap tepat tanpa pertindihan.",
          pricingNote: "Lesen Penuh Sekolah · Harga Asal RM 1,000 (Diskaun 50% · 10 Terawal Sahaja)",
          imageAlt: "Paparan STiM School Timetable Manager",
          deliveryMethod: "Pautan akses sistem dan panduan lengkap dihantar terus ke e-mel.",
          compatibility: "Pelayar Web Komputer Meja & Riba",
          tags: ["Master Grid Drag & Drop", "ConflictChecker Automatik", "Subjek Serentak", "Cetakan A4 Rasmi"],
          highlights: [
            "Audit Konflik Automatik: Kesan pertindihan waktu guru dan bilik khas secara masa nyata.",
            "Master Grid Drag & Drop: Susun 44–46 waktu mingguan serta subjek serentak dengan pantas.",
            "Kawalan Beban Mengajar: Pantau had waktu harian dan mingguan guru secara adil.",
            "Pusat Cetakan A4 Lengkap: Cetak pek jadual induk, kelas dan individu guru dengan satu klik."
          ],
          deliverables: [
            "Akses penuh perisian STiM untuk kegunaan rasmi sekolah",
            "Pangkalan data guru, kelas, subjek dan kekangan jadual",
            "Modul cetakan rasmi A4 melintang (Master Grid, Kelas & Guru)",
            "Panduan pantas & sokongan teknikal Cikgu Jay Resources"
          ],
          idealFor: "PK Pentadbiran & Penyelaras Jadual Waktu"
        },
        en: {
          fullName: "School Timetable Manager",
          heroDesc: "Clash-free master, class & teacher schedules",
          description:
            "Build conflict-free master, class, and teacher timetables with real-time clash detection.",
          longDescription:
            "STiM coordinates 44–46 weekly periods, teacher workload limits, and concurrent subjects (PI/PM, electives) in one smart database. Drag & Drop Master Grid and live ConflictChecker deliver accurate, print-ready schedules fast.",
          pricingNote: "Full School License · Normal Price RM 1,000 (50% OFF · First 10 Only)",
          imageAlt: "STiM School Timetable Manager interface",
          deliveryMethod: "System access link and setup guide delivered directly via email.",
          compatibility: "Desktop & Laptop Web Browsers",
          tags: ["Drag & Drop Master Grid", "Live ConflictChecker", "Concurrent Subjects", "Official A4 Print"],
          highlights: [
            "Automated Clash Audit: Detects teacher and room overlaps instantly in real time.",
            "Drag & Drop Master Grid: Organize 44–46 weekly periods and concurrent subjects effortlessly.",
            "Workload Cap Control: Balance daily and weekly teaching quotas fairly across staff.",
            "One-Click A4 Print Pack: Export master grids, class schedules, and teacher timetables."
          ],
          deliverables: [
            "Full school-wide STiM software license",
            "Integrated teacher, class, subject, and constraint modules",
            "Official landscape A4 print pack generator",
            "Quick-start manual & direct technical support"
          ],
          idealFor: "Senior Assistants (Admin) & Timetable Coordinators"
        }
      }
    },
    {
      id: "e-guru-ganti",
      name: "e-GGs (e-Guru Ganti Sekolah)",
      category: "School Management",
      price: 100,
      originalPrice: 230,
      discountPercent: 57,
      currency: "RM",
      discountLabel: {
        ms: "Diskaun 57% · 10 Terawal Sahaja",
        en: "57% OFF · First 10 Only"
      },
      heroBadge: {
        ms: "-57% · 10 Terawal Sahaja",
        en: "-57% · First 10 Only"
      },
      screenshot: "assets/products/e-guru-ganti/slide-01.jpg",
      image: "assets/products/e-guru-ganti/slide-01.jpg",
      images: [
        { src: "assets/products/e-guru-ganti/slide-01.jpg", caption: { ms: "Penjanaan Jadual Guru Ganti", en: "Daily Relief Generation" } },
        { src: "assets/products/e-guru-ganti/slide-02.jpg", caption: { ms: "Status Guru Mengikut Kelas", en: "Class-by-Class Teacher Status" } },
        { src: "assets/products/e-guru-ganti/slide-03.jpg", caption: { ms: "Jadual Persendirian Guru Bertugas", en: "Individual Duty Schedule" } },
        { src: "assets/products/e-guru-ganti/slide-04.jpg", caption: { ms: "Jadual Keseluruhan & Kalendar", en: "Whole-School Grid & Calendar" } },
        { src: "assets/products/e-guru-ganti/slide-05.jpg", caption: { ms: "Statistik & Kawalan Beban Mingguan", en: "Weekly Relief Load Analytics" } },
        { src: "assets/products/e-guru-ganti/slide-06.jpg", caption: { ms: "Roster Kehadiran Guru Harian", en: "Daily Teacher Attendance Roster" } },
        { src: "assets/products/e-guru-ganti/slide-07.jpg", caption: { ms: "Cetakan Slip MMI Mini A4", en: "Mini A4 MMI Relief Slips" } },
        { src: "assets/products/e-guru-ganti/slide-08.jpg", caption: { ms: "Dokumen PDF Jadual Guru Ganti", en: "Official Relief Schedule PDF" } },
        { src: "assets/products/e-guru-ganti/slide-09.jpg", caption: { ms: "Penyata Harian Kehadiran PDF", en: "Daily Attendance Statement PDF" } },
        { src: "assets/products/e-guru-ganti/slide-10.jpg", caption: { ms: "Laporan Bulanan Guru Ganti PDF", en: "Monthly Relief Audit PDF" } }
      ],
      status: "available",
      featured: true,
      isFlagship: false,
      themeVariant: "slate",
      checkoutUrl: "https://cikgujayresources.bcl.my/form/e-guru-ganti-by-cikgujayresources",
      supportedGateways: "Billplz / BCL · ToyyibPay · CHIP",
      i18n: {
        ms: {
          fullName: "Sistem Pengurusan Jadual Guru Ganti Sekolah",
          heroDesc: "Agihan relief harian, statistik & slip MMI",
          description:
            "Jana jadual guru ganti harian secara automatik, kawal beban mingguan dan cetak slip MMI dalam beberapa minit.",
          longDescription:
            "e-GGs (e-Guru Ganti Sekolah) memadankan guru tidak hadir dengan guru berkelapangan secara automatik mengikut jadual induk. Dilengkapi mod ganti kecemasan, pemantauan had beban mingguan, penyata kehadiran harian serta cetakan 3–4 slip MMI sehelai.",
          pricingNote: "Lesen Pengurusan Sekolah · Harga Asal RM 230 (Diskaun 57% · 10 Terawal Sahaja)",
          imageAlt: "Paparan sistem e-GGs (e-Guru Ganti Sekolah)",
          deliveryMethod: "Pautan akses sistem dan panduan pentadbir dihantar melalui e-mel.",
          compatibility: "Pelayar Web (Komputer, Riba & Tablet)",
          tags: ["Padanan Automatik", "Ganti Kecemasan", "Slip MMI A4", "Laporan PDF Bulanan"],
          highlights: [
            "Padanan Waktu Luang: Agih guru ganti automatik tanpa pertindihan waktu mengajar.",
            "Kawalan Beban Adil: Pantau had waktu ganti mingguan supaya agihan kekal seimbang.",
            "Mod Ganti Kecemasan: Rekod perubahan kehadiran guru saat akhir dengan segera.",
            "Cetakan Slip MMI & PDF: Jana slip mini A4, penyata kehadiran dan laporan bulanan."
          ],
          deliverables: [
            "Akses penuh sistem e-GGs (e-Guru Ganti Sekolah) peringkat sekolah",
            "Modul kehadiran guru, jadual induk & statistik bulanan",
            "Penjana PDF jadual harian, penyata kehadiran & slip MMI",
            "Panduan mula pantas & sokongan teknikal rasmi"
          ],
          idealFor: "PK Pentadbiran, Penyelaras Relief & Guru Bertugas"
        },
        en: {
          fullName: "School Relief Teacher Management System",
          heroDesc: "Automated relief matching, stats & MMI slips",
          description:
            "Automate daily relief teacher assignments, balance weekly workloads, and print MMI slips in minutes.",
          longDescription:
            "e-GGs (e-Guru Ganti Sekolah) matches absent teachers with available staff automatically from your master schedule. Includes emergency relief mode, weekly workload caps, daily attendance rosters, and 3–4 per-sheet A4 MMI relief slips.",
          pricingNote: "School Management License · Normal Price RM 230 (57% OFF · First 10 Only)",
          imageAlt: "e-GGs (e-Guru Ganti Sekolah) relief management system",
          deliveryMethod: "System access link and admin guide delivered directly via email.",
          compatibility: "Modern Web Browsers (Desktop, Laptop & Tablet)",
          tags: ["Auto Matching", "Emergency Mode", "MMI A4 Slips", "Monthly PDF Reports"],
          highlights: [
            "Smart Free-Period Matching: Assigns available teachers instantly with zero clashes.",
            "Fair Workload Tracking: Monitors weekly relief caps so duties stay balanced.",
            "Emergency Relief Action: Handle last-minute teacher absences in seconds.",
            "MMI Slips & PDF Reports: Print mini A4 slips, daily rosters, and monthly audits."
          ],
          deliverables: [
            "Full school-level access to e-GGs (e-Guru Ganti Sekolah)",
            "Teacher attendance, master schedule & analytics modules",
            "PDF generators for daily schedules, rosters & MMI slips",
            "Admin quick-start guide & technical support"
          ],
          idealFor: "Senior Assistants (Admin), Relief Coordinators & Duty Teachers"
        }
      }
    },
    {
      id: "e-opr",
      name: "e-OPR",
      category: "Educational Administration",
      price: 50,
      originalPrice: 150,
      discountPercent: 67,
      currency: "RM",
      discountLabel: {
        ms: "Diskaun 67% · 10 Terawal Sahaja",
        en: "67% OFF · First 10 Only"
      },
      heroBadge: {
        ms: "-67% · 10 Terawal Sahaja",
        en: "-67% · First 10 Only"
      },
      screenshot: "assets/products/e-opr/slide-01.jpg",
      image: "assets/products/e-opr/slide-01.jpg",
      images: [
        { src: "assets/products/e-opr/slide-01.jpg", caption: { ms: "Borang Input AI & Pratonton A4", en: "AI Input Form & Live A4 Preview" } },
        { src: "assets/products/e-opr/slide-02.jpg", caption: { ms: "Muat Naik 6 Gambar & Ulasan AI", en: "6-Photo Upload & AI Evaluation" } },
        { src: "assets/products/e-opr/slide-03.jpg", caption: { ms: "Arkib Laporan Mengikut Unit", en: "Unit-Based OPR Archive" } },
        { src: "assets/products/e-opr/slide-04.jpg", caption: { ms: "Eksport & Cetakan PDF 1 Halaman", en: "1-Page Official PDF Export" } }
      ],
      status: "available",
      featured: true,
      isFlagship: false,
      themeVariant: "editorial",
      checkoutUrl: "https://cikgujayresources.bcl.my/form/e-opr-by-cikgujayresources",
      supportedGateways: "Billplz / BCL · ToyyibPay · CHIP",
      i18n: {
        ms: {
          fullName: "Sistem Laporan Satu Muka Surat (OPR)",
          heroDesc: "Laporan OPR A4 lengkap draf AI & cetakan PDF",
          description:
            "Siapkan One Page Report (OPR) A4 rasmi lengkap gambar aktiviti dan bantuan draf AI dalam 5 minit.",
          longDescription:
            "e-OPR menukar maklumat program dan sehingga 6 foto aktiviti terus kepada format One Page Report A4 rasmi yang kemas. Dilengkapi fungsi Jana Draf AI untuk objektif serta penilaian, tema warna mengikut unit sekolah dan eksport PDF satu muka surat penuh.",
          pricingNote: "Lesen Perisian Digital · Harga Asal RM 150 (Diskaun 67% · 10 Terawal Sahaja)",
          imageAlt: "Paparan sistem e-OPR One Page Report",
          deliveryMethod: "Pautan akses produk dan panduan pengguna dihantar terus ke e-mel.",
          compatibility: "Pelayar Web (Komputer, Tablet & Telefon Pintar)",
          tags: ["Jana Draf AI", "Grid 6 Gambar", "Tema Unit Sekolah", "PDF 1 Muka Surat"],
          highlights: [
            "Bantuan Jana Draf AI: Rangka objektif, aktiviti, kekangan dan cadangan secara pantas.",
            "Grid Sehingga 6 Gambar: Susun foto aktiviti automatik tanpa jadual lari atau herot.",
            "Tema Mengikut Unit: Sokong format Pentadbiran, Kurikulum, HEM, Kokurikulum dan Panitia.",
            "Cetakan PDF 1 Halaman: Lengkap ruang tandatangan pengesahan untuk fail rasmi sekolah."
          ],
          deliverables: [
            "Akses penuh sistem penjana laporan e-OPR",
            "Templat rasmi OPR A4 pelbagai unit & panitia sekolah",
            "Modul muat naik gambar pukal & bantuan draf AI",
            "Panduan pengguna ringkas untuk guru & setiausaha"
          ],
          idealFor: "Setiausaha Program, Ketua Panitia & Semua Guru"
        },
        en: {
          fullName: "One Page Report (OPR) Generator",
          heroDesc: "Official A4 OPR with AI drafting & PDF export",
          description:
            "Generate official A4 One Page Reports with auto-framed activity photos and AI drafting in under 5 minutes.",
          longDescription:
            "e-OPR formats program details and up to 6 activity photos directly into a clean official A4 One Page Report. Includes AI draft assistance for objectives and evaluations, unit-specific color themes, and crisp single-page PDF export.",
          pricingNote: "Digital Software License · Normal Price RM 150 (67% OFF · First 10 Only)",
          imageAlt: "e-OPR One Page Report generator interface",
          deliveryMethod: "Product access link and user guide sent directly via email.",
          compatibility: "Modern Web Browsers (Desktop, Tablet & Mobile)",
          tags: ["AI Draft Assist", "Up to 6 Photos", "School Unit Themes", "1-Page PDF Export"],
          highlights: [
            "AI Draft Generation: Draft objectives, activities, constraints, and improvements in seconds.",
            "Auto 6-Photo Grid: Frames activity photos cleanly with zero table overflow.",
            "Multi-Unit Themes: Ready templates for Admin, Academic, Student Affairs, Co-Curriculum & Panels.",
            "1-Page Official PDF: Complete with verification signature blocks for school filing."
          ],
          deliverables: [
            "Full digital access to e-OPR software",
            "Multi-unit standardized A4 One Page Report templates",
            "Bulk photo framing & AI text drafting modules",
            "Quick-start guide for teachers and secretaries"
          ],
          idealFor: "Program Secretaries, Panel Heads & Classroom Teachers"
        }
      }
    },
    {
      id: "more-digital-products",
      name: "More Digital Products",
      category: "Upcoming Releases",
      price: null,
      originalPrice: null,
      discountPercent: null,
      currency: "RM",
      discountLabel: null,
      screenshot: null,
      image: "assets/products/coming-soon.svg",
      images: [],
      status: "coming-soon",
      featured: true,
      isFlagship: false,
      themeVariant: "upcoming",
      checkoutUrl: "",
      supportedGateways: "Billplz / BCL · ToyyibPay · CHIP",
      i18n: {
        ms: {
          displayName: "Produk Digital Seterusnya",
          fullName: "Ekosistem Perisian Sekolah Akan Datang",
          description:
            "Modul baharu pengurusan akademik dan pentadbiran sekolah sedang dibangunkan.",
          longDescription:
            "Cikgu Jay Resources sedang membangunkan alatan digital baharu untuk keperluan harian sekolah.",
          pricingNote: "Tarikh pelancaran akan diumumkan",
          imageAlt: "Produk akan datang Cikgu Jay Resources",
          deliveryMethod: "Penghantaran digital selepas pelancaran.",
          compatibility: "Pelayar Web Moden",
          tags: [],
          highlights: [],
          deliverables: [],
          idealFor: "Guru & Pentadbir Sekolah"
        },
        en: {
          displayName: "Upcoming Digital Products",
          fullName: "Next Educator Software Releases",
          description:
            "New digital tools for academic planning and school operations are currently in development.",
          longDescription:
            "Cikgu Jay Resources is actively building new practical tools for modern schools.",
          pricingNote: "Launch schedule to be announced",
          imageAlt: "Upcoming Cikgu Jay Resources products",
          deliveryMethod: "Digital delivery upon launch.",
          compatibility: "Modern Web Browsers",
          tags: [],
          highlights: [],
          deliverables: [],
          idealFor: "Teachers & School Administrators"
        }
      }
    }
  ];

  const testimonials = [];

  /* --------------------------------------------------------------------------
     Language, Path & Escaping Helpers
     -------------------------------------------------------------------------- */

  function getLang() {
    if (window.CJR && window.CJR.i18n && typeof window.CJR.i18n.getLang === "function") {
      return window.CJR.i18n.getLang();
    }
    return document.documentElement.getAttribute("lang") === "en" ? "en" : "ms";
  }

  function getUi() {
    const lang = getLang();
    return UI_STRINGS[lang] || UI_STRINGS.ms;
  }

  function getBasePath() {
    const path = window.location.pathname.replace(/\\/g, "/");
    return path.includes("/pages/") ? "../" : "";
  }

  function getPagePath(targetPage) {
    const base = getBasePath();
    if (targetPage === "index.html") {
      return base + "index.html";
    }
    return base ? targetPage : "pages/" + targetPage;
  }

  function escapeHtml(str) {
    if (str === null || str === undefined) return "";
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  function getLocalizedSlides(rawProduct) {
    const lang = getLang();
    const base = getBasePath();
    if (Array.isArray(rawProduct.images) && rawProduct.images.length > 0) {
      return rawProduct.images.map((item, idx) => {
        const cap =
          (item.caption && (item.caption[lang] || item.caption.ms)) ||
          `${rawProduct.name} (${idx + 1})`;
        return {
          src: base + item.src,
          caption: cap,
          alt: `${rawProduct.name} — ${cap}`
        };
      });
    }
    const fallbackSrc = base + (rawProduct.screenshot || rawProduct.image || "");
    return [
      {
        src: fallbackSrc,
        caption: rawProduct.name,
        alt: rawProduct.name
      }
    ];
  }

  function getLocalizedProduct(product) {
    const lang = getLang();
    const loc = (product.i18n && (product.i18n[lang] || product.i18n.ms)) || {};
    const catLabel =
      (CATEGORY_LABELS[product.category] && CATEGORY_LABELS[product.category][lang]) ||
      product.category;
    return {
      id: product.id,
      name: loc.displayName || product.name,
      canonicalCategory: product.category,
      categoryLabel: catLabel,
      fullName: loc.fullName || "",
      heroDesc: loc.heroDesc || loc.description || "",
      description: loc.description || "",
      longDescription: loc.longDescription || loc.description || "",
      pricingNote: loc.pricingNote || "",
      image: product.screenshot || product.image,
      imageAlt: loc.imageAlt || product.name,
      slides: getLocalizedSlides(product),
      status: product.status,
      price: product.price,
      originalPrice: product.originalPrice || null,
      discountPercent: product.discountPercent || null,
      currency: product.currency || "RM",
      discountLabel: product.discountLabel
        ? product.discountLabel[lang] || product.discountLabel.ms
        : "",
      heroBadge: product.heroBadge
        ? product.heroBadge[lang] || product.heroBadge.ms
        : "",
      isFlagship: Boolean(product.isFlagship),
      themeVariant: product.themeVariant || "default",
      checkoutUrl: product.checkoutUrl || "",
      supportedGateways: product.supportedGateways || "",
      deliveryMethod: loc.deliveryMethod || "",
      compatibility: loc.compatibility || "",
      tags: loc.tags || [],
      highlights: loc.highlights || [],
      deliverables: loc.deliverables || [],
      idealFor: loc.idealFor || ""
    };
  }

  function hasLiveCheckout(product) {
    return Boolean(product.checkoutUrl && /^https?:\/\//i.test(product.checkoutUrl.trim()));
  }

  function formatPrice(product) {
    const ui = getUi();
    if (product.status === "coming-soon") {
      return ui.comingSoon;
    }
    const curr = product.currency || "RM";
    if (typeof product.price === "number" && !Number.isNaN(product.price)) {
      if (product.price === 0) return ui.priceFree;
      return `${curr} ${product.price}`;
    }
    return ui.priceTba;
  }

  function formatPriceDisplay(rawProduct) {
    const ui = getUi();
    const lang = getLang();
    if (rawProduct.status === "coming-soon") {
      return `<div class="price-deal-wrap"><span class="price-current">${escapeHtml(ui.comingSoon)}</span></div>`;
    }
    const curr = rawProduct.currency || "RM";
    if (typeof rawProduct.price === "number" && !Number.isNaN(rawProduct.price)) {
      if (rawProduct.price === 0) {
        return `<div class="price-deal-wrap"><span class="price-current">${escapeHtml(ui.priceFree)}</span></div>`;
      }
      const formattedCurrent = `${curr} ${rawProduct.price}`;
      if (typeof rawProduct.originalPrice === "number" && rawProduct.originalPrice > rawProduct.price) {
        const formattedOriginal = `${curr} ${rawProduct.originalPrice.toLocaleString()}`;
        const computedPct = Math.round(
          ((rawProduct.originalPrice - rawProduct.price) / rawProduct.originalPrice) * 100
        );
        const pct = rawProduct.discountPercent || computedPct;
        const discountText =
          (rawProduct.discountLabel && (rawProduct.discountLabel[lang] || rawProduct.discountLabel.ms)) ||
          (lang === "en" ? `${pct}% OFF` : `Diskaun ${pct}%`);
        return `
          <div class="price-deal-wrap">
            <div class="price-deal-figures">
              <del class="price-original">${escapeHtml(formattedOriginal)}</del>
              <span class="price-current price-current--discounted">${escapeHtml(formattedCurrent)}</span>
            </div>
            <span class="price-discount-badge">${escapeHtml(discountText)}</span>
          </div>
        `;
      }
      return `
        <div class="price-deal-wrap">
          <span class="price-current">${escapeHtml(formattedCurrent)}</span>
        </div>
      `;
    }
    return `<div class="price-deal-wrap"><span class="price-current">${escapeHtml(ui.priceTba)}</span></div>`;
  }

  function formatStatusLabel(status) {
    const ui = getUi();
    if (status === "available") return ui.available;
    if (status === "coming-soon") return ui.comingSoon;
    return ui.unavailable;
  }

  function getCategories(includeUpcoming) {
    const set = new Set();
    products.forEach((p) => {
      if (!includeUpcoming && p.status === "coming-soon") return;
      if (p.category) set.add(p.category);
    });
    return Array.from(set);
  }

  function getProductById(id) {
    return products.find((p) => p.id === id) || null;
  }

  /* --------------------------------------------------------------------------
     Interactive Product Image Carousel & Fullscreen Lightbox Engine
     -------------------------------------------------------------------------- */

  function renderProductCarousel(rawProduct, opts) {
    const options = Object.assign(
      {
        variant: "card", // "hero" | "flagship" | "card" | "pdp"
        showThumbs: false,
        eagerFirst: false
      },
      opts || {}
    );

    const ui = getUi();
    const slides = getLocalizedSlides(rawProduct);
    const total = slides.length;
    const hasMultiple = total > 1;
    const isHero = options.variant === "hero";

    const slidesHtml = slides
      .map((s, idx) => {
        const loadingAttr = options.eagerFirst && idx === 0 ? "eager" : "lazy";
        return `
          <div
            class="cjr-carousel__slide ${idx === 0 ? "is-active" : ""}"
            data-slide-index="${idx}"
            data-caption="${escapeHtml(s.caption)}"
            aria-hidden="${idx === 0 ? "false" : "true"}"
          >
            <img
              src="${escapeHtml(s.src)}"
              alt="${escapeHtml(s.alt)}"
              width="1280"
              height="760"
              loading="${loadingAttr}"
              decoding="async"
              class="cjr-carousel__img"
              data-carousel-zoom="${escapeHtml(rawProduct.id)}"
            />
          </div>
        `;
      })
      .join("");

    const controlsHtml = hasMultiple
      ? `
        <button
          type="button"
          class="cjr-carousel__btn cjr-carousel__btn--prev"
          data-carousel-prev
          aria-label="${escapeHtml(ui.prevSlide)}"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
        </button>
        <button
          type="button"
          class="cjr-carousel__btn cjr-carousel__btn--next"
          data-carousel-next
          aria-label="${escapeHtml(ui.nextSlide)}"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </button>
      `
      : "";

    const dotsHtml =
      hasMultiple && !isHero
        ? `
          <div class="cjr-carousel__dots" role="tablist" aria-label="${escapeHtml(rawProduct.name)}">
            ${slides
              .map(
                (_, idx) => `
                  <button
                    type="button"
                    class="cjr-carousel__dot ${idx === 0 ? "is-active" : ""}"
                    data-carousel-dot="${idx}"
                    aria-label="${escapeHtml(ui.goToSlide)} ${idx + 1}"
                    aria-selected="${idx === 0 ? "true" : "false"}"
                  ></button>
                `
              )
              .join("")}
          </div>
        `
        : "";

    const captionBarHtml = !isHero
      ? `
        <div class="cjr-carousel__hud">
          <span class="cjr-carousel__caption" data-carousel-caption>${escapeHtml(slides[0].caption)}</span>
          <div class="cjr-carousel__hud-right">
            <span class="cjr-carousel__counter" data-carousel-counter>1 / ${total}</span>
            <button
              type="button"
              class="cjr-carousel__zoom-btn"
              data-carousel-zoom="${escapeHtml(rawProduct.id)}"
              aria-label="${escapeHtml(ui.zoomSlide)}"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <polyline points="15 3 21 3 21 9"></polyline>
                <polyline points="9 21 3 21 3 15"></polyline>
                <line x1="21" y1="3" x2="14" y2="10"></line>
                <line x1="3" y1="21" x2="10" y2="14"></line>
              </svg>
            </button>
          </div>
        </div>
      `
      : `
        <span class="cjr-carousel__counter cjr-carousel__counter--hero" data-carousel-counter>1 / ${total}</span>
      `;

    const thumbsHtml =
      options.showThumbs && hasMultiple
        ? `
          <div class="cjr-carousel__thumbs" aria-label="${escapeHtml(rawProduct.name)}">
            ${slides
              .map(
                (s, idx) => `
                  <button
                    type="button"
                    class="cjr-carousel__thumb ${idx === 0 ? "is-active" : ""}"
                    data-carousel-thumb="${idx}"
                    aria-label="${escapeHtml(s.caption)}"
                  >
                    <img src="${escapeHtml(s.src)}" alt="" width="160" height="96" loading="lazy" decoding="async" />
                  </button>
                `
              )
              .join("")}
          </div>
        `
        : "";

    return `
      <div
        class="cjr-carousel cjr-carousel--${escapeHtml(options.variant)}"
        data-cjr-carousel
        data-product-id="${escapeHtml(rawProduct.id)}"
        data-active-index="0"
        data-total-slides="${total}"
        tabindex="0"
        role="region"
        aria-roledescription="carousel"
        aria-label="${escapeHtml(rawProduct.name)}"
      >
        <div class="cjr-carousel__stage">
          <div class="cjr-carousel__track" data-carousel-track>
            ${slidesHtml}
          </div>
          ${captionBarHtml}
          ${controlsHtml}
          ${dotsHtml}
        </div>
        ${thumbsHtml}
      </div>
    `;
  }

  function setCarouselSlide(carouselEl, nextIndex) {
    if (!carouselEl) return;
    const total = parseInt(carouselEl.getAttribute("data-total-slides") || "1", 10);
    if (total <= 1) return;

    const normalized = ((nextIndex % total) + total) % total;
    carouselEl.setAttribute("data-active-index", String(normalized));

    const track = carouselEl.querySelector("[data-carousel-track]");
    if (track) {
      track.style.transform = `translate3d(-${normalized * 100}%, 0, 0)`;
    }

    const slides = carouselEl.querySelectorAll(".cjr-carousel__slide");
    let activeCaption = "";
    slides.forEach((slide, idx) => {
      const active = idx === normalized;
      slide.classList.toggle("is-active", active);
      slide.setAttribute("aria-hidden", active ? "false" : "true");
      if (active) {
        activeCaption = slide.getAttribute("data-caption") || "";
      }
    });

    const counterEl = carouselEl.querySelector("[data-carousel-counter]");
    if (counterEl) {
      counterEl.textContent = `${normalized + 1} / ${total}`;
    }

    const captionEl = carouselEl.querySelector("[data-carousel-caption]");
    if (captionEl && activeCaption) {
      captionEl.textContent = activeCaption;
    }

    carouselEl.querySelectorAll("[data-carousel-dot]").forEach((dot, idx) => {
      const active = idx === normalized;
      dot.classList.toggle("is-active", active);
      dot.setAttribute("aria-selected", active ? "true" : "false");
    });

    carouselEl.querySelectorAll("[data-carousel-thumb]").forEach((thumb, idx) => {
      const active = idx === normalized;
      thumb.classList.toggle("is-active", active);
      if (active && typeof thumb.scrollIntoView === "function") {
        const parent = thumb.parentElement;
        if (parent) {
          const targetLeft = thumb.offsetLeft - parent.clientWidth / 2 + thumb.clientWidth / 2;
          parent.scrollTo({ left: Math.max(0, targetLeft), behavior: "smooth" });
        }
      }
    });
  }

  /* Lightbox Modal State */
  let lightboxEl = null;
  let lightboxState = { productId: null, index: 0 };
  let lastFocusedElement = null;

  function ensureLightbox() {
    if (lightboxEl) return lightboxEl;
    lightboxEl = document.createElement("div");
    lightboxEl.className = "cjr-lightbox";
    lightboxEl.setAttribute("role", "dialog");
    lightboxEl.setAttribute("aria-modal", "true");
    lightboxEl.setAttribute("aria-hidden", "true");
    lightboxEl.innerHTML = `
      <div class="cjr-lightbox__backdrop" data-lightbox-close></div>
      <div class="cjr-lightbox__dialog">
        <div class="cjr-lightbox__topbar">
          <div class="cjr-lightbox__meta">
            <span class="cjr-lightbox__product" data-lb-product></span>
            <span class="cjr-lightbox__caption" data-lb-caption></span>
          </div>
          <div class="cjr-lightbox__actions">
            <span class="cjr-lightbox__counter" data-lb-counter></span>
            <button type="button" class="cjr-lightbox__close" data-lightbox-close aria-label="Close">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" aria-hidden="true">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>
        </div>
        <div class="cjr-lightbox__stage">
          <button type="button" class="cjr-carousel__btn cjr-carousel__btn--prev cjr-lightbox__nav" data-lb-prev>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </button>
          <img class="cjr-lightbox__img" data-lb-img alt="" />
          <button type="button" class="cjr-carousel__btn cjr-carousel__btn--next cjr-lightbox__nav" data-lb-next>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>
        </div>
      </div>
    `;
    document.body.appendChild(lightboxEl);
    return lightboxEl;
  }

  function updateLightboxView() {
    if (!lightboxEl || !lightboxState.productId) return;
    const raw = getProductById(lightboxState.productId);
    if (!raw) return;
    const ui = getUi();
    const slides = getLocalizedSlides(raw);
    const total = slides.length;
    const idx = ((lightboxState.index % total) + total) % total;
    lightboxState.index = idx;
    const slide = slides[idx];

    const prodEl = lightboxEl.querySelector("[data-lb-product]");
    const capEl = lightboxEl.querySelector("[data-lb-caption]");
    const cntEl = lightboxEl.querySelector("[data-lb-counter]");
    const imgEl = lightboxEl.querySelector("[data-lb-img]");
    const closeBtn = lightboxEl.querySelector(".cjr-lightbox__close");
    const prevBtn = lightboxEl.querySelector("[data-lb-prev]");
    const nextBtn = lightboxEl.querySelector("[data-lb-next]");

    if (prodEl) prodEl.textContent = raw.name;
    if (capEl) capEl.textContent = slide.caption;
    if (cntEl) cntEl.textContent = `${idx + 1} / ${total}`;
    if (imgEl) {
      imgEl.src = slide.src;
      imgEl.alt = slide.alt;
    }
    if (closeBtn) closeBtn.setAttribute("aria-label", ui.closeZoom);
    if (prevBtn) {
      prevBtn.setAttribute("aria-label", ui.prevSlide);
      prevBtn.style.display = total > 1 ? "" : "none";
    }
    if (nextBtn) {
      nextBtn.setAttribute("aria-label", ui.nextSlide);
      nextBtn.style.display = total > 1 ? "" : "none";
    }
  }

  function openLightbox(productId, startIndex) {
    const raw = getProductById(productId);
    if (!raw || raw.status === "coming-soon") return;
    ensureLightbox();
    lastFocusedElement = document.activeElement;
    lightboxState.productId = productId;
    lightboxState.index = startIndex || 0;
    updateLightboxView();
    lightboxEl.classList.add("is-open");
    lightboxEl.setAttribute("aria-hidden", "false");
    document.body.classList.add("nav-open");
    const closeBtn = lightboxEl.querySelector(".cjr-lightbox__close");
    if (closeBtn) closeBtn.focus();
  }

  function closeLightbox() {
    if (!lightboxEl || !lightboxEl.classList.contains("is-open")) return;
    lightboxEl.classList.remove("is-open");
    lightboxEl.setAttribute("aria-hidden", "true");
    document.body.classList.remove("nav-open");
    if (lastFocusedElement && typeof lastFocusedElement.focus === "function") {
      lastFocusedElement.focus();
    }
  }

  function bindGlobalCarouselEvents() {
    // Click Delegation for Prev / Next / Dots / Thumbs / Lightbox
    document.addEventListener("click", function (e) {
      const prevBtn = e.target.closest("[data-carousel-prev]");
      if (prevBtn) {
        e.preventDefault();
        e.stopPropagation();
        const carousel = prevBtn.closest("[data-cjr-carousel]");
        const cur = parseInt(carousel.getAttribute("data-active-index") || "0", 10);
        setCarouselSlide(carousel, cur - 1);
        return;
      }

      const nextBtn = e.target.closest("[data-carousel-next]");
      if (nextBtn) {
        e.preventDefault();
        e.stopPropagation();
        const carousel = nextBtn.closest("[data-cjr-carousel]");
        const cur = parseInt(carousel.getAttribute("data-active-index") || "0", 10);
        setCarouselSlide(carousel, cur + 1);
        return;
      }

      const dotBtn = e.target.closest("[data-carousel-dot]");
      if (dotBtn) {
        e.preventDefault();
        e.stopPropagation();
        const carousel = dotBtn.closest("[data-cjr-carousel]");
        const targetIdx = parseInt(dotBtn.getAttribute("data-carousel-dot") || "0", 10);
        setCarouselSlide(carousel, targetIdx);
        return;
      }

      const thumbBtn = e.target.closest("[data-carousel-thumb]");
      if (thumbBtn) {
        e.preventDefault();
        const carousel = thumbBtn.closest("[data-cjr-carousel]");
        const targetIdx = parseInt(thumbBtn.getAttribute("data-carousel-thumb") || "0", 10);
        setCarouselSlide(carousel, targetIdx);
        return;
      }

      const zoomTrigger = e.target.closest("[data-carousel-zoom]");
      if (zoomTrigger) {
        e.preventDefault();
        const prodId = zoomTrigger.getAttribute("data-carousel-zoom");
        const carousel = zoomTrigger.closest("[data-cjr-carousel]");
        const cur = carousel
          ? parseInt(carousel.getAttribute("data-active-index") || "0", 10)
          : 0;
        openLightbox(prodId, cur);
        return;
      }

      if (e.target.closest("[data-lightbox-close]")) {
        e.preventDefault();
        closeLightbox();
        return;
      }

      if (e.target.closest("[data-lb-prev]")) {
        e.preventDefault();
        lightboxState.index -= 1;
        updateLightboxView();
        return;
      }

      if (e.target.closest("[data-lb-next]")) {
        e.preventDefault();
        lightboxState.index += 1;
        updateLightboxView();
      }
    });

    // Keyboard Support (ArrowLeft / ArrowRight on focused carousel or open lightbox, Escape)
    document.addEventListener("keydown", function (e) {
      if (lightboxEl && lightboxEl.classList.contains("is-open")) {
        if (e.key === "Escape") {
          e.preventDefault();
          closeLightbox();
        } else if (e.key === "ArrowLeft") {
          e.preventDefault();
          lightboxState.index -= 1;
          updateLightboxView();
        } else if (e.key === "ArrowRight") {
          e.preventDefault();
          lightboxState.index += 1;
          updateLightboxView();
        }
        return;
      }

      const focusedCarousel = document.activeElement && document.activeElement.closest
        ? document.activeElement.closest("[data-cjr-carousel]")
        : null;
      if (focusedCarousel) {
        const cur = parseInt(focusedCarousel.getAttribute("data-active-index") || "0", 10);
        if (e.key === "ArrowLeft") {
          e.preventDefault();
          setCarouselSlide(focusedCarousel, cur - 1);
        } else if (e.key === "ArrowRight") {
          e.preventDefault();
          setCarouselSlide(focusedCarousel, cur + 1);
        }
      }
    });

    // Touch Swipe Support on Mobile / Tablet
    let touchStartX = 0;
    let touchStartY = 0;
    let activeTouchCarousel = null;

    document.addEventListener(
      "touchstart",
      function (e) {
        const carousel = e.target.closest("[data-cjr-carousel]");
        if (!carousel || e.touches.length !== 1) {
          activeTouchCarousel = null;
          return;
        }
        activeTouchCarousel = carousel;
        touchStartX = e.touches[0].clientX;
        touchStartY = e.touches[0].clientY;
      },
      { passive: true }
    );

    document.addEventListener(
      "touchend",
      function (e) {
        if (!activeTouchCarousel || !e.changedTouches.length) return;
        const dx = e.changedTouches[0].clientX - touchStartX;
        const dy = e.changedTouches[0].clientY - touchStartY;
        if (Math.abs(dx) > 36 && Math.abs(dx) > Math.abs(dy) * 1.2) {
          const cur = parseInt(activeTouchCarousel.getAttribute("data-active-index") || "0", 10);
          setCarouselSlide(activeTouchCarousel, dx < 0 ? cur + 1 : cur - 1);
        }
        activeTouchCarousel = null;
      },
      { passive: true }
    );
  }

  bindGlobalCarouselEvents();

  /* --------------------------------------------------------------------------
     Homepage Hero 3-Product Interactive Suite Renderer
     -------------------------------------------------------------------------- */

  let heroSuiteContainerSelector = null;

  function renderHeroSuite() {
    if (!heroSuiteContainerSelector) return;
    const container = document.querySelector(heroSuiteContainerSelector);
    if (!container) return;

    const stim = getProductById("stim");
    const eguru = getProductById("e-guru-ganti");
    const eopr = getProductById("e-opr");
    if (!stim || !eguru || !eopr) return;

    function buildHeroCard(raw, isPrimary) {
      const p = getLocalizedProduct(raw);
      const detailsHref = `${getPagePath("product-details.html")}?id=${encodeURIComponent(p.id)}`;
      const priceHtml = p.originalPrice
        ? `<span class="hero-preview-card__price-tag"><del>${escapeHtml(p.currency)} ${escapeHtml(p.originalPrice.toLocaleString())}</del> <strong>${escapeHtml(p.currency)} ${escapeHtml(p.price)}</strong> <em class="hero-price-off">${escapeHtml(p.heroBadge)}</em></span>`
        : `<span class="hero-preview-card__price-tag"><strong>${escapeHtml(p.currency)} ${escapeHtml(p.price)}</strong></span>`;

      return `
        <article class="hero-preview-card ${isPrimary ? "hero-preview-card--primary" : ""}">
          <div class="hero-preview-card__thumb">
            ${renderProductCarousel(raw, { variant: "hero", eagerFirst: isPrimary })}
          </div>
          <a href="${escapeHtml(detailsHref)}" class="hero-preview-card__info">
            <div class="hero-preview-card__top">
              <span class="hero-preview-card__tag">${escapeHtml(p.categoryLabel)}</span>
              ${priceHtml}
            </div>
            <div class="hero-preview-card__name">${escapeHtml(p.name)}</div>
            <p class="hero-preview-card__desc">${escapeHtml(p.heroDesc)}</p>
          </a>
        </article>
      `;
    }

    container.innerHTML = `
      ${buildHeroCard(stim, true)}
      <div class="hero-suite__pair">
        ${buildHeroCard(eguru, false)}
        ${buildHeroCard(eopr, false)}
      </div>
    `;
  }

  function initHeroShowcase(selector) {
    heroSuiteContainerSelector = selector || "#hero-suite-cards";
    renderHeroSuite();
  }

  /* --------------------------------------------------------------------------
     Distinct Product Card & Editorial Showcase Renderers
     -------------------------------------------------------------------------- */

  function renderFlagshipCard(rawProduct) {
    const p = getLocalizedProduct(rawProduct);
    const ui = getUi();
    const detailsHref = `${getPagePath("product-details.html")}?id=${encodeURIComponent(p.id)}`;
    const liveCheckout = hasLiveCheckout(rawProduct);
    const priceDisplayHtml = formatPriceDisplay(rawProduct);

    const checkIcon = `
      <svg class="product-card__benefit-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <polyline points="20 6 9 17 4 12"></polyline>
      </svg>
    `;

    const benefitsHtml =
      p.highlights && p.highlights.length
        ? `<ul class="product-card__benefits-list" aria-label="${escapeHtml(ui.keyBenefitsTitle)}">
            ${p.highlights
              .slice(0, 4)
              .map((h) => `<li class="product-card__benefit-item">${checkIcon}<span>${escapeHtml(h)}</span></li>`)
              .join("")}
           </ul>`
        : "";

    const tagsHtml = p.tags.length
      ? `<ul class="product-tags" aria-label="Capabilities">
          ${p.tags.map((tag) => `<li class="product-tag">${escapeHtml(tag)}</li>`).join("")}
         </ul>`
      : "";

    const checkoutBtnHtml = liveCheckout
      ? `<a href="${escapeHtml(rawProduct.checkoutUrl.trim())}" class="btn btn--navy">
          <span>${escapeHtml(ui.purchaseNow)}</span>
          <svg class="icon-shift" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </a>`
      : "";

    return `
      <article class="product-flagship" data-product-id="${escapeHtml(p.id)}">
        <div class="product-flagship__media">
          ${renderProductCarousel(rawProduct, { variant: "flagship" })}
        </div>
        <div class="product-flagship__content">
          <div>
            <div class="product-flagship__top">
              <span class="product-flagship__eyebrow">${escapeHtml(ui.flagshipBadge)} · ${escapeHtml(p.categoryLabel)}</span>
              <span class="product-card__status product-card__status--available">${escapeHtml(formatStatusLabel(p.status))}</span>
            </div>

            <h3 class="product-flagship__title">
              <a href="${escapeHtml(detailsHref)}">${escapeHtml(p.name)}</a>
            </h3>
            <p class="product-flagship__subtitle">${escapeHtml(p.fullName)}</p>
            <p class="product-flagship__desc">${escapeHtml(p.description)}</p>

            <div class="product-card__target">
              <span class="product-card__target-label">${escapeHtml(ui.targetAudienceLabel)}:</span>
              <span class="product-card__target-val">${escapeHtml(p.idealFor)}</span>
            </div>

            ${benefitsHtml}
          </div>

          <div class="product-flagship__bottom">
            <div class="product-flagship__price-block">
              <span class="product-card__price-label">${escapeHtml(ui.priceLabel)}</span>
              ${priceDisplayHtml}
            </div>
            <div class="product-flagship__actions">
              <a href="${escapeHtml(detailsHref)}" class="btn btn--outline">
                <span>${escapeHtml(ui.viewDetails)}</span>
              </a>
              ${checkoutBtnHtml}
            </div>
          </div>
        </div>
      </article>
    `;
  }

  function renderStandardProductCard(rawProduct) {
    const p = getLocalizedProduct(rawProduct);
    const ui = getUi();
    const base = getBasePath();
    const isSoon = p.status === "coming-soon";
    const imageSrc = base + p.image;
    const detailsHref = `${getPagePath("product-details.html")}?id=${encodeURIComponent(p.id)}`;
    const notifyHref = `${getPagePath("contact.html")}?topic=notify`;
    const priceDisplayHtml = formatPriceDisplay(rawProduct);
    const statusLabel = formatStatusLabel(p.status);
    const statusClass = isSoon
      ? "product-card__status--coming-soon"
      : "product-card__status--available";
    const liveCheckout = hasLiveCheckout(rawProduct);

    const checkIcon = `
      <svg class="product-card__benefit-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <polyline points="20 6 9 17 4 12"></polyline>
      </svg>
    `;

    const benefitsHtml =
      !isSoon && p.highlights && p.highlights.length
        ? `<ul class="product-card__benefits-list" aria-label="${escapeHtml(ui.keyBenefitsTitle)}">
            ${p.highlights
              .slice(0, 4)
              .map((h) => `<li class="product-card__benefit-item">${checkIcon}<span>${escapeHtml(h)}</span></li>`)
              .join("")}
           </ul>`
        : "";

    const targetHtml =
      !isSoon && p.idealFor
        ? `<div class="product-card__target">
            <span class="product-card__target-label">${escapeHtml(ui.targetAudienceLabel)}:</span>
            <span class="product-card__target-val">${escapeHtml(p.idealFor)}</span>
           </div>`
        : "";

    const tagsHtml =
      !isSoon && p.tags.length
        ? `<ul class="product-tags">
            ${p.tags.map((tag) => `<li class="product-tag">${escapeHtml(tag)}</li>`).join("")}
           </ul>`
        : "";

    let actionsHtml = "";
    if (isSoon) {
      actionsHtml = `
        <a href="${escapeHtml(notifyHref)}" class="btn btn--outline btn--sm btn--full">${escapeHtml(ui.notifyMe)}</a>
      `;
    } else if (liveCheckout) {
      actionsHtml = `
        <div class="product-card__actions product-card__actions--dual">
          <a href="${escapeHtml(detailsHref)}" class="btn btn--outline btn--sm">${escapeHtml(ui.viewDetails)}</a>
          <a href="${escapeHtml(rawProduct.checkoutUrl.trim())}" class="btn btn--navy btn--sm">${escapeHtml(ui.purchaseNow)}</a>
        </div>
      `;
    } else {
      actionsHtml = `
        <a href="${escapeHtml(detailsHref)}" class="btn btn--navy btn--sm btn--full">
          <span>${escapeHtml(ui.viewDetails)}</span>
          <svg class="icon-shift" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </a>
      `;
    }

    const mediaBlockHtml = isSoon
      ? `<div class="product-card__media"><img src="${escapeHtml(imageSrc)}" alt="${escapeHtml(p.imageAlt)}" width="1024" height="600" loading="lazy" decoding="async" class="product-card__img" /></div>`
      : `<div class="product-card__media">${renderProductCarousel(rawProduct, { variant: "card" })}</div>`;

    return `
      <article class="product-card product-card--${escapeHtml(p.themeVariant)} ${isSoon ? "product-card--soon" : ""}" data-product-id="${escapeHtml(p.id)}">
        ${mediaBlockHtml}
        <div class="product-card__body">
          <div class="product-card__meta">
            <span class="product-card__category">${escapeHtml(p.categoryLabel)}</span>
            <span class="product-card__status ${statusClass}">${escapeHtml(statusLabel)}</span>
          </div>
          <h3 class="product-card__title">
            ${isSoon ? escapeHtml(p.name) : `<a href="${escapeHtml(detailsHref)}">${escapeHtml(p.name)}</a>`}
          </h3>
          ${p.fullName ? `<p class="product-card__subtitle">${escapeHtml(p.fullName)}</p>` : ""}
          <p class="product-card__desc">${escapeHtml(p.description)}</p>
          ${targetHtml}
          ${benefitsHtml}
          <div class="product-card__footer">
            <div class="product-card__pricing">
              <span class="product-card__price-label">${escapeHtml(isSoon ? ui.statusLabel : ui.priceLabel)}</span>
              ${priceDisplayHtml}
            </div>
            ${actionsHtml}
          </div>
        </div>
      </article>
    `;
  }

  function renderUpcomingBanner(rawProduct) {
    const p = getLocalizedProduct(rawProduct);
    const ui = getUi();
    const notifyHref = `${getPagePath("contact.html")}?topic=notify`;
    return `
      <aside class="upcoming-strip" data-product-id="${escapeHtml(p.id)}" aria-label="${escapeHtml(p.name)}">
        <div class="upcoming-strip__info">
          <span class="upcoming-strip__badge">${escapeHtml(ui.comingSoon)}</span>
          <div>
            <h3 class="upcoming-strip__title">${escapeHtml(p.name)}</h3>
            <p class="upcoming-strip__desc">${escapeHtml(p.description)}</p>
          </div>
        </div>
        <a href="${escapeHtml(notifyHref)}" class="btn btn--outline btn--sm">${escapeHtml(ui.notifyMe)}</a>
      </aside>
    `;
  }

  /* --------------------------------------------------------------------------
     Interactive Product Catalog Controller
     -------------------------------------------------------------------------- */

  const registeredCatalogs = [];

  function initProductCatalog(options) {
    const config = Object.assign(
      {
        gridSelector: "#product-grid",
        pillsSelector: "#category-pills",
        searchSelector: "#catalog-search",
        countSelector: "#catalog-count",
        featuredOnly: false,
        editorialShowcase: false
      },
      options || {}
    );

    const gridEl = document.querySelector(config.gridSelector);
    if (!gridEl) return;

    const pillsEl = document.querySelector(config.pillsSelector);
    const searchEl = document.querySelector(config.searchSelector);
    const countEl = document.querySelector(config.countSelector);

    const params = new URLSearchParams(window.location.search);
    let activeCategory = params.get("category") || "All";
    let searchQuery = params.get("q") || "";

    const canonicalCategories = ["All", ...getCategories(false)];
    if (!canonicalCategories.includes(activeCategory)) {
      activeCategory = "All";
    }

    if (searchEl && searchQuery) {
      searchEl.value = searchQuery;
    }

    function renderPills() {
      if (!pillsEl) return;
      const lang = getLang();
      const ui = getUi();

      pillsEl.innerHTML = canonicalCategories
        .map((cat) => {
          const isActive = cat === activeCategory;
          const label =
            cat === "All"
              ? ui.allCategories
              : (CATEGORY_LABELS[cat] && CATEGORY_LABELS[cat][lang]) || cat;
          return `
            <button
              type="button"
              class="category-pill ${isActive ? "is-active" : ""}"
              data-category="${escapeHtml(cat)}"
              aria-pressed="${isActive ? "true" : "false"}"
            >
              ${escapeHtml(label)}
            </button>
          `;
        })
        .join("");
    }

    function filterAndRender() {
      const ui = getUi();
      const normalizedQuery = searchQuery.trim().toLowerCase();

      const matched = products.filter((raw) => {
        if (config.featuredOnly && !raw.featured) return false;

        if (activeCategory !== "All") {
          if (raw.category !== activeCategory) return false;
        }

        if (normalizedQuery) {
          const locMs = raw.i18n && raw.i18n.ms ? raw.i18n.ms : {};
          const locEn = raw.i18n && raw.i18n.en ? raw.i18n.en : {};
          const haystack = [
            raw.name,
            raw.category,
            locMs.displayName || "",
            locMs.fullName || "",
            locMs.description || "",
            locEn.fullName || "",
            locEn.description || ""
          ]
            .join(" ")
            .toLowerCase();
          if (!haystack.includes(normalizedQuery)) return false;
        }

        return true;
      });

      if (countEl) {
        const availableCount = matched.filter((p) => p.status === "available").length;
        countEl.textContent = ui.showingCount(matched.length, availableCount);
      }

      if (matched.length === 0) {
        gridEl.innerHTML = `
          <div class="catalog-empty" style="grid-column: 1 / -1;">
            <h3 class="catalog-empty__title">${escapeHtml(ui.emptyTitle)}</h3>
            <p class="catalog-empty__desc">${escapeHtml(ui.emptyDesc)}</p>
            <button type="button" class="btn btn--outline btn--sm" data-reset-catalog>
              ${escapeHtml(ui.resetFilters)}
            </button>
          </div>
        `;
        const resetBtn = gridEl.querySelector("[data-reset-catalog]");
        if (resetBtn) {
          resetBtn.addEventListener("click", function () {
            activeCategory = "All";
            searchQuery = "";
            if (searchEl) searchEl.value = "";
            renderPills();
            filterAndRender();
          });
        }
        return;
      }

      const isUnfiltered = activeCategory === "All" && !normalizedQuery;
      if (config.editorialShowcase && isUnfiltered) {
        const flagship = matched.find((p) => p.isFlagship && p.status === "available");
        const secondaryAvailable = matched.filter(
          (p) => p !== flagship && p.status === "available"
        );
        const upcomingItems = matched.filter((p) => p.status === "coming-soon");

        gridEl.innerHTML = `
          ${flagship ? renderFlagshipCard(flagship) : ""}
          ${
            secondaryAvailable.length
              ? `<div class="product-pair-grid">
                  ${secondaryAvailable.map((item) => renderStandardProductCard(item)).join("")}
                 </div>`
              : ""
          }
          ${upcomingItems.map((item) => renderUpcomingBanner(item)).join("")}
        `;
        return;
      }

      const availableMatched = matched.filter((p) => p.status === "available");
      const upcomingMatched = matched.filter((p) => p.status === "coming-soon");

      gridEl.innerHTML = `
        <div class="product-pair-grid">
          ${availableMatched.map((item) => renderStandardProductCard(item)).join("")}
        </div>
        ${upcomingMatched.map((item) => renderUpcomingBanner(item)).join("")}
      `;
    }

    if (pillsEl) {
      pillsEl.addEventListener("click", function (e) {
        const btn = e.target.closest(".category-pill");
        if (!btn) return;
        activeCategory = btn.getAttribute("data-category") || "All";
        renderPills();
        filterAndRender();
      });
    }

    if (searchEl) {
      searchEl.addEventListener("input", function (e) {
        searchQuery = e.target.value || "";
        filterAndRender();
      });
    }

    function refresh() {
      renderPills();
      filterAndRender();
    }

    registeredCatalogs.push(refresh);
    refresh();
  }

  /* --------------------------------------------------------------------------
     Product Details Page (PDP) Dynamic Bilingual Renderer
     -------------------------------------------------------------------------- */

  function renderProductDetailsView() {
    const pdpRoot = document.getElementById("pdp-root");
    if (!pdpRoot) return;

    const ui = getUi();
    const params = new URLSearchParams(window.location.search);
    const requestedId = params.get("id") || "stim";
    const rawProduct = getProductById(requestedId);

    if (!rawProduct || rawProduct.status === "coming-soon") {
      const catalogUrl = getPagePath("products.html");
      pdpRoot.innerHTML = `
        <div class="catalog-empty">
          <h2 class="catalog-empty__title">${escapeHtml(ui.notFoundTitle)}</h2>
          <p class="catalog-empty__desc">${escapeHtml(ui.notFoundDesc)}</p>
          <a href="${escapeHtml(catalogUrl)}" class="btn btn--navy">${escapeHtml(ui.backToCatalog)}</a>
        </div>
      `;
      return;
    }

    const p = getLocalizedProduct(rawProduct);
    document.title = p.name.includes("(")
      ? `${p.name} — Cikgu Jay Resources`
      : `${p.name} (${p.fullName}) — Cikgu Jay Resources`;

    const bcCurrent = document.getElementById("pdp-breadcrumb-name");
    if (bcCurrent) bcCurrent.textContent = p.name;

    const heroTitle = document.getElementById("pdp-hero-title");
    if (heroTitle) {
      heroTitle.textContent =
        p.fullName && !p.name.includes("(") ? `${p.name} — ${p.fullName}` : p.name;
    }

    const heroLead = document.getElementById("pdp-hero-lead");
    if (heroLead) heroLead.textContent = p.description;

    const priceDisplayHtml = formatPriceDisplay(rawProduct);
    const liveCheckout = hasLiveCheckout(rawProduct);
    const contactInquiryHref = `${getPagePath("contact.html")}?product=${encodeURIComponent(p.id)}`;

    const checkIcon = `
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <polyline points="20 6 9 17 4 12"></polyline>
      </svg>
    `;

    const highlightsHtml = p.highlights
      .map((item) => `<li class="pdp-feature-item">${checkIcon}<span>${escapeHtml(item)}</span></li>`)
      .join("");

    const deliverablesHtml = p.deliverables
      .map((item) => `<li class="pdp-feature-item">${checkIcon}<span>${escapeHtml(item)}</span></li>`)
      .join("");

    const primaryCheckoutActionHtml = liveCheckout
      ? `
        <a href="${escapeHtml(rawProduct.checkoutUrl.trim())}" class="btn btn--navy btn--full">
          ${escapeHtml(ui.checkoutActiveCta)}
        </a>
        <a href="${escapeHtml(contactInquiryHref)}" class="btn btn--outline btn--full">
          ${escapeHtml(ui.inquireLicensingCta)}
        </a>
      `
      : `
        <a href="${escapeHtml(contactInquiryHref)}" class="btn btn--navy btn--full">
          ${escapeHtml(ui.inquireLicensingCta)}
        </a>
      `;

    pdpRoot.innerHTML = `
      <div class="pdp-grid">
        <div>
          <div class="pdp-media">
            ${renderProductCarousel(rawProduct, { variant: "pdp", showThumbs: true, eagerFirst: true })}
          </div>

          <div class="pdp-details-block">
            <h2>${escapeHtml(ui.overview)}</h2>
            <p style="color: var(--color-text-muted); line-height: 1.65; margin-bottom: 1.5rem;">
              ${escapeHtml(p.longDescription)}
            </p>

            <h2 style="margin-top: 1.75rem;">${escapeHtml(ui.capabilities)}</h2>
            <ul class="pdp-feature-list">
              ${highlightsHtml}
            </ul>

            <h2 style="margin-top: 1.75rem;">${escapeHtml(ui.deliverables)}</h2>
            <ul class="pdp-feature-list">
              ${deliverablesHtml}
            </ul>
          </div>
        </div>

        <aside class="pdp-checkout-card" aria-label="Product licensing">
          <div class="pdp-category-row">
            <span class="product-card__category">${escapeHtml(p.categoryLabel)}</span>
            <span class="product-card__status product-card__status--available">
              ${escapeHtml(formatStatusLabel(p.status))}
            </span>
          </div>

          <h2 class="pdp-title">${escapeHtml(p.name)}</h2>
          <p class="pdp-fullname">${escapeHtml(p.fullName)}</p>
          <p class="pdp-summary">${escapeHtml(p.description)}</p>

          <div class="pdp-price-box">
            <span class="pdp-price-box__label">${escapeHtml(ui.priceLabel)}</span>
            <div class="pdp-price-box__amount">${priceDisplayHtml}</div>
            <p class="pdp-price-box__note">${escapeHtml(p.pricingNote)}</p>
          </div>

          <div style="display: flex; flex-direction: column; gap: 0.75rem;">
            ${primaryCheckoutActionHtml}
          </div>

          <div class="pdp-payment-notice" role="status">
            <strong>${escapeHtml(ui.paymentInfoTitle)}</strong>
            ${escapeHtml(liveCheckout ? ui.paymentActiveNote : ui.paymentPendingNote)}
            <br /><br />
            <span><strong>${escapeHtml(ui.deliveryPrefix)}</strong> ${escapeHtml(p.deliveryMethod)}</span>
          </div>

          <div class="pdp-meta-table">
            <div class="pdp-meta-row">
              <span>${escapeHtml(ui.metaIdealFor)}</span>
              <span>${escapeHtml(p.idealFor)}</span>
            </div>
            <div class="pdp-meta-row">
              <span>${escapeHtml(ui.metaCompatibility)}</span>
              <span>${escapeHtml(p.compatibility)}</span>
            </div>
            <div class="pdp-meta-row">
              <span>${escapeHtml(ui.metaGateways)}</span>
              <span>${escapeHtml(p.supportedGateways)}</span>
            </div>
          </div>
        </aside>
      </div>
    `;

    const relatedIdx = document.getElementById("related-index-text");
    if (relatedIdx) relatedIdx.textContent = ui.relatedIndex;
    const relatedHeading = document.getElementById("related-heading");
    if (relatedHeading) relatedHeading.textContent = ui.relatedTitle;

    const relatedGrid = document.getElementById("pdp-related-grid");
    if (relatedGrid) {
      const others = products.filter(
        (item) => item.id !== rawProduct.id && item.status === "available"
      );
      relatedGrid.innerHTML = others.map((item) => renderStandardProductCard(item)).join("");
    }
  }

  function initProductDetailsPage() {
    renderProductDetailsView();
  }

  document.addEventListener("cjr:langchange", function () {
    renderHeroSuite();
    registeredCatalogs.forEach((refreshFn) => refreshFn());
    renderProductDetailsView();
    if (lightboxEl && lightboxEl.classList.contains("is-open")) {
      updateLightboxView();
    }
  });

  window.CJR = window.CJR || {};
  window.CJR.products = products;
  window.CJR.testimonials = testimonials;
  window.CJR.getCategories = getCategories;
  window.CJR.getProductById = getProductById;
  window.CJR.getLocalizedProduct = getLocalizedProduct;
  window.CJR.formatPrice = formatPrice;
  window.CJR.formatPriceDisplay = formatPriceDisplay;
  window.CJR.initHeroShowcase = initHeroShowcase;
  window.CJR.initProductCatalog = initProductCatalog;
  window.CJR.initProductDetailsPage = initProductDetailsPage;
})();

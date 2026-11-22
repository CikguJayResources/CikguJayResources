/**
 * ==========================================================================
 * CIKGU JAY RESOURCES — BILINGUAL INTERNATIONALIZATION ENGINE (BM & EN)
 * Default Initial Language: Bahasa Melayu ("ms")
 * Copywriting Standard: RINGKAS, PADAT & TEPAT (Executive SaaS Tone)
 * ==========================================================================
 */

(function () {
  "use strict";

  const STORAGE_KEY = "cjr_lang";
  const DEFAULT_LANG = "ms";

  const translations = {
    ms: {
      /* Page Titles */
      "meta.title.home": "Cikgu Jay Resources — Perisian Pintar Pengurusan Sekolah",
      "meta.title.products": "Katalog Perisian Digital — Cikgu Jay Resources",
      "meta.title.pdp": "Spesifikasi Perisian — Cikgu Jay Resources",
      "meta.title.about": "Tentang Kami — Cikgu Jay Resources",
      "meta.title.faq": "Soalan Lazim (FAQ) — Cikgu Jay Resources",
      "meta.title.contact": "Hubungi & Lesen Sekolah — Cikgu Jay Resources",
      "meta.title.privacy": "Dasar Privasi — Cikgu Jay Resources",
      "meta.title.terms": "Terma & Syarat — Cikgu Jay Resources",

      /* Accessibility & Navigation */
      "a11y.skip": "Langkau ke kandungan utama",
      "nav.home": "Utama",
      "nav.products": "Produk",
      "nav.about": "Tentang Kami",
      "nav.faq": "Soalan Lazim",
      "nav.contact": "Hubungi",
      "nav.explore": "Terokai Produk",
      "nav.allProducts": "Semua Produk",
      "nav.schoolLicensing": "Lesen Sekolah",
      "nav.tagline": "Alatan Pintar. Pengajaran Lebih Baik.",
      "nav.langAria": "Tukar bahasa laman web",

      /* Hero Section */
      "hero.eyebrow": "Cikgu Jay Resources · Perisian Pendidikan Digital",
      "hero.title.line1": "Perisian Praktikal Untuk",
      "hero.title.line2": "Pengurusan Sekolah Moden.",
      "hero.desc": "Susun jadual waktu induk, agih guru ganti dan jana laporan OPR rasmi dalam beberapa minit.",
      "hero.cta.primary": "Terokai Produk",
      "hero.cta.secondary": "Tentang Kami",
      "hero.meta.1": "Terus guna di pelayar web",
      "hero.meta.2": "Format rasmi sekolah",
      "hero.meta.3": "Akses digital pantas",

      /* Hero 3-Product Showcase */
      "hero.showcase.label": "Paparan Interaktif Perisian",
      "hero.showcase.stim.tag": "Perisian Pengurusan Sekolah",
      "hero.showcase.stim.desc": "Jadual induk, kelas & guru bebas pertindihan",
      "hero.showcase.eguru.tag": "Pengurusan Sekolah",
      "hero.showcase.eguru.desc": "Agihan relief harian, statistik & slip MMI",
      "hero.showcase.eopr.tag": "Pentadbiran Pendidikan",
      "hero.showcase.eopr.desc": "Laporan OPR A4 lengkap draf AI & cetakan PDF",
      "hero.showcase.view": "Lihat",

      /* Section C: Value Proposition */
      "value.index": "Nilai Utama",
      "value.title": "Direka Mengikut Operasi Sebenar Sekolah",
      "value.lead": "Empat kelebihan utama yang mempercepat kerja pentadbiran dan pelaporan guru.",
      "value.1.title": "Khusus Untuk Pendidik",
      "value.1.desc": "Selaras dengan waktu mengajar, jadual relief dan format laporan rasmi sekolah.",
      "value.2.title": "Jimat Masa Harian",
      "value.2.desc": "Siapkan jadual ganti pagi, semakan konflik dan dokumentasi OPR dalam beberapa minit.",
      "value.3.title": "Dokumen Sedia Cetak",
      "value.3.desc": "Eksport jadual dan laporan A4 rasmi terus ke PDF tanpa pelarasan manual.",
      "value.4.title": "Mesra Pengguna",
      "value.4.desc": "Antara muka kemas yang boleh terus digunakan oleh semua guru pada hari pertama.",

      /* Section D: Featured Products */
      "products.index": "Katalog Perisian",
      "products.title": "Penyelesaian Digital Utama",
      "products.lead": "Leret atau klik anak panah pada setiap kad untuk melihat paparan sebenar perisian.",
      "products.viewAll": "Katalog Penuh",
      "products.search.label": "Cari produk digital",
      "products.search.placeholder": "Cari STiM, e-GGs, OPR...",
      "products.upcoming.badge": "Dalam Pembangunan",
      "products.upcoming.title": "Produk Digital Seterusnya",
      "products.upcoming.desc": "Modul baharu pengurusan akademik dan pentadbiran sekolah sedang dibangunkan.",
      "products.upcoming.cta": "Maklumkan Saya",

      /* Section: Video Showcase */
      "video.index": "Demonstrasi Video",
      "video.title": "Tonton e-GGs Beraksi Secara Langsung",
      "video.lead": "Lihat bagaimana e-GGs menyelesaikan tugasan jadual guru ganti, mengelakkan pertindihan waktu, dan menjana slip MMI serta laporan PDF rasmi dalam 2 minit.",
      "video.badge": "Video Demo Penuh · 2:00 Minit",
      "video.highlightsTitle": "Fungsi Utama Dalam Klip Video Ini:",
      "video.h1": "<strong>Padanan Guru Ganti Pantas:</strong> Agihan relief automatik berdasarkan waktu luang tanpa pertindihan jadual.",
      "video.h2": "<strong>Kawalan Had Beban Mingguan:</strong> Pengiraan pintar waktu ganti bagi memastikan beban seimbang antara guru.",
      "video.h3": "<strong>Jadual & Roster Lengkap:</strong> Status guru mengikut kelas, jadual persendirian guru dan roster kehadiran harian.",
      "video.h4": "<strong>Cetak Slip MMI & PDF Sedia Guna:</strong> Format slip mini A4 (3–4 keping sehelai) dan penyata kehadiran untuk edaran pagi.",
      "video.ctaBuy": "Dapatkan e-GGs Sekarang (RM 100)",
      "video.ctaDetails": "Ketahui Butiran Penuh e-GGs",

      /* Section: Built for Better School Management */
      "better.index": "Impak Pentadbiran",
      "better.title": "Pengurusan Sekolah Lebih Teratur",
      "better.lead": "Urusan jadual dan laporan yang sistematik memberi lebih masa untuk pengajaran murid.",
      "better.1.title": "Ringkaskan Tugas Harian",
      "better.1.desc": "Gantikan rekod papan putih dan helaian manual dengan satu sistem digital seragam.",
      "better.2.title": "Selaraskan Aliran Kerja",
      "better.2.desc": "Pastikan jadual induk, rekod ganti dan arkib laporan sentiasa tersusun untuk rujukan.",
      "better.3.title": "Jimatkan Masa Guru",
      "better.3.desc": "Hapuskan kerja berulang menyusun gambar laporan dan menyemak pertindihan jadual.",
      "better.4.title": "Inovasi Praktikal",
      "better.4.desc": "Setiap fungsi dibina terus daripada keperluan sebenar bilik guru dan pejabat sekolah.",

      /* Section: About Brand Story */
      "story.index": "Identiti Jenama",
      "story.title": "Jenama Perisian Pendidikan Bebas",
      "story.p1": "Cikgu Jay Resources membangunkan perisian praktikal untuk guru dan pentadbir sekolah.",
      "story.p2": "Setiap produk direka kemas, mudah difahami dan terus menyelesaikan beban dokumentasi harian.",
      "story.cta": "Kisah Kami",
      "story.pillar1.label": "Fokus Utama",
      "story.pillar1.val": "Perisian Jadual & Dokumentasi Sekolah",
      "story.pillar2.label": "Reka Bentuk",
      "story.pillar2.val": "Ringkas, Kemas & Mesra Guru",
      "story.pillar3.label": "Akses Produk",
      "story.pillar3.val": "Penghantaran Digital Terus ke E-mel",

      /* Section E: Why Choose Us */
      "why.index": "Mengapa Kami",
      "why.title": "Tepat, Mampu Milik & Sedia Untuk Kegunaan Harian",
      "why.lead": "Kami membina alatan digital yang memendekkan proses kerja dan menghargai masa guru.",
      "why.quote": "\"Sistem pentadbiran yang kemas mengembalikan masa berharga guru kepada murid di bilik darjah.\"",
      "why.1.title": "Penyelesaian Sebenar",
      "why.1.desc": "Menangani terus isu jadual waktu induk, agihan guru ganti dan pelaporan OPR.",
      "why.2.title": "Harga Berpatutan",
      "why.2.desc": "Lesen telus dan mampu milik untuk kegunaan guru individu, panitia serta sekolah.",
      "why.3.title": "Antara Muka Jelas",
      "why.3.desc": "Susun atur bersih memudahkan penggunaan semua peringkat staf sekolah.",
      "why.4.title": "Kemas Kini Konsisten",
      "why.4.desc": "Perisian ditambah baik secara berterusan mengikut keperluan semasa pentadbiran sekolah.",
      "why.5.title": "Berpaksikan Sekolah",
      "why.5.desc": "Dibangunkan khusus mengikut ekosistem pendidikan dan pengurusan sekolah di Malaysia.",

      /* Section F: How It Works */
      "steps.index": "Langkah Mudah",
      "steps.title": "Cara Pembelian",
      "steps.lead": "Miliki akses penuh perisian pilihan anda melalui empat langkah ringkas.",
      "steps.1.title": "Pilih Produk",
      "steps.1.desc": "Semak paparan skrin dan spesifikasi perisian dalam katalog kami.",
      "steps.2.title": "Sahkan Lesen",
      "steps.2.desc": "Pilih pakej kegunaan guru individu atau lesen penuh peringkat sekolah.",
      "steps.3.title": "Bayaran Selamat",
      "steps.3.desc": "Buat pembayaran melalui perbankan dalam talian (FPX) atau tempahan rasmi.",
      "steps.4.title": "Akses Segera",
      "steps.4.desc": "Terima pautan perisian dan panduan lengkap terus ke e-mel anda.",

      /* Section H: FAQ */
      "faq.index": "Soalan Lazim",
      "faq.title": "Pertanyaan Umum",
      "faq.lead": "Maklumat ringkas berkaitan pembelian lesen, pembayaran dan penghantaran digital.",
      "faq.support.title": "Perlukan sebut harga sekolah?",
      "faq.support.desc": "Hubungi kami untuk urusan pelesenan institusi atau pertanyaan teknikal.",
      "faq.support.cta": "Hubungi Kami",
      "faq.q1": "Bagaimanakah cara membeli produk digital?",
      "faq.a1": "Pilih produk dalam katalog dan klik Lihat Butiran untuk menempah lesen atau membuat pembayaran dalam talian.",
      "faq.q2": "Bagaimanakah produk dihantar selepas bayaran?",
      "faq.a2": "100% digital. Pautan akses perisian, maklumat lesen dan panduan mula dihantar terus ke e-mel anda.",
      "faq.q3": "Adakah transaksi pembayaran selamat?",
      "faq.a3": "Ya. Pembayaran disokong oleh gerbang berlesen seperti Billplz / BCL, ToyyibPay dan CHIP melalui sambungan FPX tersulit.",
      "faq.q4": "Bolehkah pautan produk diakses semula?",
      "faq.a4": "Ya. Simpan e-mel pengesahan anda atau hubungi sokongan kami bersama bukti pembelian untuk penghantaran semula.",
      "faq.q5": "Bagaimanakah cara mendapatkan bantuan teknikal?",
      "faq.a5": "Hantar mesej melalui halaman Hubungi atau e-mel ke jaypah2@gmail.com berserta nama produk anda.",
      "faq.q6": "Adakah pemasangan khas diperlukan pada komputer?",
      "faq.a6": "Tidak perlu pemasangan rumit. Semua perisian berfungsi terus pada pelayar web moden.",

      /* Section I: CTA */
      "cta.title": "Urus Sekolah Dengan Lebih Pantas Hari Ini.",
      "cta.desc": "Dapatkan STiM, e-GGs (e-Guru Ganti Sekolah) dan e-OPR pada harga promosi 10 terawal sahaja.",
      "cta.btn": "Lihat Semua Produk",

      /* Section J: Footer */
      "footer.desc": "Jenama perisian digital bebas yang membangunkan penyelesaian praktikal untuk guru dan pentadbiran sekolah.",
      "footer.nav": "Navigasi",
      "footer.categories": "Kategori Produk",
      "footer.cat.mgmt": "Pengurusan Sekolah",
      "footer.cat.admin": "Pentadbiran Pendidikan",
      "footer.cat.software": "Perisian Pengurusan Sekolah",
      "footer.contact": "Sokongan",
      "footer.hours": "Isnin – Jumaat, 9:00 PG – 5:00 PTG",
      "footer.inquiry": "Borang Pertanyaan",
      "footer.rights": "© 2026 Cikgu Jay Resources. Hak cipta terpelihara.",
      "footer.privacy": "Dasar Privasi",
      "footer.terms": "Terma & Syarat",

      /* Catalog Page */
      "catalogPage.title": "Katalog Perisian Digital",
      "catalogPage.lead": "Semak paparan sebenar, kelebihan utama dan harga promosi semasa bagi setiap perisian.",

      /* About Page */
      "aboutPage.breadcrumb": "Tentang Kami",
      "aboutPage.title": "Profil & Hala Tuju",
      "aboutPage.lead": "Membangunkan perisian tepat yang menjimatkan masa harian guru dan pentadbir sekolah.",
      "aboutPage.intro.title": "Alatan Pintar. Pengajaran Lebih Baik.",
      "aboutPage.intro.lead": "Cikgu Jay Resources membangunkan perisian pendidikan bebas untuk operasi harian sekolah.",
      "aboutPage.intro.callout": "Matlamat kami jelas: pastikan setiap tugas jadual dan dokumentasi siap dengan tepat dalam masa paling singkat.",
      "aboutPage.h1": "Fokus Pembangunan",
      "aboutPage.p1": "Pengurusan jadual waktu induk, agihan guru ganti pagi dan penyediaan laporan OPR menuntut ketepatan tinggi setiap minggu.",
      "aboutPage.p2": "Perisian kami menggantikan kerja pelarasan manual kepada aliran kerja automatik yang menghasilkan dokumen rasmi sedia cetak.",
      "aboutPage.h2": "Prinsip Kami",
      "aboutPage.li1": "Ringkas & Jelas: Antara muka mudah difahami terus pada penggunaan pertama.",
      "aboutPage.li2": "Tepat Mengikut Sekolah: Dibina selaras dengan struktur jadual dan dokumentasi KPM.",
      "aboutPage.li3": "Akses Pantas: Penghantaran lesen dan panduan digital terus ke e-mel.",
      "aboutPage.li4": "Kualiti Berterusan: Penambahbaikan konsisten mengikut keperluan sebenar pendidik.",
      "aboutPage.h3": "Hala Tuju Ekosistem",
      "aboutPage.p3": "Bersama STiM, e-GGs (e-Guru Ganti Sekolah) dan e-OPR, kami terus membangunkan modul digital baharu untuk sekolah moden.",
      "aboutPage.cta1": "Lihat Produk",
      "aboutPage.cta2": "Hubungi Kami",

      /* FAQ Page */
      "faqPage.title": "Soalan Lazim (FAQ)",
      "faqPage.lead": "Jawapan ringkas berkaitan pembelian lesen, pembayaran dan penghantaran produk.",
      "faqPage.side.index": "Bantuan",
      "faqPage.side.title": "Panduan Pembelian",
      "faqPage.side.lead": "Perlukan maklumat pelesenan peringkat sekolah? Hubungi pasukan kami.",
      "faqPage.side.boxTitle": "Sokongan Pelanggan",
      "faqPage.side.boxDesc": "Kami sedia membantu urusan sebut harga dan keserasian sistem.",

      /* Contact Page */
      "contactPage.breadcrumb": "Hubungi",
      "contactPage.title": "Hubungi & Tempahan Lesen",
      "contactPage.lead": "Urusan pembelian lesen sekolah, bantuan teknikal dan pertanyaan produk.",
      "contactPage.left.index": "Saluran Rasmi",
      "contactPage.left.title": "Meja Sokongan Kami",
      "contactPage.left.desc": "Pasukan kami sedia membantu guru individu, penyelaras jadual serta pentadbiran sekolah.",
      "contactPage.emailCard.title": "E-mel Rasmi",
      "contactPage.emailCard.desc": "Pertanyaan lesen, sebut harga dan bantuan teknikal:",
      "contactPage.hoursCard.title": "Waktu Operasi",
      "contactPage.hoursCard.desc": "Isnin – Jumaat: 9:00 PG – 5:00 PTG (MYT). Maklum balas dalam 1–2 hari bekerja.",
      "contactPage.form.title": "Hantar Pertanyaan",
      "contactPage.form.desc": "Isi maklumat ringkas di bawah untuk menghantar e-mel terus kepada kami.",
      "contactPage.form.name": "Nama Penuh / Sekolah",
      "contactPage.form.namePh": "cth: Cikgu Ahmad · SK Taman Jaya",
      "contactPage.form.email": "Alamat E-mel",
      "contactPage.form.emailPh": "nama@moe-dl.edu.my atau e-mel peribadi",
      "contactPage.form.topic": "Topik",
      "contactPage.form.optLicensing": "Pembelian & Lesen Sekolah",
      "contactPage.form.optSupport": "Sokongan Teknikal & Akses Semula",
      "contactPage.form.optUpcoming": "Makluman Produk Akan Datang",
      "contactPage.form.optGeneral": "Pertanyaan Umum",
      "contactPage.form.message": "Mesej",
      "contactPage.form.messagePh": "Nyatakan produk pilihan (STiM, e-GGs, e-OPR) atau pertanyaan anda...",
      "contactPage.form.submit": "Hantar Pertanyaan E-mel",
      "contactPage.form.prefill": "Salam Cikgu Jay Resources,\n\nSaya berminat mendapatkan lesen bagi produk ",
      "contactPage.form.readyStrong": "Draf e-mel sedia dihantar.",
      "contactPage.form.readyBody": "Membuka aplikasi e-mel ke jaypah2@gmail.com. Jika tidak dibuka automatik,",
      "contactPage.form.readyLink": "klik di sini",

      /* Legal Pages */
      "privacyPage.title": "Dasar Privasi",
      "privacyPage.lead": "Pengurusan maklumat pelanggan dan keselamatan data pelesenan.",
      "privacyPage.h1": "1. Maklumat Dikumpul",
      "privacyPage.p1": "Kami hanya mengumpul nama, alamat e-mel, nama sekolah dan rujukan transaksi bagi tujuan penghantaran lesen serta sokongan pelanggan.",
      "privacyPage.h2": "2. Keselamatan Pembayaran",
      "privacyPage.p2": "Transaksi diproses melalui gerbang berlesen (Billplz / BCL, ToyyibPay, CHIP). Tiada maklumat kad atau perbankan disimpan di laman ini.",
      "privacyPage.h3": "3. Tujuan Penggunaan",
      "privacyPage.li1": "Menghantar pautan akses produk, lesen dan panduan pengguna.",
      "privacyPage.li2": "Menyediakan bantuan teknikal dan penghantaran semula akses.",
      "privacyPage.li3": "Menyampaikan kemas kini penting perisian berlesen.",
      "privacyPage.h4": "4. Kerahsiaan Data",
      "privacyPage.p4": "Maklumat pelanggan tidak dijual atau dikongsi kepada mana-mana pihak ketiga.",
      "privacyPage.h5": "5. Hubungi Kami",
      "privacyPage.p5": "Sebarang pertanyaan privasi boleh diajukan terus ke jaypah2@gmail.com.",

      "termsPage.title": "Terma & Syarat",
      "termsPage.lead": "Garis panduan pelesenan dan hak cipta produk Cikgu Jay Resources.",
      "termsPage.h1": "1. Hak Pelesenan",
      "termsPage.p1": "Setiap pembelian memberikan lesen bukan eksklusif dan tidak boleh dipindah milik mengikut kategori individu atau sekolah yang didaftarkan.",
      "termsPage.h2": "2. Hak Cipta & Larangan Edaran",
      "termsPage.p2": "Dilarang menjual semula, memuat naik secara terbuka atau mengedar salinan perisian dan imej Cikgu Jay Resources tanpa kebenaran bertulis.",
      "termsPage.h3": "3. Penghantaran Digital",
      "termsPage.p3": "Akses produk dihantar ke alamat e-mel berdaftar selepas pembayaran disahkan.",
      "termsPage.h4": "4. Sokongan Teknikal",
      "termsPage.p4": "Sokongan rasmi disediakan kepada pemegang lesen sah mengikut spesifikasi keserasian pelayar web."
    },

    en: {
      /* Page Titles */
      "meta.title.home": "Cikgu Jay Resources — Smart School Management Software",
      "meta.title.products": "Digital Software Catalog — Cikgu Jay Resources",
      "meta.title.pdp": "Software Specifications — Cikgu Jay Resources",
      "meta.title.about": "About Us — Cikgu Jay Resources",
      "meta.title.faq": "FAQ — Cikgu Jay Resources",
      "meta.title.contact": "Contact & School Licensing — Cikgu Jay Resources",
      "meta.title.privacy": "Privacy Policy — Cikgu Jay Resources",
      "meta.title.terms": "Terms & Conditions — Cikgu Jay Resources",

      /* Accessibility & Navigation */
      "a11y.skip": "Skip to main content",
      "nav.home": "Home",
      "nav.products": "Products",
      "nav.about": "About",
      "nav.faq": "FAQ",
      "nav.contact": "Contact",
      "nav.explore": "Explore Products",
      "nav.allProducts": "All Products",
      "nav.schoolLicensing": "School License",
      "nav.tagline": "Smarter Tools. Better Teaching.",
      "nav.langAria": "Switch website language",

      /* Hero Section */
      "hero.eyebrow": "Cikgu Jay Resources · Educational Software Suite",
      "hero.title.line1": "Practical Software for",
      "hero.title.line2": "Modern School Management.",
      "hero.desc": "Build master timetables, assign daily relief teachers, and generate official One Page Reports in minutes.",
      "hero.cta.primary": "Explore Products",
      "hero.cta.secondary": "About Us",
      "hero.meta.1": "Browser-ready software",
      "hero.meta.2": "Official school formats",
      "hero.meta.3": "Fast digital delivery",

      /* Hero 3-Product Showcase */
      "hero.showcase.label": "Interactive Software Previews",
      "hero.showcase.stim.tag": "School Management Software",
      "hero.showcase.stim.desc": "Clash-free master, class & teacher schedules",
      "hero.showcase.eguru.tag": "School Management",
      "hero.showcase.eguru.desc": "Automated relief matching, stats & MMI slips",
      "hero.showcase.eopr.tag": "Educational Administration",
      "hero.showcase.eopr.desc": "Official A4 OPR with AI drafting & PDF export",
      "hero.showcase.view": "View",

      /* Section C: Value Proposition */
      "value.index": "Core Value",
      "value.title": "Engineered for Real School Operations",
      "value.lead": "Four focused advantages that cut daily administrative and reporting time.",
      "value.1.title": "Built for Educators",
      "value.1.desc": "Aligned with real teaching periods, relief rosters, and school reporting standards.",
      "value.2.title": "Save Hours Daily",
      "value.2.desc": "Complete morning relief schedules, clash checks, and OPR reports in minutes.",
      "value.3.title": "Print-Ready Output",
      "value.3.desc": "Export clean A4 schedules and official PDFs with zero manual formatting.",
      "value.4.title": "Effortless to Use",
      "value.4.desc": "Clean interfaces any teacher or coordinator can use confidently on day one.",

      /* Section D: Featured Products */
      "products.index": "Software Storefront",
      "products.title": "Featured Digital Solutions",
      "products.lead": "Swipe or click the arrows on each card to inspect live software screens.",
      "products.viewAll": "Full Catalog",
      "products.search.label": "Search digital products",
      "products.search.placeholder": "Search STiM, e-GGs, OPR...",
      "products.upcoming.badge": "In Development",
      "products.upcoming.title": "Upcoming Digital Products",
      "products.upcoming.desc": "New digital tools for academic planning and school operations are in development.",
      "products.upcoming.cta": "Notify Me",

      /* Section: Video Showcase */
      "video.index": "Video Demonstration",
      "video.title": "Watch e-GGs in Real-Time Action",
      "video.lead": "See how e-GGs handles relief teacher scheduling, prevents timetable clashes, and prints A4 MMI slips & official PDF statements in just 2 minutes.",
      "video.badge": "Full Video Walkthrough · 2:00 Minutes",
      "video.highlightsTitle": "Key Features Shown in This Video:",
      "video.h1": "<strong>Instant Relief Matching:</strong> Automatically pairs absent teachers with free-period colleagues without timetable clashes.",
      "video.h2": "<strong>Weekly Workload Cap:</strong> Smart calculation ensuring relief duty hours remain fair and balanced across staff.",
      "video.h3": "<strong>Master Grid & Daily Rosters:</strong> Class-by-class teacher status, individual duty timetables, and daily attendance logs.",
      "video.h4": "<strong>Print MMI Slips & Official PDFs:</strong> Ready-to-cut A4 mini slips (3–4 per sheet) and audit-ready attendance statements.",
      "video.ctaBuy": "Get e-GGs Now (RM 100)",
      "video.ctaDetails": "Explore Full e-GGs Details",

      /* Section: Built for Better School Management */
      "better.index": "Operational Impact",
      "better.title": "Built for Better School Management",
      "better.lead": "Structured scheduling and reporting give educators more time for classroom teaching.",
      "better.1.title": "Simplify Daily Tasks",
      "better.1.desc": "Replace manual whiteboard tallies and scattered sheets with one standardized system.",
      "better.2.title": "Align School Workflow",
      "better.2.desc": "Keep master schedules, relief logs, and program reports organized for instant review.",
      "better.3.title": "Eliminate Repetitive Work",
      "better.3.desc": "Remove after-hours photo resizing and manual cross-checking for period clashes.",
      "better.4.title": "Practical Innovation",
      "better.4.desc": "Every feature addresses a real daily need in the staffroom and admin office.",

      /* Section: About Brand Story */
      "story.index": "Brand Identity",
      "story.title": "Independent Educational Software Brand",
      "story.p1": "Cikgu Jay Resources builds practical digital software for teachers and school administrators.",
      "story.p2": "Every product stays concise, intuitive, and focused on reducing daily administrative load.",
      "story.cta": "Our Story",
      "story.pillar1.label": "Core Focus",
      "story.pillar1.val": "School Scheduling & Reporting Software",
      "story.pillar2.label": "Design Standard",
      "story.pillar2.val": "Minimal, Clean & Educator-First",
      "story.pillar3.label": "Product Access",
      "story.pillar3.val": "Direct Digital Email Delivery",

      /* Section E: Why Choose Us */
      "why.index": "Why Choose Us",
      "why.title": "Accurate, Accessible & Built for Daily Use",
      "why.lead": "We build focused tools that shorten workflows and respect teachers' time.",
      "why.quote": "\"Organized school systems return valuable hours to classroom teaching and student growth.\"",
      "why.1.title": "Real Operational Fit",
      "why.1.desc": "Directly solves master timetabling, daily relief rosters, and one-page reporting.",
      "why.2.title": "Accessible Pricing",
      "why.2.desc": "Transparent, fair licensing for individual teachers, panels, and whole schools.",
      "why.3.title": "Clean Interface",
      "why.3.desc": "Clear layouts and guided inputs make onboarding effortless for all staff.",
      "why.4.title": "Consistent Updates",
      "why.4.desc": "Refined continuously alongside real school governance requirements.",
      "why.5.title": "Educator-First Design",
      "why.5.desc": "Purpose-built around school academic structures from the ground up.",

      /* Section F: How It Works */
      "steps.index": "Quick Setup",
      "steps.title": "How It Works",
      "steps.lead": "Deploy the right digital tool for your school in four simple steps.",
      "steps.1.title": "Inspect Screens",
      "steps.1.desc": "Browse live screenshots and feature specs across our catalog.",
      "steps.2.title": "Select License",
      "steps.2.desc": "Choose the product suited for individual or whole-school deployment.",
      "steps.3.title": "Secure Payment",
      "steps.3.desc": "Complete payment via FPX online banking or direct licensing order.",
      "steps.4.title": "Instant Access",
      "steps.4.desc": "Receive your software access link and setup guide via email.",

      /* Section H: FAQ */
      "faq.index": "FAQ",
      "faq.title": "Frequently Asked Questions",
      "faq.lead": "Quick answers on licensing, payment security, and digital delivery.",
      "faq.support.title": "Need a school quotation?",
      "faq.support.desc": "Contact us for whole-school licensing or compatibility questions.",
      "faq.support.cta": "Contact Us",
      "faq.q1": "How do I purchase a digital product?",
      "faq.a1": "Select any product in our catalog and click View Details to place a licensing order or proceed to online checkout.",
      "faq.q2": "How will I receive my product?",
      "faq.a2": "100% digital. Your access link, license details, and setup guide are emailed directly upon payment verification.",
      "faq.q3": "Is online payment secure?",
      "faq.a3": "Yes. Checkout supports licensed Malaysian gateways (Billplz / BCL, ToyyibPay, CHIP) via encrypted FPX channels.",
      "faq.q4": "Can I recover my product link later?",
      "faq.a4": "Yes. Keep your confirmation email or contact support with your purchase reference for prompt re-delivery.",
      "faq.q5": "How do I get technical support?",
      "faq.a5": "Send a message via our Contact page or email jaypah2@gmail.com with your product name.",
      "faq.q6": "Is special software installation required?",
      "faq.a6": "No complex local setup required. All tools run smoothly in modern web browsers.",

      /* Section I: CTA */
      "cta.title": "Run Your School Workflows Faster Today.",
      "cta.desc": "Get STiM, e-GGs (e-Guru Ganti Sekolah), and e-OPR at special first-10 promotional pricing.",
      "cta.btn": "Explore All Products",

      /* Section J: Footer */
      "footer.desc": "Independent digital software brand building practical tools for modern teachers and school administrators.",
      "footer.nav": "Navigation",
      "footer.categories": "Product Categories",
      "footer.cat.mgmt": "School Management",
      "footer.cat.admin": "Educational Administration",
      "footer.cat.software": "School Management Software",
      "footer.contact": "Support",
      "footer.hours": "Mon – Fri, 9:00 AM – 5:00 PM (MYT)",
      "footer.inquiry": "Submit Inquiry",
      "footer.rights": "© 2026 Cikgu Jay Resources. All rights reserved.",
      "footer.privacy": "Privacy Policy",
      "footer.terms": "Terms & Conditions",

      /* Catalog Page */
      "catalogPage.title": "Digital Software Catalog",
      "catalogPage.lead": "Browse interactive screenshots, key advantages, and promotional pricing across our suite.",

      /* About Page */
      "aboutPage.breadcrumb": "About",
      "aboutPage.title": "Profile & Direction",
      "aboutPage.lead": "Building focused software that saves daily hours for teachers and school leaders.",
      "aboutPage.intro.title": "Smarter Tools. Better Teaching.",
      "aboutPage.intro.lead": "Cikgu Jay Resources is an independent software brand dedicated to practical school operations.",
      "aboutPage.intro.callout": "Our standard is simple: help educators complete scheduling and reporting accurately in minutes.",
      "aboutPage.h1": "Why We Build",
      "aboutPage.p1": "Master timetables, morning relief assignments, and official One Page Reports demand precision on tight schedules.",
      "aboutPage.p2": "Our software replaces manual table formatting and conflict checks with automated, print-ready workflows.",
      "aboutPage.h2": "Core Principles",
      "aboutPage.li1": "Clarity First: Clean interfaces usable immediately on day one.",
      "aboutPage.li2": "School Accuracy: Engineered around real Malaysian school periods and report formats.",
      "aboutPage.li3": "Fast Access: Direct digital license and guide delivery via email.",
      "aboutPage.li4": "Steady Refinement: Continuous updates shaped by real staffroom needs.",
      "aboutPage.h3": "Growing Suite",
      "aboutPage.p3": "Alongside STiM, e-GGs (e-Guru Ganti Sekolah), and e-OPR, new digital tools are actively built for modern educators.",
      "aboutPage.cta1": "View Products",
      "aboutPage.cta2": "Contact Us",

      /* FAQ Page */
      "faqPage.title": "Frequently Asked Questions",
      "faqPage.lead": "Concise answers on licensing, secure payments, and digital delivery.",
      "faqPage.side.index": "Help Desk",
      "faqPage.side.title": "Ordering & Support",
      "faqPage.side.lead": "Need school-level licensing details? Reach out to our team.",
      "faqPage.side.boxTitle": "Direct Support",
      "faqPage.side.boxDesc": "We assist with school quotations and system compatibility.",

      /* Contact Page */
      "contactPage.breadcrumb": "Contact",
      "contactPage.title": "Contact & Licensing",
      "contactPage.lead": "Direct support for school software licensing, quotations, and technical inquiries.",
      "contactPage.left.index": "Direct Channels",
      "contactPage.left.title": "Support Desk",
      "contactPage.left.desc": "Ready to assist individual teachers, timetable coordinators, and school administrators.",
      "contactPage.emailCard.title": "Official Email",
      "contactPage.emailCard.desc": "For licensing, quotations, and technical help:",
      "contactPage.hoursCard.title": "Operating Hours",
      "contactPage.hoursCard.desc": "Mon – Fri: 9:00 AM – 5:00 PM (MYT). Replies within 1–2 business days.",
      "contactPage.form.title": "Send Inquiry",
      "contactPage.form.desc": "Complete the short form below to email our support desk directly.",
      "contactPage.form.name": "Full Name / School",
      "contactPage.form.namePh": "e.g. Cikgu Ahmad · SK Taman Jaya",
      "contactPage.form.email": "Email Address",
      "contactPage.form.emailPh": "name@moe-dl.edu.my or personal email",
      "contactPage.form.topic": "Topic",
      "contactPage.form.optLicensing": "Product Order & School Licensing",
      "contactPage.form.optSupport": "Technical Support & Access Recovery",
      "contactPage.form.optUpcoming": "Upcoming Product Notification",
      "contactPage.form.optGeneral": "General Inquiry",
      "contactPage.form.message": "Message",
      "contactPage.form.messagePh": "Specify the product (STiM, e-GGs, e-OPR) or your question...",
      "contactPage.form.submit": "Send Email Inquiry",
      "contactPage.form.prefill": "Hello Cikgu Jay Resources,\n\nI would like to order / inquire about ",
      "contactPage.form.readyStrong": "Email draft ready.",
      "contactPage.form.readyBody": "Opening your email app to jaypah2@gmail.com. If it did not open,",
      "contactPage.form.readyLink": "click here",

      /* Legal Pages */
      "privacyPage.title": "Privacy Policy",
      "privacyPage.lead": "How we handle customer contact and software licensing records.",
      "privacyPage.h1": "1. Collected Details",
      "privacyPage.p1": "We collect only your name, email, school name, and transaction reference to deliver licenses and provide support.",
      "privacyPage.h2": "2. Payment Security",
      "privacyPage.p2": "Payments are processed externally via licensed gateways (Billplz / BCL, ToyyibPay, CHIP). No banking or card credentials are stored here.",
      "privacyPage.h3": "3. Usage",
      "privacyPage.li1": "Delivering digital software links, licenses, and user guides.",
      "privacyPage.li2": "Providing technical support and license recovery.",
      "privacyPage.li3": "Sending essential updates for licensed products.",
      "privacyPage.h4": "4. Data Confidentiality",
      "privacyPage.p4": "Customer and school contact records are never sold or shared with third parties.",
      "privacyPage.h5": "5. Contact",
      "privacyPage.p5": "Email privacy inquiries directly to jaypah2@gmail.com.",

      "termsPage.title": "Terms & Conditions",
      "termsPage.lead": "Software licensing and copyright terms for Cikgu Jay Resources.",
      "termsPage.h1": "1. Software License",
      "termsPage.p1": "Each purchase grants a non-exclusive, non-transferable license for the registered educator or single school.",
      "termsPage.h2": "2. Copyright & Redistribution",
      "termsPage.p2": "Reselling, public uploading, or unauthorized redistribution of Cikgu Jay Resources software and images is strictly prohibited.",
      "termsPage.h3": "3. Digital Delivery",
      "termsPage.p3": "Access links are delivered via email upon verified payment confirmation.",
      "termsPage.h4": "4. Technical Support",
      "termsPage.p4": "Official support is provided to verified license holders within stated browser compatibility standards."
    }
  };

  function getSavedLang() {
    try {
      const saved = window.localStorage.getItem(STORAGE_KEY);
      if (saved === "ms" || saved === "en") return saved;
    } catch (_) {}
    return DEFAULT_LANG;
  }

  let currentLang = getSavedLang();

  function t(key) {
    const dict = translations[currentLang] || translations[DEFAULT_LANG];
    return dict[key] !== undefined ? dict[key] : (translations[DEFAULT_LANG][key] || key);
  }

  function applyTranslations(lang) {
    currentLang = lang === "en" ? "en" : "ms";
    try {
      window.localStorage.setItem(STORAGE_KEY, currentLang);
    } catch (_) {}

    document.documentElement.setAttribute("lang", currentLang);

    const titleKey = document.body ? document.body.getAttribute("data-i18n-title") : null;
    if (titleKey && translations[currentLang][titleKey]) {
      document.title = translations[currentLang][titleKey];
    }

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      const val = t(key);
      if (val !== undefined) {
        el.textContent = val;
      }
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
      const key = el.getAttribute("data-i18n-placeholder");
      const val = t(key);
      if (val !== undefined) {
        el.setAttribute("placeholder", val);
      }
    });

    document.querySelectorAll("[data-i18n-aria]").forEach((el) => {
      const key = el.getAttribute("data-i18n-aria");
      const val = t(key);
      if (val !== undefined) {
        el.setAttribute("aria-label", val);
      }
    });

    document.querySelectorAll("[data-lang-switch]").forEach((btn) => {
      const targetLang = btn.getAttribute("data-lang-switch");
      const active = targetLang === currentLang;
      btn.classList.toggle("is-active", active);
      btn.setAttribute("aria-pressed", active ? "true" : "false");
    });

    document.dispatchEvent(
      new CustomEvent("cjr:langchange", { detail: { lang: currentLang } })
    );
  }

  function initLangSwitchers() {
    document.addEventListener("click", function (e) {
      const btn = e.target.closest("[data-lang-switch]");
      if (!btn) return;
      const nextLang = btn.getAttribute("data-lang-switch");
      if (nextLang && nextLang !== currentLang) {
        applyTranslations(nextLang);
      }
    });

    applyTranslations(currentLang);
  }

  window.CJR = window.CJR || {};
  window.CJR.i18n = {
    getLang: function () {
      return currentLang;
    },
    setLang: applyTranslations,
    t: t
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initLangSwitchers);
  } else {
    initLangSwitchers();
  }
})();

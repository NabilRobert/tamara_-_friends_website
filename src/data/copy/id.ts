import type { CopyShape } from '../../types/content'

export const id: CopyShape = {
  meta: {
    title: 'Tamara and Friends — Sales and Marketing Automation Squad',
    description:
      'Satu pasukan agentic AI penuh yang membangun bisnis dan sales Anda secara otomatis 24 jam. Powered by Beobot.',
  },

  header: {
    navItems: [
      { id: 'ringkasan', label: 'Ringkasan' },
      { id: 'squad', label: 'Squad AI' },
      { id: 'bukti', label: 'Bukti Hasil' },
      { id: 'layanan', label: 'Layanan' },
      { id: 'kontak', label: 'Kontak' },
    ],
    ctaLabel: 'Jadwalkan Demo',
    languageToggleLabel: 'Ganti Bahasa',
  },

  hero: {
    badge: '#AntiBoncosClub',
    title: 'Tamara and Friends',
    subtitle: 'Sales and Marketing Automation Squad',
    description:
      'Satu pasukan agentic AI penuh yang membangun bisnis dan sales Anda secara otomatis 24 jam!',
    ctaPrimary: 'Jadwalkan Demo',
    ctaSecondary: 'Audit Gratis',
  },

  executiveSummary: {
    eyebrow: 'EXECUTIVE SUMMARY',
    title: 'Satu Ekosistem End-to-End, Bukan Sekadar Tools Terpisah',
    description:
      'Kebanyakan platform sejenis hanya mengerjakan satu bagian — ads saja, atau CRM saja. Tamara and Friends menjalankan seluruh perjalanan dari promosi sampai closing secara otomatis, dan benar-benar menghasilkan sales.',
    steps: [
      {
        icon: 'megaphone',
        label: 'PROMOTION',
        title: 'Tamara AI',
        description: 'Menjalankan iklan Meta Ads secara otomatis & efisien',
      },
      {
        icon: 'trendingUp',
        label: 'LEADS GENERATION',
        title: 'Tamara AI',
        description: 'Menghasilkan leads dalam jumlah besar dari iklan yang berjalan',
      },
      {
        icon: 'zap',
        label: 'SALES CONVERSION',
        title: 'Jessy AI',
        description: 'Membangkitkan chat & closing prospek jadi transaksi nyata',
      },
      {
        icon: 'database',
        label: 'CRM MANAGEMENT',
        title: 'Salma AI',
        description: 'Mengelola & membangunkan database jadi pembeli berulang',
      },
    ],
    resultLabel: 'HASIL AKHIR',
    resultText: 'Prospek Menjadi Actual Customer, Menghasilkan Actual Sales — Semua Berjalan Otomatis',
  },

  comparison: {
    eyebrow: 'APA YANG MEMBEDAKAN',
    title: 'Platform Sejenis vs Tamara and Friends',
    description:
      'Kebanyakan platform ads atau CRM cuma jago di satu titik. Tamara and Friends menutup seluruh funnel.',
    themLabel: 'PLATFORM SEJENIS',
    themItems: [
      'Cuma handle satu bagian: ads ATAU CRM ATAU chatbot',
      'Tools terpisah-pisah, data tidak saling terhubung',
      'Leads masuk, tapi konversi ke sales tetap manual',
      'Prospek gampang hilang di tengah jalan',
    ],
    usLabel: 'TAMARA AND FRIENDS',
    usItems: [
      'End-to-end: promosi, leads, closing, CRM dalam satu ekosistem',
      '3 AI spesialis yang saling terhubung dan bekerja sama',
      'Prospek otomatis dikonversi jadi actual customer',
      'Berjalan otomatis 24/7, menghasilkan actual sales',
    ],
  },

  agentSquad: {
    eyebrow: 'SQUAD AI',
    title: 'Kenalan dengan Squad Tamara and Friends',
    description:
      'Tiga AI spesialis yang bekerja sama — dari menjalankan iklan, menutup penjualan, sampai membangunkan database customer lama Anda.',
    agents: [
      {
        id: 'tamara',
        name: 'Tamara',
        role: 'Meta Ads Manager',
        badge: 'LEADS GENERATION MACHINE',
        tagline: 'Meta Ads Manager · 100% Full Autonomous Agentic AI',
        description:
          'Tamara adalah promotion and leads generation machine — Meta Ads Manager berbasis Agentic AI yang menjalankan promosi dan mengelola iklan Meta Ads Anda secara otomatis dan efisien, menghasilkan leads dalam jumlah besar untuk bisnis Anda. Dengan implementasi CAPI, algoritma iklan makin akurat dan sales conversion terus meningkat.',
        bullets: ['Setup Campaign', 'Optimasi Iklan', 'Lead Qualification', 'Sales Follow-up', 'Proses Closing'],
        quote: 'Rekonsiliasi penuh & strategi disusun dalam kurang dari 30 detik — sebelum satu pun ad setting diubah.',
        statBadges: [
          { value: '24/7', label: 'Aktif Memantau' },
          { value: 'Human', label: 'Approval Loop' },
        ],
      },
      {
        id: 'jessy',
        name: 'Jessy',
        role: 'Sales AI',
        badge: 'THE SALES CLOSING MACHINE',
        tagline: 'Sales AI · Conversation Reactivation Specialist',
        description:
          'Jessy adalah AI khusus sales closing — kemampuannya adalah membangunkan kembali chat dan komunikasi yang sudah tertidur, bahkan yang dianggap sudah mati sekalipun, menjadi percakapan closing baru.',
        bullets: [
          'Deteksi chat WhatsApp/DM yang berhenti di tengah jalan',
          'Follow-up otomatis dengan pesan yang terasa personal, bukan template',
          'Membaca ulang histori chat untuk menyambung konteks secara natural',
          'Mengubah chat yang dianggap mati menjadi closing baru',
        ],
        quote: 'Chat yang berhenti bukan berarti selesai — hanya menunggu kalimat pembuka yang tepat.',
        statBadges: [
          { value: '0', label: 'Chat Dibiarkan Dingin' },
          { value: '24/7', label: 'Follow-up Otomatis' },
        ],
      },
      {
        id: 'salma',
        name: 'Salma',
        role: 'CRM AI',
        badge: 'THE DATABASE REVIVAL MACHINE',
        tagline: 'CRM AI · Database Reactivation Specialist',
        description:
          'Salma adalah AI CRM yang diajak Tamara untuk membangunkan seluruh database customer perusahaan Anda yang selama ini tertidur atau dianggap sudah mati — mengubahnya menjadi pembeli potensial kembali.',
        bullets: [
          'Segmentasi otomatis seluruh database customer lama berdasarkan potensi',
          'Kampanye reaktivasi personal untuk mendorong direct purchase',
          'Deteksi peluang up-selling ke customer existing',
          'Deteksi peluang cross-selling ke produk atau lini bisnis lain',
        ],
        quote: 'Database yang tidur bukan aset mati — itu penjualan yang belum dibangunkan.',
        statBadges: [
          { value: 'Multi', label: 'WhatsApp, SMS, Email, Call' },
          { value: 'Auto', label: 'Skor & Rute ke Sales Rep' },
        ],
      },
    ],
  },

  proof: {
    eyebrow: 'BUKTI NYATA — DSS MOTOR (MITSUBISHI)',
    title: 'Hasil di Lapangan, Bukan Sekadar Klaim',
    subtitle: 'Total belanja iklan dikelola, 1 – 6 Agustus 2026',
    stats: [
      { value: 'Rp34.87jt', label: 'Total belanja iklan dikelola' },
      { value: '3.653', label: 'Total lead dihasilkan' },
      { value: 'Rp9.545', label: 'Biaya rata-rata per lead' },
      { value: '47 / 89', label: 'Campaign & Iklan dipantau otomatis' },
    ],
    comparisons: [
      { label: 'Belanja Iklan', before: 'Rp6.9jt', after: 'Rp4.9jt', change: '↓ 40,3% lebih hemat' },
      { label: 'Lead Masuk', before: '635 lead', after: '665 lead', change: '↑ 30 lead lebih banyak' },
    ],
    conclusionLabel: 'Kesimpulan',
    conclusionText: 'Spend turun, hasil naik — efisiensi murni dari optimasi AI.',
  },

  trust: {
    eyebrow: 'OTONOM, TAPI BUKAN TANPA KENDALI',
    title: 'Anda Tetap Pegang Persetujuan Akhir',
    description:
      'Setiap rekomendasi besar — mematikan campaign, menggeser budget, mengubah target — melewati approval Anda dulu. Tamara mengusulkan dengan data, Anda yang memutuskan.',
    steps: [
      {
        number: 1,
        title: 'Tamara mendeteksi anomali',
        description: 'Campaign boros, CPL melonjak, atau lead berkualitas rendah terdeteksi otomatis.',
      },
      {
        number: 2,
        title: 'Rekomendasi diajukan',
        description: 'Lengkap dengan alasan, data pendukung, dan estimasi penghematan.',
      },
      {
        number: 3,
        title: 'Anda Setujui / Tolak',
        description: 'Satu tap. Tidak ada aksi otomatis tanpa persetujuan Anda untuk keputusan besar.',
      },
    ],
    exampleCard: {
      statusLabel: 'Matikan',
      title: 'Matikan #C024 — kredit mobil syariah Mobix (15 Jul 26)',
      subtitle: 'Rp86.602/chat terlalu mahal · belanja Rp1.299.037',
      campaignLabel: 'Kampanye',
      campaignValue: 'Meta-Website-Leads-Mobix',
      adsetLabel: 'Ad Set',
      adsetValue: 'All Branch - Used Car',
      accountLabel: 'Akun',
      accountValue: 'act_752604553578354',
      saveLabel: 'Hemat',
      saveValue: 'Rp1.299.037',
      rejectLabel: 'Tolak',
      approveLabel: 'Setujui',
    },
  },

  services: {
    eyebrow: 'LAYANAN KAMI',
    title: 'Tiga Cara Tamara and Friends Menumbuhkan Bisnis Anda',
    description:
      'Dari menjalankan iklan harian sampai membangunkan customer lama — pilih layanan sesuai kebutuhan bisnis Anda.',
    items: [
      {
        icon: 'megaphone',
        label: 'LAYANAN 1',
        title: 'Meta Ads Agency',
        description:
          'Tim Tamara AI langsung turun tangan menjalankan iklan Meta Ads Anda — fokus pada efektivitas campaign & optimalisasi budget setiap hari.',
      },
      {
        icon: 'settings',
        label: 'LAYANAN 2',
        title: 'Ads Automation System',
        description:
          'Beobot menyewakan atau menjual sistem Tamara ke perusahaan yang ingin punya mesin ads automation sendiri, dijalankan tim internal.',
      },
      {
        icon: 'database',
        label: 'LAYANAN 3',
        title: 'CRM Implementation',
        description:
          'Tamara mengajak Salma AI membangunkan seluruh database customer Anda yang selama ini tertidur — menjadi peluang penjualan baru.',
      },
    ],
  },

  goodFitFor: {
    eyebrow: 'COCOK UNTUK',
    title: 'Siapa Saja yang Butuh Leads, Closing, atau Customer Aktif Lagi',
    description: 'Pilih AI yang paling sesuai kebutuhan bisnis Anda.',
    items: [
      { icon: 'car', label: 'Dealer Otomotif', description: 'Mobil baru & bekas, multi-cabang' },
      { icon: 'landmark', label: 'Multifinance', description: 'Leasing & pembiayaan kendaraan' },
      { icon: 'store', label: 'UMKM & Retail', description: 'Volume lead tinggi, tim kecil' },
      { icon: 'shoppingCart', label: 'E-commerce', description: 'Leads masuk deras, closing harus cepat' },
      { icon: 'building2', label: 'Properti', description: 'Lead bernilai tinggi, siklus panjang' },
    ],
    footnote:
      'Syarat utama: bisnis Anda ingin lebih banyak leads, closing lebih cepat, atau database customer yang aktif kembali — pilih AI yang paling sesuai kebutuhan Anda.',
  },

  whyUs: {
    eyebrow: 'KENAPA TAMARA AND FRIENDS',
    title: 'Bukan Sekadar Dashboard, Ini Squad yang Bekerja',
    items: [
      { icon: 'bot', title: '100% Agentic', description: 'Mengeksekusi keputusan, bukan cuma menyajikan laporan.' },
      {
        icon: 'shield',
        title: 'Human-in-the-Loop',
        description: 'Anda tetap approve setiap keputusan besar — aman & terkendali.',
      },
      {
        icon: 'gauge',
        title: 'Analisa < 30 Detik',
        description: 'Rekonsiliasi & strategi disusun sebelum satu pun ad setting diubah.',
      },
      {
        icon: 'messagesSquare',
        title: 'Full Squad',
        description: 'Ads, closing, sampai reaktivasi database — satu tim, banyak kekuatan.',
      },
      {
        icon: 'checkCircle',
        title: 'Terbukti di Lapangan',
        description: 'Sudah dipakai & menghasilkan efisiensi nyata di DSS Motor (Mitsubishi).',
      },
    ],
  },

  ctaFooter: {
    eyebrow: 'SIAP MULAI?',
    title: 'Biarkan Tamara and Friends Bekerja Malam Ini Juga.',
    description:
      'Mulai dari audit gratis, lalu lihat sendiri berapa banyak yang bisa dihemat — dan berapa banyak chat & customer tidur yang bisa dibangunkan kembali.',
    ctaPrimary: 'Jadwalkan Demo',
    ctaSecondary: 'Audit Gratis',
    contactName: 'John — Sales Marketing Tamara AI',
    aboutHeading: 'TENTANG BEOBOT',
    aboutDescription:
      'Beobot adalah perusahaan pembuat Agentic AI dan robotic yang sudah berpengalaman bertahun-tahun membangun teknologi otomasi untuk bisnis di Indonesia.',
    servicesLabel: 'LAYANAN KAMI',
    services: [
      { icon: 'brain', label: 'Agentic AI' },
      { icon: 'zap', label: 'Ads Automation' },
      { icon: 'database', label: 'Autopilot CRM' },
      { icon: 'bot', label: 'Robotic' },
      { icon: 'mic', label: 'Voice AI' },
      { icon: 'eye', label: 'Smart Vision' },
    ],
  },

  footer: {
    tagline: 'Satu pasukan agentic AI penuh yang membangun bisnis dan sales Anda secara otomatis 24 jam.',
    navHeading: 'Navigasi',
    legalHeading: 'Legal',
    contactHeading: 'Kontak',
    rightsReservedPrefix: '© 2026 Tamara and Friends · Powered by ',
    rightsReservedSuffix: '. Semua hak dilindungi.',
  },

  legal: {
    terms: {
      eyebrow: 'LEGAL',
      title: 'Syarat & Ketentuan',
      lastUpdated: 'Terakhir diperbarui: 7 Oktober 2026',
      intro:
        'Dengan mengakses dan menggunakan website Tamara and Friends, Anda menyetujui syarat & ketentuan berikut.',
      sections: [
        {
          heading: 'Layanan yang Disediakan',
          body: [
            {
              type: 'paragraph',
              text: 'Tamara and Friends adalah produk agentic AI untuk otomasi sales dan marketing — mencakup Tamara AI (Meta Ads automation), Jessy AI (sales closing), dan Salma AI (CRM reactivation) — dikembangkan dan dioperasikan oleh Beobot. Informasi di website ini bersifat umum dan dapat berubah sewaktu-waktu tanpa pemberitahuan terlebih dahulu.',
            },
          ],
        },
        {
          heading: 'Kewajiban Pengguna',
          body: [
            {
              type: 'paragraph',
              text: 'Dengan menggunakan website ini, Anda setuju untuk tidak menyalahgunakan konten atau layanan yang tersedia, termasuk mencoba mengakses sistem kami tanpa izin.',
            },
          ],
        },
        {
          heading: 'Human-in-the-Loop & Persetujuan',
          body: [
            {
              type: 'paragraph',
              text: 'Tamara and Friends beroperasi secara otonom namun tetap memerlukan persetujuan Anda untuk setiap keputusan besar seperti mematikan campaign, menggeser budget, atau mengubah target. Anda bertanggung jawab atas keputusan akhir yang disetujui melalui sistem kami.',
            },
          ],
        },
        {
          heading: 'Kekayaan Intelektual',
          body: [
            {
              type: 'paragraph',
              text: 'Seluruh konten di website ini — termasuk teks, logo, dan desain — adalah milik Beobot dan dilindungi hukum yang berlaku. Konten tidak boleh disalin atau digunakan kembali tanpa izin tertulis dari kami.',
            },
          ],
        },
        {
          heading: 'Batasan Tanggung Jawab',
          body: [
            {
              type: 'paragraph',
              text: 'Kami berupaya menjaga informasi di website ini tetap akurat, namun tidak memberikan jaminan penuh atas kelengkapan atau ketepatannya. Hasil performa iklan (seperti pada studi kasus DSS Motor) adalah hasil aktual klien dan tidak menjamin hasil yang sama untuk setiap bisnis.',
            },
          ],
        },
        {
          heading: 'Perubahan Layanan',
          body: [
            {
              type: 'paragraph',
              text: 'Kami berhak mengubah, menghentikan, atau memperbarui layanan dan konten website ini kapan saja tanpa pemberitahuan sebelumnya.',
            },
          ],
        },
        {
          heading: 'Hukum yang Berlaku',
          body: [
            {
              type: 'paragraph',
              text: 'Syarat & ketentuan ini diatur oleh dan ditafsirkan sesuai dengan hukum yang berlaku di Republik Indonesia.',
            },
          ],
        },
      ],
      contactHeading: 'Kontak',
      contactIntro: 'Pertanyaan seputar syarat & ketentuan ini dapat diajukan melalui WhatsApp kami di',
    },

    privacy: {
      eyebrow: 'LEGAL',
      title: 'Kebijakan Privasi',
      lastUpdated: 'Terakhir diperbarui: 7 Oktober 2026',
      intro:
        'Tamara and Friends (dioperasikan oleh Beobot) menghormati privasi setiap pengunjung website ini. Kebijakan ini menjelaskan informasi apa yang kami kumpulkan, bagaimana kami menggunakannya, dan hak Anda terkait data tersebut.',
      sections: [
        {
          heading: 'Informasi yang Kami Kumpulkan',
          body: [
            {
              type: 'paragraph',
              text: 'Saat Anda menghubungi kami melalui WhatsApp di halaman ini, kami menerima informasi yang Anda berikan secara langsung — seperti nama, nomor telepon, nama perusahaan, dan isi pesan Anda. Kami juga dapat mengumpulkan data teknis dasar (seperti alamat IP dan jenis perangkat) serta menggunakan cookie atau alat pengukuran iklan seperti Meta Pixel dan Conversion API (CAPI) untuk memahami performa website dan iklan kami.',
            },
          ],
        },
        {
          heading: 'Dasar Hukum Pemrosesan Data',
          body: [
            {
              type: 'paragraph',
              text: 'Kami memproses data pribadi berdasarkan persetujuan Anda saat menghubungi kami, kepentingan sah kami dalam menjalankan dan meningkatkan website ini, dan kewajiban hukum yang berlaku bagi kami sebagai pelaku usaha.',
            },
          ],
        },
        {
          heading: 'Bagaimana Kami Menggunakan Informasi',
          body: [
            {
              type: 'list',
              items: [
                'Merespons pertanyaan atau permintaan demo/audit yang Anda kirimkan',
                'Menjalankan dan mengoptimalkan campaign iklan atas nama Anda, bila Anda menggunakan layanan Meta Ads Agency kami',
                'Mengukur dan meningkatkan performa website serta kampanye iklan',
                'Memenuhi kewajiban hukum bila diperlukan',
              ],
            },
          ],
        },
        {
          heading: 'Penggunaan Platform Meta',
          body: [
            {
              type: 'paragraph',
              text: 'Website dan layanan ini menggunakan alat dari Meta (Facebook & Instagram), termasuk Meta Pixel dan Conversion API (CAPI), untuk mengukur dan meningkatkan efektivitas iklan sesuai dengan kebijakan Meta. Jika Anda datang ke website ini melalui iklan atau berinteraksi dengan tombol WhatsApp di Facebook/Instagram, Meta dapat menerima data terbatas terkait interaksi tersebut sebagaimana diatur dalam kebijakan privasi Meta sendiri.',
            },
          ],
        },
        {
          heading: 'Berbagi Informasi',
          body: [
            {
              type: 'paragraph',
              text: 'Kami tidak menjual data pribadi Anda. Informasi dapat dibagikan dengan penyedia layanan yang kami gunakan untuk menjalankan website dan layanan ini, seperti platform hosting, Meta (untuk pengukuran iklan), dan WhatsApp (untuk komunikasi langsung), atau bila diwajibkan oleh hukum.',
            },
          ],
        },
        {
          heading: 'Cookie & Teknologi Pelacakan',
          body: [
            {
              type: 'paragraph',
              text: 'Website ini dapat menggunakan cookie dan teknologi serupa untuk mengukur performa iklan dan trafik website. Anda dapat menonaktifkan cookie melalui pengaturan browser Anda kapan saja.',
            },
          ],
        },
        {
          heading: 'Retensi Data',
          body: [
            {
              type: 'paragraph',
              text: 'Kami menyimpan data pribadi Anda hanya selama diperlukan untuk tujuan yang dijelaskan dalam kebijakan ini, atau selama diwajibkan oleh hukum. Setelah itu, data akan dihapus atau dianonimkan.',
            },
          ],
        },
        {
          heading: 'Hak Anda',
          body: [
            {
              type: 'paragraph',
              text: 'Anda berhak meminta akses, koreksi, pembatasan, atau penghapusan data pribadi yang kami simpan tentang Anda. Lihat halaman Penghapusan Data kami untuk cara mengajukan permintaan penghapusan, atau hubungi kami langsung melalui WhatsApp untuk permintaan lain.',
            },
          ],
        },
        {
          heading: 'Tautan ke Situs Pihak Ketiga',
          body: [
            {
              type: 'paragraph',
              text: 'Website ini dapat berisi tautan ke situs pihak ketiga. Kami tidak bertanggung jawab atas praktik privasi atau konten situs-situs tersebut.',
            },
          ],
        },
        {
          heading: 'Privasi Anak-Anak',
          body: [
            {
              type: 'paragraph',
              text: 'Website ini tidak ditujukan untuk anak-anak di bawah 18 tahun. Jika kami secara tidak sengaja mengumpulkan data dari anak-anak, kami akan menghapusnya segera setelah mengetahuinya.',
            },
          ],
        },
        {
          heading: 'Keamanan Data',
          body: [
            {
              type: 'paragraph',
              text: 'Kami menerapkan langkah-langkah wajar untuk melindungi informasi Anda, namun tidak ada metode transmisi atau penyimpanan data yang sepenuhnya bebas risiko.',
            },
          ],
        },
        {
          heading: 'Perubahan Kebijakan',
          body: [
            {
              type: 'paragraph',
              text: 'Kami dapat memperbarui kebijakan ini dari waktu ke waktu. Perubahan akan berlaku sejak dipublikasikan di halaman ini.',
            },
          ],
        },
      ],
      contactHeading: 'Kontak',
      contactIntro: 'Pertanyaan seputar kebijakan privasi ini dapat diajukan melalui WhatsApp kami di',
    },

    dataDeletion: {
      eyebrow: 'LEGAL',
      title: 'Penghapusan Data',
      lastUpdated: 'Terakhir diperbarui: 7 Oktober 2026',
      intro:
        'Anda berhak meminta penghapusan data pribadi yang Tamara and Friends (Beobot) simpan tentang Anda, secara gratis dan tanpa syarat, sesuai dengan ketentuan perlindungan data yang berlaku di Indonesia.',
      sections: [
        {
          heading: 'Cara Mengajukan Permintaan',
          body: [
            {
              type: 'paragraph',
              text: 'Kirim pesan melalui WhatsApp kami dengan judul "Permintaan Penghapusan Data Pribadi", sertakan nama lengkap dan nomor telepon yang terdaftar saat Anda menghubungi kami.',
            },
          ],
        },
        {
          heading: 'Informasi yang Perlu Disertakan',
          body: [
            {
              type: 'list',
              items: [
                'Nama lengkap',
                'Nomor telepon yang terdaftar saat menghubungi kami',
                'Nama perusahaan (jika berkaitan dengan komunikasi bisnis)',
                'Keterangan data yang ingin dihapus (opsional, jika hanya sebagian)',
              ],
            },
          ],
        },
        {
          heading: 'Proses Penghapusan',
          body: [
            {
              type: 'list',
              ordered: true,
              items: [
                'Kami menerima dan mencatat permintaan Anda',
                'Kami memverifikasi identitas pemohon',
                'Kami mencari dan mengidentifikasi data terkait',
                'Data dihapus secara permanen dari sistem kami',
                'Kami mengirimkan konfirmasi tertulis setelah selesai',
              ],
            },
            {
              type: 'paragraph',
              text: 'Target waktu penyelesaian adalah 14 hari kerja sejak permintaan diterima dan identitas terverifikasi.',
            },
          ],
        },
        {
          heading: 'Data yang Dapat Dihapus',
          body: [
            {
              type: 'paragraph',
              text: 'Ini mencakup informasi kontak, riwayat komunikasi dengan kami, dan data lain yang kami kumpulkan langsung dari Anda sebagaimana dijelaskan di Kebijakan Privasi.',
            },
          ],
        },
        {
          heading: 'Pengecualian',
          body: [
            {
              type: 'paragraph',
              text: 'Dalam kondisi tertentu, kami dapat menyimpan sebagian data bila diwajibkan oleh hukum, diperlukan untuk menyelesaikan sengketa, atau data tersebut telah dianonimkan sehingga tidak lagi dapat diidentifikasi ke Anda secara pribadi.',
            },
          ],
        },
        {
          heading: 'Data dari Platform Meta',
          body: [
            {
              type: 'paragraph',
              text: 'Data yang tersimpan langsung di Facebook atau Instagram (misalnya riwayat interaksi Anda dengan iklan) berada di luar kendali kami dan perlu diajukan langsung melalui pengaturan privasi atau pusat bantuan Meta. Data terkait Anda yang kami terima dari Meta akan kami hapus mengikuti proses di atas begitu permintaan Anda terverifikasi.',
            },
          ],
        },
      ],
      contactHeading: 'Pertanyaan Lanjutan',
      contactIntro: 'Pertanyaan seputar proses penghapusan data dapat diajukan melalui WhatsApp kami di',
    },
  },

  notFound: {
    title: 'Halaman Tidak Ditemukan',
    description: 'Halaman yang Anda cari tidak tersedia atau sudah dipindahkan.',
    ctaLabel: 'Kembali ke Beranda',
  },

  whatsappWidget: {
    ariaLabel: 'Chat via WhatsApp',
    title: 'Tamara and Friends',
    description: 'Ada pertanyaan? Kami siap bantu lewat WhatsApp.',
    message: 'Halo, saya ingin bertanya tentang Tamara and Friends',
    chatLabel: 'Mulai Chat',
  },
}

export interface NewsArticle {
  id: number;
  slug: string;
  category: string;
  categoryKey: string;
  imageSrc: string;
  imageAlt: string;
  date: string;
  readTime: string;
  title: string;
  description: string;
  author: string;
  authorRole: string;
  content: string[];
  quote?: {
    text: string;
    speaker: string;
  };
  tags: string[];
}

export const allNewsArticles: NewsArticle[] = [
  {
    id: 1,
    slug: "siswa-skiis-sabet-medali-emas-olimpiade-sains-robotika",
    category: "Prestasi",
    categoryKey: "prestasi",
    imageSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuADxdlSdcfLIou-9D78BYDeD88uxsQ9Df27LClBOHKIAoi5qV_4sVRDlZTJsWvY7VPsr1orKxPumxPhnpsUQs-bSIKCB5i0KHYCexI4UlOFdpYT__C9AZm6__YF5WX-leT-KIl5t17srwCdPDEPpW9_VReiQ8euar40HWpGZu0AfOdELVrkvbWpACcVtWPFfpHrPaIosSu3ZwWBos21uWAN9ktqtu9uORZzo0rxNzg2fMD2NQxBuAnTWQ",
    imageAlt: "Siswa SKIIS Sabet Medali Emas Olimpiade Sains Nasional",
    date: "15 Oktober 2024",
    readTime: "4 min baca",
    title: "Siswa SKIIS Sabet Medali Emas Olimpiade Sains Nasional & Robotika",
    description: "Dedikasi dan kerja keras membuahkan hasil membanggakan. Siswa Sunan Kudus International Islamic School berhasil meraih medali emas dalam kompetisi sains dan inovasi teknologi nasional.",
    author: "Ust. Rahmat Hidayat, M.Pd.",
    authorRole: "Koordinator Pembina Prestasi SKIIS",
    content: [
      "Keluarga besar Yayasan Pendidikan Pesantren Sunan Kudus (YP2SK) kembali menorehkan prestasi gemilang di kancah nasional. Siswa Sunan Kudus International Islamic School (SKIIS) berhasil meraih Medali Emas pada perhelatan Olimpiade Sains dan Teknologi Nasional 2024 yang diselenggarakan di Jakarta.",
      "Kompetisi bergengsi ini diikuti oleh lebih dari 500 peserta dari berbagai sekolah unggulan di seluruh Indonesia. Tim robotika dan sains SKIIS mempresentasikan karya inovasi 'Smart Irrigation System Berbasis IoT dan Etika Konservasi Air Syariah', yang dinilai para juri sangat orisinal, aplikatif, dan memiliki dampak nyata bagi pelestarian lingkungan.",
      "Kepala Sekolah SKIIS menyampaikan rasa syukur mendalam atas pencapaian ini. Keberhasilan ini membuktikan bahwa integrasi kurikulum sains modern dengan penanaman nilai-nilai kepesantrenan mampu melahirkan generasi Ulul Albab yang berdaya saing tinggi tanpa kehilangan jati diri keislaman.",
      "Pihak yayasan senantiasa memberikan fasilitas laboratorium canggih serta bimbingan intensif bagi setiap siswa yang memiliki minat dan bakat di bidang sains, matematika, teknologi, maupun riset sosial keagamaan."
    ],
    quote: {
      text: "Prestasi ini adalah bukti bahwa anak-anak yang dibekali adab Qur'ani memiliki ketekunan dan kejujuran ilmiah yang luar biasa dalam berinovasi.",
      speaker: "Ust. Rahmat Hidayat, M.Pd."
    },
    tags: ["Olimpiade", "Sains", "SKIIS", "Prestasi", "Teknologi"]
  },
  {
    id: 2,
    slug: "wisuda-tasmi-30-juz-santri-ponpes-tahfidz-sunan-kudus",
    category: "Pesantren",
    categoryKey: "pesantren",
    imageSrc: "/images/ponpes_santri.jpg",
    imageAlt: "Wisuda Tasmi' 30 Juz Santri Ponpes Tahfidz Sunan Kudus",
    date: "12 Oktober 2024",
    readTime: "5 min baca",
    title: "Wisuda Tasmi' 30 Juz Santri Ponpes Tahfidz Sunan Kudus Berlangsung Khidmat",
    description: "Sebanyak 15 santri putra berhasil menyelesaikan ujian tasmi' Al-Qur'an 30 juz sekali duduk dengan predikat Mumtaz di hadapan dewan penguji dan disaksikan orang tua penuh rasa haru.",
    author: "Ust. Ahmad Fauzan, Al-Hafizh",
    authorRole: "Pengasuh Ponpes Tahfidz Sunan Kudus",
    content: [
      "Suasana haru dan penuh keberkahan menyelimuti Masjid Jami' Pesantren Sunan Kudus pada Sabtu pagi. Sebanyak 15 santri putra secara resmi dinyatakan lulus dalam wisuda Tasmi' Al-Qur'an 30 Juz Bil-Ghoib Sekali Duduk setelah melalui pembinaan intensif selama beberapa tahun.",
      "Ujian tasmi' sekali duduk merupakan standar mutu tertinggi di Pondok Pesantren Tahfidz Al-Qur'an Sunan Kudus. Para santri memperdengarkan seluruh hafalan dari Juz 1 hingga Juz 30 tanpa melihat mushaf di hadapan majelis asatidz bersanad.",
      "Banyak orang tua santri yang tak kuasa menahan air mata haru saat menyematkan mahkota simbolis dan menerima pelukan dari ananda yang telah berhasil menjaga kalamullah di dalam dada mereka.",
      "Pengasuh pesantren berpesan agar para wisudawan senantiasa menjaga muraja'ah seumur hidup, mengamalkan adab-adab Al-Qur'an, dan melanjutkan ke jenjang kajian kitab kuning serta perguruan tinggi syariah terkemuka."
    ],
    quote: {
      text: "Menghafal Al-Qur'an adalah permulaan. Mahkota kemuliaan yang sejati adalah ketika akhlak dan perilaku seorang hafizh menjadi cerminan dari Al-Qur'an itu sendiri.",
      speaker: "KH. Pengasuh Pesantren"
    },
    tags: ["Tahfidz", "Pesantren", "30 Juz", "Wisuda", "Tasmi'"]
  },
  {
    id: 3,
    slug: "family-gathering-dinado-2024-pererat-ukhuwah",
    category: "Kegiatan",
    categoryKey: "kegiatan",
    imageSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuA1NWcyngZ-hraEdF89EHOl7juHhXUGaawCKxzjZtafQFUzFffG65EXR6J9_yEykoJ9KdI8zOZkQgVAtLMzXhHUHbPbrlGc9WHYBiKRRjw_Ncai9wHe4tk3Ex5FLRem8HyPx-aGiR51GmVhDhXBGJVQqrqr6FMXs1w9mNBlxJg0O7829XG__RNtuE4qezTajXfWLiMIuwQSANZtbR2erxvZnWS1XBmf2VdL4pZ0MrdVLcaymTRTLnZ-AQ",
    imageAlt: "Family Gathering Dinado 2024",
    date: "08 Oktober 2024",
    readTime: "3 min baca",
    title: "Keseruan Family Gathering Dinado 2024: Mempererat Ukhuwah & Kolaborasi",
    description: "Kegiatan tahunan yang melibatkan ratusan orang tua dan murid PAUD Dinado untuk membangun silaturahmi yang erat antara pendidik dan keluarga santri.",
    author: "Ibu Siti Nurhaliza, S.Pd.",
    authorRole: "Kepala PAUD Dinado",
    content: [
      "PAUD Terpadu Dinado sukses menggelar acara Family Gathering 2024 yang bertempat di kawasan alam terbuka edukatif. Acara ini dihadiri oleh ratusan wali murid bersama ananda dari jenjang TPA, KB, hingga TK Dinado.",
      "Dengan mengusung tema 'Sinergi Cinta Keluarga dan Sekolah Menuju Generasi Shalih', berbagai permainan kekompakan orang tua dan anak diadakan, mulai dari lomba menghias kaligrafi keluarga, outbound mini, hingga sesi parenting Islami.",
      "Kepala Sekolah Dinado menekankan bahwa pendidikan anak usia dini tidak akan optimal tanpa adanya keselarasan pola asuh antara pihak sekolah dan rumah.",
      "Acara ditutup dengan doa bersama untuk keberkahan keluarga besar Dinado dan makan siang bersama bernuansa kebersamaan khas santri."
    ],
    tags: ["Family Gathering", "Dinado", "Parenting", "Ukhuwah"]
  },
  {
    id: 4,
    slug: "graha-autis-gelar-seminar-terapi-wicara-sensori-integrasi",
    category: "Inklusi",
    categoryKey: "inklusi",
    imageSrc: "/images/graha_autis.png",
    imageAlt: "Graha Autis Gelar Seminar Terapi Wicara",
    date: "04 Oktober 2024",
    readTime: "5 min baca",
    title: "Graha Autis YP2SK Gelar Seminar Terapi Wicara & Sensori Integrasi Terpadu",
    description: "Menghadirkan dokter spesialis tumbuh kembang anak dan psikolog klinis guna membekali para orang tua strategi pendampingan kemandirian ananda berkebutuhan khusus di rumah.",
    author: "dr. Hendra Pratama, Sp.A",
    authorRole: "Konsultan Medis Graha Autis",
    content: [
      "Graha Autis YP2SK menyelenggarakan Seminar Edukasi Inklusi bertajuk 'Optimalisasi Sensori Integrasi dan Stimulasi Wicara Anak Berkebutuhan Khusus dalam Bingkai Kasih Sayang'. Acara ini dihadiri oleh puluhan orang tua dan praktisi pendidikan ramah anak.",
      "Dalam seminar tersebut, tim terapis Graha Autis mempraktikkan langsung teknik stimulasi wicara sederhana dan relaksasi sensori motorik yang dapat dilakukan ayah dan bunda di rumah tanpa peralatan rumit.",
      "Direktur Graha Autis menegaskan komitmen YP2SK dalam memberikan pelayanan inklusi berbasis nilai-nilai kemanusiaan dan amanah syar'i. Setiap ananda memiliki keunikan potensi fitrah yang dapat dioptimalkan jika didampingi dengan kesabaran dan keilmuan yang tepat.",
      "Para peserta juga mendapatkan kesempatan konsultasi privat (one-on-one) mengenai rancangan Individualized Educational Program (IEP) bagi putra-putrinya."
    ],
    quote: {
      text: "Anak berkebutuhan khusus adalah amanah mulia. Di balik setiap tantangan tumbuh kembang, ada jalan keberkahan luar biasa bagi orang tua dan pendidik yang sabar.",
      speaker: "dr. Hendra Pratama, Sp.A"
    },
    tags: ["Inklusi", "Graha Autis", "Terapi Wicara", "ABK", "Seminar"]
  },
  {
    id: 5,
    slug: "paud-naneymi-manasik-haji-cilik",
    category: "Kegiatan",
    categoryKey: "kegiatan",
    imageSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuDovWRtuCp7DdGZnwXOeITKhBqhnaEKXESNfzh1W5uBBVVMwo152wgyFHmKKtzBvzhvf8sTrBXUOaqslDeaLL_i03eWfrR2-0fyNtfQdbSJeZq5fAPVmmTvQBLIENn3N1N7DNCmDBbTHPe2rPJ9FezGWloSBfdFRb6-adcHKvrY3VgEvHJ6eUdDkUqs21Pr_ynCs6QzFm9z2h1J0BLH3rHAgAgWBm2xvKyfQA_BXBRtOkFTrYYoXWEKkg",
    imageAlt: "Praktik Manasik Haji Cilik PAUD Naneymi",
    date: "28 September 2024",
    readTime: "3 min baca",
    title: "PAUD Terpadu Naneymi Kenalkan Rukun Islam Lewat Manasik Haji Cilik",
    description: "Dengan pakaian ihram putih bersih dan penuh kepolosan, ananda santri TPA-KB-TK Naneymi antusias mengikuti simulasi thawaf dan sa'i di halaman sekolah.",
    author: "Ustzh. Maryam, S.Pd.I",
    authorRole: "Guru Pembimbing PAUD Naneymi",
    content: [
      "Lantunan talbiyah 'Labbaikallahumma Labbaik' menggema indah di lapangan utama saat ratusan murid PAUD Terpadu Naneymi melaksanakan simulasi Manasik Haji Cilik.",
      "Mengenakan pakaian ihram serba putih, para santri cilik dengan tertib dan ceria mengikuti rute miniatur Ka'bah, bukit Shafa dan Marwah, hingga melempar jumrah tiruan yang telah disiapkan secara ramah anak.",
      "Kegiatan ini bertujuan menanamkan kecintaan mendalam terhadap rukun Islam kelima dan tempat-tempat suci sejak usia emas anak.",
      "Melalui pembelajaran kinestetik yang interaktif ini, ananda lebih mudah memahami makna persaudaraan, ketaatan kepada Allah, dan kesetaraan dalam beribadah."
    ],
    tags: ["Manasik Haji", "Naneymi", "PAUD", "Kegiatan Islami"]
  },
  {
    id: 6,
    slug: "pentingnya-menanamkan-adab-sebelum-ilmu-anak-usia-emas",
    category: "Opini",
    categoryKey: "opini",
    imageSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuBGdRFbGkU6JIUKAuPEVvW-OjcNy60t7j-61g9Qi7fnhPKV_IMxGr84lbz-1FuEeNKDzUGXdDAJiYsLZ9TW286dib8VY0aaCbdGuDg8qQ5H23mhtB1LnOcJJUuiTDEtdp8zK6eXotIuFXtttmEm3r4wS7VfURgeOCMUl1yXx_goEKFRcc1U_0ExOweKqzN5FsdWdPiuMZ1T09k9kqIHlfo13DW-p45rFFT3iPm1SzNjKBTAY_aX0FCOpw",
    imageAlt: "Pentingnya Adab Sebelum Ilmu",
    date: "22 September 2024",
    readTime: "4 min baca",
    title: "Pentingnya Menanamkan Adab Sebelum Ilmu pada Anak Usia Emas",
    description: "Di tengah derasnya arus digital, penanaman adab dan integritas moral sejak dini adalah benteng utama agar kecerdasan intelektual membawa keberkahan dan kemaslahatan.",
    author: "Dewan Pengawas YP2SK",
    authorRole: "Pakar Pendidikan Karakter Islami",
    content: [
      "Para ulama terdahulu senantiasa menasihatkan: 'Pelajarilah adab sebelum engkau mempelajari ilmu.' Nasihat abadi ini kian relevan di zaman sekarang, di mana akses informasi dan teknologi begitu mudah didapat, namun krisis keteladanan moral sering kali terjadi.",
      "Anak yang cerdas tanpa adab berisiko tumbuh menjadi pribadi yang arogan dan merugikan lingkungan sekitarnya. Sebaliknya, anak yang dididik dengan adab akan menghormati guru, berbakti kepada orang tua, dan mempergunakan ilmunya untuk kemaslahatan umat.",
      "Di seluruh lembaga pendidikan naungan YP2SK, kurikulum adab diajarkan melalui pembiasaan nyata: bagaimana bersalaman santun, berkata jujur, antre dengan sabar, serta menjaga kebersihan dan lisan.",
      "Inilah pondasi utama yang kami tancapkan sebelum anak melangkah menuju penguasaan teknologi sains canggih dan kompetensi akademik masa depan."
    ],
    quote: {
      text: "Ilmu tanpa adab ibarat api tanpa kayu bakar, sedangkan adab tanpa ilmu ibarat ruh tanpa jasad.",
      speaker: "Imam Malik rahimahullah"
    },
    tags: ["Opini", "Adab", "Karakter", "Pendidikan Islami"]
  },
  {
    id: 7,
    slug: "workshop-peningkatan-kompetensi-guru-ai-nilai-islami",
    category: "Kegiatan",
    categoryKey: "kegiatan",
    imageSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuD_xtHH56s78e6Y8t0-koeWsGULhzb0sEn3C-SnY2ED2MQEo8yZYeKOxO5GXzs0RWaSjk1Y9-1TlSh-4VeOK8Qy3_cqqnf8VKDxqgGe_nsIYTra84SrLmucv8K8iHabP2fLE7OVjm4a1GOxzPt_EUkIkRzMmQmvc0abTL1aQMAihpgB9SQuvMuLizH6dnRkhvYLyrq12VGCS85uSfx6hGxfO4NPphfySwRCh7IGuYJlmR0La73Mf4v_xw",
    imageAlt: "Workshop Peningkatan Kompetensi Guru",
    date: "18 September 2024",
    readTime: "3 min baca",
    title: "Workshop Peningkatan Kompetensi Guru: Integrasi AI & Nilai Islami",
    description: "YP2SK terus memperbarui kurikulum dan kapabilitas guru agar metode pengajaran tetap mutakhir tanpa kehilangan ruh keteladanan akhlak para pendidik.",
    author: "Tim Litbang YP2SK",
    authorRole: "Divisi Pengembangan Kurikulum",
    content: [
      "Sebanyak 80 guru dari seluruh unit lembaga YP2SK mengikuti workshop intensif bertajuk 'Pemanfaatan Artificial Intelligence dan Media Interaktif dalam Pembelajaran Tematik Islami'.",
      "Workshop ini membedah teknik pembuatan materi ajar multimedia interaktif, simulasi visual sains, dan asisten penilaian adaptif yang dapat meringankan beban administrasi guru, sehingga guru memiliki lebih banyak waktu untuk berinteraksi dan membimbing akhlak murid.",
      "Para narasumber ahli teknologi pendidikan memaparkan bagaimana AI dapat menjadi alat bantu efektif guru Muslim untuk menyajikan konten sains dan sejarah Islam secara memukau.",
      "Pelatihan berkelanjutan ini merupakan komitmen yayasan untuk memastikan standar pengajaran di YP2SK selalu selaras dengan perkembangan global."
    ],
    tags: ["Pelatihan Guru", "Teknologi", "AI", "Inovasi"]
  },
  {
    id: 8,
    slug: "santri-sma-skiis-raih-juara-debat-bahasa-arab-nasional",
    category: "Prestasi",
    categoryKey: "prestasi",
    imageSrc: "/images/skiis_school.jpg",
    imageAlt: "Santri SMA SKIIS Raih Juara Debat Bahasa Arab",
    date: "14 September 2024",
    readTime: "3 min baca",
    title: "Santri SMA SKIIS Raih Juara 1 Lomba Debat Bahasa Arab Nasional",
    description: "Menunjukkan kemahiran bahasa Arab fasih dan argumentasi syar'i yang tajam, tim siswa SMA Sunan Kudus sukses membawa pulang piala bergilir kejuaraan bahasa nasional.",
    author: "Ust. Zulkifli, Lc.",
    authorRole: "Pembina Bahasa Asing SKIIS",
    content: [
      "Tim debat bahasa Arab SMA Sunan Kudus International Islamic School (SKIIS) menorehkan prestasi membanggakan dengan meraih Juara 1 dalam Festival Bahasa Arab Nasional 2024.",
      "Dalam babak final yang sengit melawan sekolah-sekolah unggulan dari berbagai provinsi, para siswa SKIIS memukau dewan juri dengan penguasaan kosa kata fasih (fusha), retorika balaghah yang indah, serta kekuatan dalil syar'i dan data ilmiah kontemporer.",
      "Prestasi ini membuktikan keunggulan program bilingual intensif SKIIS di mana bahasa Arab dan Inggris bukan hanya diajarkan sebagai mata pelajaran, melainkan digunakan sebagai bahasa komunikasi harian santri.",
      "Pihak yayasan memberikan beasiswa prestasi dan pembinaan khusus bagi para pemenang untuk mengikuti kejuaraan tingkat internasional di Timur Tengah."
    ],
    tags: ["Bahasa Arab", "Debat", "Prestasi", "SKIIS"]
  },
  {
    id: 9,
    slug: "mengenal-program-iep-pendidikan-inklusif-ramah-autis",
    category: "Inklusi",
    categoryKey: "inklusi",
    imageSrc: "/images/kb_naneymi_autis.png",
    imageAlt: "Program IEP di KB Naneymi Autis",
    date: "09 September 2024",
    readTime: "4 min baca",
    title: "Mengenal Program IEP: Pendidikan Berpusat pada Kebutuhan Unik Anak Autis",
    description: "Setiap anak adalah istimewa. Simak bagaimana penerapan Individualized Educational Program (IEP) di bawah naungan YP2SK membantu akselerasi kemandirian ananda.",
    author: "Tim Psikologi YP2SK",
    authorRole: "Divisi Asesmen dan Terapi",
    content: [
      "Setiap anak berkebutuhan khusus terlahir dengan profil sensorik, kemampuan bahasa, dan rentang atensi yang berbeda-beda. Karena itu, model pembelajaran klasikal satu metode untuk semua tidak selalu efektif.",
      "Di KB Naneymi Autis dan Graha Autis YP2SK, setiap anak menerima rancangan Individualized Educational Program (IEP) yang disusun bersama oleh psikolog, terapis, dokter, dan orang tua.",
      "IEP menetapkan target capaian jangka pendek dan jangka panjang yang terukur, mulai dari kemampuan kontak mata, instruksi dua arah, makan mandiri, hingga toilet training.",
      "Dengan evaluasi berkala setiap 3 bulan, perkembangan ananda terpantau secara transparan dan terarah menuju kemandirian fungsional."
    ],
    tags: ["IEP", "Autisme", "Inklusi", "Psikologi", "Graha Autis"]
  },
  {
    id: 10,
    slug: "program-tahfidz-camp-liburan-santri-sunan-kudus",
    category: "Pesantren",
    categoryKey: "pesantren",
    imageSrc: "/images/ponpes_tahfidz_autis.png",
    imageAlt: "Tahfidz Camp Liburan Santri Sunan Kudus",
    date: "01 September 2024",
    readTime: "3 min baca",
    title: "Program Tahfidz Camp Liburan: Membangun Kedekatan dengan Kalam Ilahi",
    description: "Mengisi waktu liburan dengan kegiatan positif di alam terbuka, menghafal Al-Qur'an, qiyamullail bersama, dan mengasah kemandirian santri usia remaja.",
    author: "Panitia Tahfidz Camp",
    authorRole: "Koordinator Program Liburan Santri",
    content: [
      "Liburan sekolah bukanlah waktu untuk berpangku tangan. Sebanyak 60 santri antusias mengikuti agenda Tahfidz Camp Liburan yang diselenggarakan oleh Pondok Pesantren Tahfidz Sunan Kudus di kawasan pegunungan yang asri.",
      "Selama 7 hari penuh, para santri diajak menyelami keindahan Al-Qur'an melalui metode ziyadah kilat, tadabbur alam, tadarus berkelompok di bawah rindangnya pepohonan, serta sholat tahajud bersama.",
      "Banyak santri yang berhasil menambah hafalan 1 hingga 2 juz baru selama sepekan berkat lingkungan yang tenang dan minim distraksi gawai digital.",
      "Program ini menjadi agenda favorit tahunan yang dinanti-nantikan oleh para santri dan wali murid."
    ],
    tags: ["Tahfidz Camp", "Liburan", "Santri", "Pesantren"]
  },
  {
    id: 11,
    slug: "menyiapkan-generasi-ulul-albab-adaptif-teknologi-masa-depan",
    category: "Opini",
    categoryKey: "opini",
    imageSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuAjMDiyRWf1szuKJnkjoSKfOtji6kw5h2ZxoR_j52i3oLn54szFD3Jk0j6uEcGeYRmC1IIv9m_4TeKI9z_RUWlWIxFGdukzJAEIt12SOIcn7zXlkFueMydBfbsUJwuslg1RAbFmdjUzFkry0CTrX3QYQwlYHIePOkUhiWAE7anBxBskpOJOBwrSaq0569G5HRaQfiBQ9zPJhC4Vgx_m-GcvkfZJMwniqFMActSyaFdI5tEJU4zaAWOZcA",
    imageAlt: "Menyiapkan Generasi Ulul Albab",
    date: "25 Agustus 2024",
    readTime: "5 min baca",
    title: "Menyiapkan Generasi Ulul Albab yang Adaptif terhadap Teknologi Masa Depan",
    description: "Kombinasi antara kecerdasan spiritual, kematangan emosional, dan literasi teknologi menjadi bekal utama lulusan YP2SK dalam memimpin peradaban mendatang.",
    author: "Drs. H. Muhammad Ilyas, M.Ag.",
    authorRole: "Ketua Dewan Pembina YP2SK",
    content: [
      "Konsep 'Ulul Albab' dalam Al-Qur'an merujuk pada insan yang senantiasa berdzikir kepada Allah dalam segala keadaan sekaligus mendalam dalam memikirkan penciptaan langit dan bumi (tadabbur ilmiah).",
      "Di era kecerdasan buatan, otomatisasi, dan disrupsi digital yang begitu cepat, lembaga pendidikan Islam tidak boleh bersikap reaktif apalagi menjauhi teknologi. Sebaliknya, generasi muda Islam harus menjadi pencipta dan pengendali teknologi.",
      "Melalui kurikulum terpadu di SKIIS dan Pondok Pesantren Sunan Kudus, kami melatih santri memiliki nalar komputasi, keahlian coding, dan literasi data, dengan jangkar nilai-nilai syariat yang tidak tergoyahkan.",
      "Dengan demikian, ketika mereka terjun ke masyarakat global, mereka memimpin dengan solusi yang membawa maslahat bagi semesta alam."
    ],
    quote: {
      text: "Generasi Ulul Albab adalah mereka yang menggetarkan sajadah dengan sujud malam, dan mengguncang dunia dengan karya inovasi yang bermanfaat bagi umat.",
      speaker: "Drs. H. Muhammad Ilyas, M.Ag."
    },
    tags: ["Ulul Albab", "Teknologi", "Masa Depan", "Opini", "YP2SK"]
  },
  {
    id: 12,
    slug: "semarak-kemerdekaan-santri-yp2sk-bakti-sosial",
    category: "Kegiatan",
    categoryKey: "kegiatan",
    imageSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuAe0E3TYsYVpnX7IFU3IfExVzE4xHXdhNdvptwd0R8hObwuRDZQvAMUGtEUgdxAJ0Ukz0dtXRSubtQ_jC0OyOs5goPXPudRTBSbhFm0JxpirJAdoNSRmoc7HzJoDZjfOBjgSvovfDbfIP-b9CIoOe61Dw3xWtvzef511O1xo1iY4EtsjSyRolGu-oUSKrJPvk3e0FlxKrN3Bn70KpH8ggmfR464jLgfrWDihqzTpzbVamV-o8P72UWjdg",
    imageAlt: "Bakti Sosial Santri YP2SK",
    date: "17 Agustus 2024",
    readTime: "3 min baca",
    title: "Semarak Kemerdekaan: Santri YP2SK Adakan Bakti Sosial & Pemeriksaan Gratis",
    description: "Wujud kepedulian nyata santri kepada warga sekitar melalui pembagian paket sembako berkah dan layanan cek kesehatan gratis bekerjasama dengan klinik yayasan.",
    author: "Pengurus OSIS & Santri SKIIS",
    authorRole: "Divisi Sosial Kemasyarakatan",
    content: [
      "Menyemarakkan peringatan Hari Kemerdekaan Republik Indonesia, ratusan santri dan siswa naungan YP2SK menggelar aksi bakti sosial peduli sesama di pemukiman sekitar yayasan.",
      "Kegiatan ini mencakup penyaluran 300 paket sembako berkah, pemeriksaan kesehatan cuma-cuma berupa cek tensi, gula darah, dan konsultasi dokter dari tim medis yayasan, serta bazar pakaian layak pakai.",
      "Ketua OSIS SKIIS menyatakan bahwa kegiatan ini mengajarkan para siswa nilai empati, kedermawanan, dan syukur atas nikmat kemerdekaan.",
      "Warga menyambut hangat dan mengapresiasi kontribusi santri yang senantiasa hadir membawa manfaat bagi lingkungan sekitar."
    ],
    tags: ["Bakti Sosial", "Kemerdekaan", "Santri Peduli", "Kegiatan"]
  }
];

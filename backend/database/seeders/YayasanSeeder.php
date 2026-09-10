<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

use App\Models\Berita;
use App\Models\Galeri;

class YayasanSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Seeding Berita (News)
        Berita::create([
            'title' => 'Siswa YP2SK Sabet Medali Emas Olimpiade Sains Nasional',
            'slug' => 'siswa-yp2sk-sabet-medali-emas-olimpiade-sains-nasional',
            'category' => 'Prestasi',
            'image_path' => 'https://lh3.googleusercontent.com/aida-public/AB6AXuADxdlSdcfLIou-9D78BYDeD88uxsQ9Df27LClBOHKIAoi5qV_4sVRDlZTJsWvY7VPsr1orKxPumxPhnpsUQs-bSIKCB5i0KHYCexI4UlOFdpYT__C9AZm6__YF5WX-leT-KIl5t17srwCdPDEPpW9_VReiQ8euar40HWpGZu0AfOdELVrkvbWpACcVtWPFfpHrPaIosSu3ZwWBos21uWAN9ktqtu9uORZzo0rxNzg2fMD2NQxBuAnTWQ',
            'description' => 'Dedikasi dan kerja keras membuahkan hasil membanggakan. Siswa kami berhasil mengungguli ratusan peserta dari seluruh Indonesia dalam ajang bergengsi...',
            'content' => '<p>Dedikasi dan kerja keras membuahkan hasil membanggakan. Siswa kami berhasil mengungguli ratusan peserta dari seluruh Indonesia dalam ajang bergengsi <strong>Olimpiade Sains Nasional (OSN)</strong>.</p><p>YP2SK sangat berkomitmen untuk memfasilitasi setiap bakat akademik siswa agar dapat mencapai potensi puncaknya. Kami mengucapkan selamat kepada para juara dan guru pembimbing yang telah mencurahkan waktu dan energinya.</p>',
        ]);

        Berita::create([
            'title' => 'Transformasi Digital: Pelatihan Guru Berbasis Teknologi',
            'slug' => 'transformasi-digital-pelatihan-guru-berbasis-teknologi',
            'category' => 'Kegiatan',
            'image_path' => 'https://lh3.googleusercontent.com/aida-public/AB6AXuD_xtHH56s78e6Y8t0-koeWsGULhzb0sEn3C-SnY2ED2MQEo8yZYeKOxO5GXzs0RWaSjk1Y9-1TlSh-4VeOK8Qy3_cqqnf8VKDxqgGe_nsIYTra84SrLmucv8K8iHabP2fLE7OVjm4a1GOxzPt_EUkIkRzMmQmvc0abTL1aQMAihpgB9SQuvMuLizH6dnRkhvYLyrq12VGCS85uSfx6hGxfO4NPphfySwRCh7IGuYJlmR0La73Mf4v_xw',
            'description' => 'YP2SK terus berinovasi dalam metode pembelajaran. Pelatihan intensif dilakukan untuk memastikan seluruh tenaga pendidik siap menghadapi tantangan...',
            'content' => '<p>YP2SK terus berinovasi dalam metode pembelajaran. Pelatihan intensif dilakukan untuk memastikan seluruh tenaga pendidik siap menghadapi tantangan era digital.</p><p>Dengan mengadopsi platform pembelajaran modern dan alat bantu teknologi, diharapkan proses interaksi belajar-mengajar di kelas menjadi lebih interaktif, efektif, dan menyenangkan bagi siswa-siswi.</p>',
        ]);

        Berita::create([
            'title' => 'Pentingnya Pendidikan Lingkungan Sejak Dini',
            'slug' => 'pentingnya-pendidikan-lingkungan-sejak-dini',
            'category' => 'Opini',
            'image_path' => 'https://lh3.googleusercontent.com/aida-public/AB6AXuBGdRFbGkU6JIUKAuPEVvW-OjcNy60t7j-61g9Qi7fnhPKV_IMxGr84lbz-1FuEeNKDzUGXdDAJiYsLZ9TW286dib8VY0aaCbdGuDg8qQ5H23mhtB1LnOcJJUuiTDEtdp8zK6eXotIuFXtttmEm3r4wS7VfURgeOCMUl1yXx_goEKFRcc1U_0ExOweKqzN5FsdWdPiuMZ1T09k9kqIHlfo13DW-p45rFFT3iPm1SzNjKBTAY_aX0FCOpw',
            'description' => 'Membentuk generasi yang peduli lingkungan bukan sekadar tren, melainkan kebutuhan mendesak. Melalui kurikulum berbasis alam, YP2SK mencoba...',
            'content' => '<p>Membentuk generasi yang peduli lingkungan bukan sekadar tren, melainkan kebutuhan mendesak. Melalui kurikulum berbasis alam, YP2SK mencoba menanamkan rasa cinta kasih terhadap alam dan tanggung jawab sosial sejak usia dini.</p><p>Melalui kegiatan bercocok tanam, pengelolaan sampah organik, dan kampanye hemat energi, siswa belajar menjadi penjaga bumi yang bertanggung jawab.</p>',
        ]);

        // Seeding Galeri (Gallery)
        Galeri::create([
            'title' => 'Belajar Kelompok Kreatif',
            'category' => 'Kegiatan Siswa',
            'image_path' => 'https://lh3.googleusercontent.com/aida-public/AB6AXuC0eo_hIz5m6CQljyilwXPKjXTW0Ek6uQ5vHz9VH_QFYcmKf1Z7GNNCwGU7qoeEbAlQC4d2DzFh-4sSXioWUxwra2CSd6XdGuiSd-xbkz5qEQvW06LWi0O0KE85_b5ULyOfYq3HiuXdWpgrZmECcPuujr1NzALHrx5BeOrvvgLc2j2fMtJmYhHZmFNbiWfdpNE0jRzeCYtTXDDlEpYDhvfcLSn-BLkPdS94Tk0OBc9aQxycbYd2Xco-vA',
            'description' => 'Siswa-siswi YP2SK berkolaborasi dalam metode belajar kelompok kreatif di ruang kelas ber-AC yang nyaman dengan bimbingan guru yang suportif.',
        ]);

        Galeri::create([
            'title' => 'Upacara Bendera Senin',
            'category' => 'Fasilitas',
            'image_path' => 'https://lh3.googleusercontent.com/aida-public/AB6AXuA4W_Y9A8_NGqUnGf9_RomxiSKVa0Rpk63Vs05C-PJULiy53_3NzzssUXKR-7U5vWV0mES3EgLbAQtbwnUXy8PYKvbj-Ig724hA8b4CaX705HXkgJ09asxMb6ZFH5MDWOLwzFc_qWC-cZOd5mqmLiX8JdOfx5XFQl7kxdlRulenJ103DiB2ZQKS_lbY_YPw-ExGtz_lVAh0dfLq_aoYFtgXtZqfBiWQJ-rOesaZQ5IO7nApoRLe26JLcw',
            'description' => 'Pelaksanaan upacara bendera rutin setiap hari Senin di halaman upacara utama YP2SK untuk menanamkan rasa nasionalisme dan melatih kedisiplinan siswa.',
        ]);

        Galeri::create([
            'title' => 'Program Sekolah Hijau',
            'category' => 'Lingkungan',
            'image_path' => 'https://lh3.googleusercontent.com/aida-public/AB6AXuCuaBChlfgILPEa3b-x3RZkuvQIDTrBcOnV9eyv8YOsrUk7d8fpIHlNEhScrku8Vl-tQrA1fneD0VZEjL36NGbnyz9EUvEK0qN8D5RsL6rENcfNEeJqeGl-W2pHd6FcAyR8L3s7_l4Deqdbnei_rMlDMcZ1TgxljSzBDXlxjCqeuTbENdHVj0n8T-HoH-qeKlW1HnrxZwWwKKsVqVwh1ooREwvLTpYxUz-S3Cr-jP8mABataK6ALsWCuQ',
            'description' => 'Kegiatan peduli lingkungan melalui program penanaman pohon di kebun sekolah, mengajarkan anak pentingnya melestarikan bumi dan merawat alam sekitar.',
        ]);

        Galeri::create([
            'title' => 'Kompetisi Tahunan',
            'category' => 'Olahraga',
            'image_path' => 'https://lh3.googleusercontent.com/aida-public/AB6AXuDXO_BaFBVv8OOXA8ga4DfSzvFIjz-HU6KBTvF3VIExRDfJVc-ZZTRnV6GFHir50LdbLrJb7Z4oZjw0Lo_gIjl8t_-WpAbn7T2m4SfQV-ud1urVPB634H_yZuhj-oaOEtt-SnwhgOBZhtrZyXw9Vue1-2aqfzNDJkdF_6v_JoKgRWcSRvdAYWWg81Sc0i9zVUS2q5jHOwsHs0z79wOgtn3oOF-_eRfSJatjYni9kiFYgPepQV4g7vToug',
            'description' => 'Keseruan turnamen olahraga antarkelas yang melatih sportivitas, daya juang, dan kerja sama tim siswa-siswi YP2SK dalam atmosfer yang kompetitif namun menyenangkan.',
        ]);

        Galeri::create([
            'title' => 'Pentas Seni Akhir Tahun',
            'category' => 'Seni & Budaya',
            'image_path' => 'https://lh3.googleusercontent.com/aida-public/AB6AXuDK_RQTMHdjuU9dhsVTmHOXbO1IT6Ms3MRJP2-beNXY9pOuQCbve3uqEiJMEYTIB2xXapzrHEZB5lVqnMQxgaLGHQr9g6Y44I15JVHFcIB594VC_HupuKiXAmpPC_wKCnp3qz2gok-wG05kEfgUMEDwVixYqtS79qQ6f7rxMHV7mBVGxDTusfffgQ46k9GtsAEbZgoC7ehuMn2m3clbhOqRwU0N9Q4tOou6B_GVLsxV8PjHavBURWscKg',
            'description' => 'Ajang apresiasi seni dan budaya akhir tahun ajaran sebagai sarana ekspresi bakat tari tradisional, musik, dan teater nusantara bagi para siswa.',
        ]);

        Galeri::create([
            'title' => 'Eksperimen Laboratorium',
            'category' => 'Akademik',
            'image_path' => 'https://lh3.googleusercontent.com/aida-public/AB6AXuDKDwIlt5yVG6F3r_zIVdJIb84IeyFZ-8bWf5QHFu9wRljUbvDAheu0RFR8xm-teWi6Xu6kYP66umCyfSEUTSQJGRKJGxXl6q0oAQZIFBF30ZNG6ZlOWuVlOxkX1JWqa3d9LCj_a8lZ0CA2hD4t-ED42NFlqU8fvAqyHmzYRiRyjbrX56jMgmMNLYLl6KIt6pSAURQeR-4bO6FyUq748JRu-heBfN1Opkiy9Nhnut1oOt7iCevMoTP-eA',
            'description' => 'Praktikum sains terpadu di laboratorium modern yang lengkap untuk memfasilitasi eksplorasi ilmiah dan pembelajaran kognitif aktif berbasis penemuan.',
        ]);
    }
}

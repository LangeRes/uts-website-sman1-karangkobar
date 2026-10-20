
const STORAGE_KEY = "sman1-karangkobar-halaman";

export const halamanDefault = {
  home: {
    judulUtama: "Selamat Datang di SMAN 1 Karangkobar",
    deskripsiUtama:
      "Mengenal lingkungan sekolah, informasi pendidikan, dan berbagai kegiatan untuk mendukung perkembangan generasi muda.",
    judulSambutan: "Tempat Bertumbuh, Belajar, dan Berkarya",
    isiSambutan:
      "Selamat datang di website profil SMA Negeri 1 Karangkobar. Website ini menjadi sarana untuk mengenal profil sekolah, memperoleh informasi pendidikan, serta mengikuti beragam informasi dan kegiatan sekolah.",
    judulProfil: "Mengenal SMAN 1 Karangkobar Lebih Dekat",
    isiProfil:
      "Ber­lokasi di Kecamatan Karangkobar, Kabupaten Banjarnegara, Jawa Tengah, SMAN 1 Karangkobar menjadi bagian dari lingkungan pendidikan yang melayani masyarakat.",
    judulBerita: "Informasi dan Artikel",
    deskripsiBerita:
      "Temukan informasi seputar pendidikan, pengembangan siswa, dan berbagai kegiatan SMAN 1 Karangkobar.",
    judulAjakan: "Kenali Sekolah Kami Lebih Dekat",
    isiAjakan:
      "Jelajahi profil sekolah dan informasi yang tersedia melalui website SMAN 1 Karangkobar.",
  },

  about: {
    deskripsiUtama:
      "Mengenal identitas, visi, misi, dan arah pengembangan pendidikan SMA Negeri 1 Karangkobar di Banjarnegara, Jawa Tengah.",
    deskripsiIdentitas:
      "SMA Negeri 1 Karangkobar merupakan satuan pendidikan yang berlokasi di Kecamatan Karangkobar, Kabupaten Banjarnegara, Provinsi Jawa Tengah.",
    deskripsiIdentitasTambahan:
      "Halaman ini menyajikan informasi identitas sekolah serta visi dan misi sebagai pedoman dalam kegiatan pendidikan dan pengembangan warga sekolah.",
    deskripsiSejarah:
      "SMA Negeri 1 Karangkobar didirikan pada tahun 1985 dan berlokasi di Jalan Leksana Nomor 25, Kecamatan Karangkobar, Kabupaten Banjarnegara, Jawa Tengah. Sekolah ini menyelenggarakan pendidikan menengah atas bagi peserta didik di wilayah Karangkobar dan sekitarnya.",
    deskripsiSejarahTambahan:
      "Dalam menjalankan kegiatan pendidikan, sekolah berpedoman pada visi dan misi untuk mendorong perkembangan peserta didik, prestasi, inovasi, serta kepedulian terhadap lingkungan hidup.",
    visi:
      "Terwujudnya warga sekolah yang bertaqwa, berprestasi, berinovasi, dan berbudaya lingkungan hidup",
    pengantarMisi:
      "Langkah-langkah untuk mewujudkan visi SMA Negeri 1 Karangkobar.",
    misi: [
      "Menumbuhkan kesadaran terhadap ajaran agama yang dianut.",
      "Melaksanakan ibadah sesuai dengan agamanya.",
      "Melaksanakan pembelajaran dan bimbingan secara optimal sesuai dengan potensi yang dimiliki.",
      "Melaksanakan pembinaan yang intensif dalam berbagai bidang.",
      "Mengikuti berbagai lomba akademik dan non akademik.",
      "Menumbuhkan ide baru warga sekolah untuk memajukan kegiatan sekolah.",
      "Melaksanakan kegiatan yang kreatif dan inspiratif.",
      "Menumbuhkan kesadaran peduli lingkungan.",
      "Melaksanakan kegiatan 3R (reduce, reuse, recycle).",
    ],
  },
};

export function ambilHalaman() {
  if (typeof window === "undefined") {
    return halamanDefault;
  }

  try {
    const dataTersimpan = localStorage.getItem(STORAGE_KEY);

    if (!dataTersimpan) {
      return halamanDefault;
    }

    const data = JSON.parse(dataTersimpan);

    return {
      home: {
        ...halamanDefault.home,
        ...(data.home || {}),
      },
      about: {
        ...halamanDefault.about,
        ...(data.about || {}),
        misi: Array.isArray(data.about?.misi)
          ? data.about.misi
          : halamanDefault.about.misi,
      },
    };
  } catch (error) {
    console.error("Gagal membaca konten halaman:", error);
    return halamanDefault;
  }
}

export function simpanHalaman(dataHalaman) {
  if (typeof window === "undefined") {
    return false;
  }

  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(dataHalaman));
    return true;
  } catch (error) {
    console.error("Gagal menyimpan konten halaman:", error);
    return false;
  }
}

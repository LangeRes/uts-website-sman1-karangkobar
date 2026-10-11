import Link from "next/link";
import BeritaCard from "@/components/BeritaCard";
import berita from "@/data/berita";

export default function Home() {
  const beritaTerbaru = berita.slice(0, 3);

  return (
    <main className="flex-1 bg-white">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-emerald-950 via-emerald-900 to-teal-800 text-white">
        <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-emerald-400/10 blur-3xl" />
        <div className="absolute -bottom-32 left-1/3 h-80 w-80 rounded-full bg-teal-300/10 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 sm:px-8 sm:py-28 lg:grid-cols-2">
          <div>
            <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold tracking-widest text-emerald-100">
              WEBSITE PROFIL SEKOLAH
            </span>

            <h1 className="mt-7 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Selamat Datang di
              <span className="mt-2 block text-emerald-300">
                SMAN 1 Karangkobar
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-8 text-emerald-50/80 sm:text-lg">
              Mengenal lingkungan sekolah, informasi pendidikan, dan
              berbagai kegiatan untuk mendukung perkembangan generasi muda.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                href="/about"
                className="rounded-xl bg-white px-6 py-3 font-bold text-emerald-950 transition hover:bg-emerald-50"
              >
                Kenali Sekolah →
              </Link>

              <Link
                href="/berita"
                className="rounded-xl border border-white/30 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
              >
                Jelajahi Berita
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-3xl border border-white/15 bg-white/10 p-5 shadow-2xl backdrop-blur-sm sm:p-8">
              <div className="flex aspect-[4/3] flex-col items-center justify-center rounded-2xl border border-white/10 bg-gradient-to-br from-emerald-800 to-teal-700 p-6 text-center">

              <img
                src="/images/sekolah.jpeg"
                alt="Gedung SMA Negeri 1 Karangkobar"
                className="mx-auto h-40 w-full max-w-md rounded-2xl border border-white/20 object-cover shadow-lg sm:h-52"
              />
                <p className="mt-6 text-xl font-bold sm:text-2xl">
                  SMA Negeri 1 Karangkobar
                </p>

                <p className="mt-2 text-sm text-emerald-100">
                  Banjarnegara, Jawa Tengah
                </p>

                <div className="mt-7 h-1 w-16 rounded-full bg-emerald-300" />

                <p className="mt-4 text-xs leading-6 text-emerald-100/80">
                  Pendidikan · Karakter · Masa Depan
                </p>
              </div>

              <p className="mt-4 text-center text-xs leading-5 text-emerald-50/70">
                Mengenal lebih dekat lingkungan pendidikan SMAN 1 Karangkobar
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sambutan */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-700">
            Sambutan
          </p>

          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Tempat Bertumbuh, Belajar, dan Berkarya
          </h2>

          <p className="mt-6 text-base leading-8 text-gray-600">
            Selamat datang di website profil SMA Negeri 1 Karangkobar.
            Website ini menjadi sarana untuk mengenal profil sekolah,
            memperoleh informasi pendidikan, serta mengikuti beragam
            informasi dan kegiatan sekolah.
          </p>

          <Link
            href="/about"
            className="mt-7 inline-flex font-bold text-emerald-800 hover:text-emerald-600"
          >
            Pelajari profil sekolah →
          </Link>
        </div>
      </section>

      {/* Profil singkat */}
      <section className="border-y border-gray-100 bg-gray-50">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-8 md:grid-cols-2 md:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-emerald-700">
              Profil Sekolah
            </p>

            <h2 className="mt-3 text-3xl font-extrabold leading-tight text-gray-900">
              Mengenal SMAN 1 Karangkobar Lebih Dekat
            </h2>

            <p className="mt-5 leading-8 text-gray-600">
              Berlokasi di Kecamatan Karangkobar, Kabupaten Banjarnegara,
              Jawa Tengah, SMAN 1 Karangkobar menjadi bagian dari
              lingkungan pendidikan yang melayani masyarakat.
            </p>

            <Link
              href="/about"
              className="mt-6 inline-flex rounded-xl bg-emerald-800 px-5 py-3 font-semibold text-white transition hover:bg-emerald-900"
            >
              Lihat Profil Lengkap
            </Link>
          </div>

          <div className="rounded-3xl border border-gray-200 bg-white p-7 shadow-sm sm:p-9">
            <p className="text-sm font-semibold text-gray-500">
              IDENTITAS SEKOLAH
            </p>

            <div className="mt-6 space-y-5">
              <div>
                <p className="text-sm text-gray-500">Nama sekolah</p>
                <p className="mt-1 font-bold text-gray-900">
                  SMA Negeri 1 Karangkobar
                </p>
              </div>

              <div>
                <p className="text-sm text-gray-500">NPSN</p>
                <p className="mt-1 font-bold text-gray-900">20303984</p>
              </div>

              <div>
                <p className="text-sm text-gray-500">Alamat</p>
                <p className="mt-1 font-semibold leading-7 text-gray-900">
                  Jl. Leksana No. 25, Karangkobar, Banjarnegara,
                  Jawa Tengah
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Berita terbaru */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24">
        <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-emerald-700">
              Informasi Sekolah
            </p>

            <h2 className="mt-3 text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Informasi dan Artikel
            </h2>

            <p className="mt-4 max-w-2xl leading-7 text-gray-600">
              Temukan informasi seputar pendidikan, pengembangan siswa,
              dan berbagai kegiatan SMAN 1 Karangkobar.
            </p>
          </div>

          <Link
            href="/berita"
            className="shrink-0 font-bold text-emerald-800 hover:text-emerald-600"
          >
            Lihat semua berita →
          </Link>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {beritaTerbaru.map((berita) => (
            <BeritaCard key={berita.id} berita={berita} />
          ))}
        </div>

        {beritaTerbaru.length === 0 && (
          <p className="mt-8 text-center text-gray-500">
            Belum ada berita yang tersedia.
          </p>
        )}
      </section>

      {/* Ajakan */}
      <section className="bg-emerald-900">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-7 px-5 py-14 sm:px-8 md:flex-row md:items-center">
          <div>
            <h2 className="text-2xl font-extrabold text-white sm:text-3xl">
              Kenali Sekolah Kami Lebih Dekat
            </h2>

            <p className="mt-3 max-w-2xl leading-7 text-emerald-100/80">
              Jelajahi profil sekolah dan informasi yang tersedia
              melalui website SMAN 1 Karangkobar.
            </p>
          </div>

          <Link
            href="/about"
            className="shrink-0 rounded-xl bg-white px-6 py-3 font-bold text-emerald-950 transition hover:bg-emerald-50"
          >
            Tentang Sekolah →
          </Link>
        </div>
      </section>
    </main>
  );
}
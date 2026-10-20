
import Link from "next/link";
import BeritaCard from "@/components/BeritaCard";
import KontenHome from "@/components/KontenHome";
import berita from "@/data/berita";

export default function Home() {
  const beritaTerbaru = berita.slice(0, 3);

  return (
    <main className="flex-1 bg-white">
      {/* Hero */}
      <section className="relative overflow-hidden bg-linear-to-br from-emerald-950 via-emerald-900 to-teal-800 text-white">
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
              <div className="flex aspect-4/3 flex-col items-center justify-center rounded-2xl border border-white/10 bg-linear-to-br from-emerald-800 to-teal-700 p-6 text-center">
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

      {/* Konten Sambutan, Profil Singkat, dan Ajakan */}
      <KontenHome />

      {/* Identitas Sekolah dan Berita Terbaru */}
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
          {beritaTerbaru.map((item) => (
            <BeritaCard key={item.id} berita={item} />
          ))}
        </div>

        {beritaTerbaru.length === 0 && (
          <p className="mt-8 text-center text-gray-500">
            Belum ada berita yang tersedia.
          </p>
        )}
      </section>
    </main>
  );
}

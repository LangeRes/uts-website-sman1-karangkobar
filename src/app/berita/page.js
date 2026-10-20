
import Link from "next/link";
import DaftarBerita from "./DaftarBerita";

export const metadata = {
  title: "Berita Sekolah | SMAN 1 Karangkobar",
  description:
    "Informasi dan berita terbaru seputar kegiatan SMA Negeri 1 Karangkobar.",
};

export default function BeritaPage() {
  return (
    <main className="flex-1 bg-gray-50">
      {/* Hero */}
      <section className="bg-linear-to-br from-emerald-950 via-emerald-900 to-teal-800 px-5 py-16 text-white sm:px-8 sm:py-20">
        <div className="mx-auto max-w-7xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-emerald-300">
            Informasi Sekolah
          </p>

          <h1 className="text-3xl font-extrabold tracking-tight sm:text-5xl">
            Berita dan Kegiatan Sekolah
          </h1>

          <p className="mt-5 max-w-2xl text-base leading-7 text-emerald-50/80 sm:text-lg">
            Ikuti informasi terbaru, prestasi siswa, dan berbagai kegiatan
            menarik dari SMA Negeri 1 Karangkobar.
          </p>

          <div className="mt-8">
            <Link
              href="/"
              className="inline-flex rounded-xl border border-white/30 px-5 py-3 text-sm font-semibold transition hover:bg-white/10"
            >
              Kembali ke Beranda
            </Link>
          </div>
        </div>
      </section>

      {/* Daftar Berita */}
      <section className="px-5 py-14 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-9">
            <p className="text-sm font-bold uppercase tracking-wider text-emerald-700">
              Kabar Sekolah
            </p>

            <h2 className="mt-2 text-2xl font-extrabold text-gray-900 sm:text-3xl">
              Semua Berita
            </h2>

            <p className="mt-3 text-gray-600">
              Temukan berbagai informasi dan kegiatan SMA Negeri 1 Karangkobar.
            </p>
          </div>

          <DaftarBerita />
        </div>
      </section>

      {/* CTA */}
      <section className="px-5 pb-14 sm:px-8">
        <div className="mx-auto max-w-7xl rounded-3xl bg-emerald-900 px-6 py-10 text-center text-white sm:px-12 sm:py-12">
          <h2 className="text-2xl font-extrabold sm:text-3xl">
            Kenali Sekolah Kami Lebih Dekat
          </h2>

          <p className="mx-auto mt-3 max-w-2xl leading-7 text-emerald-50/80">
            Pelajari profil, sejarah, visi, dan misi SMA Negeri 1 Karangkobar.
          </p>

          <Link
            href="/about"
            className="mt-6 inline-flex rounded-xl bg-white px-6 py-3 font-bold text-emerald-900 transition hover:bg-emerald-50"
          >
            Tentang Kami
          </Link>
        </div>
      </section>
    </main>
  );
}

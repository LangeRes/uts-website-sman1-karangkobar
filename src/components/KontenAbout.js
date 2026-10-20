
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ambilHalaman } from "@/lib/halamanStorage";

export default function KontenAbout() {
  const [konten, setKonten] = useState(null);

  useEffect(() => {
    setKonten(ambilHalaman().about);
  }, []);

  if (!konten) {
    return null;
  }

  return (
    <main className="flex-1 bg-white">
      {/* Hero Profil */}
      <section className="relative overflow-hidden bg-linear-to-br from-emerald-950 via-emerald-900 to-teal-800 text-white">
        <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-emerald-400/10 blur-3xl" />
        <div className="absolute -bottom-32 left-1/3 h-80 w-80 rounded-full bg-teal-300/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24">
          <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold tracking-widest text-emerald-100">
            PROFIL SEKOLAH
          </span>

          <h1 className="mt-7 max-w-4xl text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Mengenal Lebih Dekat
            <span className="mt-2 block text-emerald-300">
              SMAN 1 Karangkobar
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-emerald-50/80 sm:text-lg">
            {konten.deskripsiUtama}
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="#visi-misi"
              className="rounded-xl bg-white px-6 py-3 font-bold text-emerald-950 transition hover:bg-emerald-50"
            >
              Visi dan Misi
            </a>

            <Link
              href="/berita"
              className="rounded-xl border border-white/30 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
            >
              Berita Sekolah
            </Link>
          </div>
        </div>
      </section>

      {/* Identitas Sekolah */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-emerald-700">
              Identitas Sekolah
            </p>

            <h2 className="mt-3 text-3xl font-extrabold leading-tight text-gray-900 sm:text-4xl">
              SMA Negeri 1 Karangkobar
            </h2>

            <p className="mt-5 leading-8 text-gray-600">
              {konten.deskripsiIdentitas}
            </p>

            <p className="mt-4 leading-8 text-gray-600">
              {konten.deskripsiIdentitasTambahan}
            </p>
          </div>

          <div className="rounded-3xl border border-gray-200 bg-gray-50 p-7 sm:p-9">
            <img
              src="/images/logo-sekolah.jpeg"
              alt="Logo SMA Negeri 1 Karangkobar"
              className="h-20 w-20 rounded-2xl bg-white object-contain p-1"
            />

            <h3 className="mt-5 text-xl font-bold text-gray-900">
              Informasi Sekolah
            </h3>

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
                  Jl. Leksana No. 25, Karangkobar, Banjarnegara, Jawa Tengah
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sejarah Sekolah */}
      <section className="border-y border-gray-100 bg-white">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20">
          <div className="grid gap-8 md:grid-cols-[1fr_2fr] md:items-start">
            <div>
              <p className="text-sm font-bold uppercase tracking-widest text-emerald-700">
                Mengenal Perjalanan Sekolah
              </p>

              <h2 className="mt-3 text-3xl font-extrabold leading-tight text-gray-900 sm:text-4xl">
                Sejarah Sekolah
              </h2>
            </div>

            <div className="rounded-3xl border border-gray-200 bg-gray-50 p-6 sm:p-8">
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-800">
                  <span className="text-2xl font-extrabold">1985</span>
                </div>

                <div>
                  <p className="text-sm font-semibold text-emerald-700">
                    Tahun Berdiri
                  </p>
                  <h3 className="mt-1 text-xl font-bold text-gray-900">
                    SMA Negeri 1 Karangkobar
                  </h3>
                </div>
              </div>

              <p className="mt-6 whitespace-pre-line leading-8 text-gray-600">
                {konten.deskripsiSejarah}
              </p>

              <p className="mt-4 whitespace-pre-line leading-8 text-gray-600">
                {konten.deskripsiSejarahTambahan}
              </p>

              <a
                href="http://www.smansakarangkobar.sch.id/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex font-semibold text-emerald-800 transition hover:text-emerald-950"
              >
                Kunjungi situs sekolah →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Visi dan Misi */}
      <section
        id="visi-misi"
        className="scroll-mt-24 border-y border-gray-100 bg-gray-50"
      >
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-700">
              Arah dan Tujuan Sekolah
            </p>

            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Visi dan Misi
            </h2>

            <p className="mt-4 leading-7 text-gray-600">
              Visi dan misi menjadi pedoman dalam membangun lingkungan
              pendidikan yang bertakwa, berprestasi, inovatif, dan peduli
              terhadap lingkungan hidup.
            </p>
          </div>

          {/* Visi */}
          <div className="mt-12 overflow-hidden rounded-3xl bg-linear-to-br from-emerald-950 via-emerald-900 to-teal-800 p-8 text-white shadow-lg sm:p-12">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-xl font-bold">
                V
              </div>

              <h3 className="text-2xl font-extrabold">Visi</h3>
            </div>

            <blockquote className="mt-6 text-xl font-semibold leading-relaxed text-emerald-50 sm:text-2xl">
              “{konten.visi}”
            </blockquote>
          </div>

          {/* Misi */}
          <div className="mt-10">
            <div className="mb-6">
              <h3 className="text-2xl font-extrabold text-gray-900">
                Misi Sekolah
              </h3>

              <p className="mt-2 leading-7 text-gray-600">
                {konten.pengantarMisi}
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {konten.misi.map((misi, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 rounded-2xl border border-gray-200 bg-white p-5 transition duration-300 hover:border-emerald-300 hover:shadow-md"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-100 font-bold text-emerald-800">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <p className="pt-1 leading-7 text-gray-700">{misi}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Navigasi Lanjutan */}
      <section className="bg-white">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-5 py-14 sm:px-8 md:flex-row md:items-center">
          <div>
            <h2 className="text-2xl font-extrabold text-gray-900 sm:text-3xl">
              Kenali Kegiatan Sekolah
            </h2>

            <p className="mt-3 max-w-2xl leading-7 text-gray-600">
              Temukan informasi dan dokumentasi kegiatan sekolah melalui
              halaman berita.
            </p>
          </div>

          <Link
            href="/berita"
            className="shrink-0 rounded-xl bg-emerald-800 px-6 py-3 font-bold text-white transition hover:bg-emerald-900"
          >
            Jelajahi Berita →
          </Link>
        </div>
      </section>
    </main>
  );
}

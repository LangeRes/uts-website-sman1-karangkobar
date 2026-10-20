
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ambilHalaman } from "@/lib/halamanStorage";

export default function KontenHome() {
  const [konten, setKonten] = useState(null);

  useEffect(() => {
    setKonten(ambilHalaman().home);
  }, []);

  if (!konten) {
    return null;
  }

  return (
    <>
      {/* Sambutan */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-700">
            Sambutan
          </p>

          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            {konten.judulSambutan}
          </h2>

          <p className="mt-6 text-base leading-8 text-gray-600">
            {konten.isiSambutan}
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
              {konten.judulProfil}
            </h2>

            <p className="mt-5 leading-8 text-gray-600">
              {konten.isiProfil}
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

      {/* Ajakan */}
      <section className="bg-emerald-900">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-7 px-5 py-14 sm:px-8 md:flex-row md:items-center">
          <div>
            <h2 className="text-2xl font-extrabold text-white sm:text-3xl">
              {konten.judulAjakan}
            </h2>

            <p className="mt-3 max-w-2xl leading-7 text-emerald-100/80">
              {konten.isiAjakan}
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
    </>
  );
}

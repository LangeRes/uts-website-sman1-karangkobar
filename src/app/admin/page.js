
"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { ambilBerita } from "@/lib/beritaStorage";

export default function AdminDashboardPage() {
  const router = useRouter();
  const [berita, setBerita] = useState([]);
  const [sudahDiperiksa, setSudahDiperiksa] = useState(false);

  useEffect(() => {
    const statusLogin = sessionStorage.getItem("adminLogin");

    if (statusLogin !== "true") {
      router.replace("/admin/login");
      return;
    }

    setBerita(ambilBerita());
    setSudahDiperiksa(true);
  }, [router]);

  function handleLogout() {
    sessionStorage.removeItem("adminLogin");
    router.replace("/admin/login");
  }

  if (!sudahDiperiksa) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-gray-50">
        <p className="text-gray-600">Memeriksa sesi admin...</p>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-100">
      <header className="border-b border-gray-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-5 py-5 sm:px-8">
          <div>
            <p className="text-sm font-bold uppercase tracking-wider text-emerald-700">
              SMAN 1 Karangkobar
            </p>
            <h1 className="mt-1 text-2xl font-extrabold text-gray-900">
              Dashboard Admin
            </h1>
          </div>

          <div className="flex flex-wrap gap-3">
            <Link
              href="/"
              className="rounded-xl border border-gray-300 px-4 py-2.5 text-sm font-semibold text-gray-700 transition hover:bg-gray-50"
            >
              Lihat Website
            </Link>

            <button
              onClick={handleLogout}
              className="rounded-xl bg-red-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-red-700"
            >
              Keluar
            </button>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-7xl space-y-8 px-5 py-8 sm:px-8 sm:py-10">
        <section>
          <p className="text-gray-600">Selamat datang, Admin!</p>
          <h2 className="mt-1 text-2xl font-bold text-gray-900">
            Ringkasan Website
          </h2>
          <p className="mt-2 text-gray-600">
            Kelola berita dan informasi website sekolah dari satu tempat.
          </p>
        </section>

        <section className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <p className="text-sm font-medium text-gray-500">
              Total Berita
            </p>
            <p className="mt-3 text-4xl font-extrabold text-emerald-800">
              {berita.length}
            </p>
            <p className="mt-2 text-sm text-gray-500">
              Jumlah berita yang tersedia
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <p className="text-sm font-medium text-gray-500">
              Pengelolaan Konten
            </p>
            <p className="mt-3 text-2xl font-extrabold text-gray-900">
              Berita Sekolah
            </p>
            <p className="mt-2 text-sm text-gray-500">
              Tambahkan atau perbarui informasi sekolah
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <p className="text-sm font-medium text-gray-500">
              Status
            </p>
            <p className="mt-3 text-2xl font-extrabold text-emerald-700">
              Login Aktif
            </p>
            <p className="mt-2 text-sm text-gray-500">
              Sesi admin pada browser ini
            </p>
          </div>
        </section>

        <section className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
          <h2 className="text-xl font-bold text-gray-900">
            Menu Pengelolaan
          </h2>
          <p className="mt-2 text-gray-600">
            Pilih bagian website yang ingin kamu kelola.
          </p>

          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
            <Link
              href="/admin/berita"
              className="rounded-xl border border-emerald-200 bg-emerald-50 p-5 transition hover:border-emerald-500 hover:bg-emerald-100"
            >
              <h3 className="font-bold text-emerald-950">
                Kelola Berita
              </h3>
              <p className="mt-2 text-sm leading-6 text-emerald-900">
                Tambahkan berita, ubah informasi, unggah gambar, atau hapus berita.
              </p>
              <p className="mt-4 text-sm font-bold text-emerald-800">
                Buka pengelolaan berita →
              </p>
            </Link>

            <Link
              href="/admin/halaman"
              className="rounded-xl border border-gray-200 bg-gray-50 p-5 transition hover:border-emerald-400 hover:bg-emerald-50"
            >
              <h3 className="font-bold text-gray-900">
                Kelola Halaman Sekolah
              </h3>
              <p className="mt-2 text-sm leading-6 text-gray-600">
                Menu untuk mengelola konten Beranda dan Tentang Sekolah.
              </p>
              <p className="mt-4 text-sm font-bold text-emerald-800">
                Buka pengelolaan halaman →
              </p>
            </Link>
          </div>
        </section>

        <section className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <h2 className="text-xl font-bold text-gray-900">
                Berita Terbaru
              </h2>
              <p className="mt-1 text-sm text-gray-600">
                Data berita yang dibaca dari penyimpanan browser.
              </p>
            </div>

            <Link
              href="/admin/berita"
              className="rounded-xl bg-emerald-900 px-4 py-2.5 text-sm font-bold text-white transition hover:bg-emerald-800"
            >
              Kelola Berita
            </Link>
          </div>

          <div className="mt-5 divide-y divide-gray-100">
            {berita.slice(0, 5).map((item) => (
              <div
                key={item.id}
                className="flex flex-col gap-2 py-4 sm:flex-row sm:items-center sm:justify-between"
              >
                <div>
                  <h3 className="font-semibold text-gray-900">
                    {item.judul}
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">
                    {item.kategori} · {item.tanggal}
                  </p>
                </div>

                <span className="w-fit rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-800">
                  Tersedia
                </span>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}

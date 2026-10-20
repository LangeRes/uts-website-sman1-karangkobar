
"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  ambilBerita,
  simpanBerita,
} from "@/lib/beritaStorage";

export default function AdminBeritaPage() {
  const router = useRouter();

  const [berita, setBerita] = useState([]);
  const [siap, setSiap] = useState(false);
  const [pesan, setPesan] = useState("");

  useEffect(() => {
    if (sessionStorage.getItem("adminLogin") !== "true") {
      router.replace("/admin/login");
      return;
    }

    setBerita(ambilBerita());
    setSiap(true);
  }, [router]);

  function hapusBerita(id) {
    const konfirmasi = window.confirm(
      "Apakah kamu yakin ingin menghapus berita ini?"
    );

    if (!konfirmasi) return;

    const beritaBaru = berita.filter(
      (item) => item.id !== id
    );

    const berhasil = simpanBerita(beritaBaru);

    if (berhasil) {
      setBerita(beritaBaru);
      setPesan("Berita berhasil dihapus.");
    } else {
      setPesan("Gagal menghapus berita. Penyimpanan mungkin penuh.");
    }
  }

  if (!siap) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-gray-50">
        <p className="text-gray-600">Memuat data berita...</p>
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
              Kelola Berita
            </h1>
          </div>

          <Link
            href="/admin"
            className="rounded-xl border border-gray-300 px-4 py-2.5 text-sm font-semibold text-gray-700 hover:bg-gray-50"
          >
            Kembali ke Dashboard
          </Link>
        </div>
      </header>

      <div className="mx-auto max-w-7xl space-y-6 px-5 py-8 sm:px-8">
        <section className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <h2 className="text-xl font-bold text-gray-900">
              Daftar Berita Sekolah
            </h2>
            <p className="mt-1 text-sm text-gray-600">
              Total {berita.length} berita tersimpan.
            </p>
          </div>

          <button
            onClick={() =>
              router.push("/admin/berita/tambah")
            }
            className="rounded-xl bg-emerald-900 px-5 py-3 font-bold text-white transition hover:bg-emerald-800"
          >
            + Tambah Berita
          </button>
        </section>

        {pesan && (
          <div
            role="status"
            className="rounded-xl bg-emerald-50 p-4 text-sm font-medium text-emerald-800"
          >
            {pesan}
          </div>
        )}

        <section className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
          {berita.length === 0 ? (
            <div className="p-10 text-center">
              <h3 className="font-bold text-gray-900">
                Belum ada berita
              </h3>
              <p className="mt-2 text-sm text-gray-600">
                Klik Tambah Berita untuk membuat berita pertama.
              </p>
            </div>
          ) : (
            <div className="divide-y divide-gray-100">
              {berita.map((item) => (
                <article
                  key={item.id}
                  className="flex flex-col gap-4 p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6"
                >
                  <div className="min-w-0 flex-1">
                    <h3 className="font-bold text-gray-900">
                      {item.judul}
                    </h3>

                    <p className="mt-2 text-sm text-gray-500">
                      {item.kategori} · {item.tanggal}
                    </p>

                    <p className="mt-2 text-sm leading-6 text-gray-600">
                      {item.ringkasan}
                    </p>
                  </div>

                  <div className="flex shrink-0 flex-wrap gap-2">
                    <button
                      onClick={() =>
                        router.push(
                          `/admin/berita/edit/${item.id}`
                        )
                      }
                      className="rounded-lg border border-emerald-700 px-4 py-2 text-sm font-semibold text-emerald-800 transition hover:bg-emerald-50"
                    >
                      Edit
                    </button>

                    <button
                      onClick={() => hapusBerita(item.id)}
                      className="rounded-lg border border-red-200 px-4 py-2 text-sm font-semibold text-red-700 transition hover:bg-red-50"
                    >
                      Hapus
                    </button>
                  </div>
                </article>
              ))}
            </div>
          )}
        </section>
      </div>
    </main>
  );
}

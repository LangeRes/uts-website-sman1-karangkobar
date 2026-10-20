
"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  ambilBerita,
  simpanBerita,
} from "@/lib/beritaStorage";

export default function TambahBeritaPage() {
  const router = useRouter();

  const [judul, setJudul] = useState("");
  const [tanggal, setTanggal] = useState("");
  const [kategori, setKategori] = useState("Kegiatan Sekolah");
  const [ringkasan, setRingkasan] = useState("");
  const [isi, setIsi] = useState("");
  const [gambar, setGambar] = useState("");
  const [namaGambar, setNamaGambar] = useState("");
  const [pesan, setPesan] = useState("");
  const [siap, setSiap] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem("adminLogin") !== "true") {
      router.replace("/admin/login");
      return;
    }

    setSiap(true);
  }, [router]);

  function handlePilihGambar(event) {
    const file = event.target.files?.[0];

    if (!file) return;

    if (!file.type.startsWith("image/")) {
      setPesan("Pilih file gambar yang valid.");
      event.target.value = "";
      return;
    }

    if (file.size > 1024 * 1024) {
      setPesan("Ukuran gambar maksimal 1 MB untuk demonstrasi lokal.");
      event.target.value = "";
      return;
    }

    const reader = new FileReader();

    reader.onload = () => {
      setGambar(String(reader.result));
      setNamaGambar(file.name);
      setPesan("");
    };

    reader.onerror = () => {
      setPesan("Gambar gagal dibaca. Silakan coba kembali.");
    };

    reader.readAsDataURL(file);
  }

  function handleSimpan(event) {
    event.preventDefault();
    setPesan("");

    if (!judul.trim() || !tanggal || !ringkasan.trim() || !isi.trim()) {
      setPesan("Lengkapi judul, tanggal, ringkasan, dan isi berita.");
      return;
    }

    const daftarBerita = ambilBerita();

    const beritaBaru = {
      id: String(Date.now()),
      judul: judul.trim(),
      tanggal: new Date(`${tanggal}T00:00:00`).toLocaleDateString(
        "id-ID",
        {
          day: "numeric",
          month: "long",
          year: "numeric",
        }
      ),
      kategori,
      sumber: "Admin Sekolah",
      urlSumber: "",
      gambar: gambar || "/images/sekolah.jpeg",
      ringkasan: ringkasan.trim(),
      isi: isi
        .split("\n")
        .map((paragraf) => paragraf.trim())
        .filter(Boolean),
    };

    const berhasil = simpanBerita([
      beritaBaru,
      ...daftarBerita,
    ]);

    if (!berhasil) {
      setPesan(
        "Berita gagal disimpan. Penyimpanan browser mungkin penuh."
      );
      return;
    }

    router.push("/admin/berita");
    router.refresh();
  }

  if (!siap) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-gray-50">
        <p className="text-gray-600">Memeriksa sesi admin...</p>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-100">
      <header className="border-b border-gray-200 bg-white">
        <div className="mx-auto flex max-w-4xl items-center justify-between gap-4 px-5 py-5">
          <div>
            <p className="text-sm font-bold uppercase tracking-wider text-emerald-700">
              SMAN 1 Karangkobar
            </p>
            <h1 className="mt-1 text-2xl font-extrabold text-gray-900">
              Tambah Berita
            </h1>
          </div>

          <Link
            href="/admin/berita"
            className="rounded-xl border border-gray-300 px-4 py-2.5 text-sm font-semibold text-gray-700 hover:bg-gray-50"
          >
            Kembali
          </Link>
        </div>
      </header>

      <div className="mx-auto max-w-4xl px-5 py-8">
        <form
          onSubmit={handleSimpan}
          className="space-y-6 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8"
        >
          <div>
            <h2 className="text-xl font-bold text-gray-900">
              Informasi Berita
            </h2>
            <p className="mt-2 text-sm leading-6 text-gray-600">
              Isi formulir berikut untuk menambahkan berita ke website sekolah.
            </p>
          </div>

          <div>
            <label
              htmlFor="judul"
              className="mb-2 block text-sm font-semibold text-gray-700"
            >
              Judul Berita *
            </label>
            <input
              id="judul"
              value={judul}
              onChange={(event) => setJudul(event.target.value)}
              required
              maxLength={180}
              placeholder="Contoh: Prestasi Siswa SMAN 1 Karangkobar"
              className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-emerald-700 focus:ring-2 focus:ring-emerald-100"
            />
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <div>
              <label
                htmlFor="tanggal"
                className="mb-2 block text-sm font-semibold text-gray-700"
              >
                Tanggal Berita *
              </label>
              <input
                id="tanggal"
                type="date"
                value={tanggal}
                onChange={(event) => setTanggal(event.target.value)}
                required
                className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-emerald-700 focus:ring-2 focus:ring-emerald-100"
              />
            </div>

            <div>
              <label
                htmlFor="kategori"
                className="mb-2 block text-sm font-semibold text-gray-700"
              >
                Kategori
              </label>
              <select
                id="kategori"
                value={kategori}
                onChange={(event) => setKategori(event.target.value)}
                className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 outline-none focus:border-emerald-700 focus:ring-2 focus:ring-emerald-100"
              >
                <option>Kegiatan Sekolah</option>
                <option>Pendidikan</option>
                <option>Prestasi Siswa</option>
                <option>Kreativitas Siswa</option>
                <option>Kedisiplinan</option>
                <option>Lingkungan</option>
                <option>Pengumuman</option>
                <option>Lainnya</option>
              </select>
            </div>
          </div>

          <div>
            <label
              htmlFor="ringkasan"
              className="mb-2 block text-sm font-semibold text-gray-700"
            >
              Ringkasan Berita *
            </label>
            <textarea
              id="ringkasan"
              value={ringkasan}
              onChange={(event) => setRingkasan(event.target.value)}
              required
              maxLength={500}
              rows={3}
              placeholder="Tuliskan ringkasan singkat berita..."
              className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-emerald-700 focus:ring-2 focus:ring-emerald-100"
            />
          </div>

          <div>
            <label
              htmlFor="isi"
              className="mb-2 block text-sm font-semibold text-gray-700"
            >
              Isi Berita *
            </label>
            <textarea
              id="isi"
              value={isi}
              onChange={(event) => setIsi(event.target.value)}
              required
              rows={7}
              placeholder={"Tuliskan isi berita di sini.\n\nGunakan baris kosong untuk memisahkan paragraf."}
              className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-emerald-700 focus:ring-2 focus:ring-emerald-100"
            />
            <p className="mt-2 text-xs text-gray-500">
              Setiap paragraf yang dipisahkan oleh baris kosong akan disimpan sebagai paragraf tersendiri.
            </p>
          </div>

          <div>
            <label
              htmlFor="gambar"
              className="mb-2 block text-sm font-semibold text-gray-700"
            >
              Gambar Berita
            </label>
            <input
              id="gambar"
              type="file"
              accept="image/*"
              onChange={handlePilihGambar}
              className="block w-full rounded-xl border border-gray-300 p-3 text-sm text-gray-700 file:mr-4 file:rounded-lg file:border-0 file:bg-emerald-50 file:px-4 file:py-2 file:font-semibold file:text-emerald-800"
            />
            <p className="mt-2 text-xs text-gray-500">
              Format gambar yang didukung mengikuti browser. Maksimal 1 MB untuk demonstrasi lokal.
            </p>

            {namaGambar && (
              <div className="mt-3 space-y-2">
                <p className="text-sm text-emerald-800">
                  Gambar dipilih: {namaGambar}
                </p>
                {gambar && (
                  <img
                    src={gambar}
                    alt="Pratinjau gambar berita"
                    className="max-h-64 rounded-xl border border-gray-200 object-contain"
                  />
                )}
              </div>
            )}
          </div>

          {pesan && (
            <p
              role="alert"
              className="rounded-xl bg-red-50 p-4 text-sm text-red-700"
            >
              {pesan}
            </p>
          )}

          <div className="flex flex-wrap gap-3 border-t border-gray-100 pt-5">
            <button
              type="submit"
              className="rounded-xl bg-emerald-900 px-6 py-3 font-bold text-white transition hover:bg-emerald-800"
            >
              Simpan Berita
            </button>

            <Link
              href="/admin/berita"
              className="rounded-xl border border-gray-300 px-6 py-3 font-semibold text-gray-700 hover:bg-gray-50"
            >
              Batal
            </Link>
          </div>
        </form>
      </div>
    </main>
  );
}

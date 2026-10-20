
"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { ambilBerita, simpanBerita } from "@/lib/beritaStorage";

export default function EditBeritaPage() {
  const params = useParams();
  const router = useRouter();
  const id = params.id;

  const [siap, setSiap] = useState(false);
  const [tidakDitemukan, setTidakDitemukan] = useState(false);

  const [judul, setJudul] = useState("");
  const [tanggal, setTanggal] = useState("");
  const [kategori, setKategori] = useState("Informasi Sekolah");
  const [ringkasan, setRingkasan] = useState("");
  const [isi, setIsi] = useState("");
  const [gambarLama, setGambarLama] = useState("");
  const [gambarBaru, setGambarBaru] = useState("");

  useEffect(() => {
    const daftarBerita = ambilBerita();

    const beritaTerpilih = daftarBerita.find(
      (item) => String(item.id) === String(id)
    );

    if (!beritaTerpilih) {
      setTidakDitemukan(true);
      setSiap(true);
      return;
    }

    setJudul(beritaTerpilih.judul || "");
    setKategori(beritaTerpilih.kategori || "Informasi Sekolah");
    setRingkasan(beritaTerpilih.ringkasan || "");
    setIsi(
      Array.isArray(beritaTerpilih.isi)
        ? beritaTerpilih.isi.join("\n")
        : beritaTerpilih.isi || ""
    );
    setGambarLama(beritaTerpilih.gambar || "");

    // Mengubah tanggal yang sudah diformat menjadi tanggal formulir.
    const tanggalAsli = beritaTerpilih.tanggal || "";
    const bagianTanggal = tanggalAsli.match(
      /^(\d{1,2}) (\w+) (\d{4})$/
    );

    const namaBulan = [
      "Januari", "Februari", "Maret", "April",
      "Mei", "Juni", "Juli", "Agustus",
      "September", "Oktober", "November", "Desember",
    ];

    if (bagianTanggal) {
      const [, hari, bulan, tahun] = bagianTanggal;
      const nomorBulan = namaBulan.indexOf(bulan);

      if (nomorBulan !== -1) {
        setTanggal(
          `${tahun}-${String(nomorBulan + 1).padStart(2, "0")}-${String(hari).padStart(2, "0")}`
        );
      }
    } else if (/^\d{4}-\d{2}-\d{2}$/.test(tanggalAsli)) {
      setTanggal(tanggalAsli);
    }

    setSiap(true);
  }, [id]);

  function pilihGambar(event) {
    const file = event.target.files?.[0];

    if (!file) return;

    if (!file.type.startsWith("image/")) {
      alert("Silakan pilih file gambar.");
      event.target.value = "";
      return;
    }

    if (file.size > 1024 * 1024) {
      alert("Ukuran gambar maksimal 1 MB.");
      event.target.value = "";
      return;
    }

    const pembaca = new FileReader();

    pembaca.onload = () => {
      setGambarBaru(String(pembaca.result));
    };

    pembaca.readAsDataURL(file);
  }

  function simpanPerubahan(event) {
    event.preventDefault();

    if (!judul.trim() || !tanggal || !ringkasan.trim() || !isi.trim()) {
      alert("Mohon isi judul, tanggal, ringkasan, dan isi berita.");
      return;
    }

    const daftarBerita = ambilBerita();

    const indeks = daftarBerita.findIndex(
      (item) => String(item.id) === String(id)
    );

    if (indeks === -1) {
      alert("Berita tidak ditemukan. Silakan kembali ke daftar berita.");
      return;
    }

    const [tahun, bulan, hari] = tanggal.split("-").map(Number);
    const namaBulan = [
      "Januari", "Februari", "Maret", "April",
      "Mei", "Juni", "Juli", "Agustus",
      "September", "Oktober", "November", "Desember",
    ];

    const tanggalTampilan =
      `${hari} ${namaBulan[bulan - 1]} ${tahun}`;

    const beritaLama = daftarBerita[indeks];

    const beritaDiperbarui = {
      ...beritaLama,
      judul: judul.trim(),
      tanggal: tanggalTampilan,
      kategori,
      ringkasan: ringkasan.trim(),
      isi: isi.split("\n").map((paragraf) => paragraf.trim()).filter(Boolean),
      gambar: gambarBaru || gambarLama || "/images/sekolah.jpeg",
    };

    const daftarBaru = [...daftarBerita];
    daftarBaru[indeks] = beritaDiperbarui;

    const berhasil = simpanBerita(daftarBaru);

    if (!berhasil) {
      alert("Perubahan gagal disimpan. Periksa penyimpanan browser.");
      return;
    }

    alert("Berita berhasil diperbarui!");
    router.push("/admin/berita");
    router.refresh();
  }

  if (!siap) {
    return <main className="p-8">Memuat data berita...</main>;
  }

  if (tidakDitemukan) {
    return (
      <main className="mx-auto max-w-2xl p-8">
        <h1 className="text-2xl font-bold">Berita Tidak Ditemukan</h1>
        <p className="mt-3 text-gray-600">
          Berita yang ingin diedit tidak ditemukan di penyimpanan browser.
        </p>
        <Link
          href="/admin/berita"
          className="mt-5 inline-flex rounded-lg bg-emerald-800 px-5 py-3 font-semibold text-white"
        >
          Kembali ke Daftar Berita
        </Link>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50 px-5 py-10">
      <div className="mx-auto max-w-3xl">
        <Link
          href="/admin/berita"
          className="text-sm font-semibold text-emerald-800 hover:underline"
        >
          ← Kembali ke Daftar Berita
        </Link>

        <div className="mt-5 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
          <h1 className="text-2xl font-extrabold text-gray-900">
            Edit Berita
          </h1>
          <p className="mt-2 text-gray-600">
            Ubah informasi berita, lalu simpan perubahan.
          </p>

          <form onSubmit={simpanPerubahan} className="mt-8 space-y-5">
            <div>
              <label htmlFor="judul" className="mb-2 block font-semibold">
                Judul Berita
              </label>
              <input
                id="judul"
                value={judul}
                onChange={(event) => setJudul(event.target.value)}
                required
                className="w-full rounded-xl border border-gray-300 px-4 py-3 text-gray-900"
              />
            </div>

            <div>
              <label htmlFor="tanggal" className="mb-2 block font-semibold">
                Tanggal
              </label>
              <input
                id="tanggal"
                type="date"
                value={tanggal}
                onChange={(event) => setTanggal(event.target.value)}
                required
                className="w-full rounded-xl border border-gray-300 px-4 py-3 text-gray-900"
              />
            </div>

            <div>
              <label htmlFor="kategori" className="mb-2 block font-semibold">
                Kategori
              </label>
              <select
                id="kategori"
                value={kategori}
                onChange={(event) => setKategori(event.target.value)}
                className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-900"
              >
                <option>Informasi Sekolah</option>
                <option>Prestasi Siswa</option>
                <option>Kegiatan Sekolah</option>
                <option>Pengumuman</option>
                <option>Akademik</option>
              </select>
            </div>

            <div>
              <label htmlFor="ringkasan" className="mb-2 block font-semibold">
                Ringkasan Berita
              </label>
              <textarea
                id="ringkasan"
                value={ringkasan}
                onChange={(event) => setRingkasan(event.target.value)}
                required
                rows={3}
                className="w-full rounded-xl border border-gray-300 px-4 py-3 text-gray-900"
              />
            </div>

            <div>
              <label htmlFor="isi" className="mb-2 block font-semibold">
                Isi Berita
              </label>
              <textarea
                id="isi"
                value={isi}
                onChange={(event) => setIsi(event.target.value)}
                required
                rows={7}
                className="w-full rounded-xl border border-gray-300 px-4 py-3 text-gray-900"
              />
              <p className="mt-1 text-sm text-gray-500">
                Pisahkan setiap paragraf dengan menekan Enter.
              </p>
            </div>

            <div>
              <label htmlFor="gambar" className="mb-2 block font-semibold">
                Ganti Gambar (opsional)
              </label>

              {gambarBaru ? (
                <img
                  src={gambarBaru}
                  alt="Pratinjau gambar baru"
                  className="mb-3 max-h-56 rounded-xl object-cover"
                />
              ) : gambarLama ? (
                <img
                  src={gambarLama}
                  alt="Gambar berita saat ini"
                  className="mb-3 max-h-56 rounded-xl object-cover"
                />
              ) : null}

              <input
                id="gambar"
                type="file"
                accept="image/*"
                onChange={pilihGambar}
                className="block w-full text-sm text-gray-700"
              />
              <p className="mt-1 text-sm text-gray-500">
                Format gambar umum, maksimal 1 MB. Kosongkan jika tidak ingin mengganti gambar.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 pt-3">
              <button
                type="submit"
                className="rounded-xl bg-emerald-800 px-6 py-3 font-bold text-white transition hover:bg-emerald-700"
              >
                Simpan Perubahan
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
      </div>
    </main>
  );
}

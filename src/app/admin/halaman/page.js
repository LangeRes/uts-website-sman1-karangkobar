
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ambilHalaman, simpanHalaman } from "@/lib/halamanStorage";

export default function KelolaHalaman() {
  const [halaman, setHalaman] = useState(null);
  const [pilihan, setPilihan] = useState("home");
  const [pesan, setPesan] = useState("");

  useEffect(() => {
    setHalaman(ambilHalaman());
  }, []);

  function ubahTeks(namaField, nilai) {
    setHalaman((dataLama) => ({
      ...dataLama,
      [pilihan]: {
        ...dataLama[pilihan],
        [namaField]: nilai,
      },
    }));

    setPesan("");
  }

  function ubahMisi(index, nilai) {
    setHalaman((dataLama) => {
      const misiBaru = [...dataLama.about.misi];
      misiBaru[index] = nilai;

      return {
        ...dataLama,
        about: {
          ...dataLama.about,
          misi: misiBaru,
        },
      };
    });

    setPesan("");
  }

  function simpanPerubahan(event) {
    event.preventDefault();

    if (simpanHalaman(halaman)) {
      setPesan("Perubahan berhasil disimpan.");
    } else {
      setPesan("Gagal menyimpan perubahan. Silakan coba lagi.");
    }
  }

  if (!halaman) {
    return (
      <main className="mx-auto max-w-4xl p-6">
        <p>Memuat data halaman...</p>
      </main>
    );
  }

  const fieldHome = [
    {
      nama: "judulUtama",
      label: "Judul utama",
    },
    {
      nama: "deskripsiUtama",
      label: "Deskripsi utama",
    },
    {
      nama: "judulSambutan",
      label: "Judul sambutan",
    },
    {
      nama: "isiSambutan",
      label: "Isi sambutan",
    },
    {
      nama: "judulProfil",
      label: "Judul profil sekolah",
    },
    {
      nama: "isiProfil",
      label: "Deskripsi profil sekolah",
    },
    {
      nama: "judulBerita",
      label: "Judul bagian berita",
    },
    {
      nama: "deskripsiBerita",
      label: "Deskripsi bagian berita",
    },
    {
      nama: "judulAjakan",
      label: "Judul ajakan",
    },
    {
      nama: "isiAjakan",
      label: "Deskripsi ajakan",
    },
  ];

  const fieldAbout = [
    {
      nama: "deskripsiUtama",
      label: "Deskripsi utama",
    },
    {
      nama: "deskripsiIdentitas",
      label: "Deskripsi identitas sekolah",
    },
    {
      nama: "deskripsiIdentitasTambahan",
      label: "Deskripsi tambahan identitas",
    },
    {
      nama: "deskripsiSejarah",
      label: "Sejarah sekolah",
    },
    {
      nama: "deskripsiSejarahTambahan",
      label: "Deskripsi tambahan sejarah",
    },
    {
      nama: "visi",
      label: "Visi sekolah",
    },
    {
      nama: "pengantarMisi",
      label: "Pengantar misi",
    },
  ];

  const daftarField = pilihan === "home" ? fieldHome : fieldAbout;

  return (
    <main className="min-h-screen bg-gray-50 px-5 py-10">
      <div className="mx-auto max-w-4xl">
        <Link
          href="/admin"
          className="text-sm font-semibold text-emerald-800 hover:text-emerald-600"
        >
          ← Kembali ke Dashboard
        </Link>

        <div className="mt-6">
          <h1 className="text-3xl font-extrabold text-gray-900">
            Kelola Halaman Sekolah
          </h1>

          <p className="mt-2 leading-7 text-gray-600">
            Ubah teks halaman Home dan About melalui formulir berikut.
          </p>
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <button
            type="button"
            onClick={() => {
              setPilihan("home");
              setPesan("");
            }}
            className={`rounded-xl px-5 py-3 font-semibold ${
              pilihan === "home"
                ? "bg-emerald-800 text-white"
                : "border border-gray-300 bg-white text-gray-700"
            }`}
          >
            Halaman Home
          </button>

          <button
            type="button"
            onClick={() => {
              setPilihan("about");
              setPesan("");
            }}
            className={`rounded-xl px-5 py-3 font-semibold ${
              pilihan === "about"
                ? "bg-emerald-800 text-white"
                : "border border-gray-300 bg-white text-gray-700"
            }`}
          >
            Halaman About
          </button>
        </div>

        <form
          onSubmit={simpanPerubahan}
          className="mt-6 space-y-6 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8"
        >
          <div>
            <h2 className="text-xl font-bold text-gray-900">
              {pilihan === "home" ? "Konten Home" : "Konten About"}
            </h2>

            <p className="mt-2 text-sm leading-6 text-gray-500">
              {pilihan === "home"
                ? "Atur teks sambutan, profil singkat, dan ajakan."
                : "Atur deskripsi, sejarah, visi, dan misi sekolah."}
            </p>
          </div>

          {daftarField.map((field) => (
            <div key={field.nama}>
              <label
                htmlFor={field.nama}
                className="mb-2 block text-sm font-semibold text-gray-700"
              >
                {field.label}
              </label>

              <textarea
                id={field.nama}
                rows={field.nama.toLowerCase().includes("deskripsi") ||
                field.nama.toLowerCase().includes("isi") ||
                field.nama.toLowerCase().includes("sejarah")
                  ? 4
                  : 2}
                value={halaman[pilihan][field.nama] || ""}
                onChange={(event) =>
                  ubahTeks(field.nama, event.target.value)
                }
                className="w-full rounded-xl border border-gray-300 px-4 py-3 text-gray-800 outline-none transition focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100"
              />
            </div>
          ))}

          {pilihan === "about" && (
            <div>
              <h3 className="mb-4 text-lg font-bold text-gray-900">
                Misi Sekolah
              </h3>

              <p className="mb-4 text-sm leading-6 text-gray-500">
                Setiap kotak mewakili satu misi. Untuk saat ini, jumlah misi
                mengikuti sembilan misi yang sudah tersedia.
              </p>

              {halaman.about.misi.map((misi, index) => (
                <div key={index} className="mb-4">
                  <label
                    htmlFor={`misi-${index}`}
                    className="mb-2 block text-sm font-semibold text-gray-700"
                  >
                    Misi {index + 1}
                  </label>

                  <textarea
                    id={`misi-${index}`}
                    rows={2}
                    value={misi}
                    onChange={(event) =>
                      ubahMisi(index, event.target.value)
                    }
                    className="w-full rounded-xl border border-gray-300 px-4 py-3 text-gray-800 outline-none transition focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100"
                  />
                </div>
              ))}
            </div>
          )}

          <button
            type="submit"
            className="w-full rounded-xl bg-emerald-800 px-6 py-3 font-bold text-white transition hover:bg-emerald-900 sm:w-auto"
          >
            Simpan Perubahan
          </button>

          {pesan && (
            <p
              role="status"
              className={`text-sm font-semibold ${
                pesan.startsWith("Perubahan")
                  ? "text-emerald-700"
                  : "text-red-600"
              }`}
            >
              {pesan}
            </p>
          )}
        </form>
      </div>
    </main>
  );
}


import beritaAwal from "@/data/berita";

const STORAGE_KEY = "sman1-karangkobar-berita";

// Mengambil semua berita dari penyimpanan browser.
export function ambilBerita() {
  if (typeof window === "undefined") {
    return beritaAwal;
  }

  try {
    const dataTersimpan = localStorage.getItem(STORAGE_KEY);

    if (dataTersimpan) {
      return JSON.parse(dataTersimpan);
    }

    return beritaAwal;
  } catch (error) {
    console.error("Gagal membaca data berita:", error);
    return beritaAwal;
  }
}

// Menyimpan semua berita ke penyimpanan browser.
export function simpanBerita(dataBerita) {
  if (typeof window === "undefined") {
    return false;
  }

  try {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(dataBerita)
    );

    return true;
  } catch (error) {
    console.error("Gagal menyimpan data berita:", error);
    return false;
  }
}

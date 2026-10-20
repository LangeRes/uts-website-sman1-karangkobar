
"use client";

import { useEffect, useState } from "react";
import BeritaCard from "@/components/BeritaCard";
import { ambilBerita } from "@/lib/beritaStorage";

export default function DaftarBerita() {
  const [berita, setBerita] = useState([]);

  useEffect(() => {
    setBerita(ambilBerita());
  }, []);

  return (
    <>
      {berita.length > 0 ? (
        <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {berita.map((item) => (
            <BeritaCard key={item.id} berita={item} />
          ))}
        </div>
      ) : (
        <div className="rounded-2xl border border-gray-200 bg-white p-10 text-center">
          <h3 className="text-lg font-bold text-gray-900">
            Belum Ada Berita
          </h3>

          <p className="mt-2 text-gray-600">
            Berita sekolah belum tersedia saat ini.
          </p>
        </div>
      )}
    </>
  );
}

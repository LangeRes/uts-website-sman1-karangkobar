
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-auto bg-gray-950 text-gray-300">
      <div className="mx-auto grid max-w-7xl gap-8 px-5 py-10 sm:grid-cols-2 sm:px-8">
        <div>
          <h2 className="text-lg font-bold text-white">
            SMA Negeri 1 Karangkobar
          </h2>
          <p className="mt-3 max-w-md text-sm leading-6 text-gray-400">
            Website profil dan informasi sekolah untuk mengenal lingkungan,
            kegiatan, serta perkembangan SMAN 1 Karangkobar.
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-white">Informasi Sekolah</h3>
          <p className="mt-3 text-sm leading-6 text-gray-400">
            Jl. Leksana No. 25, Karangkobar,
            Banjarnegara, Jawa Tengah.
          </p>
          <p className="mt-2 text-sm">
            <a
              href="mailto:sman1karangkobar@yahoo.com"
              className="transition hover:text-white"
            >
              sman1karangkobar@yahoo.com
            </a>
          </p>
          <Link
            href="/about"
            className="mt-3 inline-block text-sm text-emerald-300 hover:text-white"
          >
            Profil Sekolah →
          </Link>
        </div>
      </div>

      <div className="border-t border-white/10 px-5 py-5 text-center text-xs text-gray-500">
        © 2026 SMA Negeri 1 Karangkobar. Website profil sekolah.
      </div>
    </footer>
  );
}

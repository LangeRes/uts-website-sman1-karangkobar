
import Link from "next/link";

export default function BeritaCard({ berita }) {
  return (
    <article className="overflow-hidden rounded-2xl border border-gray-200 bg-white transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      <Link
        href={`/berita/${berita.id}`}
        aria-label={`Baca ${berita.judul}`}
        className="block"
      >
        <div
          role="img"
          aria-label={`Foto terkait berita ${berita.judul}`}
          className="relative flex h-52 items-end bg-gradient-to-br from-emerald-950 via-emerald-800 to-teal-600 bg-cover bg-center p-5"
          style={
            berita.gambar
              ? {
                  backgroundImage: `linear-gradient(to top, rgba(6, 40, 30, 0.72), rgba(6, 40, 30, 0.05)), url("${berita.gambar}")`,
                }
              : undefined
          }
        >
          <span className="rounded-full border border-white/30 bg-black/20 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm">
            {berita.kategori}
          </span>
        </div>
      </Link>

      <div className="p-6">
        <div className="flex flex-wrap items-center gap-2 text-xs text-gray-500">
          <time>{berita.tanggal}</time>
          <span aria-hidden="true">·</span>
          <span>{berita.sumber}</span>
        </div>

        <h2 className="mt-3 text-xl font-bold leading-snug text-gray-900">
          <Link
            href={`/berita/${berita.id}`}
            className="transition hover:text-emerald-800"
          >
            {berita.judul}
          </Link>
        </h2>

        <p className="mt-3 text-sm leading-7 text-gray-600">
          {berita.ringkasan}
        </p>

        <Link
          href={`/berita/${berita.id}`}
          className="mt-5 inline-flex items-center gap-2 font-bold text-emerald-800 hover:text-emerald-600"
        >
          Baca Selengkapnya <span aria-hidden="true">→</span>
        </Link>
      </div>
    </article>
  );
}

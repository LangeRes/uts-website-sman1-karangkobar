
import Link from "next/link";
import { notFound } from "next/navigation";
import berita from "@/data/berita";

export function generateStaticParams() {
  return berita.map((item) => ({
    id: item.id,
  }));
}

export async function generateMetadata({ params }) {
  const { id } = await params;
  const beritaTerpilih = berita.find((item) => item.id === id);

  if (!beritaTerpilih) {
    return {
      title: "Berita Tidak Ditemukan | SMAN 1 Karangkobar",
    };
  }

  return {
    title: `${beritaTerpilih.judul} | SMAN 1 Karangkobar`,
    description: beritaTerpilih.ringkasan,
  };
}

export default async function DetailBeritaPage({ params }) {
  const { id } = await params;

  const beritaTerpilih = berita.find((item) => item.id === id);

  if (!beritaTerpilih) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-gray-50">
      <section className="bg-emerald-950 px-6 py-14 text-white md:py-20">
        <div className="mx-auto max-w-4xl">
          <Link
            href="/berita"
            className="inline-flex items-center gap-2 text-sm font-medium text-emerald-200 transition hover:text-white"
          >
            <span aria-hidden="true">←</span>
            Kembali ke Berita
          </Link>

          <div className="mt-8">
            <span className="inline-block rounded-full border border-emerald-400/40 bg-emerald-800/60 px-4 py-1.5 text-sm font-semibold text-emerald-100">
              {beritaTerpilih.kategori}
            </span>

            <h1 className="mt-5 text-3xl font-extrabold leading-tight tracking-tight md:text-5xl">
              {beritaTerpilih.judul}
            </h1>

            <div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-emerald-100">
              <span>{beritaTerpilih.tanggal}</span>
              <span aria-hidden="true">·</span>
              <span>Sumber: {beritaTerpilih.sumber}</span>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-10 md:py-14">
        <article className="mx-auto max-w-4xl overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm">
          <div className="bg-gray-100">
            <img
              src={beritaTerpilih.gambar}
              alt={`Foto terkait ${beritaTerpilih.judul}`}
              className="max-h-[480px] w-full object-cover"
            />
          </div>

          <div className="p-6 md:p-10">
            <p className="border-l-4 border-emerald-700 pl-4 text-lg font-medium leading-8 text-gray-700">
              {beritaTerpilih.ringkasan}
            </p>

            <div className="mt-7 space-y-5">
              {beritaTerpilih.isi.map((paragraf, index) => (
                <p
                  key={index}
                  className="text-base leading-8 text-gray-600"
                >
                  {paragraf}
                </p>
              ))}
            </div>

            <div className="mt-10 border-t border-gray-200 pt-6">
              <p className="text-sm text-gray-500">
                Sumber berita: {beritaTerpilih.sumber}
              </p>

              {beritaTerpilih.urlSumber && (
                <a
                  href={beritaTerpilih.urlSumber}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex items-center gap-2 font-semibold text-emerald-800 transition hover:text-emerald-600"
                >
                  Kunjungi Sumber Asli
                  <span aria-hidden="true">↗</span>
                </a>
              )}
            </div>

            <div className="mt-8">
              <Link
                href="/berita"
                className="inline-flex items-center justify-center rounded-xl bg-emerald-800 px-5 py-3 font-semibold text-white transition hover:bg-emerald-700"
              >
                Lihat Berita Lainnya
              </Link>
            </div>
          </div>
        </article>
      </section>
    </main>
  );
}

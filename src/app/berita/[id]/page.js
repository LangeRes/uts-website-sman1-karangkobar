
import Link from "next/link";
import { notFound } from "next/navigation";
import beritaAwal from "@/data/berita";
import DetailBerita from "./DetailBerita";

export async function generateMetadata({ params }) {
  const { id } = await params;

  const beritaTerpilih = beritaAwal.find(
    (item) => String(item.id) === String(id)
  );

  return {
    title: beritaTerpilih
      ? `${beritaTerpilih.judul} | SMAN 1 Karangkobar`
      : "Detail Berita | SMAN 1 Karangkobar",
    description: beritaTerpilih?.ringkasan ||
      "Informasi dan berita SMA Negeri 1 Karangkobar.",
  };
}

export default async function DetailBeritaPage({ params }) {
  const { id } = await params;

  return (
    <main className="min-h-screen bg-gray-50">
      <DetailBerita id={id} />
    </main>
  );
}

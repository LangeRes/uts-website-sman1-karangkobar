import Link from "next/link";

export default async function TodoDetailPage({ params }) {
  const { id } = await params;

  return (
    <main className="p-8 max-w-xl mx-auto space-y-4">
      <h1 className="text-3xl font-bold text-purple-600">
        Detail tugas: {id}
      </h1>
      <Link href="/" className="text-blue-500 hover:underline">
        Kembali ke Home
      </Link>
    </main>
  );
}

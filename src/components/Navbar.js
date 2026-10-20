"use client";

import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/95 backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 sm:px-8">
        {/* Logo dan Identitas Sekolah */}
        <Link href="/" className="flex items-center gap-3">
          <div className="relative flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-white">
            <Image
              src="/images/logo-sekolah.jpeg"
              alt="Logo SMA Negeri 1 Karangkobar"
              width={48}
              height={48}
              className="h-full w-full object-contain"
              priority
            />
          </div>

          <div>
            <p className="text-sm font-extrabold tracking-tight text-gray-900 sm:text-base">
              SMAN 1 Karangkobar
            </p>
            <p className="mt-0.5 text-xs text-gray-500 sm:text-sm">
              Banjarnegara, Jawa Tengah
            </p>
          </div>
        </Link>

        {/* Navigasi */}
        <div className="flex items-center gap-3 text-sm font-semibold text-gray-600 sm:gap-7">
          <Link
            href="/"
            className="transition hover:text-emerald-700"
          >
            Home
          </Link>

          <Link
            href="/about"
            className="transition hover:text-emerald-700"
          >
            <span className="sm:hidden">Profil</span>
            <span className="hidden sm:inline">Tentang Kami</span>
          </Link>

          <Link
            href="/berita"
            className="transition hover:text-emerald-700"
          >
            Berita
          </Link>

          {/* Tautan Admin */}
          <Link
            href="/admin/login"
            className="rounded-lg bg-emerald-900 px-3 py-2 font-bold text-white transition hover:bg-emerald-800 sm:px-4"
          >
            Admin
          </Link>
        </div>
      </nav>
    </header>
  );
}
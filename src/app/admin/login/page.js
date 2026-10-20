
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLoginPage() {
  const router = useRouter();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  function handleLogin(event) {
    event.preventDefault();
    setError("");

    if (username === "admin" && password === "admin123") {
      sessionStorage.setItem("adminLogin", "true");
      router.push("/admin");
    } else {
      setError("Username atau password salah.");
    }
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-linear-to-br from-emerald-950 via-emerald-900 to-teal-800 px-5 py-10">
      <div className="w-full max-w-md rounded-3xl bg-white p-8 shadow-2xl sm:p-10">
        <div className="mb-8 text-center">
          <div className="mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-2xl bg-emerald-100 text-3xl font-extrabold text-emerald-900">
            S
          </div>

          <p className="text-sm font-bold uppercase tracking-widest text-emerald-700">
            SMAN 1 Karangkobar
          </p>

          <h1 className="mt-3 text-3xl font-extrabold text-gray-900">
            Login Admin
          </h1>

          <p className="mt-3 text-sm leading-6 text-gray-500">
            Masuk untuk mengelola berita dan konten website sekolah.
          </p>
        </div>

        <form onSubmit={handleLogin} className="space-y-5">
          <div>
            <label
              htmlFor="username"
              className="mb-2 block text-sm font-semibold text-gray-700"
            >
              Username
            </label>

            <input
              id="username"
              type="text"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
              placeholder="Masukkan username"
              autoComplete="username"
              required
              className="w-full rounded-xl border border-gray-300 px-4 py-3 text-gray-900 outline-none transition focus:border-emerald-700 focus:ring-4 focus:ring-emerald-100"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="mb-2 block text-sm font-semibold text-gray-700"
            >
              Password
            </label>

            <input
              id="password"
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              placeholder="Masukkan password"
              autoComplete="current-password"
              required
              className="w-full rounded-xl border border-gray-300 px-4 py-3 text-gray-900 outline-none transition focus:border-emerald-700 focus:ring-4 focus:ring-emerald-100"
            />
          </div>

          {error && (
            <p
              role="alert"
              className="rounded-xl bg-red-50 p-3 text-sm text-red-700"
            >
              {error}
            </p>
          )}

          <button
            type="submit"
            className="w-full rounded-xl bg-emerald-900 px-5 py-3.5 font-bold text-white transition hover:bg-emerald-800 focus:outline-none focus:ring-4 focus:ring-emerald-200"
          >
            Masuk ke Dashboard
          </button>
        </form>

        <p className="mt-6 text-center text-xs text-gray-400">
          Halaman khusus pengelola website sekolah.
        </p>
      </div>
    </main>
  );
}

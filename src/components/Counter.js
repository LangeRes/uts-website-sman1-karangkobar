"use client";

import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="p-4 border border-gray-200 rounded-xl bg-white shadow-sm inline-block space-y-2">
      <p className="font-semibold text-gray-700">Jumlah klik: {count}</p>
      <div className="space-x-2">
        <button
          onClick={() => setCount(count + 1)}
          className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded-md text-sm font-medium"
        >
          Tambah
        </button>
        <button
          onClick={() => setCount(0)}
          className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-3 py-1 rounded-md text-sm font-medium"
        >
          Reset
        </button>
      </div>
    </div>
  );
}

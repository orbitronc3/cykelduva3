"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Category } from "./types";

export default function Home() {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    (async () => {
      const response = await fetch("/api/dinosaurs");
      const allCategories = (await response.json()) as Category[];
      setCategories(allCategories);
    })();
  }, []);

  return (
    <main className="space-y-6">
      <h1 className="text-3xl font-semibold">Välkommen till CykelDuva</h1>
      <p className="text-gray-400">
        Utforska våra cykelkategorier och hitta rätt vägledning för ditt nästa köp.
      </p>

      <div className="flex flex-col gap-3">
        {categories.map((category) => (
          <Link
            key={category.slug}
            href={`/kategorier/${category.slug}`}
            className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700 transition"
          >
            {category.name}
          </Link>
        ))}
      </div>
    </main>
  );
}

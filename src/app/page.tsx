"use client";

import { useEffect, useState } from "react";
import { Dino } from "./types";
import Link from "next/link";

export default function Home() {
  const [dinosaurs, setDinosaurs] = useState<Dino[]>([]);

  useEffect(() => {
    (async () => {
      const response = await fetch(`/api/dinosaurs`);
      const allDinosaurs = (await response.json()) as Dino[];
      setDinosaurs(allDinosaurs);
    })();
  }, []);

  return (
    <main className="max-w-3xl mx-auto px-4 py-16 space-y-10">
      {/* HEADER */}
      <header className="text-center space-y-2">
        <h1 className="text-3xl font-semibold tracking-tight">
          Utforska cykelvärlden
        </h1>
        <p className="text-zinc-500 text-sm">
          Vi använder dinosaurier som platshållare — klicka på en för att se mer.
        </p>
      </header>

      {/* LIST */}
      <div className="grid gap-4">
        {dinosaurs.map((dino) => (
          <Link
            key={dino.name}
            href={`/${dino.name.toLowerCase()}`}
            className="block border rounded-xl p-4 bg-white dark:bg-zinc-900 shadow-sm hover:bg-zinc-50 dark:hover:bg-zinc-800 transition"
          >
            <p className="text-lg font-medium">{dino.name}</p>
            <p className="text-sm text-zinc-500">{dino.description}</p>
          </Link>
        ))}
      </div>

      {/* FOOTER */}
      <footer className="text-center pt-6">
        <p className="text-xs text-zinc-400">
          Design inspirerad av CykelDuva — ren, tydlig och modern.
        </p>
      </footer>
    </main>
  );
}

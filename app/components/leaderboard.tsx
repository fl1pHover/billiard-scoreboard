"use client";

import { usePlayers } from "@/providers/player-provider";

export default function Leaderboard() {
  const { players } = usePlayers();

  return (
    <div className="space-y-2">
      <h2 className="font-semibold text-xl">Leaderboard</h2>
      {players.length === 0 && <p>Одоогоор тоглогч байхгүй...</p>}

      <ul className="space-y-1">
        {players.map((p, i) => (
          <li key={i} className="border p-2 rounded">
            <span className="font-medium">{p.nickName}</span> — {p.experience} жил
          </li>
        ))}
      </ul>
    </div>
  );
}

"use client";

import { usePlayers } from "@/providers/player-provider";

export default function Leaderboard() {
  const { players } = usePlayers();

  return (
    <div className="content-container space-y-6">
      <h2 className="font-semibold text-xl">Players</h2>
      {players.length === 0 && <p>Одоогоор тоглогч байхгүй...</p>}

      <ul className="space-y-1">
        {players.map((p, i) => (
          <li key={i} className="border-b last:border-b-none p-2 rounded flex justify-between">
            <span className="font-medium">{p.nickName}</span>
            <span className="font-medium">{p.experience} жил</span>
            {/* <span className="font-medium">{p.win}</span>
            <span className="font-medium">{p.win / p.total * 100}%</span>
            <span className="font-medium">{p.total}</span>
            <span className="font-medium">{p.elo}</span> */}
          </li>
        ))}
      </ul>
    </div>
  );
}

"use client";

import { createContext, useContext, useState } from "react";

export type Player = {
  nickName: string;
  experience: number;
  elo?: number;
  total?: number;
  win?: number;
  // winRate: number;
};

const PlayerContext = createContext<{
  players: Player[];
  addPlayer: (player: Player) => void;
}>({
  players: [],
  addPlayer: () => {},
});

export function PlayerProvider({ children }: { children: React.ReactNode }) {
  const [players, setPlayers] = useState<Player[]>([]);

  const addPlayer = (player: Player) => {
    setPlayers((prev) => [...prev, player]);
  };

  return (
    <PlayerContext.Provider value={{ players, addPlayer }}>
      {children}
    </PlayerContext.Provider>
  );
}

export function usePlayers() {
  return useContext(PlayerContext);
}

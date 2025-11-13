// page.tsx
"use client";
import { createStore } from "little-state-machine";

export interface Player {
  playerName: string;
  experience: number;
  isVeteran: boolean;
}
declare module "little-state-machine" {
  interface GlobalState {
    players: Player[];
  }
}

createStore({
  players: [],
});

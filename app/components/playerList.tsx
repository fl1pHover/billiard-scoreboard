"use client";

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { createStore, useStateMachine } from "little-state-machine";
import { useForm, SubmitHandler } from "react-hook-form";

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

export function addPlayer(state: { players: Player[] }, payload: Player) {
  return {
    ...state,
    players: [...state.players, payload],
  };
}

export default function PlayerList() {
  const { state, actions } = useStateMachine({ actions: { addPlayer } });

  const { register, handleSubmit, reset } = useForm<Player>({
    defaultValues: {
      playerName: "",
      experience: 0,
      // isVeteran: false,
    },
  });

  const onSubmit: SubmitHandler<Player> = (data) => {
    actions.addPlayer(data);
    reset();
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("playerName")} placeholder="Name" />
        <input type="number" {...register("experience")} placeholder="Experience" />
        {/* <label>
          <input type="checkbox" {...register("isVeteran")} /> Veteran?
        </label> */}
        <button type="submit">Add</button>
      </form>

      <Table className="border">
        <TableHeader className="">
          <TableRow className="h-12 bg-muted/50">
            <TableHead className="w-[50px] text-center">#</TableHead>
            <TableHead>Player</TableHead>
            <TableHead>Experience (year)</TableHead>
            <TableHead className="text-right">Total</TableHead>
            <TableHead className="text-right">Win</TableHead>
            <TableHead className="text-right">Win Rate</TableHead>
            <TableHead className="text-right">ELO</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {state.players.map((p: Player, i: number) => (
            <TableRow key={i} className="h-12">
              <TableCell className="font-medium text-center">{i + 1}</TableCell>
              <TableCell> {p.playerName ? p.playerName : "Player" + (i + 1)}</TableCell>
              <TableCell>{p.experience}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

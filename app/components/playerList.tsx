"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useStateMachine } from "little-state-machine";
import { addPlayer } from "../page";

export default function PlayerList() {
  const { state, actions } = useStateMachine({ actions: { addPlayer } });

  return (
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
        {state.players.length === 0 ? (
          <TableRow className="h-12">
            <TableCell className="font-medium text-center text-gray-500">
              Тоглогч байхгүй байна
            </TableCell>
          </TableRow>
        ) : (
          state.players.map((p, i) => (
            <TableRow key={i} className="h-12">
              <TableCell className="font-medium text-center">{i + 1}</TableCell>
              <TableCell>
                {p.playerName ? p.playerName : "Player" + (i + 1)}
              </TableCell>
              <TableCell>{p.experience ? p.experience : 0}</TableCell>
            </TableRow>
          ))
        )}
      </TableBody>
    </Table>
  );
}

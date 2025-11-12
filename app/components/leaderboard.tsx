"use client";

import { usePlayers } from "@/providers/player-provider";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export default function Leaderboard() {
  const { players } = usePlayers();

  return (
    <div className="content-container space-y-6">
      <h2 className="font-semibold text-xl">Players</h2>

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
          {players.map((p, i) => (
            <TableRow key={i} className="h-12">
              <TableCell className="font-medium text-center">{i + 1}</TableCell>
              <TableCell>{p.nickName}</TableCell>
              <TableCell>{p.experience}</TableCell>
              <TableCell className="text-right">{p.total}</TableCell>
              <TableCell className="text-right">{p.win}</TableCell>
              <TableCell className="text-right">{p.elo}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {players.length === 0 && <p className="text-center text-sm">Одоогоор тоглогч байхгүй.</p>}
    </div>
  );
}

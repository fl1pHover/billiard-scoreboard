"use client";

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { createStore, useStateMachine } from "little-state-machine";
import { useForm, SubmitHandler } from "react-hook-form";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import DialogBox from "@/components/common/dialogBox";
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
      experience: undefined,
      // isVeteran: false,
    },
  });

  const onSubmit: SubmitHandler<Player> = (data) => {
    actions.addPlayer(data);
    reset();
  };

  return (
    <div>
      <DialogBox trigger={<Button>Тоглогч нэмэх</Button>} title="Шинэ тоглогч нэмэх" description={"А болон B талаас нэг болон түүнээс дээш тоглогч сонгон эхлүүлээрэй."} containerClass="max-w-sm!">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <Input {...register("playerName")} placeholder="Тоглогчийн нэр" />
          <Input type="number" {...register("experience")} placeholder="Тоглосон жил" />
          {/* <label>
          <input type="checkbox" {...register("isVeteran")} /> Veteran?
        </label> */}
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline" className="mr-2">
                Цуцлах
              </Button>
            </DialogClose>
            <Button type="submit" className="flex">
              Тоглогчийн нэмэх
            </Button>
          </DialogFooter>
        </form>
      </DialogBox>

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
              <TableCell>{p.experience ? p.experience : 0}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

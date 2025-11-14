"use client";

import { createStore, useStateMachine } from "little-state-machine";
import PlayerList from "./components/playerList";
import { SubmitHandler, useForm } from "react-hook-form";
import DialogBox from "@/components/common/dialogBox";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { DialogClose } from "@radix-ui/react-dialog";
import { DialogFooter } from "@/components/ui/dialog";
import { useToastMessage } from "@/components/common/toast-message";
import { useRef } from "react";
import { Match } from "./matches/page";

// Player type
export interface Player {
  playerName: string;
  experience: number;
  isVeteran: boolean;
}

// hello

declare module "little-state-machine" {
  interface GlobalState {
    players: Player[];
    matches: Match[];
  }
}

// Store initial
createStore({
  players: [],
  matches: [],
});

// Action
export function addPlayer(
  state: { players: Player[] },
  payload: { players: Player[] },
) {
  return {
    ...state,
    players: [...state.players, payload],
  };
}

export default function App() {
  const { showToast } = useToastMessage();

  const { actions } = useStateMachine({ actions: { addPlayer } });

  const { register, handleSubmit, reset } = useForm<Player>({
    defaultValues: {
      playerName: "",
      experience: undefined,
    },
  });

  const onSubmit: SubmitHandler<Player> = (data) => {
    actions.addPlayer(data);
    showToast("success", `Тоглогч ${data.playerName} нэмэгдлээ!`);

    reset();
  };

  return (
    <section className="space-y-6 content-container">
      <DialogBox
        trigger={<Button>Тоглогч нэмэх</Button>}
        title="Шинэ тоглогч нэмэх"
        description={
          "А болон B талаас нэг болон түүнээс дээш тоглогч сонгон эхлүүлээрэй."
        }
        containerClass="max-w-sm!"
      >
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <Input {...register("playerName")} placeholder="Тоглогчийн нэр" />
          <Input
            type="number"
            {...register("experience")}
            placeholder="Тоглосон жил"
          />
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
      <PlayerList />
    </section>
  );
}

"use client";

import { useState } from "react";
import { useStateMachine } from "little-state-machine";
import { addPlayer, Player } from "../page";
import DialogBox from "@/components/common/dialogBox";
import { Button } from "@/components/ui/button";
import { DialogClose } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { SubmitHandler } from "react-hook-form";
import { useToastMessage } from "@/components/common/toast-message";

export interface Match {
  id: string;
  playerA: Player;
  playerB: Player;
}

export function addMatch(state: { matches: Match[] }, payload: Match) {
  return {
    ...state,
    matches: [...state.matches, payload],
  };
}

export default function PlayerList() {
  const { showToast } = useToastMessage();
  const { state, actions } = useStateMachine({ actions: { addPlayer } });
  const [selectedPlayers, setSelectedPlayers] = useState<string[]>([]);
  const [activeMatch, setActiveMatch] = useState<string[]>([]);

  const toggleSelect = (name: string) => {
    setSelectedPlayers((prev) =>
      prev.includes(name)
        ? prev.filter((n) => n !== name)
        : prev.length < 2
          ? [...prev, name]
          : prev,
    );
  };

  const startMatch = () => {
    if (selectedPlayers.length === 2) {
      setActiveMatch(selectedPlayers);
      setSelectedPlayers([]);
    } else {
      // alert("Хоёр тоглогч сонгоно уу!");
      showToast("error", `Хоёр тоглогч сонгоно уу`);
    }
  };

  const onSubmit: SubmitHandler<Player> = (data) => {
    actions.addPlayer(data);
    showToast("success", `Тоглолт нэмэгдлээ!`);
  };

  return (
    <div className="content-container space-y-6">
      <DialogBox
        title="Шинэ тоглолт эхлүүлэх"
        description="А болон B талаас 2 тоглогч сонгон эхлүүлээрэй."
        trigger={<Button>Шинэ тоглолт</Button>}
        footer={
          <>
            <DialogClose asChild>
              <Button variant="outline">Цуцлах</Button>
            </DialogClose>
            <DialogClose asChild>
              <Button onClick={startMatch}>Эхлүүлэх</Button>
            </DialogClose>
          </>
        }
      >
        <div className="space-y-2 grid grid-cols-2 gap-6">
          <ScrollArea className="h-[50vh] w-full rounded-md border gap-y-0.5">
            {state.players.length === 0 ? (
              <p className="text-gray-500">No players yet.</p>
            ) : (
              state.players.map((p, i) => {
                const selected = selectedPlayers.includes(p.playerName);
                return (
                  <div
                    key={i}
                    onClick={() => toggleSelect(p.playerName)}
                    className={`cursor-pointer border p-2 transition ${selected ? "bg-primary text-white" : "hover:bg-muted hover:text-foreground"}`}
                  >
                    {p.playerName} — {p.experience}y{" "}
                    {p.isVeteran ? "(Veteran)" : "(Newbie)"}
                  </div>
                );
              })
            )}
          </ScrollArea>
          <div>
            <h3 className="text-md font-semibold mb-2">Match Lobby</h3>
            {selectedPlayers.length === 0 ? (
              <p className="text-gray-500">Тоглогч сонгоогүй байна</p>
            ) : (
              <div className="grid grid-cols-2 gap-2">
                {selectedPlayers.map((name, index) => {
                  const player = state.players.find(
                    (p) => p.playerName === name,
                  );
                  if (!player) return null;
                  return (
                    <div
                      key={index}
                      className="p-2 border rounded-lg bg-background text-center shadow"
                    >
                      <p className="font-medium">{player.playerName}</p>
                      <p className="text-sm text-gray-500">
                        {player.experience} жил
                      </p>
                      <p className="text-sm">
                        {player.isVeteran ? "Veteran" : "Newbie"}
                      </p>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </DialogBox>

      {activeMatch.length > 0 && (
        <section className="p-4 border rounded-xl">
          <h2 className="text-lg font-semibold mb-3">Тоглолт</h2>
          <div className="grid grid-cols-2 gap-4">
            {activeMatch.map((name, index) => (
              <div
                key={index}
                className="p-4 border rounded-lg bg-background text-center shadow"
              >
                <p className="font-medium text-lg">{name}</p>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}

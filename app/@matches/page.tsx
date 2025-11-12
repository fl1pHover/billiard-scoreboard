"use client";

import { usePlayers } from "@/providers/player-provider";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useToastMessage } from "@/components/common/toast-message";
type Team = {
  name: string;
  players: string[];
};

export default function Page() {
  const { players } = usePlayers();
  const { showToast } = useToastMessage();

  const [teamA, setTeamA] = useState<string[]>([]);
  const [teamB, setTeamB] = useState<string[]>([]);
  const [status, setStatus] = useState<"idle" | "started">("idle");
  const [showAlert, setShowAlert] = useState(false);

  const addToTeamA = (nick: string) => {
    if (!teamA.includes(nick) && !teamB.includes(nick)) {
      setTeamA([...teamA, nick]);
    }
  };

  const addToTeamB = (nick: string) => {
    if (!teamA.includes(nick) && !teamB.includes(nick)) {
      setTeamB([...teamB, nick]);
    }
  };

  const startMatch = () => {
    if (teamA.length < 1 || teamB.length < 1) {
      // alert("Хоёр талаас дор хаяж 1 тоглогч сонгоорой.");
      showToast("error", "Анхаар!", "A болон B талаас дор хаяж 1 тоглогч сонгоорой!");
      return;
    }
    setStatus("started");
  };

  const removeFromTeamA = (nick: string) => {
    setTeamA((prev) => prev.filter((p) => p !== nick));
  };

  const removeFromTeamB = (nick: string) => {
    setTeamB((prev) => prev.filter((p) => p !== nick));
  };

  return (
    <div className="content-container space-y-6">
      <h2 className="font-semibold text-xl">Matches</h2>
      <Dialog>
        <DialogTrigger asChild>
          <Button>Шинэ тоглолт</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader className="pb-6 border-b">
            <DialogTitle>Шинэ тоглолт эхлүүлэх</DialogTitle>
            <DialogDescription>А болон B талаас нэг болон түүнээс дээш тоглогч сонгон эхлүүлээрэй.</DialogDescription>
          </DialogHeader>
          <div className="space-y-6">
            <div className="">
              <h2 className="font-semibold mb-4">Тоглогчид</h2>
              <div className="grid grid-cols-3 gap-4">
                {players.map((p) => (
                  <div key={p.nickName} className="p-2 border rounded">
                    <div className="font-medium">{p.nickName}</div>
                    <div className="text-xs opacity-60 py-2 border-b">
                      Total: {p.total} | Win: {p.win} | Elo: {p.elo}
                    </div>
                    <div className="flex gap-2 mt-2">
                      <Button size={"sm"} className="text-sm border rounded cursor-pointer" onClick={() => addToTeamA(p.nickName)} disabled={teamB.includes(p.nickName)}>
                        Team A
                      </Button>
                      <Button size={"sm"} className="text-sm border rounded cursor-pointer" onClick={() => addToTeamB(p.nickName)} disabled={teamA.includes(p.nickName)}>
                        Team B
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-4">
              <h1 className="font-bold">Баг хуваалт</h1>
              <div className="col-span-full relative h-2 bg-input space-y-3">
                <div className="absolute "></div>
                <div className="absolute left-[50%] top-[50%] -translate-[50%] h-[200%] bg-white w-[1px]"></div>
                <div className="absolute left-[48%] top-0 -translate-x-[50%] h-full bg-primary w-10"></div>
              </div>
              <div className="grid grid-cols-3 gap-10">
                {/* Team A */}
                <div>
                  <h2 className="font-semibold mb-4">Team A - ( {teamA.length} тоглогч )</h2>
                  <ul className="space-y-2">
                    {teamA.map((nick) => (
                      <li key={nick} className="p-2 pl-3 border rounded flex justify-between items-center">
                        <span>{nick}</span>
                        <Button size="sm" variant="ghost" onClick={() => removeFromTeamA(nick)}>
                          ✕
                        </Button>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex items-center flex-col justify-center gap-1">
                  <h1 className="font-semibold tracking-wider text-sm">Ready</h1>
                  <h2 className="text-xs text-primary font-bold">BO1</h2>
                </div>
                {/* Team B */}
                <div>
                  <h2 className="font-semibold mb-4">Team B - ( {teamB.length} тоглогч )</h2>
                  <ul className="space-y-2">
                    {teamB.map((nick) => (
                      <li key={nick} className="p-2 pl-3 border rounded flex justify-between items-center">
                        <span>{nick}</span>
                        <Button size="sm" variant="ghost" onClick={() => removeFromTeamB(nick)}>
                          ✕
                        </Button>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Цуцлах</Button>
            </DialogClose>
            <Button onClick={startMatch}>Эхлүүлэх</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      <div className="col-span-3 mt-6">
        {status === "started" && (
          <div className="flex items-center border p-4 rounded-md">
            {teamA.map((nick) => (
              <div key={nick} className="p-2 flex-1 flex">
                {nick}
              </div>
            ))}
            <div className="flex flex-col gap-0.5 justify-center items-center">
              <h1>
                {teamA.length} VS {teamB.length}
              </h1>
              <div className="bg-green-500 size-2 rounded-full"></div>
              <h1>VS</h1>
            </div>
            {teamB.map((nick) => (
              <div key={nick} className="p-2 flex-1 flex justify-end">
                {nick}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

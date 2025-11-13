// "use client";

// import { useState } from "react";
// import { Button } from "@/components/ui/button";
// import { DialogClose } from "@/components/ui/dialog";
// import { useToastMessage } from "@/components/common/toast-message";
// import DialogBox from "@/components/common/dialogBox";

// export default function Page() {
//   // const { players } = usePlayers();
//   const { showToast } = useToastMessage();

//   const [teamA, setTeamA] = useState<string[]>([]);
//   const [teamB, setTeamB] = useState<string[]>([]);
//   const [status, setStatus] = useState<"idle" | "started">("idle");

//   const addToTeamA = (nick: string) => {
//     if (!teamA.includes(nick) && !teamB.includes(nick)) {
//       setTeamA([...teamA, nick]);
//     }
//   };

//   const addToTeamB = (nick: string) => {
//     if (!teamA.includes(nick) && !teamB.includes(nick)) {
//       setTeamB([...teamB, nick]);
//     }
//   };

//   const startMatch = () => {
//     if (teamA.length < 1 || teamB.length < 1) {
//       // alert("Хоёр талаас дор хаяж 1 тоглогч сонгоорой.");
//       showToast(
//         "error",
//         "Анхаар!",
//         "A болон B талаас дор хаяж 1 тоглогч сонгоорой!",
//       );
//       return;
//     }
//     setStatus("started");
//   };

//   const endMatch = () => {
//     setStatus("idle");
//     setTeamA([]);
//     setTeamB([]);
//   };

//   const removeFromTeamA = (nick: string) => {
//     setTeamA((prev) => prev.filter((p) => p !== nick));
//   };

//   const removeFromTeamB = (nick: string) => {
//     setTeamB((prev) => prev.filter((p) => p !== nick));
//   };

//   return (
//     <div className="content-container space-y-6">
//       <h2 className="font-semibold text-xl">Matches</h2>
//       <DialogBox
//         title="Шинэ тоглолт эхлүүлэх"
//         description="А болон B талаас нэг болон түүнээс дээш тоглогч сонгон эхлүүлээрэй."
//         trigger={<Button>Шинэ тоглолт</Button>}
//         footer={
//           <>
//             <DialogClose asChild>
//               <Button variant="outline">Цуцлах</Button>
//             </DialogClose>
//             <DialogClose asChild>
//               <Button onClick={startMatch}>Эхлүүлэх</Button>
//             </DialogClose>
//           </>
//         }
//       >
//         <div className="space-y-6">
//           <div className="">
//             <h2 className="font-semibold mb-4">Тоглогчид</h2>
//             <div className="grid grid-cols-3 gap-4">
//               {/* {players.map((p) => (
//                 <div key={p.nickName} className="p-2 border rounded">
//                   <div className="font-medium">{p.nickName}</div>
//                   <div className="text-xs opacity-60 py-2 border-b">
//                     Total: {p.total} | Win: {p.win} | Elo: {p.elo}
//                   </div>
//                   <div className="flex gap-2 mt-2">
//                     <Button size={"sm"} className="text-sm border rounded cursor-pointer" onClick={() => addToTeamA(p.nickName)} disabled={teamB.includes(p.nickName)}>
//                       Team A
//                     </Button>
//                     <Button size={"sm"} className="text-sm border rounded cursor-pointer" onClick={() => addToTeamB(p.nickName)} disabled={teamA.includes(p.nickName)}>
//                       Team B
//                     </Button>
//                   </div>
//                 </div>
//               ))} */}
//             </div>
//           </div>
//           <div className="space-y-4">
//             <h1 className="font-bold">Баг хуваалт</h1>
//             {/* <div className="col-span-full relative h-2 bg-input space-y-3">
//                 <div className="absolute left-[50%] top-[50%] -translate-[50%] h-[200%] bg-white w-[1px]"></div>
//                 <div className="absolute left-[48%] top-0 -translate-x-[50%] h-full bg-primary w-10"></div>
//               </div> */}
//             <div className="grid grid-cols-3 gap-10">
//               {/* Team A */}
//               <div>
//                 <h2 className="font-semibold mb-4">
//                   Team A - ( {teamA.length} тоглогч )
//                 </h2>
//                 <ul className="space-y-2">
//                   {teamA.map((nick) => (
//                     <li
//                       key={nick}
//                       className="p-2 pl-3 border rounded flex justify-between items-center"
//                     >
//                       <span>{nick}</span>
//                       <Button
//                         size="sm"
//                         variant="ghost"
//                         onClick={() => removeFromTeamA(nick)}
//                       >
//                         ✕
//                       </Button>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//               <div className="flex items-center flex-col justify-center gap-1">
//                 <h1 className="font-semibold tracking-wider text-sm">Ready</h1>
//                 <h2 className="text-xs text-primary font-bold">BO1</h2>
//               </div>
//               {/* Team B */}
//               <div>
//                 <h2 className="font-semibold mb-4">
//                   Team B - ( {teamB.length} тоглогч )
//                 </h2>
//                 <ul className="space-y-2">
//                   {teamB.map((nick) => (
//                     <li
//                       key={nick}
//                       className="p-2 pl-3 border rounded flex justify-between items-center"
//                     >
//                       <span>{nick}</span>
//                       <Button
//                         size="sm"
//                         variant="ghost"
//                         onClick={() => removeFromTeamB(nick)}
//                       >
//                         ✕
//                       </Button>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             </div>
//           </div>
//         </div>
//       </DialogBox>

//       <div className="col-span-3 mt-6">
//         {status === "started" && (
//           <div className="border rounded-md px-4">
//             <div className="grid grid-cols-3 items-center py-4 cursor-pointer">
//               <div className="space-y-1">
//                 {teamA.map((nick) => (
//                   <div key={nick} className="">
//                     <h4 className="text-sm">{nick}</h4>
//                   </div>
//                 ))}
//               </div>
//               <div className="flex flex-col gap-3 justify-center items-center">
//                 <h1 className="italic font-bold">
//                   {teamA.length} VS {teamB.length}
//                 </h1>
//                 <div className="flex items-center flex-col gap-1">
//                   <span className="text-xs">On Match</span>
//                   <div className="bg-green-500 size-2 rounded-full"></div>
//                 </div>
//               </div>
//               <div className="space-y-1 flex justify-end">
//                 {teamB.map((nick) => (
//                   <div key={nick} className="">
//                     <h4 className="text-sm">{nick}</h4>
//                   </div>
//                 ))}
//               </div>
//             </div>
//             <div className="py-4 border-t flex justify-center">
//               {/* <Button>Дуусгах</Button> */}
//               <DialogBox
//                 title="Тоглолт дуусгах"
//                 description="Ялагчийг сонгох."
//                 trigger={<Button variant={"outline"}>Дуусгах</Button>}
//                 footer={
//                   <>
//                     <DialogClose asChild>
//                       <Button variant="outline">Цуцлах</Button>
//                     </DialogClose>
//                     <DialogClose asChild>
//                       <Button onClick={endMatch}>Дуусгах</Button>
//                     </DialogClose>
//                   </>
//                 }
//               >
//                 <p>Team select</p>
//               </DialogBox>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

"use client";

import { useStateMachine } from "little-state-machine";
import { addPlayer } from "../page";
import { IndentIncrease } from "lucide-react";

export default function PlayerList() {
  const { state, actions } = useStateMachine({ actions: { addPlayer } });
  return (
    <div className="p-6 max-w-md mx-auto">
      <h1 className="text-2xl font-semibold mb-4">Player List</h1>
      <div className="space-y-2">
        {state.players.length === 0 ? (
          <p className="text-gray-500">No players yet.</p>
        ) : (
          state.players.map((p, index) => (
            <p key={index} className="border-b py-1">
              {p.playerName}
            </p>
          ))
        )}
      </div>
    </div>
  );
}

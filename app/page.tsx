// "use client";

// import { useState } from "react";
// import { useForm } from "react-hook-form";
// import { useStateMachine, createStore } from "little-state-machine";
// import { Table, TableBody, TableHead, TableHeader, TableRow } from "@/components/ui/table";

// interface IFormInputs {
//   playerName: string;
//   experience: number;
//   isVeteran: boolean;
// }

// createStore(
//   {
//     data: {
//       playerName: "",
//       experience: 0,
//       isVeteran: false,
//     },
//   },
// );

// function updateName(state: { data: any; }, payload: any) {
//   return {
//     ...state,
//     data: {
//       ...state.data,
//       ...payload,
//     },
//   };
// }


// export default function Home() {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm<IFormInputs>();
//   const [submittedData, setSubmittedData] = useState<IFormInputs | null>(null);

//   const onSubmit = (data: IFormInputs) => {
//     setSubmittedData(data);
//   };

//   // const { players } = usePlayers();
//   return (
//     <div className="">
//       <div className="content-container space-y-6">
//         <h2 className="font-semibold text-xl">Players</h2>

//         <form onSubmit={handleSubmit(onSubmit)}>
//           <div>
//             <label>Player name</label>
//             <input {...register("playerName")} placeholder="" className="border" />
//             {errors?.playerName && <p>{errors.playerName.message}</p>}
//           </div>
//           <div>
//             <label>Experience</label>
//             <input type="number" {...register("experience")} placeholder="" className="border" />
//             {errors?.experience && <p>{errors.experience.message}</p>}
//           </div>

//           <div>
//             <label htmlFor="isDeveloper">Are you veteran?</label>
//             <input type="checkbox" {...register("isVeteran")} placeholder="luo" value="yes" />
//           </div>
//           <input type="submit" />
//           {submittedData && (
//             <h1 className="text-xl font-bold mt-4">
//               {submittedData.playerName} - {submittedData.experience} years - {submittedData.isVeteran ? "Veteran" : "Newbie"}
//             </h1>
//           )}
//         </form>

//       </div>
//     </div>
//   );
// }



// import { createStore, useStateMachine } from 'little-state-machine';
// import React from 'react'
// import updateAction from './updateAction';
// import { useForm } from 'react-hook-form';

// createStore({});

// export default function App() {

//   const { register, handleSubmit } = useForm();
//   const { actions, state } = useStateMachine({ actions: { updateAction } });

//   const onSubmit = (data) => {
//     alert(JSON.stringify(actions));
//     actions.updateAction(data);
//     props.history.push("./step2");
//   };
//   console.log('asd');

//   return (
//      <section>
//       <form onSubmit={handleSubmit(onSubmit)}>
//         <label>First name:</label>
//         <input
//           name="firstname"
//           placeholder="First name"
//           ref={register}
//           defaultValue={state.yourDetails.firstname}
//         />
//         <label>Last name:</label>
//         <input
//           name="lastname"
//           placeholder="Last name"
//           ref={register}
//           defaultValue={state.yourDetails.lastname}
//         />
//         <input type="submit" />
//       </form>
//     </section>
    
//   )
// }





// page.tsx
"use client";

import { createStore, useStateMachine } from "little-state-machine";
import { useForm, SubmitHandler } from "react-hook-form";
import PlayerList from "./components/playerList";

// Player type
export interface Player {
  playerName: string;
  experience: number;
  isVeteran: boolean;
}

// little-state-machine GlobalState
declare module "little-state-machine" {
  interface GlobalState {
    players: Player[];
  }
}

// Store initialization
createStore({
  players: [],
});

// Action
export function addPlayer(state: { players: Player[] }, payload: Player) {
  return {
    ...state,
    players: [...state.players, payload],
  };
}

// Component
export default function Home() {

  return (
    <PlayerList />
  );
}

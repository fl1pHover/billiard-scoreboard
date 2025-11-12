"use client";

import { useForm, SubmitHandler } from "react-hook-form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { usePlayers } from "@/providers/player-provider";
import { useStateMachine } from "little-state-machine";

type Inputs = {
  nickName: string;
  experience: number;
};

export default function TestForm() {
  const { addPlayer } = usePlayers();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    addPlayer(data);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
      <Input placeholder="Тоглогчийн нэр" {...register("nickName", { required: true })} />
      {errors.nickName && <span>Заавал бөглө</span>}
      
      <Input type="number" placeholder="Тоглосон жил" {...register("experience")} />


      <Button type="submit">Тоглогч нэмэх</Button>
    </form>
  );
}

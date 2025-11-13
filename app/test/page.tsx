"use client";

import { useForm } from "react-hook-form";
import { createStore, useStateMachine } from "little-state-machine";
import updateAction from "../updateAction";

createStore({
  data: {
    firstName: "",
    lastName: "",
    age: "",
  },
});

type FormInputs = {
  firstName: string;
  lastName: string;
  age: string;
};

function Form() {
  const { register, handleSubmit } = useForm<FormInputs>();
  const { actions, state } = useStateMachine({ actions: { updateAction } });

  const onSubmit = (data: FormInputs) => {
    actions.updateAction(data);
  };

  return (
    <div className="p-8 space-y-4">
      <h1 className="text-xl font-semibold">React Hook Form + Little State Machine</h1>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
        <input {...register("firstName")} placeholder="First Name" className="border rounded p-2 w-full" />
        <input {...register("lastName")} placeholder="Last Name" className="border rounded p-2 w-full" />
        <input {...register("age")} placeholder="Age" className="border rounded p-2 w-full" />

        <button type="submit" className="bg-blue-500 text-white rounded px-4 py-2">
          Submit
        </button>
      </form>

      <div className="border-t pt-4">
        <h2 className="font-medium mb-2">Current State:</h2>
        <pre className="p-3 rounded text-sm">{JSON.stringify(state, null, 2)}</pre>
      </div>
    </div>
  );
}

export default function Page() {
  return <Form />;
}

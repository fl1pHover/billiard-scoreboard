"use client"

import { useForm, SubmitHandler } from "react-hook-form"
import { Input } from "../ui/input"
import { Button } from "../ui/button"


type Inputs = {
  nickName: string
  experience: number
}


export default function TestForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>()
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)





  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
      {/* register your input into the hook by invoking the "register" function */}
      <Input defaultValue="" placeholder="Тоглогчийн нэр" {...register("nickName", { required: true })} />
      <Input defaultValue="" type="number" placeholder="Тоглогчийн нэр" {...register("experience", { required: true })} />


      {/* include validation with required or other standard HTML validation rules */}
      {/* <Input {...register("exampleRequired", { required: true })} /> */}
      {/* errors will return when field validation fails  */}
      {errors.nickName && <span>This field is required</span>}


      <Button type="submit">
        Submit
      </Button>
    </form>
  )
}
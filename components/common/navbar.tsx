import React from "react";
import { ModeToggle } from "./modeToggle";
import { Button } from "@/components/ui/button";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import TestForm from "./testForm";
import { SidebarTrigger } from "../ui/sidebar";

export default function Navbar() {
  return (
    <div className="flex relative items-center justify-between w-full">
      <SidebarTrigger className="absolute top-4 border border-l-0 rounded-l-none left-0" />
      <div className="flex items-center justify-end w-full px-10 border-b py-4">
        {/* <h1 className="font-bold uppercase italic">Тоглогчдын чансаа</h1> */}
        <div className="flex items-center gap-2">
          <ModeToggle />

          <Dialog>
            <form>
              <DialogTrigger asChild>
                <Button>Тоглогч нэмэх</Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>Тоглогч нэмэх</DialogTitle>
                  <DialogDescription>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, quam!</DialogDescription>
                </DialogHeader>
                <TestForm />
              </DialogContent>
            </form>
          </Dialog>
        </div>
      </div>
    </div>
  );
}

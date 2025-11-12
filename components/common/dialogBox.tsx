import React from "react";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

export default function DialogBox({ trigger, title, description, children, footer }: { trigger: React.ReactNode; title: string; description?: string; children: React.ReactNode; footer?: React.ReactNode }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {/* <Button>Шинэ тоглолт</Button> */}
        {trigger}
      </DialogTrigger>
      <DialogContent>
        <DialogHeader className="pb-6 border-b">
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>
        {children}
        <DialogFooter>{footer}</DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

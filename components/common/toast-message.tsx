"use client";

import { toast } from "sonner";
import { CheckCircle2, Info, XCircle } from "lucide-react";

type ToastType = "success" | "error" | "info";

export function useToastMessage() {
  const showToast = (type: ToastType, title: string, description?: string) => {
    const base = {
      description,
      duration: 3000,
    };

    switch (type) {
      case "success":
        toast.success(title, {
          icon: <CheckCircle2 className="text-primary" />,
          ...base,
        });
        break;
      case "error":
        toast.error(title, {
          icon: <XCircle className="text-red-500" />,
          ...base,
        });
        break;
      case "info":
      default:
        toast.info(title, {
          icon: <Info className="text-blue-500" />,
          ...base,
        });
    }
  };

  return { showToast };
}

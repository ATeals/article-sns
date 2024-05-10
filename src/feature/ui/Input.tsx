import { forwardRef } from "react";

import { Input as ShadcnInput } from "@/feature/shadcn/components/ui/input";
import { Label } from "@/feature/shadcn/components/ui/label";
import { cn } from "../shadcn/utils";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  return (
    <div className="my-2">
      <Label htmlFor={props.name} className="font-bold">
        {props.label} {props.required && <span className="text-red-500">*</span>}
      </Label>
      <ShadcnInput id={props.name} ref={ref} className={cn(props.className, "my-3")} {...props} />

      <Label htmlFor={props.name} className="text-red-500 min-h-4 block">
        {props.error}
      </Label>
    </div>
  );
});

Input.displayName = "Input";

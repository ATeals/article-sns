import { forwardRef } from "react";

import { Input as ShadcnInput } from "@/feature/shadcn/components/ui/input";
import { Label } from "@/feature/shadcn/components/ui/label";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  return (
    <div>
      <Label htmlFor={props.name}>{props.label}</Label>
      <ShadcnInput id={props.name} ref={ref} {...props} />
      <Label htmlFor={props.name} className="text-red-500">
        {props.error}
      </Label>
    </div>
  );
});

Input.displayName = "Input";

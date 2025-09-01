import { BrainCircuit } from "lucide-react";

export function Logo() {
  return (
    <a href="/" className="flex items-center gap-2 text-primary">
      <BrainCircuit className="h-7 w-7" />
      <span className="text-xl font-bold font-headline tracking-tight">
        Ainsophic Academy
      </span>
    </a>
  );
}

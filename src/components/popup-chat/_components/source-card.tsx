import { FileText } from "lucide-react";

interface SourceCardProps {
  source: string;
}

export default function SourceCard({ source }: SourceCardProps) {
  const displaySource = source.replace(/^docs\//, "");
  
  return (
    <div className="bg-secondary text-secondary-foreground flex w-full items-center gap-1.5 rounded-xl border px-2 py-1">
      <FileText className="size-3.5 shrink-0" />
      <p className="w-full truncate text-xs text-nowrap">{displaySource}</p>
    </div>
  );
}

import { cn } from "@/lib/utils";

export function ExampleCard({
  label,
  className,
  delay = "delay-500",
  children,
}: {
  label: string;
  className?: string;
  delay?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "rounded-xl overflow-hidden border border-border/50 shadow bg-card relative",
        delay,
        className
      )}
    >
      {label && (
        <div className="uppercase absolute top-2 left-2 z-10 tracking-wider text-[10px] text-muted-foreground bg-background/90 backdrop-blur-sm rounded px-2 py-1">
          {label}
        </div>
      )}
      {children}
    </div>
  );
}

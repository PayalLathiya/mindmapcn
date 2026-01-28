"use client";

import { useState } from "react";
import { Copy, Check } from "lucide-react";

interface InstallCodeBlockProps {
  command: string;
  showPrompt?: boolean;
}

type PackageManager = "pnpm" | "npm" | "yarn" | "bun";

const packageManagers: { value: PackageManager; label: string }[] = [
  { value: "pnpm", label: "pnpm" },
  { value: "npm", label: "npm" },
  { value: "yarn", label: "yarn" },
  { value: "bun", label: "bun" },
];

function getInstallCommand(pm: PackageManager, command: string): string {
  // Replace npx with the appropriate package manager runner
  const baseCommand = command.replace(/^npx\s+/, "");
  
  switch (pm) {
    case "pnpm":
      return `pnpm dlx ${baseCommand}`;
    case "npm":
      return `npx ${baseCommand}`;
    case "yarn":
      return `yarn ${baseCommand}`;
    case "bun":
      return `bunx -bun ${baseCommand}`;
  }
}

export function InstallCodeBlock({
  command,
  showPrompt = true,
}: InstallCodeBlockProps) {
  const [activeTab, setActiveTab] = useState<PackageManager>("pnpm");
  const [copied, setCopied] = useState(false);

  const currentCommand = getInstallCommand(activeTab, command);

  const copy = () => {
    navigator.clipboard.writeText(currentCommand);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full rounded-lg border overflow-hidden">
      <div className="flex items-center justify-between border-b bg-muted/30">
        <div className="flex items-center gap-1 px-2">
          {packageManagers.map((pm) => (
            <button
              key={pm.value}
              onClick={() => setActiveTab(pm.value)}
              className={`px-3 py-2 text-sm font-medium transition-colors ${
                activeTab === pm.value
                  ? "text-foreground border-b-2 border-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {pm.label}
            </button>
          ))}
        </div>
        <button
          onClick={copy}
          className="px-3 py-2 text-muted-foreground hover:text-foreground transition-colors"
          aria-label="Copy to clipboard"
        >
          {copied ? (
            <Check className="size-4 text-emerald-500" />
          ) : (
            <Copy className="size-4" />
          )}
        </button>
      </div>
      <div className="p-4 overflow-auto text-sm bg-muted/20 font-mono">
        {showPrompt && (
          <span className="text-muted-foreground/60 select-none mr-2">$</span>
        )}
        <span className="text-foreground/90">{currentCommand}</span>
      </div>
    </div>
  );
}

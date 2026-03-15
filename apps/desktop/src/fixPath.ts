import { readPathFromLoginShell } from "@t3tools/shared/shell";

export function fixPath(): void {
  if (process.platform !== "darwin" && process.platform !== "linux") return;

  try {
    const shell = process.env.SHELL ?? (process.platform === "linux" ? "/bin/bash" : "/bin/zsh");
    const result = readPathFromLoginShell(shell);
    if (result) {
      process.env.PATH = result;
    }
  } catch {
    // Keep inherited PATH if shell lookup fails.
  }
}

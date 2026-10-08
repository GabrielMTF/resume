import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  size?: "sm" | "md";
  external?: boolean;
};

export function ButtonLink({
  href,
  children,
  variant = "secondary",
  size = "md",
  external = false,
}: ButtonLinkProps) {
  return (
    <a
      href={href}
      className={cn(
        "inline-flex items-center rounded-full",
        size === "sm" && "h-11 px-5 text-[13px] sm:text-[14px]",
        size === "md" && "h-12 px-6 text-[15px]",
        variant === "primary" &&
          "bg-foreground font-medium text-background transition-[transform,opacity] duration-300 ease-out hover:opacity-90 active:scale-[0.98]",
        variant === "secondary" &&
          "border border-line text-foreground transition-colors duration-300 hover:border-foreground/30 hover:bg-foreground/5",
      )}
      {...(external
        ? { target: "_blank", rel: "noopener noreferrer" }
        : {})}
    >
      {children}
    </a>
  );
}

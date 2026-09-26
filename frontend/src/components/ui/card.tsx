import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

export function Card({
  className,
  children,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-white/10 bg-card/85 backdrop-blur-md p-5 shadow-md transition-all duration-300 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export function StatCard({
  title,
  value,
  subtitle,
  icon,
  accent = "primary",
}: {
  title: string;
  value: string | number;
  subtitle?: string;
  icon: React.ReactNode;
  accent?: "primary" | "success" | "warning" | "accent";
}) {
  const accentColors = {
    primary: "text-indigo-400 bg-primary/15 border border-primary/25",
    success: "text-emerald-400 bg-emerald-500/15 border border-emerald-500/25",
    warning: "text-amber-400 bg-amber-500/15 border border-amber-500/25",
    accent: "text-cyan-400 bg-cyan-500/15 border border-cyan-500/25",
  };

  return (
    <Card className="flex items-start gap-4 hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group">
      {/* Subtle corner light */}
      <div className="pointer-events-none absolute -top-12 -right-12 w-24 h-24 rounded-full bg-primary/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
      <div className={cn("rounded-xl p-3 shrink-0 shadow-sm transition-transform duration-300 group-hover:scale-110", accentColors[accent])}>
        {icon}
      </div>
      <div className="min-w-0">
        <p className="text-xs font-semibold text-muted tracking-wide uppercase">{title}</p>
        <p className="text-2xl font-extrabold mt-0.5 tracking-tight font-mono text-white">{value}</p>
        {subtitle && <p className="text-[11px] text-muted-foreground mt-1">{subtitle}</p>}
      </div>
    </Card>
  );
}

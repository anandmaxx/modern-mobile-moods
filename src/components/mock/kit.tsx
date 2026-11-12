import type { LucideIcon } from "lucide-react";
import { ChevronLeft, Signal, Wifi, BatteryFull } from "lucide-react";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function PhoneFrame({
  title,
  note,
  dark,
  lightStatus,
  children,
}: {
  title: string;
  note?: string;
  dark?: boolean;
  lightStatus?: boolean;
  children: ReactNode;
}) {
  return (
    <figure className="flex w-[340px] shrink-0 flex-col gap-4">
      <div className="rounded-[3rem] bg-bezel p-[10px] shadow-phone">
        <div
          className={cn(
            "relative flex h-[720px] flex-col overflow-hidden rounded-[2.4rem] bg-surface text-foreground",
            dark && "dark",
          )}
        >
          <StatusBar light={lightStatus} />
          {children}
        </div>
      </div>
      <figcaption className="px-2">
        <p className="font-display text-base font-semibold text-foreground">{title}</p>
        {note && <p className="mt-0.5 text-sm leading-snug text-muted-foreground">{note}</p>}
      </figcaption>
    </figure>
  );
}

function StatusBar({ light }: { light?: boolean | undefined }) {
  return (
    <div
      className={cn(
        "relative z-20 flex h-11 shrink-0 items-center justify-between px-7 text-[13px] font-semibold",
        light && "text-ink-foreground",
      )}
    >
      <span>9:41</span>
      <div className="absolute left-1/2 top-2.5 h-6 w-24 -translate-x-1/2 rounded-full bg-notch" />
      <div className="flex items-center gap-1">
        <Signal className="size-3.5" />
        <Wifi className="size-3.5" />
        <BatteryFull className="size-4" />
      </div>
    </div>
  );
}

export function Body({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={cn("flex-1 overflow-hidden px-5 pb-4", className)}>{children}</div>;
}

export function TopBar({
  title,
  subtitle,
  back,
  right,
}: {
  title: string;
  subtitle?: string;
  back?: boolean;
  right?: ReactNode;
}) {
  return (
    <div className="flex shrink-0 items-center gap-3 px-5 pb-3 pt-2">
      {back && (
        <span className="grid size-9 place-items-center rounded-full bg-card shadow-soft">
          <ChevronLeft className="size-5" />
        </span>
      )}
      <div className="min-w-0 flex-1">
        <h2 className="truncate text-[22px] font-bold leading-tight">{title}</h2>
        {subtitle && <p className="truncate text-xs text-muted-foreground">{subtitle}</p>}
      </div>
      {right}
    </div>
  );
}

export type TabItem = { icon: LucideIcon; label: string };

export function TabBar({ items, active }: { items: TabItem[]; active: number }) {
  return (
    <nav className="shrink-0 border-t bg-card px-3 pb-5 pt-2">
      <ul className="flex justify-between">
        {items.map((it, i) => {
          const Icon = it.icon;
          const on = i === active;
          return (
            <li key={it.label} className="flex flex-1 flex-col items-center gap-1">
              <span
                className={cn(
                  "grid h-8 w-14 place-items-center rounded-full transition-colors",
                  on ? "bg-accent text-accent-foreground" : "text-muted-foreground",
                )}
              >
                <Icon className="size-[18px]" strokeWidth={on ? 2.4 : 2} />
              </span>
              <span
                className={cn(
                  "text-[10px] font-semibold",
                  on ? "text-foreground" : "text-muted-foreground",
                )}
              >
                {it.label}
              </span>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export type Tone = "success" | "warning" | "danger" | "info" | "neutral" | "accent" | "ink";

const toneClass: Record<Tone, string> = {
  success: "bg-success/15 text-success",
  warning: "bg-warning/20 text-warning",
  danger: "bg-destructive/12 text-destructive",
  info: "bg-info/12 text-info",
  neutral: "bg-muted text-muted-foreground",
  accent: "bg-accent text-accent-foreground",
  ink: "bg-ink text-ink-foreground",
};

export function Pill({
  tone = "neutral",
  children,
  className,
}: {
  tone?: Tone;
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 whitespace-nowrap rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide",
        toneClass[tone],
        className,
      )}
    >
      {children}
    </span>
  );
}

export function IconTile({
  icon: Icon,
  tone = "neutral",
  className,
}: {
  icon: LucideIcon;
  tone?: Tone;
  className?: string;
}) {
  return (
    <span className={cn("grid size-10 shrink-0 place-items-center rounded-2xl", toneClass[tone], className)}>
      <Icon className="size-[18px]" />
    </span>
  );
}

export function Card({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={cn("rounded-2xl bg-card p-4 shadow-soft", className)}>{children}</div>;
}

export function SectionLabel({ children, action }: { children: ReactNode; action?: string }) {
  return (
    <div className="mb-2 mt-5 flex items-center justify-between">
      <h3 className="text-sm font-bold">{children}</h3>
      {action && <span className="text-xs font-semibold text-muted-foreground">{action}</span>}
    </div>
  );
}

export function Avatar({ src, name, size = 40 }: { src?: string | undefined; name: string; size?: number }) {
  const initials = name
    .split(" ")
    .map((p) => p[0])
    .join("")
    .slice(0, 2);
  return src ? (
    <img
      src={src}
      alt={name}
      width={size}
      height={size}
      loading="lazy"
      className="shrink-0 rounded-full object-cover"
      style={{ width: size, height: size }}
    />
  ) : (
    <span
      className="grid shrink-0 place-items-center rounded-full bg-secondary text-xs font-bold text-secondary-foreground"
      style={{ width: size, height: size }}
    >
      {initials}
    </span>
  );
}

export function PrimaryButton({
  children,
  variant = "accent",
  className,
}: {
  children: ReactNode;
  variant?: "accent" | "ink" | "ghost" | "danger";
  className?: string;
}) {
  const v = {
    accent: "bg-accent text-accent-foreground",
    ink: "bg-ink text-ink-foreground",
    ghost: "bg-card text-foreground border",
    danger: "bg-destructive/10 text-destructive",
  }[variant];
  return (
    <span
      className={cn(
        "flex h-12 w-full items-center justify-center gap-2 rounded-2xl text-sm font-bold",
        v,
        className,
      )}
    >
      {children}
    </span>
  );
}

export function Field({ label, value, icon: Icon }: { label: string; value: string; icon?: LucideIcon }) {
  return (
    <div className="rounded-2xl border bg-card px-4 py-2.5">
      <p className="text-[10px] font-semibold uppercase tracking-wide text-muted-foreground">{label}</p>
      <div className="mt-0.5 flex items-center justify-between text-sm font-semibold">
        <span>{value}</span>
        {Icon && <Icon className="size-4 text-muted-foreground" />}
      </div>
    </div>
  );
}

export function Ring({ value, size = 120, stroke = 12 }: { value: number; size?: number; stroke?: number }) {
  const r = (size - stroke) / 2;
  const c = 2 * Math.PI * r;
  return (
    <svg width={size} height={size} className="-rotate-90">
      <circle cx={size / 2} cy={size / 2} r={r} strokeWidth={stroke} className="fill-none stroke-muted" />
      <circle
        cx={size / 2}
        cy={size / 2}
        r={r}
        strokeWidth={stroke}
        strokeLinecap="round"
        strokeDasharray={c}
        strokeDashoffset={c * (1 - value / 100)}
        className="fill-none stroke-accent"
      />
    </svg>
  );
}

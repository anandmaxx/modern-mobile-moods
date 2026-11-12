import {
  Pencil, Phone, MessageCircle, MapPin, Clock, Star, Check, LocateFixed,
  School, Home, ChevronDown, Info, Save,
} from "lucide-react";
import aarav from "@/assets/kid-aarav.jpg";
import { Avatar, Body, Card, Pill, PrimaryButton, Ring, TopBar } from "./kit";
import type { ComponentType, ReactNode } from "react";
import { cn } from "@/lib/utils";

function RoundIcon({ children, tone = "card" }: { children: ReactNode; tone?: "card" | "accent" | "ink" }) {
  return (
    <span
      className={cn(
        "grid size-9 shrink-0 place-items-center rounded-full",
        tone === "card" && "bg-card shadow-soft",
        tone === "accent" && "bg-accent text-accent-foreground",
        tone === "ink" && "bg-ink text-ink-foreground",
      )}
    >
      {children}
    </span>
  );
}

export function StudentProfile() {
  const last = ["p", "p", "l", "p", "p", "a", "p", "p", "p", "p"] as const;
  const dot = { p: "bg-success", l: "bg-warning", a: "bg-destructive" } as const;
  const skills = [
    { s: "Balance & posture", v: 90 },
    { s: "Crossovers", v: 68 },
    { s: "T-stop & plough stop", v: 80 },
  ];
  const levels = ["Beginner", "Intermediate", "Advanced"];
  return (
    <>
      <TopBar
        back
        title="Student"
        subtitle="Koramangala · ID SF-0142"
        right={
          <RoundIcon>
            <Pencil className="size-4" />
          </RoundIcon>
        }
      />
      <Body className="space-y-2.5">
        {/* Identity */}
        <div className="rounded-3xl bg-ink p-4 text-ink-foreground">
          <div className="flex items-center gap-3">
            <div className="rounded-full bg-accent p-[3px]">
              <Avatar src={aarav} name="Aarav Sharma" size={58} />
            </div>
            <div className="min-w-0 flex-1">
              <p className="font-display text-xl font-bold leading-tight">Aarav Sharma</p>
              <p className="text-[11px] opacity-70">Age 9 · Joined Jun 2025</p>
              <div className="mt-1.5 flex gap-1.5">
                <Pill tone="accent">Active</Pill>
                <Pill className="bg-ink-foreground/10 text-ink-foreground">Quad skates</Pill>
              </div>
            </div>
          </div>
          <div className="mt-3.5 grid grid-cols-3 divide-x divide-ink-foreground/15 rounded-2xl bg-ink-foreground/[0.07] py-2.5 text-center">
            {[
              ["Batch", "B · Inter."],
              ["Schedule", "M W F · 5PM"],
              ["Coach", "Rahul N."],
            ].map(([l, v]) => (
              <div key={l} className="px-1">
                <p className="text-[9px] font-semibold uppercase tracking-wide opacity-60">{l}</p>
                <p className="mt-0.5 text-xs font-bold">{v}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Attendance */}
        <Card className="flex items-center gap-3.5 p-3.5">
          <div className="relative">
            <Ring value={92} size={68} stroke={8} />
            <p className="absolute inset-0 grid place-items-center font-display text-base font-extrabold">92%</p>
          </div>
          <div className="flex-1">
            <div className="flex items-center justify-between">
              <p className="text-sm font-bold">Attendance</p>
              <span className="text-[10px] font-semibold text-muted-foreground">This term</span>
            </div>
            <p className="text-[11px] text-muted-foreground">22 present · 2 late · 2 absent</p>
            <div className="mt-2 flex items-center gap-1">
              {last.map((m, i) => (
                <span key={i} className={cn("h-2 flex-1 rounded-full", dot[m])} />
              ))}
            </div>
            <p className="mt-1 text-[9px] font-semibold uppercase tracking-wide text-muted-foreground">Last 10 sessions</p>
          </div>
        </Card>

        {/* Progress */}
        <Card className="p-3.5">
          <div className="flex items-center justify-between">
            <p className="text-sm font-bold">Progress</p>
            <span className="flex items-center gap-1 text-[10px] font-semibold text-muted-foreground">
              <Clock className="size-3" /> Next assessment 28 Nov
            </span>
          </div>
          <div className="mt-2.5 flex items-center gap-1">
            {levels.map((l, i) => (
              <div key={l} className="flex-1">
                <div className={cn("h-1.5 rounded-full", i < 1 ? "bg-ink" : i === 1 ? "bg-accent" : "bg-muted")} />
                <p className={cn("mt-1 text-[10px] font-semibold", i === 1 ? "text-foreground" : "text-muted-foreground")}>
                  {i < 1 && <Check className="mr-0.5 inline size-2.5" />}
                  {l}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-2 space-y-1.5">
            {skills.map((k) => (
              <div key={k.s}>
                <div className="flex justify-between text-[11px]">
                  <span className="font-semibold">{k.s}</span>
                  <span className="font-bold">{k.v}%</span>
                </div>
                <div className="mt-1 h-1.5 rounded-full bg-muted">
                  <div className="h-full rounded-full bg-ink dark:bg-accent" style={{ width: `${k.v}%` }} />
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Parents */}
        <div>
          <div className="mb-2 mt-1 flex items-center justify-between">
            <h3 className="text-sm font-bold">Parent contacts</h3>
            <span className="text-xs font-semibold text-muted-foreground">Primary ★</span>
          </div>
          <div className="divide-y rounded-2xl bg-card shadow-soft">
            {[
              { n: "Priya Sharma", r: "Mother", p: "+91 98450 12345", primary: true },
              { n: "Rohan Sharma", r: "Father", p: "+91 99001 67890", primary: false },
            ].map((c) => (
              <div key={c.n} className="flex items-center gap-2.5 p-2.5">
                <Avatar name={c.n} size={36} />
                <div className="min-w-0 flex-1">
                  <p className="flex items-center gap-1.5 text-sm font-bold">
                    {c.n}
                    <span className="text-[10px] font-semibold text-muted-foreground">{c.r}</span>
                    {c.primary && <Star className="size-3 fill-current text-warning" />}
                  </p>
                  <p className="text-[11px] font-medium text-muted-foreground">{c.p}</p>
                </div>
                <RoundIcon tone="accent">
                  <MessageCircle className="size-4" />
                </RoundIcon>
                <RoundIcon tone="ink">
                  <Phone className="size-4" />
                </RoundIcon>
              </div>
            ))}
          </div>
        </div>
      </Body>
    </>
  );
}

function Input({
  label,
  value,
  placeholder,
  focused,
  icon: Icon,
  className,
}: {
  label: string;
  value?: string;
  placeholder?: string;
  focused?: boolean;
  icon?: ComponentType<{ className?: string }>;
  className?: string;
}) {
  return (
    <div className={className}>
      <p className="mb-0.5 pl-1 text-[11px] font-semibold text-muted-foreground">{label}</p>
      <div
        className={cn(
          "flex h-10 items-center justify-between gap-2 rounded-xl border bg-card px-3.5 text-sm",
          focused && "border-ink ring-4 ring-accent/50 dark:border-accent",
        )}
      >
        <span className={cn("truncate", value ? "font-semibold" : "text-muted-foreground")}>
          {value ?? placeholder}
          {focused && <span className="ml-px inline-block h-4 w-[1.5px] translate-y-0.5 animate-pulse bg-foreground" />}
        </span>
        {Icon && <Icon className="size-4 shrink-0 text-muted-foreground" />}
      </div>
    </div>
  );
}

export function StudentDetailsForm() {
  return (
    <>
      <TopBar back title="School & address" subtitle="Aarav Sharma · step 2 of 3" />
      <Body className="flex flex-col">
        <div className="mb-3 flex gap-1.5">
          {[0, 1, 2].map((i) => (
            <span key={i} className={cn("h-1.5 flex-1 rounded-full", i < 2 ? "bg-accent" : "bg-muted")} />
          ))}
        </div>

        <div className="mb-2 flex items-center gap-2">
          <span className="grid size-7 place-items-center rounded-xl bg-accent text-accent-foreground">
            <School className="size-3.5" />
          </span>
          <h3 className="text-sm font-bold">School</h3>
        </div>
        <div className="space-y-2">
          <Input label="School name" value="Greenwood High Internatio" focused />
          <div className="grid grid-cols-2 gap-2">
            <Input label="Class / grade" value="Grade 4" icon={ChevronDown} />
            <Input label="Section" value="B" />
          </div>
        </div>

        <div className="mb-2 mt-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="grid size-7 place-items-center rounded-xl bg-ink text-ink-foreground">
              <Home className="size-3.5" />
            </span>
            <h3 className="text-sm font-bold">Home address</h3>
          </div>
          <span className="flex items-center gap-1 rounded-full border bg-card px-2.5 py-1 text-[11px] font-semibold">
            <LocateFixed className="size-3" /> Use location
          </span>
        </div>
        <div className="space-y-2">
          <Input label="House / flat no. & building" value="A-304, Prestige Lakeside" />
          <Input label="Street & area" value="8th Main, Koramangala 4th Block" />
          <div className="grid grid-cols-2 gap-2">
            <Input label="City" value="Bengaluru" />
            <Input label="PIN code" value="560034" />
          </div>
          <Input label="Landmark (optional)" placeholder="Near Forum Mall" icon={MapPin} />
        </div>

        <div className="mt-3 flex items-center gap-2 rounded-xl bg-info/10 px-3 py-2 text-[11px] font-medium text-info">
          <Info className="size-3.5 shrink-0" />
          Only academy staff can see this address.
        </div>

        <div className="mt-auto grid grid-cols-[auto_1fr] gap-2 pt-3">
          <PrimaryButton variant="ghost" className="w-24">
            Back
          </PrimaryButton>
          <PrimaryButton>
            <Save className="size-4" /> Save details
          </PrimaryButton>
        </div>
      </Body>
    </>
  );
}



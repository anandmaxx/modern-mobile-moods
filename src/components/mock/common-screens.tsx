import { Lock, MessageCircle, Mail, ShieldCheck, Check, ArrowRight } from "lucide-react";
import loginSkate from "@/assets/login-skate.jpg";
import { Body, PrimaryButton, TopBar } from "./kit";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <span className="grid size-9 place-items-center rounded-xl bg-accent font-display text-lg font-extrabold text-accent-foreground">
        S
      </span>
      <span className="font-display text-xl font-bold tracking-tight">SkateFlow</span>
    </div>
  );
}

export function LoginScreen() {
  return (
    <div className="absolute inset-0 flex flex-col bg-ink text-ink-foreground">
      <div className="relative h-[330px] shrink-0">
        <img src={loginSkate} alt="" width={768} height={1024} className="absolute inset-0 size-full object-cover" />
        <div className="scrim absolute inset-0" />
        <div className="absolute inset-x-6 top-16">
          <Logo />
        </div>
        <div className="absolute inset-x-6 bottom-6">
          <h1 className="text-[30px] font-extrabold leading-[1.05]">
            Every glide,
            <br />
            <span className="text-accent">in one place.</span>
          </h1>
        </div>
      </div>
      <div className="flex flex-1 flex-col gap-3 rounded-t-[2rem] bg-surface px-6 pt-6 text-foreground">
        <div>
          <p className="text-xs font-semibold text-muted-foreground">Mobile number</p>
          <div className="mt-1.5 flex h-12 items-center gap-2 rounded-2xl border bg-card px-4 text-sm font-semibold">
            <span className="text-muted-foreground">+91</span>
            <span className="h-5 w-px bg-border" />
            <span>98450 12345</span>
          </div>
        </div>
        <div>
          <p className="text-xs font-semibold text-muted-foreground">6-digit PIN</p>
          <div className="mt-1.5 grid grid-cols-6 gap-2">
            {[1, 1, 1, 1, 0, 0].map((f, i) => (
              <span
                key={i}
                className={`grid h-12 place-items-center rounded-xl border bg-card ${i === 4 ? "border-foreground" : ""}`}
              >
                {f ? <span className="size-2.5 rounded-full bg-foreground" /> : null}
              </span>
            ))}
          </div>
          <p className="mt-2 flex items-center gap-1.5 text-[11px] text-muted-foreground">
            <MessageCircle className="size-3.5 text-success" /> Your academy sent your PIN on WhatsApp
          </p>
        </div>
        <PrimaryButton variant="ink" className="mt-1">
          Sign in <ArrowRight className="size-4" />
        </PrimaryButton>
        <p className="flex items-center justify-center gap-1.5 text-xs font-semibold text-muted-foreground">
          <Mail className="size-3.5" /> Use email &amp; password instead
        </p>
      </div>
    </div>
  );
}

export function LockedScreen() {
  return (
    <Body className="flex flex-col items-center justify-center text-center">
      <div className="relative">
        <span className="absolute inset-0 animate-ping rounded-full bg-destructive/15" />
        <span className="relative grid size-24 place-items-center rounded-full bg-destructive/12 text-destructive">
          <Lock className="size-10" />
        </span>
      </div>
      <h2 className="mt-7 text-2xl font-extrabold">Login paused</h2>
      <p className="mt-2 max-w-[240px] text-sm text-muted-foreground">
        Too many wrong PINs. For your safety, try again when the timer ends.
      </p>
      <div className="mt-7 flex gap-2 font-display text-4xl font-extrabold tabular-nums">
        <span className="rounded-2xl bg-card px-4 py-3 shadow-soft">14</span>
        <span className="py-3">:</span>
        <span className="rounded-2xl bg-card px-4 py-3 shadow-soft">32</span>
      </div>
      <p className="mt-2 text-[11px] font-semibold uppercase tracking-widest text-muted-foreground">
        minutes · seconds
      </p>
      <div className="mt-auto w-full space-y-3">
        <PrimaryButton variant="ghost">
          <MessageCircle className="size-4 text-success" /> Ask academy for a new PIN
        </PrimaryButton>
      </div>
    </Body>
  );
}

export function TermsScreen() {
  const items = [
    ["Safety first", "Helmets, knee and elbow guards are compulsory during every session."],
    ["Fees", "Monthly fees are due by the 10th. Late payments may pause attendance."],
    ["Photos & privacy", "Your child's photo is visible only to you and staff of their branch."],
    ["Communication", "All academy messages are reviewed by an approver before they reach you."],
  ];
  return (
    <>
      <TopBar title="Before you start" subtitle="Bluewheel Skating Academy" />
      <Body className="flex flex-col">
        <div className="flex items-center gap-3 rounded-2xl bg-ink p-4 text-ink-foreground">
          <ShieldCheck className="size-6 text-accent" />
          <p className="text-xs leading-snug">Please read and accept the academy's Terms &amp; Conditions to continue.</p>
        </div>
        <div className="mt-4 flex-1 space-y-3 overflow-hidden">
          {items.map(([t, d], i) => (
            <div key={t} className="flex gap-3">
              <span className="font-display text-sm font-bold text-muted-foreground">0{i + 1}</span>
              <div>
                <p className="text-sm font-bold">{t}</p>
                <p className="text-xs leading-relaxed text-muted-foreground">{d}</p>
              </div>
            </div>
          ))}
          <p className="text-xs font-semibold text-info">Read full terms →</p>
        </div>
        <div className="space-y-3 pt-3">
          <div className="flex items-start gap-3 text-xs">
            <span className="grid size-5 shrink-0 place-items-center rounded-md bg-ink text-ink-foreground">
              <Check className="size-3.5" strokeWidth={3} />
            </span>
            I have read and agree to the Terms &amp; Conditions
          </div>
          <PrimaryButton>Accept &amp; continue</PrimaryButton>
        </div>
      </Body>
    </>
  );
}

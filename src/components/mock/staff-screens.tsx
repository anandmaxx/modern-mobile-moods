import {
  Sun, CalendarCheck, Wallet, Inbox, LayoutGrid, LogIn, LogOut, Users, CalendarOff, ClipboardCheck,
  ImageIcon, MessageSquare, AlertTriangle, ChevronRight, Search, Plus, UserPlus, Check, X, Pencil,
  FileText, Receipt, Megaphone, StickyNote, Trophy, Package, ShoppingCart, Boxes, Tag, Clock, Eye,
  SlidersHorizontal, Bell,
} from "lucide-react";
import aarav from "@/assets/kid-aarav.jpg";
import meera from "@/assets/kid-meera.jpg";
import { Avatar, Body, Card, IconTile, Pill, PrimaryButton, SectionLabel, TabBar, TopBar } from "./kit";
import { Logo } from "./common-screens";
import { cn } from "@/lib/utils";

const tabs = [
  { icon: Sun, label: "Today" },
  { icon: CalendarCheck, label: "Attendance" },
  { icon: Wallet, label: "Payments" },
  { icon: Inbox, label: "Inbox" },
  { icon: LayoutGrid, label: "More" },
];

export function StaffToday() {
  return (
    <>
      <div className="flex shrink-0 items-center justify-between px-5 pb-3 pt-2">
        <div>
          <p className="text-xs text-muted-foreground">Wed, 11 Nov · Koramangala</p>
          <h2 className="text-[22px] font-bold leading-tight">Hi, Coach Rahul</h2>
        </div>
        <Avatar name="Rahul Nair" size={40} />
      </div>
      <Body>
        <div className="rounded-3xl bg-ink p-4 text-ink-foreground">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[11px] opacity-70">Checked in</p>
              <p className="font-display text-3xl font-extrabold leading-none">4:52 PM</p>
            </div>
            <Pill tone="accent">On time</Pill>
          </div>
          <p className="mt-2 text-[11px] opacity-70">First session 5:00 PM · time recorded on tap</p>
          <div className="mt-3 grid grid-cols-2 gap-2">
            <span className="flex h-11 items-center justify-center gap-1.5 rounded-xl bg-ink-foreground/10 text-xs font-bold opacity-50">
              <LogIn className="size-4" /> Check in
            </span>
            <span className="flex h-11 items-center justify-center gap-1.5 rounded-xl bg-accent text-xs font-bold text-accent-foreground">
              <LogOut className="size-4" /> Check out
            </span>
          </div>
        </div>

        <div className="mt-3 grid grid-cols-4 gap-2">
          {[
            { v: "3", l: "Sessions", i: CalendarCheck },
            { v: "48", l: "Active", i: Users },
            { v: "2", l: "On leave", i: CalendarOff },
            { v: "5", l: "Approvals", i: ClipboardCheck },
          ].map(({ v, l, i: I }) => (
            <div key={l} className="rounded-2xl bg-card p-2.5 shadow-soft">
              <I className="size-4 text-muted-foreground" />
              <p className="mt-1.5 font-display text-xl font-bold leading-none">{v}</p>
              <p className="text-[10px] text-muted-foreground">{l}</p>
            </div>
          ))}
        </div>

        <SectionLabel action="3 today">Sessions</SectionLabel>
        <div className="space-y-2">
          {[
            { t: "5:00", b: "Batch B · Intermediate", s: "18 students", now: true },
            { t: "6:15", b: "Batch C · Advanced", s: "12 students", now: false },
          ].map((s) => (
            <div key={s.t} className={cn("flex items-center gap-3 rounded-2xl p-3", s.now ? "bg-accent text-accent-foreground" : "bg-card shadow-soft")}>
              <div className="w-11 text-center">
                <p className="font-display text-base font-bold leading-none">{s.t}</p>
                <p className="text-[9px] font-semibold uppercase opacity-70">PM</p>
              </div>
              <div className="h-8 w-px bg-current opacity-20" />
              <div className="flex-1">
                <p className="text-sm font-bold">{s.b}</p>
                <p className="text-[11px] opacity-70">{s.s}</p>
              </div>
              {s.now ? <Pill tone="ink">Now</Pill> : <ChevronRight className="size-4 opacity-50" />}
            </div>
          ))}
        </div>

        <SectionLabel>Needs attention</SectionLabel>
        <Card className="divide-y p-0">
          {[
            { i: ImageIcon, t: "danger" as const, l: "Payment screenshots to review", n: 3 },
            { i: MessageSquare, t: "info" as const, l: "Parents waiting for a reply", n: 2 },
            { i: AlertTriangle, t: "warning" as const, l: "Fees to follow up", n: 7 },
          ].map(({ i, t, l, n }) => (
            <div key={l} className="flex items-center gap-3 px-3 py-2.5">
              <IconTile icon={i} tone={t} className="size-8 rounded-xl" />
              <span className="flex-1 text-xs font-semibold">{l}</span>
              <span className="font-display text-sm font-bold">{n}</span>
            </div>
          ))}
        </Card>
      </Body>
      <TabBar items={tabs} active={0} />
    </>
  );
}

const marks = ["P", "L", "A", "E"] as const;
const markOn: Record<(typeof marks)[number], string> = {
  P: "bg-success text-destructive-foreground",
  L: "bg-warning text-accent-foreground",
  A: "bg-destructive text-destructive-foreground",
  E: "bg-info text-destructive-foreground",
};

export function StaffMark() {
  const roster: { n: string; s?: string; m?: (typeof marks)[number]; v?: boolean }[] = [
    { n: "Aarav Sharma", s: aarav, m: "P" },
    { n: "Meera Sharma", s: meera, m: "L" },
    { n: "Kabir Rao", m: "P" },
    { n: "Ishaan Gupta", m: "A" },
    { n: "Anaya Iyer", m: "E" },
    { n: "Vihaan Menon" },
    { n: "Sara Thomas", v: true },
  ];
  return (
    <>
      <TopBar back title="Batch B" subtitle="Intermediate · 5:00 – 6:00 PM · Koramangala" />
      <Body className="flex flex-col">
        <div className="flex items-center gap-3">
          <div className="h-2 flex-1 overflow-hidden rounded-full bg-muted">
            <div className="h-full w-2/3 rounded-full bg-ink" />
          </div>
          <span className="text-xs font-bold">12 / 18 marked</span>
        </div>
        <div className="mt-3 flex gap-1.5 text-[10px] font-semibold text-muted-foreground">
          <span>P Present</span>·<span>L Late</span>·<span>A Absent</span>·<span>E Excused</span>
        </div>
        <div className="mt-3 flex-1 space-y-2 overflow-hidden">
          {roster.map((r) => (
            <div key={r.n} className="flex items-center gap-2.5 rounded-2xl bg-card p-2 pl-2.5 shadow-soft">
              <Avatar src={r.s} name={r.n} size={34} />
              <div className="min-w-0 flex-1">
                <p className="truncate text-[13px] font-bold">{r.n}</p>
                {r.v && <p className="text-[10px] font-semibold text-info">Visitor · from Batch A</p>}
              </div>
              <div className="flex gap-1">
                {marks.map((m) => (
                  <span
                    key={m}
                    className={cn(
                      "grid size-6 place-items-center rounded-md text-[10px] font-bold",
                      r.m === m ? markOn[m] : "bg-muted text-muted-foreground",
                    )}
                  >
                    {m}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="space-y-2 pt-3">
          <PrimaryButton variant="ghost" className="h-10">
            <UserPlus className="size-4" /> Add visitor from another batch
          </PrimaryButton>
          <PrimaryButton>
            <Bell className="size-4" /> Save &amp; notify parents
          </PrimaryButton>
        </div>
      </Body>
    </>
  );
}

export function StaffStudents() {
  const list = [
    { n: "Aarav Sharma", s: aarav, b: "Batch B · Intermediate", p: 92 },
    { n: "Meera Sharma", s: meera, b: "Batch A · Beginners", p: 86 },
    { n: "Kabir Rao", b: "Batch B · Intermediate", p: 78 },
    { n: "Anaya Iyer", b: "Batch C · Advanced", p: 97 },
    { n: "Ishaan Gupta", b: "Batch B · Intermediate", p: 64 },
    { n: "Sara Thomas", b: "Batch A · Beginners", p: 88 },
  ];
  return (
    <>
      <TopBar title="Students" subtitle="48 active · Koramangala" />
      <Body className="relative">
        <div className="flex gap-2">
          <div className="flex h-11 flex-1 items-center gap-2 rounded-2xl border bg-card px-3 text-sm text-muted-foreground">
            <Search className="size-4" /> Search students
          </div>
          <span className="grid size-11 place-items-center rounded-2xl border bg-card">
            <SlidersHorizontal className="size-4" />
          </span>
        </div>
        <div className="mt-3 flex gap-2">
          {["All", "Batch A", "Batch B", "Batch C"].map((c, i) => (
            <span key={c} className={cn("rounded-full px-3 py-1.5 text-xs font-semibold", i === 0 ? "bg-ink text-ink-foreground" : "border bg-card")}>
              {c}
            </span>
          ))}
        </div>
        <div className="mt-3 space-y-2">
          {list.map((s) => (
            <div key={s.n} className="flex items-center gap-3 rounded-2xl bg-card p-2.5 shadow-soft">
              <Avatar src={s.s} name={s.n} size={40} />
              <div className="min-w-0 flex-1">
                <p className="text-sm font-bold">{s.n}</p>
                <p className="text-[11px] text-muted-foreground">{s.b}</p>
              </div>
              <Pill tone={s.p >= 85 ? "success" : s.p >= 70 ? "warning" : "danger"}>{s.p}%</Pill>
            </div>
          ))}
        </div>
        <span className="absolute bottom-4 right-5 flex h-12 items-center gap-1.5 rounded-2xl bg-accent px-4 text-sm font-bold text-accent-foreground shadow-phone">
          <Plus className="size-4" /> Add student
        </span>
      </Body>
      <TabBar items={tabs} active={4} />
    </>
  );
}

export function StaffPayments() {
  return (
    <>
      <TopBar title="Payments" subtitle="November 2026 · All branches you manage" />
      <Body>
        <div className="rounded-3xl bg-ink p-4 text-ink-foreground">
          <p className="text-[11px] opacity-70">Collected this month</p>
          <p className="font-display text-3xl font-extrabold">₹1,84,500</p>
          <div className="mt-3 h-2 overflow-hidden rounded-full bg-ink-foreground/15">
            <div className="h-full w-[68%] rounded-full bg-accent" />
          </div>
          <div className="mt-3 grid grid-cols-2 gap-2">
            <div className="rounded-xl bg-ink-foreground/10 p-2.5">
              <p className="text-[10px] opacity-70">Outstanding</p>
              <p className="font-display text-base font-bold">₹86,000</p>
            </div>
            <div className="rounded-xl bg-destructive/25 p-2.5">
              <p className="text-[10px] opacity-80">Overdue</p>
              <p className="font-display text-base font-bold">₹24,500</p>
            </div>
          </div>
        </div>
        <div className="mt-3 grid grid-cols-2 gap-2">
          {[
            { i: FileText, l: "Generate invoices" },
            { i: Receipt, l: "Record desk payment" },
          ].map(({ i: I, l }) => (
            <div key={l} className="flex items-center gap-2 rounded-2xl bg-card p-3 shadow-soft">
              <I className="size-4" />
              <span className="text-xs font-bold leading-tight">{l}</span>
            </div>
          ))}
        </div>
        <SectionLabel action="3 pending">Screenshots to review</SectionLabel>
        <div className="space-y-2">
          {[
            { n: "Priya Sharma", k: "for Aarav · Oct + Nov", a: "₹4,500", m: "UPI" },
            { n: "Deepak Rao", k: "for Kabir · Nov", a: "₹2,500", m: "Bank" },
          ].map((r) => (
            <Card key={r.n} className="p-3">
              <div className="flex items-center gap-3">
                <span className="grid h-12 w-10 place-items-center rounded-lg bg-muted">
                  <ImageIcon className="size-4 text-muted-foreground" />
                </span>
                <div className="flex-1">
                  <p className="text-sm font-bold">{r.n}</p>
                  <p className="text-[11px] text-muted-foreground">{r.k}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-bold">{r.a}</p>
                  <Pill>{r.m}</Pill>
                </div>
              </div>
              <div className="mt-3 grid grid-cols-2 gap-2">
                <span className="flex h-9 items-center justify-center gap-1 rounded-xl bg-destructive/10 text-xs font-bold text-destructive">
                  <X className="size-3.5" /> Reject
                </span>
                <span className="flex h-9 items-center justify-center gap-1 rounded-xl bg-success text-xs font-bold text-destructive-foreground">
                  <Check className="size-3.5" /> Approve
                </span>
              </div>
            </Card>
          ))}
        </div>
      </Body>
      <TabBar items={tabs} active={2} />
    </>
  );
}

export function StaffInbox() {
  return (
    <>
      <TopBar title="Inbox" subtitle="Approve before anything reaches parents" />
      <Body>
        <div className="flex rounded-full bg-muted p-1 text-xs font-bold">
          <span className="flex flex-1 items-center justify-center gap-1 rounded-full bg-card py-1.5 shadow-soft">
            Approvals <span className="rounded-full bg-destructive px-1.5 text-[9px] text-destructive-foreground">5</span>
          </span>
          <span className="flex-1 py-1.5 text-center text-muted-foreground">Enquiries</span>
          <span className="flex-1 py-1.5 text-center text-muted-foreground">Leave</span>
        </div>
        <div className="mt-4 space-y-3">
          <Card className="p-3.5">
            <div className="flex items-center gap-2">
              <IconTile icon={Megaphone} tone="accent" className="size-8 rounded-xl" />
              <div className="flex-1">
                <p className="text-xs font-bold">Announcement · Batch B parents</p>
                <p className="text-[10px] text-muted-foreground">by Coach Rahul · 20 min ago</p>
              </div>
              <Pill tone="warning">Pending</Pill>
            </div>
            <p className="mt-2.5 rounded-xl bg-muted p-2.5 text-xs leading-relaxed">
              Rink closed on 14 Nov for resurfacing. Saturday's session moves to Sunday 7 AM.
            </p>
            <div className="mt-3 grid grid-cols-3 gap-2">
              <span className="flex h-9 items-center justify-center gap-1 rounded-xl bg-destructive/10 text-xs font-bold text-destructive"><X className="size-3.5" /> Reject</span>
              <span className="flex h-9 items-center justify-center gap-1 rounded-xl border text-xs font-bold"><Pencil className="size-3.5" /> Edit</span>
              <span className="flex h-9 items-center justify-center gap-1 rounded-xl bg-ink text-xs font-bold text-ink-foreground"><Check className="size-3.5" /> Approve</span>
            </div>
          </Card>
          <Card className="p-3.5">
            <div className="flex items-center gap-2">
              <IconTile icon={StickyNote} tone="info" className="size-8 rounded-xl" />
              <div className="flex-1">
                <p className="text-xs font-bold">Note about Meera Sharma</p>
                <p className="text-[10px] text-muted-foreground">by Coach Anjali · 1h ago</p>
              </div>
              <Pill tone="warning">Pending</Pill>
            </div>
            <p className="mt-2.5 text-xs leading-relaxed text-muted-foreground">
              Meera is a little hesitant on turns. We'll work on confidence…
            </p>
          </Card>
          <div className="flex items-center gap-3 rounded-2xl border border-dashed p-3">
            <Avatar name="Priya Sharma" size={34} />
            <div className="flex-1">
              <p className="text-xs font-bold">Priya Sharma asked about fees</p>
              <p className="text-[10px] text-muted-foreground">Waiting 2h for a reply</p>
            </div>
            <Pill tone="info">Reply</Pill>
          </div>
        </div>
      </Body>
      <TabBar items={tabs} active={3} />
    </>
  );
}

export function StaffEngagement() {
  return (
    <>
      <TopBar back title="New announcement" subtitle="Goes to approver before parents" />
      <Body className="flex flex-col">
        <p className="text-xs font-semibold text-muted-foreground">Send to</p>
        <div className="mt-2 flex flex-wrap gap-2">
          {[
            ["Koramangala", true],
            ["Batch B", true],
            ["Batch C", false],
            ["All parents", false],
          ].map(([l, on]) => (
            <span key={String(l)} className={cn("flex items-center gap-1 rounded-full px-3 py-1.5 text-xs font-semibold", on ? "bg-ink text-ink-foreground" : "border bg-card")}>
              {on ? <Check className="size-3" /> : null}
              {l}
            </span>
          ))}
        </div>
        <p className="mt-2 text-[11px] text-muted-foreground">32 parents will receive this</p>
        <div className="mt-3 space-y-2">
          <div className="rounded-2xl border bg-card px-4 py-2.5 text-sm font-semibold">Rink closed on 14 Nov</div>
          <div className="h-20 rounded-2xl border bg-card p-3 text-xs leading-relaxed">
            The rink will be resurfaced. Saturday's session moves to Sunday 7 AM. See you there!
          </div>
        </div>
        <p className="mb-2 mt-4 flex items-center gap-1.5 text-xs font-bold">
          <Eye className="size-3.5" /> Parent preview
        </p>
        <div className="rounded-3xl bg-muted p-3">
          <div className="flex gap-2.5 rounded-2xl bg-card p-3 shadow-soft">
            <Logo className="[&>span:last-child]:hidden" />
            <div className="min-w-0 flex-1">
              <div className="flex justify-between">
                <p className="text-xs font-bold">Rink closed on 14 Nov</p>
                <span className="text-[9px] text-muted-foreground">now</span>
              </div>
              <p className="text-[11px] leading-snug text-muted-foreground">The rink will be resurfaced. Saturday's session moves…</p>
            </div>
          </div>
        </div>
        <div className="mt-auto space-y-2">
          <p className="flex items-center justify-center gap-1 text-[10px] text-muted-foreground">
            <Clock className="size-3" /> Needs approval from your branch manager
          </p>
          <PrimaryButton>Submit for approval</PrimaryButton>
        </div>
      </Body>
    </>
  );
}

export function StaffMore() {
  return (
    <>
      <TopBar title="More" subtitle="Engagement, inventory & settings" />
      <Body>
        <div className="grid grid-cols-3 gap-2">
          {[
            { i: StickyNote, l: "Write note", t: "info" as const },
            { i: Megaphone, l: "Announce", t: "accent" as const },
            { i: ImageIcon, l: "Post poster", t: "warning" as const },
          ].map(({ i, l, t }) => (
            <div key={l} className="flex flex-col items-center gap-2 rounded-2xl bg-card py-3.5 shadow-soft">
              <IconTile icon={i} tone={t} />
              <span className="text-[11px] font-bold">{l}</span>
            </div>
          ))}
        </div>

        <SectionLabel action="See all">My submissions</SectionLabel>
        <Card className="divide-y p-0">
          {[
            { i: Trophy, l: "Achievement · Meera", s: "Sent", t: "success" as const },
            { i: StickyNote, l: "Note · Ishaan", s: "Pending", t: "warning" as const },
            { i: StickyNote, l: "Note · Kabir", s: "Rejected", t: "danger" as const },
          ].map(({ i: I, l, s, t }) => (
            <div key={l} className="flex items-center gap-3 px-3.5 py-2.5">
              <I className="size-4 text-muted-foreground" />
              <span className="flex-1 text-xs font-semibold">{l}</span>
              <Pill tone={t}>{s}</Pill>
            </div>
          ))}
        </Card>

        <SectionLabel>Inventory</SectionLabel>
        <div className="grid grid-cols-2 gap-2">
          {[
            { i: Package, l: "Products", v: "42" },
            { i: Tag, l: "Categories", v: "6" },
            { i: ShoppingCart, l: "Desk sales", v: "₹18.4k" },
            { i: Boxes, l: "Ordered in", v: "4" },
          ].map(({ i: I, l, v }) => (
            <div key={l} className="rounded-2xl bg-card p-3 shadow-soft">
              <I className="size-4 text-muted-foreground" />
              <p className="mt-1.5 font-display text-lg font-bold leading-none">{v}</p>
              <p className="text-[10px] text-muted-foreground">{l}</p>
            </div>
          ))}
        </div>
        <div className="mt-2 flex items-center gap-3 rounded-2xl bg-warning/15 p-3">
          <AlertTriangle className="size-4 text-warning" />
          <p className="flex-1 text-xs font-semibold">Helmet M · only 2 left in stock</p>
          <ChevronRight className="size-4 text-muted-foreground" />
        </div>
      </Body>
      <TabBar items={tabs} active={4} />
    </>
  );
}

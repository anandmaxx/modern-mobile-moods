import {
  Home, CalendarCheck, Wallet, Bell, User, ChevronRight, Camera, BookOpen, CalendarOff,
  MessageSquare, Award, ShoppingBag, X, Download, Copy, Upload, CheckCircle2, AlertCircle,
  Megaphone, Image as ImageIcon, StickyNote, Moon, LogOut, Landmark, FileText, Send, Trophy,
  Clock, Info, CreditCard, ChevronDown, Smartphone,
} from "lucide-react";
import poster from "@/assets/poster-camp.jpg";
import aarav from "@/assets/kid-aarav.jpg";
import meera from "@/assets/kid-meera.jpg";
import { Avatar, Body, Card, Field, IconTile, Pill, PrimaryButton, Ring, SectionLabel, TabBar, TopBar } from "./kit";
import { cn } from "@/lib/utils";

const tabs = [
  { icon: Home, label: "Home" },
  { icon: CalendarCheck, label: "Attendance" },
  { icon: Wallet, label: "Payments" },
  { icon: Bell, label: "Inbox" },
  { icon: User, label: "Profile" },
];

function BellBtn() {
  return (
    <span className="relative grid size-10 place-items-center rounded-full bg-card shadow-soft">
      <Bell className="size-[18px]" />
      <span className="absolute right-2 top-2 size-2 rounded-full bg-destructive ring-2 ring-card" />
    </span>
  );
}

function ChildSwitch({ active = 0 }: { active?: number }) {
  const kids = [
    { n: "Aarav", s: aarav },
    { n: "Meera", s: meera },
  ];
  return (
    <div className="flex gap-2">
      {kids.map((k, i) => (
        <span
          key={k.n}
          className={cn(
            "flex items-center gap-2 rounded-full py-1 pl-1 pr-3 text-xs font-bold",
            i === active ? "bg-ink text-ink-foreground" : "bg-card text-foreground shadow-soft",
          )}
        >
          <Avatar src={k.s} name={k.n} size={26} /> {k.n}
        </span>
      ))}
    </div>
  );
}

export function ParentHome() {
  return (
    <>
      <div className="flex shrink-0 items-center justify-between px-5 pb-3 pt-2">
        <div>
          <p className="text-xs text-muted-foreground">Good evening</p>
          <h2 className="text-[22px] font-bold leading-tight">Priya Sharma</h2>
        </div>
        <BellBtn />
      </div>
      <Body>
        <div className="relative h-[150px] overflow-hidden rounded-3xl">
          <img src={poster} alt="Summer speed camp" width={1280} height={768} className="size-full object-cover" />
          <div className="scrim absolute inset-0" />
          <div className="absolute bottom-3 left-4 right-4 text-ink-foreground">
            <Pill tone="accent">New poster</Pill>
            <p className="mt-1 font-display text-lg font-bold leading-tight">Summer Speed Camp · Apr 14</p>
          </div>
        </div>
        <div className="mt-2 flex justify-center gap-1.5">
          <span className="h-1.5 w-5 rounded-full bg-foreground" />
          <span className="size-1.5 rounded-full bg-border" />
          <span className="size-1.5 rounded-full bg-border" />
        </div>

        <SectionLabel action="2 children">Your children</SectionLabel>
        <div className="space-y-2.5">
          {[
            { n: "Aarav Sharma", s: aarav, b: "Intermediate · Batch B", p: 92 },
            { n: "Meera Sharma", s: meera, b: "Beginners · Batch A", p: 86 },
          ].map((k) => (
            <Card key={k.n} className="flex items-center gap-3 p-3">
              <div className="relative">
                <Avatar src={k.s} name={k.n} size={48} />
                <span className="absolute -bottom-0.5 -right-0.5 grid size-5 place-items-center rounded-full bg-ink text-ink-foreground ring-2 ring-card">
                  <Camera className="size-2.5" />
                </span>
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-sm font-bold">{k.n}</p>
                <p className="text-[11px] text-muted-foreground">{k.b}</p>
              </div>
              <div className="text-right">
                <p className="font-display text-lg font-bold leading-none">{k.p}%</p>
                <p className="text-[10px] text-muted-foreground">attendance</p>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-4 grid grid-cols-4 gap-2">
          {[
            { i: CalendarOff, l: "Leave" },
            { i: MessageSquare, l: "Enquiry" },
            { i: Award, l: "Feedback" },
            { i: ShoppingBag, l: "Purchases" },
          ].map(({ i: I, l }) => (
            <div key={l} className="flex flex-col items-center gap-1.5 rounded-2xl bg-card py-3 shadow-soft">
              <I className="size-5" />
              <span className="text-[10px] font-semibold">{l}</span>
            </div>
          ))}
        </div>

        <div className="mt-3 flex items-center gap-3 rounded-2xl border border-dashed p-3">
          <IconTile icon={BookOpen} tone="info" />
          <div className="flex-1">
            <p className="text-sm font-bold">Academy guidelines</p>
            <p className="text-[11px] text-muted-foreground">Safety gear, timings &amp; rules</p>
          </div>
          <ChevronRight className="size-4 text-muted-foreground" />
        </div>
      </Body>
      <TabBar items={tabs} active={0} />
    </>
  );
}

export function PosterPopup() {
  return (
    <div className="absolute inset-0 z-10 flex flex-col bg-ink text-ink-foreground">
      <img src={poster} alt="" width={1280} height={768} className="absolute inset-0 size-full object-cover" />
      <div className="scrim-top absolute inset-0" />
      <div className="relative flex items-center justify-between px-5 pt-14">
        <Pill tone="accent">New from your academy</Pill>
        <span className="grid size-9 place-items-center rounded-full bg-ink/60 backdrop-blur">
          <X className="size-4" />
        </span>
      </div>
      <div className="relative mt-auto px-6 pb-10">
        <p className="text-xs font-semibold uppercase tracking-widest text-accent">Apr 14 – May 30</p>
        <h2 className="mt-2 text-4xl font-extrabold leading-[1]">Summer Speed Camp</h2>
        <p className="mt-3 text-sm opacity-80">
          Six weeks of speed, balance and race-day drills. Limited spots for Batch A &amp; B.
        </p>
        <PrimaryButton className="mt-6">Got it</PrimaryButton>
      </div>
    </div>
  );
}

export function ParentAttendance() {
  const days = Array.from({ length: 30 }, (_, i) => i + 1);
  const mark = (d: number) =>
    [3, 17].includes(d) ? "a" : [10].includes(d) ? "l" : [24].includes(d) ? "e" : d % 7 === 0 || d % 7 === 6 || d > 26 ? "" : "p";
  const dot = { p: "bg-success", a: "bg-destructive", l: "bg-warning", e: "bg-info", "": "" } as const;
  return (
    <>
      <TopBar title="Attendance" subtitle="November 2026" />
      <Body>
        <ChildSwitch />
        <Card className="mt-4 flex items-center gap-4">
          <div className="relative">
            <Ring value={92} size={104} stroke={11} />
            <div className="absolute inset-0 grid place-items-center text-center">
              <div>
                <p className="font-display text-2xl font-extrabold leading-none">92%</p>
                <p className="text-[9px] font-semibold uppercase text-muted-foreground">this term</p>
              </div>
            </div>
          </div>
          <div className="grid flex-1 grid-cols-2 gap-x-3 gap-y-2.5">
            {[
              ["Present", "22", "bg-success"],
              ["Late", "2", "bg-warning"],
              ["Absent", "2", "bg-destructive"],
              ["Excused", "1", "bg-info"],
            ].map(([l, v, c]) => (
              <div key={l}>
                <p className="flex items-center gap-1 text-[10px] font-semibold text-muted-foreground">
                  <span className={cn("size-1.5 rounded-full", c)} /> {l}
                </p>
                <p className="font-display text-lg font-bold leading-tight">{v}</p>
              </div>
            ))}
          </div>
        </Card>

        <Card className="mt-3 p-3">
          <div className="grid grid-cols-7 gap-y-1.5 text-center text-[10px] font-semibold text-muted-foreground">
            {["M", "T", "W", "T", "F", "S", "S"].map((d, i) => (
              <span key={i}>{d}</span>
            ))}
            {days.map((d) => {
              const m = mark(d);
              return (
                <span key={d} className="flex flex-col items-center gap-0.5">
                  <span className={cn("text-[11px]", d === 11 ? "grid size-6 place-items-center rounded-full bg-ink text-ink-foreground" : "text-foreground")}>
                    {d}
                  </span>
                  <span className={cn("size-1 rounded-full", dot[m])} />
                </span>
              );
            })}
          </div>
        </Card>

        <SectionLabel action="See all">Recent</SectionLabel>
        <div className="space-y-2">
          <div className="flex items-center gap-3 rounded-2xl bg-card p-3 shadow-soft">
            <IconTile icon={CheckCircle2} tone="success" />
            <div className="flex-1">
              <p className="text-sm font-bold">Present · Batch B</p>
              <p className="text-[11px] text-muted-foreground">Tue 10 Nov · 5:00 PM</p>
            </div>
          </div>
          <div className="flex items-center gap-3 rounded-2xl bg-card p-3 shadow-soft">
            <IconTile icon={Info} tone="info" />
            <div className="flex-1">
              <p className="text-sm font-bold">Visited Batch C</p>
              <p className="text-[11px] text-muted-foreground">Missed own batch — not counted absent</p>
            </div>
          </div>
        </div>
      </Body>
      <TabBar items={tabs} active={1} />
    </>
  );
}

export function LeaveNotice() {
  return (
    <>
      <TopBar back title="Leave notice" subtitle="Let the academy know in advance" />
      <Body className="flex flex-col">
        <div className="space-y-3">
          <div className="flex items-center gap-3 rounded-2xl border bg-card px-3 py-2.5">
            <Avatar src={aarav} name="Aarav" size={32} />
            <div className="flex-1">
              <p className="text-[10px] font-semibold uppercase tracking-wide text-muted-foreground">Child</p>
              <p className="text-sm font-semibold">Aarav Sharma</p>
            </div>
            <ChevronDown className="size-4 text-muted-foreground" />
          </div>
          <div className="grid grid-cols-2 gap-2">
            <Field label="From" value="Mon, 16 Nov" icon={CalendarCheck} />
            <Field label="To" value="Thu, 19 Nov" icon={CalendarCheck} />
          </div>
          <div>
            <p className="mb-2 text-xs font-semibold text-muted-foreground">Reason</p>
            <div className="flex flex-wrap gap-2">
              {["Unwell", "Family trip", "Exams", "Other"].map((r, i) => (
                <span
                  key={r}
                  className={cn(
                    "rounded-full px-3 py-1.5 text-xs font-semibold",
                    i === 1 ? "bg-ink text-ink-foreground" : "border bg-card",
                  )}
                >
                  {r}
                </span>
              ))}
            </div>
          </div>
          <div className="h-24 rounded-2xl border bg-card p-3 text-sm text-muted-foreground">
            Visiting grandparents in Mysuru. Back on Friday.
          </div>
        </div>
        <SectionLabel>Past notices</SectionLabel>
        <div className="flex items-center justify-between rounded-2xl bg-card p-3 shadow-soft">
          <div>
            <p className="text-sm font-bold">2 – 3 Oct · Exams</p>
            <p className="text-[11px] text-muted-foreground">Meera Sharma</p>
          </div>
          <Pill tone="success">Seen</Pill>
        </div>
        <PrimaryButton variant="ink" className="mt-auto">
          <Send className="size-4" /> Send leave notice
        </PrimaryButton>
      </Body>
    </>
  );
}

export function ParentPayments() {
  const rows = [
    { m: "November 2026", d: "Due 15 Nov", a: "₹2,500", t: "warning" as const, l: "Due" },
    { m: "October 2026", d: "Was due 15 Oct", a: "₹2,000", t: "danger" as const, l: "Overdue" },
    { m: "September 2026", d: "Paid 12 Sep · UPI", a: "₹2,000", t: "success" as const, l: "Paid" },
    { m: "Registration fee", d: "Paid 3 Jun", a: "₹1,500", t: "success" as const, l: "Paid" },
  ];
  return (
    <>
      <TopBar title="Payments" subtitle="Aarav Sharma" />
      <Body>
        <div className="relative overflow-hidden rounded-3xl bg-ink p-5 text-ink-foreground">
          <div className="absolute -right-10 -top-10 size-36 rounded-full bg-accent/20" />
          <p className="text-xs opacity-70">Total balance</p>
          <p className="mt-1 font-display text-4xl font-extrabold">₹4,500</p>
          <div className="mt-2 flex gap-2">
            <Pill tone="danger" className="bg-destructive text-destructive-foreground">1 overdue</Pill>
            <Pill className="bg-ink-foreground/15 text-ink-foreground">1 due soon</Pill>
          </div>
          <PrimaryButton className="mt-4">Pay full balance</PrimaryButton>
          <p className="mt-2 text-center text-[10px] opacity-60">Part payments are taken at the academy desk</p>
        </div>

        <div className="mt-4 flex rounded-full bg-muted p-1 text-xs font-bold">
          <span className="flex-1 rounded-full bg-card py-1.5 text-center shadow-soft">Invoices</span>
          <span className="flex-1 py-1.5 text-center text-muted-foreground">Receipts</span>
          <span className="flex-1 py-1.5 text-center text-muted-foreground">Bank / UPI</span>
        </div>

        <div className="mt-3 space-y-2">
          {rows.map((r) => (
            <div key={r.m} className="flex items-center gap-3 rounded-2xl bg-card p-3 shadow-soft">
              <IconTile icon={FileText} tone={r.t} />
              <div className="min-w-0 flex-1">
                <p className="text-sm font-bold">{r.m}</p>
                <p className="text-[11px] text-muted-foreground">{r.d}</p>
              </div>
              <div className="flex flex-col items-end gap-1">
                <p className="text-sm font-bold">{r.a}</p>
                {r.l === "Paid" ? (
                  <Download className="size-3.5 text-muted-foreground" />
                ) : (
                  <Pill tone={r.t}>{r.l}</Pill>
                )}
              </div>
            </div>
          ))}
        </div>
      </Body>
      <TabBar items={tabs} active={2} />
    </>
  );
}

export function PayScreen() {
  return (
    <>
      <TopBar back title="Pay ₹4,500" subtitle="Nov + Oct fees · from academy records" />
      <Body className="flex flex-col">
        <div className="space-y-2">
          <div className="flex items-center gap-3 rounded-2xl border-2 border-foreground bg-card p-3">
            <IconTile icon={CreditCard} tone="accent" />
            <div className="flex-1">
              <p className="text-sm font-bold">Pay online</p>
              <p className="text-[11px] text-muted-foreground">UPI, cards, net banking</p>
            </div>
            <span className="grid size-5 place-items-center rounded-full border-[5px] border-foreground" />
          </div>
          <div className="flex items-center gap-3 rounded-2xl border bg-card p-3">
            <IconTile icon={Upload} />
            <div className="flex-1">
              <p className="text-sm font-bold">I already paid</p>
              <p className="text-[11px] text-muted-foreground">Upload UPI, bank or cash proof</p>
            </div>
            <span className="size-5 rounded-full border-2" />
          </div>
        </div>

        <SectionLabel>Academy account</SectionLabel>
        <Card className="space-y-3 p-3.5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <Smartphone className="size-4 text-muted-foreground" />
              <div>
                <p className="text-[10px] text-muted-foreground">UPI ID</p>
                <p className="text-sm font-semibold">bluewheel@okaxis</p>
              </div>
            </div>
            <Copy className="size-4 text-muted-foreground" />
          </div>
          <div className="h-px bg-border" />
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <Landmark className="size-4 text-muted-foreground" />
              <div>
                <p className="text-[10px] text-muted-foreground">HDFC Bank · IFSC HDFC0001234</p>
                <p className="text-sm font-semibold">A/c 5010 0234 5678</p>
              </div>
            </div>
            <Copy className="size-4 text-muted-foreground" />
          </div>
        </Card>

        <SectionLabel>Recent proof</SectionLabel>
        <div className="flex items-center gap-3 rounded-2xl border border-dashed bg-card p-3">
          <span className="grid h-12 w-10 place-items-center rounded-lg bg-muted">
            <ImageIcon className="size-4 text-muted-foreground" />
          </span>
          <div className="flex-1">
            <p className="text-sm font-bold">upi-sep-fee.jpg</p>
            <p className="text-[11px] text-muted-foreground">Uploaded 12 Sep</p>
          </div>
          <Pill tone="success">Approved</Pill>
        </div>

        <PrimaryButton variant="ink" className="mt-auto">Continue to pay ₹4,500</PrimaryButton>
      </Body>
    </>
  );
}

export function PurchasesScreen() {
  const items = [
    { n: "Pro Inline Skates · Size 4", d: "Bought 3 Jun · Desk", a: "₹6,800" },
    { n: "Helmet · Blue / M", d: "Bought 3 Jun · Desk", a: "₹1,450" },
    { n: "Knee & elbow guard set", d: "Bought 18 Aug · Desk", a: "₹1,200" },
    { n: "Academy T-shirt", d: "Bought 2 Oct · Desk", a: "₹450" },
  ];
  return (
    <>
      <TopBar back title="Purchases" subtitle="Shoes & gear from the academy desk" />
      <Body>
        <div className="flex items-start gap-2.5 rounded-2xl bg-info/10 p-3 text-xs text-info">
          <Info className="mt-0.5 size-4 shrink-0" />
          <p>Shown for your reference only. Payments for these were made at the desk.</p>
        </div>
        <div className="mt-4 space-y-2.5">
          {items.map((it) => (
            <Card key={it.n} className="flex items-center gap-3 p-3">
              <span className="grid size-12 place-items-center rounded-xl bg-muted">
                <ShoppingBag className="size-5 text-muted-foreground" />
              </span>
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-bold">{it.n}</p>
                <p className="text-[11px] text-muted-foreground">{it.d}</p>
              </div>
              <p className="text-sm font-bold">{it.a}</p>
            </Card>
          ))}
        </div>
        <div className="mt-4 flex items-center justify-between rounded-2xl bg-ink px-4 py-3 text-ink-foreground">
          <span className="text-xs opacity-70">Total this year</span>
          <span className="font-display text-lg font-bold">₹9,900</span>
        </div>
      </Body>
    </>
  );
}

export function NotificationsScreen() {
  const n = [
    { i: Wallet, t: "warning" as const, h: "Fee reminder", b: "November fee of ₹2,500 is due on 15 Nov.", w: "2m", u: true },
    { i: CalendarCheck, t: "success" as const, h: "Attendance marked", b: "Aarav was marked Present in Batch B.", w: "1h", u: true },
    { i: Megaphone, t: "accent" as const, h: "Announcement", b: "Rink closed on 14 Nov for resurfacing.", w: "3h", u: true },
    { i: CheckCircle2, t: "success" as const, h: "Payment approved", b: "Your UPI screenshot for Sep was accepted.", w: "Yday", u: false },
    { i: StickyNote, t: "info" as const, h: "Note about Meera", b: "Coach Rahul shared a note on balance drills.", w: "Mon", u: false },
    { i: MessageSquare, t: "neutral" as const, h: "Reply to your enquiry", b: "Yes, Saturday batch has 3 seats left.", w: "Sun", u: false },
  ];
  return (
    <>
      <TopBar title="Inbox" subtitle="3 unread" right={<span className="text-xs font-bold text-muted-foreground">Mark all read</span>} />
      <Body>
        <div className="flex gap-2 overflow-hidden">
          {["All", "Fees", "Attendance", "Academy"].map((c, i) => (
            <span key={c} className={cn("rounded-full px-3 py-1.5 text-xs font-semibold", i === 0 ? "bg-ink text-ink-foreground" : "border bg-card")}>
              {c}
            </span>
          ))}
        </div>
        <div className="mt-4 space-y-2">
          {n.map((x) => (
            <div key={x.h} className={cn("flex gap-3 rounded-2xl p-3", x.u ? "bg-card shadow-soft" : "")}>
              <IconTile icon={x.i} tone={x.t} />
              <div className="min-w-0 flex-1">
                <div className="flex items-center justify-between gap-2">
                  <p className="text-sm font-bold">{x.h}</p>
                  <span className="text-[10px] text-muted-foreground">{x.w}</span>
                </div>
                <p className="text-xs leading-snug text-muted-foreground">{x.b}</p>
              </div>
              {x.u && <span className="mt-1.5 size-2 shrink-0 rounded-full bg-destructive" />}
            </div>
          ))}
        </div>
      </Body>
      <TabBar items={tabs} active={3} />
    </>
  );
}

export function EnquiriesScreen() {
  return (
    <>
      <TopBar back title="Enquiries" subtitle="Bluewheel Academy · replies in a few hours" />
      <Body className="flex flex-col">
        <div className="flex-1 space-y-3 overflow-hidden">
          <p className="text-center text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">Sunday</p>
          <div className="ml-auto max-w-[78%] rounded-2xl rounded-br-md bg-ink px-3.5 py-2.5 text-sm text-ink-foreground">
            Hi! Is there space in the Saturday morning batch for Meera?
            <p className="mt-1 text-right text-[9px] opacity-60">10:14 AM</p>
          </div>
          <div className="max-w-[78%] rounded-2xl rounded-bl-md bg-card px-3.5 py-2.5 text-sm shadow-soft">
            Yes, Saturday 7 AM has 3 seats left. We can move Meera from next week.
            <p className="mt-1 text-[9px] text-muted-foreground">Academy · 12:40 PM</p>
          </div>
          <div className="ml-auto max-w-[78%] rounded-2xl rounded-br-md bg-ink px-3.5 py-2.5 text-sm text-ink-foreground">
            Perfect, please go ahead. Will the fee change?
            <p className="mt-1 text-right text-[9px] opacity-60">12:52 PM</p>
          </div>
          <div className="flex items-center gap-2 text-[11px] text-muted-foreground">
            <Clock className="size-3.5" /> Waiting for academy reply
          </div>
        </div>
        <div className="flex items-center gap-2 rounded-full border bg-card p-1.5 pl-4">
          <span className="flex-1 text-sm text-muted-foreground">Write a message…</span>
          <span className="grid size-9 place-items-center rounded-full bg-accent text-accent-foreground">
            <Send className="size-4" />
          </span>
        </div>
      </Body>
    </>
  );
}

export function FeedbackScreen() {
  return (
    <>
      <TopBar back title="Feedback" subtitle="Notes & achievements from coaches" />
      <Body>
        <ChildSwitch active={1} />
        <div className="relative mt-4 overflow-hidden rounded-3xl bg-accent p-4 text-accent-foreground">
          <Trophy className="absolute -right-3 -top-3 size-24 opacity-15" />
          <Pill tone="ink">Achievement</Pill>
          <p className="mt-2 font-display text-xl font-extrabold leading-tight">Cleared Level 2 — Crossovers</p>
          <p className="mt-1 text-xs opacity-80">Coach Rahul · 8 Nov</p>
        </div>
        <SectionLabel>Coach notes</SectionLabel>
        <div className="space-y-2.5">
          {[
            { c: "Coach Rahul", d: "6 Nov", t: "Great balance this week! Keep practising the T-stop at home on a flat surface." },
            { c: "Coach Anjali", d: "28 Oct", t: "Meera is a little hesitant on turns. We'll work on confidence in the next 2 sessions." },
          ].map((n) => (
            <Card key={n.d} className="p-3.5">
              <div className="flex items-center gap-2">
                <Avatar name={n.c.replace("Coach ", "")} size={28} />
                <p className="flex-1 text-xs font-bold">{n.c}</p>
                <span className="text-[10px] text-muted-foreground">{n.d}</span>
              </div>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{n.t}</p>
            </Card>
          ))}
          <Card className="flex items-center gap-3 p-3">
            <IconTile icon={Award} tone="warning" />
            <div>
              <p className="text-sm font-bold">Best attendance · October</p>
              <p className="text-[11px] text-muted-foreground">Batch A · 1 Nov</p>
            </div>
          </Card>
        </div>
      </Body>
    </>
  );
}

export function ParentProfile() {
  return (
    <>
      <TopBar title="Profile" />
      <Body className="flex flex-col">
        <Card className="flex items-center gap-3">
          <Avatar name="Priya Sharma" size={52} />
          <div className="flex-1">
            <p className="font-display text-lg font-bold">Priya Sharma</p>
            <p className="text-xs text-muted-foreground">+91 98450 12345 · Parent</p>
          </div>
        </Card>
        <Card className="mt-3 divide-y p-0">
          {[
            { i: Moon, l: "Dark mode", r: <span className="relative h-6 w-10 rounded-full bg-ink"><span className="absolute right-0.5 top-0.5 size-5 rounded-full bg-accent" /></span> },
            { i: Bell, l: "Notifications", r: <ChevronRight className="size-4 text-muted-foreground" /> },
            { i: Landmark, l: "Academy bank & UPI", r: <ChevronRight className="size-4 text-muted-foreground" /> },
            { i: BookOpen, l: "Guidelines", r: <ChevronRight className="size-4 text-muted-foreground" /> },
            { i: FileText, l: "Terms & Conditions", r: <ChevronRight className="size-4 text-muted-foreground" /> },
          ].map(({ i: I, l, r }) => (
            <div key={l} className="flex items-center gap-3 px-4 py-3.5">
              <I className="size-[18px] text-muted-foreground" />
              <span className="flex-1 text-sm font-semibold">{l}</span>
              {r}
            </div>
          ))}
        </Card>
        <div className="mt-auto space-y-2">
          <PrimaryButton variant="danger">
            <LogOut className="size-4" /> Log out
          </PrimaryButton>
          <p className="flex items-center justify-center gap-1 text-center text-[10px] text-muted-foreground">
            <AlertCircle className="size-3" /> Logging out also stops notifications on this phone
          </p>
        </div>
      </Body>
      <TabBar items={tabs} active={4} />
    </>
  );
}

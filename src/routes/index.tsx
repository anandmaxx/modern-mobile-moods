import { createFileRoute } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { PhoneFrame } from "@/components/mock/kit";
import { Logo, LoginScreen, LockedScreen, TermsScreen } from "@/components/mock/common-screens";
import {
  ParentHome, PosterPopup, ParentAttendance, LeaveNotice, ParentPayments, PayScreen,
  PurchasesScreen, NotificationsScreen, EnquiriesScreen, FeedbackScreen, ParentProfile,
} from "@/components/mock/parent-screens";
import {
  StaffToday, StaffMark, StaffStudents, StaffPayments, StaffInbox, StaffEngagement, StaffMore,
} from "@/components/mock/staff-screens";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SkateFlow — Mobile App Screens" },
      { name: "description", content: "UI design screens for SkateFlow, the skating academy app for parents and coaches." },
      { property: "og:title", content: "SkateFlow — Mobile App Screens" },
      { property: "og:description", content: "Parent and Staff app screen designs for the SkateFlow skating academy app." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Section({ id, eyebrow, title, desc, children }: { id: string; eyebrow: string; title: string; desc: string; children: ReactNode }) {
  return (
    <section id={id} className="mx-auto max-w-[1520px] px-6 py-16">
      <div className="mb-10 max-w-xl">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">{eyebrow}</p>
        <h2 className="mt-2 text-4xl font-extrabold">{title}</h2>
        <p className="mt-2 text-muted-foreground">{desc}</p>
      </div>
      <div className="flex flex-wrap justify-center gap-x-10 gap-y-14 xl:justify-start">{children}</div>
    </section>
  );
}

function Index() {
  return (
    <main className="canvas-grid min-h-screen">
      <header className="sticky top-0 z-30 border-b bg-background/85 backdrop-blur">
        <div className="mx-auto flex max-w-[1520px] items-center justify-between px-6 py-4">
          <Logo />
          <nav className="flex gap-1 text-sm font-semibold">
            {[
              ["#start", "Sign in"],
              ["#parent", "Parent app"],
              ["#staff", "Staff app"],
            ].map(([h, l]) => (
              <a key={h} href={h} className="rounded-full px-4 py-2 text-muted-foreground transition-colors hover:bg-card hover:text-foreground">
                {l}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <div className="mx-auto max-w-[1520px] px-6 pb-4 pt-16">
        <h1 className="max-w-3xl text-5xl font-extrabold leading-[1.02] md:text-6xl">
          One app, two experiences. <span className="rounded-xl bg-accent px-2 text-accent-foreground">22 screens.</span>
        </h1>
        <p className="mt-4 max-w-xl text-lg text-muted-foreground">
          Mobile UI for SkateFlow — parents follow attendance and fees, staff run the academy's day.
        </p>
      </div>

      <Section id="start" eyebrow="01 · Shared" title="Getting in" desc="Mobile number and a WhatsApp PIN, with a safe lockout and first-time terms.">
        <PhoneFrame lightStatus title="Sign in" note="Mobile number + 6-digit PIN from WhatsApp"><LoginScreen /></PhoneFrame>
        <PhoneFrame title="Login paused" note="Shown after too many wrong PINs"><LockedScreen /></PhoneFrame>
        <PhoneFrame title="Terms & Conditions" note="Accepted once before first use"><TermsScreen /></PhoneFrame>
      </Section>

      <Section id="parent" eyebrow="02 · Parent app" title="For parents" desc="Children, attendance, fees and academy updates — all in one place.">
        <PhoneFrame title="Home" note="Children, posters, quick actions, guidelines"><ParentHome /></PhoneFrame>
        <PhoneFrame title="Home · dark mode" dark><ParentHome /></PhoneFrame>
        <PhoneFrame lightStatus title="New poster" note="Opens full-screen once per phone"><PosterPopup /></PhoneFrame>
        <PhoneFrame title="Attendance" note="Counted by day; visitor batches don't count against"><ParentAttendance /></PhoneFrame>
        <PhoneFrame title="Leave notice"><LeaveNotice /></PhoneFrame>
        <PhoneFrame title="Payments" note="Due, overdue, paid and registration fee"><ParentPayments /></PhoneFrame>
        <PhoneFrame title="Pay or upload proof" note="Online payment or UPI / bank / cash screenshot"><PayScreen /></PhoneFrame>
        <PhoneFrame title="Purchases" note="Desk purchases, reference only"><PurchasesScreen /></PhoneFrame>
        <PhoneFrame title="Inbox" note="Every notification opens the right screen"><NotificationsScreen /></PhoneFrame>
        <PhoneFrame title="Enquiries"><EnquiriesScreen /></PhoneFrame>
        <PhoneFrame title="Feedback" note="Coach notes and achievements"><FeedbackScreen /></PhoneFrame>
        <PhoneFrame title="Profile · dark mode" dark><ParentProfile /></PhoneFrame>
      </Section>

      <Section id="staff" eyebrow="03 · Staff app" title="For coaches & managers" desc="Check in, mark attendance, collect fees and approve every message to parents.">
        <PhoneFrame title="Today" note="Check-in, sessions and what needs attention"><StaffToday /></PhoneFrame>
        <PhoneFrame title="Mark attendance" note="Present, Late, Absent, Excused + visitors"><StaffMark /></PhoneFrame>
        <PhoneFrame title="Students"><StaffStudents /></PhoneFrame>
        <PhoneFrame title="Payments" note="Collected, outstanding, screenshot reviews"><StaffPayments /></PhoneFrame>
        <PhoneFrame title="Inbox · Approvals" note="Nothing reaches parents without approval"><StaffInbox /></PhoneFrame>
        <PhoneFrame title="New announcement" note="With a preview of what parents see"><StaffEngagement /></PhoneFrame>
        <PhoneFrame title="More" note="Engagement, submissions status, inventory"><StaffMore /></PhoneFrame>
      </Section>

      <footer className="border-t py-10 text-center text-sm text-muted-foreground">SkateFlow · Mobile UI design · Nov 2026</footer>
    </main>
  );
}

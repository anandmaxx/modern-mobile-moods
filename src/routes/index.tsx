import { createFileRoute } from "@tanstack/react-router";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";
import { PhoneFrame } from "@/components/mock/kit";
import { Logo, LoginScreen, LockedScreen, TermsScreen } from "@/components/mock/common-screens";
import {
  ParentHome, PosterPopup, ParentAttendance, LeaveNotice, ParentPayments, PayScreen,
  PurchasesScreen, NotificationsScreen, EnquiriesScreen, FeedbackScreen, ParentProfile,
} from "@/components/mock/parent-screens";
import {
  StaffToday, StaffMark, StaffStudents, StaffPayments, StaffInbox, StaffEngagement, StaffMore,
} from "@/components/mock/staff-screens";
import { StudentProfile, StudentDetailsForm } from "@/components/mock/student-screens";
import { ChildPhotoOptions, EditChildPhoto, RemoveChildPhoto, NoChildPhoto } from "@/components/mock/photo-screens";

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

function ThemeSwitch({ dark, onChange }: { dark: boolean; onChange: (d: boolean) => void }) {
  return (
    <div className="flex shrink-0 items-center gap-1 rounded-full border bg-card p-1">
      {[
        { on: false, label: "Light", Icon: Sun },
        { on: true, label: "Dark", Icon: Moon },
      ].map(({ on, label, Icon }) => (
        <button
          key={label}
          type="button"
          aria-pressed={dark === on}
          onClick={() => onChange(on)}
          className={cn(
            "flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-bold transition-colors",
            dark === on ? "bg-ink text-ink-foreground" : "text-muted-foreground hover:text-foreground",
          )}
        >
          <Icon className="size-3.5" />
          {label}
        </button>
      ))}
    </div>
  );
}

function Index() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  return (
    <main className="canvas-grid min-h-screen bg-background">
      <header className="sticky top-0 z-30 border-b bg-background/85 backdrop-blur">
        <div className="mx-auto flex max-w-[1520px] flex-wrap items-center justify-between gap-x-6 gap-y-3 px-6 py-4">
          <Logo />
          <div className="flex items-center gap-3">
            <nav className="hidden gap-1 text-sm font-semibold sm:flex">
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
            <ThemeSwitch dark={dark} onChange={setDark} />
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-[1520px] px-6 pb-4 pt-16">
        <h1 className="max-w-3xl text-5xl font-extrabold leading-[1.02] md:text-6xl">
          One app, two experiences. <span className="rounded-xl bg-accent px-2 text-accent-foreground">26 screens.</span>
        </h1>
        <p className="mt-4 max-w-xl text-lg text-muted-foreground">
          Mobile UI for SkateFlow — parents follow attendance and fees, staff run the academy's day.
          Flip the whole set between light and dark with the switch up top.
        </p>
      </div>

      <Section id="start" eyebrow="01 · Shared" title="Getting in" desc="Mobile number and a WhatsApp PIN, with a safe lockout and first-time terms.">
        <PhoneFrame lightStatus title="Sign in" note="Mobile number + 6-digit PIN from WhatsApp"><LoginScreen /></PhoneFrame>
        <PhoneFrame title="Login paused" note="Shown after too many wrong PINs"><LockedScreen /></PhoneFrame>
        <PhoneFrame title="Terms & Conditions" note="Accepted once before first use"><TermsScreen /></PhoneFrame>
      </Section>

      <Section id="parent" eyebrow="02 · Parent app" title="For parents" desc="Children, attendance, fees and academy updates — all in one place.">
        <PhoneFrame title="Home" note="Children, posters, quick actions, guidelines"><ParentHome /></PhoneFrame>
        <PhoneFrame lightStatus title="New poster" note="Opens full-screen once per phone"><PosterPopup /></PhoneFrame>
        <PhoneFrame title="Attendance" note="Counted by day; visitor batches don't count against"><ParentAttendance /></PhoneFrame>
        <PhoneFrame title="Leave notice"><LeaveNotice /></PhoneFrame>
        <PhoneFrame title="Payments" note="Due, overdue, paid and registration fee"><ParentPayments /></PhoneFrame>
        <PhoneFrame title="Pay or upload proof" note="Online payment or UPI / bank / cash screenshot"><PayScreen /></PhoneFrame>
        <PhoneFrame title="Purchases" note="Desk purchases, reference only"><PurchasesScreen /></PhoneFrame>
        <PhoneFrame title="Inbox" note="Every notification opens the right screen"><NotificationsScreen /></PhoneFrame>
        <PhoneFrame title="Enquiries"><EnquiriesScreen /></PhoneFrame>
        <PhoneFrame title="Feedback" note="Coach notes and achievements"><FeedbackScreen /></PhoneFrame>
        <PhoneFrame title="Profile" note="Account, payments and academy contacts"><ParentProfile /></PhoneFrame>
        <PhoneFrame title="School & address" note="Parent adds school name and home address for their child"><StudentDetailsForm /></PhoneFrame>
        <PhoneFrame title="Child photo · options" note="Tap the photo to take, upload, edit or remove it"><ChildPhotoOptions /></PhoneFrame>
        <PhoneFrame lightStatus title="Edit photo" note="Crop, zoom, rotate, flip and brighten"><EditChildPhoto /></PhoneFrame>
        <PhoneFrame title="Remove photo" note="Asks before removing; initials show instead"><RemoveChildPhoto /></PhoneFrame>
        <PhoneFrame title="No photo yet" note="Take or upload a photo · undo after removing"><NoChildPhoto /></PhoneFrame>
      </Section>

      <Section id="staff" eyebrow="03 · Staff app" title="For coaches & managers" desc="Check in, mark attendance, collect fees and approve every message to parents.">
        <PhoneFrame title="Today" note="Check-in, sessions and what needs attention"><StaffToday /></PhoneFrame>
        <PhoneFrame title="Mark attendance" note="Present, Late, Absent, Excused + visitors"><StaffMark /></PhoneFrame>
        <PhoneFrame title="Students"><StaffStudents /></PhoneFrame>
        <PhoneFrame title="Student profile" note="Class, attendance, progress and parent contacts"><StudentProfile /></PhoneFrame>
        <PhoneFrame title="Payments" note="Collected, outstanding, screenshot reviews"><StaffPayments /></PhoneFrame>
        <PhoneFrame title="Inbox · Approvals" note="Nothing reaches parents without approval"><StaffInbox /></PhoneFrame>
        <PhoneFrame title="New announcement" note="With a preview of what parents see"><StaffEngagement /></PhoneFrame>
        <PhoneFrame title="More" note="Engagement, submissions status, inventory"><StaffMore /></PhoneFrame>
      </Section>

      <footer className="border-t py-10 text-center text-sm text-muted-foreground">SkateFlow · Mobile UI design · Nov 2026</footer>
    </main>
  );
}

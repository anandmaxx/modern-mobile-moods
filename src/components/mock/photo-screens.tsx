import {
  Camera, ImageIcon, Crop, Trash2, X, RotateCw, FlipHorizontal2, Sun, Undo2,
  ShieldCheck, Cake, School, Users, Upload, Check,
} from "lucide-react";
import aarav from "@/assets/kid-aarav.jpg";
import { Avatar, Body, Card, PrimaryButton, TopBar } from "./kit";
import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/** Parent's view of one child, used behind sheets and dialogs. */
function ChildBase({ photo = true, toast }: { photo?: boolean; toast?: ReactNode }) {
  return (
    <>
      <TopBar back title="Aarav Sharma" subtitle="Batch B · Koramangala" />
      <Body className="relative flex flex-col">
        <div className="flex flex-col items-center pt-2">
          <div className="relative">
            {photo ? (
              <div className="rounded-full bg-accent p-1">
                <Avatar src={aarav} name="Aarav Sharma" size={120} />
              </div>
            ) : (
              <div className="grid size-[128px] place-items-center rounded-full border-2 border-dashed border-muted-foreground/40 bg-card">
                <div className="flex flex-col items-center gap-1 text-muted-foreground">
                  <span className="font-display text-3xl font-extrabold text-foreground">AS</span>
                  <span className="text-[10px] font-semibold uppercase tracking-wide">No photo</span>
                </div>
              </div>
            )}
            <span className="absolute bottom-1 right-1 grid size-9 place-items-center rounded-full border-[3px] border-surface bg-ink text-ink-foreground">
              {photo ? <Camera className="size-4" /> : <Upload className="size-4" />}
            </span>
          </div>
          <p className="mt-3 font-display text-xl font-bold">Aarav Sharma</p>
          <p className="text-xs text-muted-foreground">
            {photo ? "Tap photo to change, edit or remove" : "Add a photo so coaches can spot Aarav"}
          </p>
        </div>

        {!photo && (
          <div className="mt-4 grid grid-cols-2 gap-2">
            <PrimaryButton variant="ink" className="h-11">
              <Camera className="size-4" /> Take photo
            </PrimaryButton>
            <PrimaryButton className="h-11">
              <ImageIcon className="size-4" /> Gallery
            </PrimaryButton>
          </div>
        )}

        <Card className="mt-4 divide-y p-0">
          {[
            { i: Cake, l: "Date of birth", v: "14 Mar 2017 · Age 9" },
            { i: School, l: "School", v: "Greenwood High · Grade 4B" },
            { i: Users, l: "Batch & coach", v: "B · Intermediate · Rahul N." },
          ].map(({ i: I, l, v }) => (
            <div key={l} className="flex items-center gap-3 px-4 py-3">
              <I className="size-[18px] text-muted-foreground" />
              <div className="min-w-0 flex-1">
                <p className="text-[10px] font-semibold uppercase tracking-wide text-muted-foreground">{l}</p>
                <p className="truncate text-sm font-semibold">{v}</p>
              </div>
            </div>
          ))}
        </Card>

        <div className="mt-3 flex items-center gap-2 rounded-xl bg-info/10 px-3 py-2 text-[11px] font-medium text-info">
          <ShieldCheck className="size-3.5 shrink-0" />
          Photos are seen only by your family and academy staff.
        </div>

        {toast}
      </Body>
    </>
  );
}

function Dim({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={cn("absolute inset-0 z-30 flex flex-col bg-ink/60", className)}>{children}</div>;
}

function SheetRow({
  icon: Icon,
  label,
  hint,
  danger,
}: {
  icon: LucideIcon;
  label: string;
  hint: string;
  danger?: boolean;
}) {
  return (
    <div className="flex items-center gap-3 px-4 py-3">
      <span
        className={cn(
          "grid size-10 place-items-center rounded-2xl",
          danger ? "bg-destructive/12 text-destructive" : "bg-muted text-foreground",
        )}
      >
        <Icon className="size-[18px]" />
      </span>
      <div className="flex-1">
        <p className={cn("text-sm font-bold", danger && "text-destructive")}>{label}</p>
        <p className="text-[11px] text-muted-foreground">{hint}</p>
      </div>
    </div>
  );
}

/** 1 — options sheet opened by tapping the photo */
export function ChildPhotoOptions() {
  return (
    <>
      <ChildBase />
      <Dim className="justify-end">
        <div className="rounded-t-[2rem] bg-surface px-3 pb-6 pt-2.5">
          <span className="mx-auto mb-3 block h-1 w-10 rounded-full bg-muted-foreground/30" />
          <div className="mb-3 flex items-center gap-3 px-2">
            <Avatar src={aarav} name="Aarav Sharma" size={44} />
            <div className="flex-1">
              <p className="text-sm font-bold">Profile photo</p>
              <p className="text-[11px] text-muted-foreground">Aarav Sharma · updated 2 Oct</p>
            </div>
          </div>
          <div className="divide-y rounded-2xl bg-card shadow-soft">
            <SheetRow icon={Camera} label="Take a new photo" hint="Use the phone camera" />
            <SheetRow icon={ImageIcon} label="Upload from gallery" hint="JPG or PNG, up to 5 MB" />
            <SheetRow icon={Crop} label="Edit current photo" hint="Crop, zoom, rotate, brighten" />
          </div>
          <div className="mt-2 rounded-2xl bg-card shadow-soft">
            <SheetRow danger icon={Trash2} label="Remove photo" hint="Initials will show instead" />
          </div>
          <PrimaryButton variant="ghost" className="mt-3">Cancel</PrimaryButton>
        </div>
      </Dim>
    </>
  );
}

/** 2 — crop & adjust editor */
export function EditChildPhoto() {
  const tools: { i: LucideIcon; l: string; on?: boolean }[] = [
    { i: Crop, l: "Crop", on: true },
    { i: RotateCw, l: "Rotate" },
    { i: FlipHorizontal2, l: "Flip" },
    { i: Sun, l: "Brightness" },
  ];
  return (
    <div className="absolute inset-0 flex flex-col bg-ink pt-11 text-ink-foreground">
      <div className="flex items-center justify-between px-5 pb-3 pt-2">
        <span className="grid size-9 place-items-center rounded-full bg-ink-foreground/10">
          <X className="size-5" />
        </span>
        <div className="text-center">
          <p className="text-base font-bold">Edit photo</p>
          <p className="text-[11px] opacity-60">Drag to move · pinch to zoom</p>
        </div>
        <span className="flex items-center gap-1 rounded-full px-2 py-1 text-xs font-semibold opacity-70">
          <Undo2 className="size-3.5" /> Reset
        </span>
      </div>

      <div className="relative mx-4 aspect-square overflow-hidden rounded-3xl">
        <img src={aarav} alt="Aarav Sharma" className="size-full scale-[1.3] object-cover" loading="lazy" />
        <div className="absolute inset-7 rounded-full ring-[400px] ring-ink/70" />
        <div className="absolute inset-7 rounded-full border-2 border-accent" />
        {/* rule-of-thirds guides */}
        <div className="pointer-events-none absolute inset-7 grid grid-cols-3 grid-rows-3 overflow-hidden rounded-full">
          {Array.from({ length: 9 }).map((_, i) => (
            <span key={i} className="border-[0.5px] border-ink-foreground/25" />
          ))}
        </div>
      </div>

      <div className="mt-5 px-6">
        <div className="flex items-center justify-between text-[11px] font-semibold opacity-70">
          <span>Zoom</span>
          <span>1.3×</span>
        </div>
        <div className="relative mt-2 h-1.5 rounded-full bg-ink-foreground/15">
          <div className="h-full w-[30%] rounded-full bg-accent" />
          <span className="absolute left-[30%] top-1/2 size-5 -translate-x-1/2 -translate-y-1/2 rounded-full border-4 border-ink bg-accent" />
        </div>
      </div>

      <div className="mt-5 grid grid-cols-4 gap-2 px-5">
        {tools.map(({ i: I, l, on }) => (
          <div key={l} className="flex flex-col items-center gap-1.5">
            <span
              className={cn(
                "grid size-12 place-items-center rounded-2xl",
                on ? "bg-accent text-accent-foreground" : "bg-ink-foreground/10",
              )}
            >
              <I className="size-5" />
            </span>
            <span className={cn("text-[10px] font-semibold", !on && "opacity-70")}>{l}</span>
          </div>
        ))}
      </div>

      <div className="mt-auto grid grid-cols-[auto_1fr] gap-2 px-5 pb-6">
        <span className="flex h-12 items-center justify-center gap-2 rounded-2xl bg-ink-foreground/10 px-4 text-sm font-bold">
          <ImageIcon className="size-4" /> Change
        </span>
        <PrimaryButton>
          <Check className="size-4" /> Save photo
        </PrimaryButton>
      </div>
    </div>
  );
}

/** 3 — confirm before removing */
export function RemoveChildPhoto() {
  return (
    <>
      <ChildBase />
      <Dim className="items-center justify-center px-6">
        <div className="w-full rounded-[1.75rem] bg-surface p-5 text-center shadow-phone">
          <div className="mx-auto flex w-fit items-center gap-3">
            <div className="relative">
              <Avatar src={aarav} name="Aarav Sharma" size={60} />
              <span className="absolute -right-1 -top-1 grid size-6 place-items-center rounded-full border-2 border-surface bg-destructive text-destructive-foreground">
                <X className="size-3" />
              </span>
            </div>
            <span className="text-muted-foreground">→</span>
            <span className="grid size-[60px] place-items-center rounded-full bg-secondary font-display text-lg font-bold text-secondary-foreground">
              AS
            </span>
          </div>
          <p className="mt-4 font-display text-lg font-bold">Remove Aarav's photo?</p>
          <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
            His initials will show in the app and on the coach's attendance list. You can add a new photo anytime.
          </p>
          <div className="mt-4 space-y-2">
            <span className="flex h-12 w-full items-center justify-center gap-2 rounded-2xl bg-destructive text-sm font-bold text-destructive-foreground">
              <Trash2 className="size-4" /> Remove photo
            </span>
            <PrimaryButton variant="ghost">Keep photo</PrimaryButton>
          </div>
        </div>
      </Dim>
    </>
  );
}

/** 4 — after removal: empty state with upload options + undo toast */
export function NoChildPhoto() {
  return (
    <ChildBase
      photo={false}
      toast={
        <div className="absolute inset-x-5 bottom-4 flex items-center gap-3 rounded-2xl bg-ink px-4 py-3 text-ink-foreground shadow-phone">
          <span className="grid size-6 place-items-center rounded-full bg-accent text-accent-foreground">
            <Check className="size-3.5" />
          </span>
          <span className="flex-1 text-sm font-semibold">Photo removed</span>
          <span className="text-sm font-bold text-accent">Undo</span>
        </div>
      }
    />
  );
}

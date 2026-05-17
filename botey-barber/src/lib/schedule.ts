const STORAGE_KEY = "botey_barber_schedule";

export type DaySchedule = {
  slots: string[];
};

export type Schedule = {
  [dateKey: string]: DaySchedule;
};

function toKey(date: Date): string {
  return date.toISOString().slice(0, 10);
}

export function getSchedule(): Schedule {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

export function saveSchedule(schedule: Schedule): void {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(schedule));
}

export function getSlotsForDate(date: Date): string[] {
  const schedule = getSchedule();
  const key = toKey(date);
  return schedule[key]?.slots ?? [];
}

export function setSlotsForDate(date: Date, slots: string[]): void {
  const schedule = getSchedule();
  const key = toKey(date);
  if (slots.length === 0) {
    delete schedule[key];
  } else {
    schedule[key] = { slots };
  }
  saveSchedule(schedule);
}

export function formatDateKey(key: string): string {
  const [year, month, day] = key.split("-").map(Number);
  const d = new Date(year, month - 1, day);
  return d.toLocaleDateString("ca-ES", { weekday: "long", day: "numeric", month: "long" });
}

export const ALL_POSSIBLE_SLOTS = [
  "09:00", "09:30", "10:00", "10:30", "11:00", "11:30",
  "12:00", "12:30", "13:00", "13:30", "14:00", "14:30",
  "15:00", "15:30", "16:00", "16:30", "17:00", "17:30",
  "18:00", "18:30", "19:00"
];

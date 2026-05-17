import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { Check, X, ChevronLeft } from "lucide-react";
import { useLocation } from "wouter";
import {
  getSlotsForDate,
  setSlotsForDate,
  getSchedule,
  formatDateKey,
  ALL_POSSIBLE_SLOTS,
} from "@/lib/schedule";

export function AdminSchedule() {
  const [, setLocation] = useLocation();
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const [activeSlots, setActiveSlots] = useState<string[]>([]);
  const [schedule, setSchedule] = useState(getSchedule());
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    if (selectedDate) {
      setActiveSlots(getSlotsForDate(selectedDate));
      setSaved(false);
    }
  }, [selectedDate]);

  const toggleSlot = (slot: string) => {
    setActiveSlots((prev) =>
      prev.includes(slot) ? prev.filter((s) => s !== slot) : [...prev, slot].sort()
    );
    setSaved(false);
  };

  const handleSave = () => {
    if (selectedDate) {
      setSlotsForDate(selectedDate, activeSlots);
      setSchedule(getSchedule());
      setSaved(true);
    }
  };

  const handleClearDay = () => {
    if (selectedDate) {
      setSlotsForDate(selectedDate, []);
      setActiveSlots([]);
      setSchedule(getSchedule());
      setSaved(true);
    }
  };

  const configuredDates = Object.keys(schedule).filter((k) => schedule[k].slots.length > 0);

  return (
    <div className="min-h-screen bg-white text-black px-6 py-16">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <button
            onClick={() => setLocation("/")}
            className="flex items-center space-x-2 text-gray-500 hover:text-black transition-colors mb-12 uppercase tracking-widest text-xs font-bold"
            data-testid="admin-back"
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Tornar a la web</span>
          </button>

          <h1 className="font-serif text-5xl md:text-7xl mb-4 text-black">Gestió d'horaris</h1>
          <p className="text-gray-500 uppercase tracking-widest text-sm mb-16">
            Configura els horaris disponibles per a cada dia de la setmana.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Calendar picker */}
            <div>
              <h2 className="uppercase tracking-widest font-bold text-sm mb-6 text-black">Selecciona un dia</h2>
              <div className="border border-black/20 p-4 inline-block bg-white">
                <Calendar
                  mode="single"
                  selected={selectedDate}
                  onSelect={setSelectedDate}
                  className="bg-transparent text-black p-0"
                  classNames={{
                    months: "w-full",
                    month: "w-full",
                    table: "w-full border-collapse",
                    head_row: "flex w-full justify-between mb-2",
                    head_cell: "text-gray-500 w-9 font-normal text-[0.8rem] text-center",
                    row: "flex w-full justify-between mt-2",
                    cell: "text-center text-sm p-0 relative w-9 h-9 flex items-center justify-center rounded-none",
                    day: "h-9 w-9 p-0 font-normal aria-selected:opacity-100 hover:bg-black hover:text-white transition-colors rounded-none bg-transparent",
                    day_selected: "bg-black text-white hover:bg-black hover:text-white",
                    day_today: "bg-black/10 text-black",
                    day_outside: "text-black/30 opacity-50",
                    day_disabled: "text-black/30 opacity-50",
                    day_hidden: "invisible",
                    nav: "flex items-center justify-between",
                    nav_button: "h-7 w-7 bg-transparent p-0 hover:bg-black hover:text-white transition-colors border border-black/30 rounded-none flex items-center justify-center",
                    caption: "flex justify-center pt-1 relative items-center mb-4",
                    caption_label: "text-sm font-medium text-black",
                  }}
                  modifiers={{
                    configured: configuredDates.map((k) => {
                      const [y, m, d] = k.split("-").map(Number);
                      return new Date(y, m - 1, d);
                    }),
                  }}
                  modifiersClassNames={{
                    configured: "ring-1 ring-black/40",
                  }}
                />
              </div>
              <p className="text-xs text-gray-400 mt-3 italic">
                Els dies amb borde negre ja tenen horaris configurats.
              </p>
            </div>

            {/* Slot picker */}
            <div>
              {selectedDate ? (
                <>
                  <h2 className="uppercase tracking-widest font-bold text-sm mb-2 text-black">
                    Horaris disponibles
                  </h2>
                  <p className="text-gray-500 text-xs mb-6 capitalize">
                    {selectedDate.toLocaleDateString("ca-ES", {
                      weekday: "long",
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </p>

                  <div className="grid grid-cols-3 sm:grid-cols-4 gap-2 mb-8">
                    {ALL_POSSIBLE_SLOTS.map((slot) => {
                      const active = activeSlots.includes(slot);
                      return (
                        <button
                          key={slot}
                          onClick={() => toggleSlot(slot)}
                          data-testid={`slot-${slot}`}
                          className={`h-10 text-sm font-mono border transition-colors rounded-none flex items-center justify-center gap-1 ${
                            active
                              ? "bg-black text-white border-black"
                              : "bg-transparent text-gray-500 border-black/20 hover:border-black/50 hover:text-black"
                          }`}
                        >
                          {active && <Check className="w-3 h-3" />}
                          {slot}
                        </button>
                      );
                    })}
                  </div>

                  <div className="flex gap-4">
                    <Button
                      onClick={handleSave}
                      className="bg-black text-white hover:bg-gray-800 rounded-none uppercase tracking-widest text-xs font-bold h-12 flex-1"
                      data-testid="admin-save"
                    >
                      {saved ? (
                        <span className="flex items-center gap-2">
                          <Check className="w-4 h-4" /> Guardat
                        </span>
                      ) : (
                        "Guardar horaris"
                      )}
                    </Button>
                    <Button
                      onClick={handleClearDay}
                      variant="outline"
                      className="border-black/30 text-black hover:bg-black hover:text-white rounded-none uppercase tracking-widest text-xs h-12"
                      data-testid="admin-clear"
                    >
                      <X className="w-4 h-4" />
                    </Button>
                  </div>
                </>
              ) : (
                <div className="flex items-center justify-center h-full border border-black/10 min-h-[300px]">
                  <p className="text-gray-400 uppercase tracking-widest text-xs text-center px-8">
                    Selecciona un dia del calendari per configurar els seus horaris
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Summary of configured days */}
          {configuredDates.length > 0 && (
            <div className="mt-20 border-t border-black/10 pt-12">
              <h2 className="uppercase tracking-widest font-bold text-sm mb-8 text-black">Dies configurats</h2>
              <div className="space-y-3">
                {configuredDates.sort().map((key) => (
                  <div
                    key={key}
                    className="flex items-center justify-between border border-black/10 px-6 py-4 hover:border-black/30 transition-colors"
                  >
                    <span className="capitalize text-sm text-black">{formatDateKey(key)}</span>
                    <span className="text-gray-500 text-sm font-mono">
                      {schedule[key].slots.join(" · ")}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
}

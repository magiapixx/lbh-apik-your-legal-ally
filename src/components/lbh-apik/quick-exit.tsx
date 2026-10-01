import { LogOut } from "lucide-react";

/**
 * Safety feature recommended for domestic-violence resources:
 * instantly replaces the page (and history entry) with a neutral site.
 */
export function QuickExit() {
  return (
    <button
      type="button"
      title="Tutup situs ini dengan cepat dan buka halaman netral"
      onClick={() => window.location.replace("https://www.google.com")}
      className="fixed bottom-4 right-4 z-50 inline-flex items-center gap-1.5 rounded-full border border-cream/20 bg-charcoal/90 px-4 py-2 text-xs font-medium text-cream backdrop-blur transition-colors hover:bg-charcoal-surface"
    >
      <LogOut size={14} />
      Keluar Cepat
    </button>
  );
}

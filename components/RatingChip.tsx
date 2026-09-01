import { site } from "@/lib/site-config";

export default function RatingChip({ className = "" }: { className?: string }) {
  return (
    <div
      className={`inline-flex items-center gap-2 rounded-full border border-line bg-cream px-4 py-2 font-body text-sm text-ink-soft ${className}`}
    >
      <span className="flex items-center gap-0.5 font-semibold text-ink">
        {site.rating.value}
        <svg width="14" height="14" viewBox="0 0 24 24" fill="#F6B400" aria-hidden="true">
          <path d="M12 2.5 15 9l7 .8-5.2 4.7L18.2 21 12 17.3 5.8 21l1.4-6.5L2 9.8 9 9l3-6.5Z" />
        </svg>
      </span>
      <span>
        {site.rating.count} avaliações no Google
      </span>
    </div>
  );
}

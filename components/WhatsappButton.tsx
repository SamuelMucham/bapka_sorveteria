import { whatsappLink } from "@/lib/site-config";

type WhatsappButtonProps = {
  message: string;
  label?: string;
  variant?: "solid" | "outline";
  className?: string;
};

export default function WhatsappButton({
  message,
  label = "Chamar no WhatsApp",
  variant = "solid",
  className = "",
}: WhatsappButtonProps) {
  const base =
    "inline-flex items-center gap-2 rounded-full px-6 py-3 font-body font-bold text-sm transition-colors duration-200";
  const styles =
    variant === "solid"
      ? "bg-amarelo text-ink hover:bg-amarelo-deep"
      : "border-2 border-azul-deep text-azul-deep hover:bg-azul-deep hover:text-cream";

  return (
    <a
      href={whatsappLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={`${base} ${styles} ${className}`}
    >
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.29-1.39a9.87 9.87 0 0 0 4.75 1.21h.01c5.46 0 9.9-4.45 9.9-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2Zm0 18.06h-.01c-1.5 0-2.97-.4-4.24-1.16l-.3-.18-3.14.82.84-3.06-.2-.32a8.2 8.2 0 0 1-1.26-4.34c0-4.53 3.69-8.22 8.22-8.22 2.2 0 4.26.86 5.81 2.41a8.15 8.15 0 0 1 2.41 5.81c0 4.53-3.69 8.24-8.13 8.24Zm4.51-6.17c-.25-.12-1.47-.72-1.7-.81-.23-.08-.39-.12-.56.13-.17.25-.64.81-.78.97-.14.17-.29.19-.53.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.24-1.48-1.39-1.73-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.12-.14.16-.25.25-.41.08-.17.04-.31-.02-.44-.06-.12-.56-1.35-.77-1.85-.2-.48-.41-.42-.56-.42-.14-.01-.31-.01-.48-.01a.93.93 0 0 0-.67.31c-.23.25-.87.85-.87 2.08 0 1.22.89 2.4 1.02 2.57.12.17 1.75 2.67 4.24 3.75.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.67-1.18.21-.58.21-1.08.14-1.18-.06-.11-.23-.17-.48-.29Z" />
      </svg>
      {label}
    </a>
  );
}

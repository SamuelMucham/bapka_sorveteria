import Link from "next/link";
import { site } from "@/lib/site-config";
import WhatsappButton from "./WhatsappButton";

export default function Footer() {
  return (
    <footer className="border-t border-line bg-azul-deep text-cream">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-3 md:px-8">
        <div>
          <span className="font-display text-lg font-bold">{site.shortName}</span>
          <p className="mt-4 max-w-xs font-body text-sm leading-relaxed text-cream/70">
            {site.description}
          </p>
          <a
            href={site.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block font-body text-sm font-bold text-cream underline decoration-2 underline-offset-4 hover:text-amarelo"
          >
            @bapka_campodesantana
          </a>
        </div>

        <div>
          <h3 className="font-display text-base font-bold text-amarelo">Horário</h3>
          <ul className="mt-4 space-y-2 font-body text-sm text-cream/80">
            {site.hours.map((h) => (
              <li key={h.day} className="flex justify-between gap-4">
                <span>{h.day}</span>
                <span className="text-cream">{h.time}</span>
              </li>
            ))}
          </ul>
          <p className="mt-2 font-body text-xs text-cream/50">{site.hoursNote}</p>
        </div>

        <div>
          <h3 className="font-display text-base font-bold text-amarelo">Visite ou chame no zap</h3>
          <p className="mt-4 font-body text-sm leading-relaxed text-cream/80">
            {site.address.street} — {site.address.neighborhood}
            <br />
            {site.address.city}/{site.address.state}
          </p>
          <div className="mt-5">
            <WhatsappButton message="Olá! Vim pelo site da Bapka." label="Fale conosco" />
          </div>
        </div>
      </div>

      <div className="border-t border-cream/10 px-5 py-5 md:px-8">
        <p className="mx-auto max-w-6xl font-body text-xs text-cream/50">
          © {new Date().getFullYear()} {site.name}.{" "}
          <Link href="/contato" className="underline hover:text-cream">
            Fale com a gente
          </Link>
        </p>
      </div>
    </footer>
  );
}

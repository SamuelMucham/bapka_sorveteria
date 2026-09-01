import type { Metadata } from "next";
import { site } from "@/lib/site-config";
import WhatsappButton from "@/components/WhatsappButton";

export const metadata: Metadata = {
  title: `Contato — ${site.shortName}`,
  description: "Fale com a Bapka pelo WhatsApp, veja endereço e horários.",
};

export default function ContatoPage() {
  return (
    <section className="mx-auto max-w-4xl px-5 py-16 md:px-8 md:py-24">
      <div className="text-center">
        <h1 className="font-display text-4xl font-bold text-ink sm:text-5xl">
          Fale com a gente
        </h1>
        <p className="mx-auto mt-4 max-w-md font-body text-sm leading-relaxed text-ink-soft">
          Pedidos e qualquer dúvida — tudo pelo WhatsApp, direto com a loja.
        </p>
        <div className="mt-8 flex justify-center">
          <WhatsappButton
            message="Olá! Vim pelo site e gostaria de falar com a Bapka."
            label="Chamar no WhatsApp"
          />
        </div>
      </div>

      <div className="mt-16 grid gap-10 border-t border-line pt-12 sm:grid-cols-2">
        <div>
          <h2 className="font-display text-lg font-bold text-ink">Horário</h2>
          <ul className="mt-4 space-y-2 font-body text-sm">
            {site.hours.map((h) => (
              <li
                key={h.day}
                className="flex justify-between border-b border-line pb-2 text-ink-soft"
              >
                <span>{h.day}</span>
                <span className="font-bold text-ink">{h.time}</span>
              </li>
            ))}
          </ul>
          <p className="mt-2 font-body text-xs text-ink-soft/70">{site.hoursNote}</p>
        </div>

        <div>
          <h2 className="font-display text-lg font-bold text-ink">Endereço e contato</h2>
          <p className="mt-4 font-body text-sm leading-relaxed text-ink-soft">
            {site.address.street}
            <br />
            {site.address.neighborhood} — {site.address.city}/{site.address.state}
            <br />
            CEP {site.address.zip}
            <br />
            {site.phoneDisplay}
          </p>
          <div className="mt-3 flex flex-col gap-1">
            <a
              href={site.address.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block font-body text-sm font-bold text-azul underline decoration-2 underline-offset-4 hover:text-azul-deep"
            >
              Ver no mapa
            </a>
            <a
              href={site.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block font-body text-sm font-bold text-azul underline decoration-2 underline-offset-4 hover:text-azul-deep"
            >
              @bapka_campodesantana no Instagram
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

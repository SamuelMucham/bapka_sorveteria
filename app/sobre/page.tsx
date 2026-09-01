import type { Metadata } from "next";
import { site } from "@/lib/site-config";
import DripCard from "@/components/DripCard";
import RatingChip from "@/components/RatingChip";
import WhatsappButton from "@/components/WhatsappButton";

export const metadata: Metadata = {
  title: `Sobre Nós — ${site.shortName}`,
  description: "Conheça a Sorvetes Bapka, sorveteria de bairro em Curitiba.",
};

const DESTAQUES = [
  {
    title: "Variedade de verdade",
    text: "Sorvete de massa, açaí, milk-shake e picolé — sempre com opções pra todo mundo escolher o seu.",
    color: "azul" as const,
  },
  {
    title: "Espaço pra família",
    text: "Ambiente limpo e organizado, com parquinho pra crianças brincarem enquanto a família aproveita.",
    color: "amarelo" as const,
  },
  {
    title: "Atendimento de bairro",
    text: "Aquele atendimento que conhece o cliente pelo nome e trata cada visita com atenção.",
    color: "azul-deep" as const,
  },
];

export default function SobrePage() {
  return (
    <>
      <section className="border-b border-line bg-cream-deep">
        <div className="mx-auto max-w-3xl px-5 py-16 text-center md:px-8 md:py-20">
          <h1 className="font-display text-4xl font-bold leading-tight text-ink sm:text-5xl">
            Sobre a {site.shortName}
          </h1>
          <p className="mt-5 font-body text-base leading-relaxed text-ink-soft">
            A Sorvetes Bapka é aquela sorveteria de bairro que virou parada
            certa em Campo de Santana: sorvete cremoso, açaí completo e um
            cantinho pensado pra família toda ficar à vontade — com direito a
            parquinho pra criançada gastar energia.
          </p>
          <RatingChip className="mt-6" />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-20">
        <h2 className="font-display text-3xl font-bold text-ink sm:text-4xl">
          O que os clientes mais notam
        </h2>

        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          {DESTAQUES.map((d) => (
            <DripCard key={d.title} color={d.color}>
              <h3 className="font-display text-lg font-bold">{d.title}</h3>
              <p className="mt-2 font-body text-sm leading-relaxed opacity-90">{d.text}</p>
            </DripCard>
          ))}
        </div>
      </section>

      <section className="border-t border-line bg-azul-deep">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-5 px-5 py-14 text-center md:px-8">
          <h2 className="font-display text-2xl font-bold text-cream sm:text-3xl">
            Vem tomar um sorvete com a gente
          </h2>
          <p className="max-w-md font-body text-sm leading-relaxed text-cream/70">
            {site.address.street} — {site.address.neighborhood}, {site.address.city}
          </p>
          <WhatsappButton message="Olá! Vim conhecer a Bapka pelo site." label="Fale conosco" />
        </div>
      </section>
    </>
  );
}

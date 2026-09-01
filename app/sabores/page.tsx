import type { Metadata } from "next";
import { menu, site } from "@/lib/site-config";
import DripCard from "@/components/DripCard";
import WhatsappButton from "@/components/WhatsappButton";

export const metadata: Metadata = {
  title: `Sabores — ${site.shortName}`,
  description: "Sorvetes, açaí, milk-shakes e picolés da Bapka.",
};

const TINT: Record<string, string> = {
  azul: "bg-azul/[0.06]",
  amarelo: "bg-amarelo/[0.10]",
  "azul-deep": "bg-azul-deep/[0.05]",
  "amarelo-deep": "bg-amarelo-deep/[0.08]",
};

export default function SaboresPage() {
  return (
    <>
      <section className="border-b border-line bg-cream-deep">
        <div className="mx-auto max-w-6xl px-5 py-14 text-center md:px-8 md:py-20">
          <h1 className="font-display text-4xl font-bold text-ink sm:text-5xl">Sabores</h1>
          <p className="mx-auto mt-4 max-w-xl font-body text-sm leading-relaxed text-ink-soft">
            Os itens e preços abaixo são um exemplo de como o cardápio pode
            aparecer no site. Pedidos são feitos direto pelo WhatsApp.
          </p>
        </div>
      </section>

      {menu.map((cat) => (
        <section key={cat.id} id={cat.id} className={`scroll-mt-20 border-b border-line ${TINT[cat.color]}`}>
          <div className="mx-auto max-w-6xl px-5 py-14 md:px-8 md:py-16">
            <DripCard color={cat.color} className="inline-block">
              <h2 className="font-display text-2xl font-bold sm:text-3xl">{cat.label}</h2>
            </DripCard>
            {cat.note && (
              <p className="mt-4 font-body text-sm text-ink-soft">{cat.note}</p>
            )}

            <ul className="mt-8 grid gap-x-8 gap-y-6 sm:grid-cols-2">
              {cat.items.map((item) => (
                <li
                  key={item.name}
                  className="flex items-start justify-between gap-4 border-b border-line pb-4"
                >
                  <div>
                    <h3 className="font-display text-lg font-bold text-ink">{item.name}</h3>
                    <p className="mt-1 font-body text-sm text-ink-soft">{item.description}</p>
                  </div>
                  <span className="shrink-0 whitespace-nowrap rounded-full bg-cream px-3 py-1 font-body text-xs font-bold text-ink">
                    {item.price}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      ))}

      <section className="bg-azul-deep">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-5 px-5 py-14 text-center md:px-8">
          <h2 className="font-display text-2xl font-bold text-cream sm:text-3xl">
            Bateu a vontade? Faz seu pedido pelo WhatsApp
          </h2>
          <WhatsappButton message="Olá! Gostaria de fazer um pedido no cardápio." />
        </div>
      </section>
    </>
  );
}

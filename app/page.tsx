import Link from "next/link";
import { site, menu } from "@/lib/site-config";
import DripCard from "@/components/DripCard";
import RatingChip from "@/components/RatingChip";
import WhatsappButton from "@/components/WhatsappButton";

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="border-b border-line">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-14 md:grid-cols-2 md:px-8 md:py-20">
          <div>
            <h1 className="font-display text-4xl font-bold leading-[1.05] text-ink sm:text-5xl md:text-[3.4rem]">
              {site.tagline}
            </h1>
            <p className="mt-5 max-w-md font-body text-base leading-relaxed text-ink-soft">
              Sorvete de massa, açaí, milk-shake e picolé — feitos pra família
              toda curtir, com um parquinho pra criançada gastar energia
              enquanto o sorvete não acaba.
            </p>
            <RatingChip className="mt-6" />
            <div className="mt-8 flex flex-wrap gap-4">
              <WhatsappButton message="Olá! Vim pelo site da Bapka." />
              <Link
                href="/sabores"
                className="inline-flex items-center gap-2 rounded-full border-2 border-ink px-6 py-3 font-body text-sm font-bold text-ink transition-colors hover:bg-ink hover:text-cream"
              >
                Ver sabores
              </Link>
            </div>
          </div>

          <div className="mx-auto w-full max-w-xs">
            <svg viewBox="0 0 200 260" className="w-full" aria-hidden="true">
              <circle cx="100" cy="148" r="48" fill="#0B3D77" />
              <circle cx="100" cy="102" r="42" fill="#F6B400" />
              <circle cx="100" cy="62" r="34" fill="#1C6DD0" />
              <path d="M 60 158 L 140 158 L 103 248 Q 100 254 97 248 Z" fill="#C98D00" />
              <g stroke="#9C7000" strokeWidth="2" opacity="0.6">
                <path d="M 68 168 L 118 240" />
                <path d="M 80 168 L 122 228" />
                <path d="M 92 168 L 126 216" />
                <path d="M 104 168 L 126 202" />
                <path d="M 116 168 L 124 188" />
                <path d="M 66 178 L 130 188" />
                <path d="M 70 196 L 124 206" />
                <path d="M 74 214 L 118 222" />
              </g>
            </svg>
          </div>
        </div>
      </section>

      {/* CANTINHO DA CRIANÇADA */}
      <section className="bg-amarelo">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-5 py-12 text-center md:px-8">
          <h2 className="font-display text-2xl font-bold text-ink sm:text-3xl">
            Tem parquinho pra criançada
          </h2>
          <p className="max-w-lg font-body text-sm leading-relaxed text-ink/80">
            Enquanto os pequenos brincam, os grandes aproveitam um sorvete em
            paz. Um cantinho pensado pra família ficar à vontade.
          </p>
        </div>
      </section>

      {/* SABORES */}
      <section className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-20">
        <div className="mb-10 flex items-end justify-between gap-4">
          <h2 className="font-display text-3xl font-bold text-ink sm:text-4xl">
            O que tem na loja
          </h2>
          <Link
            href="/sabores"
            className="hidden font-body text-sm font-bold text-azul underline decoration-2 underline-offset-4 hover:text-azul-deep md:inline"
          >
            Ver cardápio completo
          </Link>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {menu.map((cat) => (
            <Link key={cat.id} href={`/sabores#${cat.id}`} className="group block">
              <DripCard color={cat.color} className="h-full">
                <h3 className="font-display text-lg font-bold">{cat.label}</h3>
                <p className="mt-1 font-body text-sm opacity-85">
                  {cat.items[0].name} e mais {cat.items.length - 1}
                </p>
              </DripCard>
            </Link>
          ))}
        </div>

        <Link
          href="/sabores"
          className="mt-8 block text-center font-body text-sm font-bold text-azul underline decoration-2 underline-offset-4 md:hidden"
        >
          Ver cardápio completo
        </Link>
      </section>

      {/* CTA */}
      <section className="border-y border-line bg-cream-deep">
        <div className="mx-auto grid max-w-6xl items-center gap-8 px-5 py-14 md:grid-cols-[1fr_auto] md:px-8">
          <div>
            <h2 className="font-display text-2xl font-bold text-ink sm:text-3xl">
              Bateu a vontade? Chama no zap.
            </h2>
            <p className="mt-3 max-w-lg font-body text-sm leading-relaxed text-ink-soft">
              {site.address.street} — {site.address.neighborhood}, {site.address.city}.
              Aberto de terça a domingo.
            </p>
          </div>
          <WhatsappButton
            message="Olá! Gostaria de fazer um pedido."
            label="Fazer pedido"
            className="justify-self-start md:justify-self-end"
          />
        </div>
      </section>
    </>
  );
}

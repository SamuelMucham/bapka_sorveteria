import { ReactNode } from "react";

// Polígono (clip-path) que corta a borda inferior do cartão em pingos,
// como se o sorvete estivesse derretendo. Gerado matematicamente com
// uma onda senoidal para ficar simétrico e suave.
const DRIP_CLIP =
  "polygon(0% 0%, 100% 0%, 100% 90%, 98.57% 90.5%, 97.14% 91.88%, 95.71% 93.89%, 94.29% 96.11%, 92.86% 98.12%, 91.43% 99.5%, 90% 100%, 88.57% 99.5%, 87.14% 98.12%, 85.71% 96.11%, 84.29% 93.89%, 82.86% 91.88%, 81.43% 90.5%, 80% 90%, 78.57% 90.5%, 77.14% 91.88%, 75.71% 93.89%, 74.29% 96.11%, 72.86% 98.12%, 71.43% 99.5%, 70% 100%, 68.57% 99.5%, 67.14% 98.12%, 65.71% 96.11%, 64.29% 93.89%, 62.86% 91.88%, 61.43% 90.5%, 60% 90%, 58.57% 90.5%, 57.14% 91.88%, 55.71% 93.89%, 54.29% 96.11%, 52.86% 98.12%, 51.43% 99.5%, 50% 100%, 48.57% 99.5%, 47.14% 98.12%, 45.71% 96.11%, 44.29% 93.89%, 42.86% 91.88%, 41.43% 90.5%, 40% 90%, 38.57% 90.5%, 37.14% 91.88%, 35.71% 93.89%, 34.29% 96.11%, 32.86% 98.12%, 31.43% 99.5%, 30% 100%, 28.57% 99.5%, 27.14% 98.12%, 25.71% 96.11%, 24.29% 93.89%, 22.86% 91.88%, 21.43% 90.5%, 20% 90%, 18.57% 90.5%, 17.14% 91.88%, 15.71% 93.89%, 14.29% 96.11%, 12.86% 98.12%, 11.43% 99.5%, 10% 100%, 8.57% 99.5%, 7.14% 98.12%, 5.71% 96.11%, 4.29% 93.89%, 2.86% 91.88%, 1.43% 90.5%, 0% 90%)";

const COLOR_MAP: Record<string, string> = {
  azul: "bg-azul",
  amarelo: "bg-amarelo",
  "azul-deep": "bg-azul-deep",
  "amarelo-deep": "bg-amarelo-deep",
};

// Categorias em tom amarelo usam texto escuro (contraste); as em azul usam texto claro.
const TEXT_MAP: Record<string, string> = {
  azul: "text-cream",
  amarelo: "text-ink",
  "azul-deep": "text-cream",
  "amarelo-deep": "text-ink",
};

type DripCardProps = {
  children: ReactNode;
  color?: "azul" | "amarelo" | "azul-deep" | "amarelo-deep";
  className?: string;
};

/** Cartão com a borda inferior "derretendo" — o elemento-assinatura do site. */
export default function DripCard({ children, color = "azul", className = "" }: DripCardProps) {
  return (
    <div
      className={`${COLOR_MAP[color]} ${TEXT_MAP[color]} pb-6 pt-5 px-5 ${className}`}
      style={{ clipPath: DRIP_CLIP }}
    >
      {children}
    </div>
  );
}

"use client";

import { useState } from "react";

const perguntas = [
  {
    pergunta: "A empresa vende para pessoa física e jurídica?",
    resposta:
      "Sim. A LENS atende tanto pessoas físicas quanto empresas, escolas e órgãos públicos, com condições adequadas a cada tipo de cliente.",
  },
  {
    pergunta: "É possível solicitar orçamento pelo site?",
    resposta:
      "Sim. Basta preencher o formulário da seção de contato com os produtos de interesse e a quantidade desejada que nossa equipe retorna com uma proposta.",
  },
  {
    pergunta: "Quais formas de pagamento são aceitas?",
    resposta:
      "Trabalhamos com boleto bancário, transferência, cartão e PIX. As condições podem variar conforme o perfil e o volume de compra do cliente.",
  },
  {
    pergunta: "A empresa realiza entrega?",
    resposta:
      "Sim. Realizamos entregas para a região atendida, com prazos informados no momento do orçamento, de acordo com o endereço e a quantidade de itens.",
  },
  {
    pergunta: "Os produtos estão sempre disponíveis em estoque?",
    resposta:
      "Trabalhamos para manter os itens da vitrine sempre disponíveis. Em caso de alta demanda, a disponibilidade é confirmada junto ao orçamento.",
  },
  {
    pergunta: "Futuramente o site terá compra on-line?",
    resposta:
      "Sim. Hoje o site funciona como vitrine para consulta e orçamento, e o projeto já prevê a evolução para uma loja virtual completa, com compra on-line.",
  },
];

export function Faq() {
  const [aberto, setAberto] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-slate-50 py-16 sm:py-20">
      <div className="mx-auto max-w-4xl px-5">
        <div className="max-w-2xl">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-blue-700">Dúvidas frequentes</h2>
          <p className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Perguntas frequentes
          </p>
        </div>

        <div className="mt-10 flex flex-col gap-3">
          {perguntas.map((item, indice) => {
            const estaAberto = aberto === indice;
            return (
              <div key={item.pergunta} className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
                <button
                  type="button"
                  onClick={() => setAberto(estaAberto ? null : indice)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                  aria-expanded={estaAberto}
                >
                  <span className="text-sm font-semibold text-slate-900 sm:text-base">{item.pergunta}</span>
                  <svg
                    viewBox="0 0 24 24"
                    className={`h-5 w-5 shrink-0 text-blue-700 transition-transform ${estaAberto ? "rotate-180" : ""}`}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </button>
                {estaAberto && (
                  <div className="px-5 pb-4 text-sm leading-relaxed text-slate-600">
                    {item.resposta}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

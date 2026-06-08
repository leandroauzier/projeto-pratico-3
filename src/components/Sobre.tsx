const pilares = [
  {
    titulo: "Atendimento rápido",
    texto:
      "Equipe pronta para responder dúvidas e enviar orçamentos em poucas horas, seja para um pedido pontual ou para o abastecimento contínuo da sua empresa.",
  },
  {
    titulo: "Orçamento personalizado",
    texto:
      "Cada cliente recebe uma proposta de acordo com o volume, a frequência de compra e as necessidades específicas do setor em que atua.",
  },
  {
    titulo: "Variedade em um só lugar",
    texto:
      "Papelaria, informática, suprimentos e itens de escritório reunidos em uma vitrine organizada, facilitando a escolha e o controle de compras.",
  },
  {
    titulo: "Loja virtual em desenvolvimento",
    texto:
      "Hoje a vitrine apresenta nosso catálogo para orçamento; o projeto já contempla a evolução para uma loja virtual completa, com compra on-line.",
  },
];

export function Sobre() {
  return (
    <section id="sobre" className="mx-auto max-w-6xl px-5 py-16 sm:py-20">
      <div className="max-w-3xl">
        <h2 className="text-sm font-semibold uppercase tracking-wider text-blue-700">Sobre a LENS</h2>
        <p className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          Praticidade e organização para abastecer o dia a dia da sua empresa
        </p>
        <p className="mt-5 text-base leading-relaxed text-slate-600">
          A LENS Materiais de Escritório Ltda. atua no fornecimento de materiais de
          escritório, papelaria, informática e suprimentos para empresas, escolas,
          órgãos públicos e clientes em geral. Nosso objetivo é facilitar o acesso a
          produtos de qualidade, com processos simples, comunicação direta e uma
          vitrine virtual pensada para tornar a escolha e o pedido de orçamento mais
          ágeis — sempre com a possibilidade futura de uma loja virtual completa.
        </p>
      </div>

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {pilares.map((pilar) => (
          <div key={pilar.titulo} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-amber-100 text-amber-700">
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-base font-semibold text-slate-900">{pilar.titulo}</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">{pilar.texto}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

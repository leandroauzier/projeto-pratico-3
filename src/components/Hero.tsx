export function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-amber-50">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 sm:py-20 lg:grid-cols-2 lg:py-28">
        <div>
          <span className="inline-block rounded-full bg-blue-100 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-blue-700">
            Materiais de escritório · Papelaria · Informática
          </span>
          <h1 className="mt-5 text-4xl font-bold leading-tight tracking-tight text-slate-900 sm:text-5xl">
            A LENS organiza o que sua empresa precisa para funcionar todos os dias
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-slate-600">
            A LENS Materiais de Escritório Ltda. fornece papelaria, suprimentos de
            informática e itens de escritório para empresas, escolas, órgãos
            públicos e clientes em geral — com atendimento ágil, orçamento
            personalizado e a praticidade de encontrar tudo em um só lugar.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#produtos"
              className="rounded-md bg-blue-700 px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-blue-800"
            >
              Ver vitrine de produtos
            </a>
            <a
              href="#contato"
              className="rounded-md border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 shadow-sm transition-colors hover:border-blue-300 hover:text-blue-700"
            >
              Solicitar orçamento
            </a>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {[
            { numero: "+1.500", legenda: "itens em catálogo nas linhas comercializadas" },
            { numero: "4", legenda: "linhas de produtos: papelaria, informática, escritório e suprimentos" },
            { numero: "24h", legenda: "prazo médio para resposta de orçamentos enviados pelo site" },
            { numero: "B2B & B2C", legenda: "atendimento para empresas, escolas, órgãos públicos e pessoa física" },
          ].map((item) => (
            <div
              key={item.legenda}
              className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm"
            >
              <p className="text-2xl font-bold text-blue-700">{item.numero}</p>
              <p className="mt-1.5 text-sm leading-snug text-slate-600">{item.legenda}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

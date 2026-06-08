import { linhasDeProdutos } from "@/data/produtos";
import { ProductIcon } from "./icons";

export function Produtos() {
  return (
    <section id="produtos" className="bg-slate-50 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-5">
        <div className="max-w-2xl">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-blue-700">Vitrine virtual</h2>
          <p className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Produtos organizados por linha, prontos para orçamento
          </p>
          <p className="mt-4 text-base leading-relaxed text-slate-600">
            Navegue pelas linhas abaixo e identifique os itens de interesse da sua
            empresa. As imagens são ilustrativas — para valores e disponibilidade,
            utilize o formulário de orçamento na seção de contato.
          </p>
        </div>

        <div className="mt-12 flex flex-col gap-14">
          {linhasDeProdutos.map((linha) => (
            <div key={linha.id}>
              <div className="flex flex-wrap items-end justify-between gap-3 border-b border-slate-200 pb-4">
                <div>
                  <h3 className="text-xl font-bold text-slate-900">{linha.titulo}</h3>
                  <p className="mt-1 text-sm text-slate-600">{linha.descricao}</p>
                </div>
                <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700">
                  {linha.itens.length} produtos
                </span>
              </div>

              <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                {linha.itens.map((produto) => (
                  <article
                    key={produto.nome}
                    className="group flex flex-col rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition-shadow hover:shadow-md"
                  >
                    <div className="flex h-28 items-center justify-center rounded-lg bg-slate-50 text-blue-700 transition-colors group-hover:bg-blue-50">
                      <ProductIcon name={produto.icone} className="h-14 w-14" />
                    </div>
                    <h4 className="mt-4 text-base font-semibold text-slate-900">{produto.nome}</h4>
                    <p className="mt-1.5 flex-1 text-sm leading-relaxed text-slate-600">
                      {produto.descricao}
                    </p>
                    <a
                      href="#contato"
                      className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-blue-700 hover:text-blue-800"
                    >
                      Solicitar orçamento
                      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14M13 6l6 6-6 6" />
                      </svg>
                    </a>
                  </article>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

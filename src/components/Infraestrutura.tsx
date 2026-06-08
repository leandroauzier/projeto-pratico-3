const itensProjeto = [
  {
    titulo: "Painel administrativo",
    texto: "Cadastro, edição e remoção de produtos da vitrine, com controle de linhas e categorias.",
  },
  {
    titulo: "Rede interna organizada",
    texto: "Estrutura de rede para os computadores da empresa, com acesso controlado ao sistema administrativo.",
  },
  {
    titulo: "Compartilhamento de arquivos",
    texto: "Pastas e impressoras compartilhadas em rede entre os setores, facilitando a rotina interna.",
  },
  {
    titulo: "Segurança e backups",
    texto: "Boas práticas de segurança da informação e rotina de backups para proteção dos dados da empresa.",
  },
];

export function Infraestrutura() {
  return (
    <section className="border-t border-slate-200 bg-white py-14">
      <div className="mx-auto max-w-6xl px-5">
        <div className="rounded-xl border border-dashed border-slate-300 bg-slate-50 p-6 sm:p-8">
          <h2 className="text-xs font-semibold uppercase tracking-wider text-slate-500">
            Sobre a estrutura tecnológica do projeto
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-slate-600">
            Este site foi planejado como uma vitrine virtual com possibilidade de
            evolução para um sistema completo de gestão de catálogo. Além da parte
            visível ao público, o projeto considera os seguintes elementos de apoio
            ao funcionamento interno da empresa:
          </p>

          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {itensProjeto.map((item) => (
              <div key={item.titulo} className="rounded-lg border border-slate-200 bg-white p-4">
                <h3 className="text-sm font-semibold text-slate-900">{item.titulo}</h3>
                <p className="mt-1.5 text-xs leading-relaxed text-slate-600">{item.texto}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

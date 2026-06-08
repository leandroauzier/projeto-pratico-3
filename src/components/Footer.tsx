import { Logo } from "./Logo";

const redes = [
  { nome: "Instagram", href: "https://instagram.com/lensmateriais" },
  { nome: "Facebook", href: "https://facebook.com/lensmateriais" },
  { nome: "LinkedIn", href: "https://linkedin.com/company/lensmateriais" },
];

export function Footer() {
  const ano = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 bg-slate-900 text-slate-300">
      <div className="mx-auto max-w-6xl px-5 py-12">
        <div className="grid gap-10 sm:grid-cols-3">
          <div>
            <Logo className="[&_span]:text-white [&_span:last-child_span]:text-slate-400" />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate-400">
              LENS Materiais de Escritório Ltda. — papelaria, informática e
              suprimentos para empresas, escolas, órgãos públicos e clientes em geral.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white">Navegação</h3>
            <ul className="mt-4 flex flex-col gap-2 text-sm">
              <li><a href="#inicio" className="hover:text-white">Início</a></li>
              <li><a href="#sobre" className="hover:text-white">Sobre</a></li>
              <li><a href="#produtos" className="hover:text-white">Produtos</a></li>
              <li><a href="#contato" className="hover:text-white">Contato</a></li>
              <li><a href="#faq" className="hover:text-white">FAQ</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white">Redes sociais</h3>
            <ul className="mt-4 flex flex-col gap-2 text-sm">
              {redes.map((rede) => (
                <li key={rede.nome}>
                  <a href={rede.href} target="_blank" rel="noopener noreferrer" className="hover:text-white">
                    {rede.nome}
                  </a>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-xs text-slate-500">
              * Perfis fictícios, criados para fins de demonstração deste projeto.
            </p>
          </div>
        </div>

        <div className="mt-10 border-t border-slate-800 pt-6 text-xs text-slate-500">
          © {ano} LENS Materiais de Escritório Ltda. Todos os direitos reservados.
          Empresa fictícia, criada para fins acadêmicos.
        </div>
      </div>
    </footer>
  );
}

"use client";

import { useState } from "react";
import { linhasDeProdutos } from "@/data/produtos";
import { MailIcon, MapPinIcon, PhoneIcon, WhatsAppIcon } from "./icons";

const numeroWhatsApp = "5511999998888";
const linkWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(
  "Olá! Vim pelo site da LENS e gostaria de solicitar um orçamento."
)}`;

export function Contato() {
  const [enviado, setEnviado] = useState(false);

  function aoEnviar(evento: React.FormEvent<HTMLFormElement>) {
    evento.preventDefault();
    setEnviado(true);
  }

  return (
    <section id="contato" className="mx-auto max-w-6xl px-5 py-16 sm:py-20">
      <div className="max-w-2xl">
        <h2 className="text-sm font-semibold uppercase tracking-wider text-blue-700">Fale com a gente</h2>
        <p className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          Solicite seu orçamento ou tire suas dúvidas
        </p>
        <p className="mt-4 text-base leading-relaxed text-slate-600">
          Preencha o formulário com os dados do seu pedido ou fale diretamente com
          a equipe pelos canais abaixo. Respondemos solicitações de orçamento de
          empresas, escolas, órgãos públicos e clientes em geral.
        </p>
      </div>

      <div className="mt-10 grid gap-8 lg:grid-cols-5">
        <form onSubmit={aoEnviar} className="lg:col-span-3 rounded-xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="sm:col-span-1">
              <label htmlFor="nome" className="block text-sm font-medium text-slate-700">
                Nome completo
              </label>
              <input
                id="nome"
                name="nome"
                type="text"
                required
                placeholder="Como podemos te chamar?"
                className="mt-1.5 w-full rounded-md border border-slate-300 px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-100"
              />
            </div>
            <div className="sm:col-span-1">
              <label htmlFor="email" className="block text-sm font-medium text-slate-700">
                E-mail
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="seuemail@empresa.com.br"
                className="mt-1.5 w-full rounded-md border border-slate-300 px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-100"
              />
            </div>
            <div className="sm:col-span-1">
              <label htmlFor="telefone" className="block text-sm font-medium text-slate-700">
                Telefone
              </label>
              <input
                id="telefone"
                name="telefone"
                type="tel"
                required
                placeholder="(11) 99999-8888"
                className="mt-1.5 w-full rounded-md border border-slate-300 px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-100"
              />
            </div>
            <div className="sm:col-span-1">
              <label htmlFor="produto" className="block text-sm font-medium text-slate-700">
                Produto de interesse
              </label>
              <select
                id="produto"
                name="produto"
                defaultValue=""
                required
                className="mt-1.5 w-full rounded-md border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-900 focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-100"
              >
                <option value="" disabled>
                  Selecione uma linha de produtos
                </option>
                {linhasDeProdutos.map((linha) => (
                  <option key={linha.id} value={linha.titulo}>
                    {linha.titulo}
                  </option>
                ))}
                <option value="Outro">Outro / não sei ainda</option>
              </select>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="mensagem" className="block text-sm font-medium text-slate-700">
                Mensagem
              </label>
              <textarea
                id="mensagem"
                name="mensagem"
                rows={4}
                required
                placeholder="Conte um pouco sobre o que você precisa: itens, quantidades e prazos."
                className="mt-1.5 w-full resize-none rounded-md border border-slate-300 px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-100"
              />
            </div>
          </div>

          <button
            type="submit"
            className="mt-6 inline-flex items-center justify-center rounded-md bg-blue-700 px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-blue-800"
          >
            Enviar solicitação de orçamento
          </button>

          {enviado && (
            <p className="mt-4 rounded-md bg-emerald-50 px-4 py-3 text-sm font-medium text-emerald-700">
              Solicitação registrada! Esta é uma demonstração acadêmica — em um
              ambiente real, sua mensagem seria encaminhada para a equipe comercial
              da LENS.
            </p>
          )}
        </form>

        <div className="lg:col-span-2 flex flex-col gap-5">
          <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-base font-semibold text-slate-900">Canais de atendimento</h3>
            <ul className="mt-4 flex flex-col gap-3 text-sm text-slate-600">
              <li className="flex items-start gap-3">
                <MailIcon className="mt-0.5 h-5 w-5 shrink-0 text-blue-700" />
                <span>contato@lensmateriais.com.br</span>
              </li>
              <li className="flex items-start gap-3">
                <PhoneIcon className="mt-0.5 h-5 w-5 shrink-0 text-blue-700" />
                <span>(11) 4000-5678 — atendimento comercial</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPinIcon className="mt-0.5 h-5 w-5 shrink-0 text-blue-700" />
                <span>Av. das Papelarias, 1234 — Sala 12, Bairro Central, São Paulo/SP — CEP 01000-000</span>
              </li>
            </ul>

            <a
              href={linkWhatsApp}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-md bg-emerald-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-emerald-700"
            >
              <WhatsAppIcon className="h-5 w-5" />
              Conversar pelo WhatsApp
            </a>
          </div>

          <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
            <div className="flex h-48 flex-col items-center justify-center gap-2 bg-slate-100 text-slate-500">
              <MapPinIcon className="h-8 w-8 text-blue-700" />
              <p className="text-sm font-medium">Mapa ilustrativo de localização</p>
              <p className="px-6 text-center text-xs leading-relaxed text-slate-400">
                Espaço reservado para integração futura com serviço de mapas.
              </p>
            </div>
            <div className="px-5 py-4 text-xs text-slate-500">
              Horário de atendimento: segunda a sexta, das 8h às 18h.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Sobre } from "@/components/Sobre";
import { Produtos } from "@/components/Produtos";
import { Contato } from "@/components/Contato";
import { Faq } from "@/components/Faq";
import { Infraestrutura } from "@/components/Infraestrutura";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <Sobre />
        <Produtos />
        <Contato />
        <Faq />
        <Infraestrutura />
      </main>
      <Footer />
    </>
  );
}

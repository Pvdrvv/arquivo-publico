"use client"; 
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Artigos() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
   
      if (window.scrollY > 50) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="min-h-screen bg-black text-white p-12 font-serif selection:bg-red-600">
      
      
      <nav 
        className={`fixed top-0 left-0 w-full z-[100] flex justify-center pt-8 pointer-events-none transition-all duration-700 ease-in-out ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
        }`}
      >
        <Link 
          href="/" 
          className="pointer-events-auto group flex flex-col items-center gap-2"
        >
          <div className="src=/arquivobranco.png">
             <span className="src=/arquivobranco.png">
               ARQUIVO<br/>PÚBLICO
             </span>
          </div>
        </Link>
      </nav>

      
    
      <header className="mb-24">
        <h2 className="text-4xl font-light tracking-tight">Artigos recentes</h2>
      </header>

      <div className="max-w-[1200px] mx-auto space-y-54">
        
      
        <article className="relative">
          <span className="absolute -left-12 top-0 text-red-600 text-[10px] uppercase font-sans font-bold [writing-mode:vertical-lr] rotate-180">
            Moda
          </span>
          <div className="flex flex-col gap-8">
            <h1 className="text-6xl max-w-lg leading-[0.9] uppercase italic font-light">
              Egho Studios — O Brasil Que Se Constrói No Silêncio
            </h1>
            <div className="grid grid-cols-12 gap-8 items-start">
              <div className="col-span-6">
                <img src="/egho.jpg" className="w-full h-auto" alt="Main" />
              </div>
              <div className="col-span-3 space-y-4 pt-4">
                <p className="text-red-600 text-[20px] leading-relaxed font-sans">
                  Entre identidade e arquitetura visual, a Egho Studios não cria apenas peças — constrói linguagem. Um estudo sobre estética independente, direção criativa brasileira e a sofisticação que nasce fora do eixo óbvio.
                </p>
                <button className="border border-red-600/50 px-4 py-1 text-[15px] font-sans uppercase tracking-widest hover:bg-red-600 hover:text-black transition-colors">
                  veja mais.
                </button>
              </div>
              <div className="col-span-3 flex flex-col gap-10">
                <img src="/egho2.png" className="w-full" />
              </div>
               <div className="absolute top-140 -right-10 w-54">
      <img src="/egho3.png" className="w-full shadow-2xl" />
   </div>
            </div>
          </div>
        </article>

       
        <article className="grid grid-cols-12 gap-8 items-start">
          <div className="col-span-7">
            <h1 className="text-5xl max-w-lg leading-[0.9] uppercase italic font-light">
              Mad Enlatados — Ironia, Brasil e Cultura de Prateleira
            </h1>
            <img src="/mad2.png" className="w-[80%] h-auto" />
          </div>
          <div className="col-span-5 space-y-12">
            <div className="grid grid-cols-1 gap-2">
               <img src="/mad3.png" className="w-[80%] pt-20" />
            </div>
            <div className="pl-1 space-y-4">
              <p className="text-red-600 text-[20px] leading-absolute font-sans">
                Entre humor ácido e estética popular, Mad Enlatados transforma o cotidiano brasileiro em objeto gráfico. Uma marca que entende que embalagem também é narrativa.
              </p>
              <button className="border border-red-600/50 px-4 py-1 text-[15px] font-sans uppercase tracking-widest hover:bg-red-600 hover:text-black transition-colors">
                veja mais.
              </button>
            </div>
          </div>
        </article>

      
        <article className="relative h-[800px] border-b border-white/10">

        
          <div className="absolute top-0 left-0 z-20">
             <h1 className="text-6xl max-w-lg leading-[0.9] uppercase italic font-light">
               Hidden New York:
             </h1>
             <h1 className="text-6xl max-w-xl leading-[0.9] uppercase font-bold">
               O Arquivo Como Produto
             </h1>
          </div>

          
          <div className="absolute top-40 left-90 w-[350px] z-10">
            <img src="/hidden4.png" className="w-full" />
          </div>

          
          <div className="absolute top-32 left-[680px] w-[300px] z-10">
            <img src="/hidden3.png" className="w-full" />
          </div>

          
          <div className="absolute top-10 right-0 w-[250px] z-10">
            <img src="/hidden2.png" className="w-full h-auto" />
          </div>

         
          <div className="absolute bottom-50 left-[50px] w-[1020px] space-y-6">
            <p className="text-red-600 text-xl font-sans leading-relaxed">
              Prints, registros e recortes da cidade viraram mercadoria cultural. <span className="font-bold">Hidden NY</span> transforma curadoria em marca e prova que documentar também é construir poder estético.
            </p>
            <button className="border border-red-600/50 px-4 py-1 text-[15px] font-sans uppercase tracking-widest hover:bg-red-600 hover:text-black transition-colors">
              veja mais.
            </button>
          </div>
        </article>

       
        <article className="space-y-8">
          <div className="flex justify-between center items-baseline border-b border-white/0 pb-4">
             <span className="text-red-600 text-xs font-sans font-bold uppercase">Cinema</span>
             <h1 className="text-6xl max-w-lg leading-[0.9] uppercase italic font-light">Agente Secreto</h1>
          </div>
          <div className="grid grid-cols-12 gap-12">
             <div className="col-span-8 relative">
                <img src="/agente2.png" className="w-200" />
                <div className="absolute -bottom-25 -right-50 w-110">
                   <img src="/agente1.jpg" className="w-ful" />
                </div>
             </div>
             <div className="col-span-4 pt-12 space-y-4">
                <p className="text-white-600 italic text-lg leading-snug">
                   Estética, Código e Masculinidade Coreografada
                </p>
                <p className="mt-8 text-red-600 text-sm font-sans leading-relaxed">
                   Do alfaiataria à narrativa de poder, o imaginário do "agente" sempre foi sobre controle visual. Um dossiê sobre como o arquétipo secreto molda moda, comportamento e desejo.
                </p>
                <button className="border border-red-600/50 px-4 py-2 text-[10px] font-sans uppercase tracking-widest hover:bg-red-600 hover:text-black transition-colors">
                  veja mais.
                </button>
             </div>
          </div>
        </article>

      </div>

      <footer className="py-30 text-center opacity-100">
        
      </footer>
    </main>
  );
}
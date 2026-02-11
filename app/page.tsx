import { VariableFontHoverByLetter } from "./components/fancy/variable-font-hover";
import { Floating, FloatingElement } from "./components/fancy/parallax-floating";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex h-screen w-full bg-black overflow-hidden font-sans">
      
      {/* Coluna vermelha fixa: identidade e navegação */}
      <section className="w-[20%] bg-[#FF0000] p-12 flex flex-col justify-between text-black z-50">
        <div>
          
          {/* Logo como manifesto visual */}
          <div className="mb-12">
            <img 
              src="/arquivo.png" 
              alt="Logo Arquivo Público" 
              className="w-full max-w-[400px] h-auto" 
            />
          </div>
          
          <nav className="mt-24 space-y-4 text-2xl font-bold uppercase cursor-pointer">
            <Link href="/artigos" className="block">
              <VariableFontHoverByLetter 
                label="Ultimos artigos" 
                fromFontVariationSettings="'wght' 500" 
                toFontVariationSettings="'wght' 900" 
              />
            </Link>

            <Link href="/contato" className="block">
              <VariableFontHoverByLetter 
                label="Contato" 
                fromFontVariationSettings="'wght' 500" 
                toFontVariationSettings="'wght' 900" 
              />
            </Link>
          </nav>
        </div>

        <p className="text-xl italic font-medium leading-tight">
          Nada aqui é tendência. É registro.
        </p>
      </section>

      {/* Área viva: imagens flutuando como fragmentos visuais */}
      <section className="w-[85%] relative bg-black">
        <Floating sensitivity={-0.1} className="h-full w-full">
          
          <FloatingElement depth={0.5} className="absolute top-[20%] left-[20%] z-10">
            <img src="/egho.jpg" className="w-55 h-auto grayscale hover:grayscale-0 border-2 border-transparent hover:border-[#FF0000] transition-all duration-300 cursor-pointer" />
          </FloatingElement>

          <FloatingElement depth={1.2} className="absolute top-[10%] right-[60%] z-20">
            <img src="/mad.png" className="w-60 h-auto grayscale hover:grayscale-0 border-2 border-transparent hover:border-[#FF0000] transition-all duration-300 cursor-pointer" />
          </FloatingElement>

          <FloatingElement depth={-0.4} className="absolute top-[35%] left-[40%] z-30">
            <img src="/agente.png" className="w-75 h-auto grayscale hover:grayscale-0 border-2 border-transparent hover:border-[#FF0000] transition-all duration-300 cursor-pointer" />
          </FloatingElement>

          <FloatingElement depth={0.8} className="absolute top-[5%] right-[40%] z-10">
            <img src="/hidden.png" className="w-72 h-auto grayscale hover:grayscale-0 border-2 border-transparent hover:border-[#FF0000] transition-all duration-300 cursor-pointer" />
          </FloatingElement>

          <FloatingElement depth={1.5} className="absolute bottom-[20%] left-[35%] z-40">
            <img src="/hidden4.png" className="w-100 h-auto grayscale hover:grayscale-0 border-2 border-transparent hover:border-[#FF0000] transition-all duration-300 cursor-pointer" />
          </FloatingElement>

          <FloatingElement depth={1} className="absolute bottom-[35%] right-[28%] z-20">
            <img src="/sun.jpg" className="w-50 h-auto grayscale hover:grayscale-0 border-2 border-transparent hover:border-[#FF0000] transition-all duration-300 cursor-pointer" />
          </FloatingElement>

          <FloatingElement depth={-0.8} className="absolute bottom-[20%] right-[15%] z-15">
            <img src="/quadroc.png" className="w-54 h-auto grayscale hover:grayscale-0 border-2 border-transparent hover:border-[#FF0000] transition-all duration-300 cursor-pointer" />
          </FloatingElement>

          <FloatingElement depth={-0.7} className="absolute bottom-[65%] right-[15%] z-15">
            <img src="/hidden2.png" className="w-54 h-auto grayscale hover:grayscale-0 border-2 border-transparent hover:border-[#FF0000] transition-all duration-300 cursor-pointer" />
          </FloatingElement>

          <FloatingElement depth={-0.5} className="absolute bottom-[45%] right-[25%] z-15">
            <img src="/mad2.png" className="w-54 h-auto grayscale hover:grayscale-0 border-2 border-transparent hover:border-[#FF0000] transition-all duration-300 cursor-pointer" />
          </FloatingElement>

        </Floating>
      </section>

    </main>
  );
}

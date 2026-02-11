// app/contato/page.tsx
import Link from "next/link";

export default function Contato() {
  return (
    <main className="flex h-screen w-full flex-col items-center justify-center bg-[#FF0000] p-12 text-black font-sans overflow-hidden relative">
      
      {/* Botão de Fechar/Voltar */}
      <Link 
        href="/" 
        className="absolute top-12 left-12 text-[12px] font-bold uppercase tracking-[0.3em] hover:opacity-50 transition-opacity"
      >
        [ fechar ]
      </Link>

      <div className="flex flex-col items-center text-center">
        {/* LOGO SUBSTITUINDO O TEXTO */}
        <div className="mb-8">
          <img 
            src="/arquivo.png" 
            alt="Logo Arquivo Público" 
            className="w-full max-w-[500px] md:max-w-[700px] h-auto object-contain" 
          />
        </div>
        
        {/* E-mail posicionado logo abaixo da imagem */}
        <a 
          href="mailto:arquivopublico@gmail.com" 
          className="text-lg md:text-xl font-medium tracking-tight hover:italic transition-all border-b border-black/20 pb-1"
        >
          arquivopublico@gmail.com
        </a>
      </div>

      {/* Slogan no Rodapé */}
      <footer className="absolute bottom-13 w-full text-center">
        <p className="font-serif italic text-xl md:text-base">
          Nada aqui é tendência. É registro.
        </p>
      </footer>
      
    </main>
  );
}
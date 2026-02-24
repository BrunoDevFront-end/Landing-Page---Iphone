"use client";
import { useState } from "react";
import clsx from "clsx";
import Image from "next/image";

export default function Home() {
  const [ativo, setAtivo] = useState(false);
  const [imagem, setImagem] = useState("/cinza.png");

  const trocar = (novaImagem: string) => {
    setImagem(novaImagem);
    setAtivo(true);

    setTimeout(() => {
      setAtivo(false);
    }, 500);
  };

  return (
    <main className="w-full overflow-x-hidden">
      <header className="w-full">
        <nav className="w-full bg-gray-900 text-white">
          <div className="max-w-screen-xl mx-auto px-4 sm:px-6">
            <ul className="flex items-center justify-between py-3 sm:py-4">
              <li>
                <Image
                  src="/logo.png"
                  alt="Logo"
                  width={30}
                  height={30}
                  className="w-[26px] h-[26px] sm:w-[35px] sm:h-[35px]"
                />
              </li>

              <div className="hidden md:flex items-center gap-6 lg:gap-8 text-sm">
                <li>
                  <a href="#" className="hover:text-gray-400">
                    Loja
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-400">
                    Mac
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-400">
                    iPad
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-400">
                    Watch
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-400">
                    iPhone
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-400">
                    AirPods
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-400">
                    Acessórios
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-400">
                    Suporte
                  </a>
                </li>
              </div>
            </ul>
          </div>
        </nav>

        <nav className="w-full border-b">
          <div className="max-w-screen-xl mx-auto flex justify-between items-center px-4 sm:px-6 py-4 sm:py-5">
            <h3 className="font-semibold text-lg sm:text-xl md:text-2xl">
              iPhone 13 Pro
            </h3>

            <div className="hidden md:flex items-center gap-6 text-sm">
              <a href="#" className="hover:text-gray-500">
                Visão geral
              </a>
              <a href="#" className="hover:text-gray-500">
                Mudar para o iPhone
              </a>
              <a href="#" className="hover:text-gray-500">
                Especificações
              </a>
              <a
                href="#"
                className="bg-blue-600 rounded-full px-5 py-2 text-white hover:bg-blue-700 transition"
              >
                Comprar
              </a>
            </div>
          </div>
        </nav>
      </header>

      <aside className="w-full text-center px-4 py-3 sm:py-4 bg-gray-100 text-gray-800 text-xs sm:text-sm">
        <p>
          Pague seu novo iPhone em até 12 parcelas ou economize 10% à vista.
          <a className="text-blue-600 ml-2 hover:underline" href="#">
            Saiba mais
          </a>
        </p>
      </aside>

      <section className="max-w-screen-xl mx-auto px-4 sm:px-6 text-center py-12 sm:py-20">
        <h1 className="text-xl sm:text-3xl md:text-4xl font-semibold mb-3">
          iPhone 13 Pro
        </h1>

        <p className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
          É todo Pro.
        </p>

        <p className="max-w-md sm:max-w-2xl mx-auto text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed mb-8">
          Desempenho extraordinário, câmeras profissionais e tecnologia que
          redefine o que um smartphone pode fazer.
        </p>

        <p className="text-base sm:text-xl md:text-2xl text-gray-400 mb-8">
          A partir de R$ 9.500
        </p>

        <a
          href="#"
          className="inline-block bg-blue-600 text-white rounded-full text-sm sm:text-lg px-6 sm:px-8 py-2 sm:py-3 hover:bg-blue-700 transition"
        >
          Comprar
        </a>

        <div className="flex justify-center mt-10 sm:mt-12">
          <Image
            src={imagem}
            alt="iPhone"
            width={400}
            height={400}
            className={clsx(
              "w-[260px] sm:w-[350px] md:w-[400px] h-auto transition-all duration-500",
              ativo ? "opacity-0 scale-95" : "opacity-100 scale-100",
            )}
          />
        </div>

        <div className="flex justify-center gap-5 mt-8">
          <button
            onClick={() => trocar("/cinza.png")}
            className="w-5 h-5 rounded-full bg-gray-400 border"
          />
          <button
            onClick={() => trocar("/verde1.png")}
            className="w-5 h-5 rounded-full bg-green-500 border"
          />
          <button
            onClick={() => trocar("/azul2.png")}
            className="w-5 h-5 rounded-full bg-blue-500 border"
          />
          <button
            onClick={() => trocar("/rosa1.png")}
            className="w-5 h-5 rounded-full bg-pink-400 border"
          />
        </div>
      </section>
    </main>
  );
}

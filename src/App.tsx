import { useEffect, useState } from "react";

import { ProjectsGrid } from "./components/projects-grid";
import { IconRow } from "./components/icon-row";
import { HorizontalLine } from "./components/horizontal-line";
import { LinkedinIcon } from "./assets/icons/linkedin-icon";
import { GithubIcon } from "./assets/icons/github-icon";
import { ButtonOutline } from "./components/mailButton";
import {
  Contact,
  LucideFigma,
  LucideAppWindow,
  LucideWebhook,
} from "lucide-react";
import { PresentationCard } from "./components/presentation-card";

export function App() {
  const [text, setText] = useState("construo aplicações para a web.");
  const [index, setIndex] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);

  const texts = [
    "crio experiências digitais!",
    "crio sites.",
    "construo APIs.",
    "desenvolvo interfaces bonitas.",
    "sei centralizar uma div!",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setFadeOut(true);
      setTimeout(() => {
        setIndex((prevIndex) => (prevIndex + 1) % texts.length);
        setFadeOut(false);
      }, 500);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setText(texts[index]);
  }, [index]);

  return (
    <div className="font-Inter">
      <div className="w-full mt-8 p-3 max-w-[90%] md:mt-24 lg:ml-32 mb-24 space-y-7">
        <h3 className="text-slate-100 font-semibold">
          Olá &#128075;, meu nome é
        </h3>
        <h1 className="text-slate-100 font-bold text-3xl md:text-6xl">
          Felipe Cavalcanti.
        </h1>
        <h2 className="text-slate-400 font-semibold text-2xl md:text-6xl">
          Eu{" "}
          <span
            className={`text-emerald-400 transition-opacity ${
              fadeOut ? "opacity-0" : "opacity-100"
            }`}
          >
            {text}
          </span>
        </h2>

        <p className="text-slate-400 font-semibold md:w-2/5">
          Aspirante à Engenheiro de Software para a web, especializado em
          construir (e às vezes arquitetar) experiências digitais excepcionais.
          Atualmente, estou focado em desenvolver aplicações web utilizando
          diversas tecnologias.
        </p>
        <IconRow />
        <HorizontalLine />
        <div className="flex gap-3 opacity-70">
          <LinkedinIcon width={42} height={42} />
          <GithubIcon width={42} height={42} />
        </div>
      </div>

      <PresentationCard />

      <div className="w-auto flex flex-col mt-16 md:flex-col gap-12 p-12 justify-center items-center bg-zinc-950 text-slate-100 m-4 rounded-xl lg:flex-col">
        <div>
          <h3 className="font-semibold text-2xl md:text-3xl lg:text-4xl">
            Algumas <span className="text-emerald-400">áreas</span> as quais
            atuei
          </h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 p-8 justify-center items-center font-Inter font-semibold">
          <div className="flex flex-col gap-3 p-4 w-full md:w-auto h-54 rounded-xl bg-zinc-800 justify-center items-center">
            <LucideFigma />
            <div>
              <span className="font-semibold text-lg">
                Prototipagem com Figma
              </span>
            </div>
            <div>
              <p>Foco em boas práticas de (UI/UX).</p>
            </div>
          </div>
          <div className="flex flex-col gap-3 p-4 w-full md:w-auto h-54 rounded-xl bg-zinc-800 justify-center items-center">
            <LucideAppWindow />
            <div>
              <span className="font-semibold text-lg">Criação de Sites</span>
            </div>
            <div>
              <p>Desenvolvimento de Landing Pages ou múltiplas páginas.</p>
            </div>
          </div>
          <div className="flex flex-col gap-3 p-4 w-full md:w-auto h-54 rounded-xl bg-zinc-800 justify-center items-center">
            <LucideWebhook />
            <div>
              <span className="font-semibold text-lg">Construção de APIs</span>
            </div>
            <div>
              <p>
                Desenvolvimento de aplicações internas para sistemas complexos.
              </p>
            </div>
          </div>
        </div>
      </div>

      <ProjectsGrid />

      <div className="w-auto flex flex-col mt-16 gap-12 p-12 justify-center items-center bg-zinc-950 text-slate-100 m-4 rounded-xl">
        <div className="font-semibold">
          <h3 className="flex items-center text-2xl gap-1 lg:text-4xl md:text-3xl">
            <Contact /> Entrar em{" "}
            <span className="text-emerald-400">contato</span>
          </h3>
        </div>
        <div className="flex flex-col gap-3 items-center md:flex-row lg:flex-row">
          <a href="">
            <ButtonOutline>Envie uma mensagem</ButtonOutline>
          </a>
          <a href="">
            <ButtonOutline>Linkedin</ButtonOutline>
          </a>
          <a href="">
            <ButtonOutline>Ver Github</ButtonOutline>
          </a>
        </div>
      </div>

      <footer className="bg-zinc-950 text-slate-100 w-full p-4 flex justify-center items-center ">
        <span>Felipe Cavalcanti Apolinario © Todos os direitos reservados</span>
      </footer>
    </div>
  );
}

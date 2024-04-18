import attendify from "../assets/imgs/attendify-screenshot.png";
import debateDay from "../assets/imgs/debate-day-screenshot.png";
import intelliNotes from "../assets/imgs/intellinotes-screenshot.png";
import qrcodeApp from "../assets/imgs/qrcode-screenshot.png";
import quizApp from "../assets/imgs/quiz-screenshot.png";
import chatApp from "../assets/imgs/chat-screenshot.png";
import { BadgeOutline } from "./langBadges";

export function ProjectsGrid() {
  return (
    <div className="bg-zinc-950 text-slate-100 w-auto h-full rounded-xl m-5 mt-16 p-5">
      <span className=" font-bold flex justify-center items-center text-2xl p-2 gap-2 lg:text-4xl">
        <span className="text-emerald-400">Projetos</span> desenvolvidos
      </span>
      <div className="grid grid-cols-1 gap-10 p-8 justify-center items-center font-Inter  font-semibold md:grid-cols-2 lg:grid-cols-3">
        <div>
          <span>
            Attendify: API de gestão de participantes em eventos presenciais.
          </span>
          <div className="flex gap-2 py-2">
            <BadgeOutline>Node</BadgeOutline>
            <BadgeOutline>React</BadgeOutline>
            <BadgeOutline>Prisma</BadgeOutline>
            <BadgeOutline>Typescript</BadgeOutline>
          </div>
          <a href="">
            <img src={attendify} alt="" />
          </a>
        </div>
        <div>
          <span>
            Debate day: App que gera um tema de debate com inteligência
            artificial.
          </span>
          <div className="flex gap-2 py-2">
            <BadgeOutline>React</BadgeOutline>
            <BadgeOutline>Typescript</BadgeOutline>
          </div>
          <a href="https://github.com/feapolina/gdebate-app">
            <img src={debateDay} alt="" />
          </a>
        </div>
        <div>
          <span>intelliNotes: App capaz de armazenar notas inteligentes </span>
          <div className="flex gap-2 py-2">
            <BadgeOutline>React</BadgeOutline>
            <BadgeOutline>Typescript</BadgeOutline>
          </div>
          <a href="https://github.com/feapolina/intelliNotes">
            <img src={intelliNotes} alt="" />
          </a>
        </div>
        <div>
          <span>QRCODE Generator: Gerador de QRCodes.</span>
          <div className="flex gap-2 py-2">
            <BadgeOutline>Typescript</BadgeOutline>
          </div>
          <a href="https://github.com/feapolina/QrCodeGenerator">
            <img src={qrcodeApp} alt="" />
          </a>
        </div>
        <div>
          <span>Quiz App: Um quiz com o tema relacionado à Itália</span>
          <div className="flex gap-2 py-2">
            <BadgeOutline>Javascript</BadgeOutline>
          </div>
          <a href="https://github.com/feapolina/quiz-app-js">
            <img src={quizApp} alt="" />
          </a>
        </div>
        <div>
          <span>CatChat: Um bate-papo local funcional</span>
          <div className="flex gap-2 py-2">
            <BadgeOutline>Node</BadgeOutline>
          </div>
          <a href="https://github.com/feapolina/cat-chat-node">
            <img src={chatApp} alt="" />
          </a>
        </div>
      </div>
    </div>
  );
}

import felipeFoto from "../assets/imgs/felipe-foto.svg";

export function PresentationCard() {
  return (
    <div className="md:flex w-auto h-full bg-zinc-950 flex-wrap items-center text-slate-100 p-6 m-4 rounded-xl gap-4">
      <img
        className="size-80 md:w-80 md:h-80 mx-auto mb-8 md:mb-0"
        src={felipeFoto}
        alt=""
      />
      <div className="space-y-6 md:space-y-8">
        <div className="text-4xl md:text-5xl font-semibold">
          <h3>
            Sobre <span className="text-emerald-400">mim</span>
          </h3>
        </div>
        <div>
          <p className="text-base md:text-lg">
            Olá! Me chamo Felipe Cavalcanti. Sou estudante de Ciência da
            Computação na UFPB e Desenvolvimento Web, atuando tanto no backend
            como no frontend. Trabalhei em projetos envolvendo diversas
            linguagens, e também tenho experiência em criação de interfaces de
            usuário com experiência de usuário. Estou sempre buscando
            conhecimento, e gosto muito de realizar desafios e concluir cursos,
            possuo vários certificados até então.{" "}
            <a href="https://www.linkedin.com/in/feapolina/details/certifications/">
              <strong>Veja aqui.</strong>
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

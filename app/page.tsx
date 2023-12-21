import Image from 'next/image'
import { promises as fs } from 'fs';

export default async function Home() {
    const file = await fs.readFile(process.cwd() + '/data/projetos.json', 'utf8');
    const data = JSON.parse(file);
  return (
    <main>
    <section className="background section-main">
    <main className="alinhando">
        <div className="banner">
            <p className="frase-1"><span id="color-text-banner">OLÁ, EU SOU O </span>LUAN SANTOS</p>
            <h1 className="palavra-banner">BACKEND</h1>
            <h1 className="palavra-banner">DEVELOPER</h1>
            <div className="icons">
                <a target="_blank" href="https://www.linkedin.com/in/luan-dos-santos-35759b186/"><img src="/home/linkedin.svg" alt="Icone do Linkedin"/></a>
                <a target="_blank" href="https://github.com/LuanSantosSilva"><img src="/home/github-2.svg" alt="Icone do Github"/></a>
                <a target="_blank" href="/support/curriculo.pdf"><img src="/home/Profile.svg" alt="Icone Currículo"/></a>
            </div>
        </div>
    </main>
    </section>

    <section className="background section-about-me">
    <div className="alinhando about-me">
        <div className="main-about-me" id="about-me">
            <div className="desc-about-me">
                <h1>SOBRE MIM</h1>
                <p>Tenho 19 anos, sou desenvolvedor web a cerca de 2 anos. Sou bastante persistente,
                    isso me permite aprender novos conceitos em um intervalo pequeno de tempo. Profissionalmente atuo com a linguagem Python, porém também utilizo PHP e outras tecnologias web no geral. Mais abaixo você pode ver minhas experiências e Habilidades.
                </p>
            </div>
            <div className="img-about-me">
                <img src="/about-me/about-me.svg" alt=""/>
            </div>
        </div>
    </div>
    </section>

    <section className="background section-projects">
    <div className="alinhando projects" id="projects">
      <h1>PROJETOS</h1>
      {data.map((value: { demo: string, ler_mais: string, repositorio: string, image: string, project: string, description: string}, key: number) => {
        const demo = value.demo == "" ? "invisible" : "";
        const ler = value.ler_mais == "" ? "invisible" : "";
        const repositorio = value.repositorio == "" ? "invisible" : "";

        return (
          <div className="card" key={key}>
            <div className="card-img">
              <img src={value.image} alt=""/>
            </div>
            <div className="card-desc">
              <h1>{value.project}</h1>
              <p className="desc">{value.description}</p>
              <div className="card-icons">       
               <abbr title="Repositório" className={repositorio}>
                <a href={value.repositorio} className="icon repositorio"><img src="projects/github-icon.svg" alt=""/>
                  <p>Repositório</p>
                </a>
               </abbr>
               <abbr title="Ler mais" className={ler}>
                <a href={value.ler_mais} className="icon ler-mais"><img src="projects/reticencias.svg" alt=""/>
                  <p>Ler mais</p>
                </a>
               </abbr>
               <abbr title="Ver demo" className={demo}>
                <a href={value.demo} className="icon demo"><img src="projects/link-externo.svg" alt=""/>
                  <p>Ver demo</p>
                </a>
               </abbr>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  </section>

  <section className="background section-skills">
    <div className="alinhando skills" id="skills">
        <h1>HABILIDADES</h1>
        <p>Principais ferramentas e linguagens</p>
        <div className="skills-icons">
            <div className="skill">
                <div className="skill-content">
                    <img src="skills/html.svg" alt=""/>
                    <p>HTML</p>
                </div>
            </div>
            <div className="skill">
                <div className="skill-content">
                    <img src="skills/css.svg" alt=""/>
                    <p>CSS</p>
                </div>
            </div>
            <div className="skill">
                <div className="skill-content">
                    <img src="skills/python.svg" alt=""/>
                    <p>Python</p>
                </div>
            </div>
            <div className="skill">
                <div className="skill-content">
                    <img src="skills/php.svg" alt=""/>
                    <p>PHP</p>
                </div>
            </div>
            <div className="skill">
                <div className="skill-content">
                    <img src="skills/js.svg" alt=""/>
                    <p>JavaScript</p>
                </div>
            </div>
            <div className="skill">
                <div className="skill-content">
                    <img src="skills/postgresql.svg" alt=""/>
                    <p>PostgreSQL</p>
                </div>
            </div>
        </div>

        <a href="#" className="icon-more-skill"><img src="projects/reticencias.svg" alt=""/>
            <p>Ver mais</p>
        </a>
    </div>
</section>


    </main>
  )
}

import React from "react";
import { ArrowUpRight, Check, Plus } from "./Icons.jsx";
import image_encontro from "../assets/encontro.webp";
function ModelImage({ alt }) {
  return <img src={image_encontro} alt={alt} width={1400} height={1000} />;
}

const DemoNote = ({ prefix: e }) => (
  <p className={`${e}-note`}>
    Experiência demonstrativa · marca, serviços e valores ilustrativos. Suas
    escolhas ficam apenas nesta tela.
  </p>
);
const DemoData1 = {
  Ideias: [
    [`10:00`, `O futuro é uma conversa`, `Palco Horizonte · debate`],
    [`14:00`, `Criar o que ainda não existe`, `Lab de ideias · oficina`],
    [`17:30`, `Novos jeitos de estar junto`, `Palco Horizonte · encontro`],
  ],
  Música: [
    [`16:00`, `Som de começo`, `Palco Jardim · sessão`],
    [`19:00`, `Entre ritmos e encontros`, `Palco Principal · show`],
    [`21:00`, `A noite continua`, `Pista Aurora · DJ set`],
  ],
  Experiências: [
    [`11:00`, `Desenhar novas possibilidades`, `Ateliê · prática criativa`],
    [`15:00`, `Uma mesa, muitas histórias`, `Pátio · encontro`],
    [`18:00`, `A cidade em outro olhar`, `Galeria · instalação`],
  ],
};
function EncontroDemo() {
  let [category, setCategory] = React.useState(`Ideias`),
    [savedSessions, setSavedSessions] = React.useState([]);
  return (
    <div className={`en-page`} id={`demo-top`}>
      <div className={`en-nav`}>
        <a className={`en-logo`} href={`#demo-top`}>
          encontro<span>✳</span>
        </a>
        <span>FESTIVAL DE POSSIBILIDADES</span>
        <a href={`#en-program`}>
          {`Monte sua agenda `}
          <ArrowUpRight size={17} />
        </a>
      </div>
      <section className={`en-hero`}>
        <ModelImage
          slug={`encontro`}
          alt={`Atmosfera de festival contemporâneo com luzes de palco e público`}
        />
        <div className={`en-hero-content`}>
          <p>IDEIAS / MÚSICA / EXPERIÊNCIAS</p>
          <h1>
            A GENTE
            <br />
            ACONTECE
            <br />
            <em>JUNTO.</em>
          </h1>
          <div>
            <span>
              EDIÇÃO CONCEITO
              <br />
              PROGRAMAÇÃO FICTÍCIA
            </span>
            <a href={`#en-program`}>
              {`ENTRE NO CLIMA `}
              <ArrowUpRight />
            </a>
          </div>
        </div>
        <span className={`en-orbit`} aria-hidden={`true`}>
          ✳
        </span>
      </section>
      <section className={`en-intro`}>
        <span>
          O MELHOR DO ENCONTRO
          <br />É O QUE ELE PROVOCA.
        </span>
        <p>
          Uma ideia encontra outra. Um som aproxima pessoas. E, de repente, algo
          novo acontece.
        </p>
      </section>
      <section className={`en-program`} id={`en-program`}>
        <div className={`en-program-heading`}>
          <div>
            <p>EXPLORE A PROGRAMAÇÃO DEMO</p>
            <h2>
              Seu dia.
              <br />
              <em>Sem roteiro fixo.</em>
            </h2>
          </div>
          <span className={`en-count`}>
            {String(savedSessions.length).padStart(2, `0`)}
            <small>na sua agenda local</small>
          </span>
        </div>
        <div className={`en-tabs`}>
          {Object.keys(DemoData1).map((n) => (
            <button
              key={n}
              aria-pressed={category === n}
              onClick={() => setCategory(n)}
            >
              {n}
            </button>
          ))}
        </div>
        {DemoData1[category].map(([e, t, i]) => (
          <article key={t} className={`en-session`}>
            <time>{e}</time>
            <div>
              <h3>{t}</h3>
              <p>{i}</p>
            </div>
            <button
              aria-label={`${savedSessions.includes(t) ? `Remover` : `Adicionar`} ${t} ${savedSessions.includes(t) ? `da` : `à`} agenda demo`}
              aria-pressed={savedSessions.includes(t)}
              onClick={() =>
                setSavedSessions(
                  savedSessions.includes(t)
                    ? savedSessions.filter((e) => e !== t)
                    : [...savedSessions, t],
                )
              }
            >
              {savedSessions.includes(t) ? <Check /> : <Plus />}
            </button>
          </article>
        ))}
        <p className={`en-feedback`} role={`status`}>
          {savedSessions.length
            ? `${savedSessions.length} experiência(s) selecionada(s) nesta tela. Não é ingresso nem inscrição.`
            : `Adicione experiências para testar sua agenda. Nenhuma inscrição será feita.`}
        </p>
      </section>
      <section className={`en-bottom`}>
        <p>
          NÃO É SÓ UM LUGAR.
          <br />É UM PONTO DE PARTIDA.
        </p>
        <a href={`#en-program`}>
          {`Encontre sua programação `}
          <ArrowUpRight />
        </a>
      </section>
      <DemoNote prefix={`en`} />
    </div>
  );
}

export default EncontroDemo;

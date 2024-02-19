import React from "react";
import "./Productivity.css";

export default function Productivity() {
  return (
    <main>
      <div className="main_text_productivity">
        <h1 className="tittle_productivity">Produtividade:</h1>
        <h3 className="h3-productivity">
          a capacidade de realizar o máximo de trabalho possível com o mínimo de
          recursos necessários
        </h3>
      </div>
      <p>
        <h2 className="tips_productivity">
          Dicas para ganhar tempo, ter uma mente tranquila, e ter mais foco.
        </h2>
      </p>
      <div className="widget">
        <p>
          Use a técnica pomodo: 25 minutos de foco, 5 minutos de intervalo, até
          completar 4 partes de 25 minutos e encerrar com 15 minutos de
          descanso.
        </p>
      </div>
      <div className="widget">
        <p>
          <a
            className="link-widget"
            href="https://www.recipesforwellbeing.org/recipes/all-recipes/"
          >
            Receitas para o bem-estar
          </a>
        </p>
      </div>
      <div className="widget">
        <p>
          Passos diários para ter controle sobre sua{" "}
          <a
            className="link-widget"
            href="https://datadetoxkit.org/pt/privacy/essentials"
          >
            privacidade
          </a>
          ,{" "}
          <a
            className="link-widget"
            href="https://datadetoxkit.org/pt/security/essentials"
          >
            segurança
          </a>
          , e{" "}
          <a
            className="link-widget"
            href="https://datadetoxkit.org/pt/wellbeing/essentials"
          >
            bem-estar
          </a>{" "}
          de formas que lhe pareçam corretas.
        </p>
      </div>
    </main>
  );
}

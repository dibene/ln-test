import { ArticleRaw } from "@/app/api/request/articles/get";
import React from "react";

interface ArticleProps {
  article: ArticleRaw;
}
export function Article({ article }: ArticleProps) {
  return (
    <article className="mod-caja-nota lugares w-100-mobile">
      <section id="" className="cont-figure">
        <a href="" className="figure">
          <picture id="" className="content-pic picture">
            {/* adding provisory style because the resizedUrls doesn't work */}
            <img
              style={{ height: "100%", width: "100%" }}
              src={article.promo_items.basic.url}
              alt=""
              className="content-img"
            />
          </picture>
        </a>
      </section>
      <div className="mod-caja-nota__descrip">
        <h2 className="com-title-acu">
          <a href={article.website_url}>{article.headlines.basic}</a>
        </h2>
        <h4 className="com-date">{formatDate(article.display_date)}</h4>
      </div>
    </article>
  );
}

/**
 * receive the date in this format 2019-06-01T15:14:40.626Z
 * and return in this format 1 de Julio de 2019
 */
function formatDate(date: string) {
  const months = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];

  const fecha = new Date(date);
  const day = fecha.getDate();
  const month = fecha.getMonth();
  const year = fecha.getFullYear();

  return `${day} de ${months[month]} de ${year}`;
}

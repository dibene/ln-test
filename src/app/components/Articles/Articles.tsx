import React from "react";
import { Article } from "./Article";
import { LoadMoreButton } from "./LoadMoreButton";
import { MobileBanner } from "./MobileBanner";
import { get } from "@/app/api/request/articles/get";

export async function Articles() {
  const data = await get();

  const filteredArticles = data.articles.filter(
    (article) => article.subtype === "7"
  );

  return (
    <>
      <section className="row-gap-tablet-2 row-gap-deskxl-3 hlp-degrade">
        {filteredArticles.map((article, index) => (
          <>
            <Article key={article._id} article={article} />
            {index % 3 === 2 && <MobileBanner />}
          </>
        ))}
      </section>
      <LoadMoreButton />
    </>
  );
}

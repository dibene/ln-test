import React from "react";
import { Article } from "./Article";
import { LoadMoreButton } from "./LoadMoreButton";
import { MobileBanner } from "./MobileBanner";

export function Articles() {
  return (
    <>
      <section className="row-gap-tablet-2 row-gap-deskxl-3 hlp-degrade">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, index) => (
          <>
            <Article key={index} />
            {((index % 3 === 2)) && <MobileBanner />}
          </>
        ))}
      </section>
      <LoadMoreButton />
    </>
  );
}

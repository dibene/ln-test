import React from "react";
import { ArticleRaw, TagRaw, get } from "../api/request/articles/get";

export async function Tags() {
  const { articles } = await get();

  const groupedTags: GroupedTag[] = agroupTags(articles);

  return (
    <div className="row">
      <div className="cont_tags com-secondary-tag hlp-marginBottom-20">
        {groupedTags.map((tag) => (
          <a key={tag.text} href={`/tema/${tag.slug}`}>
            {tag.text}
          </a>
        ))}
      </div>
    </div>
  );
}

interface GroupedTag extends TagRaw {
  count: number;
}

function agroupTags(articles: ArticleRaw[]): GroupedTag[] {
  const tagCounts: Map<string, GroupedTag> = new Map();

  articles.forEach((article) => {
    const { taxonomy } = article;
    const { tags } = taxonomy;

    tags.forEach((tag) => {
      const { slug, text } = tag;

      if (tagCounts.has(text)) {
        const existingTag = tagCounts.get(text);
        if (existingTag) {
          existingTag.count++;
        }
      } else {
        tagCounts.set(text, { slug, text, count: 1 });
      }
    });
  });

  const groupedTags = Array.from(tagCounts.values());
  const groupedTagsSorted = groupedTags.sort((a, b) => b.count - a.count);
  const first10groupedTagsSorted = groupedTagsSorted.slice(0, 10);

  return first10groupedTagsSorted;
}

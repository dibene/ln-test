interface PromoItemsRaw {
  basic: {
    resized_urls: {
      option: {
        media: string;
      };
      resizedUrl: string;
    }[];
    subtitle: string;
    type: string;
    url: string;
  };
}
interface TagRaw {
  slug: string;
  text: string;
}

export interface ArticleRaw {
  _id: string;
  display_date: string;
  headlines: {
    basic: string;
  };
  promo_items: PromoItemsRaw;
  subtype: string;
  taxonomy: {
    tags: TagRaw[];
  };
  website_url: string;
}

export async function get() {
  const response = await fetch(
    "https://jrt2bb3b2nlkw5ozvfcld62wbe0pnifh.lambda-url.us-east-1.on.aws/"
  );

  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }

  const data: { articles: ArticleRaw[] } = await response.json();

  return data;
}

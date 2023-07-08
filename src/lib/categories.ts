export interface Category {
  name: string;
  slug: string;
}

const categories = [
  { name: "🥪 On The Go", slug: "on-the-go" },
  { name: "🥨 Baked Goods", slug: "baked-goods" },
  { name: "🥧 Cakes and Pies", slug: "cakes-and-pies" },
  { name: "🍬 Sweets", slug: "candy" },
  { name: "🥤 Refreshing Drinks", slug: "refreshing-drinks" },
  { name: "🍹 Alcohol", slug: "alcoholic-drinks" },
];

export default categories;

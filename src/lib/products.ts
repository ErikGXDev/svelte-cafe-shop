export interface Product {
  display: string;
  price: number;
  emoji: string;
}

interface Products {
  [key: string]: Product[];
}

const products: Products = {
  "on-the-go": [
    {
      display: "Sandwich",
      emoji: "🥪",
      price: 2.99,
    },
    {
      display: "Tacos",
      emoji: "🌮",
      price: 2.99,
    },
    {
      display: "Burrito",
      emoji: "🌯",
      price: 4.99,
    },
    {
      display: "Stuffed Flatbread",
      emoji: "🥙",
      price: 2.99,
    },
  ],
  "baked-goods": [
    {
      display: "2 Waffles",
      emoji: "🧇",
      price: 2.99,
    },
    {
      display: "4 Pancakes",
      emoji: "🥞",
      price: 4.99,
    },
    {
      display: "Bretzel",
      emoji: "🥨",
      price: 1.5,
    },
    {
      display: "Croissant",
      emoji: "🥐",
      price: 1.99,
    },
    {
      display: "Bagel",
      emoji: "🥯",
      price: 1.5,
    },
    {
      display: "Baguette",
      emoji: "🥖",
      price: 1,
    },
  ],
  "cakes-and-pies": [
    {
      display: "Cupcake",
      emoji: "🧁",
      price: 1.99,
    },
    {
      display: "Strawberry Cake",
      emoji: "🍰",
      price: 2.99,
    },
    {
      display: "Birthday Cake",
      emoji: "🎂",
      price: 5.99,
    },
    {
      display: "Cherry Pie",
      emoji: "🥧",
      price: 5.99,
    },
  ],
  candy: [
    {
      display: "Vanilla Soft Ice Cream",
      emoji: "🍦",
      price: 1.99,
    },
    {
      display: "Ice Cream Mix",
      emoji: "🍨",
      price: 2.99,
    },
    {
      display: "Shaved Ice",
      emoji: "🍧",
      price: 0.99,
    },
    {
      display: "Doughnut",
      emoji: "🍩",
      price: 1.99,
    },
    {
      display: "Chocolate Chip Cookie",
      emoji: "🍪",
      price: 0.99,
    },
    {
      display: "Bonbon",
      emoji: "🍬",
      price: 0.5,
    },
    {
      display: "Chocolate Bar",
      emoji: "🍫",
      price: 1.99,
    },
    {
      display: "Lollipop",
      emoji: "🍭",
      price: 0.99,
    },
  ],
  "refreshing-drinks": [
    {
      display: "Cold Water",
      emoji: "🧊",
      price: 1.99,
    },
    {
      display: "Bubble Tea",
      emoji: "🧋",
      price: 1.99,
    },
    {
      display: "Smoothie",
      emoji: "🥤",
      price: 1.99,
    },
    {
      display: "Green Tea",
      emoji: "🍵",
      price: 0.99,
    },
    {
      display: "Mate",
      emoji: "🧉",
      price: 1.99,
    },
    {
      display: "Coffee",
      emoji: "☕",
      price: 2.99,
    },
  ],
  "alcoholic-drinks": [
    {
      display: "Rum Punch",
      emoji: "🍹",
      price: 2.99,
    },
    {
      display: "Cocktail",
      emoji: "🍸",
      price: 1.99,
    },
    {
      display: "Red Wine",
      emoji: "🍷",
      price: 2.99,
    },
    {
      display: "Champagne",
      emoji: "🍾",
      price: 6.99,
    },
    {
      display: "German Beer",
      emoji: "🍺",
      price: 2.99,
    },
  ],
};

export default products;

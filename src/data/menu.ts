import { MenuItemProps } from '../pages/menu/components/MenuItem';

type menuNames =
  | 'desserts'
  | 'drinks'
  | 'sashimi'
  | 'rice'
  | 'noodles'
  | 'salads'
  | 'appetizers';

type Menus = {
  [menuName in menuNames]: MenuItemProps[];
};

export const menus: Menus = {
  desserts: [
    {
      name: 'Japanese Ice Cream',
      price: 4.5,
      imgSrc: 'https://i.imgur.com/YadumMk.jpg',
      description: 'Vanila / Chocolate / Matcha / Red Bean',
    },
    {
      name: 'Pudding',
      price: 4.5,
      imgSrc: 'https://i.imgur.com/QzzCLpb.jpg',
      description: 'Mango / Berries / Cacao / Vanila',
    },
    {
      name: 'Tiramisu',
      price: 4.5,
      imgSrc: 'https://i.imgur.com/GUvoJta.jpg',
      description: 'Vanila / Chocolate / Matcha / Red Bean',
    },
    {
      name: 'Mochi',
      price: 4.5,
      imgSrc: 'https://i.imgur.com/SRVtmSF.jpg',
      description: 'Matcha / Chocolate / Vanila / Red Bean',
    },
  ],
  drinks: [
    {
      name: 'Juice',
      price: 3.5,
      imgSrc: 'https://i.imgur.com/nQUrWXy.jpg',
      description: 'Orange / Lemon / Strawberries',
    },
    {
      name: 'Matcha Tea',
      price: 3.5,
      imgSrc: 'https://i.imgur.com/GGfheeU.jpg',
    },
    {
      name: 'Soft Drinks',
      price: 3.5,
      imgSrc: 'https://i.imgur.com/GoPPcfC.jpg',
      description: 'Coca / Pepsi / Sprite',
    },
  ],
  appetizers: [
    {
      name: 'Edamame',
      price: 5.95,
      imgSrc: 'https://i.imgur.com/cQiwVS8.jpg',
      description: 'Boiled young Soya Beans, sprinkled with salt',
    },
    {
      name: 'Agedashi Tofu',
      price: 3.95,
      imgSrc: 'https://i.imgur.com/lDhoiJR.jpg',
      description:
        'Lightly fried Bean curb served with Bonito Flakes in Tempura Sauce',
    },
    {
      name: 'Yaki-Nasu',
      price: 5.95,
      imgSrc: 'https://i.imgur.com/vlbb7Ds.jpg',
      description: 'Boiled young Soya Beans, sprinkled with salt',
    },
    {
      name: 'Kara-Age',
      price: 6.95,
      imgSrc: 'https://i.imgur.com/SiIZCDL.jpg',
      description: 'Deep fried Chicken with Chef Special Sauce',
    },
  ],
  salads: [
    {
      name: 'Wakame Salad',
      price: 7.95,
      imgSrc: 'https://i.imgur.com/V0ZicRr.jpg',
      description: 'Seasweed & Mixed Greens with Ginger Dressing',
    },
    {
      name: 'Avocado Salad',
      price: 7.95,
      imgSrc: 'https://i.imgur.com/oa7kOOP.png',
      description: 'Avocado & Mixed Greens with Ginger Dressing',
    },
    {
      name: 'Green Kaiso Salad',
      price: 6.95,
      imgSrc: 'https://i.imgur.com/JIKSYRS.jpg',
      description: 'Marinated Seaweeds',
    },
  ],
  rice: [
    {
      name: 'Tempura-Don',
      price: 10.95,
      imgSrc: 'https://i.imgur.com/t2Tg76n.jpg',
      description: '',
    },
    {
      name: 'Kaki-Age-Don',
      price: 10.95,
      imgSrc: 'https://i.imgur.com/Z6qZN4T.jpg',
      description: 'Tempura Seafood with Vegetables bed on Rice',
    },
    {
      name: 'Katsu-Don',
      price: 11.95,
      imgSrc: 'https://i.imgur.com/JMMCZxj.jpg',
      description: 'Breaded Pork with Onions & Egg bed on Rice',
    },
    {
      name: 'Unagi-Don',
      price: 14.95,
      imgSrc: 'https://i.imgur.com/kcMYA9R.jpg',
      description: 'Grilled freshwater Eel bed on Rice',
    },
    {
      name: 'Oyako-Don',
      price: 10.95,
      imgSrc: 'https://i.imgur.com/pUKq8af.jpg',
      description: 'Chicken with Onions & Egg bed on Rice',
    },
  ],
  noodles: [
    {
      name: 'Chicken Udon',
      price: 11.95,
      imgSrc: 'https://i.imgur.com/CoGrzGx.jpg',
      description: 'Grilled Chicken',
    },
    {
      name: 'Shiitake Udon',
      price: 11.95,
      imgSrc: 'https://i.imgur.com/g8XrmnA.jpg',
      description: 'Japanese Mushroom with Noodles in Fish Broth',
    },
    {
      name: 'Kaiso Udon',
      price: 10.95,
      imgSrc: 'https://i.imgur.com/uy4TiFK.jpg',
      description: 'Seaweed with Noodles in Fish Broth',
    },
    {
      name: 'Yaki Udon',
      price: 12.95,
      imgSrc: 'https://i.imgur.com/RzJrbiR.jpg',
      description: 'Pan Fried Noodles with seafood and vegetable',
    },
  ],
  sashimi: [
    {
      name: 'Hamachi',
      price: 5.95,
      imgSrc: 'https://i.imgur.com/28rfb74.jpg',
      description: 'Yellow Tail',
    },
    {
      name: 'Unagi',
      price: 5.95,
      imgSrc: 'https://i.imgur.com/vpDVTpT.jpg',
      description: 'BBQ Eel',
    },
    {
      name: 'Ebi',
      price: 5.95,
      imgSrc: 'https://i.imgur.com/HtcwvCi.jpg',
      description: 'Tiger Shrimp',
    },
    {
      name: 'Ikura',
      price: 5.95,
      imgSrc: 'https://i.imgur.com/tc3SvYT.jpg',
      description: 'Salmon Rose',
    },
    {
      name: 'Tako',
      price: 5.95,
      imgSrc: 'https://i.imgur.com/bdPlrKe.jpg',
      description: 'Octopus',
    },
    {
      name: 'Amaebi',
      price: 5.95,
      imgSrc: 'https://i.imgur.com/g8WZbxQ.jpg',
      description: 'Sweet Shrimp',
    },
    {
      name: 'Tamago',
      price: 4.95,
      imgSrc: 'https://i.imgur.com/jswhJlw.png',
      description: 'Egg',
    },
    {
      name: 'Butterfish',
      price: 4.95,
      imgSrc: 'https://i.imgur.com/YIeuDxG.jpg',
      description: 'Oil fish',
    },
    {
      name: 'Hokkigai',
      price: 4.95,
      imgSrc: 'https://i.imgur.com/N9gXyr1.jpg',
      description: 'Surf Clamp',
    },
    {
      name: 'Maguro',
      price: 5.95,
      imgSrc: 'https://i.imgur.com/Lsfqbzd.jpg',
      description: 'Tuna',
    },
    {
      name: 'Sake',
      price: 4.95,
      imgSrc: 'https://i.imgur.com/K3tYndQ.jpg',
      description: 'Salmon',
    },
  ],
};

export type menuIds =
  | 'appetizersAndSalads'
  | 'riceAndNoodles'
  | 'sushiAndSashimi'
  | 'dessertsAndDrinks';

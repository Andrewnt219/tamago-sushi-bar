import { MenuItemProps } from '../pages/menu/components/MenuItem';
import agedashiTofu from '../asset/menus/Agedashi Tofu.jpg';
import amaebi from '../asset/menus/Amaebi.jpg';
import avocadoSalad from '../asset/menus/Avocado Salad.png';
import butterfly from '../asset/menus/butterfly.jpg';
import chickenUdon from '../asset/menus/Chicken Udon.jpg';
import ebi from '../asset/menus/ebi.jpg';
import edamame from '../asset/menus/Edamame.jpg';
import kaisoSalad from '../asset/menus/Green Kaiso Salad.jpg';
import hamachi from '../asset/menus/hamachi.jpg';
import hokkigai from '../asset/menus/Hokkigai.jpg';
import iceCream from '../asset/menus/iceCream.jpg';
import ikura from '../asset/menus/ikura.jpg';
import juice from '../asset/menus/juice.jpg';
import kaisoUdon from '../asset/menus/Kaiso Udon.jpg';
import kakiAgeDon from '../asset/menus/Kaki-Age-Don.jpg';
import karaAge from '../asset/menus/Kara-Age.jpg';
import KatsuDon from '../asset/menus/Katsu-Don.jpg';
import maguro from '../asset/menus/Maguro.jpg';
import matchaTea from '../asset/menus/matcha-tea.jpg';
import mochi from '../asset/menus/mochi.jpg';
import oyakoDon from '../asset/menus/Oyako-Don.jpg';
import pudding from '../asset/menus/pudding.jpg';
import sake from '../asset/menus/Sake.jpg';
import shiitake from '../asset/menus/shiitake.jpg';
import soft from '../asset/menus/soft.jpg';
import tako from '../asset/menus/tako.jpeg';
import tamago from '../asset/menus/tamago.png';
import tempuraDon from '../asset/menus/Tempura-Don.jpg';
import tiramisu from '../asset/menus/tiramisu.jpg';
import unagi from '../asset/menus/unagi.jpg';
import unagiDon from '../asset/menus/Unagi-Don.jpg';
import wakameSalad from '../asset/menus/Wakame Salad.jpg';
import yakiUdon from '../asset/menus/Yaki Udon.jpg';
import yakiNasu from '../asset/menus/Yaki-Nasu.jpg';

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
      imgSrc: iceCream,
      description: 'Vanila / Chocolate / Matcha / Red Bean',
    },
    {
      name: 'Pudding',
      price: 4.5,
      imgSrc: pudding,
      description: 'Mango / Berries / Cacao / Vanila',
    },
    {
      name: 'Tiramisu',
      price: 4.5,
      imgSrc: tiramisu,
      description: 'Vanila / Chocolate / Matcha / Red Bean',
    },
    {
      name: 'Mochi',
      price: 4.5,
      imgSrc: mochi,
      description: 'Matcha / Chocolate / Vanila / Red Bean',
    },
  ],
  drinks: [
    {
      name: 'Juice',
      price: 3.5,
      imgSrc: juice,
      description: 'Orange / Lemon / Strawberries',
    },
    {
      name: 'Matcha Tea',
      price: 3.5,
      imgSrc: matchaTea,
    },
    {
      name: 'Soft Drinks',
      price: 3.5,
      imgSrc: soft,
      description: 'Coca / Pepsi / Sprite',
    },
  ],
  appetizers: [
    {
      name: 'Edamame',
      price: 5.95,
      imgSrc: edamame,
      description: 'Boiled young Soya Beans, sprinkled with salt',
    },
    {
      name: 'Agedashi Tofu',
      price: 3.95,
      imgSrc: agedashiTofu,
      description:
        'Lightly fried Bean curb served with Bonito Flakes in Tempura Sauce',
    },
    {
      name: 'Yaki-Nasu',
      price: 5.95,
      imgSrc: yakiNasu,
      description: 'Boiled young Soya Beans, sprinkled with salt',
    },
    {
      name: 'Kara-Age',
      price: 6.95,
      imgSrc: karaAge,
      description: 'Deep fried Chicken with Chef Special Sauce',
    },
  ],
  salads: [
    {
      name: 'Wakame Salad',
      price: 7.95,
      imgSrc: wakameSalad,
      description: 'Seasweed &amp; Mixed Greens with Ginger Dressing',
    },
    {
      name: 'Avocado Salad',
      price: 7.95,
      imgSrc: avocadoSalad,
      description: 'Avocado &amp; Mixed Greens with Ginger Dressing',
    },
    {
      name: 'Green Kaiso Salad',
      price: 6.95,
      imgSrc: kaisoSalad,
      description: 'Marinated Seaweeds',
    },
  ],
  rice: [
    {
      name: 'Tempura-Don',
      price: 10.95,
      imgSrc: tempuraDon,
      description: '',
    },
    {
      name: 'Kaki-Age-Don',
      price: 10.95,
      imgSrc: kakiAgeDon,
      description: 'Tempura Seafood with Vegetables bed on Rice',
    },
    {
      name: 'Katsu-Don',
      price: 11.95,
      imgSrc: KatsuDon,
      description: 'Breaded Pork with Onions & Egg bed on Rice',
    },
    {
      name: 'Unagi-Don',
      price: 14.95,
      imgSrc: unagiDon,
      description: 'Grilled freshwater Eel bed on Rice',
    },
    {
      name: 'Oyako-Don',
      price: 10.95,
      imgSrc: oyakoDon,
      description: 'Chicken with Onions & Egg bed on Rice',
    },
  ],
  noodles: [
    {
      name: 'Chicken Udon',
      price: 11.95,
      imgSrc: chickenUdon,
      description: 'Grilled Chicken',
    },
    {
      name: 'Shiitake Udon',
      price: 11.95,
      imgSrc: shiitake,
      description: 'Japanese Mushroom with Noodles in Fish Broth',
    },
    {
      name: 'Kaiso Udon',
      price: 10.95,
      imgSrc: kaisoUdon,
      description: 'Seaweed with Noodles in Fish Broth',
    },
    {
      name: 'Yaki Udon',
      price: 12.95,
      imgSrc: yakiUdon,
      description: 'Pan Fried Noodles with seafood and vegetable',
    },
  ],
  sashimi: [
    {
      name: 'Hamachi',
      price: 5.95,
      imgSrc: hamachi,
      description: 'Yellow Tail',
    },
    {
      name: 'Unagi',
      price: 5.95,
      imgSrc: unagi,
      description: 'BBQ Eel',
    },
    {
      name: 'Ebi',
      price: 5.95,
      imgSrc: ebi,
      description: 'Tiger Shrimp',
    },
    {
      name: 'Ikura',
      price: 5.95,
      imgSrc: ikura,
      description: 'Salmon Rose',
    },
    {
      name: 'Tako',
      price: 5.95,
      imgSrc: tako,
      description: 'Octopus',
    },
    {
      name: 'Amaebi',
      price: 5.95,
      imgSrc: amaebi,
      description: 'Sweet Shrimp',
    },
    {
      name: 'Tamago',
      price: 4.95,
      imgSrc: tamago,
      description: 'Egg',
    },
    {
      name: 'Butterfish',
      price: 4.95,
      imgSrc: butterfly,
      description: 'Oil fish',
    },
    {
      name: 'Hokkigai',
      price: 4.95,
      imgSrc: hokkigai,
      description: 'Surf Clamp',
    },
    {
      name: 'Maguro',
      price: 5.95,
      imgSrc: maguro,
      description: 'Tuna',
    },
    {
      name: 'Sake',
      price: 4.95,
      imgSrc: sake,
      description: 'Salmon',
    },
  ],
};

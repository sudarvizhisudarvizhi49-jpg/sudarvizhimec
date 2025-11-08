import { MenuItem } from "@/types/menu";
import idliImg from "@/assets/food/idli.jpg";
import dosaImg from "@/assets/food/dosa.jpg";
import vegMealsImg from "@/assets/food/veg-meals.jpg";
import pongalImg from "@/assets/food/pongal.jpg";
import pooriImg from "@/assets/food/poori.jpg";
import curdRiceImg from "@/assets/food/curd-rice.jpg";
import chickenBiryaniImg from "@/assets/food/chicken-biryani.jpg";
import eggCurryImg from "@/assets/food/egg-curry.jpg";
import fishFryImg from "@/assets/food/fish-fry.jpg";
import chicken65Img from "@/assets/food/chicken-65.jpg";
import muttonCurryImg from "@/assets/food/mutton-curry.jpg";
import eggFriedRiceImg from "@/assets/food/egg-fried-rice.jpg";

export const menuItems: MenuItem[] = [
  {
    id: "1",
    name: "Idli (2 pcs)",
    description: "Soft and fluffy steamed rice cakes served with sambar and chutney",
    price: 30,
    category: "veg",
    image: idliImg,
    available: true,
  },
  {
    id: "2",
    name: "Masala Dosa",
    description: "Crispy dosa filled with spiced potato masala",
    price: 45,
    category: "veg",
    image: dosaImg,
    available: true,
  },
  {
    id: "3",
    name: "Veg Meals",
    description: "Complete South Indian thali with rice, sambar, rasam, and curries",
    price: 70,
    category: "veg",
    image: vegMealsImg,
    available: true,
  },
  {
    id: "4",
    name: "Pongal",
    description: "Traditional rice and lentil dish served with sambar and chutney",
    price: 35,
    category: "veg",
    image: pongalImg,
    available: true,
  },
  {
    id: "5",
    name: "Poori Masala",
    description: "Fluffy puris served with potato masala",
    price: 40,
    category: "veg",
    image: pooriImg,
    available: true,
  },
  {
    id: "6",
    name: "Curd Rice",
    description: "Cooling curd rice with tempering and pickle",
    price: 35,
    category: "veg",
    image: curdRiceImg,
    available: true,
  },
  {
    id: "7",
    name: "Chicken Biryani",
    description: "Aromatic basmati rice layered with spiced chicken",
    price: 120,
    category: "nonveg",
    image: chickenBiryaniImg,
    available: true,
  },
  {
    id: "8",
    name: "Egg Curry",
    description: "Boiled eggs in rich tomato-onion gravy",
    price: 60,
    category: "nonveg",
    image: eggCurryImg,
    available: true,
  },
  {
    id: "9",
    name: "Fish Fry",
    description: "Crispy fried fish marinated with South Indian spices",
    price: 100,
    category: "nonveg",
    image: fishFryImg,
    available: true,
  },
  {
    id: "10",
    name: "Chicken 65",
    description: "Spicy deep-fried chicken appetizer",
    price: 90,
    category: "nonveg",
    image: chicken65Img,
    available: true,
  },
  {
    id: "11",
    name: "Mutton Curry",
    description: "Tender mutton pieces in spicy curry",
    price: 130,
    category: "nonveg",
    image: muttonCurryImg,
    available: true,
  },
  {
    id: "12",
    name: "Egg Fried Rice",
    description: "Fried rice tossed with eggs and vegetables",
    price: 70,
    category: "nonveg",
    image: eggFriedRiceImg,
    available: true,
  },
];

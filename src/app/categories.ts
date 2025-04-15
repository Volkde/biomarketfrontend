import AgricultureIcon from "@mui/icons-material/Agriculture"; // Фрукты и овощи
import BakeryDiningIcon from "@mui/icons-material/BakeryDining"; // Выпечка
import EggIcon from "@mui/icons-material/Egg"; // Молочные продукты и яйца
import SetMealIcon from "@mui/icons-material/SetMeal"; // Мясо и рыба

export const categories: Record<
  string,
  { id?: number; title: string; path: string; icon: any }
> = {
  fruits: {
    id: 0,
    title: "Fruits & Vegetables",
    path: "/shop?category=fruits",
    icon: AgricultureIcon
  },
  dairy: {
    id: 1,
    title: "Dairy & Eggs",
    path: "/shop?category=dairy",
    icon: EggIcon
  },
  bakery: {
    id: 2,
    title: "Bakery",
    path: "/shop?category=bakery",
    icon: BakeryDiningIcon
  },
  meat: {
    id: 3,
    title: "Meat & Fish",
    path: "/shop?category=meat",
    icon: SetMealIcon
  }
};

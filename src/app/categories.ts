import {
  Agriculture as AgricultureIcon,
  BakeryDining as BakeryDiningIcon,
  Egg as EggIcon,
  SetMeal as SetMealIcon,
  Spa as SpaIcon
} from "@mui/icons-material";

export const categories: Record<
  string,
  { id?: number; title: string; description?: string; path: string; icon: any }
> = {
  dairy: {
    id: 1,
    title: "Dairy",
    description: "Fresh dairy products from German farms",
    path: "/shop?category=dairy",
    icon: EggIcon
  },
  meat: {
    id: 2,
    title: "Meat",
    description: "Traditional German meat specialties",
    path: "/shop?category=meat",
    icon: SetMealIcon
  },
  vegetables: {
    id: 3,
    title: "Vegetables",
    description: "Locally grown organic vegetables",
    path: "/shop?category=vegetables",
    icon: SpaIcon
  },
  fruits: {
    id: 4,
    title: "Fruits",
    description: "Seasonal fruits from German orchards",
    path: "/shop?category=fruits",
    icon: AgricultureIcon
  },

  bakery: {
    id: 5,
    title: "Bakery",
    description: "Artisan breads and pastries",
    path: "/shop?category=bakery",
    icon: BakeryDiningIcon
  }
};

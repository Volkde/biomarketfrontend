import { Category } from "./Category";
import { ProductImage } from "./ProductImage";

/**
 * Интерфейс отзыва о продукте
 */
export interface ProductReview {
  id: number | string;
  author: string;
  rating: number;
  text: string;
  date: string;
}

/**
 * Унифицированный интерфейс продукта для всего приложения
 */
export interface Product {
  // Основные поля
  id: string | number;
  name: string;
  title?: string;
  description?: string;
  shortDescription?: string; // Краткое УТП для отображения в карточке
  
  // Цены и скидки
  price: number;
  oldPrice?: number;
  discounted?: boolean;
  
  // Изображения
  images?: ProductImage[];
  image?: string; // Для обратной совместимости
  
  // Наличие
  quantity: number;
  inStock?: boolean;
  
  // Рейтинг и отзывы
  rating?: number;
  reviews?: ProductReview[] | number; // Может быть массивом отзывов или их количеством
  
  // Метки и категории
  isHot?: boolean;
  isSale?: boolean;
  isNew?: boolean;
  isOrganic?: boolean;
  isLimited?: boolean;
  featured?: boolean;
  category?: string | Category;
  
  // Дополнительная информация
  seller_id?: number;
  dateProduction?: string;
  dateExperetion?: string;
}

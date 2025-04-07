import axios from "axios";
import { Product } from "../components/ProductCard/ui/Root/types";

/**
 * Адаптер для преобразования данных продукта с бэкенда в формат фронтенда
 */
export const adaptProductFromBackend = (backendProduct: any): Product => {
  return {
    id: String(backendProduct.id),
    name: backendProduct.title,
    title: backendProduct.title,
    price: Number(backendProduct.price),
    oldPrice: backendProduct.discounted ? Number(backendProduct.price) * 1.2 : undefined,
    rating: backendProduct.rating,
    images: backendProduct.image ? [{ id: 1, url: backendProduct.image }] : [],
    isHot: false, // Поле отсутствует на бэкенде
    isSale: backendProduct.discounted,
    description: backendProduct.description,
    quantity: backendProduct.inStock ? 10 : 0, // Преобразуем inStock в quantity
    discounted: backendProduct.discounted
  };
};

// Используем относительный URL для избежания CORS ошибок
// В режиме разработки Vite будет проксировать запросы к /api на сервер
const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || process.env.REACT_APP_API_URL || 'http://localhost:8080',
  headers: {
    'Authorization': `Bearer ${localStorage.getItem('token') || ''}`,
    'Content-Type': 'application/json'
  },
  timeout: 10000, // Увеличиваем таймаут для надежности
});

// Add request interceptor for logging
api.interceptors.request.use(config => {
  console.log("Sending request to:", config.url);
  return config;
});

// Add response interceptor for logging and data adaptation
api.interceptors.response.use(
  response => {
    console.log("Received response:", response.status, response.data);
    
    // Адаптируем данные продуктов с бэкенда
    if (response.config.url?.includes('/products')) {
      console.log('Processing products response:', response.config.url);
      
      // Проверяем, это запрос одного продукта или списка
      const isDetailRequest = /\/products\/\d+$/.test(response.config.url);
      
      if (isDetailRequest && response.data) {
        // Если это запрос одного продукта
        console.log('Processing detail product response');
        if (response.data.product) {
          // Если данные в формате { product: {...} }
          console.log('Product data is wrapped in product object');
          // Не адаптируем данные здесь, это будет сделано в компоненте
        } else {
          // Если данные не обернуты
          console.log('Adapting single product data');
          // Не адаптируем данные здесь, это будет сделано в компоненте
        }
      } else {
        // Это запрос списка продуктов
        console.log('Processing products list response');
        
        if (response.data && Array.isArray(response.data.products)) {
          // Если данные в формате { products: [] }
          console.log('Products data is in format { products: [] }');
          response.data.products = response.data.products.map(adaptProductFromBackend);
        } else if (Array.isArray(response.data)) {
          // Если данные в формате []
          console.log('Products data is in format []');
          response.data = {
            products: response.data.map(adaptProductFromBackend)
          };
        }
      }
    }
    
    return response;
  },
  error => {
    console.error("Request failed:", error.response?.status, error.message);
    console.error("Request URL:", error.config?.url);
    console.error("Request method:", error.config?.method);
    
    // Если получаем 403 при запросе к корзине, возвращаем пустую корзину без мок-данных
    if (error.response?.status === 403 && error.config.url?.includes('/cart')) {
      console.warn('Запрос к корзине требует авторизации. Возвращаем пустую корзину.');
      return Promise.resolve({
        data: {
          products: []
        }
      });
    }
    
    // Добавляем дополнительное логирование для отладки
    if (error.response?.data) {
      console.error("Error response data:", error.response.data);
    }
    
    return Promise.reject(error);
  },
);

export default api;

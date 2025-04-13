export const formatPrice = (price: number, currency: 'EUR' | 'RUB' = 'EUR'): string => {
  const currencyConfig = {
    EUR: {
      locale: 'en-EU',
      currency: 'EUR',
      minDigits: 2,
      maxDigits: 2
    },
    RUB: {
      locale: 'ru-RU',
      currency: 'RUB',
      minDigits: 0,
      maxDigits: 0
    }
  };

  const config = currencyConfig[currency];
  
  return new Intl.NumberFormat(config.locale, {
    style: 'currency',
    currency: config.currency,
    minimumFractionDigits: config.minDigits,
    maximumFractionDigits: config.maxDigits
  }).format(price);
};
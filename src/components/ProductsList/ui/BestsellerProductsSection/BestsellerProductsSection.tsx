/**
 * Секция с хитами продаж
 * 
 * @param products - массив продуктов
 * @param title - заголовок секции
 * @param subtitle - подзаголовок секции
 * @param seeAllLink - ссылка "Посмотреть все"
 * 
 * @example
 * // Пример использования
 * <BestsellerProductsSection
 *   products={products}
 *   title="Хиты продаж"
 *   subtitle="Наши самые популярные товары"
 *   seeAllLink="/bestsellers"
 * />
 */
const BestsellerProductsSection = ({
  products,
  title = 'Хиты продаж',
  subtitle = 'Наши самые популярные товары',
  seeAllLink = '/bestsellers',
}: BestsellerProductsSectionProps) => {
  return (
    <StyledSection>
      <StyledSectionHeader>
        <div>
          <StyledSectionTitle>{title}</StyledSectionTitle>
          <StyledSectionSubtitle>{subtitle}</StyledSectionSubtitle>
        </div>
        <StyledSeeAllLink href={seeAllLink}>
          Посмотреть все
        </StyledSeeAllLink>
      </StyledSectionHeader>
      
      {/* Здесь будет ProductGrid с продуктами */}
    </StyledSection>
  );
};

export default BestsellerProductsSection;

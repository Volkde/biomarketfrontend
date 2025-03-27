/**
 * Секция с выделенными продуктами
 * 
 * @param products - массив продуктов
 * @param title - заголовок секции
 * @param subtitle - подзаголовок секции
 * @param seeAllLink - ссылка "Посмотреть все"
 * 
 * @example
 * // Пример использования
 * <FeaturedProductsSection
 *   products={products}
 *   title="Выделенные продукты"
 *   subtitle="Наши рекомендованные товары"
 *   seeAllLink="/featured"
 * />
 */
const FeaturedProductsSection = ({
  products,
  title = 'Выделенные продукты',
  subtitle = 'Наши рекомендованные товары',
  seeAllLink = '/featured',
}: FeaturedProductsSectionProps) => {
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

export default FeaturedProductsSection;

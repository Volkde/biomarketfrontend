import { CountdownTimer } from "../CountdownTimer";
import {
  StyledSection,
  StyledSectionHeader,
  StyledSectionSubtitle,
  StyledSectionTitle,
  StyledSeeAllLink,
} from "./styles";
import { SaleProductsSectionProps } from "./types";

/**
 * Секция с продуктами со скидками
 *
 * @param products - массив продуктов
 * @param title - заголовок секции
 * @param subtitle - подзаголовок секции
 * @param seeAllLink - ссылка "Посмотреть все"
 * @param deadline - дата окончания акции
 *
 * @example
 * // Пример использования
 * <SaleProductsSection
 *   products={products}
 *   title="Скидки"
 *   subtitle="Специальные предложения"
 *   seeAllLink="/sale"
 *   deadline={new Date('2025-03-31')}
 * />
 */
const SaleProductsSection = ({
  products,
  title = "Скидки",
  subtitle = "Специальные предложения",
  seeAllLink = "/sale",
  deadline,
}: SaleProductsSectionProps) => {
  return (
    <StyledSection>
      <StyledSectionHeader>
        <div>
          <StyledSectionTitle>{title}</StyledSectionTitle>
          <StyledSectionSubtitle>{subtitle}</StyledSectionSubtitle>
        </div>
        <StyledSeeAllLink href={seeAllLink}>Посмотреть все</StyledSeeAllLink>
      </StyledSectionHeader>

      {deadline && <CountdownTimer deadline={deadline} size="medium" />}

      {/* Здесь будет ProductGrid с продуктами */}
    </StyledSection>
  );
};

export default SaleProductsSection;

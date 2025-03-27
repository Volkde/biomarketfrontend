import { TabsProps } from './types';
import { StyledTabs, StyledTab } from './styles';

/**
 * Компонент вкладок для переключения между категориями продуктов
 * 
 * @param tabs - массив вкладок с label и value
 * @param value - текущее значение активной вкладки
 * @param onChange - callback при изменении вкладки
 * @param variant - тип отображения (fullWidth или standard)
 * @param color - цветовая схема (primary, secondary, inherit)
 * 
 * @example
 * // Пример использования
 * <Tabs
 *   tabs={[
 *     { label: 'All', value: 'all' },
 *     { label: 'New', value: 'new' },
 *     { label: 'Sale', value: 'sale' }
 *   ]}
 *   value="all"
 *   onChange={(value) => {}}
 * />
 */
const Tabs = ({
  tabs,
  value,
  onChange,
  variant = 'standard',
  color = 'primary',
}: TabsProps) => {
  return (
    <StyledTabs>
      {tabs.map((tab) => (
        <StyledTab
          key={tab.value}
          isActive={value === tab.value}
          onClick={() => onChange(tab.value)}
        >
          {tab.icon && <span>{tab.icon}</span>}
          <span>{tab.label}</span>
        </StyledTab>
      ))}
    </StyledTabs>
  );
};

export default Tabs;

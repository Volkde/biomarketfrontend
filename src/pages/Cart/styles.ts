import { styled } from "@mui/material/styles";

export const Wrapper = styled('div')`
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
`;

export const Title = styled('h2')`
  font-size: 24px;
  margin-bottom: 20px;
  text-align: center;
`;

export const List = styled('div')`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const CartItemWrapper = styled('div')`
  display: flex;
  align-items: flex-start;
  padding: 20px;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

export const ProductImage = styled('img')`
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 4px;
  margin-right: 20px;
`;

export const Info = styled('div')`
  flex-grow: 1;
  margin-bottom: 15px;
`;

export const Name = styled('h3')`
  font-size: 18px;
  margin: 0 0 4px 0;
  color: #333;
`;

export const SKU = styled('p')`
  font-size: 14px;
  color: #666;
  margin: 0 0 4px 0;
`;

export const PricePerUnit = styled('div')`
  font-size: 16px;
  color: #666;
  margin-left: 20px;
`;

export const Unit = styled('span')`
  font-size: 14px;
  color: #666;
  display: block;
  margin-bottom: 8px;
`;

export const Controls = styled('div')`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 10px;
  padding-top: 10px;
  border-top: 1px solid #eee;
`;

export const Quantity = styled('span')`
  font-size: 16px;
  padding: 0 10px;
  min-width: 20px;
  text-align: center;
`;

export const Price = styled('span')`
  font-size: 18px;
  font-weight: 600;
  margin-left: auto;
  margin-right: 20px;
  color: #2e7d32;
`;

export const Total = styled('div')`
  font-size: 24px;
  font-weight: 600;
  text-align: right;
  margin: 20px 0;
  color: #2e7d32;
`;

export const Actions = styled('div')`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 20px;
`;
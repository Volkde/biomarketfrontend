import styled from "@emotion/styled";

export const Wrapper = styled.div`
  max-width: 720px;
  margin: 0 auto;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const Title = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
`;

export const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const CartItem = styled.div`
  display: flex;
  gap: 1rem;
  padding: 1rem;
  border: 1px solid #e0e0e0;
  border-radius: 0.75rem;
  background-color: #fafafa;
  transition: box-shadow 0.2s ease;

  &:hover {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);
  }
`;

export const ProductImage = styled.img`
  width: 90px;
  height: 90px;
  object-fit: cover;
  border-radius: 0.5rem;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

export const Name = styled.div`
  font-size: 1.125rem;
  font-weight: 600;
`;

export const Vendor = styled.div`
  font-size: 0.875rem;
  color: #666;
`;

export const Unit = styled.div`
  font-size: 0.875rem;
  color: #444;
`;

export const Controls = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 0.75rem;
  flex-wrap: wrap;
`;

export const Quantity = styled.span`
  min-width: 2rem;
  text-align: center;
`;

export const Price = styled.span`
  margin-left: auto;
  font-weight: 600;
  font-size: 1rem;
`;

export const Total = styled.div`
  text-align: right;
  font-size: 1.5rem;
  font-weight: bold;
`;

export const Actions = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 0.75rem;
`;

import styled from 'styled-components';
import { FaTimes } from 'react-icons/fa';

interface Product {
  id: string;
  name: string;
  price: number;
  image?: string;
  category?: string;
  description?: string;
}

interface ProductQuickViewModalProps {
  product: Product;
  onClose: () => void;
}

const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 3000;
`;

const Modal = styled.div`
  background: white;
  border-radius: 16px;
  padding: 24px;
  width: 100%;
  max-width: 500px;
  position: relative;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.2);
`;

const CloseButton = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  background: transparent;
  border: none;
  cursor: pointer;
  color: #999;

  &:hover {
    color: #333;
  }

  svg {
    width: 18px;
    height: 18px;
  }
`;

const ProductImage = styled.img`
  width: 100%;
  border-radius: 12px;
  margin-bottom: 16px;
  object-fit: cover;
`;

const Title = styled.h2`
  margin-bottom: 8px;
  font-size: 22px;
  color: #333;
`;

const Price = styled.p`
  font-size: 18px;
  color: #4b8a08;
  margin-bottom: 12px;
`;

const Description = styled.p`
  color: #666;
  font-size: 14px;
  line-height: 1.5;
`;

const ProductQuickViewModal = ({ product, onClose }: ProductQuickViewModalProps) => (
  <Backdrop onClick={onClose}>
    <Modal onClick={(e) => e.stopPropagation()}>
      <CloseButton onClick={onClose}>
        <FaTimes />
      </CloseButton>
      {product.image && (
        <ProductImage src={product.image} alt={product.name} />
      )}
      <Title>{product.name}</Title>
      <Price>{product.price} ₽</Price>
      <Description>{product.description || 'Описание скоро появится...'}</Description>
    </Modal>
  </Backdrop>
);

export default ProductQuickViewModal;

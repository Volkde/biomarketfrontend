import { Box } from '@mui/material';
import { FaTimes } from 'react-icons/fa';
import { Backdrop, Modal, CloseButton } from './styles';

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

const ProductQuickViewModal = ({ product, onClose }: ProductQuickViewModalProps) => {
  return (
    <Backdrop onClick={onClose}>
      <Modal onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={onClose}>
          <FaTimes />
        </CloseButton>
        <Box>
          <img src={product.image} alt={product.name} style={{ width: '100%', borderRadius: '8px' }} />
          <Box mt={2}>
            <h3>{product.name}</h3>
            <p>${product.price}</p>
            <p>{product.description}</p>
          </Box>
        </Box>
      </Modal>
    </Backdrop>
  );
};

export default ProductQuickViewModal;
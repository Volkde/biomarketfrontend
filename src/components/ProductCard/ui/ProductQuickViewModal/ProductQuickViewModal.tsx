import React from 'react';
import { Dialog, DialogContent, DialogTitle, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { Product } from '../Root/types';
import { ModalContainer, ProductDetails, ProductImage, ProductInfo } from './styles';

interface ProductQuickViewModalProps {
  open: boolean;
  onClose: () => void;
  product: Product;
}

export const ProductQuickViewModal = ({ open, onClose, product }: ProductQuickViewModalProps) => (
  <Dialog
    open={open}
    onClose={onClose}
    maxWidth="md"
    fullWidth
    PaperProps={{
      sx: {
        height: '90vh',
        display: 'flex',
        flexDirection: 'column',
      },
    }}
  >
    <DialogTitle sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      Product Details
      <IconButton onClick={onClose} size="small">
        <CloseIcon />
      </IconButton>
    </DialogTitle>
    <DialogContent>
      <ModalContainer>
        <ProductImage src={product.images?.[0]?.url || ''} alt={product.name} />
        <ProductDetails>
          <ProductInfo>
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <div>
              <strong>Price:</strong> ${product.price}
            </div>
          </ProductInfo>
        </ProductDetails>
      </ModalContainer>
    </DialogContent>
  </Dialog>
);

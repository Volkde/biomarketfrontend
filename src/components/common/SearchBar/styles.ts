import styled from "styled-components";

export const SearchContainer = styled.div`
  position: relative;
  width: 50%;
  max-width: 100%;
  z-index: 2000;
  
  .spin-animation {
    animation: spin 1s linear infinite;
  }
  
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

export const SearchInput = styled.input`
  width: 100%;
  padding: 12px 45px 12px 15px;
  border: 1px solid #ddd;
  border-radius: 50px;
  background: white;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  font-size: 16px;
  color: #333;
  outline: none;
  transition: all 0.3s ease;

  &:focus {
    border-color: #28a745;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
  }

  &::placeholder {
    color: #888;
    font-weight: 400;
    opacity: 1;
  }
`;

export const ClearButton = styled.button`
  position: absolute;
  right: 100px;
  top: 50%;
  transform: translateY(-50%);
  background: transparent;
  color: #888;
  border: none;
  padding: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  
  &:hover {
    color: #333;
  }
  
  svg {
    width: 14px;
    height: 14px;
  }
`;

export const ErrorMessage = styled.div`
  padding: 10px;
  color: #e74c3c;
  font-size: 14px;
  text-align: center;
`;

export const EmptyMessage = styled.div`
  padding: 10px;
  color: #7f8c8d;
  font-size: 14px;
  text-align: center;
`;

export const ProductImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 4px;
  object-fit: cover;
  margin-right: 10px;
`;

export const ProductInfo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const ProductName = styled.span`
  font-weight: 500;
  color: #333;
`;

export const ProductCategory = styled.span`
  font-size: 12px;
  color: #7f8c8d;
  margin-top: 2px;
`;

export const ProductPrice = styled.span`
  font-weight: 600;
  color: #4b8a08;
`;

export const SearchButton = styled.button`
  position: absolute;
  right: 4px;
  top: 50%;
  transform: translateY(-50%);
  background: #4b8a08;
  color: white;
  border: none;
  padding: 8px;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.3s ease;

  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);

  &:hover {
    background: #6ab04c;
    transform: translateY(-50%) scale(1.05);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  }

  svg {
    width: 18px;
    height: 18px;
  }
`;

export const SuggestionsList = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  background: white;
  border-radius: 10px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.15);
  list-style: none;
  padding: 10px;
  margin-top: 5px;
  z-index: 10;
  max-height: 350px;
  overflow-y: auto;
  
  &::-webkit-scrollbar {
    width: 6px;
  }
  
  &::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 10px;
  }
  
  &::-webkit-scrollbar-thumb {
    background: #c1c1c1;
    border-radius: 10px;
  }
  
  &::-webkit-scrollbar-thumb:hover {
    background: #a8a8a8;
  }
`;

export const SuggestionItem = styled.li`
  padding: 10px 12px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all 0.2s ease;
  border-radius: 6px;
  margin-bottom: 5px;

  &:hover {
    background: #f5f5f5;
    transform: translateX(3px);
  }

  &:last-child {
    margin-bottom: 0;
  }
`;


export const VoiceButton = styled.button<{ isListening: boolean }>`
  position: absolute;
  right: 40px;
  top: 50%;
  transform: translateY(-50%);
  background: ${({ isListening }) => (isListening ? '#ff4444' : '#4b8a08')};
  color: white;
  border: none;
  padding: 8px;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: ${({ isListening }) => (isListening ? '#cc0000' : '#6ab04c')};
    transform: translateY(-50%) scale(1.05);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  }
  
  svg {
    width: 18px;
    height: 18px;
  }
`;

import styled from "styled-components";

export const SearchContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
`;

export const SearchInput = styled.input`
  width: 100%;
  padding: 12px 45px 12px 15px;
  border: none;
  border-radius: 50px;
  background: white;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  font-size: 16px;
  color: #555;
  outline: none;

  &::placeholder {
    color: #aaa;
  }
`;

export const SearchButton = styled.button`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  background: #5b8930;
  color: white;
  border: none;
  padding: 8px;
  border-radius: 50%;
  cursor: pointer;
  transition: background 0.3s;

  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;

  &:hover {
    background: #4a7725;
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
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  list-style: none;
  padding: 10px;
  margin-top: 5px;
  z-index: 10;
`;

export const SuggestionItem = styled.li`
  padding: 8px 12px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  transition: background 0.2s;

  &:hover {
    background: #f2f2f2;
  }
`;


export const VoiceButton = styled.button<{ isListening: boolean }>`
  position: absolute;
  right: 60px;
  top: 50%;
  transform: translateY(-50%);
  background: ${({ isListening }) => (isListening ? '#ff4444' : '#5b8930')};
  color: white;
  border: none;
  padding: 8px;
  border-radius: 50%;
  cursor: pointer;
  transition: background 0.3s;

  &:hover {
    background: ${({ isListening }) => (isListening ? '#cc0000' : '#4a7725')};
  }
`;
